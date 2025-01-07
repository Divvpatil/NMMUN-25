import { aboutData } from '../data/about.js';

export const initHome = () => {
    const mainContent = document.querySelector('main');
    if (!mainContent) return;

    const aboutContainer = document.createElement('div');
    aboutContainer.className = 'about-container';

    // Render about sections with images next to text
    aboutContainer.appendChild(renderAboutSection(aboutData.history));
    aboutContainer.appendChild(renderAboutSection(aboutData.campus, true)); // Reversed for campus section
    aboutContainer.appendChild(renderAboutSection(aboutData.theme));

    // Insert after hero section
    const heroSection = mainContent.querySelector('.hero');
    if (heroSection) {
        heroSection.after(aboutContainer);
    }

    // Initialize the intersection observer to handle the visibility of sections
    initVisibilityObserver();
};

const renderAboutSection = (data, isReversed = false) => {
    const section = document.createElement('section');
    section.className = 'about-section';

    section.innerHTML = `
        <div class="container">
            <div class="about-content ${isReversed ? 'reversed' : ''}">
                <div class="about-text">
                    <h2 class="gradient-text">${data.title}</h2>
                    <p>${data.content}</p>
                </div>
                <div class="about-image">
                    <img src="${data.image}" alt="${data.title}">
                </div>
            </div>
        </div>
    `;

    return section;
};

const initVisibilityObserver = () => {
    const sections = document.querySelectorAll('.about-section');
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'visible' class to trigger animations
                entry.target.classList.add('visible');
                // Stop observing the section once it becomes visible
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Trigger when 50% of the section is visible

    // Observe each section
    sections.forEach(section => observer.observe(section));
};
