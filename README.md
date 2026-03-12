# Portal CM

Portal estático de notícias composto por páginas HTML, CSS compartilhado e módulos JavaScript carregados diretamente no navegador.

Este documento descreve a arquitetura atual do site e, principalmente, o contrato de payload esperado pela camada de renderização.

## Visão geral

- Não há framework, bundler ou etapa de build.
- Cada página é um arquivo HTML independente.
- O comportamento compartilhado fica centralizado em `js/main.js`.
- As listagens usam `js/data-loader.js`.
- A página de matéria usa `js/article-loader.js`.
- A base atual de conteúdo está em `js/mock-data.js`, mas o site pode ser integrado a qualquer origem de dados que respeite o payload esperado.

## Estrutura do projeto

### Páginas

- `index.html`
  Homepage.

- `politica.html`, `economia.html`, `justica.html`, `cultura.html`, `esportes.html`, `brasil.html`, `mundo.html`
  Editorias com grid de listagem.

- `correio-nacional.html`, `correio-sp.html`, `correio-df.html`, `correio-sulfluminense.html`, `correio-petropolitano.html`, `correio-campinas.html`
  Produtos regionais.

- `jornal-barra.html`, `jornal-turismo.html`, `jornal-servidor.html`
  Produtos especiais.

- `noticia.html`
  Página de detalhe de matéria.

### JavaScript

- `js/main.js`
  Bootstrap principal e módulos de UI.

- `js/data-loader.js`
  Renderização das listagens da home, editorias e algumas páginas regionais.

- `js/article-loader.js`
  Renderização do detalhe de matéria com base no `id` e no `product`.

- `js/mock-data.js`
  Exemplo de payload compatível com o front atual.

- `js/components/*.js`
  Header, footer, tiny header, product header, menu mobile, layout e componentes regionais.

### CSS

- `css/styles.css`
  Folha principal.

- `css/regional-headers.css`
  Estilos adicionais para produtos regionais.

## Tipos de página

### Portal/editorial

Usa placeholders globais como `#global-header` e `#global-footer`.

Exemplos:

- `index.html`
- `politica.html`
- `economia.html`
- `justica.html`
- `cultura.html`
- `esportes.html`
- `brasil.html`
- `mundo.html`

Fluxo:

1. O HTML define a estrutura e os placeholders.
2. `js/main.js` detecta o tipo de página e inicializa os módulos compartilhados.
3. `js/data-loader.js` detecta a página atual e preenche os grids usando o objeto global de dados.

### Produto regional

Usa `TinyHeader`, `ProductHeader` e `RegionalNews`.

Exemplos:

- `correio-nacional.html`
- `correio-sp.html`
- `correio-df.html`
- `correio-sulfluminense.html`
- `correio-petropolitano.html`
- `correio-campinas.html`
- `jornal-barra.html`
- `jornal-turismo.html`
- `jornal-servidor.html`

Fluxo:

1. O `body` define `data-regional-key`.
2. `js/main.js` detecta a página como regional.
3. `PageBootstrap.initRegionalPage()` renderiza os headers e chama `RegionalNews.render(regionalKey)`.

### Matéria individual

Usa `noticia.html` com conteúdo dinâmico.

Fluxo:

1. A URL segue o padrão `noticia.html?id=<articleId>&product=<productKey>`.
2. `js/article-loader.js` lê `id` e `product`.
3. O loader aplica o tema do produto, monta breadcrumb e injeta o conteúdo.

## Bootstrap atual

O ponto central de inicialização está em `js/main.js`.

### Detecção de página

`PageBootstrap.detectPage()` separa o site em:

- `portal`
- `regional`
- `article`

### Inicialização comum

Na carga do DOM, `js/main.js` executa:

1. `PageBootstrap.initLayout(pageType)`
2. `PageBootstrap.initRegionalPage()` quando aplicável
3. `PageBootstrap.initSharedModules(pageType)`

Módulos compartilhados inicializados:

- `DateTime`
- `HeaderInfo`
- `MobileController`
- `Search`
- `Newsletter`
- `UI`
- `LiveCoverage`
- `SectionLayout`
- `BreakingNews`
- `ScrollNav`
- `BackToTop`
- `ScrollAnimations`
- `SocialShare`
- `NewsNavigation`
- `RegionalColors`

Para debug, o projeto expõe `window.CM`.

