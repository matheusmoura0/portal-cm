/**
 * News Page Controller
 * Handles filtering, sorting and list/grid views for noticias.html
 */

const NewsPage = {
  initialDisplayCount: 12,

  init() {
    this.newsContainer = document.getElementById("news-container");
    if (!this.newsContainer) return;

    this.categoryPills = document.querySelectorAll(".category-pill");
    this.sortSelects = document.querySelectorAll(".sort-select");
    this.gridViewBtn = document.getElementById("grid-view-btn");
    this.listViewBtn = document.getElementById("list-view-btn");
    this.loadMoreBtn = document.getElementById("load-more-btn");
    this.resultsCount = document.getElementById("results-count");
    this.totalCount = document.getElementById("total-count");

    this.currentCategory = "all";
    this.currentSort = "recent";
    this.currentView = "grid";
    this.displayedCount = this.initialDisplayCount;
    this.newsData = Array.from(this.newsContainer.querySelectorAll(".news-card"));

    this.bindEvents();
    this.filterAndRenderNews();
  },

  bindEvents() {
    this.categoryPills.forEach((pill) => {
      pill.addEventListener("click", () => {
        this.categoryPills.forEach((item) => item.classList.remove("active"));
        pill.classList.add("active");
        this.currentCategory = pill.dataset.category;
        this.displayedCount = this.initialDisplayCount;
        this.filterAndRenderNews();
      });
    });

    this.sortSelects.forEach((select) => {
      select.addEventListener("change", (event) => {
        this.currentSort = event.target.value;
        this.sortSelects.forEach((item) => {
          item.value = this.currentSort;
        });
        this.filterAndRenderNews();
      });
    });

    if (this.gridViewBtn && this.listViewBtn) {
      this.gridViewBtn.addEventListener("click", () => {
        this.currentView = "grid";
        this.gridViewBtn.classList.add("active");
        this.listViewBtn.classList.remove("active");
        this.renderNews(this.getVisibleNews());
      });

      this.listViewBtn.addEventListener("click", () => {
        this.currentView = "list";
        this.listViewBtn.classList.add("active");
        this.gridViewBtn.classList.remove("active");
        this.renderNews(this.getVisibleNews());
      });
    }

    if (this.loadMoreBtn) {
      this.loadMoreBtn.addEventListener("click", () => {
        this.displayedCount += this.initialDisplayCount;
        this.filterAndRenderNews();
      });
    }
  },

  filterAndRenderNews() {
    const filteredNews =
      this.currentCategory === "all"
        ? this.newsData
        : this.newsData.filter(
            (newsCard) => newsCard.dataset.category === this.currentCategory,
          );

    const sortedNews = this.sortArray([...filteredNews]);
    const visibleNews = sortedNews.slice(0, this.displayedCount);

    if (this.resultsCount) {
      this.resultsCount.textContent = String(visibleNews.length);
    }

    if (this.totalCount) {
      this.totalCount.textContent = String(filteredNews.length);
    }

    if (this.loadMoreBtn) {
      this.loadMoreBtn.style.display =
        visibleNews.length < filteredNews.length ? "inline-block" : "none";
    }

    this.renderNews(visibleNews);
  },

  getVisibleNews() {
    const filteredNews =
      this.currentCategory === "all"
        ? this.newsData
        : this.newsData.filter(
            (newsCard) => newsCard.dataset.category === this.currentCategory,
          );

    return this.sortArray([...filteredNews]).slice(0, this.displayedCount);
  },

  sortArray(items) {
    switch (this.currentSort) {
      case "oldest":
        return items.sort(
          (a, b) =>
            Number(b.dataset.order || 0) - Number(a.dataset.order || 0),
        );
      case "popular":
        return items.sort((a, b) => {
          const titleA =
            a.querySelector(".news-card-title")?.textContent.trim() || "";
          const titleB =
            b.querySelector(".news-card-title")?.textContent.trim() || "";
          return titleA.localeCompare(titleB, "pt-BR");
        });
      case "recent":
      default:
        return items.sort(
          (a, b) =>
            Number(a.dataset.order || 0) - Number(b.dataset.order || 0),
        );
    }
  },

  renderNews(items) {
    this.newsContainer.innerHTML = "";
    this.newsContainer.className =
      this.currentView === "grid" ? "news-grid-view" : "news-list-view";

    if (items.length === 0) {
      this.newsContainer.innerHTML = `
        <div class="no-results" style="grid-column: 1 / -1;">
          <svg class="no-results-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.35-4.35"></path>
          </svg>
          <h3 class="no-results-title">Nenhuma notícia encontrada</h3>
          <p class="no-results-text">Tente selecionar outra categoria ou alterar os filtros.</p>
        </div>
      `;
      return;
    }

    items.forEach((newsCard) => {
      const card = newsCard.cloneNode(true);
      this.newsContainer.appendChild(
        this.currentView === "list" ? this.convertToListItem(card) : card,
      );
    });
  },

  convertToListItem(newsCard) {
    const imageLink = newsCard.querySelector(".news-card-image");
    const image = imageLink?.querySelector("img");
    const category = newsCard.querySelector(".news-card-category");
    const titleLink = newsCard.querySelector(".news-card-title a");
    const excerpt = newsCard.querySelector(".news-card-excerpt");
    const author = newsCard.querySelector(".news-card-author");
    const time = newsCard.querySelector(".time");
    const href = titleLink?.getAttribute("href") || imageLink?.getAttribute("href") || "noticia.html";

    const item = document.createElement("article");
    item.className = "news-list-item";
    item.dataset.category = newsCard.dataset.category || "";
    item.dataset.order = newsCard.dataset.order || "0";

    item.innerHTML = `
      <a href="${href}" class="news-list-item-image">
        <img src="${image?.src || "https://placehold.co/600x400/eeeeee/999999?text=Sem+Imagem"}" alt="${image?.alt || ""}">
      </a>
      <div class="news-list-item-content">
        <div>
          <div class="news-list-item-header">
            <span class="news-list-item-category ${category?.className || ""}">${category?.textContent || ""}</span>
          </div>
          <h3 class="news-list-item-title">
            <a href="${href}">${titleLink?.textContent || ""}</a>
          </h3>
          <p class="news-list-item-excerpt">${excerpt?.textContent || ""}</p>
        </div>
        <div class="news-list-item-meta">
          <span class="news-card-author">${author?.textContent || ""}</span>
          <span class="time">${time?.textContent || ""}</span>
        </div>
      </div>
    `;

    return item;
  },
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => NewsPage.init());
} else {
  NewsPage.init();
}
