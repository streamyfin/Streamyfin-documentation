# Building and Distribution

Complete guide to building, testing, and distributing StreamyFin for both development and production.

## Build System Overview

### Architecture

StreamyFin uses React Native with platform-specific build systems:
- **iOS**: Xcode build system with CocoaPods
- **Android**: Gradle build system with Android SDK
- **Metro**: JavaScript bundler for React Native code
- **Native Modules**: Platform-specific functionality

### Build Types

**Development Builds:**
- Debug symbols included
- Hot reload enabled
- Development server connection
- Debugging tools accessible

**Release Builds:**
- Optimized and minified code
- Production configuration
- Signed for distribution
- Performance optimized

## Development Builds

### Local Development

**Start Development Server:**
```bash
# Start Metro bundler
npm start

# Alternative: Start with cache reset
npm start -- --reset-cache
```

**iOS Development:**
```bash
# Run on iOS Simulator
npm run ios

# Run on specific simulator
npm run ios -- --simulator="iPhone 14 Pro"

# Run on connected iOS device
npm run ios -- --device
```

**Android Development:**
```bash
# Run on Android emulator or device
npm run android

# Run on specific device
npm run android -- --deviceId=<device-id>

# List available devices
adb devices
```

### Development Configuration

**Environment Variables:**
```bash
# .env.development
NODE_ENV=development
API_BASE_URL=http://localhost:3000
ENABLE_FLIPPER=true
DEBUG_NETWORK=true
```

**Debug Features:**
- React DevTools integration
- Network request logging
- Performance monitoring
- Hot reload and fast refresh

### Testing Builds

**Unit Tests:**
```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run tests with coverage
npm test -- --coverage
```

**Integration Tests:**
```bash
# End-to-end tests
npm run test:e2e

# iOS E2E tests
npm run test:e2e:ios

# Android E2E tests
npm run test:e2e:android
```

## Production Builds

### Pre-Build Checklist

**Code Quality:**
```bash
# Type checking
npm run type-check

# Linting
npm run lint

# Format code
npm run format

# Run all tests
npm test && npm run test:e2e
```

**Version Management:**
```bash
# Update version in package.json
npm version patch|minor|major

# Update native app versions
# iOS: Update CFBundleShortVersionString in Info.plist
# Android: Update versionName in build.gradle
```

### iOS Production Builds

**Build Configuration:**
```bash
# Clean previous builds
cd ios && xcodebuild clean

# Install/update pods
cd ios && pod install

# Archive for distribution
npm run ios:archive
```

**Xcode Archive Process:**
1. Open `ios/StreamyFin.xcworkspace` in Xcode
2. Select "Any iOS Device" as build destination
3. Product → Archive
4. Organizer window opens with archives
5. Select archive and click "Distribute App"

**App Store Distribution:**
```bash
# Build and upload to App Store Connect
npm run ios:release

# Alternative: Manual upload via Xcode
# Use Application Loader or Transporter
```

**iOS Build Settings:**
```xml
<!-- ios/StreamyFin/Info.plist -->
<key>CFBundleShortVersionString</key>
<string>2.0.0</string>
<key>CFBundleVersion</key>
<string>100</string>
```

### Android Production Builds

**Build Configuration:**
```bash
# Clean previous builds
cd android && ./gradlew clean

# Generate release APK
npm run android:apk

# Generate release AAB (preferred for Play Store)
npm run android:bundle
```

**Signing Configuration:**
```gradle
// android/app/build.gradle
android {
    signingConfigs {
        release {
            if (project.hasProperty('MYAPP_RELEASE_STORE_FILE')) {
                storeFile file(MYAPP_RELEASE_STORE_FILE)
                storePassword MYAPP_RELEASE_STORE_PASSWORD
                keyAlias MYAPP_RELEASE_KEY_ALIAS
                keyPassword MYAPP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            signingConfig signingConfigs.release
            minifyEnabled enableProguardInReleaseBuilds
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }
}
```

