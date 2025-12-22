# Seerr Integration

Integrate Streamyfin with Seerr (formerly Jellyseerr) to request new content directly from your mobile device.

## What is Seerr?

Seerr is a content discovery and request management system that works with media servers like Jellyfin. It allows users to:
- Browse and discover new movies and TV shows
- Request content to be added to the server
- Track request status and availability
- Get notifications when content is ready

**Recent Changes**: Jellyseerr was recently forked and renamed to "Seerr" by the community. Both versions are supported by Streamyfin.

## Automatic Integration with Plugin

### Streamyfin Plugin Setup

The easiest way to enable Seerr integration is through the [Streamyfin Plugin](streamyfin-plugin.md):

**Benefits of Plugin Integration:**
- **Automatic Login**: Users log in automatically with Jellyfin credentials
- **Zero Configuration**: No manual setup required for users
- **Centralized Management**: Admins control settings for all users
- **Enhanced Security**: Secure credential handling

**Plugin Configuration:**
```yaml
jellyseerr:
  enabled: true
  url: "https://requests.yourdomain.com"
  apiKey: "your-jellyseerr-api-key"
  autoLogin: true
```

### Requirements for Automatic Login

**Server Setup:**
- Seerr/Jellyseerr configured with Jellyfin authentication
- Streamyfin Plugin installed and configured
- Same user accounts in both Jellyfin and Seerr

**How It Works:**
1. User opens Streamyfin app
2. Plugin provides Seerr credentials automatically
3. User gains immediate access to Seerr features
4. No manual configuration needed

## Manual Setup (Without Plugin)

### Prerequisites

**Server Requirements:**
- Seerr server installed and configured
- Jellyfin server connected to Seerr
- Network access between Streamyfin and Seerr
- Valid user account in Seerr

**Streamyfin Requirements:**
- Streamyfin version 2.0 or later
- Active Jellyfin server connection
- Network permissions enabled

### Configuration Steps

**1. Enable Seerr in Streamyfin**
```
Settings → Advanced → Integrations → Seerr
✓ Enable Seerr Integration
✓ Enter Seerr server URL
✓ Configure authentication
✓ Test connection
```

**2. Server Connection Setup**
```
Seerr Server URL: https://seerr.yourdomain.com
API Key: Your Seerr API key
User Authentication: Jellyfin or Plex login
Connection Timeout: 30 seconds
```

**3. Permissions and Access**
```
✓ Request permissions enabled
✓ User quota configured
✓ Quality profile selected
✓ Download path verified
```

## Using Seerr Features

### In-App Integration

**Seamless Experience:**
- **Request Button**: Appears on media pages not in your library
- **Browse Requests**: Dedicated Seerr section in app
- **Search Integration**: Search results show requestable content
- **Status Tracking**: Monitor request progress from app

### Content Discovery

**Browse Popular Content:**
- Trending movies and shows
- Top rated content
- Recently released items
- Genre-based browsing
- Search functionality

**Detailed Information:**
- Movie/show descriptions and metadata
- Cast and crew details
- Trailer integration
- Rating information from multiple sources
- Availability status

### Making Requests

**Request Workflow:**

1. **Find Content:**
   - Search for specific titles
   - Browse discovery sections
   - View recommendations
   - Check trending lists

2. **Submit Request:**
   - Tap "Request" button on content
   - Select content quality (if configured)
   - Choose seasons/episodes for TV shows
   - Add optional request notes

3. **Track Progress:**
   - Monitor request status in app
   - Get push notifications for updates
   - View download progress
   - Cancel requests if needed

**Request Types:**
- **Movies**: Single request per movie
- **TV Shows**: Request specific seasons or episodes
- **Anime**: Special anime category support
- **Collections**: Request entire movie collections

### Request Management

**Your Requests Section:**
- View all your pending requests
- Check request approval status
- Monitor download progress
- Manage request priorities
- Cancel pending requests

**Request Status Indicators:**
- **Pending**: Awaiting approval
- **Approved**: Being processed
- **Downloading**: Content being fetched
- **Available**: Ready to watch in your library
- **Failed**: Request encountered error

## Advanced Features

### Quality Profiles

**Configure Download Quality:**
- 4K/UHD preferences for compatible content
- 1080p/HD standard quality
- 720p/SD options for space saving
- Custom bitrate and codec settings
- Storage optimization preferences

**Profile Management:**
- Default quality per content type
- Network-based quality selection
- Server transcoding capability consideration
- Storage space optimization

### User Quotas and Limits

**Request Limits (Admin Configured):**
- Daily request quota
- Monthly request limits
- Quality restrictions by user
- Content size limitations

**Quota Monitoring:**
- Current usage display in app
- Remaining requests counter
- Reset schedule information
- Request history tracking

### Notification Integration

**Push Notifications:**
- New request submitted confirmation
- Request approved/denied alerts
- Download started notifications
- Content available alerts
- Request failed error notifications

**Notification Settings:**
```
Settings → Notifications → Seerr
✓ Request updates
✓ Content available alerts
✓ Approval notifications
✓ Error notifications
```

