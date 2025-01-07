import { renderFaqItem } from './template.js';
import { faqItems } from './data.js';

export const initFaqs = () => {
    const container = document.querySelector('.faqs-container');
    if (!container) return;

    faqItems.forEach(item => {
        const element = renderFaqItem(item);
        element.className = 'faq-item fade-up';
        container.appendChild(element);
    });

    // Initialize accordion functionality
    initAccordion();
};

const initAccordion = () => {
    document.querySelectorAll('.faq-item').forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            const isOpen = item.classList.contains('active');
            
            // Close all other items
            document.querySelectorAll('.faq-item.active').forEach(activeItem => {
                if (activeItem !== item) {
                    activeItem.classList.remove('active');
                    activeItem.querySelector('.faq-answer').style.maxHeight = null;
                }
            });

            // Toggle current item
            item.classList.toggle('active');
            if (!isOpen) {
                answer.style.maxHeight = answer.scrollHeight + 'px';
            } else {
                answer.style.maxHeight = null;
            }
        });
    });
};