# 💌 Valentine's Day Interactive Envelope

An interactive, animated Valentine's Day card with an envelope opening animation, floating hearts, falling flower petals, and background music.

## ✨ Features

- **Interactive Envelope Animation**: Click the "OPEN ME" seal to reveal the message with a 3D flip animation
- **Personalized Message**: Customize the romantic message inside
- **Flower Petals**: 50 animated flower petals fall when the envelope opens
- **Background Music**: Ed Sheeran's "Thinking Out Loud" plays on demand with play/pause controls
- **Floating Hearts**: Animated hearts float across the background
- **Custom Background**: Beautiful painted hearts background image
- **Sound Effects**: Synthesized paper rustling sounds when opening/closing
- **Responsive Design**: Works on mobile devices and desktop
- **Modern CSS**: Smooth animations using CSS transitions and transforms

## 🎨 Design Elements

- **Fonts**: 
  - Playfair Display (headings)
  - Dancing Script (message text)
  - Quicksand (UI elements)
- **Color Scheme**: Pink gradients (#ff1744, #ff5177, #ff6b9d, #ffb3d9, #ffc3e1)
- **Dimensions**: 450x300px envelope (responsive on mobile)

## 📁 Project Structure

```
valentine-project/
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # Interactive functionality
├── assets/
│   └── background.png  # Custom painted hearts background
└── README.md           # This file
```

## 🚀 Usage

### Quick Start

1. Clone this repository:
```bash
git clone https://github.com/yourusername/valentine-envelope.git
cd valentine-envelope
```

2. Open `index.html` in your web browser

That's it! No build process or dependencies required.

### Customization

**Change the Message:**
Edit the message in `index.html`:
```html
<p class="message">Your custom message here ❤️</p>
```

**Change the Background:**
Replace `assets/background.png` with your own image

**Change the Music:**
Update the audio source in `index.html`:
```html
<audio id="valentineAudio" loop>
    <source src="your-music-file.mp3" type="audio/mpeg">
</audio>
```

**Adjust Colors:**
Modify the color variables in `style.css`

## 🎵 Music Attribution

The default music uses a victory theme from [Stratagems project](https://github.com/robiningelbrecht/stratagems). You can replace it with any audio file of your choice.

## 🌐 Browser Compatibility

- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Mobile)

**Note**: Some browsers block audio autoplay. Users need to click the "PLAY" button to start the music.

## 🛠️ Technical Details

- Pure HTML/CSS/JavaScript (no frameworks)
- Web Audio API for sound effects
- CSS 3D transforms for envelope animation
- CSS animations for hearts and petals
- HTML5 audio element for background music

## 📱 Mobile Responsive

The design automatically adapts to smaller screens with:
- Scaled envelope size
- Adjusted font sizes
- Touch-friendly button sizes

## 📄 License

This project is open source and available under the MIT License.

## 💝 Perfect For

- Valentine's Day cards
- Anniversary messages
- Romantic proposals
- Love letters
- Special occasions

## 🤝 Contributing

Feel free to fork this project and customize it for your needs! Pull requests are welcome.

## 📧 Contact

Created with ❤️ for someone special

---

**Enjoy spreading love! 💕**
