export const initTextAnimation = () => {
    const animatedTexts = document.querySelectorAll('.animate-text');
    
    animatedTexts.forEach(text => {
        const letters = text.textContent.split('');
        text.textContent = '';
        
        letters.forEach((letter, i) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${i * 0.1}s`;
            text.appendChild(span);
        });
    });
};