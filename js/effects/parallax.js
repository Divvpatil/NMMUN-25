export const initParallax = () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    
    window.addEventListener('scroll', () => {
        parallaxElements.forEach(element => {
            const speed = element.dataset.speed || 0.5;
            const rect = element.getBoundingClientRect();
            const scrolled = window.pageYOffset;
            
            if (rect.top <= window.innerHeight && rect.bottom >= 0) {
                element.style.transform = `translateY(${scrolled * speed}px)`;
            }
        });
    });
};