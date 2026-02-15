/**
 * Correio da Manhã - Portal de Notícias
 * JavaScript Principal
 */

// ========================================
// Utilitários
// ========================================

const Utils = {
  // Formata data atual
  formatDate() {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    const date = new Date().toLocaleDateString("pt-BR", options);
    return date.charAt(0).toUpperCase() + date.slice(1);
  },

  // Debounce para otimizar eventos
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Animação suave de scroll
  smoothScroll(target, duration = 500) {
    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  },

  // Formata data relativa para notícias
  formatRelativeDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = now - date;
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (minutes < 5) return "Agora";
    if (minutes < 60) return `Há ${minutes} min`;
    if (hours < 24) return `Há ${hours} h`;
    if (days === 1) return "Ontem";
    if (days < 7) return `Há ${days} dias`;

    return date.toLocaleDateString("pt-BR", {
      day: "numeric",
      month: "short",
    });
  },

  // Verifica se uma string de imagem é válida ou um placeholder
  isValidImage(src) {
    if (!src || src === "" || src === "undefined" || src.includes("javascript:void(0)")) return false;
    // Padrões de placeholder comuns
    const placeholderPatterns = [
      "placehold.co",
      "placeholder.com",
      "via.placeholder",
      "eeeeee/999999",
      "Sem+Imagem",
      "Espaço+Publicitário",
      "f0f0f0",
      "728x90"
    ];
    return !placeholderPatterns.some(pattern => src.includes(pattern));
  }
};

// ========================================
// Interface e UI
// ========================================

const UI = {
  init() {
    this.handleNoImageCards();
    this.hideEmptyAds();
    
    // Observa mudanças no DOM para cards carregados via AJAX
    this.observeDOM();
  },

  handleNoImageCards() {
    const selectors = [
      '.news-card', 
      '.featured-item', 
      '.modern-section-item', 
      '.region-main-item', 
      '.region-sidebar-item',
      '.editorial-item',
      '.servidor-main',
      '.servidor-side',
      '.mobile-grid-item',
      '.mobile-grid-main'
    ];
    const cards = document.querySelectorAll(selectors.join(', '));
    
    cards.forEach(card => {
      const img = card.querySelector('img');
      const hasValidImage = img && Utils.isValidImage(img.src);
      
      if (!hasValidImage) {
        card.classList.add('card-no-thumbnail');
        // Se for um link de imagem de erro conhecido, removemos o container
        const imgWrappers = [
            '.news-image', 
            '.img-wrapper', 
            '.featured-image-wrapper', 
            '.featured-item-image',
            '.featured-main-image',
            '.featured-item-image',
            '.carousel-image'
        ];
        imgWrappers.forEach(selector => {
            const wrapper = card.querySelector(selector) || (card.classList.contains(selector.replace('.', '')) ? card : null);
            if (wrapper) {
                wrapper.style.display = 'none';
            }
        });
      }
    });
  },


  observeDOM() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.addedNodes.length) {
          this.handleNoImageCards();
          this.hideEmptyAds();
        }
      });
    });

    const target = document.querySelector('.main-content') || document.body;
    observer.observe(target, { childList: true, subtree: true });
  }
};

// ========================================
// Data e Hora
// ========================================

const DateTime = {
  init() {
    this.updateDate();
    setInterval(() => this.updateTime(), 1000);
  },

  updateDate() {
    const dateElement = document.getElementById("current-date");
    if (dateElement) {
      dateElement.textContent = Utils.formatDate();
    }
  },

  updateTime() {
    const timeElements = document.querySelectorAll(".live-time");
    const now = new Date();
    const timeString = now.toLocaleTimeString("pt-BR");

    timeElements.forEach((el) => {
      el.textContent = timeString;
    });
  },
};

// ========================================
// Header Info - Clima, Finanças
// ========================================

