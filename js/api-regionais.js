document.addEventListener("DOMContentLoaded", () => {
    const gridRegionais = document.getElementById('regionais-grid');
    if (!gridRegionais) return;

    // Array com as configurações de cada portal (1 notícia de cada)
    const portais = [
        { nome: 'Correio da Manhã (Nacional)', url: 'https://www.correiodamanha.com.br/wp-json/wp/v2/posts?_embed&per_page=1' },
        { nome: 'São Paulo', url: 'https://correiodamanhasp.com.br/wp-json/wp/v2/posts?_embed&per_page=1' },
        { nome: 'Distrito Federal', url: 'https://correiodamanhadf.com.br/wp-json/wp/v2/posts?_embed&per_page=1' },
        { nome: 'Sul Fluminense', url: 'https://correiosulfluminense.com.br/wp-json/wp/v2/posts?_embed&per_page=1' },
        { nome: 'Petrópolis', url: 'https://correiopetropolitano.com.br/wp-json/wp/v2/posts?_embed&per_page=1' },
        { nome: 'Jornal da Barra', url: 'https://www.jornaldabarra.com.br/wp-json/wp/v2/posts?_embed&per_page=1' }
    ];

    async function fetchPortalNews(portal) {
        try {
            const response = await fetch(portal.url);
            if (!response.ok) throw new Error(`Erro API ${portal.nome}`);
            const posts = await response.json();
            if (posts.length === 0) return null;
            
            const post = posts[0];
            const title = post.title.rendered;
            const link = post.link;
            
            // Tenta pegar a imagem, se falhar usa o fallback CSS que criamos
            let imageHTML = `<div class="news-image no-image-fallback">CM</div>`;
            if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url) {
                const imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
                imageHTML = `<img src="${imageUrl}" alt="Imagem" style="width: 100%; height: 180px; object-fit: cover;">`;
            }

            return `
                <article class="news-card" style="display: flex; flex-direction: column; background: #fff; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
                    <a href="${link}" target="_blank" class="news-image" style="display: block;">
                        ${imageHTML}
                    </a>
                    <div class="news-content" style="padding: 15px; display: flex; flex-direction: column; flex: 1;">
                        <span class="category-tag" style="color: #d0021b; font-weight: 800; font-size: 0.75rem; text-transform: uppercase;">${portal.nome}</span>
                        <h3 style="font-family: 'Noto Serif', serif; font-size: 1.1rem; line-height: 1.3; margin: 10px 0;">
                            <a href="${link}" target="_blank" style="color: #1a1a2e; text-decoration: none;">${title}</a>
                        </h3>
                    </div>
                </article>
            `;
        } catch (error) {
            console.warn(`Aviso: Não foi possível carregar ${portal.nome}`, error);
            return null; // Retorna nulo se der erro de CORS ou servidor fora do ar
        }
    }

    async function loadAllRegions() {
        // Dispara todos os fetchs simultaneamente (muito mais rápido)
        const promessas = portais.map(portal => fetchPortalNews(portal));
        const resultados = await Promise.all(promessas);
        
        // Filtra quem deu erro (nulo) e junta o HTML
        const htmlFinal = resultados.filter(card => card !== null).join('');
        
        if (htmlFinal) {
            gridRegionais.innerHTML = htmlFinal;
        } else {
            gridRegionais.innerHTML = '<p style="text-align:center;">Não foi possível carregar as notícias regionais no momento.</p>';
        }
    }

    loadAllRegions();
});
