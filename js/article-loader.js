/**
 * Article Loader - Dynamic Product-Based Article Page
 * Loads articles with product-specific theming and navigation
 */

// Product configuration - maps all products to their properties
const ProductConfig = {
  nacional: {
    name: "Correio da Manhã",
    shortName: "Correio da Manhã",
    color: "#d71e15",
    url: "correio-produto.html?product=nacional",
    themeClass: "theme-nacional",
  },
  sp: {
    name: "Correio da Manhã SP",
    shortName: "Correio SP",
    color: "#194466",
    url: "correio-produto.html?product=sp",
    themeClass: "theme-sp",
  },
  df: {
    name: "Correio da Manhã DF",
    shortName: "Correio DF",
    color: "#1f92c4",
    url: "correio-produto.html?product=df",
    themeClass: "theme-df",
  },
  sulfluminense: {
    name: "Correio Sul Fluminense",
    shortName: "Sul Fluminense",
    color: "#d20a11",
    url: "correio-produto.html?product=sulfluminense",
    themeClass: "theme-sulfluminense",
  },
  petropolis: {
    name: "Correio Petropolitano",
    shortName: "Petropolitano",
    color: "#D20A11",
    url: "correio-produto.html?product=petropolis",
    themeClass: "theme-petropolitano",
  },
  campinas: {
    name: "Correio Campinas",
    shortName: "Campinas",
    color: "#003366",
    url: "correio-produto.html?product=campinas",
    themeClass: "theme-campinas",
  },
  barra: {
    name: "Jornal da Barra",
    shortName: "Barra",
    color: "#1a1a1a",
    url: "correio-produto.html?product=barra",
    themeClass: "theme-barra",
  },
  turismo: {
    name: "Jornal de Turismo",
    shortName: "Turismo",
    color: "#ff6600",
    url: "correio-produto.html?product=turismo",
    themeClass: "theme-turismo",
  },
  servidor: {
    name: "Jornal do Servidor",
    shortName: "Servidor",
    color: "#003366",
    url: "correio-produto.html?product=servidor",
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
  const urlParams = new URLSearchParams(window.location.search);
  const fallbackArticleId = urlParams.get("id") || "article-001";

  if (window.CorreioShell) {
    window.CorreioShell.init({
      pageType: "article",
      onProductChange: (state) => {
        const articleId = state.articleId || fallbackArticleId;
        initializeProductPage(state.productKey);
        loadArticle(articleId, state.productKey);
      },
    });
    return;
  }

  const articleId = fallbackArticleId;
  const product = normalizeProductKey(urlParams.get("product") || "nacional");
  initializeProductPage(product);
  loadArticle(articleId, product);
});

/**
 * Initialize page with product-specific theming
 */
function initializeProductPage(product) {
  const productData = getProductConfig(product);

  // Preserve previously applied body state while switching the product theme.
  Object.values(ProductConfig).forEach(({ themeClass }) => {
    document.body.classList.remove(themeClass);
  });
  document.body.classList.add(
    "has-regional-headers",
    "has-correio-shell",
    productData.themeClass,
  );
  document.body.setAttribute("data-product-loaded", "true");
  document.body.dataset.productKey = normalizeProductKey(product);

  // Set CSS variables for product color
  document.documentElement.style.setProperty(
    "--product-color",
    productData.color,
  );
  document.documentElement.style.setProperty(
    "--product-color-dark",
    adjustColor(productData.color, -30),
  );
}

/**
 * Load and display article content
 */
function loadArticle(articleId, product) {
  const productData = getProductConfig(product);

  // Try to get article from mock data
  const article = getArticleData(articleId, product);

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
function getArticleData(articleId, product) {
  if (!portalMockData) {
    return {
      ...defaultArticle,
      id: articleId,
    };
  }

  const aliasedId = portalMockData.articleAliases?.[articleId] || articleId;

  // Check if article exists in mock data
  if (portalMockData.articles && portalMockData.articles[aliasedId]) {
    const article = portalMockData.articles[aliasedId];
    return {
      ...article,
      product: article.product || product,
    };
  }

  const productDataKey = getProductDataKey(product);
  const productArticles = productDataKey ? portalMockData[productDataKey] : null;

  if (Array.isArray(productArticles)) {
    const index = getLegacyArticleIndex(aliasedId);
    if (index !== null && productArticles[index]) {
      const item = productArticles[index];
      return {
        category: item.category || item.tag || "NOTÍCIAS",
        title: item.title || defaultArticle.title,
        subtitle: item.excerpt || defaultArticle.subtitle,
        author: item.author || defaultArticle.author,
        date: item.date || defaultArticle.date,
        time: item.time || defaultArticle.time,
        image: item.image || item.img || defaultArticle.image,
        content: item.content || defaultArticle.content,
      };
    }
  }

  // Return default article with ID for tracking
  return {
    ...defaultArticle,
    id: articleId,
  };
}

function getLegacyArticleIndex(articleId) {
  if (/^\d+$/.test(articleId)) {
    return Number(articleId) - 1;
  }

  const match = articleId.match(/-(\d+)$/);
  return match ? Number(match[1]) - 1 : null;
}

function getProductDataKey(product) {
  const normalizedProduct = normalizeProductKey(product);
  const productMap = {
    nacional: "nacional",
    sp: "sao-paulo",
    df: "distrito-federal",
    sulfluminense: "sul-fluminense",
    petropolis: "petropolis",
    campinas: "campinas",
    barra: "jornal-da-barra",
    turismo: "jornal-turismo",
    servidor: "servidor",
  };

  return productMap[normalizedProduct] || "nacional";
}

/**
 * Update breadcrumb navigation
 */
function updateBreadcrumb(product, category) {
  const productData = getProductConfig(product);

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

function normalizeProductKey(product) {
  if (window.CorreioShell && typeof window.CorreioShell.normalizeProductKey === "function") {
    return window.CorreioShell.normalizeProductKey(product);
  }

  const fallbackAliases = {
    rio: "nacional",
    rj: "nacional",
    petropolitano: "petropolis",
  };

  return fallbackAliases[product] || product || "nacional";
}

function getProductConfig(product) {
  const normalizedProduct = normalizeProductKey(product);
  const fallbackConfig = ProductConfig[normalizedProduct] || ProductConfig.nacional;

  if (window.CorreioShell && typeof window.CorreioShell.getProductConfig === "function") {
    const shellConfig = window.CorreioShell.getProductConfig(normalizedProduct);
    return {
      name: shellConfig.brandTitle,
      shortName: fallbackConfig.shortName,
      color: shellConfig.brandColor,
      url: window.CorreioShell.getProductPageUrl(normalizedProduct),
      themeClass: shellConfig.themeClass,
    };
  }

  return fallbackConfig;
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
  if (el) el.innerHTML = sanitizeArticleContent(content);
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

function sanitizeArticleContent(content) {
  if (typeof content !== "string") {
    return "";
  }

  const template = document.createElement("template");
  template.innerHTML = content;

  template.content.querySelectorAll("script").forEach((node) => node.remove());

  template.content.querySelectorAll("*").forEach((node) => {
    Array.from(node.attributes).forEach((attribute) => {
      const name = attribute.name.toLowerCase();
      const value = attribute.value.trim();

      if (name.startsWith("on")) {
        node.removeAttribute(attribute.name);
        return;
      }

      if (
        (name === "href" || name === "src") &&
        /^javascript:/i.test(value)
      ) {
        node.removeAttribute(attribute.name);
      }
    });
  });

  return template.innerHTML;
}
