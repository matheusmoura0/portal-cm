/**
 * Dynamic column page renderer
 */

const ColumnPage = {
  initialized: false,

  init() {
    if (this.initialized) return;

    const pageRoot = document.getElementById("column-page");
    if (!pageRoot || typeof portalMockData === "undefined") return;

    const column = this.getActiveColumn();
    if (!column) return;

    this.renderPage(column);
    this.bindLoadMore();
    this.initialized = true;
  },

  getActiveColumn() {
    const params = new URLSearchParams(window.location.search);
    const requestedSlug = params.get("slug");
    const fallbackColumn = Array.isArray(portalMockData.colunas)
      ? portalMockData.colunas[0]
      : null;

    if (!requestedSlug) return fallbackColumn;

    return portalMockData.colunasBySlug?.[requestedSlug] || fallbackColumn;
  },

  renderPage(column) {
    this.updateMetadata(column);
    this.renderPageHeader(column);
    this.renderHighlights(column);
    this.renderArticles(column);
  },

  updateMetadata(column) {
    document.title = `${column.label} | CM`;

    const description = document.querySelector('meta[name="description"]');
    if (description) {
      description.setAttribute(
        "content",
        `${column.label} - ${column.description}`,
      );
    }
  },

  renderPageHeader(column) {
    this.setText("column-page-title", column.label);
    this.setText("column-page-description", column.description);
  },

  renderHighlights(column) {
    const featuredContainer = document.getElementById("column-featured-highlight");
    const secondaryContainer = document.getElementById(
      "column-secondary-highlights",
    );
    if (!featuredContainer || !secondaryContainer) return;

    const [featured, ...secondaryItems] = column.highlights || [];

    if (featured) {
      featuredContainer.innerHTML = `
        <div class="opinion-featured-card">
          <div class="opinion-author-row">
            ${this.renderAvatar(
              featured,
              "avatar-fallback avatar-fallback-lg",
              "opinion-author-avatar-lg",
            )}
            <div>
              <h4 class="opinion-author-name-inverse">${this.escapeHtml(featured.author || "Equipe CM")}</h4>
              <span class="opinion-author-role-inverse">${this.escapeHtml(featured.role || "Colunista")}</span>
            </div>
          </div>
          <a href="${this.escapeHtml(this.sanitizeUrl(featured.link, "noticia.html"))}" class="opinion-link-reset">
            <h3 class="opinion-featured-title">${this.escapeHtml(featured.title || "Sem título")}</h3>
          </a>
          <p class="opinion-featured-excerpt">${this.escapeHtml(this.stripHtml(featured.excerpt || ""))}</p>
        </div>
      `;
    }

    secondaryContainer.innerHTML = secondaryItems
      .map(
        (item) => `
          <div class="opinion-secondary-card">
            <div class="opinion-author-row">
              ${this.renderAvatar(
                item,
                "avatar-fallback avatar-fallback-sm",
                "opinion-author-avatar-sm",
              )}
              <div>
                <h4 class="opinion-author-name">${this.escapeHtml(item.author || "Equipe CM")}</h4>
                <span class="opinion-column-role">${this.escapeHtml(item.role || "Colunista")}</span>
              </div>
            </div>
            <a href="${this.escapeHtml(this.sanitizeUrl(item.link, "noticia.html"))}" class="opinion-link-reset">
              <h3 class="opinion-secondary-title">${this.escapeHtml(item.title || "Sem título")}</h3>
            </a>
          </div>
        `,
      )
      .join("");
  },

  renderArticles(column) {
    const grid = document.getElementById("colunas-grid");
    if (!grid) return;

    const items = Array.isArray(column.articles) ? column.articles : [];
    grid.innerHTML = items
      .map((item, index) => {
        const hiddenClass = index >= 6 ? " hidden" : "";
        return `
          <article class="opinion-article${hiddenClass}">
            <div class="opinion-author">
              ${this.renderAvatar(
                item,
                "avatar-fallback avatar-fallback-card",
              )}
              <div class="author-info">
                <div class="author-name">${this.escapeHtml(item.author || "Equipe CM")}</div>
                <div class="author-role">${this.escapeHtml(item.role || "Colunista")}</div>
              </div>
            </div>
            <h3 class="opinion-title">
              <a href="${this.escapeHtml(this.sanitizeUrl(item.link, "noticia.html"))}" class="link-reset-inherit">${this.escapeHtml(item.title || "Sem título")}</a>
            </h3>
            <p class="article-excerpt">${this.escapeHtml(this.stripHtml(item.excerpt || ""))}</p>
            <span class="article-time">${this.escapeHtml(item.time || "Há pouco")}</span>
          </article>
        `;
      })
      .join("");
  },

  bindLoadMore() {
    const loadMoreBtn = document.getElementById("load-more-btn");
    const loadingSpinner = document.getElementById("loading-spinner");
    const grid = document.getElementById("colunas-grid");
    if (!loadMoreBtn || !grid) return;

    const getHiddenCards = () => grid.querySelectorAll(".opinion-article.hidden");
    const updateButtonState = () => {
      if (getHiddenCards().length === 0) {
        loadMoreBtn.textContent = "Não há mais colunas";
        loadMoreBtn.disabled = true;
      }
    };

    updateButtonState();

    loadMoreBtn.addEventListener("click", () => {
      if (loadingSpinner) loadingSpinner.style.display = "block";
      loadMoreBtn.disabled = true;

      window.setTimeout(() => {
        const hiddenCards = Array.from(getHiddenCards()).slice(0, 3);
        hiddenCards.forEach((card) => card.classList.remove("hidden"));

        if (loadingSpinner) loadingSpinner.style.display = "none";
        loadMoreBtn.disabled = false;
        updateButtonState();
      }, 500);
    });
  },

  renderAvatar(item, fallbackClasses, imageClass = "") {
    const image = item.avatarImage || "";
    const author = item.author || item.title || "CM";

    if (image) {
      return `<img src="${this.escapeHtml(this.sanitizeUrl(image, ""))}" alt="${this.escapeHtml(author)}" class="${imageClass}">`;
    }

    return `<div class="${fallbackClasses}">${this.escapeHtml(this.getInitials(author))}</div>`;
  },

  getInitials(text) {
    const parts = String(text || "CM")
      .split(" ")
      .filter(Boolean)
      .slice(0, 2);

    return parts.map((part) => part.charAt(0).toUpperCase()).join("") || "CM";
  },

  setText(id, value) {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  },

  escapeHtml(text) {
    const div = document.createElement("div");
    div.textContent = String(text ?? "");
    return div.innerHTML;
  },

  stripHtml(text) {
    const div = document.createElement("div");
    div.innerHTML = text || "";
    return div.textContent || div.innerText || "";
  },

  sanitizeUrl(url, fallback = "#") {
    if (!url) return fallback;

    const value = String(url).trim();
    if (!value) return fallback;
    if (/^(javascript|data):/i.test(value)) return fallback;

    return value;
  },
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => ColumnPage.init());
} else {
  ColumnPage.init();
}

window.CMColumnPage = ColumnPage;
