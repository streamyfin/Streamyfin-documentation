# Troubleshooting

Common issues and their solutions to keep StreamyFin running smoothly.

## Connection Issues

### Cannot Connect to Server

**Symptoms:**
- "Server not found" error
- Connection timeout messages
- Login failures
- Intermittent connectivity

**Solutions:**

**1. Verify Server Information**
```
✓ Check server address format:
  - http://192.168.1.100:8096 (local)
  - https://jellyfin.yourdomain.com (remote)
✓ Confirm port number (usually 8096)
✓ Test server in web browser
✓ Verify Jellyfin server is running
```

**2. Network Troubleshooting**
```
✓ Confirm same network (for local connections)
✓ Check Wi-Fi connectivity
✓ Disable VPN temporarily
✓ Test with mobile data
✓ Restart router/modem
```

**3. Firewall and Security**
```
✓ Check firewall rules on server
✓ Verify port forwarding (remote access)
✓ Test with firewall temporarily disabled
✓ Check antivirus blocking
```

### Slow or Intermittent Connection

**Causes and Solutions:**

**Network Performance:**
- Run speed test on both devices
- Use 5GHz Wi-Fi when available
- Move closer to router
- Reduce other network usage

**Server Performance:**
- Check server CPU/RAM usage
- Verify transcoding capabilities
- Reduce simultaneous streams
- Upgrade server hardware if needed

**App Settings:**
- Lower streaming quality
- Reduce buffer size
- Disable hardware acceleration
- Clear app cache

## Playback Problems

### Video Won't Start

**Common Causes:**

**1. Format Compatibility**
```
Issue: Codec not supported
Solution: 
- Enable transcoding on server
- Update StreamyFin app
- Check server transcoding capabilities
- Try different quality setting
```

**2. Server Resources**
```
Issue: Server overloaded
Solution:
- Check server CPU usage
- Reduce simultaneous streams
- Lower transcoding quality
- Upgrade server hardware
```

**3. Network Issues**
```
Issue: Insufficient bandwidth
Solution:
- Test network speed
- Lower streaming quality
- Use Wi-Fi instead of mobile data
- Pause other streaming services
```

### Audio/Video Sync Issues

**Troubleshooting Steps:**

1. **Immediate Fixes:**
   - Pause and resume playback
   - Restart the stream
   - Try different audio track
   - Adjust playback speed briefly

2. **App-Level Solutions:**
   - Update to latest version
   - Clear app cache
   - Restart the app
   - Reset playback settings

3. **Server-Side Fixes:**
   - Check source file quality
   - Verify transcoding settings
   - Update Jellyfin server
   - Re-encode problematic files

### Stuttering and Buffering

**Performance Optimization:**

**Device-Side:**
```
✓ Close other running apps
✓ Restart device
✓ Free up storage space
✓ Update operating system
✓ Enable hardware acceleration
```

**Network-Side:**
```
✓ Use Wi-Fi instead of mobile data
✓ Move closer to router
✓ Upgrade internet plan
✓ Use wired connection for server
✓ Update router firmware
```

**App Settings:**
```
✓ Lower video quality
✓ Increase buffer size
✓ Disable auto-quality switching
✓ Clear video cache
```

## Download Issues

### Downloads Keep Failing

**Common Causes and Fixes:**

**1. Storage Space**
```
Check: Available device storage
Solution: 
- Free up space
- Move downloads to SD card
- Enable auto-cleanup
- Remove old downloads
```

**2. Network Stability**
```
Issue: Connection drops during download
Solution:
- Use stable Wi-Fi connection
- Download smaller files first
- Enable download resume
- Download during off-peak hours
```

**3. Server Limits**
```
Issue: Server blocking large downloads
Solution:
- Check server bandwidth limits
- Download during low usage times
- Request admin to adjust limits
- Use lower quality downloads
```

### Downloads Won't Play Offline

**Verification Steps:**

1. **Download Integrity:**
   - Check download completed 100%
   - Verify file size matches
   - Try redownloading
   - Check download corruption

2. **App State:**
   - Ensure offline mode enabled
   - Restart app in airplane mode
   - Check download location
   - Verify file permissions

3. **Format Issues:**
   - Check if format supported offline
   - Try different quality setting
   - Update app version
   - Contact support with format details

