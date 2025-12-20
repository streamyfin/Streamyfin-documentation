# Seerr Integration

Integrate StreamyFin with Seerr to request new content directly from your mobile device.

## What is Seerr?

Seerr is a content discovery and request management system that works with media servers like Jellyfin. It allows users to:
- Browse and discover new movies and TV shows
- Request content to be added to the server
- Track request status and availability
- Get notifications when content is ready

## Setting Up Seerr Integration

### Prerequisites

**Server Requirements:**
- Seerr server installed and configured
- Jellyfin server connected to Seerr
- Network access between StreamyFin and Seerr
- Valid user account in Seerr

**StreamyFin Requirements:**
- StreamyFin version 2.0 or later
- Active Jellyfin server connection
- Network permissions enabled

### Configuration Steps

**1. Enable Seerr in StreamyFin**
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

### Content Discovery

**Browse Popular Content:**
- Trending movies and shows
- Top rated content
- Recently released items
- Genre-based browsing
- Search functionality

**Detailed Information:**
- Movie/show descriptions
- Cast and crew details
- Trailer integration
- Rating information
- Availability status

### Making Requests

**Request Workflow:**

1. **Find Content:**
   - Search for specific titles
   - Browse discovery sections
   - View recommendations
   - Check trending lists

2. **Submit Request:**
   - Select content quality
   - Choose download location
   - Set priority level
   - Add request notes

3. **Track Progress:**
   - Monitor request status
   - Get availability notifications
   - View download progress
   - Cancel requests if needed

**Request Types:**
- **Movies**: Single request per movie
- **TV Shows**: Request specific seasons/episodes
- **Anime**: Special anime category support
- **Music**: Album and artist requests (if configured)

### Request Management

**Your Requests:**
- View all your pending requests
- Check request approval status
- Monitor download progress
- Manage request priorities

**Request Status:**
- **Pending**: Awaiting approval
- **Approved**: Being processed
- **Downloading**: Content being fetched
- **Available**: Ready to watch
- **Failed**: Request encountered error

## Advanced Features

### Notification Integration

**Request Notifications:**
- New request submitted
- Request approved/denied
- Download started
- Content available
- Request failed

**Notification Settings:**
```
Settings → Notifications → Seerr
✓ Request updates
✓ Content available alerts
✓ Approval notifications
✓ Error notifications
```

### Quality Profiles

**Configure Download Quality:**
- 4K/UHD preferences
- 1080p/HD standard
- 720p/SD options
- Custom bitrate settings
- Storage optimization

**Profile Management:**
- Default quality per content type
- Network-based quality selection
- Storage space considerations
- Server transcoding capabilities

### User Quotas and Limits

**Request Limits:**
- Daily request quota
- Monthly request limits
- Quality restrictions
- Size limitations

**Quota Monitoring:**
- Current usage display
- Remaining requests
- Reset schedule
- Quota history

## Integration Benefits

### Seamless Workflow

**Unified Experience:**
- Request from within StreamyFin
- No need to switch apps
- Integrated search results
- Direct content access

**Smart Recommendations:**
- Based on viewing history
- Consider current library
- Suggest similar content
- Popular with friends

### Enhanced Discovery

**Discovery Features:**
- Trending content integration
- Personalized recommendations
- Social features (if enabled)
- Cross-platform suggestions

**Content Information:**
- Rich metadata display
- Trailer integration
- Cast and crew details
- Related content suggestions

## Troubleshooting Seerr Integration

### Connection Issues

**Cannot Connect to Seerr:**
```
✓ Verify Seerr server URL
✓ Check API key validity
✓ Test network connectivity
✓ Confirm server is running
```

**Authentication Problems:**
```
✓ Verify user credentials
✓ Check account permissions
✓ Ensure user is not disabled
✓ Test login via web interface
```

### Request Issues

**Requests Not Appearing:**
- Check user permissions
- Verify quota availability
- Ensure content not already available
- Check request approval settings

**Download Failures:**
- Verify indexer configuration
- Check download client setup
- Monitor storage space
- Review quality profile settings

### Performance Optimization

**Improve Response Times:**
- Use local Seerr installation
- Configure appropriate timeouts
- Enable request caching
- Optimize network settings

**Resource Management:**
- Monitor API rate limits
- Balance request frequency
- Cache metadata locally
- Optimize image loading

## Administrative Features

### Server Management

**Admin Controls:**
- User request monitoring
- Quota management
- Quality profile configuration
- Download path management

**Analytics and Reporting:**
- Request statistics
- User activity monitoring
- Popular content tracking
- Server performance metrics

### Integration Settings

**Advanced Configuration:**
```yaml
seerr:
  server_url: "https://seerr.example.com"
  api_key: "your-api-key-here"
  timeout: 30
  retry_attempts: 3
  cache_duration: 3600
  user_agent: "StreamyFin/2.0"
```

## Security Considerations

### API Key Security

**Best Practices:**
- Use read-only API keys when possible
- Rotate API keys regularly
- Don't share API keys
- Monitor API key usage

**Access Control:**
- Limit user permissions appropriately
- Use HTTPS for all connections
- Implement proper authentication
- Monitor unauthorized access attempts

### Network Security

**Connection Security:**
- Use HTTPS/TLS encryption
- Verify SSL certificates
- Avoid public Wi-Fi for admin tasks
- Monitor network traffic

## Future Enhancements

### Planned Features

**Enhanced Integration:**
- Real-time notifications
- Advanced filtering options
- Collaborative requests
- Social features

**Mobile Optimizations:**
- Offline request queuing
- Background sync
- Push notifications
- Widget support

### Community Features

**Social Integration:**
- Friend recommendations
- Request sharing
- Watchlist collaboration
- Community ratings

## Support and Resources

### Documentation
- [Seerr Official Documentation](https://docs.seerr.dev)
- [API Reference Guide](https://api.seerr.dev)
- [Configuration Examples](https://github.com/seerr/seerr)

### Community Support
- Seerr Discord server
- GitHub discussions
- Community forums
- Video tutorials

### Troubleshooting Resources
- [Connection troubleshooting](troubleshooting.md)
- [Network diagnostics](troubleshooting.md#network-diagnostics)
- [Server integration guide](../development/setup.md)