const HeaderInfo = {
  init() {
    this.updateWeather();
    this.updateFinance();
    // Atualiza a cada 5 minutos
    setInterval(() => {
      this.updateWeather();
      this.updateFinance();
    }, 300000);
  },

  updateWeather() {
    const weatherElement = document.getElementById("weather-info");
    if (weatherElement) {
      // Simulação de dados do clima - Em produção, usar uma API real
      const weatherData = this.getMockWeatherData();
      weatherElement.textContent = `${weatherData.city}: ${weatherData.temp}°C ${weatherData.condition}`;
    }
  },

  updateFinance() {
    const usdElement = document.getElementById("usd-rate");
    const ibovElement = document.getElementById("ibov-rate");

    if (usdElement) {
      // Simulação de taxa de câmbio - Em produção, usar uma API real
      const usdData = this.getMockUSDData();
      const changeClass = usdData.change >= 0 ? "value-up" : "value-down";
      const changeArrow = usdData.change >= 0 ? "↗" : "↘";
      usdElement.innerHTML = `R$ ${usdData.rate} <span class="${changeClass}">${changeArrow} ${Math.abs(usdData.change)}%</span>`;
    }

    if (ibovElement) {
      // Simulação de IBOV - Em produção, usar uma API real
      const ibovData = this.getMockIBOVData();
      const changeClass = ibovData.change >= 0 ? "value-up" : "value-down";
      const changeArrow = ibovData.change >= 0 ? "↗" : "↘";
      ibovElement.innerHTML = `${ibovData.points} <span class="${changeClass}">${changeArrow} ${ibovData.change}%</span>`;
    }
  },

  getMockWeatherData() {
    const conditions = [
      "Parcialmente nublado",
      "Ensolarado",
      "Nublado",
      "Chuva leve",
    ];
    return {
      city: "Rio de Janeiro",
      temp: 22,
      condition: conditions[Math.floor(Math.random() * conditions.length)],
    };
  },

  getMockUSDData() {
    // Variação aleatória pequena em torno de 5,04
    const baseRate = 5.04;
    const variation = (Math.random() - 0.5) * 0.1;
    const rate = (baseRate + variation).toFixed(2);
    const change = (Math.random() - 0.5) * 2;
    return { rate, change: change.toFixed(1) };
  },

  getMockIBOVData() {
    // Variação aleatória pequena em torno de 134.874
    const basePoints = 134874;
    const variation = Math.floor((Math.random() - 0.5) * 1000);
    const points = (basePoints + variation)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    const change = (Math.random() * 2 - 0.5).toFixed(1);
    return { points, change };
  },
};

// ========================================
// Menu Mobile
// ========================================

const MobileMenu = {
  initialized: false,

  init() {
    if (this.initialized) return;
    console.log("MobileMenu: Inicializando delegador de eventos...");
    this.bindEvents();
    this.initialized = true;
  },

  bindEvents() {
    // Event delegation for mobile menu toggle
    document.addEventListener("click", (e) => {
      // Toggle button click
      const toggle = e.target.closest("#mobile-menu-toggle");
      if (toggle) {
        console.log("MobileMenu: Clique detectado no toggle");
        this.toggleMenu(toggle);
        return;
      }

      // Dropdown toggle click (mobile only)
      const dropdownToggle = e.target.closest(".dropdown-toggle");
      if (dropdownToggle && window.innerWidth <= 768) {
        e.preventDefault();
        const dropdown = dropdownToggle.closest(".nav-dropdown");
        dropdown?.classList.toggle("active");
        return;
      }

      // Close menu when clicking on a link (not a dropdown toggle)
      const navLink = e.target.closest(".nav-link");
      if (navLink && !navLink.classList.contains("dropdown-toggle")) {
        this.closeMenu();
        return;
      }

      // Close menu when clicking outside
      if (!e.target.closest(".main-nav")) {
        this.closeMenu();
      }
    });
  },

  toggleMenu(toggleBtn) {
    const menu = document.getElementById("nav-menu");
    console.log("MobileMenu: Toggling menu...", { menuExists: !!menu });
    if (!menu || !toggleBtn) return;

    menu.classList.toggle("active");
    toggleBtn.classList.toggle("active");

    // Animação do ícone hamburguer
    const spans = toggleBtn.querySelectorAll("span");
    if (menu.classList.contains("active")) {
      if (spans[0]) spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      if (spans[1]) spans[1].style.opacity = "0";
      if (spans[2]) spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
    } else {
      spans.forEach(span => {
        span.style.transform = "";
        span.style.opacity = "";
      });
    }
  },

  closeMenu() {
    const menu = document.getElementById("nav-menu");
    const toggle = document.getElementById("mobile-menu-toggle");
    
    if (menu) menu.classList.remove("active");
    if (toggle) {
      toggle.classList.remove("active");
      const spans = toggle.querySelectorAll("span");
      spans.forEach(span => {
        span.style.transform = "";
        span.style.opacity = "";
      });
    }

    // Fecha todos os dropdowns
    const dropdowns = menu?.querySelectorAll(".nav-dropdown");
    dropdowns?.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  },
};

// ========================================
// Serviço de Notícias (API WordPress)
// ========================================

