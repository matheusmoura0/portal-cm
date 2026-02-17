document.addEventListener("DOMContentLoaded", () => {
    const gridServidor = document.getElementById('jornal-servidor-grid');
    if (!gridServidor) return;

    // Aguarda o mock-data ser carregado
    setTimeout(() => {
        if (typeof portalMockData !== 'undefined' && portalMockData.servidor) {
            const posts = portalMockData.servidor;
            let featuredHTML = '';
            let sideColumnHTML = '<div class="print-side-column" style="display: flex; flex-direction: column; gap: 20px;">';

            posts.forEach((post, index) => {
                if (index === 0) {
                    // Destaque Principal
                    featuredHTML = `
                        <article class="print-featured-article" style="padding-right: 30px; border-right: 1px solid #ccc;">
                            <span class="print-tag" style="color: #d0021b; font-weight: 800; text-transform: uppercase; font-size: 0.8rem;">Destaque</span>
                            <a href="${post.link}" style="text-decoration: none;">
                                <h3 class="print-headline" style="font-family: 'Noto Serif', serif; font-size: 2.8rem; font-weight: 900; line-height: 1.1; color: #000; margin: 10px 0 20px 0; letter-spacing: -1px;">${post.title}</h3>
                            </a>
                            <a href="${post.link}"><img src="${post.img}" alt="Imagem" style="width: 100%; aspect-ratio: 16/9; object-fit: cover; border: 1px solid #eaeaea; margin-bottom: 15px;"></a>
                            <p class="print-excerpt" style="font-family: 'Noto Serif', serif; font-size: 1.1rem; color: #333; line-height: 1.6;">${post.excerpt}</p>
                        </article>
                    `;
                } else {
                    // Coluna Lateral
                    sideColumnHTML += `
                        <article class="print-secondary-article" style="border-bottom: 1px solid #ccc; padding-bottom: 20px;">
                            <span class="print-tag" style="color: #d0021b; font-weight: 800; text-transform: uppercase; font-size: 0.8rem; margin-bottom: 5px; display: block;">Servidor</span>
                            <a href="${post.link}" style="text-decoration: none;">
                                <h3 class="print-headline" style="font-family: 'Noto Serif', serif; font-size: 1.4rem; font-weight: 700; line-height: 1.2; color: #000; margin-bottom: 10px;">${post.title}</h3>
                            </a>
                            <p class="print-excerpt" style="font-family: 'Noto Serif', serif; font-size: 0.95rem; color: #333;">${post.excerpt}</p>
                        </article>
                    `;
                }
            });

            sideColumnHTML += '</div>';
            gridServidor.innerHTML = featuredHTML + sideColumnHTML;
        }
    }, 150);
});
