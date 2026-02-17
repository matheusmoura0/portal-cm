document.addEventListener("DOMContentLoaded", () => {
    const gridServidor = document.getElementById('jornal-servidor-grid');
    if (!gridServidor) return;

    // URL da API REST do WordPress (buscando 3 posts e incluindo as mídias)
    const apiUrl = 'https://jornaldoservidor.com.br/wp-json/wp/v2/posts?_embed&per_page=3';

    async function fetchJornalDoServidor() {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error('Erro na resposta da API');
            
            const posts = await response.json();
            renderPosts(posts);
        } catch (error) {
            console.error('Erro ao buscar notícias do Jornal do Servidor:', error);
            gridServidor.innerHTML = '<p style="text-align: center; color: #666; width: 100%;">Não foi possível carregar as notícias no momento.</p>';
        }
    }

    function renderPosts(posts) {
        gridServidor.innerHTML = ''; // Limpa o spinner

        let featuredHTML = '';
        let sideColumnHTML = '<div class="print-side-column">';

        posts.forEach((post, index) => {
            const title = post.title.rendered;
            const link = post.link;
            
            let imageUrl = ''; // No impresso, as secundárias podem não ter imagem para economizar espaço
            if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url) {
                imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
            }

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = post.excerpt.rendered;
            const excerpt = tempDiv.textContent || tempDiv.innerText || '';

            // Se for a primeira notícia (Destaque Gigante)
            if (index === 0) {
                featuredHTML = `
                    <article class="print-featured-article">
                        <span class="print-tag">Destaque</span>
                        <a href="${link}" target="_blank" style="text-decoration: none;">
                            <h3 class="print-headline">${title}</h3>
                        </a>
                        ${imageUrl ? `<a href="${link}" target="_blank"><img src="${imageUrl}" alt="Imagem"></a>` : ''}
                        <p class="print-excerpt">${excerpt.substring(0, 200)}...</p>
                    </article>
                `;
            } else {
                // Notícias 2 e 3 (Coluna Lateral)
                sideColumnHTML += `
                    <article class="print-secondary-article">
                        <span class="print-tag">Servidor</span>
                        <a href="${link}" target="_blank" style="text-decoration: none;">
                            <h3 class="print-headline">${title}</h3>
                        </a>
                        <p class="print-excerpt" style="font-size: 0.95rem;">${excerpt.substring(0, 100)}...</p>
                    </article>
                `;
            }
        });

        sideColumnHTML += '</div>'; // Fecha a coluna lateral

        // Injeta tudo no grid
        gridServidor.innerHTML = featuredHTML + sideColumnHTML;
    }

    // Inicia a busca
    fetchJornalDoServidor();
});
