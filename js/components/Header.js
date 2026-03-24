/**
 * Global Header Component
 * Reusable header for all portal pages
 */

const DEFAULT_COLUMN_LABELS = [
  "Correio Político",
  "Correio Bastidores",
  "Brasilianas",
  "Petropolitanas",
  "Correio Econômico",
  "Correio Esportivo",
  "Correio no Mundo",
  "Correio Jurídico",
  "Correio do Aposentado",
  "Jornal de Turismo",
  "Correio Fluminense",
  "Correio Carioca",
  "Correio da Baixada",
  "Correio Paulista",
  "Correio Paulistano",
  "Correio Grande SP",
  "Correio de Campinas",
  "Grande Campinas",
  "Correio das Regiões",
  "Correio Serrano",
  "Correio do Vale",
  "Correio Vale Paraíba",
  "Correio Vale do Café",
  "Correio Agulhas Negras",
  "Correio Regional",
  "Correio Norte/Noroeste",
  "Correio Nacional",
  "Correio Centro-Oeste",
  "Correio Sudeste",
  "Correio Nordeste",
  "Correio Norte",
  "Correio Sul",
];

const COLUMN_MENU_GROUPS = [
  {
    title: "Nacional",
    items: [
      "Correio Político",
      "Correio Bastidores",
      "Correio Econômico",
      "Correio Jurídico",
      "Correio do Aposentado",
      "Correio Esportivo",
      "Correio no Mundo",
      "Jornal de Turismo",
    ],
  },
  {
    title: "Rio de Janeiro",
    items: [
      "Correio Fluminense",
      "Correio Carioca",
      "Correio da Baixada",
      "Correio Norte/Noroeste",
    ],
  },
  {
    title: "Região Serrana - RJ",
    items: ["Correio Serrano", "Petropolitanas"],
  },
  {
    title: "Sul Fluminense",
    items: [
      "Correio do Vale",
      "Correio Agulhas Negras",
      "Correio Vale do Café",
      "Correio Vale Paraíba",
      "Correio Regional",
      "Correio Esportivo",
    ],
  },
  {
    title: "São Paulo",
    items: [
      "Correio Paulista",
      "Correio Paulistano",
      "Correio Grande SP",
      "Correio das Regiões",
    ],
  },
  {
    title: "Campinas",
    items: ["Correio de Campinas", "Grande Campinas"],
  },
  {
    title: "Distrito Federal e Estados",
    items: [
      "Brasilianas",
      "Correio Nacional",
      "Correio Centro-Oeste",
      "Correio Nordeste",
      "Correio Norte",
      "Correio Sul",
      "Correio Sudeste",
    ],
  },
];

