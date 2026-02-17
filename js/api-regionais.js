document.addEventListener("DOMContentLoaded", () => {
    const gridRegionais = document.getElementById('regionais-grid');
    if (!gridRegionais) return;

    async function loadAllRegions() {
        console.log("api-regionais: Carregando dados do mock...");
        
        // Simula delay de rede
        setTimeout(() => {
            if (typeof portalMockData === 'undefined') {
                console.error("Erro: portalMockData não foi carregado corretamente.");
                return;
            }

            const resultados = portalMockData.regionais.map(portal => {
                const title = portal.title;
                const link = portal.link;
                const imageUrl = portal.img;
                const portalNome = portal.tag;

                return `
                    <article class="news-card" style="display: flex; flex-direction: column; background: #fff; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
                        <a href="${link}" target="_blank" class="news-image" style="display: block;">
                            <img src="${imageUrl}" alt="Imagem" style="width: 100%; height: 180px; object-fit: cover;">
                        </a>
                        <div class="news-content" style="padding: 15px; display: flex; flex-direction: column; flex: 1;">
                            <span class="category-tag" style="color: #d0021b; font-weight: 800; font-size: 0.75rem; text-transform: uppercase;">${portalNome}</span>
                            <h3 style="font-family: 'Noto Serif', serif; font-size: 1.1rem; line-height: 1.3; margin: 10px 0;">
                                <a href="${link}" target="_blank" style="color: #1a1a2e; text-decoration: none;">${title}</a>
                            </h3>
                        </div>
                    </article>
                `;
            });

            gridRegionais.innerHTML = resultados.join('');
            console.log("api-regionais: Mock Data renderizado com sucesso.");
        }, 800); // Um pouco mais devagar para dar efeito visual de carregamento por rede
    }

    loadAllRegions();
});