const NewsService = {
  endpoints: {
    rio: "https://www.correiodamanha.com.br/wp-json/wp/v2/posts",
    sp: "https://correiodamanhasp.com.br/wp-json/wp/v2/posts",
    df: "https://correiodamanhadf.com.br/wp-json/wp/v2/posts",
    "sul-fluminense": "https://correiosulfluminense.com.br/wp-json/wp/v2/posts",
    petropolis: "https://correiopetropolitano.com.br/wp-json/wp/v2/posts",
  },

  fallbacks: {
    rio: "https://placehold.co/600x400/cc0000/ffffff?text=Correio+Rio",
    sp: "https://placehold.co/600x400/1a365d/ffffff?text=Correio+SP",
    df: "https://placehold.co/600x400/1a3a5c/ffffff?text=Correio+DF",
    "sul-fluminense": "https://placehold.co/600x400/1e6ba8/ffffff?text=Sul+Fluminense",
    petropolis: "https://placehold.co/600x400/d60000/ffffff?text=Petropolitano",
    default: "https://placehold.co/600x400/1a3a5c/ffffff?text=Correio+da+Manha",
  },

  async fetchRegionPosts(region, count = 15) {
    const baseUrl = this.endpoints[region];
    if (!baseUrl) return [];

    try {
      const response = await fetch(`${baseUrl}?_embed&per_page=${count}`);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const posts = await response.json();
      return this.mapPosts(posts, region);
    } catch (error) {
      console.error(`Erro ao buscar notícias de ${region}:`, error);
      return [];
    }
  },

  async getGlobalFeed() {
    const regions = Object.keys(this.endpoints);
    const promises = regions.map((region) => this.fetchRegionPosts(region, 20));

    const results = await Promise.allSettled(promises);
    
    let allPosts = [];
    results.forEach((result) => {
      if (result.status === "fulfilled") {
        allPosts = allPosts.concat(result.value);
      }
    });

    // Global Sort by Date (Descending)
    return allPosts.sort((a, b) => new Date(b.date) - new Date(a.date));
  },

  async fetchAllRegions() {
    // Legacy method for regions-only fetch, but now we prefer getGlobalFeed
    return this.getGlobalFeed();
  },

  mapPosts(posts, region) {
    return posts.map((post) => {
      // Mapeamento Defensivo (Optional Chaining)
      const imageUrl =
        post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
        this.fallbacks[region] ||
        this.fallbacks.default;

      // Extract Categories & Tags from _embedded['wp:term']
      const terms = post._embedded?.["wp:term"] || [];
      const categories = terms[0]?.map((t) => t.name) || [];
      const tags = terms[1]?.map((t) => t.name) || [];

      return {
        id: post.id,
        title: post.title?.rendered || "Sem título",
        link: `noticia.html?id=noticia-001`, // Fallback for external news in demo
        excerpt: post.excerpt?.rendered || "",
        date: post.date,
        image: imageUrl,
        region: region,
        categories,
        tags,
      };
    });
  },

  renderArticleCard(article, isMain = false) {
    const fallback = this.fallbacks[article.region] || this.fallbacks.default;
    const cardClass = isMain ? "region-main-item" : "region-sidebar-item";

    return `
      <article class="${cardClass}">
        <a href="${article.link}" class="article-link">
          <div class="img-wrapper">
            <img 
              src="${article.image}" 
              alt="${article.title}"
              loading="lazy"
              onerror="this.onerror=null; this.src='${fallback}';"
            >
          </div>
          <div class="item-content">
            <h4 class="item-title">${article.title}</h4>
            ${isMain ? `<p class="item-excerpt">${this.stripHtml(article.excerpt).substring(0, 120)}...</p>` : ""}
          </div>
        </a>
      </article>
    `;
  },

  stripHtml(html) {
    const tmp = document.createElement("DIV");
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || "";
  },
};

// ========================================
// Abas de Regiões
// ========================================

const RegionTabs = {
  news: [],

  init(news = []) {
    this.news = news;
    this.tabs = document.querySelectorAll(".region-tab");
    this.contents = document.querySelectorAll(".region-content");
    this.bindEvents();

    // Render initial active tab using global data
    const activeTab = document.querySelector(".region-tab.active");
    if (activeTab) {
      this.switchTab(activeTab.dataset.region);
    }
  },

  bindEvents() {
    this.tabs.forEach((tab) => {
      tab.addEventListener("click", () => {
        const region = tab.dataset.region;
        this.switchTab(region);
      });
    });
  },

  switchTab(region) {
    const selectedTab = document.querySelector(`[data-region="${region}"]`);
    const selectedContent = document.getElementById(`region-${region}`);

    if (!selectedTab || !selectedContent) return;

    // Remove active from all
    this.tabs.forEach((t) => t.classList.remove("active"));
    this.contents.forEach((c) => c.classList.remove("active"));

    // Set active
    selectedContent.classList.add("active");
    selectedTab.classList.add("active");

    // Filter global news for this region
    let posts = this.news.filter((n) => n.region === region);

    // If no data in global pool yet, we could trigger a fallback fetch here,
    // but the global hub should already have it.
    this.renderRegionContent(selectedContent, posts, region);
    this.checkDefensiveLayout(selectedContent);
  },

  renderRegionContent(container, posts, region) {
    const grid = container.querySelector(".regions-grid");
    if (!grid) return;

    if (posts.length === 0) {
      grid.innerHTML = '<div class="region-empty-state">Nenhuma notícia recente nesta região.</div>';
      return;
    }

    const mainArticle = posts[0];
    const sideArticles = posts.slice(1, 5); // Total 5

    let html = `
      <div class="region-main-column">
        ${NewsService.renderArticleCard(mainArticle, true)}
      </div>
      <div class="region-sidebar-column">
        ${sideArticles.map((post) => NewsService.renderArticleCard(post, false)).join("")}
      </div>
    `;

    grid.innerHTML = html;
  },

  checkDefensiveLayout(container) {
    const grid = container.querySelector(".regions-grid");
    if (!grid) return;

    const mainItems = grid.querySelectorAll(".region-main-item");
    const sideItems = grid.querySelectorAll(".region-sidebar-item");
    const totalArticles = mainItems.length + sideItems.length;

    // Reset classes
    container.classList.remove("is-empty");
    grid.classList.remove("has-one");

    if (totalArticles === 0) {
      container.classList.add("is-empty");
    } else if (totalArticles === 1) {
      grid.classList.add("has-one");
    }
  },
};

