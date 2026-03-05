/**
 * Tiny Header Component
 * Enhanced header for regional pages with site navigation dropdown
 */

const TinyHeader = {
  sites: [
    { name: "Nacional", url: "correio-nacional.html", id: "nacional" },
    { name: "São Paulo", url: "correio-sp.html", id: "sp" },
    { name: "Distrito Federal", url: "correio-df.html", id: "df" },
    {
      name: "Sul Fluminense",
      url: "correio-sulfluminense.html",
      id: "sulfluminense",
    },
    {
      name: "Petropolitano",
      url: "correio-petropolitano.html",
      id: "petropolitano",
    },
    { name: "Jornal do Servidor", url: "jornal-servidor.html", id: "servidor" },
    { name: "Jornal da Barra", url: "jornal-barra.html", id: "barra" },
  ],

  getCurrentSite() {
    const path = window.location.pathname;
    const filename = path.split("/").pop() || "index.html";

    for (const site of this.sites) {
      if (filename === site.url) {
        return site;
      }
    }
    return null;
  },

  render() {
    // Check if tiny header already exists
    if (document.querySelector(".tiny-header")) {
      return;
    }

    const currentSite = this.getCurrentSite();
    const currentPage =
      window.location.pathname.split("/").pop() || "index.html";

    // Create tiny header element
    const tinyHeader = document.createElement("nav");
    tinyHeader.className = "tiny-header";
    tinyHeader.innerHTML = `
      <div class="tiny-header-container">
        <button class="tiny-menu-toggle" id="tiny-menu-toggle" aria-label="Menu">
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div class="tiny-dropdown-wrapper">
          <button class="tiny-dropdown-btn" id="tiny-dropdown-btn" aria-label="Todos os Sites">
            <span class="tiny-dropdown-text">Todos os Sites</span>
            <i class="fas fa-chevron-down tiny-dropdown-icon"></i>
          </button>
          <div class="tiny-dropdown-menu" id="tiny-dropdown-menu">
            ${this.sites
              .map(
                (site) => `
              <a href="${site.url}" class="tiny-dropdown-item ${currentPage === site.url ? "active" : ""}" data-site="${site.id}">
                <i class="fas fa-${currentPage === site.url ? "check-circle" : "circle"} tiny-dropdown-check"></i>
                <span>${site.name}</span>
              </a>
            `,
              )
              .join("")}
            <div class="tiny-dropdown-divider"></div>
            <a href="index.html" class="tiny-dropdown-item tiny-dropdown-back">
              <i class="fas fa-arrow-left tiny-dropdown-check"></i>
              <span>Voltar ao Portal</span>
            </a>
          </div>
        </div>

        <a href="index.html" class="tiny-logo-link" aria-label="Voltar ao Portal CM">
          <span class="tiny-logo-cm">CM</span>
          <span class="tiny-logo-text">PORTAL</span>
        </a>
      </div>
    `;

    // Insert at the very top of body
    document.body.insertBefore(tinyHeader, document.body.firstChild);

    // Initialize functionality
    this.initDropdown();
    this.initMenuToggle();
  },

  initDropdown() {
    const dropdownBtn = document.getElementById("tiny-dropdown-btn");
    const dropdownMenu = document.getElementById("tiny-dropdown-menu");

    if (!dropdownBtn || !dropdownMenu) return;

    // Toggle dropdown on click - REMOVED hover behavior
    dropdownBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = dropdownMenu.classList.contains("show");

      // Close any other open dropdowns first
      dropdownMenu.classList.remove("show");
      dropdownBtn.classList.remove("active");

      // If it wasn't open, open it
      if (!isOpen) {
        dropdownMenu.classList.add("show");
        dropdownBtn.classList.add("active");
      }
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!dropdownBtn.contains(e.target) && !dropdownMenu.contains(e.target)) {
        dropdownBtn.classList.remove("active");
        dropdownMenu.classList.remove("show");
      }
    });

    // Close dropdown when clicking on a menu item (optional - remove if you want it to stay open after navigation)
    const menuItems = dropdownMenu.querySelectorAll(".tiny-dropdown-item");
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        dropdownBtn.classList.remove("active");
        dropdownMenu.classList.remove("show");
      });
    });
  },

  initMenuToggle() {
    const menuToggle = document.getElementById("tiny-menu-toggle");
    if (menuToggle) {
      menuToggle.addEventListener("click", () => {
        // Dispatch custom event for mobile menu
        window.dispatchEvent(new CustomEvent("tiny-menu-toggle"));
        // Toggle active class for animation
        menuToggle.classList.toggle("active");
      });
    }
  },
};

window.TinyHeader = TinyHeader;
