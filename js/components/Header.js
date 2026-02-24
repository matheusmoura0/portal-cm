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
                        <a href="/">
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
                    <li><a href="/opiniao.html" class="nav-link">Opinião</a></li>
                    <li>
                        <a href="/politica.html" class="nav-link">Política</a>
                    </li>
                    <li>
                        <a href="/economia.html" class="nav-link">Economia</a>
                    </li>
                    <li><a href="/justica.html" class="nav-link">Justiça</a></li>
                    <li><a href="/brasil.html" class="nav-link">Brasil</a></li>
                    <li class="nav-dropdown">
                        <a href="#regioes" class="nav-link dropdown-toggle">Regiões ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="https://www.correiodamanha.com.br/" target="_blank">Correio Rio</a></li>
                            <li><a href="https://correiodamanhasp.com.br/" target="_blank">Correio SP</a></li>
                            <li><a href="https://correiodamanhadf.com.br/" target="_blank">Correio DF</a></li>
                            <li><a href="https://correiosulfluminense.com.br/" target="_blank">Correio Sul Fluminense</a></li>
                            <li><a href="https://correiopetropolitano.com.br/" target="_blank">Correio Petropolitano</a></li>
                        </ul>
                    </li>
                    <li><a href="/cultura.html" class="nav-link">Cultura</a></li>
                    <li>
                        <a href="/esportes.html" class="nav-link">Esportes</a>
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
        (href === "/" || href === "/index.html") &&
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
