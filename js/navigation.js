export const initNavigation = () => {
    const nav = document.querySelector('.main-nav');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            nav.classList.remove('nav-hidden');
            return;
        }
        
        if (currentScroll > lastScroll && !nav.classList.contains('nav-hidden')) {
            nav.classList.add('nav-hidden');
        } else if (currentScroll < lastScroll && nav.classList.contains('nav-hidden')) {
            nav.classList.remove('nav-hidden');
        }
        
        lastScroll = currentScroll;
    });
};

export const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const target = document.querySelector(anchor.getAttribute('href'));
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
};