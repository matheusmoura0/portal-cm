/**
 * Correio Shell
 * Shared shell inspired by the cm-portal prototype for product and article pages.
 */

const CorreioShell = {
  defaultProductKey: "nacional",

  fallbackColumnGroups: [
    {
      title: "Nacional",
      items: [
        "Correio Político",
        "Correio Bastidores",
        "Correio Econômico",
        "Correio Jurídico",
        "Correio do Aposentado",
        "Correio Esportivo",
        "Correio no Mundo",
        "Jornal de Turismo",
      ],
    },
    {
      title: "Rio de Janeiro",
      items: [
        "Correio Fluminense",
        "Correio Carioca",
        "Correio da Baixada",
        "Correio Norte/Noroeste",
      ],
    },
    {
      title: "Região Serrana - RJ",
      items: ["Correio Serrano", "Petropolitanas"],
    },
    {
      title: "Sul Fluminense",
      items: [
        "Correio do Vale",
        "Correio Agulhas Negras",
        "Correio Vale do Café",
        "Correio Vale Paraíba",
        "Correio Regional",
        "Correio Esportivo",
      ],
    },
    {
      title: "São Paulo",
      items: [
        "Correio Paulista",
        "Correio Paulistano",
        "Correio Grande SP",
        "Correio das Regiões",
      ],
    },
    {
      title: "Campinas",
      items: ["Correio de Campinas", "Grande Campinas"],
    },
    {
      title: "Distrito Federal e Estados",
      items: [
        "Brasilianas",
        "Correio Nacional",
        "Correio Centro-Oeste",
        "Correio Nordeste",
        "Correio Norte",
        "Correio Sul",
        "Correio Sudeste",
      ],
    },
  ],

  productConfigs: {
    nacional: {
      key: "nacional",
      aliases: ["rio", "rj", "correio-da-manha"],
      selectorLabel: "Correio da Manhã",
      brandTitle: "Correio da Manhã",
      brandSubtitle: "WWW.CORREIODAMANHA.COM.BR",
      brandColor: "#d71e15",
      themeClass: "theme-nacional",
      renderKey: "nacional",
      editorialKey: "nacional",
      weatherCity: "Rio de Janeiro",
      weatherTemp: "22",
      weatherCondition: "Parcialmente nublado",
      legacyPage: "correio-nacional.html",
    },
    sp: {
      key: "sp",
      aliases: [],
      selectorLabel: "Correio da Manhã SP",
      brandTitle: "Correio da Manhã SP",
      brandSubtitle: "ESTADO DE SÃO PAULO",
      brandColor: "#194466",
      themeClass: "theme-sp",
      renderKey: "sp",
      editorialKey: "sp",
      weatherCity: "São Paulo",
      weatherTemp: "19",
      weatherCondition: "Tempo estável",
      legacyPage: "correio-sp.html",
    },
    df: {
      key: "df",
      aliases: [],
      selectorLabel: "Correio da Manhã DF",
      brandTitle: "Correio da Manhã DF",
      brandSubtitle: "EDIÇÃO DISTRITO FEDERAL",
      brandColor: "#1f92c4",
      themeClass: "theme-df",
      renderKey: "df",
      editorialKey: "df",
      weatherCity: "Brasília",
      weatherTemp: "24",
      weatherCondition: "Parcialmente nublado",
      legacyPage: "correio-df.html",
    },
    sulfluminense: {
      key: "sulfluminense",
      aliases: [],
      selectorLabel: "Correio Sul Fluminense",
      brandTitle: "Correio Sul Fluminense",
      brandSubtitle: "UMA PUBLICAÇÃO DO CORREIO DA MANHÃ",
      brandColor: "#d20a11",
      themeClass: "theme-sulfluminense",
      renderKey: "sulfluminense",
      editorialKey: "sulfluminense",
      weatherCity: "Volta Redonda",
      weatherTemp: "20",
      weatherCondition: "Parcialmente nublado",
      legacyPage: "correio-sulfluminense.html",
    },
    petropolis: {
      key: "petropolis",
      aliases: ["petropolitano"],
      selectorLabel: "Correio Petropolitano",
      brandTitle: "Correio Petropolitano",
      brandSubtitle: "UMA PUBLICAÇÃO DO CORREIO DA MANHÃ",
      brandColor: "#D20A11",
      themeClass: "theme-petropolitano",
      renderKey: "petropolitano",
      editorialKey: "petropolitano",
      weatherCity: "Petrópolis",
      weatherTemp: "18",
      weatherCondition: "Frio e seco",
      legacyPage: "correio-petropolitano.html",
    },
    campinas: {
      key: "campinas",
      aliases: [],
      selectorLabel: "Campinas",
      brandTitle: "Correio Campinas",
      brandSubtitle: "REGIÃO DE CAMPINAS",
      brandColor: "#003366",
      themeClass: "theme-campinas",
      renderKey: "campinas",
      editorialKey: "campinas",
      weatherCity: "Campinas",
      weatherTemp: "21",
      weatherCondition: "Céu limpo",
      legacyPage: "correio-campinas.html",
    },
    barra: {
      key: "barra",
      aliases: [],
      selectorLabel: "Jornal da Barra",
      brandTitle: "Jornal da Barra",
      brandSubtitle: "UMA PUBLICAÇÃO DO CORREIO DA MANHÃ",
      brandColor: "#1A1A1A",
      themeClass: "theme-barra",
      renderKey: "barra",
      editorialKey: "",
      weatherCity: "Barra da Tijuca",
      weatherTemp: "25",
      weatherCondition: "Sol entre nuvens",
      legacyPage: "jornal-barra.html",
    },
    turismo: {
      key: "turismo",
      aliases: [],
      selectorLabel: "Jornal de Turismo",
      brandTitle: "Jornal de Turismo",
      brandSubtitle: "UMA PUBLICAÇÃO DO CORREIO DA MANHÃ",
      brandColor: "#FF6600",
      themeClass: "theme-turismo",
      renderKey: "turismo",
      editorialKey: "",
      weatherCity: "Brasil",
      weatherTemp: "23",
      weatherCondition: "Boas condições de viagem",
      legacyPage: "jornal-turismo.html",
    },
    servidor: {
      key: "servidor",
      aliases: [],
      selectorLabel: "Jornal do Servidor",
      brandTitle: "Jornal do Servidor",
      brandSubtitle: "UMA PUBLICAÇÃO DO CORREIO DA MANHÃ",
      brandColor: "#003366",
      themeClass: "theme-servidor",
      renderKey: "servidor",
      editorialKey: "",
      weatherCity: "Brasília",
      weatherTemp: "24",
      weatherCondition: "Tempo firme",
      legacyPage: "jornal-servidor.html",
    },
  },

  productOrder: [
    "nacional",
    "sp",
    "sulfluminense",
    "petropolis",
    "df",
  ],

  initialized: false,
  pageType: null,
  root: null,
  onProductChange: null,
  state: null,
  boundHandleOutsideClick: null,
  boundHandlePopState: null,

  formatCurrentDate() {
    const options = {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    };
    const date = new Date().toLocaleDateString("pt-BR", options);
    return date.charAt(0).toUpperCase() + date.slice(1);
  },

  adjustColor(color, amount) {
    const clamp = (num, min, max) => Math.min(Math.max(num, min), max);
    const value = String(color || "#000000").replace("#", "");
    let r = parseInt(value.substring(0, 2), 16);
    let g = parseInt(value.substring(2, 4), 16);
    let b = parseInt(value.substring(4, 6), 16);

    r = clamp(r + amount, 0, 255);
    g = clamp(g + amount, 0, 255);
    b = clamp(b + amount, 0, 255);

    return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
  },

  normalizeProductKey(rawKey) {
    const requested = String(rawKey || this.defaultProductKey).trim().toLowerCase();

    if (this.productConfigs[requested]) {
      return requested;
    }

    const matchedConfig = this.productOrder.find((key) =>
      this.productConfigs[key].aliases.includes(requested),
    );

    return matchedConfig || this.defaultProductKey;
  },

  getProductConfig(rawKey) {
    const key = this.normalizeProductKey(rawKey);
    return this.productConfigs[key] || this.productConfigs[this.defaultProductKey];
  },

  getProductPageUrl(rawKey) {
    const key = this.normalizeProductKey(rawKey);
    return `correio-produto.html?product=${encodeURIComponent(key)}`;
  },

  getLegacyPageUrl(rawKey) {
    return this.getProductConfig(rawKey).legacyPage;
  },

  getRenderKey(rawKey) {
    return this.getProductConfig(rawKey).renderKey;
  },

  getEditorialItems(rawKey) {
    const config = this.getProductConfig(rawKey);
    const editorialKey = config.editorialKey;

    if (
      !editorialKey ||
      !window.CorreioEditoria ||
      !window.CorreioEditoria.productConfigs ||
      !window.CorreioEditoria.productConfigs[editorialKey]
    ) {
      return [];
    }

    return window.CorreioEditoria.productConfigs[editorialKey].editorias.map(
      (editoria) => ({
        label: editoria.label,
        href: `correio-editoria.html?product=${encodeURIComponent(editorialKey)}&editoria=${encodeURIComponent(editoria.slug)}`,
      }),
    );
  },

  slugifyColumnLabel(label) {
    return String(label || "")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[\/]/g, " ")
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  },

  getAllColumnGroups() {
    if (window.CMColumns && typeof window.CMColumns.getMenuGroups === "function") {
      return window.CMColumns.getMenuGroups();
    }

    return this.fallbackColumnGroups.map((group) => ({
      title: group.title,
      items: group.items.map((label) => {
        const slug = this.slugifyColumnLabel(label);
        return {
          label,
          slug,
          url: `coluna.html?slug=${encodeURIComponent(slug)}`,
        };
      }),
    }));
  },

  getColumnGroupsForProduct(rawKey) {
    const productKey = this.normalizeProductKey(rawKey);
    const groupTitlesByProduct = {
      nacional: ["Nacional", "Rio de Janeiro"],
      sp: ["São Paulo"],
      df: ["Distrito Federal e Estados"],
      sulfluminense: ["Sul Fluminense"],
      petropolis: ["Região Serrana - RJ"],
      campinas: ["Campinas"],
    };

    const allowedTitles = groupTitlesByProduct[productKey] || [];
    if (!allowedTitles.length) {
      return [];
    }

    const groups = this.getAllColumnGroups();
    return groups.filter((group) => allowedTitles.includes(group.title));
  },

  getColumnDropdownMarkup(rawKey) {
    const groups = this.getColumnGroupsForProduct(rawKey);
    if (!groups.length) return "";

    const groupedItems = groups
      .map(
        (group) => `
          <div class="correio-shell-dropdown-group">
            <div class="correio-shell-dropdown-group-label">${this.escapeText(group.title)}</div>
            ${group.items
              .map(
                (item) => `
                  <a href="${this.escapeText(item.url)}">${this.escapeText(item.label)}</a>
                `,
              )
              .join("")}
          </div>
        `,
      )
      .join("");

    return `
      <div class="correio-shell-dropdown-menu correio-shell-dropdown-menu-grouped">
        ${groupedItems}
      </div>
    `;
  },

  getMobileColumnMenuMarkup(rawKey) {
    const groups = this.getColumnGroupsForProduct(rawKey);
    if (!groups.length) return "";

    return `
      <div class="correio-shell-mobile-item correio-shell-mobile-item-has-submenu">
        <button
          type="button"
          class="correio-shell-mobile-submenu-toggle"
          data-shell-mobile-submenu-toggle
          aria-expanded="false"
        >
          <span>Colunas</span>
          <i class="fas fa-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="correio-shell-mobile-submenu">
          ${groups
            .map(
              (group) => `
                <div class="correio-shell-mobile-subgroup">
                  <div class="correio-shell-mobile-subgroup-label">${this.escapeText(group.title)}</div>
                  ${group.items
                    .map(
                      (item) => `
                        <a href="${this.escapeText(item.url)}" class="correio-shell-mobile-link correio-shell-mobile-sublink">
                          ${this.escapeText(item.label)}
                        </a>
                      `,
                    )
                    .join("")}
                </div>
              `,
            )
            .join("")}
        </div>
      </div>
    `;
  },

  getMobileProductsMenuMarkup() {
    const productItems = this.getNossosCorreiosItems();
    if (!productItems.length) return "";

    return `
      <div class="correio-shell-mobile-item correio-shell-mobile-item-has-submenu">
        <button
          type="button"
          class="correio-shell-mobile-submenu-toggle"
          data-shell-mobile-submenu-toggle
          aria-expanded="false"
        >
          <span>Nossos Correios</span>
          <i class="fas fa-chevron-down" aria-hidden="true"></i>
        </button>
        <div class="correio-shell-mobile-submenu">
          ${productItems
            .map(
              (item) => `
                <a
                  href="${this.escapeText(item.href)}"
                  class="correio-shell-mobile-link correio-shell-mobile-sublink"
                  data-shell-product="${this.escapeText(item.key)}"
                >
                  ${this.escapeText(item.label)}
                </a>
              `,
            )
            .join("")}
        </div>
      </div>
    `;
  },

  getNossosCorreiosItems() {
    return this.productOrder.map((key) => {
      const config = this.getProductConfig(key);
      return {
        key,
        label: config.selectorLabel,
        href: this.getProductPageUrl(key),
      };
    });
  },

  buildUrl(pageType, productKey, articleId = "") {
    const canonicalProduct = this.normalizeProductKey(productKey);

    if (pageType === "article") {
      const params = new URLSearchParams(window.location.search);
      if (articleId) {
        params.set("id", articleId);
      }
      params.set("product", canonicalProduct);
      return `noticia.html?${params.toString()}`;
    }

    return this.getProductPageUrl(canonicalProduct);
  },

  getStateFromLocation(pageType) {
    const params = new URLSearchParams(window.location.search);
    const rawProduct = params.get("product") || this.defaultProductKey;
    const productKey = this.normalizeProductKey(rawProduct);
    const articleId = params.get("id") || "";
    const config = this.getProductConfig(productKey);
    const currentFilename =
      window.location.pathname.split("/").pop() ||
      (pageType === "article" ? "noticia.html" : "correio-produto.html");
    const currentUrl = `${currentFilename}${window.location.search}`;
    const canonicalUrl = this.buildUrl(pageType, productKey, articleId);

    return {
      pageType,
      productKey,
      config,
      articleId,
      currentUrl,
      canonicalUrl,
      usesAlias: rawProduct !== productKey,
    };
  },

  init(options = {}) {
    const rootId = options.rootId || "correio-shell-root";
    const root = document.getElementById(rootId);
    if (!root) return null;

    this.root = root;
    this.pageType = options.pageType || "product";
    this.onProductChange =
      typeof options.onProductChange === "function" ? options.onProductChange : null;

    if (!this.initialized) {
      this.boundHandleOutsideClick = (event) => this.handleOutsideClick(event);
      this.boundHandlePopState = () => {
        if (this.pageType) {
          this.sync({
            replaceCanonical: false,
            notify: true,
          });
        }
      };

      document.addEventListener("click", this.boundHandleOutsideClick);
      window.addEventListener("popstate", this.boundHandlePopState);
      this.initialized = true;
    }

    return this.sync({
      replaceCanonical: true,
      notify: true,
    });
  },

  sync({ replaceCanonical = false, notify = true } = {}) {
    if (!this.root || !this.pageType) return null;

    this.state = this.getStateFromLocation(this.pageType);
    this.render(this.state);
    this.applyDocumentState(this.state);
    this.bindInteractiveElements();

    if (replaceCanonical && this.state.currentUrl !== this.state.canonicalUrl) {
      window.history.replaceState(
        { product: this.state.productKey, pageType: this.pageType },
        "",
        this.state.canonicalUrl,
      );
    }

    if (notify && this.onProductChange) {
      this.onProductChange(this.state);
    }

    return this.state;
  },

  applyDocumentState(state) {
    const themeClasses = Object.values(this.productConfigs).map(
      (config) => config.themeClass,
    );

    themeClasses.forEach((themeClass) => {
      document.body.classList.remove(themeClass);
    });

    document.body.classList.add(
      "has-regional-headers",
      "has-correio-shell",
      state.config.themeClass,
    );
    document.body.dataset.productKey = state.productKey;

    document.documentElement.style.setProperty(
      "--correio-shell-brand",
      state.config.brandColor,
    );
    document.documentElement.style.setProperty(
      "--product-color",
      state.config.brandColor,
    );
    document.documentElement.style.setProperty(
      "--product-color-dark",
      this.adjustColor(state.config.brandColor, -30),
    );

    if (state.pageType === "product") {
      document.title = `${state.config.brandTitle} | CM`;
    }
  },

  render(state) {
    const columnDropdownMarkup = this.getColumnDropdownMarkup(state.productKey);
    const productItems = this.getNossosCorreiosItems();
    const mobileColumnMenuMarkup = this.getMobileColumnMenuMarkup(state.productKey);
    const mobileProductsMenuMarkup = this.getMobileProductsMenuMarkup();

    this.root.innerHTML = `
      <header class="correio-shell" style="--correio-shell-brand: ${this.escapeText(state.config.brandColor)};">
        <div class="correio-shell-topbar">
          <div class="container correio-shell-topbar-content">
            <div class="correio-shell-topbar-group">
              <span class="correio-shell-topbar-item">
                <i class="far fa-calendar-alt" aria-hidden="true"></i>
                <span>${this.escapeText(this.formatCurrentDate())}</span>
              </span>
              <span class="correio-shell-topbar-divider"></span>
              <span class="correio-shell-topbar-item">
                <i class="fas fa-cloud-sun" aria-hidden="true"></i>
                <span>${this.escapeText(
                  `${state.config.weatherCity}: ${state.config.weatherTemp}°C ${state.config.weatherCondition}`,
                )}</span>
              </span>
            </div>

            <div class="correio-shell-topbar-group correio-shell-topbar-group-market">
              <span class="correio-shell-topbar-item">
                <strong>USD:</strong> R$ 5,04
              </span>
              <span class="correio-shell-topbar-divider"></span>
              <span class="correio-shell-topbar-item">
                <strong>IBOV:</strong> 134.874 <span class="correio-shell-trend-up">+0,8%</span>
              </span>
            </div>

            <div class="correio-shell-topbar-group">
              <div class="correio-shell-socials" aria-label="Redes sociais">
                <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                <a href="https://www.instagram.com/correiodamanhabr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                <a href="https://www.youtube.com/@TVCorreiodaManhã" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
              </div>
              <span class="correio-shell-topbar-divider"></span>
              <div class="correio-shell-topbar-links">
                <a href="index.html">Home</a>
                <a href="assine.html">Edição Digital</a>
                <a href="anuncie.html">Anuncie</a>
              </div>
            </div>
          </div>
        </div>

        <div class="correio-shell-main-header">
          <div class="container correio-shell-main-grid">
            <div class="correio-shell-brand-block">
              <a href="${this.escapeText(this.getProductPageUrl(state.productKey))}" class="correio-shell-brand-link">
                <span class="correio-shell-brand-title">${this.escapeText(state.config.brandTitle)}</span>
                <span class="correio-shell-brand-subtitle">${this.escapeText(state.config.brandSubtitle)}</span>
              </a>

              <div class="correio-shell-region-selector">
                <button
                  type="button"
                  class="correio-shell-region-btn"
                  data-shell-region-toggle
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  <i class="fas fa-location-dot" aria-hidden="true"></i>
                  <span>${this.escapeText(state.config.selectorLabel)}</span>
                  <i class="fas fa-chevron-down" aria-hidden="true"></i>
                </button>
                <div class="correio-shell-region-menu">
                  ${this.renderRegionOptions(state.productKey)}
                </div>
              </div>
            </div>

            <label class="correio-shell-search" for="search-input">
              <span class="correio-shell-search-label">Buscar notícias...</span>
              <input
                id="search-input"
                type="search"
                placeholder="Buscar notícias..."
                aria-label="Buscar notícias"
              />
              <i class="fas fa-search" aria-hidden="true"></i>
            </label>
          </div>
        </div>

        <nav class="correio-shell-nav" aria-label="Navegação contextual">
          <div class="container correio-shell-nav-inner">
            <button
              type="button"
              class="correio-shell-mobile-toggle"
              data-shell-mobile-toggle
              aria-expanded="false"
              aria-controls="correio-shell-mobile-overlay"
              aria-label="Abrir menu"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <ul class="correio-shell-nav-list">
              ${
                columnDropdownMarkup
                  ? `
                    <li class="correio-shell-nav-item correio-shell-nav-dropdown">
                      <button
                        type="button"
                        class="correio-shell-nav-btn"
                        data-shell-nav-toggle
                        aria-expanded="false"
                      >
                        <span>Colunas</span>
                        <i class="fas fa-chevron-down" aria-hidden="true"></i>
                      </button>
                      ${columnDropdownMarkup}
                    </li>
                  `
                  : ""
              }
              <li class="correio-shell-nav-item correio-shell-nav-dropdown">
                <button
                  type="button"
                  class="correio-shell-nav-btn"
                  data-shell-nav-toggle
                  aria-expanded="false"
                >
                  <span>Nossos Correios</span>
                  <i class="fas fa-chevron-down" aria-hidden="true"></i>
                </button>
                <ul class="correio-shell-dropdown-menu">
                  ${productItems
                    .map(
                      (item) => `
                        <li>
                          <a
                            href="${this.escapeText(item.href)}"
                            data-shell-product="${this.escapeText(item.key)}"
                          >
                            ${this.escapeText(item.label)}
                          </a>
                        </li>
                      `,
                    )
                    .join("")}
                </ul>
              </li>
              <li class="correio-shell-nav-item">
                <a href="index.html" class="correio-shell-nav-link">Home</a>
              </li>
            </ul>
          </div>
        </nav>

        <div id="correio-shell-mobile-overlay" class="correio-shell-mobile-overlay" data-shell-mobile-overlay>
          <aside class="correio-shell-mobile-drawer" aria-label="Menu lateral do produto">
            <div class="correio-shell-mobile-drawer-header">
              <div class="correio-shell-mobile-drawer-title">Menu</div>
              <button
                type="button"
                class="correio-shell-mobile-close"
                data-shell-mobile-close
                aria-label="Fechar menu"
              >
                <i class="fas fa-times" aria-hidden="true"></i>
              </button>
            </div>

            <div class="correio-shell-mobile-drawer-body">
              <a href="index.html" class="correio-shell-mobile-link">Home</a>
              ${mobileColumnMenuMarkup}
              ${mobileProductsMenuMarkup}
            </div>
          </aside>
        </div>
      </header>
    `;
  },

  renderRegionOptions(activeProductKey) {
    return this.productOrder
      .map((key) => {
        const config = this.getProductConfig(key);
        const isActive = key === activeProductKey;

        return `
          <a
            href="${this.escapeText(this.buildUrl(this.pageType, key, this.state?.articleId || ""))}"
            class="correio-shell-region-option${isActive ? " is-active" : ""}"
            data-shell-product="${this.escapeText(key)}"
          >
            <span class="correio-shell-region-option-dot" style="--correio-shell-brand: ${this.escapeText(config.brandColor)};"></span>
            <span class="correio-shell-region-option-text">
              <strong>${this.escapeText(config.selectorLabel)}</strong>
              <small>${this.escapeText(config.brandSubtitle)}</small>
            </span>
            ${isActive ? '<i class="fas fa-check" aria-hidden="true"></i>' : ""}
          </a>
        `;
      })
      .join("");
  },

  bindInteractiveElements() {
    const regionToggle = this.root.querySelector("[data-shell-region-toggle]");
    const regionSelector = this.root.querySelector(".correio-shell-region-selector");

    if (regionToggle && regionSelector) {
      regionToggle.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const willOpen = !regionSelector.classList.contains("is-open");
        this.closeAllMenus();
        regionSelector.classList.toggle("is-open", willOpen);
        regionToggle.setAttribute("aria-expanded", String(willOpen));
      });
    }

    const navToggles = this.root.querySelectorAll("[data-shell-nav-toggle]");
    navToggles.forEach((toggle) => {
      toggle.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const dropdown = toggle.closest(".correio-shell-nav-dropdown");
        const willOpen = dropdown && !dropdown.classList.contains("is-open");

        this.closeAllMenus();

        if (dropdown) {
          dropdown.classList.toggle("is-open", willOpen);
          toggle.setAttribute("aria-expanded", String(willOpen));
        }
      });
    });

    const mobileToggle = this.root.querySelector("[data-shell-mobile-toggle]");
    const mobileClose = this.root.querySelector("[data-shell-mobile-close]");
    const mobileOverlay = this.root.querySelector("[data-shell-mobile-overlay]");

    if (mobileToggle && mobileOverlay) {
      mobileToggle.addEventListener("click", (event) => {
        event.preventDefault();
        event.stopPropagation();
        const willOpen = !mobileOverlay.classList.contains("is-open");
        this.closeAllMenus();
        this.toggleMobileDrawer(willOpen);
      });
    }

    if (mobileClose) {
      mobileClose.addEventListener("click", (event) => {
        event.preventDefault();
        this.toggleMobileDrawer(false);
      });
    }

    if (mobileOverlay) {
      mobileOverlay.addEventListener("click", (event) => {
        if (event.target === mobileOverlay) {
          this.toggleMobileDrawer(false);
        }
      });
    }

    const mobileSubmenuToggles = this.root.querySelectorAll("[data-shell-mobile-submenu-toggle]");
    mobileSubmenuToggles.forEach((toggle) => {
      toggle.addEventListener("click", (event) => {
        event.preventDefault();
        const mobileItem = toggle.closest(".correio-shell-mobile-item");
        const willOpen = mobileItem && !mobileItem.classList.contains("is-open");

        this.root
          .querySelectorAll(".correio-shell-mobile-item-has-submenu")
          .forEach((item) => {
            item.classList.remove("is-open");
            const button = item.querySelector("[data-shell-mobile-submenu-toggle]");
            if (button) {
              button.setAttribute("aria-expanded", "false");
            }
          });

        if (mobileItem) {
          mobileItem.classList.toggle("is-open", willOpen);
          toggle.setAttribute("aria-expanded", String(willOpen));
        }
      });
    });

    const productLinks = this.root.querySelectorAll("[data-shell-product]");
    productLinks.forEach((link) => {
      link.addEventListener("click", (event) => {
        const nextProduct = link.getAttribute("data-shell-product");
        if (!nextProduct) return;

        event.preventDefault();
        this.navigateToProduct(nextProduct);
      });
    });
  },

  handleOutsideClick(event) {
    if (!this.root || this.root.contains(event.target)) return;
    this.closeAllMenus();
  },

  closeAllMenus() {
    const regionSelector = this.root?.querySelector(".correio-shell-region-selector");
    const regionToggle = this.root?.querySelector("[data-shell-region-toggle]");

    if (regionSelector) {
      regionSelector.classList.remove("is-open");
    }

    if (regionToggle) {
      regionToggle.setAttribute("aria-expanded", "false");
    }

    const navDropdowns = this.root?.querySelectorAll(".correio-shell-nav-dropdown");
    navDropdowns?.forEach((dropdown) => {
      dropdown.classList.remove("is-open");
      const toggle = dropdown.querySelector("[data-shell-nav-toggle]");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    this.toggleMobileDrawer(false);

    const mobileItems = this.root?.querySelectorAll(".correio-shell-mobile-item-has-submenu");
    mobileItems?.forEach((item) => {
      item.classList.remove("is-open");
      const toggle = item.querySelector("[data-shell-mobile-submenu-toggle]");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  },

  toggleMobileDrawer(isOpen) {
    const mobileOverlay = this.root?.querySelector("[data-shell-mobile-overlay]");
    const mobileToggle = this.root?.querySelector("[data-shell-mobile-toggle]");

    if (mobileOverlay) {
      mobileOverlay.classList.toggle("is-open", Boolean(isOpen));
    }

    if (mobileToggle) {
      mobileToggle.setAttribute("aria-expanded", String(Boolean(isOpen)));
    }

    document.body.classList.toggle("has-correio-shell-mobile-open", Boolean(isOpen));
  },

  navigateToProduct(rawProductKey) {
    const productKey = this.normalizeProductKey(rawProductKey);
    const nextUrl = this.buildUrl(
      this.pageType,
      productKey,
      this.state?.articleId || "",
    );

    this.closeAllMenus();

    if (nextUrl === this.state?.canonicalUrl) {
      return;
    }

    window.history.pushState(
      {
        product: productKey,
        pageType: this.pageType,
      },
      "",
      nextUrl,
    );

    this.sync({
      replaceCanonical: false,
      notify: true,
    });
  },

  escapeText(value) {
    const div = document.createElement("div");
    div.textContent = String(value || "");
    return div.innerHTML;
  },
};

window.CorreioShell = CorreioShell;
