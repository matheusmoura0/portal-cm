/**
 * Correio Product Page
 * Canonical modular product landing page.
 */

const CorreioProductPage = {
  initialized: false,

  init() {
    if (this.initialized) return;

    const pageRoot = document.getElementById("correio-product-page");
    if (!pageRoot || !window.CorreioShell || !window.RegionalNews) return;

    window.CorreioShell.init({
      pageType: "product",
      onProductChange: (state) => {
        window.RegionalNews.render(window.CorreioShell.getRenderKey(state.productKey));
      },
    });

    this.initialized = true;
  },
};

window.CorreioProductPage = CorreioProductPage;
