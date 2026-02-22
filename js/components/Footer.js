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
    <section class="newsletter-section">
        <div class="container">
            <h2 class="newsletter-title">Receba as principais notícias do dia</h2>
            <p class="newsletter-desc">Cadastre-se para receber o nosso boletim diário com os destaques da nossa equipe editorial.</p>
            <form class="newsletter-form" onsubmit="event.preventDefault();">
                <input type="email" placeholder="Seu e-mail" required>
                <button type="submit">Inscrever-se</button>
            </form>
        </div>
    </section>

    <footer class="main-footer">
        <div class="container">
            <div class="footer-grid">
                
                <div class="footer-col">
                    <h4>Sobre</h4>
                    <ul>
                        <li><a href="#">Quem somos</a></li>
                        <li><a href="#">Expediente</a></li>
                        <li><a href="#">Política de Privacidade</a></li>
                        <li><a href="#">Termos de Uso</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Editorias</h4>
                    <ul>
                        <li><a href="opiniao.html">Opinião</a></li>
                        <li><a href="#">Política</a></li>
                        <li><a href="#">Economia</a></li>
                        <li><a href="#">Justiça</a></li>
                        <li><a href="#">Esportes</a></li>
                        <li><a href="#">Cultura</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Portais Regionais</h4>
                    <ul>
                        <li><a href="#">Correio RJ</a></li>
                        <li><a href="#">Correio SP</a></li>
                        <li><a href="#">Correio DF</a></li>
                        <li><a href="#">Correio Sul Fluminense</a></li>
                        <li><a href="#">Correio Petropolitano</a></li>
                    </ul>
                </div>

                <div class="footer-col">
                    <h4>Contato</h4>
                    <ul>
                        <li><a href="#">Fale conosco</a></li>
                        <li><a href="#">Trabalhe conosco</a></li>
                        <li><a href="#">Anuncie</a></li>
                        <li><a href="#">Assine</a></li>
                    </ul>
                </div>

            </div>
        </div>

        <div class="footer-bottom">
            <div class="container footer-bottom-flex">
                <div class="footer-logo">
                    <span style="font-family: 'Noto Serif', serif; font-weight: 900; font-size: 1.5rem; color: #fff; line-height: 0.8; display: block;">CM</span>
                    <span style="font-family: sans-serif; font-size: 0.6rem; letter-spacing: 3px; color: #fff; display: block; margin-top: 5px;">PORTAL</span>
                </div>
                <p>&copy; 2026 Portal CM. Todos os direitos reservados. O conteúdo não pode ser reproduzido sem autorização.</p>
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