**Gradle Properties:**
```properties
# android/gradle.properties
MYAPP_RELEASE_STORE_FILE=my-release-key.keystore
MYAPP_RELEASE_KEY_ALIAS=my-key-alias
MYAPP_RELEASE_STORE_PASSWORD=*****
MYAPP_RELEASE_KEY_PASSWORD=*****
```

### Code Signing

**iOS Code Signing:**
- Apple Developer Account required
- Development certificates for testing
- Distribution certificates for App Store
- Provisioning profiles for device targeting

**Automatic Signing (Recommended):**
```xml
<!-- Xcode Project Settings -->
Team: Your Development Team
Bundle Identifier: com.streamyfin.app
Automatically manage signing: Enabled
```

**Manual Signing:**
```xml
<!-- For advanced control -->
Code Signing Identity: iPhone Distribution
Provisioning Profile: StreamyFin Distribution Profile
```

**Android Code Signing:**
```bash
# Generate keystore
keytool -genkeypair -v -storetype PKCS12 -keystore my-release-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000

# Verify APK signature
jarsigner -verify -verbose -certs my-app-release.apk
```

## Build Optimization

### Bundle Size Optimization

**JavaScript Bundle:**
```bash
# Analyze bundle size
npm run analyze-bundle

# Enable Hermes (Android)
# android/app/build.gradle
project.ext.react = [
    enableHermes: true
]
```

**Image Optimization:**
- Use WebP format when possible
- Provide multiple resolutions (@1x, @2x, @3x)
- Use vector graphics (SVG) for icons
- Compress images before including

**Dependency Analysis:**
```bash
# Check dependency sizes
npm install -g webpack-bundle-analyzer
npx webpack-bundle-analyzer

# Remove unused dependencies
npm prune
npm audit
```

### Performance Optimization

**iOS Optimizations:**
```objc
// ios/StreamyFin/main.m - Enable release optimizations
#ifdef DEBUG
  return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
#else
  @autoreleasepool {
    return UIApplicationMain(argc, argv, nil, NSStringFromClass([AppDelegate class]));
  }
#endif
```

**Android Optimizations:**
```gradle
// android/app/build.gradle
android {
    buildTypes {
        release {
            minifyEnabled true
            shrinkResources true
            proguardFiles getDefaultProguardFile("proguard-android.txt"), "proguard-rules.pro"
        }
    }
}
```

**ProGuard Configuration:**
```proguard
# android/app/proguard-rules.pro
-keep class com.facebook.react.** { *; }
-keep class com.streamyfin.** { *; }
-dontwarn com.facebook.react.**
```

## Automated Build Pipeline

### GitHub Actions CI/CD

**Build and Test Workflow:**
```yaml
# .github/workflows/build.yml
name: Build and Test

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test -- --coverage --watchAll=false
      
      - name: Run linting
        run: npm run lint
      
      - name: Type check
        run: npm run type-check

  build-ios:
    runs-on: macos-latest
    needs: test
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Install CocoaPods
        run: cd ios && pod install
      
      - name: Build iOS
        run: npm run ios:build

  build-android:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - uses: actions/setup-java@v3
        with:
          distribution: 'zulu'
          java-version: '11'
      
      - name: Setup Android SDK
        uses: android-actions/setup-android@v2
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build Android
        run: npm run android:build
```

**Release Workflow:**
```yaml
# .github/workflows/release.yml
name: Release

on:
  push:
    tags:
      - 'v*'

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Create Release
        uses: actions/create-release@v1
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        with:
          tag_name: ${{ github.ref }}
          release_name: Release ${{ github.ref }}
          draft: false
          prerelease: false
```

### Fastlane Integration

**iOS Fastlane:**
```ruby
# ios/fastlane/Fastfile
platform :ios do
  desc "Push a new beta build to TestFlight"
  lane :beta do
    build_app(scheme: "StreamyFin")
    upload_to_testflight
  end

  desc "Push a new release build to the App Store"
  lane :release do
    build_app(scheme: "StreamyFin")
    upload_to_app_store
  end
end
```

