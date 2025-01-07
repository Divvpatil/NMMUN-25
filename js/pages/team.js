import { secretariat, directorate } from '../data/team.js';

export const initTeam = () => {
    const secretariatGrid = document.querySelector('.secretariat-grid');
    const directorateGrid = document.querySelector('.directorate-grid');

    if (secretariatGrid) {
        secretariat.forEach(member => {
            const card = createTeamCard(member);
            secretariatGrid.appendChild(card);
        });
    }

    if (directorateGrid) {
        directorate.forEach(member => {
            const card = createTeamCard(member);
            directorateGrid.appendChild(card);
        });
    }
};

const createTeamCard = (member) => {
    const card = document.createElement('div');
    card.className = 'team-card fade-up';
    card.innerHTML = `
        <h2 class="position">${member.position}</h2>
        <div class="team-image">
            <img src="${member.image}" alt="${member.name}" class="animate-float">
        </div>
        <h3 class="gradient-text">${member.name}</h3>
        
    `;
    return card;
};