export const renderFaqItem = (item) => {
    const element = document.createElement('div');
    element.innerHTML = `
        <div class="faq-question">
            <h3>${item.question}</h3>
            <span class="faq-icon">+</span>
        </div>
        <div class="faq-answer">
            <p>${item.answer}</p>
        </div>
    `;
    return element;
};