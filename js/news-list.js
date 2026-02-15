/**
 * News List Manager
 * Handles dynamic rendering of news cards in lists/grids
 */

const NewsList = {
    /**
     * Renders a list of news into a container
     * @param {string} containerId - ID of the DOM element to inject news
     * @param {Object} filters - Optional filters { category, source, limit }
     */
    render(containerId, filters = {}) {
        const container = document.getElementById(containerId);
        if (!container) {
            console.warn(`NewsList: Container #${containerId} not found.`);
            return;
        }

        if (!window.mockNewsDatabase) {
            console.error("NewsList: mockNewsDatabase not found.");
            return;
        }

        // Apply filters
        let news = [...window.mockNewsDatabase];

        if (filters.category) {
            news = news.filter(item => item.category === filters.category);
        }

        if (filters.source) {
            news = news.filter(item => item.source === filters.source);
        }

        // Sort by date/time (simplified mock sort - latest first)
        news.reverse();

        if (filters.limit) {
            news = news.slice(0, filters.limit);
        }

        // Render cards
        if (news.length === 0) {
            container.innerHTML = '<p class="no-news">Nenhuma notícia encontrada com estes filtros.</p>';
            return;
        }

        container.innerHTML = news.map(article => this.createCardHTML(article)).join('');
    },

    /**
     * Creates the HTML structure for a single news card
     */
    createCardHTML(article) {
        // Use relative URL for the detail page
        const detailUrl = `noticia.html?id=${article.id}`;
        
        return `
            <a href="${detailUrl}" class="news-card" data-id="${article.id}">
                <div class="news-image">
                    <img src="${article.image}" 
                         alt="${article.title}" 
                         onerror="this.src='https://placehold.co/600x400/f0f0f0/999999?text=Imagem+Indispon%C3%ADvel'">
                    <span class="category-tag" style="background-color: ${this.getCategoryColor(article.category)}">
                        ${article.category}
                    </span>
                </div>
                <div class="news-content">
                    <div class="article-meta-info">
                        <span class="article-source">${article.source}</span>
                        <span class="article-time">${article.date} | ${article.time}</span>
                    </div>
                    <h3>${article.title}</h3>
                    <p>${article.subtitle}</p>
                    <span class="read-more">Ler mais ➔</span>
                </div>
            </a>
        `;
    },

    getCategoryColor(category) {
        const colors = {
            'justica': '#ff6b00',
            'politica': '#d0021b',
            'economia': '#0056b3',
            'esportes': '#00853e',
            'cultura': '#6a1b9a',
            'brasil': '#009c3b',
            'opiniao': '#444'
        };
        return colors[category.toLowerCase()] || '#d0021b';
    }
};

// Global export
window.NewsList = NewsList;
