import { galleryData } from '../data/gallery.js';

export const initGallery = () => {
  const container = document.querySelector('.gallery-grid');
  if (!container) return;

  galleryData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'gallery-item fade-up';
    
    card.innerHTML = `
      <div class="gallery-image">
        <img src="${item.image}" alt="${item.title}">
        <div class="gallery-overlay">
          <span class="category">${item.category}</span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
};