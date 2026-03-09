/**
 * Mobile Menu Component
 * Standardized overlay for mobile navigation across all portal products
 */

const MobileMenu = {
  render() {
    // Prevent double rendering
    if (document.getElementById("mobile-menu-overlay")) return;

    const overlay = document.createElement("div");
    overlay.id = "mobile-menu-overlay";
    overlay.className = "mobile-menu-overlay";
    overlay.innerHTML = `
      <div class="mobile-menu-drawer">
        <div class="mobile-menu-header">
          <div class="mobile-logo-brand">
            <span class="logo-cm">CM</span>
            <div class="mobile-logo-text">
              <span class="logo">www.cm.com.br</span>
              <span class="logo-portal">O portal do grupo correio da manhã</span>
            </div>
          </div>
          <button class="mobile-menu-close" id="mobile-menu-close" aria-label="Fechar">
            <i class="fas fa-times"></i>
          </button>
        </div>

        <div class="mobile-menu-search">
          <form class="mobile-search-form" action="index.html">
            <input type="text" placeholder="Buscar no portal..." name="q" id="mobile-search-input">
            <button type="submit"><i class="fas fa-search"></i></button>
          </form>
        </div>

        <nav class="mobile-nav-links">
          <div class="mobile-nav-section">
            <h5 class="mobile-nav-title">Navegação Principal</h5>
            <ul>
              <li><a href="index.html"><i class="fas fa-home"></i> Home Portal</a></li>
              <li><a href="correio-nacional.html">Nacional</a></li>
              <li><a href="correio-sp.html">São Paulo</a></li>
              <li><a href="correio-df.html">Distrito Federal</a></li>
              <li><a href="correio-sulfluminense.html">Sul Fluminense</a></li>
              <li><a href="correio-petropolitano.html">Petropolitano</a></li>
              <li><a href="jornal-servidor.html">Jornal do Servidor</a></li>
              <li><a href="jornal-barra.html">Jornal da Barra</a></li>
            </ul>
          </div>

          <div class="mobile-nav-section">
            <h5 class="mobile-nav-title">Editorias</h5>
            <ul>
              <li><a href="index.html#politica">Política</a></li>
              <li><a href="index.html#economia">Economia</a></li>
              <li><a href="index.html#justica">Justiça</a></li>
              <li><a href="index.html#cultura">Cultura</a></li>
              <li><a href="index.html#esportes">Esportes</a></li>
              <li><a href="index.html#mundo">Mundo</a></li>
            </ul>
          </div>
        </nav>

        <div class="mobile-menu-footer">
          <div class="mobile-socials">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
          </div>
          <p class="mobile-copyright">© 2026 Correio da Manhã</p>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);
    this.init();
  },

  init() {
    const closeBtn = document.getElementById("mobile-menu-close");
    const overlay = document.getElementById("mobile-menu-overlay");
    const searchForm = overlay?.querySelector(".mobile-search-form");

    if (closeBtn && overlay) {
      closeBtn.addEventListener("click", () => this.toggle(false));
      overlay.addEventListener("click", (e) => {
        if (e.target === overlay) this.toggle(false);
      });
    }

    if (searchForm) {
      searchForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const query = document.getElementById("mobile-search-input").value;
        if (query) {
          console.log("Searching for:", query);
          this.toggle(false);
          // Redirect or handle search
        }
      });
    }

    // Handle internal links to close menu
    const links = overlay?.querySelectorAll(".mobile-nav-links a");
    links?.forEach((link) => {
      link.addEventListener("click", () => {
        this.toggle(false);
      });
    });
  },

  toggle(show) {
    const overlay = document.getElementById("mobile-menu-overlay");
    if (!overlay) {
      if (show) {
        this.render();
        // Recurse once after render
        setTimeout(() => this.toggle(true), 10);
      }
      return;
    }

    if (show) {
      overlay.classList.add("active");
      document.body.classList.add("mobile-menu-open");
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      overlay.classList.remove("active");
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";
    }
  },
};

window.CMMobileMenu = MobileMenu;