// ========================================
// Gestor da Página Inicial (Global Hub)
// ========================================

const HomeManager = {
  news: [],

  async init() {
    console.log("HomeManager: Iniciando hub global...");

    // 1. Busca Feed Global (Simultâneo e Cronológico)
    this.news = await NewsService.getGlobalFeed();

    if (this.news.length === 0) {
      console.warn("HomeManager: Nenhum dado recebido do hub global.");
      return;
    }

    // 2. Distribui dados para as seções
    this.renderHero();
    RegionTabs.init(this.news);
    this.renderEditorialSections();

    document.body.classList.add("data-loaded");
  },

  renderHero() {
    const heroGrid = document.querySelector(".hero-grid");
    const mobileGrid = document.querySelector(".featured-grid-mobile");

    const main = this.news[0];
    const secondary = this.news.slice(1, 5);

    if (heroGrid) {
      const mainHtml = `
        <article class="featured-main">
          <a href="${main.link}" class="featured-main-image">
            <img src="${main.image}" alt="${main.title}" onerror="this.onerror=null; this.src='${NewsService.fallbacks[main.region] || NewsService.fallbacks.default}';">
          </a>
          <div class="featured-content">
            <h3>${main.title}</h3>
            <p>${NewsService.stripHtml(main.excerpt).substring(0, 150)}...</p>
            <span class="article-time">${Utils.formatRelativeDate(main.date)}</span>
          </div>
        </article>
      `;

      const secondaryHtml = `
        <div class="featured-secondary">
          ${secondary
            .map(
              (item) => `
            <article class="featured-item">
              <a href="${item.link}" class="featured-item-image">
                <span class="category-tag">${item.categories[0] ? `[${item.categories[0].toUpperCase()}]` : ""}</span>
                <img src="${item.image}" alt="${item.title}" onerror="this.onerror=null; this.src='${NewsService.fallbacks[item.region] || NewsService.fallbacks.default}';">
              </a>
              <h4>${item.title}</h4>
              <span class="article-time">${Utils.formatRelativeDate(item.date)}</span>
            </article>
          `,
            )
            .join("")}
        </div>
      `;

      heroGrid.innerHTML = mainHtml + secondaryHtml;
    }

    if (mobileGrid) {
      const mobileMain = this.news[0];
      const mobileSecondary = this.news.slice(1, 5);

      const mainHtml = `
        <article class="mobile-grid-main">
          <a href="${mobileMain.link}" class="carousel-image">
            <span class="category-tag">${mobileMain.categories[0] ? `[${mobileMain.categories[0].toUpperCase()}]` : ""}</span>
            <img src="${mobileMain.image}" alt="${mobileMain.title}" onerror="this.onerror=null; this.src='${NewsService.fallbacks[mobileMain.region] || NewsService.fallbacks.default}';">
          </a>
          <div class="mobile-grid-content">
            <h4>${mobileMain.title}</h4>
          </div>
        </article>
      `;

      const secondaryHtml = `
        <div class="mobile-grid-secondary">
          ${mobileSecondary
            .map(
              (item) => `
            <article class="mobile-grid-item">
              <a href="${item.link}" class="carousel-image">
                <span class="category-tag">${item.categories[0] ? `[${item.categories[0].toUpperCase()}]` : ""}</span>
                <img src="${item.image}" alt="${item.title}" onerror="this.onerror=null; this.src='${NewsService.fallbacks[item.region] || NewsService.fallbacks.default}';">
              </a>
              <div class="mobile-grid-content">
                <h4>${item.title}</h4>
                <span class="article-time">${Utils.formatRelativeDate(item.date)}</span>
              </div>
            </article>
          `,
            )
            .join("")}
        </div>
      `;

      mobileGrid.innerHTML = mainHtml + secondaryHtml;
    }
  },

  renderEditorialSections() {
    const sections = [
      { id: "politica", identifier: "politica" },
      { id: "economia", identifier: "economia" },
      { id: "esportes", identifier: "esportes" },
      { id: "cultura", identifier: "cultura" },
    ];

    sections.forEach((sec) => {
      const container = document.getElementById(sec.id);
      if (!container) return;

      const grid = container.querySelector(".modern-section-grid");
      if (!grid) return;

      const filtered = this.news.filter(
        (n) =>
          n.categories.some((c) => c.toLowerCase().includes(sec.identifier)) ||
          n.tags.some((t) => t.toLowerCase().includes(sec.identifier)),
      );

      if (filtered.length === 0) return;

      const main = filtered[0];
      const side = filtered.slice(1, 4);

      const html = `
        <article class="modern-section-main">
            <a href="${main.link}" class="news-image">
                <img src="${main.image}" alt="${main.title}" onerror="this.onerror=null; this.src='${NewsService.fallbacks[main.region] || NewsService.fallbacks.default}';">
                <span class="category-tag">${main.categories[0] ? `[${main.categories[0].toUpperCase()}]` : ""}</span>
            </a>
            <div class="news-content">
                <h3>${main.title}</h3>
                <p>${NewsService.stripHtml(main.excerpt).substring(0, 150)}...</p>
                <div class="article-meta">
                    <span class="author">Por ${this.getRegionName(main.region)}</span>
                    <span class="time">${Utils.formatRelativeDate(main.date)}</span>
                </div>
            </div>
        </article>
        <div class="modern-section-sidebar">
            ${side
              .map(
                (item) => `
                <article class="modern-section-item">
                    <a href="${item.link}" class="news-image">
                        <img src="${item.image}" alt="${item.title}" onerror="this.onerror=null; this.src='${NewsService.fallbacks[item.region] || NewsService.fallbacks.default}';">
                        <span class="category-tag">${item.categories[0] ? `[${item.categories[0].toUpperCase()}]` : ""}</span>
                    </a>
                    <div class="news-content">
                        <h4>${item.title}</h4>
                        <span class="author">Por ${this.getRegionName(item.region)}</span>
                    </div>
                </article>
            `,
              )
              .join("")}
        </div>
      `;
      grid.innerHTML = html;
    });
  },

  getRegionName(slug) {
    const names = {
      rio: "Correio da Manhã",
      sp: "Correio da Manhã SP",
      df: "Correio da Manhã DF",
      "sul-fluminense": "Correio Sul Fluminense",
      petropolis: "Correio Petropolitano",
    };
    return names[slug] || "Correio da Manhã";
  },
};

