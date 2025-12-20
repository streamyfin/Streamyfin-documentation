# Development Environment Setup

Set up your development environment to contribute to StreamyFin or build custom plugins.

## Prerequisites

### System Requirements

**Development Machine:**
- **OS**: macOS 12+ (for iOS), Windows 10+ or Linux (for Android)
- **RAM**: 16GB minimum, 32GB recommended
- **Storage**: 50GB free space for development tools
- **Network**: Stable internet connection for dependencies

**Mobile Device:**
- **iOS**: iPhone running iOS 13+ for testing
- **Android**: Android 7.0+ device with Developer Options enabled
- **Hardware**: Physical device recommended over simulators

### Required Tools

**Core Development:**
```bash
# Node.js and package managers
Node.js 18+ (LTS recommended)
npm 9+ or yarn 1.22+
npx (comes with npm)

# React Native CLI
npm install -g @react-native-community/cli

# Platform-specific tools (see below)
```

**iOS Development (macOS only):**
```bash
# Xcode and command line tools
Xcode 14+ (from Mac App Store)
xcode-select --install

# iOS Simulator
# Included with Xcode

# CocoaPods
sudo gem install cocoapods
```

**Android Development:**
```bash
# Android Studio
# Download from developer.android.com

# Android SDK and tools
# Managed through Android Studio

# Java Development Kit
# OpenJDK 11 or Oracle JDK 11
```

## Environment Setup

### Clone and Install

**1. Repository Setup:**
```bash
# Clone the repository
git clone https://github.com/streamyfin/streamyfin.git
cd streamyfin

# Install dependencies
npm install

# iOS-specific setup (macOS only)
cd ios && pod install && cd ..
```

**2. Environment Configuration:**
```bash
# Copy environment template
cp .env.example .env.local

# Configure environment variables
# Edit .env.local with your settings
JELLYFIN_SERVER_URL=http://your-jellyfin-server:8096
SEERR_SERVER_URL=http://your-seerr-server:5055
```

### Platform Setup

**iOS Setup (macOS):**
```bash
# Open iOS project in Xcode
open ios/StreamyFin.xcworkspace

# Configure signing
# 1. Select project in navigator
# 2. Select target under TARGETS
# 3. Go to Signing & Capabilities
# 4. Select your development team
# 5. Ensure bundle identifier is unique
```

**Android Setup:**
```bash
# Open Android project
cd android
./gradlew clean

# Configure signing (for release builds)
# Create android/app/release.keystore
# Edit android/app/build.gradle signing config
```

### Development Server

**Start Metro Bundler:**
```bash
# Terminal 1: Start Metro
npm start

# Terminal 2: Run on iOS
npm run ios

# Terminal 3: Run on Android
npm run android
```

**Development Features:**
- Hot reload for rapid development
- Chrome DevTools for debugging
- React DevTools integration
- Network request monitoring

## Development Workflow

### Code Organization

**Project Structure:**
```
streamyfin/
├── src/
│   ├── components/     # Reusable UI components
│   ├── screens/        # Screen components
│   ├── navigation/     # Navigation configuration
│   ├── services/       # API and business logic
│   ├── hooks/          # Custom React hooks
│   ├── utils/          # Utility functions
│   ├── types/          # TypeScript type definitions
│   └── assets/         # Images, fonts, etc.
├── android/            # Android-specific code
├── ios/                # iOS-specific code
├── plugins/            # Plugin development
└── docs/              # Documentation
```

**Coding Standards:**
- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Husky for pre-commit hooks
- Jest for unit testing

### Version Control

**Git Workflow:**
```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes and commit
git add .
git commit -m "feat: add new feature"

# Push and create pull request
git push origin feature/new-feature
```

**Commit Conventions:**
```
feat: new feature
fix: bug fix
docs: documentation changes
style: formatting changes
refactor: code refactoring
test: test additions/changes
chore: build process or tool changes
```

### Testing

**Run Tests:**
```bash
# Unit tests
npm test

# End-to-end tests
npm run test:e2e

# Type checking
npm run type-check

# Linting
npm run lint
```

**Testing Strategy:**
- Unit tests for utility functions
- Component tests for UI elements
- Integration tests for API calls
- E2E tests for critical user flows

## Debugging

### React Native Debugging

**Chrome DevTools:**
1. Enable Debug JS Remotely in dev menu
2. Open Chrome to `chrome://inspect`
3. Click on "Open dedicated DevTools for Node"
4. Debug as normal JavaScript

**React DevTools:**
```bash
# Install React DevTools
npm install -g react-devtools

# Run React DevTools
react-devtools
```

### Platform-Specific Debugging

**iOS Debugging:**
```bash
# Xcode debugger
# Set breakpoints in native code
# Use Xcode console for native logs

# iOS Simulator logs
xcrun simctl spawn booted log stream --predicate 'eventMessage contains "StreamyFin"'
```