## Casting Problems

### Chromecast Not Found

**Device Discovery Issues:**

**1. Network Configuration**
```
✓ Same Wi-Fi network for all devices
✓ Router supports multicast
✓ No guest network isolation
✓ Firewall allows casting
```

**2. Device Status**
```
✓ Chromecast powered on
✓ Connected to Wi-Fi
✓ Google Home app working
✓ No device conflicts
```

**3. App Permissions**
```
✓ Location permission enabled
✓ Network access allowed
✓ Google Play Services updated
✓ Cast framework current
```

### Casting Disconnects Frequently

**Stability Solutions:**

**Network Optimization:**
- Use 5GHz Wi-Fi
- Position devices near router
- Reduce network interference
- Update router firmware

**Device Management:**
- Keep casting device plugged in
- Close unnecessary apps
- Update all device software
- Restart devices periodically

## Performance Issues

### App Crashes or Freezes

**Diagnostic Steps:**

**1. Basic Troubleshooting**
```
✓ Force close and restart app
✓ Restart device
✓ Update to latest version
✓ Check available RAM
```

**2. Advanced Solutions**
```
✓ Clear app cache and data
✓ Reinstall application
✓ Check device storage
✓ Update operating system
```

**3. Reporting Issues**
```
✓ Enable crash reporting
✓ Note exact steps to reproduce
✓ Check error logs
✓ Report to developers
```

### Poor Video Quality

**Quality Optimization:**

**Server Settings:**
- Check transcoding quality settings
- Verify hardware acceleration
- Monitor server performance
- Update transcoding codecs

**App Settings:**
- Increase quality preference
- Enable original quality
- Disable adaptive streaming
- Check network speed requirements

**Network:**
- Test bandwidth availability
- Use wired connection for server
- Upgrade internet plan
- Reduce network congestion

## Account and Authentication

### Login Issues

**Authentication Problems:**

**1. Credential Verification**
```
✓ Username/password correct
✓ Account not disabled
✓ User permissions valid
✓ No special characters issues
```

**2. Server Authentication**
```
✓ Authentication method supported
✓ User database accessible
✓ LDAP/AD configuration (if used)
✓ Two-factor authentication setup
```

### Profile and Settings Lost

**Data Recovery:**

**1. Settings Backup**
```
✓ Check cloud sync status
✓ Restore from backup file
✓ Re-login to refresh settings
✓ Contact admin for user data
```

**2. Profile Recreation**
```
✓ Set up user profile again
✓ Restore library preferences
✓ Reconfigure playback settings
✓ Re-enable notifications
```

## Advanced Troubleshooting

### Log Collection and Analysis

**Enabling Debug Logs:**

1. Go to Settings > Advanced > Debug Options
2. Enable "Detailed Logging"
3. Reproduce the issue
4. Export logs from Settings > Support
5. Share logs with support team

**Log Information Includes:**
- Network requests and responses
- Playback events and errors
- Performance metrics
- Crash stack traces

### Network Diagnostics

**Built-in Network Test:**

1. Settings > Advanced > Network Diagnostics
2. Test server connectivity
3. Measure bandwidth
4. Check latency and packet loss
5. Analyze results and recommendations

### Performance Monitoring

**Performance Overlay:**

Enable in Settings > Advanced > Performance:
- Real-time FPS counter
- CPU and memory usage
- Network activity
- Battery consumption
- Frame drops and skips

## Getting Additional Help

### Community Support

**Resources:**
- GitHub Issues repository
- Community Discord server
- Reddit community discussions
- User-generated guides

### Professional Support

**When to Contact Support:**
- Persistent crashes
- Data loss issues
- Security concerns
- Enterprise deployment help

**Information to Provide:**
- Device model and OS version
- App version number
- Server version and configuration
- Detailed steps to reproduce
- Log files (if available)
- Screenshots or recordings

### Self-Help Resources

**Documentation:**
- [FAQ](../faq.md) - Common questions
- [User Guide](../user-guide/setup.md) - Setup help
- [Development](../development/contributing.md) - Bug reporting

**Updates:**
- Keep app updated
- Follow release notes
- Join beta testing programs
- Enable automatic updates