// ========================================
// Busca de Notícias
// ========================================

const Search = {
  init() {
    this.input = document.getElementById("search-input");
    this.bindEvents();
  },

  bindEvents() {
    if (this.input) {
      this.input.addEventListener(
        "input",
        Utils.debounce((e) => {
          this.handleSearch(e.target.value);
        }, 300),
      );

      this.input.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
          this.handleSearch(e.target.value);
        }
      });
    }
  },

  handleSearch(query) {
    if (query.length < 2) return;

    // Efeito visual nos cards
    const cards = document.querySelectorAll(
      ".news-card, .opinion-article, .news-list-item",
    );
    const normalizedQuery = query.toLowerCase();

    cards.forEach((card) => {
      const title =
        card.querySelector("h2, h3, h4")?.textContent.toLowerCase() || "";
      const excerpt = card.querySelector("p")?.textContent.toLowerCase() || "";

      if (
        title.includes(normalizedQuery) ||
        excerpt.includes(normalizedQuery)
      ) {
        card.style.display = "";
        card.classList.add("search-highlight");
        setTimeout(() => card.classList.remove("search-highlight"), 1000);
      } else {
        card.style.display = query.length > 0 ? "none" : "";
      }
    });
  },
};

// ========================================
// Newsletter
// ========================================

const Newsletter = {
  init() {
    this.form = document.getElementById("newsletter-form");
    this.emailInput = document.getElementById("newsletter-email");
    this.bindEvents();
  },

  bindEvents() {
    if (this.form) {
      this.form.addEventListener("submit", (e) => {
        e.preventDefault();
        this.subscribe();
      });
    }
  },

  subscribe() {
    const email = this.emailInput.value;

    if (!this.validateEmail(email)) {
      this.showError("Por favor, insira um e-mail válido.");
      return;
    }

    // Simulação de envio
    this.showLoading();

    setTimeout(() => {
      this.showSuccess(
        "Obrigado por se inscrever! Você receberá nossas notícias em breve.",
      );
      this.emailInput.value = "";
    }, 1500);
  },

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  showLoading() {
    const button = this.form.querySelector("button");
    if (button) {
      button.disabled = true;
      button.textContent = "Enviando...";
      button.classList.add("loading");
    }
  },

  showSuccess(message) {
    const button = this.form.querySelector("button");
    if (button) {
      button.disabled = false;
      button.textContent = "Inscrever-se";
      button.classList.remove("loading");
    }

    alert(message);
  },

  showError(message) {
    alert(message);
    if (this.emailInput) {
      this.emailInput.focus();
    }
  },
};

// ========================================
// Breaking News Ticker
// ========================================

// ========================================
// AO VIVO Live Coverage
// ========================================

