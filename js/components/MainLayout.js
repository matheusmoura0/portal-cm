/**
 * MainLayout - Global Layout Orchestrator
 * Manages Header, Footer and Back to Top functionality
 */

const MainLayout = {
  initialized: false,

  init() {
    if (this.initialized) return;
    console.log("MainLayout: Inicializando estrutura global...");

    // 1. Render components if they exist on the page
    if (window.CMHeader) window.CMHeader.render();
    if (window.CMFooter) window.CMFooter.render();

    // 2. Ensure Back to Top button exists and is managed
    this.setupBackToTop();

    this.initialized = true;
  },

  setupBackToTop() {
    let btn = document.getElementById("back-to-top");

    // Create button if it doesn't exist
    if (!btn) {
      btn = document.createElement("button");
      btn.id = "back-to-top";
      btn.className = "back-to-top";
      btn.setAttribute("aria-label", "Voltar ao topo");
      btn.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
      `;
      document.body.appendChild(btn);
    }
  },
};

window.CMMainLayout = MainLayout;