function slugifyColumnLabel(label) {
  return String(label || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[\/]/g, " ")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function buildColumnCatalog() {
  return DEFAULT_COLUMN_LABELS.map((label, index) => {
    const slug = slugifyColumnLabel(label);
    return {
      id: index + 1,
      label,
      slug,
      url: `coluna.html?slug=${encodeURIComponent(slug)}`,
    };
  });
}

function buildColumnMenuGroups(sourceCatalog) {
  const catalog = Array.isArray(sourceCatalog) ? sourceCatalog : [];
  const catalogByLabel = new Map(catalog.map((item) => [item.label, item]));

  return COLUMN_MENU_GROUPS.map((group) => ({
    title: group.title,
    items: group.items.map((label) => {
      const record = catalogByLabel.get(label);

      if (record) {
        return { ...record };
      }

      const slug = slugifyColumnLabel(label);
      return {
        label,
        slug,
        url: `coluna.html?slug=${encodeURIComponent(slug)}`,
      };
    }),
  }));
}

window.CMColumns = window.CMColumns || {
  catalog: buildColumnCatalog(),

  slugify: slugifyColumnLabel,

  getCatalog() {
    return this.catalog.slice();
  },

  getMenuGroups() {
    return buildColumnMenuGroups(this.getCatalog());
  },

  getColumnUrl(slug) {
    const safeSlug = encodeURIComponent(slug || this.catalog[0]?.slug || "");
    return `coluna.html?slug=${safeSlug}`;
  },

  getColumnBySlug(slug) {
    if (!slug) return this.catalog[0] || null;
    return this.catalog.find((item) => item.slug === slug) || this.catalog[0] || null;
  },

  getMenuColumns(columnCount = 3) {
    const columns = [];
    const source = this.getCatalog();
    const itemsPerColumn = Math.ceil(source.length / columnCount);

    for (let index = 0; index < columnCount; index += 1) {
      const start = index * itemsPerColumn;
      const end = start + itemsPerColumn;
      columns.push(source.slice(start, end));
    }

    return columns.filter((items) => items.length > 0);
  },
};

const Header = {
  getColumnsMegaMenuHTML() {
    const groups = window.CMColumns.getMenuGroups();
    const menuGroups = groups
      .map((group) => {
        const links = group.items
          .map(
            (item) => `
              <li>
                <a href="${item.url}">${item.label}</a>
              </li>
            `,
          )
          .join("");

        return `
          <div class="mega-menu-column">
            <div class="columns-group-title">${group.title}</div>
            <ul>
              ${links}
            </ul>
          </div>
        `;
      })
      .join("");

    return `
      <div id="columns-mega-menu" class="dropdown-menu mega-menu columns-mega-menu">
        <div class="mega-menu-grid">
          ${menuGroups}
        </div>
      </div>
    `;
  },

  render() {
    const headerPlaceholder = document.getElementById("global-header");
    if (!headerPlaceholder) return;

    const temp = document.createElement("div");
    temp.innerHTML = `

    <!-- Unified Sticky Header -->
    <div class="sticky-nav-unified">
        <!-- Header -->
        <header class="main-header">
            <div class="container">
                <div class="header-content">
                    <div class="logo-section">
                        <a href="index.html" class="portal-brand" style="font-family: Arial, Helvetica, sans-serif;">
                            <span class="logo-cm" style="font-family: inherit; color: white;">CM</span>
                            <div class="logo-text">
                                <h1 class="logo" style="font-family: inherit;">www.cm.com.br</h1>
                                <span class="logo-portal" style="font-family: inherit;">O portal do grupo Correio da Manhã</span>
                            </div>
                        </a>
                    </div>
                    <div class="search-section">
                        <div class="search-box">
                            <input type="text" placeholder="Buscar notícias..." id="search-input" />
                            <button class="search-btn" aria-label="Buscar">
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2">
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.35-4.35"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <!-- Main Navigation -->
        <nav class="main-nav">
            <div class="container">
                <button class="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Menu">
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <ul class="nav-menu" id="nav-menu">
                    <li><a href="index.html#magnavita" class="nav-link">MAGNAVITA</a></li>
                    <li><a href="index.html#opiniao" class="nav-link">Opinião</a></li>
                    <li class="nav-dropdown">
                        <div class="nav-link-row">
                            <a href="index.html#colunas" class="nav-link nav-link-primary">Colunas</a>
                            <button
                                type="button"
                                class="nav-link nav-link-toggle dropdown-toggle"
                                aria-haspopup="true"
                                aria-expanded="false"
                                aria-controls="columns-mega-menu"
                                aria-label="Abrir menu de Colunas"
                            >
                                <span class="nav-link-caret">▾</span>
                            </button>
                        </div>
                        ${this.getColumnsMegaMenuHTML()}
                    </li>
                    <li><a href="#politica" class="nav-link">Política</a></li>
                    <li><a href="#economia" class="nav-link">Economia</a></li>
                    <li><a href="#justica" class="nav-link">Justiça</a></li>
                    <li><a href="#cultura" class="nav-link">Cultura</a></li>
                    <li><a href="#esportes" class="nav-link">Esportes</a></li>
                    <li><a href="#mundo" class="nav-link">Mundo</a></li>
                    <li><a href="#tv" class="nav-link">CM News TV</a></li>
                    <li class="nav-dropdown">
                        <a href="#produtos" class="nav-link dropdown-toggle" aria-haspopup="true" aria-expanded="false">Nossos Jornais ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="#rio-de-janeiro">Correio da Manhã RJ</a></li>
                            <li><a href="#sao-paulo">Correio da Manhã SP</a></li>
                            <li><a href="#campinas">Correio da Manhã Campinas</a></li>
                            <li><a href="#sul-fluminense">Correio Sul Fluminense</a></li>
                            <li><a href="#petropolitano">Correio Petropolitano</a></li>
                            <li><a href="#distrito-federal">Correio da Manhã DF</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    `;

    const parent = headerPlaceholder.parentNode;
    while (temp.firstChild) {
      parent.insertBefore(temp.firstChild, headerPlaceholder);
    }

    headerPlaceholder.remove();

    this.initNavigation();
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

  initNavigation() {
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener("click", (e) => {
        e.preventDefault();
        if (window.CMMobileMenu) {
          window.CMMobileMenu.toggle(true);
        } else {
          navMenu.classList.toggle("active");
          mobileToggle.classList.toggle("active");
        }
      });
    }

    const dropdowns = document.querySelectorAll(".nav-dropdown");

    const closeDropdown = (dropdown) => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      const menu = dropdown.querySelector(".dropdown-menu");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
      if (menu) menu.classList.remove("show");
      dropdown.classList.remove("active");
    };

    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      const menu = dropdown.querySelector(".dropdown-menu");

      if (!toggle || !menu) return;

      dropdown.addEventListener("mouseenter", () => {
        if (window.innerWidth > 768) {
          menu.classList.add("show");
          toggle.setAttribute("aria-expanded", "true");
        }
      });

      dropdown.addEventListener("mouseleave", () => {
        if (window.innerWidth > 768) {
          closeDropdown(dropdown);
        }
      });

      toggle.addEventListener("click", (e) => {
        const isButtonToggle = toggle.tagName === "BUTTON";

        if (window.innerWidth <= 768 || isButtonToggle) {
          e.preventDefault();
          e.stopPropagation();
          const isOpen = menu.classList.contains("show");

          dropdowns.forEach((item) => {
            if (item !== dropdown) closeDropdown(item);
          });

          menu.classList.toggle("show", !isOpen);
          dropdown.classList.toggle("active", !isOpen);
          toggle.setAttribute("aria-expanded", String(!isOpen));
        }
      });

      const dropdownLinks = menu.querySelectorAll("a");
      dropdownLinks.forEach((link) => {
        link.addEventListener("click", (e) => {
          const href = link.getAttribute("href");
          const target = this.resolveInPageTarget(href);

          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          } else if (href && href.startsWith("#")) {
            e.preventDefault();
            window.location.href = `index.html${href}`;
          }

          closeDropdown(dropdown);
          if (navMenu) {
            navMenu.classList.remove("active");
          }
          if (mobileToggle) {
            mobileToggle.classList.remove("active");
          }
        });
      });
    });

    const topLevelLinks = document.querySelectorAll(
      ".nav-menu .nav-link:not(.dropdown-toggle)",
    );

    topLevelLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");
        const target = this.resolveInPageTarget(href);

        if (target) {
          e.preventDefault();
          dropdowns.forEach((dropdown) => closeDropdown(dropdown));
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          if (navMenu) {
            navMenu.classList.remove("active");
          }
          if (mobileToggle) {
            mobileToggle.classList.remove("active");
          }
        } else if (href && href.startsWith("#")) {
          e.preventDefault();
          window.location.href = `index.html${href}`;
        }
      });
    });

    this.setActiveLink();
  },

  setActiveLink() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link) => {
      const href = link.getAttribute("href");
      if (href && (currentPath === href || currentPath.endsWith(href))) {
        link.classList.add("active");
      } else if (
        (href === "/" || href === "/index.html" || href === "index.html") &&
        (currentPath === "/" ||
          currentPath.endsWith("/") ||
          currentPath.endsWith("index.html"))
      ) {
        link.classList.add("active");
      }
    });
  },
};

window.CMHeader = Header;
