# Initial Setup

Complete guide to setting up StreamyFin with your Jellyfin server.

## First Time Setup

### Step 1: Launch StreamyFin

After installing the app, launch it from your device's home screen. You'll be greeted with the welcome screen.

### Step 2: Add Your Server


1. Enter your server details: 
   - **Server Address**: Your Jellyfin server URL
   - **Port**: Usually 8096 (only necessary on local network)
2. Tap **"Connect"**

**Server Address Examples:**
- Local network: `http://192.168.1.100:8096`
- Domain name: `https://jellyfin.yourdomain.com`
- Dynamic DNS: `http://myhome.ddns.net:8096`

### Step 3: Sign In

1. Enter your **username** and **password**
2. Tap **" Log In"**
3. Wait for the connection to be established


## Server Connection Types

### Local Network Connection

For servers on your home network:
- Use your server's local IP address
- Typically starts with `192.168.x.x` or `10.x.x.x`
- Fastest performance, no internet required
- Only works when connected to the same network

### Remote Connection

For accessing your server from anywhere:
- Requires port forwarding or reverse proxy
- Use your public IP or domain name
- Consider security implications
- May have slower performance

### HTTPS/SSL Setup

For secure connections:
1. Ensure your Jellyfin server has SSL configured
2. Use `https://` in the server address
3. Install proper SSL certificates
4. Some features require HTTPS (like PWA)

## Libraries

### Library Access

Your available content depends on:
- Server library configuration
- User permissions
- Content ratings and parental controls
- Library sharing settings

## Troubleshooting Setup Issues

### Cannot Connect to Server

**Check Server Address:**
- Verify the IP address or domain name
- Ensure the port number is correct
- Test the address in a web browser

**Network Issues:**
- Confirm both devices are on same network (local)
- Check firewall settings
- Verify Jellyfin server is running

### Authentication Failed

**Verify Credentials:**
- Double-check username and password
- Ensure caps lock is not enabled
- Try logging in via web browser first

**Server Settings:**
- Confirm user account is enabled
- Check if account has appropriate permissions
- Verify user is not locked out

### App Crashes During Setup

**Basic Troubleshooting:**
- Restart the app completely
- Restart your device
- Ensure you have the latest app version
- Clear app cache if available

**Advanced Steps:**
- Check device compatibility
- Verify sufficient storage space
- Update your device's operating system

## Next Steps

Once setup is complete:

1. **Explore Your Library**: Browse movies, TV shows, and music
2. **Customize Settings**: Adjust playback and streaming preferences
3. **Set Up Downloads**: Configure offline content for mobile viewing
4. **Enable Casting**: Connect Chromecast or other devices

Continue to the [Streaming Guide](streaming.md) to learn about playback features.