**Android Fastlane:**
```ruby
# android/fastlane/Fastfile
platform :android do
  desc "Submit a new Beta Build to Crashlytics Beta"
  lane :beta do
    gradle(task: "clean assembleRelease")
    crashlytics
  end

  desc "Deploy a new version to the Google Play"
  lane :deploy do
    gradle(task: "clean bundleRelease")
    upload_to_play_store
  end
end
```

## Distribution Channels

### Official App Stores

**iOS App Store:**
1. Build and archive in Xcode
2. Upload to App Store Connect
3. Complete app metadata
4. Submit for review
5. Release when approved

**Google Play Store:**
1. Generate signed AAB
2. Upload to Play Console
3. Complete store listing
4. Submit for review
5. Release to production

### Beta Distribution

**iOS TestFlight:**
```bash
# Upload beta build
npm run ios:beta

# Add beta testers via App Store Connect
```

**Android Beta:**
```bash
# Upload to Play Console beta track
npm run android:beta

# Distribute via internal testing
```

### Direct Distribution

**iOS Ad-Hoc Distribution:**
- Enterprise certificates required
- Device UUIDs must be registered
- Limited to 100 devices per year

**Android APK Distribution:**
```bash
# Generate signed APK for direct distribution
npm run android:apk

# Distribute via website or file sharing
```

## Build Troubleshooting

### Common iOS Issues

**Build Failures:**
```bash
# Clean derived data
rm -rf ~/Library/Developer/Xcode/DerivedData

# Clean build folder
cd ios && xcodebuild clean

# Update CocoaPods
cd ios && pod install --repo-update
```

**Signing Issues:**
- Verify certificate validity
- Check provisioning profiles
- Ensure bundle ID matches
- Update Xcode to latest version

### Common Android Issues

**Gradle Build Failures:**
```bash
# Clean Gradle cache
cd android && ./gradlew clean

# Clear Gradle daemon
./gradlew --stop

# Update Gradle wrapper
./gradlew wrapper --gradle-version 7.6
```

**Memory Issues:**
```gradle
# android/gradle.properties
org.gradle.jvmargs=-Xmx4096m -XX:MaxPermSize=512m -XX:+HeapDumpOnOutOfMemoryError -Dfile.encoding=UTF-8
```

### Performance Issues

**Slow Builds:**
- Enable build caching
- Use incremental builds
- Optimize dependencies
- Increase build machine resources

**Large Bundle Sizes:**
- Enable code splitting
- Remove unused dependencies
- Optimize images and assets
- Use dynamic imports

## Monitoring and Analytics

### Build Monitoring

**Build Success Rates:**
- Monitor CI/CD pipeline success
- Track build time trends
- Identify common failure points
- Set up alerts for failures

**Performance Tracking:**
- Bundle size monitoring
- App startup time
- Memory usage tracking
- Crash reporting integration

### Distribution Analytics

**App Store Analytics:**
- Download and install rates
- User engagement metrics
- Crash and ANR rates
- Performance benchmarks

**Beta Testing Metrics:**
- Beta adoption rates
- Feedback collection
- Issue identification
- Release readiness assessment

## Security Considerations

### Code Obfuscation

**JavaScript Obfuscation:**
```bash
# Install obfuscation tool
npm install --save-dev javascript-obfuscator

# Add to build process
npm run build:obfuscated
```

**Native Code Protection:**
- Enable ProGuard (Android)
- Use code signing certificates
- Implement certificate pinning
- Secure API communications

### Sensitive Data Protection

**Environment Variables:**
- Use secure environment variable storage
- Avoid committing secrets to Git
- Use CI/CD secret management
- Rotate keys regularly

**Runtime Protection:**
- Implement anti-tampering measures
- Use secure storage for sensitive data
- Validate app integrity
- Monitor for security threats

---

This comprehensive build guide ensures reliable, secure, and optimized builds for all distribution channels. Follow these practices for professional-quality releases.