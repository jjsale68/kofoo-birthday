// Fade-in animations
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animationDelay = `${index * 0.2}s`;
        }, 0);
    });
});

// Memory Jar
function showMemoryNote() {
    const notes = [
        'I love you more every day, Kofoworola!',
        'Your smile is my favorite thing.',
        'You’re my forever star.'
    ];
    const note = notes[Math.floor(Math.random() * notes.length)];
    const noteElement = document.getElementById('memory-note');
    noteElement.textContent = note;
    noteElement.style.display = 'block';
}

// Guestbook Form (stores messages locally)
document.getElementById('guestbook-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = e.target.querySelector('textarea').value;
    const messagesDiv = document.getElementById('guestbook-messages');
    const p = document.createElement('p');
    p.textContent = message;
    messagesDiv.appendChild(p);
    e.target.reset();
    localStorage.setItem('guestbook', messagesDiv.innerHTML);
});

// Load guestbook messages
if (document.getElementById('guestbook-messages')) {
    document.getElementById('guestbook-messages').innerHTML = localStorage.getItem('guestbook') || '';
}

// Countdown Timer (set your target date/time)
const countdownDate = new Date('2025-05-10T20:00:00').getTime();
const countdownElement = document.getElementById('countdown');
if (countdownElement) {
    const countdown = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        countdownElement.textContent = `${hours}h ${minutes}m ${seconds}s`;
        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.textContent = 'It’s time for your surprise!';
        }
    }, 1000);
}