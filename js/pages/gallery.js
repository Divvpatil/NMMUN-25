import { galleryData } from '../data/gallery.js';

export const initGallery = () => {
  const container = document.querySelector('.gallery-grid');
  if (!container) return;

  galleryData.forEach(item => {
    const card = document.createElement('div');
    card.className = 'gallery-item fade-up';
    
    card.innerHTML = `
      <div class="gallery-image">
      <a href="${item.link}">
        <img src="${item.image}" alt="${item.title}">
        <div class="gallery-overlay">
        
          <h3>${item.title}</h3>
        
        </div>
      </a>
      </div>
    `;
    
    container.appendChild(card);
  });
};