## Contrato de dados esperado

O front depende de um objeto global com coleções de listagem e um mapa de artigos.

Hoje esse objeto se chama `portalMockData`, mas o nome pode ser mantido mesmo com uma fonte real para reduzir impacto no código existente.

## Estrutura geral do objeto global

Formato esperado:

```js
window.portalMockData = {
  politica: [],
  economia: [],
  justica: [],
  cultura: [],
  esportes: [],
  brasil: [],
  mundo: [],
  nacional: [],
  "sao-paulo": [],
  "distrito-federal": [],
  petropolis: [],
  campinas: [],
  "sul-fluminense": [],
  "jornal-da-barra": [],
  "jornal-turismo": [],
  servidor: [],
  opiniao: [],
  articles: {},
  articleAliases: {}
};
```

## Payload de listagem

Cada coleção editorial ou regional deve ser um array de itens.

### Formato mínimo recomendado

```js
{
  id: "politica-1",
  title: "Título da matéria",
  excerpt: "Resumo curto da matéria",
  author: "Redação",
  date: "10 de março de 2026",
  time: "Há pouco",
  category: "Política",
  tag: "Política",
  img: "https://exemplo.com/thumb.jpg",
  image: "https://exemplo.com/thumb.jpg",
  link: "noticia.html?id=politica-1&product=nacional",
  content: "<p>HTML da matéria</p>"
}
```

### Campos consumidos pelo front

- `id`
  Identificador estável do conteúdo. É usado para compor links e para resolver o detalhe.

- `title`
  Título principal do card.

- `excerpt`
  Resumo curto. Nem toda listagem usa esse campo, mas ele é aproveitado em vários cards e no fallback de matéria.

- `author`
  Nome do autor. Quando ausente, o front usa fallback.

- `date`
  Data textual já formatada para exibição.

- `time`
  Horário ou tempo relativo textual.

- `category`
  Nome da editoria exibido como selo.

- `tag`
  Alternativa para `category` em alguns grids regionais.

- `img` ou `image`
  URL da imagem de capa ou thumbnail. O ideal é enviar pelo menos um dos dois.

- `link`
  URL de destino do card. Para matérias internas, deve seguir o padrão de `noticia.html`.

- `content`
  HTML completo da matéria. Esse campo não é obrigatório em toda listagem, mas é útil para a normalização do detalhe.

### Campos efetivamente obrigatórios para não quebrar a UI

- `title`
- `link`
- `img` ou `image`

### Regras práticas

- Se houver `img` e `image`, ambos podem apontar para a mesma URL.
- Se não houver imagem real, é melhor fornecer um fallback consistente do que deixar vazio.
- O campo `link` deve ser interno para conteúdos do portal e já incluir `id` e `product` quando apontar para `noticia.html`.

## Payload de detalhe de matéria

O detalhe usa um mapa por ID em `portalMockData.articles`.

### Formato esperado

```js
portalMockData.articles = {
  "politica-1": {
    id: "politica-1",
    category: "Política",
    title: "Título completo da matéria",
    subtitle: "Linha fina da matéria",
    author: "Redação",
    date: "10 de março de 2026",
    time: "10:00",
    image: "https://exemplo.com/destaque.jpg",
    content: "<p>HTML completo da matéria</p>",
    product: "nacional"
  }
};
```

### Campos consumidos pelo detalhe

- `id`
  Identificador do artigo.

- `category`
  Categoria exibida no topo da matéria e no breadcrumb.

- `title`
  Título principal.

- `subtitle`
  Linha fina.

- `author`
  Autor exibido na matéria.

- `date`
  Data textual de publicação.

- `time`
  Campo aceito pelo contrato atual, embora o template principal use mais fortemente `date`.

- `image`
  Imagem principal da matéria.

- `content`
  HTML do corpo da matéria.

- `product`
  Produto ao qual a matéria pertence. Esse campo influencia tema e breadcrumb.

### Campos obrigatórios para detalhe confiável

- `id`
- `title`
- `category`
- `image`
- `content`
- `product`

## Aliases de artigo

O front também aceita aliases em:

```js
portalMockData.articleAliases = {
  "noticia-001": "politica-1"
};
```

Uso:

- manter compatibilidade com links antigos
- redirecionar IDs legados para IDs canônicos

## Chaves editoriais e regionais esperadas

### Editorias

