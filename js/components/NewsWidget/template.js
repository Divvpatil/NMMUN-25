export const renderNewsItem = (article) => `
    <div class="news-item">
        <h3>${article.title}</h3>
        <p>${article.description}</p>
        <a href="${article.url}" target="_blank">Read more</a>
    </div>
`;