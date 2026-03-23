/**
 * Correio Editoria Component
 * Shared editorial page for Correio product sections with configurable modules.
 */

const CorreioEditoria = {
  defaultProductKey: "nacional",
  defaultLatestCount: 10,
  loadMoreStep: 10,
  pageFilename: "correio-editoria.html",

  productConfigs: {
    nacional: {
      key: "nacional",
      name: "Correio da Manhã",
      shortName: "Correio da Manhã",
      brandColor: "#d71e15",
      landingUrl: "correio-produto.html?product=nacional",
      themeClass: "theme-nacional",
      editorias: [
        { slug: "politica", label: "Política", subtopics: [] },
        { slug: "economia", label: "Economia", subtopics: [] },
        { slug: "justica", label: "Justiça", subtopics: [] },
        { slug: "brasil", label: "Brasil", subtopics: [] },
        { slug: "cultura", label: "Cultura", subtopics: [] },
        { slug: "esportes", label: "Esportes", subtopics: [] },
        { slug: "mundo", label: "Mundo", subtopics: [] },
      ],
    },
    sp: {
      key: "sp",
      name: "Correio da Manhã SP",
      shortName: "Correio SP",
      brandColor: "#194466",
      landingUrl: "correio-produto.html?product=sp",
      themeClass: "theme-sp",
      editorias: [
        { slug: "politica", label: "Política", subtopics: [] },
        { slug: "seguranca", label: "Segurança", subtopics: [] },
        { slug: "transporte", label: "Transporte", subtopics: [] },
        { slug: "educacao", label: "Educação", subtopics: [] },
        { slug: "economia", label: "Economia", subtopics: [] },
        { slug: "saude", label: "Saúde", subtopics: [] },
      ],
    },
    df: {
      key: "df",
      name: "Correio da Manhã DF",
      shortName: "Correio DF",
      brandColor: "#1f92c4",
      landingUrl: "correio-produto.html?product=df",
      themeClass: "theme-df",
      editorias: [
        { slug: "politica", label: "Política", subtopics: [] },
        { slug: "mobilidade", label: "Mobilidade", subtopics: [] },
        { slug: "educacao", label: "Educação", subtopics: [] },
        { slug: "turismo", label: "Turismo", subtopics: [] },
        { slug: "seguranca", label: "Segurança", subtopics: [] },
        { slug: "obras", label: "Obras", subtopics: [] },
      ],
    },
    sulfluminense: {
      key: "sulfluminense",
      name: "Correio Sul Fluminense",
      shortName: "Sul Fluminense",
      brandColor: "#d20a11",
      landingUrl: "correio-produto.html?product=sulfluminense",
      themeClass: "theme-sulfluminense",
      editorias: [
        { slug: "economia", label: "Economia", subtopics: [] },
        { slug: "saude", label: "Saúde", subtopics: [] },
        { slug: "agricultura", label: "Agricultura", subtopics: [] },
        { slug: "industria", label: "Indústria", subtopics: [] },
        { slug: "educacao", label: "Educação", subtopics: [] },
        { slug: "turismo", label: "Turismo", subtopics: [] },
      ],
    },
    petropolitano: {
      key: "petropolitano",
      name: "Correio Petropolitano",
      shortName: "Petropolitano",
      brandColor: "#D20A11",
      landingUrl: "correio-produto.html?product=petropolis",
      themeClass: "theme-petropolitano",
      editorias: [
        { slug: "turismo", label: "Turismo", subtopics: [] },
        { slug: "cultura", label: "Cultura", subtopics: [] },
        { slug: "eventos", label: "Eventos", subtopics: [] },
        { slug: "comercio", label: "Comércio", subtopics: [] },
        { slug: "seguranca", label: "Segurança", subtopics: [] },
        { slug: "educacao", label: "Educação", subtopics: [] },
      ],
    },
    campinas: {
      key: "campinas",
      name: "Correio Campinas",
      shortName: "Campinas",
      brandColor: "#003366",
      landingUrl: "correio-campinas.html",
      themeClass: "theme-campinas",
      editorias: [
        { slug: "economia", label: "Economia", subtopics: [] },
        { slug: "educacao", label: "Educação", subtopics: [] },
        { slug: "agricultura", label: "Agricultura", subtopics: [] },
        { slug: "industria", label: "Indústria", subtopics: [] },
        { slug: "transporte", label: "Transporte", subtopics: [] },
        { slug: "saude", label: "Saúde", subtopics: [] },
      ],
    },
  },

  moduleConfigs: {
    economia: [
      { type: "market-board", slot: "after-hero" },
      { type: "economic-agenda", slot: "sidebar-top" },
    ],
    esportes: [
      { type: "scores", slot: "after-hero" },
      { type: "next-matches", slot: "sidebar-top" },
    ],
  },

  moduleData: {
    economia: {
      "market-board": [
        { label: "Ibovespa", value: "134.872", change: "+1,18%", trend: "up" },
        { label: "Dólar", value: "R$ 4,95", change: "-0,42%", trend: "down" },
        { label: "Euro", value: "R$ 5,38", change: "+0,16%", trend: "up" },
        { label: "Petróleo", value: "US$ 81,10", change: "+0,73%", trend: "up" },
        { label: "Selic", value: "10,50%", change: "Copom", trend: "neutral" },
      ],
      "economic-agenda": [
        {
          time: "08h00",
          title: "Boletim Focus",
          detail: "Expectativas de inflação, PIB e juros para os próximos 12 meses.",
        },
        {
          time: "10h30",
          title: "Fluxo cambial",
          detail: "Dados do Banco Central com entrada e saída de dólares.",
        },
        {
          time: "14h00",
          title: "Resultado fiscal",
          detail: "Atualização do desempenho das contas públicas no mês.",
        },
      ],
    },
    esportes: {
      scores: [
        {
          competition: "Campeonato Carioca",
          status: "Encerrado",
          home: "Flamengo",
          away: "Fluminense",
          homeScore: 2,
          awayScore: 1,
        },
        {
          competition: "Paulistão",
          status: "Ao vivo",
          home: "Palmeiras",
          away: "Santos",
          homeScore: 1,
          awayScore: 1,
        },
        {
          competition: "NBA",
          status: "Final",
          home: "Celtics",
          away: "Heat",
          homeScore: 108,
          awayScore: 101,
        },
      ],
      "next-matches": [
        {
          competition: "Libertadores",
          when: "Hoje, 21h30",
          matchup: "Botafogo x LDU",
        },
        {
          competition: "Brasileirão",
          when: "Amanhã, 18h30",
          matchup: "Corinthians x Bahia",
        },
        {
          competition: "Superliga",
          when: "Sábado, 20h",
          matchup: "Sesc-Flamengo x Osasco",
        },
      ],
    },
  },

  placeholderTitles: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    "Curabitur blandit tempus porttitor donec ullamcorper nulla non metus.",
  ],

  placeholderExcerpts: [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.",
    "Sed posuere consectetur est at lobortis. Maecenas faucibus mollis interdum donec id elit non mi porta gravida at eget metus.",
    "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Aenean lacinia bibendum nulla sed consectetur.",
    "Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum.",
    "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec sed odio dui.",
    "Etiam porta sem malesuada magna mollis euismod. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
  ],

  state: null,
  container: null,
  delegatedEventsBound: false,

  resolveState() {
    const params = new URLSearchParams(window.location.search);
    const requestedProduct = (params.get("product") || "").trim().toLowerCase();
    const productConfig =
      this.productConfigs[requestedProduct] ||
      this.productConfigs[this.defaultProductKey];

    const requestedEditoria = this.slugify(params.get("editoria") || "");
    const editoria =
      productConfig.editorias.find((item) => item.slug === requestedEditoria) ||
      productConfig.editorias[0];

    return {
      productKey: productConfig.key,
      productConfig,
      editoria,
      visibleLatestCount:
        this.state &&
        this.state.productKey === productConfig.key &&
        this.state.editoria.slug === editoria.slug
          ? this.state.visibleLatestCount
          : this.defaultLatestCount,
    };
  },

  getBootstrapData() {
    const state = this.resolveState();
    return {
      productKey: state.productKey,
      productName: state.productConfig.name,
      productShortName: state.productConfig.shortName,
      productColor: state.productConfig.brandColor,
      productUrl: state.productConfig.landingUrl,
      themeClass: state.productConfig.themeClass,
      editoriaSlug: state.editoria.slug,
      editoriaLabel: state.editoria.label,
    };
  },

  init() {
    this.container = document.getElementById("correio-editoria-container");
    if (!this.container) return;

    this.state = this.resolveState();
    this.applyDocumentState();
    this.render();
    this.bindEvents();
  },

  applyDocumentState() {
    if (!this.state) return;

    document.title = `${this.state.editoria.label} | ${this.state.productConfig.name}`;
  },

  bindEvents() {
    if (!this.container || this.delegatedEventsBound) return;

    this.container.addEventListener("click", (event) => {
      const loadMoreButton = event.target.closest("[data-correio-load-more]");
      if (!loadMoreButton) return;

      event.preventDefault();
      this.state.visibleLatestCount += this.loadMoreStep;
      this.render();
    });

    this.delegatedEventsBound = true;
  },

  render() {
    if (!this.container || !this.state) return;

    const pageData = this.buildPageData();
    const visibleLatest = pageData.latest.slice(0, this.state.visibleLatestCount);
    const hasMoreLatest = pageData.latest.length > visibleLatest.length;

    this.container.innerHTML = `
      <div class="correio-editoria-page" style="--editoria-accent: ${this.escapeText(this.state.productConfig.brandColor)};">
        <section class="correio-editoria-hero-layout">
          ${this.renderHero(pageData.hero)}
          <div class="correio-editoria-highlight-stack">
            ${pageData.highlights.map((article) => this.renderHighlightCard(article)).join("")}
          </div>
        </section>

        ${this.renderModulesForSlot("after-hero")}

        <div class="correio-editoria-content-layout">
          <main class="correio-editoria-main">
            <section class="correio-editoria-feed-section">
              <div class="correio-editoria-section-header">
                <div>
                  <span class="correio-editoria-section-eyebrow">Cobertura contínua</span>
                  <h2>Últimas da editoria</h2>
                </div>
                <span class="correio-editoria-section-note">${visibleLatest.length} itens exibidos</span>
              </div>
              <div class="correio-editoria-feed-list">
                ${visibleLatest.map((article) => this.renderFeedCard(article)).join("")}
              </div>
              ${
                hasMoreLatest
                  ? `<button class="correio-editoria-load-more" data-correio-load-more type="button">Carregar mais</button>`
                  : ""
              }
            </section>
          </main>

          <aside class="correio-editoria-sidebar">
            ${this.renderModulesForSlot("sidebar-top")}
            ${this.renderPopularWidget(pageData.popular)}
            ${this.renderCtaWidget()}
            ${this.renderModulesForSlot("sidebar-bottom")}
          </aside>
        </div>
      </div>
    `;
  },

  buildPageData() {
    const items = this.getEditorialItems();
    const hero = items[0];
    const highlights = items.slice(1, 4);
    const latest = items.slice(4);
    const popular = items.slice(0, 5);

    return {
      hero,
      highlights,
      latest,
      popular,
      description: this.buildDescription(),
    };
  },

  getEditorialItems() {
    return Array.from({ length: 18 }, (_, index) =>
      this.createPlaceholderArticle(index),
    );
  },

  normalizeArticle(item, index) {
    const { productKey, productConfig, editoria } = this.state;
    const articleId = this.safeId(
      item.id || `${productKey}-${editoria.slug}-${index + 1}`,
    );
    const title = (item.title || `${editoria.label} em destaque`).trim();
    const excerpt =
      (item.excerpt || item.subtitle || "").trim() ||
      `${productConfig.name} acompanha ${editoria.label.toLowerCase()} com foco em serviço, contexto e atualização contínua ao longo do dia.`;
    const image =
      item.image ||
      item.img ||
      `https://picsum.photos/seed/${productKey}-${editoria.slug}-${index + 1}/900/600`;
    const author = item.author || productConfig.name;
    const time = item.time || `Há ${index + 2} horas`;

    return {
      id: articleId,
      title,
      excerpt,
      image,
      author,
      time,
      category: item.category || editoria.label,
      link: `noticia.html?id=${encodeURIComponent(articleId)}&product=${encodeURIComponent(productKey)}`,
    };
  },

  ensureMinimumItems(items, minimumCount) {
    const safeItems = Array.isArray(items) ? [...items] : [];

    while (safeItems.length < minimumCount) {
      safeItems.push(this.createPlaceholderArticle(safeItems.length));
    }

    return safeItems;
  },

  createPlaceholderArticle(index) {
    const { productKey, editoria } = this.state;
    const articleId = `${productKey}-${editoria.slug}-placeholder-${index + 1}`;
    const title =
      this.placeholderTitles[index % this.placeholderTitles.length];
    const excerpt =
      this.placeholderExcerpts[index % this.placeholderExcerpts.length];
    const imageLabel = encodeURIComponent(`${editoria.label} Placeholder`);

    return {
      id: articleId,
      title,
      excerpt,
      image: `https://placehold.co/900x600/f3f4f6/1a3a5c?text=${imageLabel}`,
      author: "Redação placeholder",
      time: "00/00/0000",
      category: editoria.label,
      link: `noticia.html?id=${encodeURIComponent(articleId)}&product=${encodeURIComponent(productKey)}`,
    };
  },

  dedupeByTitle(items) {
    const titles = new Set();

    return items.filter((item) => {
      const key = (item.title || "").trim().toLowerCase();
      if (!key || titles.has(key)) return false;
      titles.add(key);
      return true;
    });
  },

  buildDescription() {
    const { productConfig, editoria } = this.state;
    const descriptionMap = {
      politica:
        "Cobertura permanente dos movimentos de governo, Congresso, tribunais e bastidores do poder.",
      economia:
        "Mercados, consumo, empresas e serviço econômico organizados em um fluxo contínuo de atualização.",
      justica:
        "Decisões judiciais, operações, tribunais e os principais efeitos práticos no dia a dia do leitor.",
      brasil:
        "Os temas nacionais que movem a agenda do país, com contexto e acompanhamento da redação.",
      cultura:
        "Agenda cultural, bastidores, lançamentos e os principais movimentos da cena artística.",
      esportes:
        "Resultados, bastidores, próximos jogos e os assuntos que aceleram a cobertura esportiva.",
      mundo:
        "Cobertura internacional com foco em diplomacia, economia global, conflitos e impactos para o Brasil.",
      seguranca:
        "Cobertura de ocorrências, prevenção, operações e os impactos diretos no cotidiano das cidades.",
      transporte:
        "Mudanças de mobilidade, interdições, obras, terminais e decisões que afetam o deslocamento urbano.",
      educacao:
        "Rede de ensino, políticas públicas, calendário escolar e serviços de utilidade para famílias e estudantes.",
      saude:
        "Hospitais, vacinação, prevenção e o noticiário que afeta a rotina de atendimento na região.",
      mobilidade:
        "Trânsito, obras, deslocamentos e serviço em tempo real para a cobertura local.",
      turismo:
        "Destinos, eventos, circulação de visitantes e os movimentos que aquecem a economia regional.",
      obras:
        "Infraestrutura, cronogramas e intervenções que transformam os espaços públicos.",
      agricultura:
        "Safra, produção, logística e os efeitos do campo na economia e no abastecimento.",
      industria:
        "Investimentos, empregos, produção e bastidores do parque industrial.",
      eventos:
        "O calendário que movimenta a cidade, com serviço, bastidores e impacto econômico.",
      comercio:
        "Varejo, consumo, calendário promocional e decisões que mexem com o mercado local.",
    };

    return (
      descriptionMap[editoria.slug] ||
      `${productConfig.name} acompanha ${editoria.label.toLowerCase()} com leitura editorial, contexto e atualização permanente.`
    );
  },

  renderEditoriaRail() {
    const { productConfig, editoria, productKey } = this.state;

    return `
      <nav class="correio-editoria-rail" aria-label="Editorias do produto">
        <div class="correio-editoria-rail-track">
          ${productConfig.editorias
            .map(
              (item) => `
                <a
                  href="${this.pageFilename}?product=${encodeURIComponent(productKey)}&editoria=${encodeURIComponent(item.slug)}"
                  class="correio-editoria-rail-link ${item.slug === editoria.slug ? "is-active" : ""}"
                >
                  ${this.escapeText(item.label)}
                </a>
              `,
            )
            .join("")}
        </div>
      </nav>
    `;
  },

  renderHero(article) {
    return `
      <article class="correio-editoria-hero-card">
        <a href="${this.escapeText(article.link)}" class="correio-editoria-hero-link">
          <div class="correio-editoria-hero-image">
            <img
              src="${this.escapeText(article.image)}"
              alt="${this.escapeText(article.title)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='https://placehold.co/900x600/f3f4f6/6b7280?text=Imagem+indisponivel';"
            >
            <span class="correio-editoria-tag">${this.escapeText(article.category)}</span>
          </div>
          <div class="correio-editoria-hero-content">
            <h2>${this.escapeText(article.title)}</h2>
            <p>${this.escapeText(article.excerpt)}</p>
            <div class="correio-editoria-meta">
              <span>${this.escapeText(article.author)}</span>
              <span>${this.escapeText(article.time)}</span>
            </div>
          </div>
        </a>
      </article>
    `;
  },

  renderHighlightCard(article) {
    return `
      <article class="correio-editoria-highlight-card">
        <a href="${this.escapeText(article.link)}" class="correio-editoria-highlight-link">
          <div class="correio-editoria-highlight-image">
            <img
              src="${this.escapeText(article.image)}"
              alt="${this.escapeText(article.title)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='https://placehold.co/500x350/f3f4f6/6b7280?text=Imagem+indisponivel';"
            >
          </div>
          <div class="correio-editoria-highlight-content">
            <span class="correio-editoria-highlight-tag">${this.escapeText(article.category)}</span>
            <h3>${this.escapeText(article.title)}</h3>
            <span class="correio-editoria-highlight-time">${this.escapeText(article.time)}</span>
          </div>
        </a>
      </article>
    `;
  },

  renderFeedCard(article) {
    return `
      <article class="correio-editoria-feed-card">
        <a href="${this.escapeText(article.link)}" class="correio-editoria-feed-link">
          <div class="correio-editoria-feed-image">
            <img
              src="${this.escapeText(article.image)}"
              alt="${this.escapeText(article.title)}"
              loading="lazy"
              onerror="this.onerror=null;this.src='https://placehold.co/420x280/f3f4f6/6b7280?text=Sem+imagem';"
            >
          </div>
          <div class="correio-editoria-feed-content">
            <span class="correio-editoria-feed-tag">${this.escapeText(article.category)}</span>
            <h3>${this.escapeText(article.title)}</h3>
            <p>${this.escapeText(article.excerpt)}</p>
            <div class="correio-editoria-meta">
              <span>${this.escapeText(article.author)}</span>
              <span>${this.escapeText(article.time)}</span>
            </div>
          </div>
        </a>
      </article>
    `;
  },

  renderPopularWidget(items) {
    return `
      <section class="sidebar-widget correio-editoria-popular">
        <h3 class="widget-title">Mais lidas</h3>
        <div class="popular-articles">
          ${items
            .map(
              (article, index) => `
                <article class="popular-article">
                  <span class="rank-number">${index + 1}</span>
                  <a href="${this.escapeText(article.link)}">${this.escapeText(article.title)}</a>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  },

  renderCtaWidget() {
    return `
      <section class="sidebar-widget correio-editoria-cta">
        <h3 class="widget-title">No radar do CM</h3>
        <p>
          Acompanhe a editoria com recorte contínuo, destaques do dia e navegação direta para a capa do produto.
        </p>
        <a href="${this.escapeText(this.state.productConfig.landingUrl)}" class="correio-editoria-cta-link">
          Voltar para ${this.escapeText(this.state.productConfig.name)}
        </a>
      </section>
    `;
  },

  renderModulesForSlot(slot) {
    const modules = (this.moduleConfigs[this.state.editoria.slug] || []).filter(
      (item) => item.slot === slot,
    );

    if (modules.length === 0) return "";

    return modules
      .map((item) => this.renderModule(item.type))
      .filter(Boolean)
      .join("");
  },

  renderModule(type) {
    switch (type) {
      case "market-board":
        return this.renderMarketBoard();
      case "economic-agenda":
        return this.renderEconomicAgenda();
      case "scores":
        return this.renderScores();
      case "next-matches":
        return this.renderNextMatches();
      default:
        return "";
    }
  },

  renderMarketBoard() {
    const items =
      this.moduleData.economia && this.moduleData.economia["market-board"];
    if (!Array.isArray(items) || items.length === 0) return "";

    return `
      <section class="correio-editoria-module correio-editoria-market-board">
        <div class="correio-editoria-module-header">
          <span class="correio-editoria-module-kicker">Monitor</span>
          <h2>Bolsa e mercado</h2>
        </div>
        <div class="correio-editoria-market-grid">
          ${items
            .map(
              (item) => `
                <article class="correio-editoria-market-item">
                  <span class="correio-editoria-market-label">${this.escapeText(item.label)}</span>
                  <strong class="correio-editoria-market-value">${this.escapeText(item.value)}</strong>
                  <span class="correio-editoria-market-change is-${this.escapeText(item.trend)}">${this.escapeText(item.change)}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  },

  renderEconomicAgenda() {
    const items =
      this.moduleData.economia && this.moduleData.economia["economic-agenda"];
    if (!Array.isArray(items) || items.length === 0) return "";

    return `
      <section class="sidebar-widget correio-editoria-module correio-editoria-agenda">
        <h3 class="widget-title">Agenda econômica</h3>
        <div class="correio-editoria-agenda-list">
          ${items
            .map(
              (item) => `
                <article class="correio-editoria-agenda-item">
                  <span class="correio-editoria-agenda-time">${this.escapeText(item.time)}</span>
                  <div>
                    <strong>${this.escapeText(item.title)}</strong>
                    <p>${this.escapeText(item.detail)}</p>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  },

  renderScores() {
    const items = this.moduleData.esportes && this.moduleData.esportes.scores;
    if (!Array.isArray(items) || items.length === 0) return "";

    return `
      <section class="correio-editoria-module correio-editoria-scores">
        <div class="correio-editoria-module-header">
          <span class="correio-editoria-module-kicker">Painel</span>
          <h2>Placar da editoria</h2>
        </div>
        <div class="correio-editoria-scores-grid">
          ${items
            .map(
              (match) => `
                <article class="correio-editoria-score-card">
                  <div class="correio-editoria-score-topline">
                    <span>${this.escapeText(match.competition)}</span>
                    <span class="correio-editoria-score-status ${this.slugify(match.status) === "ao-vivo" ? "is-live" : ""}">${this.escapeText(match.status)}</span>
                  </div>
                  <div class="correio-editoria-score-row">
                    <span>${this.escapeText(match.home)}</span>
                    <strong>${this.escapeText(String(match.homeScore))}</strong>
                  </div>
                  <div class="correio-editoria-score-row">
                    <span>${this.escapeText(match.away)}</span>
                    <strong>${this.escapeText(String(match.awayScore))}</strong>
                  </div>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  },

  renderNextMatches() {
    const items =
      this.moduleData.esportes && this.moduleData.esportes["next-matches"];
    if (!Array.isArray(items) || items.length === 0) return "";

    return `
      <section class="sidebar-widget correio-editoria-module correio-editoria-next-matches">
        <h3 class="widget-title">Próximos jogos</h3>
        <div class="correio-editoria-next-list">
          ${items
            .map(
              (match) => `
                <article class="correio-editoria-next-item">
                  <span class="correio-editoria-next-competition">${this.escapeText(match.competition)}</span>
                  <strong>${this.escapeText(match.matchup)}</strong>
                  <span class="correio-editoria-next-time">${this.escapeText(match.when)}</span>
                </article>
              `,
            )
            .join("")}
        </div>
      </section>
    `;
  },

  slugify(value) {
    return String(value || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  },

  safeId(value) {
    return String(value || "")
      .trim()
      .replace(/\s+/g, "-")
      .replace(/[^A-Za-z0-9-_]/g, "")
      .toLowerCase();
  },

  escapeText(value) {
    const element = document.createElement("div");
    element.textContent = value == null ? "" : String(value);
    return element.innerHTML;
  },
};

window.CorreioEditoria = CorreioEditoria;
