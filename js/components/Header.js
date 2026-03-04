/**
 * Global Header Component
 * Reusable header for all portal pages
 */

const Header = {
  render() {
    const headerPlaceholder = document.getElementById("global-header");
    if (!headerPlaceholder) return;

    // Create temporary container to parse HTML
    const temp = document.createElement("div");
    temp.innerHTML = `

    <!-- Unified Sticky Header -->
    <div class="sticky-nav-unified">
        <!-- Header -->
        <header class="main-header">
            <div class="container">
                <div class="header-content">
                    <div class="logo-section">
                        <a href="index.html">
                            <h1 class="logo">CM</h1>
                            <span class="logo-portal">portal</span>
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
                    <li><a href="#opiniao" class="nav-link">Opinião</a></li>
                    <li><a href="#politica" class="nav-link">Política</a></li>
                    <li><a href="#economia" class="nav-link">Economia</a></li>
                    <li><a href="#justica" class="nav-link">Justiça</a></li>
                    <li><a href="#cultura" class="nav-link">Cultura</a></li>
                    <li><a href="#esportes" class="nav-link">Esportes</a></li>
                    <li><a href="#mundo" class="nav-link">Mundo</a></li>
                    <li><a href="#tv" class="nav-link">TV</a></li>
                    <li class="nav-dropdown">
                        <a href="#produtos" class="nav-link dropdown-toggle">Produtos ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="#rio-de-janeiro">CM Rio de Janeiro</a></li>
                            <li><a href="#sao-paulo">CM São Paulo</a></li>
                            <li><a href="#campinas">CM Campinas</a></li>
                            <li><a href="#distrito-federal">CM Distrito Federal</a></li>
                            <li><a href="#petropolitano">Correio Petropolitano</a></li>
                            <li><a href="#sul-fluminense">Correio Sul Fluminense</a></li>
                            <li><a href="#jornal-barra">Jornal da Barra</a></li>
                            <li><a href="#jornal-turismo">Jornal de Turismo</a></li>
                            <li><a href="#jornal-servidor">Jornal do Servidor</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    `;

    // Move nodes out of the placeholder to ensure 'position: sticky' has the correct boundary
    const parent = headerPlaceholder.parentNode;
    while (temp.firstChild) {
      parent.insertBefore(temp.firstChild, headerPlaceholder);
    }

    // Remove the placeholder as it's no longer needed and would constrain sticky elements
    headerPlaceholder.remove();

    this.initNavigation();
  },

  initNavigation() {
    // Initialize mobile menu toggle
    const mobileToggle = document.getElementById("mobile-menu-toggle");
    const navMenu = document.getElementById("nav-menu");

    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener("click", () => {
        navMenu.classList.toggle("active");
        mobileToggle.classList.toggle("active");
      });
    }

    // Initialize dropdown hover behavior
    const dropdowns = document.querySelectorAll(".nav-dropdown");

    dropdowns.forEach((dropdown) => {
      const toggle = dropdown.querySelector(".dropdown-toggle");
      const menu = dropdown.querySelector(".dropdown-menu");

      if (toggle && menu) {
        // Desktop hover behavior
        dropdown.addEventListener("mouseenter", () => {
          if (window.innerWidth > 768) {
            menu.classList.add("show");
          }
        });

        dropdown.addEventListener("mouseleave", () => {
          if (window.innerWidth > 768) {
            menu.classList.remove("show");
          }
        });

        // Mobile click behavior for toggle
        toggle.addEventListener("click", (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault();
            menu.classList.toggle("show");
          }
        });

        // Handle dropdown links with smooth scroll
        const dropdownLinks = menu.querySelectorAll("a");
        dropdownLinks.forEach((link) => {
          link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");

            // Check if it's an anchor link
            if (href && href.startsWith("#")) {
              const target = document.querySelector(href);

              if (target) {
                e.preventDefault();
                target.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }

            // Close dropdown and mobile menu
            menu.classList.remove("show");
            if (navMenu) {
              navMenu.classList.remove("active");
            }
            if (mobileToggle) {
              mobileToggle.classList.remove("active");
            }
          });
        });
      }
    });

    // Smooth scroll for main navigation anchor links
    const anchorLinks = document.querySelectorAll(
      '.nav-menu > li > a[href^="#"]',
    );
    anchorLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        const href = link.getAttribute("href");

        // Check if the target section exists on the current page
        const target = document.querySelector(href);

        if (target && href !== "#produtos") {
          e.preventDefault();
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

          // Close mobile menu if open
          if (navMenu) {
            navMenu.classList.remove("active");
          }
          if (mobileToggle) {
            mobileToggle.classList.remove("active");
          }
        }
      });
    });
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
