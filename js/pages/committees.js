import { committeesData } from '../data/committees.js';

export const initCommittees = () => {
    const container = document.querySelector('.committees-grid');
    if (!container) return;

    committeesData.forEach(committee => {
        const card = document.createElement('div');
        card.className = 'committee-card fade-in-up';
        card.innerHTML = `
            <img src="${committee.image}" alt="${committee.name}" class="committee-image">
            <div class="committee-title">
                <h3 class="gradient-text">${committee.name}</h3>
            </div>
            <div class="committee-content">
                <h3 class="gradient-text">${committee.name}</h3>
                <p class="committee-description">${committee.description}</p>
            </div>
        `;
        container.appendChild(card);

        // Add click event listener to toggle 'active' class
        card.addEventListener('click', (e) => {
            e.preventDefault();
            const currentActive = container.querySelector('.committee-card.active');
            if (currentActive && currentActive !== card) {
                currentActive.classList.remove('active');
            }
            card.classList.toggle('active');
        });
    });
};

