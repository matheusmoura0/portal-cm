/**
 * Product Header Component
 * Product-specific header with dynamic colors for regional pages
 * Newspaper Style Design
 */

const ProductHeader = {
  render() {
    const headerPlaceholder = document.getElementById("product-header");
    if (!headerPlaceholder) return;
    if (document.querySelector(".product-header")) return;

    // Get configuration from data attributes
    const productName =
      headerPlaceholder.dataset.productName || "Correio da Manhã";
    const productShortName = headerPlaceholder.dataset.productShortName || "CM";
    const productColor = headerPlaceholder.dataset.productColor || "#D20A11";
    const productUrl =
      headerPlaceholder.dataset.productUrl ||
      window.location.pathname.split("/").pop();
    const productKey = headerPlaceholder.dataset.productKey || "";
    const editoriaSlug = headerPlaceholder.dataset.editoriaSlug || "";
    const editoriaLabel = headerPlaceholder.dataset.editoriaLabel || "";

    // Create temporary container to parse HTML
    const temp = document.createElement("div");
    temp.innerHTML = this.getTemplate(
      productName,
      productShortName,
      productColor,
      productUrl,
      productKey,
      editoriaSlug,
      editoriaLabel,
    );

    // Move nodes out of the placeholder
    const parent = headerPlaceholder.parentNode;
    while (temp.firstChild) {
      parent.insertBefore(temp.firstChild, headerPlaceholder);
    }

    // Remove the placeholder
    headerPlaceholder.remove();

    // Set CSS variable for product color
    document.documentElement.style.setProperty("--product-color", productColor);

    // Initialize functionality
    this.initProductHeader();
  },

  getEditorialNavHTML(productKey, editoriaSlug) {
    const productConfig =
      window.CorreioEditoria &&
      window.CorreioEditoria.productConfigs &&
      window.CorreioEditoria.productConfigs[productKey];

    if (!productConfig || !Array.isArray(productConfig.editorias)) {
      return "";
    }

    const links = productConfig.editorias
      .map(
        (editoria) => `
          <a
            href="correio-editoria.html?product=${encodeURIComponent(productKey)}&editoria=${encodeURIComponent(editoria.slug)}"
            class="product-editoria-nav-link ${editoria.slug === editoriaSlug ? "is-active" : ""}"
          >
            ${editoria.label}
          </a>
        `,
      )
      .join("");

    return `
      <nav class="product-editoria-nav" aria-label="Editorias do produto">
        <div class="product-editoria-nav-container">
          ${links}
        </div>
      </nav>
    `;
  },

  getTemplate(
    productName,
    productShortName,
    productColor,
    productUrl,
    productKey = "",
    editoriaSlug = "",
    editoriaLabel = "",
  ) {
    if (editoriaLabel) {
      const trimmedShortName = String(productShortName || "").trim();
      const logoMark =
        trimmedShortName && trimmedShortName.length <= 4
          ? `<span class="product-logo-mark">${trimmedShortName}</span>`
          : "";

      return `
        <header class="product-header product-header-editoria" style="--product-color: ${productColor};">
          <div class="product-header-mainbar">
            <div class="product-header-container product-header-container-editoria">
              <div class="product-header-left">
                <button class="product-menu-btn product-menu-btn-editoria" id="product-menu-btn" aria-label="Menu">
                  <i class="fas fa-bars"></i>
                  <span class="product-menu-label">Menu</span>
                </button>

                <div class="product-header-context">
                  <a href="${productUrl}" class="product-logo product-logo-editoria" style="--product-color: ${productColor};">
                    ${logoMark}
                    <span class="product-logo-name">${productName}</span>
                  </a>
                  <span class="product-header-divider" aria-hidden="true"></span>
                  <span class="product-header-editoria-name">${editoriaLabel}</span>
                </div>
              </div>

              <div class="product-header-actions">
                <button class="product-search-btn product-search-btn-editoria" id="product-search-btn" aria-label="Buscar">
                  <i class="fas fa-search"></i>
                  <span class="product-search-label">Buscar</span>
                </button>
              </div>
            </div>
          </div>

          ${this.getEditorialNavHTML(productKey, editoriaSlug)}
        </header>
      `;
    }

    return `
      <header class="product-header" style="--product-color: ${productColor};">
        <div class="product-header-container">
          <button class="product-menu-btn" id="product-menu-btn" aria-label="Menu">
            <i class="fas fa-bars"></i>
          </button>

          <a href="${productUrl}" class="product-logo" style="--product-color: ${productColor};">
            ${productName}
          </a>

          <button class="product-search-btn" id="product-search-btn" aria-label="Buscar">
            <i class="fas fa-search"></i>
          </button>
        </div>
      </header>
    `;
  },

  initProductHeader() {
    const menuBtn = document.getElementById("product-menu-btn");
    const searchBtn = document.getElementById("product-search-btn");

    if (menuBtn) {
      menuBtn.addEventListener("click", () => {
        // Dispatch custom event for mobile menu
        window.dispatchEvent(new CustomEvent("product-menu-toggle"));
        // Also toggle active class for visual feedback
        menuBtn.classList.toggle("active");
      });
    }

    if (searchBtn) {
      searchBtn.addEventListener("click", () => {
        // Dispatch custom event for search
        window.dispatchEvent(new CustomEvent("product-search-toggle"));
        // Focus search input if it exists
        const searchInput = document.getElementById("search-input");
        if (searchInput) {
          searchInput.focus();
        }
      });
    }
  },
};

window.ProductHeader = ProductHeader;
