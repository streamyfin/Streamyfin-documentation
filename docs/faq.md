# Frequently Asked Questions

Common questions and answers about using StreamyFin.

## General Questions

### What is StreamyFin?
StreamyFin is a native mobile client for Jellyfin media servers. It provides a seamless streaming experience on iOS and Android devices with features like offline downloads, Chromecast support, and optimized mobile playback.

### Is StreamyFin free?
Yes, StreamyFin is completely free and open-source. There are no subscription fees or in-app purchases.

### What devices are supported?
- **iOS**: iPhone, iPad, and iPod touch running iOS 13.0 or later
- **Android**: Devices running Android 7.0 (API level 24) or later

## Setup and Connection

### How do I connect to my Jellyfin server?
1. Open StreamyFin and tap "Add Server"
2. Enter your server address (e.g., `http://192.168.1.100:8096`)
3. Enter your username and password
4. Tap "Sign In"

### I can't connect to my server. What should I do?
- Verify your server address is correct
- Check that your Jellyfin server is running
- Ensure your device is on the same network (for local connections)
- Try using the server's IP address instead of hostname
- Check firewall settings on your server

### Can I connect to multiple servers?
Yes! StreamyFin supports multiple server connections. You can switch between servers in the settings menu.

## Streaming and Playback

### What video formats are supported?
StreamyFin supports all formats that Jellyfin can transcode, including:
- H.264, H.265 (HEVC)
- VP8, VP9, AV1
- MPEG-2, MPEG-4
- And many more

### Why is my video buffering?
Buffering can be caused by:
- Slow internet connection
- Server transcoding limitations
- High bitrate content
- Try lowering the streaming quality in settings

### Can I download content for offline viewing?
Yes! StreamyFin supports downloading content for offline playback. Look for the download button on any media item.

### How do I cast to my TV?
1. Ensure your Chromecast is on the same network
2. Start playing content in StreamyFin
3. Tap the cast icon in the player
4. Select your Chromecast device

## Technical Issues

### The app crashes when I try to play certain files
This usually indicates a codec compatibility issue:
- Update to the latest version of StreamyFin
- Check if the file plays in other Jellyfin clients
- Try enabling transcoding on your server

### Downloads keep failing
- Check your device storage space
- Verify stable internet connection
- Try downloading smaller files first
- Restart the app and try again

### Audio is out of sync with video
- Try pausing and resuming playback
- Check if the issue exists in other players
- Consider re-encoding the problematic files
- Report the issue with media details

## Account and Settings

### How do I change my password?
Password changes must be done through the Jellyfin web interface or another admin client. StreamyFin cannot change server passwords directly.

### Can I set up parental controls?
Parental controls are managed through your Jellyfin server settings. StreamyFin respects all user permissions set on the server.

### How do I clear the app cache?
Go to Settings > Storage > Clear Cache. This will remove temporary files but keep your login information.

## Troubleshooting

### The app won't start
1. Force close the app completely
2. Restart your device
3. Reinstall the app if problems persist
4. Check for iOS/Android system updates

### I'm missing features I see in documentation
- Ensure you're running the latest version
- Some features may be server-dependent
- Check your Jellyfin server version compatibility

### How do I report bugs or suggest features?
- Visit our GitHub repository to report issues
- Join our community discussions
- Check existing issues before creating new ones

## Still Need Help?

If your question isn't answered here:
- Check the [Troubleshooting Guide](advanced/troubleshooting.md)
- Visit our [GitHub Issues](https://github.com/streamyfin/streamyfin) page
- Join our community Discord server