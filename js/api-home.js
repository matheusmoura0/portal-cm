document.addEventListener("DOMContentLoaded", () => {
    // Simula o carregamento da API usando o Mock Data
    async function fetchHomeNews() {
        console.log("api-home: Carregando dados do mock...");
        
        // Simula um delay de rede de 500ms para mostrar os spinners
        setTimeout(() => {
            if (typeof portalMockData === 'undefined') {
                console.error("Erro: portalMockData não foi carregado corretamente.");
                return;
            }

            // Renderiza as seções usando os dados do mock
            renderSection('politica-grid', portalMockData.politica, 'Política');
            renderSection('economia-grid', portalMockData.economia, 'Economia');
            renderSection('justica-grid', portalMockData.justica, 'Justiça');
            renderSection('esportes-grid', portalMockData.esportes, 'Esportes');

            renderSection('cultura-grid', portalMockData.cultura, 'Cultura');

            
            console.log("api-home: Mock Data renderizado com sucesso.");
        }, 500);
    }

    // Função genérica que constrói os cards e injeta no HTML
    function renderSection(containerId, posts, categoryName) {
        const container = document.getElementById(containerId);
        if (!container || !posts) return;

        // Limita a 4 cards para manter uniformidade com as seções regionais
        const limitedPosts = posts.slice(0, 4);
        let htmlFinal = '';

        limitedPosts.forEach(post => {
            const title = post.title;
            const link = post.link;
            const imageUrl = post.img;

            htmlFinal += `
                <article class="news-card">
                    <a href="${link}" target="_blank" class="news-image">
                        <img src="${imageUrl}" alt="Imagem da notícia">
                    </a>
                    <div class="news-content">
                        <span class="category-tag">${categoryName}</span>
                        <h3>
                            <a href="${link}" target="_blank">${title}</a>
                        </h3>
                    </div>
                </article>
            `;
        });

        container.innerHTML = htmlFinal;
    }

    // Dispara a requisição simulada ao carregar a página
    fetchHomeNews();
});
