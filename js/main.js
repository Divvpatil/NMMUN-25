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
    
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    mobileMenuBtn?.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks?.classList.contains('show') && 
            !e.target.closest('.nav-links') && 
            !e.target.closest('.mobile-menu-btn')) {
            navLinks.classList.remove('show');
        }
    });

    // Set active page
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.nav-links a');
    
    links.forEach(link => {
        // Remove any existing active classes
        link.classList.remove('active');
        
        // Get the path from the href
        const linkPath = link.getAttribute('href');
        
        // Check if the current path matches the link path
        if (currentPath === linkPath || 
            (currentPath === '/' && linkPath === '/index.html') ||
            (currentPath === '/index.html' && linkPath === '/')) {
            link.classList.add('active');
        }
    });
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