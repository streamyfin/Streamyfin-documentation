# Streamyfin Plugin for Jellyfin

The official Jellyfin Plugin for Streamyfin enables centralized configuration and enhanced features for all your users.

## Overview

The Streamyfin Plugin is a companion plugin you install into your Jellyfin server that holds all settings for the Streamyfin client. This allows you to synchronize settings across all your users and enable powerful server-side features.

### Key Benefits

- **Centralized Settings Management**: Configure settings once for all users
- **Automatic Seerr Integration**: Users get logged into Jellyseerr automatically
- **Custom Home Screen**: Create dynamic home screens using collections
- **Push Notifications**: Receive notifications for server events
- **Enhanced User Experience**: Streamlined setup and configuration

## Features

### 🎯 Automatic Seerr Login

The plugin can automatically log your users into Jellyseerr for seamless integration:

- **Jellyfin Authentication**: Uses existing Jellyfin credentials
- **No User Input**: Users don't need to configure anything
- **Secure Integration**: Maintains security standards
- **Instant Access**: Request media directly from Streamyfin

**Requirements:**
- Jellyseerr configured with Jellyfin authentication
- Plugin properly configured with Seerr settings

### 🏠 Custom Home Screen

Create dynamic, Netflix-style home screens that go beyond Jellyfin's default layout:

- **Collection-Based**: Use collections to create rows
- **Dynamic Content**: Trending, Popular, Most Viewed sections
- **Professional Layout**: Streaming service-style interface
- **Easy Management**: Configure through plugin settings