const LiveCoverage = {
  init() {
    this.ticker = document.getElementById("live-ticker");
    this.panel = document.getElementById("live-panel");
    this.expandBtn = document.getElementById("live-expand-btn");
    this.closeBtn = document.getElementById("live-close-btn");
    this.bindEvents();
    this.pauseOnHover();
  },

  bindEvents() {
    // Expand panel on button click
    if (this.expandBtn) {
      this.expandBtn.addEventListener("click", () => this.expandPanel());
    }

    // Close panel on button click
    if (this.closeBtn) {
      this.closeBtn.addEventListener("click", () => this.closePanel());
    }

    // Close panel on escape key
    document.addEventListener("keydown", (e) => {
      if (
        e.key === "Escape" &&
        this.panel &&
        this.panel.classList.contains("active")
      ) {
        this.closePanel();
      }
    });
  },

  expandPanel() {
    if (this.panel) {
      this.panel.classList.add("active");
      this.panel.style.display = "block";
      // Scroll to panel
      setTimeout(() => {
        this.panel.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
  },

  closePanel() {
    if (this.panel) {
      this.panel.classList.remove("active");
      setTimeout(() => {
        this.panel.style.display = "none";
      }, 300);
    }
  },

  pauseOnHover() {
    if (this.ticker) {
      this.ticker.parentElement.addEventListener("mouseenter", () => {
        this.ticker.style.animationPlayState = "paused";
      });

      this.ticker.parentElement.addEventListener("mouseleave", () => {
        this.ticker.style.animationPlayState = "running";
      });
    }
  },

  // Add new live update dynamically
  addUpdate(time, title, content, tags = []) {
    const updatesContainer = document.getElementById("live-updates");
    if (!updatesContainer) return;

    const updateElement = document.createElement("article");
    updateElement.className = "live-update";

    const tagsHtml = tags
      .map((tag) => `<span class="tag">${tag}</span>`)
      .join("");

    updateElement.innerHTML = `
      <div class="update-time">
        <span class="time-badge">${time}</span>
      </div>
      <div class="update-content">
        <h4>${title}</h4>
        <p>${content}</p>
        <div class="update-tags">${tagsHtml}</div>
      </div>
    `;

    // Insert after the featured update or at the top
    const featuredUpdate = updatesContainer.querySelector(
      ".live-update.featured",
    );
    if (featuredUpdate) {
      featuredUpdate.after(updateElement);
    } else {
      updatesContainer.prepend(updateElement);
    }

    // Animate the new update
    updateElement.style.animation = "slideDown 0.3s ease-out";
  },
};

// ========================================
// Section Layout Enhancer
// ========================================

const SectionLayout = {
  init() {
    this.applyCompactClass();
    this.fixRegionSections();
  },

  applyCompactClass() {
    // Find all modern-section-sidebars
    const sidebars = document.querySelectorAll(".modern-section-sidebar");

    sidebars.forEach((sidebar) => {
      const items = sidebar.querySelectorAll(".modern-section-item");
      // Apply compact class to the third item (index 2)
      if (items.length >= 3) {
        items[2].classList.add("compact");
      }
    });
  },

  fixRegionSections() {
    // Convert old news-card layout to modern layout in region sections
    const regionGrids = document.querySelectorAll(
      ".region-content .modern-section-grid",
    );

    regionGrids.forEach((grid) => {
      const articles = grid.querySelectorAll(".news-card");
      if (articles.length === 0) return;

      // First article becomes the main featured
      const mainArticle = articles[0];
      mainArticle.classList.remove("news-card");
      mainArticle.classList.add("modern-section-main");

      // Move image outside of content div if needed
      const image = mainArticle.querySelector(".news-image");
      const content = mainArticle.querySelector(".news-content");

      if (image && content && mainArticle.contains(content)) {
        // Fix structure - move image before content
        mainArticle.insertBefore(image, content);

        const h4 = content.querySelector("h4");
        const time = content.querySelector(".time");
        const author = content.querySelector(".author");

        if (h4) {
          const h3 = document.createElement("h3");
          h3.textContent = h4.textContent;
          h4.replaceWith(h3);
        }

        // Add article-meta if not present
        if (!mainArticle.querySelector(".article-meta")) {
          const meta = document.createElement("div");
          meta.className = "article-meta";
          if (author) {
            const authorSpan = document.createElement("span");
            authorSpan.className = "author";
            authorSpan.textContent = author.textContent;
            meta.appendChild(authorSpan);
          }
          if (time) {
            meta.appendChild(time.cloneNode(true));
          }
          content.appendChild(meta);
        }
      }

      // Remaining articles go to sidebar
      if (articles.length > 1) {
        // Create sidebar container if it doesn't exist
        let sidebar = grid.querySelector(".modern-section-sidebar");
        if (!sidebar) {
          sidebar = document.createElement("div");
          sidebar.className = "modern-section-sidebar";
          grid.appendChild(sidebar);
        }

        // Move articles 2+ to sidebar
        for (let i = 1; i < articles.length; i++) {
          const article = articles[i];
          article.classList.remove("news-card");
          article.classList.add("modern-section-item");

          // Add compact class to items 3+
          if (i >= 2) {
            article.classList.add("compact");
          }

          sidebar.appendChild(article);
        }
      }
    });
  },
};

// Legacy BreakingNews module - kept for backwards compatibility
const BreakingNews = {
  init() {
    this.ticker = document.getElementById("breaking-news-ticker");
    this.pauseOnHover();
  },

  pauseOnHover() {
    if (this.ticker) {
      this.ticker.parentElement.addEventListener("mouseenter", () => {
        this.ticker.style.animationPlayState = "paused";
      });

      this.ticker.parentElement.addEventListener("mouseleave", () => {
        this.ticker.style.animationPlayState = "running";
      });
    }
  },
};

// ========================================
// Scroll Navigation
// ========================================

const ScrollNav = {
  init() {
    this.lastScroll = 0;
    this.container = document.querySelector(".sticky-nav-unified");
    this.header = document.querySelector(".main-header");
    this.logo = document.querySelector(".logo");
    this.portal = document.querySelector(".logo-portal");
    this.bindEvents();
  },

  bindEvents() {
    window.addEventListener(
      "scroll",
      Utils.debounce(() => {
        this.handleScroll();
      }, 10),
    );
  },

  handleScroll() {
    const currentScroll = window.pageYOffset;

    if (this.container) {
      if (currentScroll > 80) {
        this.container.classList.add("scrolled");
      } else {
        this.container.classList.remove("scrolled");
      }
    }

    // Logo shrink effect for premium feel
    if (this.logo && this.portal) {
      if (currentScroll > 100) {
        this.logo.style.fontSize = "2.8rem";
        this.portal.style.fontSize = "0.7rem";
      } else {
        this.logo.style.fontSize = "4rem";
        this.portal.style.fontSize = "0.8125rem";
      }
    }

    this.lastScroll = currentScroll;
  },
};

// ========================================
// Back to Top Button
// ========================================

const BackToTop = {
  init() {
    this.button = document.getElementById("back-to-top");
    if (!this.button) return;

    this.showThreshold = 300; // Mostrar após scrollar 300px
    this.bindEvents();
  },

  bindEvents() {
    // Monitorar scroll para mostrar/esconder botão
    window.addEventListener("scroll", () => {
      this.toggleVisibility();
    });

    // Scroll ao topo ao clicar
    this.button.addEventListener("click", () => {
      this.scrollToTop();
    });
  },

  toggleVisibility() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > this.showThreshold) {
      this.button.classList.add("visible");
    } else {
      this.button.classList.remove("visible");
    }
  },

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};

// ========================================
// Animações ao Scroll
// ========================================

const ScrollAnimations = {
  init() {
    this.elements = document.querySelectorAll(
      ".section, .news-card, .opinion-article",
    );
    this.initObserver();
  },

  initObserver() {
    if ("IntersectionObserver" in window) {
      this.observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("fade-in");
              this.observer.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.1,
          rootMargin: "0px 0px -50px 0px",
        },
      );

      this.elements.forEach((el) => this.observer.observe(el));
    }
  },
};

