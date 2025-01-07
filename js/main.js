import { initScrollEffects } from './animations/scrollEffects.js';
import { initHome } from './pages/home.js';
import { initCommittees } from './pages/committees.js';
import { initSponsors } from './pages/sponsors.js';
import { initTeam } from './pages/team.js';
import { initGallery } from './pages/gallery.js';

// Terms & Conditions Functions
function initTermsAndConditions() {
    // Check if terms have been accepted
    if (!localStorage.getItem('termsAccepted')) {
        const termsModal = document.getElementById('termsModal');
        if (termsModal) {
            termsModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }
}

function acceptTerms() {
    localStorage.setItem('termsAccepted', 'true');
    const termsModal = document.getElementById('termsModal');
    if (termsModal) {
        termsModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

function declineTerms() {
    window.location.href = 'https://www.google.com'; // Replace with your desired URL
}

function showTerms() {
    const termsModal = document.getElementById('termsModal');
    if (termsModal) {
        termsModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Make terms functions available globally
window.acceptTerms = acceptTerms;
window.declineTerms = declineTerms;
window.showTerms = showTerms;

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Terms & Conditions first
    initTermsAndConditions();

    // Initialize page-specific functionality
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

    // Initialize scroll effects
    initScrollEffects();
});