**Works with:**
- [Collection Import Plugin](https://github.com/lostb1t/jellyfin-plugin-collection-import)
- Custom collections created in Jellyfin
- Automated collection updates

### 🔔 Push Notifications

Receive real-time notifications for various server events:

#### Built-in Notifications

- **Item Added**: New content notifications with spam reduction
- **Session Started**: See when users come online (admin only)
- **User Locked Out**: Security notifications for account lockouts
- **Playback Started**: Monitor content consumption (admin only)

#### Custom Notifications

- **Webhook Endpoint**: Send custom notifications via API
- **Third-party Integration**: Works with external services
- **Flexible Targeting**: Send to specific users or all admins

## Installation

### Step 1: Add Repository

1. Go to **Jellyfin Dashboard → Catalog → Settings** (gear icon next to "Catalog")
2. Click **"Add Repository"**
3. Enter Repository URL: `https://raw.githubusercontent.com/streamyfin/jellyfin-plugin-streamyfin/main/manifest.json`
4. Save the repository

### Step 2: Install Plugin

1. Go to **Dashboard → Catalog**
2. Search for **"Streamyfin"**
3. Click on the plugin and select **"Install"**
4. **Restart Jellyfin** when prompted

### Step 3: Configure Plugin

1. Go to **Dashboard → Plugins → Streamyfin**
2. Configure your desired settings (see Configuration section)
3. Save settings and restart if required

## Configuration

The plugin offers both YAML and form-based configuration options.

### Basic Configuration

```yaml
# Basic Streamyfin Plugin Configuration
jellyseerr:
  enabled: true
  url: "https://requests.yourdomain.com"
  apiKey: "your-jellyseerr-api-key"

homeScreen:
  enabled: true
  collections:
    - name: "Trending Movies"
      collectionId: "trending-movies-id"
    - name: "Popular TV Shows"
      collectionId: "popular-tv-id"

notifications:
  itemAdded:
    enabled: true
    adminOnly: false
  sessionStarted:
    enabled: true
    adminOnly: true
  userLockedOut:
    enabled: true
    adminOnly: false
```

### Advanced Configuration

```yaml
# Advanced Configuration Options
settings:
  defaultLanguages:
    audio: "en"
    subtitle: "en"
  downloadMethod: "optimized"
  searchProvider: "jellysearch"
  
customNotifications:
  webhookUrl: "https://yourserver.com/jellyfin/Streamyfin/notification"
  enabled: true
  
homeScreenLayout:
  rows:
    - title: "Continue Watching"
      type: "resume"
      limit: 10
    - title: "Recently Added Movies"
      type: "collection"
      collectionId: "movies-recent"
      limit: 20
    - title: "Trending TV Shows"
      type: "collection"  
      collectionId: "tv-trending"
      limit: 15
```

## Notifications

### Setting Up Notifications

#### Mobile App Configuration

1. **Enable in Streamyfin**: Go to Settings → Notifications
2. **Allow Permissions**: Grant notification permissions when prompted
3. **Configure Types**: Choose which notifications you want to receive

#### Plugin Configuration

```yaml
notifications:
  itemAdded:
    enabled: true
    adminOnly: false
    spamReduction: true  # Groups multiple episodes
  sessionStarted:
    enabled: true
    adminOnly: true
  playbackStarted:
    enabled: false
    adminOnly: true
  userLockedOut:
    enabled: true
    adminOnly: false
    notifyUser: true
```

### Custom Webhook Notifications

Send custom notifications using the webhook endpoint:

**Endpoint:** `https://yourserver.com/jellyfin/Streamyfin/notification`

**Headers:**
```
Content-Type: application/json
Authorization: MediaBrowser Token="your-jellyfin-api-key"
```

**Payload:**
```json
[
  {
    "title": "Custom Notification",
    "subtitle": "Optional subtitle (iOS only)",
    "body": "Notification message body",
    "userId": "specific-user-id",
    "username": "specific-username", 
    "isAdmin": false
  }
]
```

### Integration Examples

#### Jellyseerr Integration

Configure Jellyseerr to send notifications via webhook:

1. Go to **Jellyseerr Settings → Notifications → Webhook**
2. Enable the webhook agent
3. Set Webhook URL to your Streamyfin notification endpoint
4. Use this payload template:

```json
[
  {
    "title": "{{event}}",
    "body": "{{subject}}: {{message}}",
    "isAdmin": true
  }
]
```

#### Item Added Notification

Using Jellyfin Webhook Plugin:

```json
[
  {
    {{#if_equals ItemType 'Movie'}}
      "title": "{{{Name}}} ({{Year}}) added",
      "body": "Watch movie now"
    {{/if_equals}}
    {{#if_equals ItemType 'Episode'}}
      "title": "{{{SeriesName}}} S{{SeasonNumber00}}E{{EpisodeNumber00}} added",
      "body": "Watch episode '{{{Name}}}' now"
    {{/if_equals}}
  }
]
```

## Home Screen Customization

### Creating Collections

1. **Manual Collections**: Create collections in Jellyfin Dashboard
2. **Automated Collections**: Use Collection Import Plugin
3. **Dynamic Collections**: Set up rules-based collections

### Collection Examples

```yaml
homeScreen:
  layout:
    - title: "Continue Watching"
      type: "resume"
      enabled: true
    - title: "Trending This Week"
      type: "collection"
      collectionName: "Trending"
    - title: "New Releases"
      type: "collection"
      collectionName: "Recently Added"
    - title: "Staff Picks"
      type: "collection"
      collectionName: "Recommended"
```

### Best Practices

**Collection Naming:**
- Use clear, descriptive names
- Keep titles short for mobile display
- Consider localization if needed

**Content Organization:**
- Limit collections to 20-30 items for performance
- Update collections regularly
- Use meaningful sorting criteria

## Troubleshooting

### Common Issues

#### Plugin Not Loading

1. **Check Jellyfin Version**: Ensure compatible Jellyfin version
2. **Verify Installation**: Plugin should appear in Dashboard → Plugins
3. **Check Logs**: Review Jellyfin logs for error messages
4. **Restart Required**: Some changes need Jellyfin restart

#### Notifications Not Working

1. **API Key**: Verify Jellyfin API key is correct
2. **Permissions**: Check API key has required permissions
3. **Network**: Ensure Streamyfin can reach Jellyfin server
4. **App Settings**: Verify notifications enabled in app

#### Seerr Integration Issues

1. **Authentication**: Verify Jellyseerr uses Jellyfin auth
2. **API Configuration**: Check Seerr API key and URL
3. **User Permissions**: Ensure users have Seerr access
4. **Network Connectivity**: Test connection between services

### Debug Mode

Enable debug logging:

```yaml
debug:
  enabled: true
  logLevel: "verbose"
  logNotifications: true
  logHomeScreen: true
```

### Log Analysis

Check these log locations:
- **Jellyfin Logs**: `/config/logs/` (Docker) or system logs
- **Plugin Logs**: Look for Streamyfin plugin entries
- **Network Logs**: Check webhook delivery status

## Security Considerations

### API Keys

- **Secure Storage**: API keys are encrypted at rest
- **Limited Scope**: Use minimal required permissions
- **Regular Rotation**: Change API keys periodically
- **Access Control**: Limit API key access to plugin only

### Network Security

- **HTTPS**: Always use HTTPS for production
- **Firewall Rules**: Restrict access to necessary ports
- **VPN Access**: Consider VPN for remote access
- **Certificate Validation**: Ensure valid SSL certificates

### User Privacy

- **Data Minimization**: Only collect necessary user data
- **Notification Content**: Avoid sensitive information in notifications
- **User Consent**: Inform users about plugin features
- **Opt-out Options**: Allow users to disable features

## Advanced Usage

### YAML Configuration

Full YAML configuration example:

```yaml
# Streamyfin Plugin Configuration
version: "1.0"

# Jellyseerr Integration
jellyseerr:
  enabled: true
  url: "https://requests.example.com"
  apiKey: "${JELLYSEERR_API_KEY}"
  autoLogin: true
  defaultPermissions:
    - "REQUEST"
    - "VOTE"

# Home Screen Customization  
homeScreen:
  enabled: true
  cacheTimeout: 3600 # 1 hour
  layout:
    - title: "Continue Watching"
      type: "resume"
      enabled: true
      limit: 10
    - title: "Trending Movies"
      type: "collection"
      collectionName: "Trending Movies"
      limit: 20
      sortBy: "random"
    - title: "New TV Episodes"
      type: "collection"
      collectionName: "New Episodes"
      limit: 15
      sortBy: "dateAdded"

# Notification Configuration
notifications:
  enabled: true
  itemAdded:
    enabled: true
    adminOnly: false
    spamReduction: true
    groupingWindow: 300 # 5 minutes
  sessionStarted:
    enabled: true
    adminOnly: true
  playbackStarted:
    enabled: false
    adminOnly: true
  userLockedOut:
    enabled: true
    adminOnly: true
    notifyUser: true

# User Defaults
userDefaults:
  language:
    audio: "en"
    subtitle: "en"
  quality:
    wifi: "original"
    cellular: "720p"
  downloads:
    enabled: true
    location: "/downloads"
    maxConcurrent: 2

# Advanced Settings
advanced:
  caching:
    enabled: true
    ttl: 1800 # 30 minutes
  logging:
    level: "info"
    enableDebug: false
  performance:
    maxConcurrentRequests: 10
    timeoutMs: 30000
```

### Plugin API

The plugin exposes APIs for custom integrations:

```javascript
// Get plugin configuration
GET /Streamyfin/config

// Send custom notification
POST /Streamyfin/notification

// Get user settings
GET /Streamyfin/user/{userId}/settings

// Update user settings  
PUT /Streamyfin/user/{userId}/settings
```

## Version History

### Latest Changes

- **v1.2.0**: Enhanced notification system with spam reduction
- **v1.1.0**: Added custom home screen layouts
- **v1.0.0**: Initial release with Seerr integration

### Upgrade Notes

When upgrading:
1. **Backup Configuration**: Export settings before upgrade
2. **Read Changelog**: Review breaking changes
3. **Test Features**: Verify functionality after upgrade
4. **Update Documentation**: Check for new configuration options

## Support

### Getting Help

- **Documentation**: [Plugin Documentation](https://docs.streamyfin.app/advanced/streamyfin-plugin)
- **Discord**: [Streamyfin Community](https://discord.gg/aJvAYeycyY)
- **GitHub Issues**: [Report Plugin Issues](https://github.com/streamyfin/jellyfin-plugin-streamyfin/issues)
- **Email Support**: developer@streamyfin.app

### Contributing

- **Source Code**: [GitHub Repository](https://github.com/streamyfin/jellyfin-plugin-streamyfin)
- **Feature Requests**: Submit via GitHub Issues
- **Bug Reports**: Include logs and configuration
- **Documentation**: Help improve these docs