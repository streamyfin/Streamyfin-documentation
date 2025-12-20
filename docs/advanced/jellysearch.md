# JellySearch Integration

Enhance your content discovery with JellySearch's powerful search capabilities across your Jellyfin library.

## What is JellySearch?

JellySearch is an advanced search engine specifically designed for Jellyfin media servers. It provides:
- **Lightning-fast search** across your entire media library
- **Advanced filtering** by genre, year, rating, and more
- **Intelligent suggestions** and autocomplete
- **Cross-library search** across multiple Jellyfin servers
- **Rich metadata integration** from multiple sources

## Setting Up JellySearch

### Prerequisites

**Server Requirements:**
- JellySearch server installation
- Jellyfin server with API access
- Network connectivity between components
- Search index properly configured

**StreamyFin Configuration:**
- StreamyFin version 2.1 or later
- Active Jellyfin connection
- Network permissions enabled
- Location services (optional, for geo-search)

### Installation and Configuration

**1. Enable JellySearch Integration**
```
Settings → Advanced → Integrations → JellySearch
✓ Enable JellySearch
✓ Configure server endpoint
✓ Set up authentication
✓ Initialize search index
```

**2. Server Configuration**
```yaml
JellySearch Settings:
  Server URL: https://jellysearch.yourdomain.com
  API Endpoint: /api/v1/search
  Authentication: Bearer token or API key
  Search Timeout: 15 seconds
  Results Per Page: 25
  Cache Duration: 5 minutes
```

**3. Search Index Setup**
```
Initial Setup:
✓ Scan media libraries
✓ Build search index
✓ Configure metadata sources
✓ Set up automatic updates
```

## Search Features

### Basic Search

**Quick Search:**
- Simple text search across all content
- Real-time suggestions as you type
- Recent search history
- Popular search terms

**Search Categories:**
- Movies and documentaries
- TV shows and series
- Music albums and tracks
- Audiobooks and podcasts

### Advanced Search

**Filtering Options:**
```
Content Type: Movies, TV, Music, Books
Genre: Action, Comedy, Drama, etc.
Release Year: Range selection (e.g., 2020-2024)
Rating: IMDb, RT, User ratings
Duration: Runtime filters
Quality: Resolution, codec, audio
Language: Audio/subtitle languages
Status: Available, Requested, Downloading
```

**Boolean Search:**
- AND/OR operators
- Exact phrase matching
- Wildcard support (*, ?)
- Exclusion search (-term)
- Grouped search terms

### Smart Search

**Intelligent Features:**
- Fuzzy search for typos
- Synonym recognition
- Multi-language support
- Context-aware suggestions
- Learning from user behavior

**Search Suggestions:**
- Autocomplete as you type
- Popular searches
- Trending content
- Related searches
- Recent searches

## Search Interface

### Mobile-Optimized Interface

**Touch-Friendly Design:**
- Large search bar
- Easy filter access
- Swipe navigation
- Quick actions
- Voice search support

**Results Display:**
- Grid and list views
- Rich thumbnails
- Quick info overlay
- Sorting options
- Infinite scroll

### Voice Search

**Voice Commands:**
```
"Search for action movies from 2023"
"Find comedies starring Tom Hanks"
"Show me highly rated sci-fi series"
"What's new in my library?"
```

**Voice Features:**
- Natural language processing
- Multi-language voice recognition
- Offline voice processing (if supported)
- Voice command shortcuts

## Content Discovery

### Recommendation Engine

**Personalized Suggestions:**
- Based on viewing history
- Similar content recommendations
- Trending in your genres
- Friends' favorites (if social features enabled)

**Discovery Categories:**
- Continue Watching
- Recently Added
- Popular This Week
- Hidden Gems
- Staff Picks

### Metadata Integration

**Rich Information Display:**
- Plot summaries and descriptions
- Cast and crew information
- User and critic ratings
- Streaming quality information
- Availability across libraries

**External Sources:**
- IMDb integration
- Rotten Tomatoes scores
- The Movie Database (TMDb)
- TheTVDB information
- Custom metadata sources

## Advanced Features

### Cross-Library Search

**Multi-Server Support:**
- Search across multiple Jellyfin servers
- Unified results display
- Server-specific filtering
- Availability indicators
- Direct server connection

**Library Management:**
- Add/remove search sources
- Priority ranking
- Connection status monitoring
- Sync status display

### Search Analytics

