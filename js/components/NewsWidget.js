export class NewsWidget {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async fetchNews() {
        try {
            // Use a fallback for development if no API key is provided
            if (!this.apiKey) {
                return this.getFallbackNews();
            }
            
            const response = await fetch(`https://newsapi.org/v2/top-headlines?category=world&apiKey=${this.apiKey}`);
            const data = await response.json();
            return data.articles.slice(0, 5);
        } catch (error) {
            console.error('Error fetching news:', error);
            return this.getFallbackNews();
        }
    }

    getFallbackNews() {
        // Provide fallback news for development/demo
        return [
            {
                title: "UN Security Council Discusses Global Peace Initiatives",
                description: "Recent developments in international peacekeeping missions...",
                url: "#"
            },
            {
                title: "Climate Change Summit Announces New Agreements",
                description: "World leaders commit to new environmental protection measures...",
                url: "#"
            },
            {
                title: "Global Economic Forum Addresses Trade Relations",
                description: "International trade policies and their impact on developing nations...",
                url: "#"
            }
        ];
    }

    async render(elementId) {
        const element = document.getElementById(elementId);
        if (!element) {
            console.warn(`Element with id '${elementId}' not found for NewsWidget`);
            return;
        }

        const news = await this.fetchNews();
        
        element.innerHTML = news.map(article => `
            <div class="news-item">
                <h3>${article.title}</h3>
                <p>${article.description}</p>
                <a href="${article.url}" target="_blank">Read more</a>
            </div>
        `).join('');
    }
}