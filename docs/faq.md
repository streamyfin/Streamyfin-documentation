# Frequently Asked Questions

Common questions and answers about using Streamyfin.

## General Questions

### What is Streamyfin?
Streamyfin is a modern, native mobile client for Jellyfin media servers built with Expo. It provides a seamless streaming experience on iOS and Android with features like offline downloads, Chromecast support, skip intro/credits, and optimized mobile playback.

### Is Streamyfin free?
Yes, Streamyfin is completely free and open-source under the Mozilla Public License 2.0 (MPL-2.0). There are no subscription fees or in-app purchases required for core functionality.

### How does Streamyfin differ from other Jellyfin clients?
- **Mobile-first design**: Built specifically for mobile devices
- **Skip intro/credits**: Automatic detection and skipping
- **Trickplay images**: Visual seeking with thumbnail previews
- **Download support**: Offline viewing with background downloads
- **Streamyfin Plugin**: Centralized settings management
- **Modern UI**: Clean, intuitive interface

### What devices are supported?
- **iOS**: iPhone, iPad, and iPod touch running iOS 13.0 or later
- **Android**: Devices running Android 7.0 (API level 24) or later with ARM64 or x86_64 architecture
- **Android TV**: Separate TV-optimized builds available

### Does Streamyfin support music libraries?
No, Streamyfin currently focuses on video content and doesn't support music libraries. Music support is unlikely in the near future.

## Setup and Connection

### How do I connect to my Jellyfin server?
1. Open Streamyfin and tap "Add Server"
2. Enter your server address (e.g., `http://192.168.1.100:8096` or `https://jellyfin.yourdomain.com`)
3. Enter your Jellyfin username and password
4. Tap "Sign In"

### I can't connect to my server. What should I do?
- **Verify server URL**: Make sure the address is correct
- **Check server status**: Ensure Jellyfin is running and accessible
- **Network connectivity**: Confirm device can reach the server
- **Use IP address**: Try IP instead of hostname
- **Check ports**: Default is 8096, verify your configuration
- **Firewall**: Ensure Jellyfin ports are open
- **HTTPS/SSL**: Verify SSL certificate if using HTTPS

### Why can't I see my libraries in Streamyfin?
1. **Server version**: Ensure you're running a recent Jellyfin version
2. **Library type**: Streamyfin requires at least one non-audio library
3. **Permissions**: Check user has access to libraries
4. **Library scanning**: Ensure libraries have finished scanning

### Can I connect to multiple servers?
Yes! Streamyfin supports multiple server connections. You can add additional servers and switch between them in the settings.

## Features and Functionality

### What are Skip Intro and Skip Credits?
Streamyfin can automatically detect and skip TV show intros and episode credits:
- **Skip Intro**: Appears during episode intros with one-tap skip
- **Skip Credits**: Automatically skip credits at episode end
- **Server Detection**: Uses Jellyfin's intro/credit detection

### How do Trickplay images work?
Trickplay provides thumbnail previews when seeking through content:
- **Visual Seeking**: See preview images while scrubbing
- **Server Generated**: Thumbnails created by Jellyfin server
- **Enhanced Navigation**: Easier to find specific scenes

### What is the Streamyfin Plugin?
The [Streamyfin Plugin](advanced/streamyfin-plugin.md) enables:
- **Centralized settings**: Configure all users from server
- **Automatic Seerr login**: No manual setup required
- **Custom home screens**: Netflix-style layouts
- **Push notifications**: Server event notifications
- **User defaults**: Set preferences for all users

## Downloads and Offline Viewing

### How does downloading work?
Streamyfin converts HLS streams to video files in real-time:
- **Background downloads**: Continue when app is closed
- **Quality selection**: Choose download quality
- **Progress tracking**: Monitor download progress
- **Offline playback**: Watch without internet connection

### Why do downloads take so long?
Downloads involve real-time transcoding which:
- **Server processing**: Jellyfin converts stream during download
- **Network dependent**: Speed limited by connection
- **Quality affects time**: Higher quality = longer download
- **Better compatibility**: Ensures playback on your device

### Can I download on cellular data?
Yes, but be aware of:
- **Data usage**: Large files consume significant data
- **Quality settings**: Consider lower quality for cellular
- **Connection stability**: WiFi recommended for large downloads

## Chromecast and TV Viewing

### How do I cast to my TV?
1. **Same network**: Ensure Chromecast and device on same WiFi
2. **Start playback**: Begin playing content in Streamyfin
3. **Cast button**: Tap the cast icon in player
4. **Select device**: Choose your Chromecast

### Do subtitles work with Chromecast?
Subtitle support for Chromecast is currently in development. Video casting works reliably, with subtitle support being added in future updates.

### Is there an Android TV version?
Yes! Android TV builds are available:
- **Separate builds**: TV-optimized interface
- **Remote navigation**: Designed for TV remotes
- **Large screen**: Optimized for television viewing

## Beta Testing and Advanced Features

