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

    // Create temporary container to parse HTML
    const temp = document.createElement("div");
    temp.innerHTML = this.getTemplate(
      productName,
      productShortName,
      productColor,
      productUrl,
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

  getTemplate(productName, productShortName, productColor, productUrl) {
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
