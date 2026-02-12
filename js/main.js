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
  init() {
    this.toggle = document.getElementById("mobile-menu-toggle");
    this.menu = document.getElementById("nav-menu");
    this.bindEvents();
  },

  bindEvents() {
    if (this.toggle) {
      this.toggle.addEventListener("click", () => this.toggleMenu());
    }

    // Fechar menu ao clicar em um link (exceto dropdown toggle)
    const navLinks = this.menu?.querySelectorAll(".nav-link");
    navLinks?.forEach((link) => {
      // Se não for um dropdown toggle, fecha o menu ao clicar
      if (!link.classList.contains("dropdown-toggle")) {
        link.addEventListener("click", () => this.closeMenu());
      }
    });

    // Dropdown toggle para mobile
    const dropdownToggles = this.menu?.querySelectorAll(".dropdown-toggle");
    dropdownToggles?.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        // Em mobile, previne o comportamento padrão e toggle o dropdown
        if (window.innerWidth <= 768) {
          e.preventDefault();
          const dropdown = toggle.closest(".nav-dropdown");
          dropdown?.classList.toggle("active");
        }
      });
    });

    // Fechar menu ao clicar fora
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".main-nav")) {
        this.closeMenu();
      }
    });
  },

  toggleMenu() {
    this.menu.classList.toggle("active");
    this.toggle.classList.toggle("active");

    // Animação do ícone hamburguer
    const spans = this.toggle.querySelectorAll("span");
    if (this.menu.classList.contains("active")) {
      spans[0].style.transform = "rotate(45deg) translate(5px, 5px)";
      spans[1].style.opacity = "0";
      spans[2].style.transform = "rotate(-45deg) translate(7px, -6px)";
    } else {
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }
  },

  closeMenu() {
    this.menu.classList.remove("active");
    this.toggle.classList.remove("active");

    const spans = this.toggle.querySelectorAll("span");
    if (spans.length) {
      spans[0].style.transform = "";
      spans[1].style.opacity = "";
      spans[2].style.transform = "";
    }

    // Fecha todos os dropdowns
    const dropdowns = this.menu?.querySelectorAll(".nav-dropdown");
    dropdowns?.forEach((dropdown) => {
      dropdown.classList.remove("active");
    });
  },
};

// ========================================
// Abas de Regiões
// ========================================

const RegionTabs = {
  init() {
    this.tabs = document.querySelectorAll(".region-tab");
    this.contents = document.querySelectorAll(".region-content");
    this.bindEvents();
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
    // Remove active de todos
    this.tabs.forEach((t) => t.classList.remove("active"));
    this.contents.forEach((c) => c.classList.remove("active"));

    // Adiciona active no selecionado
    const selectedTab = document.querySelector(`[data-region="${region}"]`);
    const selectedContent = document.getElementById(`region-${region}`);

    if (selectedTab && selectedContent) {
      selectedTab.classList.add("active");
      selectedContent.classList.add("active");

      // Animação de fade in
      selectedContent.classList.add("fade-in");
      setTimeout(() => {
        selectedContent.classList.remove("fade-in");
      }, 500);
    }
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
    this.nav = document.querySelector(".main-nav");
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

    // Adiciona sombra ao menu quando scrolled
    if (this.nav && currentScroll > 50) {
      this.nav.style.boxShadow = "0 4px 12px rgba(0,0,0,0.15)";
    } else if (this.nav) {
      this.nav.style.boxShadow = "0 1px 2px rgba(0,0,0,0.08)";
    }

    // Header shrink effect
    if (this.header && this.logo && this.portal) {
      if (currentScroll > 100) {
        this.header.classList.add("scrolled");
        this.logo.style.fontSize = "2.5rem";
        this.portal.style.fontSize = "0.65rem";
        this.portal.style.letterSpacing = "1px";
      } else {
        this.header.classList.remove("scrolled");
        this.logo.style.fontSize = "4rem";
        this.portal.style.fontSize = "0.8125rem";
        this.portal.style.letterSpacing = "2px";
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
    this.makeNewsClickable();
  },

  makeNewsClickable() {
    // Seleciona todos os cards de notícia
    const newsCards = document.querySelectorAll(
      ".news-card, .opinion-article, .hero-article, .side-article, .most-read-item, .featured-item, .carousel-item",
    );

    newsCards.forEach((card) => {
      // Se o card já tem um link direto, não precisa modificar
      const existingLink = card.querySelector("a[href]");
      if (existingLink && existingLink.getAttribute("href") !== "#") {
        return;
      }

      // Adiciona evento de clique no card inteiro
      card.addEventListener("click", (e) => {
        // Se clicou em um link válido ou botão, não intercepta
        if (
          e.target.closest("a[href]:not([href='#'])") ||
          e.target.closest("button")
        ) {
          return;
        }

        // Navega para a página de notícia singular
        window.location.href = "noticia.html";
      });

      // Adiciona cursor pointer para indicar que é clicável
      card.style.cursor = "pointer";
    });
  },
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
  // Inicializa todos os módulos
  DateTime.init();
  HeaderInfo.init();
  MobileMenu.init();
  RegionTabs.init();
  Search.init();
  Newsletter.init();
  BreakingNews.init();
  ScrollNav.init();
  BackToTop.init();
  ScrollAnimations.init();
  SocialShare.init();
  NewsNavigation.init();
  RegionalColors.init();

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
  BreakingNews,
  ScrollNav,
  BackToTop,
  ScrollAnimations,
  SocialShare,
  NewsNavigation,
  RegionalColors,
};
