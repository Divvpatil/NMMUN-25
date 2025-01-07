export const renderGalleryItem = (item) => {
    const element = document.createElement('div');
    element.innerHTML = `
        <div class="gallery-image">
            <img src="${item.image}" alt="${item.title}">
            <div class="gallery-overlay">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </div>
        </div>
    `;
    return element;
};