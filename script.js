// Audio Element
const audio = document.getElementById('valentineAudio');
audio.volume = 0.5;

// Paper Sound Effect using Web Audio API
let audioContext;
let paperSound;

function initAudioContext() {
    if (!audioContext) {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
}

function createPaperSound() {
    initAudioContext();
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(200, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(100, audioContext.currentTime + 0.3);
    
    gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.3);
}

// Flower Petal Creation
function createFlowerPetals() {
    const colors = ['#ffb3d9', '#ff6b9d', '#ffc3e1', '#ff9ec4', '#fff0f5'];
    
    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.left = Math.random() * 100 + 'vw';
            petal.style.top = '-20px';
            petal.style.width = (Math.random() * 15 + 10) + 'px';
            petal.style.height = (Math.random() * 15 + 10) + 'px';
            petal.style.background = `radial-gradient(ellipse at center, ${colors[Math.floor(Math.random() * colors.length)]} 0%, #ff6b9d 100%)`;
            petal.style.animationDuration = (Math.random() * 2 + 3) + 's';
            petal.style.animationDelay = '0s';
            
            document.body.appendChild(petal);
            
            setTimeout(() => {
                petal.remove();
            }, 5000);
        }, i * 50);
    }
}

// Toggle Envelope Function
function toggleEnvelope() {
    const envelope = document.querySelector('.envelope-wrapper');
    
    if (!envelope.classList.contains('flap')) {
        // Opening envelope
        initAudioContext();
        createPaperSound();
        envelope.classList.add('flap');
        
        setTimeout(() => {
            createFlowerPetals();
        }, 400);
    }
}

// Close Envelope Function
function closeEnvelope() {
    const envelope = document.querySelector('.envelope-wrapper');
    
    // Stop music when closing
    audio.pause();
    audio.currentTime = 0;
    
    // Play paper sound
    initAudioContext();
    createPaperSound();
    
    envelope.classList.remove('flap');
}

// Play Music Function
function playMusic() {
    audio.play().catch(function(error) {
        console.log("Autoplay prevented. Music will start after interaction.");
    });
}

// Pause Music Function
function pauseMusic() {
    audio.pause();
}
