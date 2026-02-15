/**
 * News Detail Manager
 * Handles rendering of a single news article based on URL ID
 */

const NewsDetail = {
    init() {
        // Get news ID from URL
        const urlParams = new URLSearchParams(window.location.search);
        const newsId = urlParams.get('id');

        if (!newsId) {
            this.showNotFound();
            return;
        }

        // Find article in database
        const article = this.findArticle(newsId);

        if (article) {
            this.renderArticle(article);
        } else {
            this.showNotFound();
        }
    },

    findArticle(id) {
        if (!window.mockNewsDatabase) {
            console.error("Mock Database not found!");
            return null;
        }
        return window.mockNewsDatabase.find(item => item.id === id);
    },

    renderArticle(article) {
        // Elements
        const pageTitle = document.getElementById('page-title');
        const breadCategory = document.getElementById('bread-category');
        const breadTitle = document.getElementById('bread-title');
        const titleEl = document.getElementById('article-title');
        const subtitleEl = document.getElementById('article-subtitle');
        const categoryEl = document.getElementById('article-category');
        const authorEl = document.getElementById('article-author');
        const sourceEl = document.getElementById('article-source');
        const dateEl = document.getElementById('article-date');
        const timeEl = document.getElementById('article-time');
        const imageEl = document.getElementById('article-main-image');
        const captionEl = document.getElementById('article-image-caption');
        const bodyEl = document.getElementById('article-body');

        // Populate dynamic content
        if (pageTitle) pageTitle.textContent = `${article.title} | portal CM`;
        if (breadCategory) breadCategory.textContent = article.category.charAt(0).toUpperCase() + article.category.slice(1);
        if (breadTitle) breadTitle.textContent = article.title;
        if (titleEl) titleEl.textContent = article.title;
        if (subtitleEl) subtitleEl.textContent = article.subtitle;
        if (categoryEl) {
            categoryEl.textContent = article.category;
            categoryEl.style.backgroundColor = this.getCategoryColor(article.category);
        }
        if (authorEl) authorEl.textContent = article.author;
        if (sourceEl) sourceEl.textContent = article.source;
        if (dateEl) dateEl.textContent = article.date;
        if (timeEl) timeEl.textContent = article.time;
        if (imageEl) {
            imageEl.src = article.image;
            imageEl.alt = article.title;
        }
        if (captionEl) captionEl.textContent = `${article.title} - Foto: Divulgação / ${article.source}`;
        if (bodyEl) bodyEl.innerHTML = article.content;

        // Show wrapper, hide not found
        document.getElementById('article-content-wrapper').style.display = 'block';
        document.getElementById('not-found-msg').style.display = 'none';
        
        console.log(`NewsDetail: Article ${article.id} rendered successfully.`);
    },

    showNotFound() {
        document.getElementById('article-content-wrapper').style.display = 'none';
        document.getElementById('not-found-msg').style.display = 'block';
        document.getElementById('bread-category').textContent = "Erro";
        document.getElementById('bread-title').textContent = "Notícia não encontrada";
        document.title = "Notícia não encontrada | portal CM";
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

// Initialize when components are loaded (to ensure consistency with global variables if needed)
document.addEventListener('DOMContentLoaded', () => {
    NewsDetail.init();
});
