/**
 * Article Loader - Dynamic Product-Based Article Page
 * Loads articles with product-specific theming and navigation
 */

// Product configuration - maps all products to their properties
const ProductConfig = {
  nacional: {
    name: "Correio da Manhã",
    shortName: "CM",
    color: "#D20A11",
    url: "correio-nacional.html",
    themeClass: "theme-nacional",
  },
  sp: {
    name: "Correio SP",
    shortName: "SP",
    color: "#194466",
    url: "correio-sp.html",
    themeClass: "theme-sp",
  },
  df: {
    name: "Correio DF",
    shortName: "DF",
    color: "#1E73BE",
    url: "correio-df.html",
    themeClass: "theme-df",
  },
  sulfluminense: {
    name: "Correio Sul Fluminense",
    shortName: "Sul Fluminense",
    color: "#003366",
    url: "correio-sulfluminense.html",
    themeClass: "theme-sulfluminense",
  },
  petropolis: {
    name: "Correio Petropolitano",
    shortName: "Petropolitano",
    color: "#D20A11",
    url: "correio-petropolitano.html",
    themeClass: "theme-petropolitano",
  },
  campinas: {
    name: "Correio Campinas",
    shortName: "Campinas",
    color: "#003366",
    url: "correio-campinas.html",
    themeClass: "theme-campinas",
  },
  barra: {
    name: "Jornal da Barra",
    shortName: "Barra",
    color: "#1a1a1a",
    url: "jornal-barra.html",
    themeClass: "theme-barra",
  },
  turismo: {
    name: "Jornal de Turismo",
    shortName: "Turismo",
    color: "#ff6600",
    url: "jornal-turismo.html",
    themeClass: "theme-turismo",
  },
  servidor: {
    name: "Jornal do Servidor",
    shortName: "Servidor",
    color: "#003366",
    url: "jornal-servidor.html",
    themeClass: "theme-servidor",
  },
};

// Default article content (fallback)
const defaultArticle = {
  category: "NOTÍCIAS",
  title: "Lorem ipsum dolor sit amet",
  subtitle:
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  author: "Redação",
  date: "15 de fevereiro de 2026",
  time: "10:00",
  image: "https://placehold.co/1200x600/1a3a5c/ffffff?text=Imagem+de+Destaque",
  content: `
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor.</p>

        <h2>Pellentesque habitant morbi tristique</h2>
        <p>Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>

        <blockquote style="border-left: 4px solid var(--product-color, #D20A11); padding-left: 20px; font-style: italic; margin: 30px 0; color: #555;">
            "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."
        </blockquote>

        <p>Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet.</p>

        <h3>Vivamus hendrerit arcu sed erat molestie</h3>
        <p>Suspendisse potenti. Nunc dictum lobortis enim, et faucibus odio feugiat at. Nulla facilisi. Aenean et egestas ipsum. Fusce nec nunc vitae metus faucibus mattis.</p>
    `,
};

// Article loader
document.addEventListener("DOMContentLoaded", () => {
  // Get URL parameters
  const urlParams = new URLSearchParams(window.location.search);
  const articleId = urlParams.get("id") || "article-001";
  const product = urlParams.get("product") || "nacional"; // Default to nacional

  console.log(
    `Article Loader: Loading article ${articleId} from product ${product}`,
  );

  // Initialize page with product theming
  initializeProductPage(product);

  // Load article content
  loadArticle(articleId, product);
});

/**
 * Initialize page with product-specific theming
 */
function initializeProductPage(product) {
  const productData = ProductConfig[product] || ProductConfig.nacional;

  // Set body class for theming
  document.body.className = `has-regional-headers ${productData.themeClass}`;
  document.body.setAttribute("data-product-loaded", "true");

  // Set CSS variables for product color
  document.documentElement.style.setProperty(
    "--product-color",
    productData.color,
  );
  document.documentElement.style.setProperty(
    "--product-color-dark",
    adjustColor(productData.color, -30),
  );

  // Render Tiny Header
  if (window.TinyHeader) {
    window.TinyHeader.render();
  }

  // Render Product Header with product data
  if (window.ProductHeader) {
    const productHeaderDiv = document.getElementById("product-header");
    if (productHeaderDiv) {
      productHeaderDiv.setAttribute("data-product-name", productData.name);
      productHeaderDiv.setAttribute(
        "data-product-short-name",
        productData.shortName,
      );
      productHeaderDiv.setAttribute("data-product-color", productData.color);
      productHeaderDiv.setAttribute("data-product-url", productData.url);
      window.ProductHeader.render();
    }
  }

  console.log(`Article Loader: Page initialized for ${productData.name}`);
}

/**
 * Load and display article content
 */
function loadArticle(articleId, product) {
  const productData = ProductConfig[product] || ProductConfig.nacional;

  // Try to get article from mock data
  const article = getArticleData(articleId);

  if (!article) {
    showError();
    return;
  }

  // Populate article content
  setElement("article-category", article.category);
  setElement("article-title", article.title);
  setElement("article-subtitle", article.subtitle || "");
  setElement("article-author", article.author);
  setElement("article-date", article.date);
  setElementHTML("article-body", article.content);

  // Set image
  const imgEl = document.getElementById("article-image");
  if (imgEl && article.image) {
    imgEl.src = article.image;
    imgEl.alt = article.title;
  }

  // Update breadcrumb
  updateBreadcrumb(product, article.category);

  // Update page title
  document.title = `${article.title} | ${productData.shortName}`;

  // Show content
  const wrapper = document.getElementById("article-content-wrapper");
  if (wrapper) wrapper.style.display = "block";
}

/**
 * Get article data from mock data or use default
 */
function getArticleData(articleId) {
  // Check if article exists in mock data
  if (
    portalMockData &&
    portalMockData.articles &&
    portalMockData.articles[articleId]
  ) {
    return portalMockData.articles[articleId];
  }

  // Return default article with ID for tracking
  return {
    ...defaultArticle,
    id: articleId,
  };
}

/**
 * Update breadcrumb navigation
 */
function updateBreadcrumb(product, category) {
  const productData = ProductConfig[product] || ProductConfig.nacional;

  // Update product link in breadcrumb
  const breadProduct = document.getElementById("bread-product");
  if (breadProduct) {
    breadProduct.textContent = productData.shortName;
    breadProduct.href = productData.url;
  }

  // Update category
  const breadCategory = document.getElementById("bread-category");
  if (breadCategory) {
    breadCategory.textContent = category || "Notícias";
  }
}

/**
 * Helper: Set element text content
 */
function setElement(id, content) {
  const el = document.getElementById(id);
  if (el) el.textContent = content;
}

/**
 * Helper: Set element HTML content
 */
function setElementHTML(id, content) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = content;
}

/**
 * Helper: Show error message
 */
function showError() {
  const errorEl = document.getElementById("error-message");
  const wrapper = document.getElementById("article-content-wrapper");

  if (errorEl) errorEl.style.display = "block";
  if (wrapper) wrapper.style.display = "none";
}

/**
 * Helper: Adjust color brightness
 */
function adjustColor(color, amount) {
  const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

  let hex = color.replace("#", "");
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  r = clamp(r + amount, 0, 255);
  g = clamp(g + amount, 0, 255);
  b = clamp(b + amount, 0, 255);

  return `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
}
