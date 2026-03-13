/**
 * Unified Data Loader for Portal CM
 * Loads and renders mock data consistently across all pages
 */

const DataLoader = {
  /**
   * Render a section of news cards
   * @param {string} containerId - ID of the container element
   * @param {string} category - Category key from portalMockData
   * @param {string} categoryName - Display name for category
   * @param {number} limit - Maximum number of items to render (default: all)
   * @param {boolean} hideMetadata - Hide author and time metadata (default: false)
   */
  renderSection(
    containerId,
    category,
    categoryName = null,
    limit = null,
    hideMetadata = false,
    hiddenStartIndex = null,
    product = null,
  ) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`Container ${containerId} not found`);
      return;
    }

    const news = portalMockData[category];
    if (!news || news.length === 0) {
      console.warn(`No data found for category: ${category}`);
      return;
    }

    // Apply limit if specified
    const newsToRender = limit ? news.slice(0, limit) : news;

    const displayName = categoryName || this.formatCategoryName(category);

    let html = "";
    newsToRender.forEach((item, index) => {
      const isFirst = index === 0;
      const hiddenClass =
        hiddenStartIndex !== null && index >= hiddenStartIndex ? " hidden" : "";
      const cardClass = isFirst
        ? `news-card featured${hiddenClass}`
        : `news-card${hiddenClass}`;

      html += this.renderCard(
        item,
        displayName,
        cardClass,
        hideMetadata,
        product,
      );
    });

    container.innerHTML = html;
  },

  /**
   * Render a single news card
   */
  renderCard(
    item,
    category,
    cardClass = "news-card",
    hideMetadata = false,
    product = null,
  ) {
    const title = item.title || "Sem título";
    const link = item.link || "noticia.html";
    const imageUrl =
      item.img || item.image || "https://placehold.co/600x400?text=Sem+Imagem";
    const excerpt = item.excerpt || "";
    const time = item.time || "Há pouco";
    const author = item.author || "Correio da Manhã";
    const categoryTag = item.category || category || "Notícias";

    const linkWithProduct = this.appendProductToLink(link, product);

    const imageHTML = `<img src="${imageUrl}" alt="${this.escapeHtml(title)}">`;
    const excerptHTML = excerpt
      ? `<p class="news-excerpt">${this.escapeHtml(excerpt)}</p>`
      : "";

    const metadataHTML = hideMetadata
      ? ""
      : `
      <div class="article-meta">
        <span class="author">${this.escapeHtml(author)}</span>
        <span class="time">${this.escapeHtml(time)}</span>
      </div>
    `;

    return `
            <article class="${cardClass}">
                <a href="${linkWithProduct}" class="news-image">
                    ${imageHTML}
                </a>
                <div class="news-content">
                    <span class="category-tag">${this.escapeHtml(categoryTag)}</span>
                    <h3>
                        <a href="${linkWithProduct}">${this.escapeHtml(title)}</a>
                    </h3>
                    ${excerptHTML}
                    ${metadataHTML}
                </div>
            </article>
        `;
  },

  /**
   * Render modern section grid (main + sidebar layout)
   */
  renderModernSection(containerId, category, categoryName = null) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`Container ${containerId} not found`);
      return;
    }

    const news = portalMockData[category];
    if (!news || news.length === 0) {
      console.warn(`No data found for category: ${category}`);
      return;
    }

    const displayName = categoryName || this.formatCategoryName(category);
    const mainNews = news[0];
    const sideNews = news.slice(1, 4);
    const product = this.getProductSlug(category);
    const mainLink = this.appendProductToLink(mainNews.link, product);

    let html = `
            <article class="modern-section-main" style="display: flex; flex-direction: column; background: #fff; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
                <a href="${mainLink}" class="news-image" style="display: block;">
                    <img src="${mainNews.img}" alt="${this.escapeHtml(mainNews.title)}" style="width: 100%; height: 250px; object-fit: cover;">
                    <span class="category-tag" style="position: absolute; top: 10px; left: 10px; background: #d0021b; color: #fff; padding: 5px 10px; font-size: 0.75rem; font-weight: 800; text-transform: uppercase;">${this.escapeHtml(displayName)}</span>
                </a>
                <div class="news-content" style="padding: 20px;">
                    <h3 style="font-family: 'Noto Serif', serif; font-size: 1.4rem; line-height: 1.3; margin: 10px 0;">
                        <a href="${mainLink}" style="color: #1a1a2e; text-decoration: none;">${this.escapeHtml(mainNews.title)}</a>
                    </h3>
                    ${mainNews.excerpt ? `<p style="color: #666; margin: 10px 0;">${this.escapeHtml(mainNews.excerpt.substring(0, 150))}...</p>` : ""}
                    <div class="article-meta" style="font-size: 0.85rem; color: #666; margin-top: 10px;">
                        <span class="author">${this.escapeHtml(mainNews.author || "Correio da Manhã")}</span>
                        <span class="time">${this.escapeHtml(mainNews.time || "Há pouco")}</span>
                    </div>
                </div>
            </article>
            <div class="modern-section-sidebar" style="display: flex; flex-direction: column; gap: 15px;">
        `;

    sideNews.forEach((item) => {
      const itemLink = this.appendProductToLink(item.link, product);
      html += `
                <article class="modern-section-item" style="display: flex; background: #fff; border: 1px solid #eaeaea; border-radius: 8px; overflow: hidden;">
                    <a href="${itemLink}" class="news-image" style="display: block; width: 120px; flex-shrink: 0;">
                        <img src="${item.img}" alt="${this.escapeHtml(item.title)}" style="width: 100%; height: 80px; object-fit: cover;">
                    </a>
                    <div class="news-content" style="padding: 10px; flex: 1;">
                        <h4 style="font-family: 'Noto Serif', serif; font-size: 0.95rem; line-height: 1.3; margin: 0;">
                            <a href="${itemLink}" style="color: #1a1a2e; text-decoration: none;">${this.escapeHtml(item.title)}</a>
                        </h4>
                        <span class="time" style="font-size: 0.75rem; color: #999;">${this.escapeHtml(item.time || "Há pouco")}</span>
                    </div>
                </article>
            `;
    });

    html += "</div>";
    container.innerHTML = html;
  },

  /**
   * Render regional grid (4 cards per row)
   */
  renderRegionalGrid(containerId, regionKey) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`Container ${containerId} not found`);
      return;
    }

    const news = portalMockData[regionKey];
    if (!news || news.length === 0) {
      console.warn(`No data found for region: ${regionKey}`);
      return;
    }

    let html = "";
    const product = this.getProductSlug(regionKey);
    news.forEach((item) => {
      const tag = item.tag || item.category || "Notícias";
      const title = item.title;
      const imageUrl = item.img || item.image;
      const itemLink = this.appendProductToLink(item.link, product);

      html += `
                <a href="${itemLink}" class="regional-card-item">
                    <img src="${imageUrl}" alt="${this.escapeHtml(title)}">
                    <div class="regional-card-content">
                        <span class="regional-tag">${this.escapeHtml(tag)}</span>
                        <h3>${this.escapeHtml(title)}</h3>
                    </div>
                </a>
            `;
    });

    container.innerHTML = html;
  },

  /**
   * Render opinion articles
   */
  renderOpinion(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
      console.warn(`Container ${containerId} not found`);
      return;
    }

    const opinions = portalMockData.opiniao;
    if (!opinions || opinions.length === 0) {
      console.warn("No opinion data found");
      return;
    }

    let html = "";
    opinions.forEach((item) => {
      html += `
                <article class="opinion-article" style="background: #fff; border: 1px solid #eaeaea; border-radius: 8px; padding: 20px; margin-bottom: 15px;">
                    <div class="opinion-author" style="display: flex; align-items: center; margin-bottom: 15px;">
                        <div style="width: 50px; height: 50px; border-radius: 50%; background: #1a3a5c; color: #fff; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 1.2rem;">
                            ${item.author ? item.author.charAt(0).toUpperCase() : "A"}
                        </div>
                        <div style="margin-left: 15px;">
                            <div class="author-name" style="font-weight: bold; color: #1a1a2e;">${this.escapeHtml(item.author || "Anônimo")}</div>
                            <div class="author-role" style="font-size: 0.85rem; color: #666;">${this.escapeHtml(item.role || "Colunista")}</div>
                        </div>
                    </div>
                    <h3 style="font-family: 'Noto Serif', serif; font-size: 1.2rem; margin-bottom: 10px;">
                        <a href="${item.link}" style="color: #1a1a2e; text-decoration: none;">${this.escapeHtml(item.title)}</a>
                    </h3>
                    <p style="color: #666; line-height: 1.5;">${this.escapeHtml(item.excerpt)}</p>
                    <span class="time" style="font-size: 0.85rem; color: #999; margin-top: 10px; display: block;">${this.escapeHtml(item.time)}</span>
                </article>
            `;
    });

    container.innerHTML = html;
  },

  /**
   * Auto-detect page type and load appropriate data
   */
  autoLoad() {
    const path = window.location.pathname;
    const filename = path.split("/").pop() || "index.html";

    // Section pages
    const sections = [
      "politica",
      "economia",
      "cultura",
      "justica",
      "esportes",
      "brasil",
      "mundo",
    ];
    for (const section of sections) {
      if (filename.includes(section)) {
        this.loadSectionPage(section);
        return;
      }
    }

    // Opinion page
    if (filename.includes("opiniao")) {
      this.loadOpinionPage();
      return;
    }

    // Regional pages
    const regionals = [
      "correio-nacional",
      "correio-sp",
      "correio-df",
      "correio-sulfluminense",
      "correio-petropolitano",
      "correio-campinas",
      "jornal-barra",
      "jornal-turismo",
      "jornal-servidor",
    ];
    for (const regional of regionals) {
      if (filename.includes(regional)) {
        this.loadRegionalPage(regional);
        return;
      }
    }

    // Homepage - load regional grids
    if (filename === "index.html" || filename === "") {
      console.log("DataLoader: Homepage detected, loading regional grids");
      this.loadHomepageRegionals();
      return;
    }

    console.log("DataLoader: No specific page handler found for", filename);
  },

  /**
   * Load section page data
   */
  loadSectionPage(section) {
    console.log(`DataLoader: Loading section page: ${section}`);

    // Main grid
    const mainGrid = document.getElementById(`${section}-grid`);
    if (mainGrid) {
      this.renderSection(
        `${section}-grid`,
        section,
        this.formatCategoryName(section),
        null,
        false,
        6,
        null,
      );
      this.initLoadMore(mainGrid);
    }

    // Modern section (if exists)
    const modernSection = document.getElementById(`${section}-modern`);
    if (modernSection) {
      this.renderModernSection(
        `${section}-modern`,
        section,
        this.formatCategoryName(section),
      );
    }
  },

  /**
   * Load opinion page data
   */
  loadOpinionPage() {
    console.log("DataLoader: Loading opinion page");

    const container = document.getElementById("opiniao-grid");
    if (container) {
      this.renderOpinion("opiniao-grid");
    }
  },

  /**
   * Load regional page data
   */
  loadRegionalPage(pageName) {
    console.log(`DataLoader: Loading regional page: ${pageName}`);

    // Map page names to data keys
    const regionMap = {
      "correio-nacional": "nacional",
      "correio-sp": "sao-paulo",
      "correio-df": "distrito-federal",
      "correio-sulfluminense": "sul-fluminense",
      "correio-petropolitano": "petropolis",
      "correio-campinas": "campinas",
      "jornal-barra": "jornal-da-barra",
      "jornal-turismo": "jornal-turismo",
      "jornal-servidor": "servidor",
    };

    const regionKey = regionMap[pageName] || pageName;

    // Try main grid first
    const mainGrid =
      document.getElementById(`${pageName}-grid`) ||
      document.getElementById("regional-grid");
    if (mainGrid) {
      this.renderRegionalGrid(mainGrid.id, regionKey);
    }

    // Try modern section
    const modernSection =
      document.getElementById(`${pageName}-modern`) ||
      document.getElementById("regional-modern");
    if (modernSection) {
      this.renderModernSection(modernSection.id, regionKey);
    }
  },

  /**
   * Load homepage regional grids
   */
  loadHomepageRegionals() {
    const homepageGrids = {
      "politica-grid": "politica",
      "economia-grid": "economia",
      "justica-grid": "justica",
      "esportes-grid": "esportes",
      "rio-de-janeiro-grid": "nacional",
      "sao-paulo-grid": "sao-paulo",
      "campinas-grid": "campinas",
      "distrito-federal-grid": "distrito-federal",
      "petropolitano-grid": "petropolis",
      "sul-fluminense-grid": "sul-fluminense",
      "jornal-barra-grid": "jornal-da-barra",
      "jornal-turismo-grid": "jornal-turismo",
      "mundo-grid": "mundo",
    };

    console.log("DataLoader: Loading homepage editorial and regional grids...");

    for (const [gridId, dataKey] of Object.entries(homepageGrids)) {
      const container = document.getElementById(gridId);
      if (container) {
        console.log(
          `DataLoader: Loading grid ${gridId} with data key ${dataKey}`,
        );
        this.renderSection(
          gridId,
          dataKey,
          null,
          4,
          true,
          null,
          this.getProductSlug(dataKey),
        );
      } else {
        console.warn(`DataLoader: Container ${gridId} not found`);
      }
    }
  },

  /**
   * Format category name for display
   */
  formatCategoryName(category) {
    const names = {
      politica: "Política",
      economia: "Economia",
      cultura: "Cultura",
      justica: "Justiça",
      esportes: "Esportes",
      brasil: "Brasil",
      mundo: "Mundo",
      opiniao: "Opinião",
    };
    return (
      names[category] || category.charAt(0).toUpperCase() + category.slice(1)
    );
  },

  /**
   * Escape HTML to prevent XSS
   */
  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  },

  getProductSlug(key) {
    const productMap = {
      nacional: "nacional",
      "sao-paulo": "sp",
      "distrito-federal": "df",
      "sul-fluminense": "sulfluminense",
      petropolis: "petropolis",
      campinas: "campinas",
      "jornal-da-barra": "barra",
      "jornal-turismo": "turismo",
      servidor: "servidor",
    };

    return productMap[key] || null;
  },

  appendProductToLink(link, product) {
    if (!product || !link || /^https?:\/\//i.test(link) || link.startsWith("#")) {
      return link;
    }

    const [base, hash = ""] = link.split("#");
    const separator = base.includes("?") ? "&" : "?";
    const linkedBase = base.includes("product=")
      ? base
      : `${base}${separator}product=${encodeURIComponent(product)}`;

    return hash ? `${linkedBase}#${hash}` : linkedBase;
  },

  initLoadMore(container) {
    const loadMoreBtn = document.getElementById("load-more-btn");
    const loadingSpinner = document.getElementById("loading-spinner");
    if (!container || !loadMoreBtn) return;

    const cardsPerLoad = 3;
    const getHiddenCards = () => container.querySelectorAll(".news-card.hidden");

    const updateButtonState = () => {
      if (getHiddenCards().length === 0) {
        loadMoreBtn.textContent = "Não há mais notícias";
        loadMoreBtn.disabled = true;
      }
    };

    updateButtonState();

    loadMoreBtn.addEventListener("click", () => {
      if (loadingSpinner) loadingSpinner.style.display = "block";
      loadMoreBtn.disabled = true;

      window.setTimeout(() => {
        const hiddenCards = Array.from(getHiddenCards()).slice(0, cardsPerLoad);
        hiddenCards.forEach((card) => card.classList.remove("hidden"));

        if (loadingSpinner) loadingSpinner.style.display = "none";
        loadMoreBtn.disabled = false;
        updateButtonState();
      }, 500);
    });
  },
};

// Auto-initialize when DOM is ready
if (typeof portalMockData !== "undefined") {
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => DataLoader.autoLoad());
  } else {
    DataLoader.autoLoad();
  }
} else {
  console.error(
    "DataLoader: portalMockData not found. Make sure mock-data.js is loaded before data-loader.js",
  );
}