**Android Debugging:**
```bash
# Android Studio debugger
# Set breakpoints in Java/Kotlin code
# Use Logcat for native logs

# ADB logs
adb logcat | grep StreamyFin
```

### Performance Profiling

**React Native Performance:**
- Flipper for performance monitoring
- React DevTools Profiler
- Native performance tools
- Memory leak detection

**Performance Tools:**
```bash
# Install Flipper
npm install --save-dev react-native-flipper

# Profile bundle size
npm run analyze-bundle

# Memory profiling
npm run profile-memory
```

## Plugin Development

### Plugin SDK Setup

**Install Plugin SDK:**
```bash
# Install SDK
npm install @streamyfin/plugin-sdk

# Create new plugin
npx create-streamyfin-plugin my-plugin
cd my-plugin
npm install
```

**Plugin Development:**
```typescript
// src/index.ts
import { StreamyFinPlugin } from '@streamyfin/plugin-sdk';

export default class MyPlugin extends StreamyFinPlugin {
  name = 'My Plugin';
  version = '1.0.0';
  
  async initialize(api: PluginAPI) {
    // Plugin initialization
  }
}
```

**Testing Plugins:**
```bash
# Build plugin
npm run build

# Test in development
npm run test-plugin

# Package for distribution
npm run package
```

## API Development

### Local API Server

**Mock Server Setup:**
```bash
# Install mock server
npm install -g json-server

# Create mock data
echo '{"movies": [], "shows": []}' > db.json

# Start mock server
json-server --watch db.json --port 3001
```

**API Testing:**
```bash
# Install testing tools
npm install -D supertest @types/supertest

# Run API tests
npm run test:api
```

### Jellyfin Development

**Local Jellyfin Setup:**
```bash
# Docker setup for development
docker run -d \
  --name jellyfin \
  -p 8096:8096 \
  -v jellyfin-config:/config \
  -v jellyfin-cache:/cache \
  -v /path/to/media:/media \
  jellyfin/jellyfin:latest
```

## Build and Distribution

### Development Builds

**iOS Development Build:**
```bash
# Build for iOS Simulator
npm run ios

# Build for iOS Device
npm run ios --device

# Archive for distribution
npm run ios:archive
```

**Android Development Build:**
```bash
# Debug build
npm run android

# Release build
npm run android:release

# Generate APK
cd android && ./gradlew assembleRelease
```

### Production Builds

**iOS Production:**
```bash
# Build for App Store
npm run ios:release

# Upload to App Store Connect
# Use Xcode or Application Loader
```

**Android Production:**
```bash
# Build AAB for Play Store
npm run android:bundle

# Build APK for direct distribution
npm run android:apk
```

### Automated CI/CD

**GitHub Actions Example:**
```yaml
name: Build and Test
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm test
      - run: npm run lint
      - run: npm run type-check
```

## Troubleshooting Development Issues

### Common Problems

**Metro Bundle Issues:**
```bash
# Clear Metro cache
npm start --reset-cache

# Clear node modules
rm -rf node_modules && npm install

# Clear watchman cache (macOS)
watchman watch-del-all
```

**iOS Build Issues:**
```bash
# Clean build folder
cd ios && xcodebuild clean

# Update CocoaPods
cd ios && pod install --repo-update

# Clear derived data
rm -rf ~/Library/Developer/Xcode/DerivedData
```

**Android Build Issues:**
```bash
# Clean Gradle cache
cd android && ./gradlew clean

# Clear Gradle daemon
./gradlew --stop

# Update Android SDK
# Update through Android Studio SDK Manager
```

### Performance Issues

**Development Performance:**
- Use physical devices when possible
- Enable Hermes for Android
- Optimize bundle size
- Profile memory usage
- Monitor network requests

**Build Performance:**
- Use incremental builds
- Enable build caching
- Optimize dependencies
- Use parallel builds
- Monitor build times

## Resources and Documentation

### Official Resources
- [React Native Documentation](https://reactnative.dev)
- [TypeScript Handbook](https://typescriptlang.org)
- [Jellyfin API Documentation](https://api.jellyfin.org)

### Development Tools
- [Flipper](https://fbflipper.com) - Debugging platform
- [Reactotron](https://infinite.red/reactotron) - React Native debugging
- [VS Code React Native Tools](https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native)

### Community
- [StreamyFin Discord](https://discord.gg/streamyfin) - Developer chat
- [GitHub Discussions](https://github.com/streamyfin/streamyfin/discussions)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/streamyfin)

## Next Steps

After setting up your development environment:
1. **Read** the [Contributing Guide](contributing.md)
2. **Explore** the [Building Guide](building.md) for advanced build configurations
3. **Join** our community discussions and Discord
4. **Start** with a small contribution or plugin
5. **Review** existing issues and feature requests