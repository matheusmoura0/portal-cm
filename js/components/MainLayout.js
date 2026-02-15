/**
 * MainLayout - Global Layout Orchestrator
 * Manages Header, Footer and Back to Top functionality
 */

const MainLayout = {
  init() {
    console.log("MainLayout: Inicializando estrutura global...");
    
    // 1. Render components if they exist on the page
    if (window.CMHeader) window.CMHeader.render();
    if (window.CMFooter) window.CMFooter.render();
    
    // 2. Ensure Back to Top button exists and is managed
    this.setupBackToTop();
    
    // 3. Initialize common UI features
    if (window.CM && window.CM.MobileMenu) window.CM.MobileMenu.init();
    if (window.CM && window.CM.Search) window.CM.Search.init();
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

    // Scroll Logic
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        btn.classList.add("visible");
      } else {
        btn.classList.remove("visible");
      }
    });

    btn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
};

// Auto-init on DOMContentLoaded
document.addEventListener("DOMContentLoaded", () => {
  MainLayout.init();
});

window.CMMainLayout = MainLayout;
