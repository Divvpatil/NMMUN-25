import { safeQuerySelector } from '../../utils/domUtils.js';
import { fallbackNews } from './mockData.js';
import { renderNewsItem } from './template.js';
import { config } from '../../config/index.js';

export class NewsWidget {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }

    async fetchNews() {
        try {
            if (!this.apiKey) return fallbackNews;
            
            const response = await fetch(`${config.API_ENDPOINTS.NEWS}?category=world&apiKey=${this.apiKey}`);
            const data = await response.json();
            return data.articles.slice(0, 5);
        } catch (error) {
            console.error('Error fetching news:', error);
            return fallbackNews;
        }
    }

    async render(elementId) {
        const element = safeQuerySelector(elementId);
        if (!element) return;

        const news = await this.fetchNews();
        element.innerHTML = news.map(renderNewsItem).join('');
    }
}