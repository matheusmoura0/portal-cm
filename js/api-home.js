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
            renderSection('justica-grid', portalMockData.justica, 'Justiça');
            renderSection('esportes-grid', portalMockData.esportes, 'Esportes');
            renderSection('cultura-grid', portalMockData.cultura, 'Cultura');
            
            console.log("api-home: Mock Data renderizado com sucesso.");
        }, 500);
    }

    // Função genérica que constrói os cards e injeta no HTML
    function renderSection(containerId, posts, categoryName) {
        const container = document.getElementById(containerId);
        if (!container) return;

        let htmlFinal = '';

        posts.forEach(post => {
            const title = post.title;
            const link = post.link;
            const imageUrl = post.img;
            
            const imageHTML = `<img src="${imageUrl}" alt="Imagem da notícia" style="width: 100%; height: 180px; object-fit: cover;">`;

            htmlFinal += `
                <article class="news-card" style="display: flex; flex-direction: column; background: #fff; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                    <a href="${link}" target="_blank" class="news-image" style="display: block;">
                        ${imageHTML}
                    </a>
                    <div class="news-content" style="padding: 15px; display: flex; flex-direction: column; flex: 1;">
                        <span class="category-tag" style="color: #d0021b; font-weight: 800; font-size: 0.75rem; text-transform: uppercase;">${categoryName}</span>
                        <h3 style="font-family: 'Noto Serif', serif; font-size: 1.1rem; line-height: 1.3; margin: 10px 0;">
                            <a href="${link}" target="_blank" style="color: #1a1a2e; text-decoration: none;">${title}</a>
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
