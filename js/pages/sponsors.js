import { sponsorsData } from '../data/sponsors.js';

export const initSponsors = () => {
  const container = document.querySelector('.sponsors-container');
  if (!container) return;

  // Render sponsor tiers
  Object.entries(sponsorsData).forEach(([tier, sponsors]) => {
    const section = document.createElement('div');
    section.className = 'sponsors-tier';
    
    section.innerHTML = `
      <h2 class="tier-title gradient-text">${tier.charAt(0).toUpperCase() + tier.slice(1)} Sponsors</h2>
      <div class="sponsors-grid ${tier}-grid">
        ${sponsors.map(sponsor => `
          <div class="sponsor-card fade-up">
            <div class="sponsor-logo">
              <img src="${sponsor.logo}" alt="${sponsor.name}">
            </div>
            <h3>${sponsor.name}</h3>
            <a href="${sponsor.website}" class="sponsor-link" target="_blank">Visit Website</a>
          </div>
        `).join('')}
      </div>
    `;
    
    container.appendChild(section);
  });
};