## Integration Benefits

### Streamlined Workflow

**Unified Experience:**
- Request content without leaving Streamyfin
- Integrated search shows both library and requestable content
- Direct access to requested content once available
- Consistent UI/UX with rest of app

**Smart Features:**
- **Duplicate Prevention**: Won't request content already in library
- **Season Management**: Request missing seasons automatically
- **Quality Matching**: Matches your server's quality standards
- **Deep Linking**: Notifications link directly to content

### Enhanced Discovery

**Discovery Integration:**
- Trending content from Seerr in app homepage
- Personalized recommendations based on viewing history
- Popular requests from other users
- Cross-platform content suggestions

**Rich Metadata:**
- Detailed content information
- High-quality artwork and backdrops
- Trailer integration and previews
- Cast and crew information
- Related content suggestions

## Administrative Features

### Server Management

**Admin Controls:**
- Monitor all user requests
- Approve/deny requests in bulk
- Configure user quotas and permissions
- Set quality profiles per user
- Manage download clients and paths

**Analytics Dashboard:**
- Request statistics and trends
- User activity monitoring
- Popular content tracking
- Server performance metrics
- Storage usage analysis

### Plugin Configuration

**Advanced Settings:**
```yaml
seerr:
  enabled: true
  url: "https://requests.example.com"
  apiKey: "${SEERR_API_KEY}"
  autoLogin: true
  timeout: 30
  retryAttempts: 3
  cacheDuration: 3600
  notifications:
    enabled: true
    types: ["approved", "available", "failed"]
  qualityProfiles:
    movie: "HD-1080p"
    tv: "HD-720p"
  userQuotas:
    default:
      daily: 10
      monthly: 50
    vip:
      daily: 20
      monthly: 100
```

## Troubleshooting

### Connection Issues

**Cannot Connect to Seerr:**
```
✓ Verify Seerr server URL and accessibility
✓ Check API key validity and permissions
✓ Test network connectivity from device
✓ Confirm Seerr server is running
✓ Check firewall and port settings
```

**Authentication Problems:**
```
✓ Verify user credentials in Seerr
✓ Check Jellyfin account permissions
✓ Ensure user is not disabled
✓ Test login via Seerr web interface
✓ Verify Jellyfin auth is enabled
```

### Request Issues

**Requests Not Appearing:**
- Check user permissions in Seerr
- Verify quota availability
- Ensure content not already in library
- Check request approval settings
- Review user role permissions

**Request Failures:**
- Verify download client configuration
- Check indexer setup and connectivity
- Monitor available storage space
- Review quality profile compatibility
- Check content availability on indexers

### Performance Optimization

**Improve Response Times:**
- Use local network for Seerr when possible
- Configure appropriate connection timeouts
- Enable request and metadata caching
- Optimize image loading and caching
- Use CDN for artwork if available

**Resource Management:**
- Monitor API rate limits
- Balance request frequency
- Implement proper caching strategies
- Optimize database performance
- Use efficient search algorithms

## Security Considerations

### API Security

**Best Practices:**
- Use dedicated API keys for Streamyfin
- Set minimal required permissions
- Rotate API keys regularly
- Monitor API usage and abuse
- Implement rate limiting

**Access Control:**
- Use HTTPS for all connections
- Verify SSL certificates
- Implement proper user authentication
- Monitor unauthorized access attempts
- Regular security audits

### Network Security

**Connection Security:**
- Always use HTTPS/TLS encryption
- Verify SSL certificate validity
- Use VPN for remote access
- Avoid public Wi-Fi for admin tasks
- Monitor network traffic for anomalies

## Migration from Jellyseerr

### Transitioning to Seerr

**Migration Steps:**
1. Export your Jellyseerr configuration and data
2. Install and configure Seerr
3. Import your data and settings
4. Update Streamyfin Plugin configuration
5. Test integration and functionality

**Data Migration:**
- User accounts and permissions
- Request history and status
- Quality profiles and settings
- Notification configurations
- API keys and integrations

## Future Enhancements

### Planned Features

**Enhanced Integration:**
- Real-time bidirectional sync
- Advanced filtering and search
- Collaborative request features
- Social discovery features
- Offline request queuing

**Mobile Optimizations:**
- Background sync capabilities
- Widget support for quick requests
- Apple Watch integration
- Voice request support
- Improved accessibility

## Support and Resources

### Documentation
- [Seerr Official Documentation](https://docs.seerr.dev)
- [Streamyfin Plugin Guide](streamyfin-plugin.md)
- [Jellyfin Integration Guide](../user-guide/setup.md)

### Community Support
- [Streamyfin Discord](https://discord.gg/BuGG9ZNhaE)
- [Seerr Community](https://github.com/seerr-team/seerr)
- [GitHub Discussions](https://github.com/streamyfin/streamyfin/discussions)

### Troubleshooting Resources
- [Connection Troubleshooting](troubleshooting.md)
- [Network Diagnostics](troubleshooting.md#network-diagnostics)
- [Server Setup Guide](../development/setup.md)