const regionData = {
    brasil: [
        { id: "noticia-002", title: "Congresso aprova novo marco fiscal e envia para sanção", img: "https://placehold.co/600x400/1a1a1a/FFF?text=Nacional" },
        { id: "noticia-001", title: "STF forma maioria em votação sobre marco temporal", img: "" },
        { id: "noticia-007", title: "Dólar fecha em queda após dados de inflação nos EUA", img: "" },
        { id: "noticia-005", title: "Governo anuncia novas metas para desmatamento zero", img: "" }
    ],
    sp: [
        { id: "noticia-007", title: "Tarcísio anuncia novas linhas de metrô para a Grande SP", img: "https://placehold.co/600x400/003366/FFF?text=Sao+Paulo" },
        { id: "noticia-007", title: "Rodízio suspenso no feriado da próxima segunda-feira", img: "" },
        { id: "noticia-007", title: "Avenida Paulista recebe festival de gastronomia", img: "" }
    ],
    rj: [
        { id: "noticia-006", title: "Prefeitura do Rio lança edital para o Carnaval 2027", img: "https://placehold.co/600x400/0066cc/FFF?text=Rio+de+Janeiro" },
        { id: "noticia-006", title: "Operação na via Dutra causa retenção na chegada ao Rio", img: "" },
        { id: "noticia-006", title: "Museu do Amanhã bate recorde de visitação em janeiro", img: "" }
    ],
    sulFluminense: [
        { id: "noticia-005", title: "Volta Redonda garante reajuste de servidores para março", img: "https://placehold.co/600x400/cc0000/FFF?text=Sul+Fluminense" },
        { id: "noticia-005", title: "Barra Mansa abre inscrições para cursos técnicos gratuitos", img: "" }
    ],
    petropolis: [
        { id: "noticia-004", title: "Ocupação hoteleira chega a 90% no inverno petropolitano", img: "https://placehold.co/600x400/228b22/FFF?text=Petropolis" },
        { id: "noticia-004", title: "Palácio de Cristal recebe exposição de orquídeas", img: "" }
    ],
    df: [
        { id: "noticia-002", title: "Esplanada recebe reforço de segurança para solenidade", img: "https://placehold.co/600x400/ffcc00/000?text=Distrito+Federal" },
        { id: "noticia-002", title: "Novas faixas exclusivas para ônibus começam a operar no DF", img: "" }
    ]
};

function renderRegion(regionId) {
    const container = document.getElementById('region-content-render');
    if (!container) return;

    const data = regionData[regionId] || [];
    
    // Update active tab UI
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.classList.remove('active');
        if (tab.dataset.region === regionId) {
            tab.classList.add('active');
        }
    });

    if (data.length === 0) {
        container.innerHTML = '<p>Nenhuma notícia disponível para esta região.</p>';
        return;
    }

    let html = `
        <div class="region-render-grid">
            <article class="region-main-news">
    `;

    // Manchete Principal (index 0)
    const main = data[0];
    const mainUrl = `noticia.html?id=${main.id}`;
    
    html += `
                <a href="${mainUrl}">
                    ${main.img ? `
                    <div class="img-wrapper">
                        <img src="${main.img}" alt="${main.title}">
                    </div>` : ''}
                    <h3>${main.title}</h3>
                </a>
            </article>
            <div class="region-side-news">
    `;

    // Notícias Secundárias (index > 0)
    for (let i = 1; i < data.length; i++) {
        const itemUrl = `noticia.html?id=${data[i].id}`;
        html += `
                <article class="region-side-item">
                    <a href="${itemUrl}">
                        <h4>${data[i].title}</h4>
                    </a>
                </article>
        `;
    }

    html += `
            </div>
        </div>
    `;

    container.innerHTML = html;
}

// Inicializar na aba Brasil
document.addEventListener('DOMContentLoaded', () => {
    // Adicionar listeners nas abas
    document.querySelectorAll('.tab-item').forEach(tab => {
        tab.addEventListener('click', () => {
            renderRegion(tab.dataset.region);
        });
    });

    // Render inicial
    renderRegion('brasil');
});
