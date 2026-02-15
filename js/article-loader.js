document.addEventListener("DOMContentLoaded", () => {
    // MODO DE APRESENTAÇÃO LOREM IPSUM: Ignora a URL e carrega o mock
    
    const perfectArticle = {
        category: "ESPECIAL",
        title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        subtitle: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        author: "Redação",
        date: "15 de fevereiro de 2026",
        time: "10:00",
        image: "https://placehold.co/1200x600/1a3a5c/ffffff?text=Imagem+de+Destaque", 
        content: `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in dui mauris. Vivamus hendrerit arcu sed erat molestie vehicula. Sed auctor neque eu tellus rhoncus ut eleifend nibh porttitor. Ut in nulla enim. Phasellus molestie magna non est bibendum non venenatis nisl tempor. Suspendisse dictum feugiat nisl ut dapibus.</p>
            <p>Mauris iaculis porttitor posuere. Praesent id metus massa, ut blandit odio. Proin quis tortor orci. Etiam at risus et justo dignissim congue. Donec congue lacinia dui, a porttitor lectus condimentum laoreet. Nunc eu ullamcorper orci. Quisque eget odio ac lectus vestibulum faucibus eget in metus.</p>

            <div class="ad-float-right" style="float: right; margin: 10px 0 20px 30px; max-width: 300px;">
                <span style="font-size:10px; color:#999; display:block; text-align:center; margin-bottom: 4px; text-transform: uppercase;">Publicidade</span>
                <img src="images/seguranca_300x250.gif" alt="Anúncio 300x250" style="max-width: 100%; border-radius: 4px; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
            </div>

            <h3>Pellentesque habitant morbi tristique</h3>
            <p>In pellentesque faucibus vestibulum. Nulla at nulla justo, eget luctus tortor. Nulla facilisi. Duis aliquet egestas purus in blandit. Curabitur vulputate, ligula lacinia scelerisque tempor, lacus lacus ornare ante, ac egestas est urna sit amet arcu. Mauris egestas magna non est dictum ullamcorper.</p>
            
            <blockquote style="border-left: 4px solid #d0021b; padding-left: 20px; font-style: italic; margin: 30px 0; color: #555;">
                "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis."
            </blockquote>
            
            <p>Suspendisse potenti. Nunc dictum lobortis enim, et faucibus odio feugiat at. Nulla facilisi. Aenean et egestas ipsum. Fusce nec nunc vitae metus faucibus mattis. Ut convallis elementum purus. Praesent feugiat facilisis faucibus. Phasellus tristique viverra elementum.</p>
        `
    };

    // Função auxiliar para injeção segura no DOM
    const setElem = (id, content, isHTML = false) => {
        const el = document.getElementById(id);
        if (el) isHTML ? el.innerHTML = content : el.textContent = content;
    };

    // Popula a página
    setElem('article-category', perfectArticle.category);
    setElem('article-title', perfectArticle.title);
    setElem('article-subtitle', perfectArticle.subtitle);
    setElem('article-author', perfectArticle.author);
    setElem('article-date', perfectArticle.date + " às " + perfectArticle.time);
    setElem('article-body', perfectArticle.content, true);
    
    const imgEl = document.getElementById('article-image');
    if (imgEl) imgEl.src = perfectArticle.image;

    // Show content
    const wrapper = document.getElementById('article-content-wrapper');
    if (wrapper) wrapper.style.display = 'block';
});
