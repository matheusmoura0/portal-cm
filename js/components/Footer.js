/**
 * Global Footer Component
 * Reusable footer and newsletter section for all portal pages
 */

const Footer = {
  render() {
    const footerPlaceholder = document.getElementById("global-footer");
    if (!footerPlaceholder) return;

    // Create temporary container to parse HTML
    const temp = document.createElement("div");
    temp.innerHTML = `
    <!-- Newsletter Section -->
    <section class="newsletter-section">
        <div class="newsletter-content">
            <h3>Receba as principais notícias do dia</h3>
            <p>
                Cadastre-se gratuitamente e fique por dentro de tudo
                que acontece no Brasil e no mundo através da nossa curadoria editorial.
            </p>
            <form class="newsletter-form" id="newsletter-form">
                <input type="email" placeholder="Seu melhor e-mail" required id="newsletter-email" />
                <button type="submit">Inscrever-se</button>
            </form>
        </div>
    </section>

    <!-- Footer -->
    <footer class="main-footer">
        <div class="container">
            <div class="footer-grid">
                <div class="footer-section">
                    <span class="footer-title">Sobre</span>
                    <ul class="footer-links">
                        <li><a href="/sobre.html">Quem somos</a></li>
                        <li><a href="/expediente.html">Expediente</a></li>
                        <li><a href="/privacidade.html">Política de Privacidade</a></li>
                        <li><a href="/termos.html">Termos de Uso</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <span class="footer-title">Editorias</span>
                    <ul class="footer-links">
                        <li><a href="/opiniao.html">Opinião</a></li>
                        <li><a href="/politica.html">Política</a></li>
                        <li><a href="/economia.html">Economia</a></li>
                        <li><a href="/justica.html">Justiça</a></li>
                        <li><a href="/esportes.html">Esportes</a></li>
                        <li><a href="/cultura.html">Cultura</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <span class="footer-title">Portais Regionais</span>
                    <ul class="footer-links">
                        <li><a href="https://www.correiodamanha.com.br/" target="_blank">Correio Rio</a></li>
                        <li><a href="https://correiodamanhasp.com.br/" target="_blank">Correio SP</a></li>
                        <li><a href="https://correiodamanhadf.com.br/" target="_blank">Correio DF</a></li>
                        <li><a href="https://correiosulfluminense.com.br/" target="_blank">Correio Sul Fluminense</a></li>
                        <li><a href="https://correiopetropolitano.com.br/" target="_blank">Correio Petropolitano</a></li>
                    </ul>
                </div>
                <div class="footer-section">
                    <span class="footer-title">Contato</span>
                    <ul class="footer-links">
                        <li><a href="/contato.html">Fale conosco</a></li>
                        <li><a href="/trabalhe-conosco.html">Trabalhe conosco</a></li>
                        <li><a href="/anuncie.html">Anuncie</a></li>
                        <li><a href="/assine.html">Assine</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <div class="footer-logo">PORTAL CM</div>
                <p>PORTAL CM &copy; 2026. Todos os direitos reservados. O conteúdo deste portal é protegido por lei.</p>
            </div>
        </div>
    </footer>
    `;

    // Move nodes out of the placeholder
    while (temp.firstChild) {
      footerPlaceholder.parentNode.insertBefore(temp.firstChild, footerPlaceholder);
    }

    // Remove the placeholder
    footerPlaceholder.remove();

    // Re-initialize newsletter logic if available
    if (window.CM && window.CM.Newsletter) {
      window.CM.Newsletter.init();
    }
  },
};

window.CMFooter = Footer;