// ========================================
// Compartilhamento Social
// ========================================

const SocialShare = {
  init() {
    // Prepara links de compartilhamento
    this.addShareButtons();
  },

  addShareButtons() {
    const articles = document.querySelectorAll(".news-card, .opinion-article");

    articles.forEach((article) => {
      const shareBtn = document.createElement("button");
      shareBtn.className = "share-button";
      shareBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="18" cy="5" r="3"></circle>
                    <circle cx="6" cy="12" r="3"></circle>
                    <circle cx="18" cy="19" r="3"></circle>
                    <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                    <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                </svg>
            `;
      shareBtn.addEventListener("click", () => this.share(article));

      const content = article.querySelector(".news-content, .opinion-content");
      if (content) {
        content.appendChild(shareBtn);
      }
    });
  },

  share(article) {
    const title = article.querySelector("h3, h4")?.textContent || "";
    const url = window.location.href;

    if (navigator.share) {
      navigator.share({
        title: title,
        url: url,
      });
    } else {
      // Fallback: copiar para clipboard
      this.copyToClipboard(url);
    }
  },

  copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
      alert("Link copiado para a área de transferência!");
    });
  },
};

// ========================================
// Navegação de Notícias
// ========================================

const NewsNavigation = {
  init() {
    // Legacy navigation removed. Using native <a> links with IDs.
  }
};

// ========================================
// Geolocalização e Localização
// ========================================

const RegionalColors = {
  init() {
    this.detectRegion();
  },

  detectRegion() {
    // Tenta obter região do localStorage primeiro (cache)
    const cachedRegion = localStorage.getItem("cm_region");
    if (cachedRegion) {
      this.updateRegionInfo(cachedRegion);
      return;
    }

    // Se não há cache, tenta usar geolocalização
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const region = this.getRegionFromCoords(
            position.coords.latitude,
            position.coords.longitude,
          );
          localStorage.setItem("cm_region", region);
          this.updateRegionInfo(region);
        },
        (error) => {
          console.log("Geolocalização não permitida");
          this.updateRegionInfo("default");
        },
      );
    } else {
      // Sem geolocalização
      this.updateRegionInfo("default");
    }
  },

  getRegionFromCoords(lat, lon) {
    // Mapeamento aproximado de coordenadas para regiões
    // Rio de Janeiro: aproximadamente -22.9, -43.2
    // São Paulo: aproximadamente -23.5, -46.6
    // Brasília: aproximadamente -15.8, -47.9

    // Distância aproximada de cada centro regional
    const regions = [
      {
        name: "Rio de Janeiro",
        lat: -22.9068,
        lon: -43.1729,
        threshold: 150, // km
      },
      {
        name: "São Paulo",
        lat: -23.5505,
        lon: -46.6333,
        threshold: 150, // km
      },
      {
        name: "Distrito Federal",
        lat: -15.8267,
        lon: -47.9218,
        threshold: 100, // km
      },
      {
        name: "Sul Fluminense",
        lat: -22.5,
        lon: -44.1,
        threshold: 80, // km
      },
      {
        name: "Petrópolis",
        lat: -22.5113,
        lon: -43.1779,
        threshold: 30, // km
      },
    ];

    let closestRegion = "default";
    let minDistance = Infinity;

    regions.forEach((region) => {
      const distance = this.calculateDistance(lat, lon, region.lat, region.lon);
      if (distance < region.threshold && distance < minDistance) {
        closestRegion = region.name;
        minDistance = distance;
      }
    });

    return closestRegion;
  },

  calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Raio da Terra em km
    const dLat = this.toRad(lat2 - lat1);
    const dLon = this.toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.toRad(lat1)) *
        Math.cos(this.toRad(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
  },

  toRad(degrees) {
    return degrees * (Math.PI / 180);
  },

  updateRegionInfo(region) {
    // Cores de cada portal regional (baseado nos sites reais)
    const regionColors = {
      "Rio de Janeiro": "#cc0000", // Vermelho do Correio da Manhã
      "São Paulo": "#1a365d", // Azul escuro do Correio da Manhã SP
      "Sul Fluminense": "#1e6ba8", // Azul médio do Correio Sul Fluminense
      Petrópolis: "#d60000", // Vermelho do Correio Petropolitano
      "Distrito Federal": "#1a3a5c", // Azul padrão (DF usa template padrão)
      default: "#1a3a5c", // Azul padrão do portal
    };

    const headerColor = regionColors[region] || regionColors.default;

    // Atualiza a variável CSS --color-header-bg
    document.documentElement.style.setProperty(
      "--color-header-bg",
      headerColor,
    );

    // Atualiza o texto de localização se existir
    const weatherInfo = document.getElementById("weather-info");
    if (weatherInfo && region !== "default") {
      const cityNames = {
        "Rio de Janeiro": "Rio de Janeiro",
        "São Paulo": "São Paulo",
        "Sul Fluminense": "Sul Fluminense",
        Petrópolis: "Petrópolis",
        "Distrito Federal": "Brasília",
      };
      const currentText = weatherInfo.textContent;
      const tempMatch = currentText.match(/:\s*\d+°C/);
      const temp = tempMatch ? tempMatch[0] : ": 22°C";
      weatherInfo.textContent = `${cityNames[region] || region}${temp}`;
    }

    console.log("Região detectada:", region);
    console.log("Cor do header definida:", headerColor);
  },
};

// ========================================
// Inicialização
// ========================================

document.addEventListener("DOMContentLoaded", () => {
  // Inicializa o Header Global primeiro para que os elementos existam no DOM
  if (window.CMHeader) {
    window.CMHeader.render();
  }

  // Inicializa o Footer Global
  if (window.CMFooter) {
    window.CMFooter.render();
  }

  // Inicializa todos os módulos estáticos e de UI
  DateTime.init();
  HeaderInfo.init();
  MobileMenu.init();
  Search.init();
  Newsletter.init();
  UI.init();
  LiveCoverage.init();
  SectionLayout.init();
  BreakingNews.init();
  ScrollNav.init();
  BackToTop.init();
  ScrollAnimations.init();
  SocialShare.init();
  NewsNavigation.init();
  RegionalColors.init();

  // Hub Global de Notícias (Provedor de Dados Dinâmicos)
  HomeManager.init();

  // Adiciona classe ao body para indicar que JS está carregado
  document.body.classList.add("js-loaded");

  console.log("portal CM - Portal inicializado com sucesso");
});

// ========================================
// Exports para debug
// ========================================

window.CM = {
  Utils,
  DateTime,
  HeaderInfo,
  MobileMenu,
  RegionTabs,
  Search,
  Newsletter,
  LiveCoverage,
  SectionLayout,
  BreakingNews,
  ScrollNav,
  BackToTop,
  ScrollAnimations,
  SocialShare,
  NewsNavigation,
  RegionalColors,
  NewsService,
  HomeManager,
};
