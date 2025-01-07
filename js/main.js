import { initScrollEffects } from './animations/scrollEffects.js';
import { initHome } from './pages/home.js';
import { initCommittees } from './pages/committees.js';
import { initSponsors } from './pages/sponsors.js';
import { initTeam } from './pages/team.js';
import { initGallery } from './pages/gallery.js';

document.addEventListener('DOMContentLoaded', () => {

    if (window.location.pathname === '/' || window.location.pathname === '/index.html') {
        initHome();
    }

    if (window.location.pathname === '/committees.html') {
        initCommittees();
    } else if (window.location.pathname === '/sponsors.html') {
        initSponsors();
    } else if (window.location.pathname === '/team.html') {
        initTeam();
    } else if (window.location.pathname === '/gallery.html') {
        initGallery();
    }

    initScrollEffects();
    
});
// Add this to your main.js file
document.addEventListener('DOMContentLoaded', function() {
    // Check if terms have been accepted
    if (!localStorage.getItem('termsAccepted')) {
        document.getElementById('termsModal').style.display = 'flex';
        // Prevent scrolling of background content
        document.body.style.overflow = 'hidden';
    }
});

function acceptTerms() {
    localStorage.setItem('termsAccepted', 'true');
    document.getElementById('termsModal').style.display = 'none';
    document.body.style.overflow = 'auto';
}

function declineTerms() {
    // Redirect to a different page or show a message
    window.location.href = 'https://www.google.com'; // Replace with your desired URL
}

// Optional: Function to show terms again if needed
function showTerms() {
    document.getElementById('termsModal').style.display = 'flex';
    document.body.style.overflow = 'hidden';
}