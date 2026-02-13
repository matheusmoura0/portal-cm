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
    <!-- Top Bar -->
    <div class="top-bar">
        <div class="container">
            <div class="top-bar-left">
                <span id="current-date"></span>
                <span class="top-bar-separator">|</span>
                <span id="weather-info">Rio de Janeiro: 22°C Parcialmente nublado</span>
                <span class="top-bar-separator">|</span>
                <span id="usd-rate">USD: R$ 5.07</span>
                <span class="top-bar-separator">|</span>
                <span id="ibov-rate">IBOV: 135.152</span>
            </div>
            <div class="top-bar-right">
                <a href="https://instagram.com" target="_blank" class="social-icon" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                </a>
                <a href="https://youtube.com" target="_blank" class="social-icon" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path
                            d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"
                            fill="none" stroke="white" stroke-width="2"></path>
                        <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="white"></polygon>
                    </svg>
                </a>
                <a href="#share" class="social-icon" aria-label="Compartilhar">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="18" cy="5" r="3"></circle>
                        <circle cx="6" cy="12" r="3"></circle>
                        <circle cx="18" cy="19" r="3"></circle>
                        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                        <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
                    </svg>
                </a>
            </div>
        </div>
    </div>

    <!-- Ad Placeholder -->
    <div class="ad-placeholder">
        <div class="ad-label">PUBLICIDADE</div>
        <div class="ad-space">
            <img src="https://placehold.co/970x250/f0f0f0/999999?text=Espaço+Publicitário+-+970x250"
                alt="Espaço publicitário" />
        </div>
    </div>

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
