# Optimized Versions Server (Deprecated)

> ⚠️ **Deprecated since Streamyfin 0.30.2**  
> This server is no longer needed and may not work with current versions of Streamyfin.

## About

The Optimized Versions Server was a companion transcoding server that acted as a middleman between Jellyfin and Streamyfin for enhanced downloading capabilities. While deprecated, this documentation remains for historical reference.

## Why It's Deprecated

Starting with Streamyfin v0.30.2, the app includes improved download functionality that no longer requires a separate transcoding server:

- **Direct HLS Download**: App handles HLS stream conversion natively
- **Background Downloads**: Built-in background processing
- **Better Performance**: Reduced complexity and server requirements
- **Simplified Setup**: No additional server installation needed

## Historical Functionality

The Optimized Versions Server provided:

### 1. Stream Optimization
- Downloaded HLS streams from Jellyfin
- Converted streams to single video files
- Enabled stable downloads in the app

### 2. Background Processing
- Handled transcoding on server-side
- Allowed app downloads to continue in background
- Reduced mobile device processing load

### 3. Two-Step Process
1. **Optimize**: Server processed the HLS stream
2. **Download**: App downloaded the optimized file

## Migration to Modern Downloads

### Current Download System

Modern Streamyfin versions include:

**Direct Download Features:**
- **Native HLS Processing**: App converts streams directly
- **Background Downloads**: No need to keep app open
- **Progress Tracking**: Real-time download progress
- **Quality Selection**: Choose download quality
- **Storage Management**: Organized download storage

**Improved Performance:**
- **Faster Downloads**: Direct connection to Jellyfin
- **Less Server Load**: No intermediate transcoding
- **Better Reliability**: Fewer failure points
- **Mobile Optimized**: Designed for mobile networks

### Upgrade Process

If you were using the Optimized Versions Server:

1. **Update Streamyfin**: Upgrade to v0.30.2 or later
2. **Remove Server**: Uninstall the Optimized Versions Server
3. **Test Downloads**: Verify new download system works
4. **Cleanup**: Remove server configuration files

## Technical Details (Historical)

### Original Architecture
```
Streamyfin App → Optimized Versions Server → Jellyfin Server
```

### Server Components
- **Docker Container**: `fredrikburmester/streamyfin-optimized-versions-server`
- **Node.js Backend**: TypeScript-based server
- **FFmpeg Integration**: For stream conversion
- **Cache System**: Temporary file storage

### Configuration (Historical)
```yaml
# docker-compose.yml (no longer needed)
services:
  app:
    image: fredrikburmester/streamyfin-optimized-versions-server:master
    ports:
      - '3000:3000'
    environment:
      - JELLYFIN_URL=http://your-jellyfin-url
      - MAX_CONCURRENT_JOBS=1
```

## Troubleshooting Old Installations

If you still have the Optimized Versions Server running:

### Removal Steps

1. **Stop Docker Container**:
   ```bash
   docker-compose down
   ```

2. **Remove Configuration**:
   ```bash
   rm docker-compose.yml
   rm .env
   ```

3. **Clean Cache Files**:
   ```bash
   sudo rm -rf ./cache
   ```

4. **Update Streamyfin App**: Install latest version

### Verification

Ensure the server is properly removed:
- Check no containers running on port 3000
- Verify Streamyfin downloads work without server
- Remove any firewall rules for the server

## Alternative Solutions

For users who need advanced download features:

### Jellyfin Server Optimization
- **Transcoding Settings**: Optimize Jellyfin transcoding
- **Hardware Acceleration**: Enable GPU transcoding
- **Network Optimization**: Improve server networking

### App Settings
- **Download Quality**: Configure appropriate quality
- **Network Settings**: Optimize for your connection
- **Storage Management**: Set up download locations

## Support and Migration Help

### Getting Help

If you need assistance migrating from the Optimized Versions Server:

- **Discord**: Ask in [#support channel](https://discord.gg/BuGG9ZNhaE)
- **GitHub Issues**: [Report migration issues](https://github.com/streamyfin/streamyfin/issues)
- **Documentation**: Check [download guide](../user-guide/downloads.md)

### Common Migration Issues

**Downloads Not Working**:
1. Update to latest Streamyfin version
2. Check Jellyfin server connectivity
3. Verify download permissions
4. Test with different content

**Performance Concerns**:
1. Monitor device storage
2. Check network bandwidth
3. Adjust download quality settings
4. Use WiFi for large downloads

## Resources

### Documentation
- [Current Download Guide](../user-guide/downloads.md)
- [Jellyfin Setup](../user-guide/setup.md)
- [Troubleshooting](../advanced/troubleshooting.md)

### Community
- [Discord Community](https://discord.gg/BuGG9ZNhaE)
- [GitHub Discussions](https://github.com/streamyfin/streamyfin/discussions)
- [Streamyfin Website](https://streamyfin.app)

---

*This server was an important stepping stone in Streamyfin's evolution. Thanks to all who used and provided feedback on the Optimized Versions Server!*