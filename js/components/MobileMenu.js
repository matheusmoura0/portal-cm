/**
 * Mobile Menu Component
 * Standardized overlay for mobile navigation across all portal products
 * Matches desktop header navigation with expandable sub-menus
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
          <ul class="mobile-nav-main">
            <li><a href="opiniao.html"><i class="fas fa-star"></i> Colunas</a></li>
            <li><a href="index.html#politica"><i class="fas fa-landmark"></i> Política</a></li>
            <li><a href="index.html#economia"><i class="fas fa-chart-line"></i> Economia</a></li>
            <li><a href="index.html#justica"><i class="fas fa-balance-scale"></i> Justiça</a></li>
            <li><a href="index.html#cultura"><i class="fas fa-palette"></i> Cultura</a></li>
            <li><a href="index.html#esportes"><i class="fas fa-futbol"></i> Esportes</a></li>
            <li><a href="index.html#mundo"><i class="fas fa-globe"></i> Mundo</a></li>
            <li><a href="index.html#tv"><i class="fab fa-youtube"></i> CM News TV</a></li>
            <li class="mobile-nav-has-submenu">
              <button class="mobile-submenu-toggle" aria-expanded="false" aria-haspopup="true">
                <span><i class="fas fa-newspaper"></i> Nossos Jornais</span>
                <i class="fas fa-chevron-down mobile-submenu-arrow"></i>
              </button>
              <ul class="mobile-submenu" id="mobile-submenu-jornais">
                <li><a href="index.html#rio-de-janeiro">Correio da Manhã RJ</a></li>
                <li><a href="index.html#sao-paulo">Correio da Manhã SP</a></li>
                <li><a href="index.html#campinas">Correio da Manhã Campinas</a></li>
                <li><a href="index.html#distrito-federal">Correio da Manhã DF</a></li>
                <li><a href="index.html#petropolitano">Correio Petropolitano</a></li>
                <li><a href="index.html#sul-fluminense">Correio Sul Fluminense</a></li>
                <li><a href="index.html#jornal-barra">Jornal da Barra</a></li>
                <li><a href="index.html#jornal-turismo">Jornal de Turismo</a></li>
                <li><a href="index.html#jornal-servidor">Jornal do Servidor</a></li>
              </ul>
            </li>
          </ul>
        </nav>

        <div class="mobile-menu-footer">
          <div class="mobile-socials">
            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://www.instagram.com/correiodamanhabr/" target="_blank" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/@TVCorreiodaManhã" target="_blank" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
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

    // Initialize sub-menu toggles
    this.initSubmenus();

    // Handle main navigation links to close menu
    const mainLinks = overlay?.querySelectorAll(".mobile-nav-main > li > a");
    mainLinks?.forEach((link) => {
      link.addEventListener("click", (e) => {
        // Don't close if it's a hash link that stays on same page
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
          }
          this.toggle(false);
        } else if (href && !href.includes("index.html#")) {
          // Regular link - let it navigate naturally
          this.toggle(false);
        }
      });
    });

    // Handle sub-menu links
    const subLinks = overlay?.querySelectorAll(".mobile-submenu a");
    subLinks?.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          // If on index.html, scroll to section
          if (
            window.location.pathname.endsWith("index.html") ||
            window.location.pathname.endsWith("/")
          ) {
            const target = document.querySelector(href);
            if (target) {
              target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
          }
          this.toggle(false);
        } else {
          // Regular link
          this.toggle(false);
        }
      });
    });
  },

  initSubmenus() {
    const toggles = document.querySelectorAll(".mobile-submenu-toggle");

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const submenu = toggle.nextElementSibling;
        const arrow = toggle.querySelector(".mobile-submenu-arrow");
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";

        // Close all other submenus
        toggles.forEach((otherToggle) => {
          if (otherToggle !== toggle) {
            otherToggle.setAttribute("aria-expanded", "false");
            otherToggle.classList.remove("active");
            const otherSubmenu = otherToggle.nextElementSibling;
            const otherArrow = otherToggle.querySelector(
              ".mobile-submenu-arrow",
            );
            if (otherSubmenu) otherSubmenu.classList.remove("active");
            if (otherArrow) otherArrow.classList.remove("active");
          }
        });

        // Toggle current submenu
        toggle.setAttribute("aria-expanded", !isExpanded);
        toggle.classList.toggle("active");
        if (submenu) submenu.classList.toggle("active");
        if (arrow) arrow.classList.toggle("active");
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

      // Close all submenus when closing main menu
      const toggles = document.querySelectorAll(".mobile-submenu-toggle");
      toggles.forEach((toggle) => {
        toggle.setAttribute("aria-expanded", "false");
        toggle.classList.remove("active");
        const submenu = toggle.nextElementSibling;
        const arrow = toggle.querySelector(".mobile-submenu-arrow");
        if (submenu) submenu.classList.remove("active");
        if (arrow) arrow.classList.remove("active");
      });
    }
  },
};

window.CMMobileMenu = MobileMenu;