**Personal Analytics:**
- Search history tracking
- Most searched content
- Discovery patterns
- Time-based analytics
- Search success rates

**Usage Statistics:**
- Popular search terms
- Content discovery metrics
- Search performance data
- User behavior insights

### Offline Search

**Cached Search:**
- Offline search index
- Recently searched content
- Downloaded content search
- Metadata caching
- Sync when online

**Index Management:**
- Local index updates
- Selective sync options
- Storage management
- Index optimization

## Performance Optimization

### Search Speed

**Performance Tuning:**
- Search result caching
- Index optimization
- Parallel search execution
- Progressive loading
- Lazy loading of metadata

**Network Optimization:**
- Compressed search results
- Selective data loading
- Background prefetching
- Connection pooling
- Request debouncing

### Resource Management

**Memory Usage:**
- Search result caching limits
- Image thumbnail caching
- Metadata storage optimization
- Memory cleanup routines

**Storage Management:**
- Search index size monitoring
- Automatic cleanup
- Selective indexing
- Compression options

## Troubleshooting JellySearch

### Connection Issues

**Cannot Connect to JellySearch:**
```
Troubleshooting Steps:
✓ Verify server URL and port
✓ Check network connectivity
✓ Test API endpoint directly
✓ Verify authentication credentials
✓ Check firewall settings
```

**Slow Search Performance:**
```
Performance Issues:
✓ Check server resources
✓ Verify network speed
✓ Optimize search index
✓ Reduce result set size
✓ Enable search caching
```

### Search Quality Issues

**Poor Search Results:**
- Rebuild search index
- Update metadata sources
- Verify library scanning
- Check content organization
- Review search algorithms

**Missing Content:**
- Verify library permissions
- Check indexing status
- Review content filters
- Update search index
- Confirm content availability

### Index Management

**Index Corruption:**
```
Recovery Steps:
1. Stop JellySearch service
2. Backup current index
3. Clear corrupted index
4. Rebuild from scratch
5. Test search functionality
```

**Index Updates:**
```
Maintenance Tasks:
✓ Schedule regular updates
✓ Monitor index size
✓ Verify content accuracy
✓ Clean up orphaned entries
```

## Integration Benefits

### Enhanced User Experience

**Improved Discovery:**
- Find content faster
- Better search accuracy
- Intelligent suggestions
- Cross-library visibility
- Rich content information

**Mobile Optimization:**
- Touch-friendly interface
- Voice search support
- Offline capabilities
- Fast response times
- Intuitive navigation

### Administrative Benefits

**Content Management:**
- Library overview
- Content gap analysis
- Usage analytics
- Search performance metrics
- User behavior insights

**System Integration:**
- Unified search experience
- Reduced server load
- Efficient resource usage
- Scalable architecture
- Easy maintenance

## Configuration Examples

### Basic Setup
```json
{
  "jellysearch": {
    "enabled": true,
    "server_url": "http://jellysearch.local:8080",
    "api_key": "your-api-key",
    "timeout": 15,
    "cache_duration": 300
  }
}
```

### Advanced Configuration
```json
{
  "jellysearch": {
    "enabled": true,
    "servers": [
      {
        "name": "Main Server",
        "url": "http://jellysearch.main:8080",
        "priority": 1
      },
      {
        "name": "Backup Server", 
        "url": "http://jellysearch.backup:8080",
        "priority": 2
      }
    ],
    "search_options": {
      "max_results": 50,
      "include_adult": false,
      "fuzzy_matching": true,
      "voice_search": true
    }
  }
}
```

## Future Enhancements

### Planned Features

**AI-Powered Search:**
- Natural language queries
- Content recommendation ML
- Visual search capabilities
- Semantic search understanding

**Social Features:**
- Collaborative filtering
- Social search sharing
- Community recommendations
- Trending among friends

### Integration Roadmap

**Enhanced Integrations:**
- More metadata sources
- Streaming service awareness
- Content availability tracking
- Real-time content updates

## Support Resources

### Documentation
- [JellySearch Documentation](https://docs.jellysearch.org)
- [API Reference](https://api.jellysearch.org)
- [Configuration Guide](https://github.com/jellysearch/jellysearch)

### Community
- JellySearch Discord
- GitHub discussions
- Community forums
- Feature requests

### Related Documentation
- [Troubleshooting Guide](troubleshooting.md)
- [Advanced Configuration](plugin.md)
- [Development Setup](../development/setup.md)