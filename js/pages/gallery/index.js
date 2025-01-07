import { renderGalleryItem } from './template.js';
import { galleryItems } from './data.js';

export const initGallery = () => {
    const container = document.querySelector('.gallery-grid');
    if (!container) return;

    galleryItems.forEach(item => {
        const element = renderGalleryItem(item);
        element.className = 'gallery-item fade-up';
        container.appendChild(element);
    });
};