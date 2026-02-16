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

        posts.forEach((post, index) => {
            // Extração segura de dados do WordPress
            const title = post.title.rendered;
            const link = post.link; // Link original da matéria
            
            // Tratamento para extrair a imagem de destaque do _embedded
            const fallbackImage = 'https://placehold.co/600x400/eeeeee/999999?text=Sem+Imagem';
            let imageUrl = fallbackImage;
            if (post._embedded && post._embedded['wp:featuredmedia'] && post._embedded['wp:featuredmedia'][0].source_url) {
                imageUrl = post._embedded['wp:featuredmedia'][0].source_url;
            }

            // Tratamento para o resumo (excerpt) removendo tags HTML indesejadas
            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = post.excerpt.rendered;
            const excerpt = tempDiv.textContent || tempDiv.innerText || '';

            // Construção do HTML do card
            const isFeatured = index === 0 ? 'featured' : ''; // Se quiser o primeiro em destaque
            
            const imageHTML = (imageUrl === fallbackImage || imageUrl.includes('placehold.co'))
                ? `<div class="news-image no-image-fallback">CM</div>`
                : `<img src="${imageUrl}" alt="Imagem da notícia" onerror="this.outerHTML='<div class=\'news-image no-image-fallback\'>CM</div>'">`;

            const cardHTML = `
                <article class="news-card ${isFeatured}">
                    <a href="${link}" target="_blank" class="news-image">
                        ${imageHTML}
                    </a>
                    <div class="news-content">
                        <span class="category-tag">Servidor</span>
                        <h3><a href="${link}" target="_blank">${title}</a></h3>
                        <p class="news-excerpt">${excerpt.substring(0, 120)}...</p>
                    </div>
                </article>
            `;
            
            gridServidor.insertAdjacentHTML('beforeend', cardHTML);
        });
    }

    // Inicia a busca
    fetchJornalDoServidor();
});