### How can I access beta features?
Subscribe to the **Member tier** on [Patreon](https://www.patreon.com/streamyfin):
- **Beta releases**: Access via Discord channels
- **TestFlight**: iOS beta access (manual invitation)
- **APK downloads**: Android beta files
- **Contributors**: Active code contributors get automatic access

### What's included in beta versions?
- **Latest features**: Before public release
- **Enhanced Chromecast**: Advanced casting features
- **Download improvements**: Better download management
- **Bug fixes**: Early access to fixes

## Seerr/Jellyseerr Integration

### What is Seerr integration?
Integration with Seerr (formerly Jellyseerr) allows:
- **Content requests**: Request movies/shows from within app
- **Automatic login**: Via Streamyfin Plugin
- **Status tracking**: Monitor request progress
- **Seamless workflow**: No need to switch apps

### How do I set up Seerr integration?
**With Plugin (Recommended)**:
- Install Streamyfin Plugin on Jellyfin server
- Configure Seerr settings in plugin
- Users automatically logged in

**Manual Setup**:
- Configure Seerr URL and API key in app settings
- Requires individual user setup

## Technical Issues

### The app crashes when playing certain files
This usually indicates codec compatibility:
- **Update app**: Ensure latest Streamyfin version
- **Check server**: Test file in other Jellyfin clients
- **Enable transcoding**: Allow server to convert formats
- **Report issue**: Include file format details

### Downloads keep failing
Common causes and solutions:
- **Storage space**: Ensure adequate device storage
- **Network stability**: Use stable WiFi connection
- **Server resources**: Check Jellyfin server performance
- **File size**: Try smaller files first
- **App restart**: Force close and reopen app

### Video buffering frequently
Buffering can be caused by:
- **Network speed**: Test internet connection
- **Server transcoding**: Check server CPU usage
- **Quality settings**: Lower streaming quality
- **Network congestion**: Try different times
- **Direct play**: Enable direct play if possible

### Audio/video sync issues
Try these solutions:
- **Pause/resume**: Temporary fix for sync issues
- **Server transcoding**: Enable/disable transcoding
- **Different client**: Test in other players
- **File quality**: Check source file integrity
- **Report details**: Include media format information

## Account and Settings

### How do I change my password?
Password management is handled by Jellyfin:
- **Web interface**: Use Jellyfin web dashboard
- **Admin users**: Can change passwords for other users
- **Streamyfin**: Cannot modify server passwords directly

### Can I set up parental controls?
Parental controls are managed at the Jellyfin server level:
- **User profiles**: Create restricted user accounts
- **Content ratings**: Set rating restrictions
- **Library access**: Control which libraries users see
- **Streamyfin**: Respects all server-side permissions

### How do I clear app data?
**Cache only**:
- Settings → Storage → Clear Cache
- Keeps login information

**Full reset**:
- Delete and reinstall app
- Clears all data including logins

## Troubleshooting

### App won't start or keeps crashing
1. **Force close**: Close app completely
2. **Restart device**: Reboot phone/tablet
3. **Update app**: Install latest version
4. **System updates**: Check for OS updates
5. **Reinstall**: Delete and reinstall app
6. **Report crash**: Include device/OS details

### Missing features from documentation
- **App version**: Ensure latest version installed
- **Server compatibility**: Check Jellyfin version requirements
- **Feature rollout**: Some features may be gradual release
- **Beta features**: Some features may be beta-only

### Performance is slow
- **Close background apps**: Free up device memory
- **Restart app**: Fresh app start
- **Network check**: Test connection speed
- **Server status**: Check Jellyfin server performance
- **Cache clear**: Clear app cache

## Community and Support

### How do I report bugs?
- **GitHub Issues**: [Report bugs](https://github.com/streamyfin/streamyfin/issues)
- **Include details**: Device, OS version, app version, steps to reproduce
- **Check existing**: Search for similar issues first
- **Logs**: Include relevant error logs

### How can I suggest features?
- **GitHub Issues**: Feature request template
- **Discord**: Community discussion
- **Patreon**: Beta tester feedback channels
- **Roadmap**: Check existing [project roadmap](https://github.com/users/fredrikburmester/projects/5)

### Where can I get help?
- **Documentation**: Check relevant guide sections
- **Discord**: [Community server](https://discord.gg/BuGG9ZNhaE)
- **GitHub**: Issues and discussions
- **Email**: developer@streamyfin.app

### How can I contribute?
- **Code**: Contribute via [GitHub](https://github.com/streamyfin/streamyfin)
- **Translations**: Help translate via [Crowdin](https://crowdin.com/project/streamyfin)
- **Testing**: Join beta testing program
- **Documentation**: Help improve these docs
- **Community**: Help others in Discord

## Still Need Help?

If your question isn't answered here:
- **Troubleshooting Guide**: [Advanced troubleshooting](advanced/troubleshooting.md)
- **User Guides**: Check specific [user guide sections](user-guide/setup.md)
- **GitHub Issues**: [Browse existing issues](https://github.com/streamyfin/streamyfin/issues)
- **Discord Community**: [Join our Discord](https://discord.gg/BuGG9ZNhaE)
- **Email Support**: developer@streamyfin.app