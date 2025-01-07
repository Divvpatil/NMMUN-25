export const renderAboutSection = (data, isReversed = false) => {
  const section = document.createElement('section');
  section.className = 'about-section section fade-up';
  
  section.innerHTML = `
    <div class="container">
      <div class="about-content ${isReversed ? 'reversed' : ''}">
        <div class="about-text">
          <h2 class="gradient-text">${data.title}</h2>
          <p>${data.content}</p>
        </div>
        <div class="about-image">
          <img src="${data.image}" alt="${data.title}" class="fade-in">
        </div>
      </div>
    </div>
  `;
  
  return section;
};