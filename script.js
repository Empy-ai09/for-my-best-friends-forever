// Hide loading screen after animation
setTimeout(() => {
    document.getElementById('loadingScreen').classList.add('hidden');
}, 3500);

// Celebration function with confetti
function celebrate() {
    createConfetti();
    playBirthdaySong();
}

// Create confetti effect
function createConfetti() {
    const container = document.getElementById('confettiContainer');
    const colors = ['#FFB6C1', '#FFE5E5', '#FFF8F0', '#E8989C', '#FFFFFF'];
    
    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            container.appendChild(confetti);
            
            setTimeout(() => confetti.remove(), 3000);
        }, i * 30);
    }
}

// Play birthday song (audio context)
function playBirthdaySong() {
    const notes = [
        { freq: 262, duration: 400 }, // C
        { freq: 262, duration: 200 }, // C
        { freq: 294, duration: 600 }, // D
        { freq: 262, duration: 600 }, // C
        { freq: 349, duration: 600 }, // F
        { freq: 330, duration: 1200 }, // E
    ];
    
    if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
        const AudioContextClass = AudioContext || webkitAudioContext;
        const audioContext = new AudioContextClass();
        let startTime = audioContext.currentTime;
        
        notes.forEach(note => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            oscillator.frequency.value = note.freq;
            oscillator.type = 'sine';
            
            gainNode.gain.setValueAtTime(0.3, startTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, startTime + note.duration / 1000);
            
            oscillator.start(startTime);
            oscillator.stop(startTime + note.duration / 1000);
            
            startTime += note.duration / 1000;
        });
    }
}

// Reveal secret message
function revealSecret() {
    const secretMsg = document.getElementById('secretMessage');
    if (secretMsg.style.display === 'block') {
        secretMsg.style.display = 'none';
    } else {
        secretMsg.style.display = 'block';
    }
}

// Add sparkle effect on mouse move
document.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.95) {
        const sparkle = document.createElement('div');
        sparkle.style.position = 'fixed';
        sparkle.style.left = e.clientX + 'px';
        sparkle.style.top = e.clientY + 'px';
        sparkle.style.width = '4px';
        sparkle.style.height = '4px';
        sparkle.style.background = '#FFB6C1';
        sparkle.style.borderRadius = '50%';
        sparkle.style.pointerEvents = 'none';
        sparkle.style.zIndex = '9997';
        sparkle.style.animation = 'sparkle-fade 1s ease forwards';
        document.body.appendChild(sparkle);
        
        setTimeout(() => sparkle.remove(), 1000);
    }
});

// Add sparkle animation
const style = document.createElement('style');
style.textContent = `
    @keyframes sparkle-fade {
        0% { opacity: 1; transform: scale(1); }
        100% { opacity: 0; transform: scale(0); }
    }
`;
document.head.appendChild(style);
