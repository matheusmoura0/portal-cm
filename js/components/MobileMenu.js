/**
 * Mobile Menu Component
 * Standardized overlay for mobile navigation across all portal products
 */

const MobileMenu = {
  getColumnsSubmenuHTML() {
    const items = (window.CMColumns && window.CMColumns.getCatalog()) || [];
    return items
      .map(
        (item) => `
          <li><a href="${item.url}">${item.label}</a></li>
        `,
      )
      .join("");
  },

  render() {
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
            <li><a href="index.html#magnavita"><i class="fas fa-pen-nib"></i> MAGNAVITA</a></li>
            <li><a href="index.html#opiniao"><i class="fas fa-comment-alt"></i> Opinião</a></li>
            <li class="mobile-nav-has-submenu mobile-nav-has-split-link">
              <div class="mobile-nav-link-row">
                <a href="index.html#colunas" class="mobile-nav-link-primary">
                  <i class="fas fa-star"></i> Colunas
                </a>
                <button
                  class="mobile-submenu-toggle"
                  aria-expanded="false"
                  aria-haspopup="true"
                  aria-controls="mobile-submenu-colunas"
                  aria-label="Abrir menu de Colunas"
                >
                  <i class="fas fa-chevron-down mobile-submenu-arrow"></i>
                </button>
              </div>
              <ul class="mobile-submenu mobile-submenu-columns" id="mobile-submenu-colunas">
                ${this.getColumnsSubmenuHTML()}
              </ul>
            </li>
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
            <a href="https://www.instagram.com/correiodamanhabr/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
            <a href="https://www.youtube.com/@TVCorreiodaManhã" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><i class="fab fa-youtube"></i></a>
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
        }
      });
    }

    this.initSubmenus();

    const links = overlay?.querySelectorAll(".mobile-nav-main a");
    links?.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        const target = this.resolveInPageTarget(href);

        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: "smooth", block: "start" });
          this.toggle(false);
        } else if (href) {
          this.toggle(false);
        }
      });
    });
  },

  resolveInPageTarget(href) {
    if (!href) return null;

    let hash = "";
    if (href.startsWith("#")) {
      hash = href;
    } else if (href.includes("#")) {
      const [base, targetHash] = href.split("#");
      const currentPage =
        window.location.pathname.split("/").pop() || "index.html";
      const normalizedBase = base || currentPage;

      if (
        normalizedBase === currentPage ||
        (normalizedBase === "index.html" &&
          (currentPage === "index.html" || currentPage === ""))
      ) {
        hash = `#${targetHash}`;
      }
    }

    if (!hash || hash === "#") return null;
    return document.querySelector(hash);
  },

  initSubmenus() {
    const toggles = document.querySelectorAll(".mobile-submenu-toggle");

    toggles.forEach((toggle) => {
      toggle.addEventListener("click", (e) => {
        e.preventDefault();
        const submenu = toggle.nextElementSibling;
        const arrow = toggle.querySelector(".mobile-submenu-arrow");
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";

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

        toggle.setAttribute("aria-expanded", String(!isExpanded));
        toggle.classList.toggle("active", !isExpanded);
        if (submenu) submenu.classList.toggle("active", !isExpanded);
        if (arrow) arrow.classList.toggle("active", !isExpanded);
      });
    });
  },

  toggle(show) {
    const overlay = document.getElementById("mobile-menu-overlay");
    if (!overlay) {
      if (show) {
        this.render();
        setTimeout(() => this.toggle(true), 10);
      }
      return;
    }

    if (show) {
      overlay.classList.add("active");
      document.body.classList.add("mobile-menu-open");
      document.body.style.overflow = "hidden";
    } else {
      overlay.classList.remove("active");
      document.body.classList.remove("mobile-menu-open");
      document.body.style.overflow = "";

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
