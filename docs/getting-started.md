# Getting Started

Welcome to Streamyfin! This guide will help you get up and running quickly with the most user-friendly Jellyfin client for mobile devices.

## What is Streamyfin?

Streamyfin is a modern, native mobile client for Jellyfin media servers built with Expo. It's designed to provide a seamless, Netflix-like streaming experience on iOS and Android with features specifically optimized for mobile devices.

### Key Features at a Glance

- 🎥 **High-quality streaming** with adaptive bitrate
- 🚀 **Skip intro/credits** with automatic detection
- 📥 **Offline downloads** for watching without internet
- 📡 **Chromecast support** for TV viewing
- 🖼️ **Trickplay images** for visual seeking
- 🤖 **Seerr integration** for content requests
- 🔔 **Push notifications** for server events
- ⚙️ **Plugin-based settings** for centralized management

### Why Choose Streamyfin?

**Mobile-First Design**: Unlike other Jellyfin clients, Streamyfin is built from the ground up for mobile devices with touch-optimized controls and mobile-specific features.

**Modern User Experience**: Clean, intuitive interface inspired by popular streaming services like Netflix and Disney+.

**Active Development**: Regular updates with new features and improvements based on community feedback.

## Quick Start

### Step 1: Install Streamyfin

**iOS (Recommended)**:
- [Download from App Store](https://apps.apple.com/app/streamyfin/id6593660679?l=en-GB)

**Android**:
- [Download from Google Play](https://play.google.com/store/apps/details?id=com.fredrikburmester.streamyfin)
- [Download APK from GitHub](https://github.com/streamyfin/streamyfin/releases/latest)

### Step 2: Prepare Your Jellyfin Server

**Minimum Requirements**:
- Jellyfin server running and accessible
- At least one media library (non-music)
- User account with library access

**Recommended Setup**:
- Recent Jellyfin version (10.8.0 or later)
- [Streamyfin Plugin](advanced/streamyfin-plugin.md) installed
- HTTPS enabled for remote access
- Hardware transcoding configured (if available)

### Step 3: Connect to Your Server

1. **Open Streamyfin** and tap "Add Server"
2. **Enter Server Address**:
   - Local: `http://192.168.1.100:8096`
   - Remote: `https://jellyfin.yourdomain.com`
3. **Sign in** with your Jellyfin username and password
4. **Start streaming** your media!

### Step 4: Optimize Your Experience

**For Best Performance**:
- Enable hardware acceleration on your server
- Configure appropriate transcoding settings
- Set up the Streamyfin Plugin for enhanced features
- Consider Seerr integration for content requests

## Essential Features to Try First

### 🎬 Skip Intro/Credits
- Look for the "Skip Intro" button during TV show episodes
- Credits are automatically skipped at the end of episodes
- Server-side detection ensures accuracy

### 📥 Downloads for Offline Viewing
- Tap the download button on any movie or episode
- Choose quality and let it download in the background
- Watch offline when you don't have internet

### 📡 Cast to Your TV
- Start playing content on your phone
- Tap the cast icon and select your Chromecast
- Control playback from your mobile device

### 🔍 Enhanced Search
- Use the search feature to find content across your library
- Install JellySearch for even faster full-text search
- Browse by genre, year, or other filters

## Advanced Setup (Optional)

### Install Streamyfin Plugin

The [Streamyfin Plugin](advanced/streamyfin-plugin.md) enables powerful server-side features:

1. **Install Plugin** in Jellyfin Dashboard
2. **Configure Settings** for all users centrally
3. **Enable Seerr Integration** for automatic content requests
4. **Set Up Notifications** for server events

### Seerr Integration

[Set up Seerr integration](advanced/seerr-integration.md) to request new content:

1. **Install Seerr** (formerly Jellyseerr) on your server
2. **Configure with Plugin** for automatic user login
3. **Request content** directly from within Streamyfin
4. **Track requests** and get notified when available

### Beta Testing

Join our [beta testing program](beta-testing.md) for early access:

1. **Subscribe** to [Patreon Member tier](https://www.patreon.com/streamyfin)
2. **Join Discord** for beta channels access
3. **Get TestFlight** invitation for iOS
4. **Download APKs** directly for Android

## Troubleshooting Common Issues

### Can't Connect to Server?
- Verify server URL and port (default: 8096)
- Check that Jellyfin server is running
- Ensure device can reach server (try browser test)
- Check firewall settings

### No Libraries Showing?
- Ensure you have at least one non-music library
- Check user permissions in Jellyfin
- Wait for library scan to complete
- Update to latest Jellyfin version

### Videos Won't Play?
- Enable transcoding on Jellyfin server
- Check network connection stability
- Try different quality settings
- Update both app and server

## Next Steps

Now that you're set up, explore these guides:

### Essential Reading
- **[Installation Guide](installation.md)** - Detailed installation for all platforms
- **[Features Overview](features.md)** - Complete feature list and explanations  
- **[User Guide](user-guide/setup.md)** - Comprehensive setup walkthrough

### Advanced Features
- **[Streamyfin Plugin](advanced/streamyfin-plugin.md)** - Centralized settings management
- **[Seerr Integration](advanced/seerr-integration.md)** - Content request system
- **[Downloads Guide](user-guide/downloads.md)** - Offline viewing setup

### Get Involved
- **[Beta Testing](beta-testing.md)** - Early access to new features
- **[Contributing](development/contributing.md)** - Help improve Streamyfin
- **[Discord Community](https://discord.gg/BuGG9ZNhaE)** - Chat with users and developers

## Community and Support

### Join the Community

**Discord**: [Join our server](https://discord.gg/BuGG9ZNhaE) for:
- Real-time community support
- Feature discussions and feedback
- Beta testing channels
- Direct developer communication

**GitHub**: [Visit our repository](https://github.com/streamyfin/streamyfin) for:
- Source code and contributions
- Bug reports and feature requests
- Development discussions
- Release notes and updates

### Get Support

**Need Help?**
- [FAQ](faq.md) - Common questions and answers
- [Troubleshooting Guide](advanced/troubleshooting.md) - Detailed problem solving
- [Discord Support](https://discord.gg/BuGG9ZNhaE) - Community help
- Email: developer@streamyfin.app

**Found a Bug?**
- [GitHub Issues](https://github.com/streamyfin/streamyfin/issues) - Report bugs
- Include device info, app version, and steps to reproduce
- Check existing issues first to avoid duplicates

## What's New?

Stay updated with the latest Streamyfin developments:

- **Star History**: [![Star History Chart](https://api.star-history.com/svg?repos=streamyfin/streamyfin&type=Date&width=400&height=200)](https://star-history.com/#streamyfin/streamyfin&Date)
- **Roadmap**: Check our [project roadmap](https://github.com/users/fredrikburmester/projects/5)
- **Releases**: Follow [GitHub releases](https://github.com/streamyfin/streamyfin/releases)
- **Discord Updates**: Join for announcement channels

Welcome to the Streamyfin community! We hope you enjoy using the app as much as we enjoy building it. 🎉