- `politica`
- `economia`
- `justica`
- `cultura`
- `esportes`
- `brasil`
- `mundo`
- `opiniao`

### Coleções regionais

- `nacional`
- `sao-paulo`
- `distrito-federal`
- `petropolis`
- `campinas`
- `sul-fluminense`
- `jornal-da-barra`
- `jornal-turismo`
- `servidor`

### Produtos aceitos no detalhe

`js/article-loader.js` reconhece:

- `nacional`
- `sp`
- `df`
- `sulfluminense`
- `petropolis`
- `campinas`
- `barra`
- `turismo`
- `servidor`

Importante:

- as chaves de coleção regional e as chaves de `product` não são idênticas em todos os casos
- a integração precisa normalizar esse mapeamento

## Como cada página consome o payload

### Homepage

`js/data-loader.js` usa `loadHomepageRegionals()` para preencher grids do `index.html`.

Grids atualmente mapeados:

- `politica-grid`
- `economia-grid`
- `justica-grid`
- `esportes-grid`
- `rio-de-janeiro-grid`
- `sao-paulo-grid`
- `campinas-grid`
- `distrito-federal-grid`
- `petropolitano-grid`
- `sul-fluminense-grid`
- `jornal-barra-grid`
- `jornal-turismo-grid`
- `mundo-grid`

Observação:

- `Cultura` e `Jornal do Servidor` têm blocos especiais na home e não entram hoje no grid genérico do loader.

### Editorias

`loadSectionPage(section)` procura um container como `#politica-grid` ou `#economia-grid` e renderiza a coleção correspondente.

### Regionais

`loadRegionalPage(pageName)` converte o nome da página em uma chave regional e renderiza grid principal e blocos complementares.

### Matéria

`js/article-loader.js` resolve conteúdo na seguinte ordem:

1. `portalMockData.articleAliases[articleId]`
2. `portalMockData.articles[aliasedId]`
3. fallback legado por índice dentro da coleção do produto
4. `defaultArticle`

## Convenções de URL

### Link interno de matéria

```text
noticia.html?id=<articleId>&product=<productKey>
```

Exemplo:

```text
noticia.html?id=politica-1&product=nacional
```

## Placeholders e contratos de HTML

IDs importantes usados como contrato entre HTML e JavaScript:

- `#global-header`
- `#global-footer`
- `#tiny-header`
- `#product-header`
- `#regional-news-container`
- `#article-loader-wrapper`

Ao integrar uma nova fonte de dados, esses pontos não devem ser alterados sem revisar também os loaders.

## Estratégia recomendada de integração

O caminho mais barato para integrar uma nova API é manter o contrato atual do front e adaptar a origem dos dados para ele.

### Abordagem recomendada

1. receber o payload externo
2. normalizar para o formato esperado pelo site
3. expor esse resultado no mesmo contrato consumido por `js/data-loader.js` e `js/article-loader.js`
4. só depois revisar melhorias de arquitetura

### Menor risco

Criar uma camada adaptadora que produza:

- coleções editoriais
- coleções regionais
- `articles`
- `articleAliases`

Isso evita mexer primeiro na camada visual.

## Checklist de integração

- mapear taxonomias editoriais e regionais
- gerar IDs estáveis por matéria
- preencher `link` interno no padrão esperado
- garantir `product` válido para o detalhe
- garantir imagem fallback
- fornecer HTML confiável em `content`
- validar home, uma editoria, um regional e uma matéria

## Restrições atuais

- O projeto usa JavaScript global no navegador.
- A renderização mistura HTML estático e HTML gerado por string.
- O CSS é centralizado e grande, então alterações estruturais exigem cuidado.
- Há áreas especiais na home com comportamento diferente do grid padrão.

## Execução local

O projeto pode ser servido por um servidor estático simples.

Exemplo:

```bash
python3 -m http.server 8000
```

## Arquivos de referência

- [js/main.js](/Users/matheusoliveira/correio-da-manha/portal-cm/js/main.js)
- [js/data-loader.js](/Users/matheusoliveira/correio-da-manha/portal-cm/js/data-loader.js)
- [js/article-loader.js](/Users/matheusoliveira/correio-da-manha/portal-cm/js/article-loader.js)
- [js/mock-data.js](/Users/matheusoliveira/correio-da-manha/portal-cm/js/mock-data.js)
