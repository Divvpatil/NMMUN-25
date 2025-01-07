export const initPageTransitions = () => {
    document.body.classList.add('fade-in');
    
    // Remove initial animation class after transition
    setTimeout(() => {
        document.body.classList.remove('fade-in');
    }, 1000);
};