# 🚀 Deployment Guide

This guide explains how to deploy your Valentine's Day envelope card to various platforms.

## 📦 What's Included

Your project contains two versions:

1. **Modular Version** (recommended for GitHub)
   - `index.html` - Main HTML file
   - `style.css` - Stylesheet
   - `script.js` - JavaScript functionality
   - `assets/background.png` - Background image
   
2. **Standalone Version**
   - `valentine-standalone.html` - Single file with everything embedded (6.5 MB)
   - Perfect for sharing directly or emailing

## 🌐 GitHub Pages Deployment

### Option 1: Via GitHub Website

1. Create a new repository on GitHub
2. Upload all files from the `valentine-project` folder
3. Go to repository Settings → Pages
4. Select "main" branch and "/ (root)" folder
5. Click Save
6. Your site will be live at: `https://yourusername.github.io/repository-name`

### Option 2: Via Command Line

```bash
# Initialize git repository
cd valentine-project
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Valentine's Day envelope card"

# Add your GitHub repository as remote
git remote add origin https://github.com/yourusername/valentine-envelope.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages in repository settings.

## 🔗 Other Deployment Options

### Netlify (Drag & Drop)

1. Go to [netlify.com](https://netlify.com)
2. Sign up/login
3. Drag the `valentine-project` folder to the upload area
4. Your site is live instantly!

### Vercel

1. Go to [vercel.com](https://vercel.com)
2. Sign up/login with GitHub
3. Import your repository
4. Deploy automatically

### CodePen (Quick Demo)

1. Go to [codepen.io](https://codepen.io)
2. Create a new pen
3. Copy `index.html` content to HTML panel
4. Copy `style.css` content to CSS panel
5. Copy `script.js` content to JS panel
6. Note: You'll need to convert the background image to a data URL

## 📧 Sharing the Standalone Version

The `valentine-standalone.html` file contains everything in one file:

### Email
- Attach the file to an email
- Recipient can open it directly in their browser

### Cloud Storage
- Upload to Google Drive, Dropbox, OneDrive
- Share the link (make sure it's publicly accessible)

### File Transfer
- Send via messaging apps
- Use file transfer services like WeTransfer

## 🔐 Custom Domain

After deploying to GitHub Pages, Netlify, or Vercel:

1. Purchase a domain from a registrar (Namecheap, Google Domains, etc.)
2. Add the domain in your hosting platform's settings
3. Update DNS records as instructed
4. Wait for propagation (up to 48 hours)

Example: `yourdomain.com` or `valentine.yourdomain.com`

## ⚡ Performance Tips

### For GitHub Hosting

If the background image is too large:
1. Compress the image using [TinyPNG](https://tinypng.com)
2. Replace `assets/background.png` with the compressed version

### For Faster Loading

Consider hosting the background image on a CDN:
1. Upload to [Imgur](https://imgur.com) or [Cloudinary](https://cloudinary.com)
2. Update the URL in `style.css`:
```css
background-image: url('https://your-cdn-url/background.png');
```

## 🎵 Music Considerations

The default music uses an external URL. For better control:

1. Host your own music file
2. Place it in the `assets/` folder
3. Update `index.html`:
```html
<source src="assets/your-music.mp3" type="audio/mpeg">
```

**Note**: Keep music files under 10MB for best performance.

## 🐛 Troubleshooting

### Music Not Playing
- Browsers block autoplay by default
- Users must click "PLAY" button
- Ensure the audio file URL is accessible

### Images Not Loading
- Check file paths are correct
- Ensure images are in the `assets/` folder
- Verify the image file is not corrupted

### Animation Not Working
- Clear browser cache
- Test in different browsers
- Check browser console for errors (F12)

## ✅ Pre-Deployment Checklist

- [ ] Test the card in multiple browsers
- [ ] Verify music plays when clicking PLAY button
- [ ] Check animations work smoothly
- [ ] Test on mobile devices
- [ ] Customize the message for your recipient
- [ ] Optimize images if file size is too large
- [ ] Update README with your repository information
- [ ] Test the deployed version before sharing

## 💡 Tips

1. **Preview Locally**: Double-click `index.html` to test before deploying
2. **Mobile Testing**: Use browser DevTools device emulation
3. **Share URL**: The deployed URL is much easier to share than a large file
4. **Private Repo**: Keep your GitHub repo private if the message is personal
5. **Version Control**: Commit changes regularly to track modifications

---

**Need Help?** Check the main README.md for more information.
