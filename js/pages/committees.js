import { committeesData } from '../data/committees.js';

export const initCommittees = () => {
    const container = document.querySelector('.committees-grid');
    if (!container) return;

    committeesData.forEach(committee => {
        const card = document.createElement('div');
        card.className = 'committee-card fade-up';
        card.innerHTML = `
            <h3 class="gradient-text">${committee.name}</h3>
            <p class="committee-description">${committee.description}</p>
        `;
        container.appendChild(card);
    });
};