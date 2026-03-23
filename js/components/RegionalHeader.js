/**
 * Regional Global Header Component
 * Fixed top header for regional pages with CM Portal branding and region selector
 * Newspaper Style Design
 */

const RegionalHeader = {
  // Brand colors for each region
  brandColors: {
    nacional: "#d71e15",
    sp: "#194466",
    df: "#1f92c4",
    sulfluminense: "#d20a11",
    petropolitano: "#D20A11",
    servidor: "#003366",
    barra: "#1A1A1A",
  },

  // Default regions configuration
  defaultRegions: [
    { name: "Correio da Manhã", url: "correio-nacional.html", id: "nacional" },
    { name: "Correio da Manhã SP", url: "correio-sp.html", id: "sp" },
    {
      name: "Correio Sul Fluminense",
      url: "correio-sulfluminense.html",
      id: "sulfluminense",
    },
    {
      name: "Correio Petropolitano",
      url: "correio-petropolitano.html",
      id: "petropolitano",
    },
    { name: "Correio da Manhã DF", url: "correio-df.html", id: "df" },
  ],

  render() {
    const headerPlaceholder = document.getElementById("regional-global-header");
    if (!headerPlaceholder) return;

    // Get configuration from data attributes
    const currentRegion = headerPlaceholder.dataset.currentRegion || "nacional";
    const regionsData = headerPlaceholder.dataset.regions;
    const regions = regionsData ? JSON.parse(regionsData) : this.defaultRegions;

    // Get brand color for current region
    const brandColor =
      this.brandColors[currentRegion] || this.brandColors.nacional;

    // Set CSS variable for brand color
    document.documentElement.style.setProperty("--brand-color", brandColor);

    // Create temporary container to parse HTML
    const temp = document.createElement("div");
    temp.innerHTML = this.getTemplate(currentRegion, regions, brandColor);

    // Move nodes out of the placeholder
    const parent = headerPlaceholder.parentNode;
    while (temp.firstChild) {
      parent.insertBefore(temp.firstChild, headerPlaceholder);
    }

    // Remove the placeholder
    headerPlaceholder.remove();

    // Initialize functionality
    this.initRegionSelector();
  },

  getTemplate(currentRegion, regions, brandColor) {
    const currentRegionData =
      regions.find((r) => r.id === currentRegion) || regions[0];

    return `
      <nav class="regional-global-header" style="--brand-color: ${brandColor};">
        <div class="regional-global-container">
          <button class="regional-mobile-toggle" id="regional-mobile-toggle" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div class="regional-region-selector">
            <button class="regional-selector-btn" id="region-selector-btn" aria-label="Selecionar região">
              <span class="current-region-name">${currentRegionData.name}</span>
              <i class="fas fa-chevron-down regional-selector-icon"></i>
            </button>
            <div class="regional-selector-dropdown" id="region-selector-dropdown">
              ${regions
                .map(
                  (region) => `
                <a href="${region.url}" class="region-option ${region.id === currentRegion ? "active" : ""}" data-region="${region.id}">
                  ${region.id === currentRegion ? '<i class="fas fa-check region-check"></i>' : ""}
                  <span>${region.name}</span>
                </a>
              `,
                )
                .join("")}
            </div>
          </div>

          <a href="index.html" class="regional-logo-link">
            <span class="regional-logo-cm">CM</span>
            <span class="regional-logo-text">Portal</span>
          </a>
        </div>
      </nav>
    `;
  },

  initRegionSelector() {
    const selectorBtn = document.getElementById("region-selector-btn");
    const dropdown = document.getElementById("region-selector-dropdown");
    const mobileToggle = document.getElementById("regional-mobile-toggle");

    if (!selectorBtn || !dropdown) return;

    // Toggle dropdown on click
    selectorBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      dropdown.classList.toggle("show");
      selectorBtn.classList.toggle("active");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", (e) => {
      if (!selectorBtn.contains(e.target) && !dropdown.contains(e.target)) {
        dropdown.classList.remove("show");
        selectorBtn.classList.remove("active");
      }
    });

    // Mobile menu toggle
    if (mobileToggle) {
      mobileToggle.addEventListener("click", () => {
        // Dispatch custom event for mobile menu
        window.dispatchEvent(new CustomEvent("regional-menu-toggle"));
      });
    }
  },
};

window.RegionalHeader = RegionalHeader;
