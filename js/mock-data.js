const mockNewsDatabase = [
  {
    "id": "noticia-001",
    "title": "STF mantém decisão sobre marco temporal das terras indígenas",
    "subtitle": "Ministros reafirmam a inconstitucionalidade da tese defendida por setores do agronegócio.",
    "content": "<p>O Supremo Tribunal Federal (STF) decidiu nesta tarde manter a invalidade da tese do marco temporal para a demarcação de terras indígenas. Por maioria de votos, a Corte entendeu que o direito originário dos povos indígenas sobre suas terras independe da ocupação física na data da promulgação da Constituição de 1988.</p><p>A decisão é vista como uma vitória histórica para as lideranças indígenas, que acompanharam o julgamento em Brasília. Por outro lado, representantes da bancada ruralista no Congresso criticaram o desfecho, alegando insegurança jurídica no campo.</p>",
    "image": "https://placehold.co/800x450/1a3a5c/ffffff?text=STF+Marco+Temporal",
    "category": "justica",
    "source": "Correio da Manhã",
    "author": "Ricardo Moraes",
    "date": "15/02/2026",
    "time": "14:30"
  },
  {
    "id": "noticia-002",
    "title": "Câmara aprova em primeiro turno a nova reforma tributária do consumo",
    "subtitle": "Texto segue para o Senado e prevê a unificação de impostos federais, estaduais e municipais.",
    "content": "<p>A Câmara dos Deputados aprovou, por ampla maioria, o texto-base da Proposta de Emenda à Constituição (PEC) que simplifica o sistema tributário brasileiro. A reforma foca no consumo e busca extinguir cinco tributos atuais (PIS, Cofins, IPI, ICMS e ISS) em troca de um Imposto sobre Valor Agregado (IVA).</p><p>O governo comemorou o resultado, projetando um crescimento do PIB no longo prazo devido à maior eficiência econômica gerada pela redução da burocracia fiscal.</p>",
    "image": "https://placehold.co/800x450/d32f2f/ffffff?text=Reforma+Tributaria",
    "category": "politica",
    "source": "Correio da Manhã",
    "author": "Ana Paula Silveira",
    "date": "15/02/2026",
    "time": "16:45"
  },
  {
    "id": "noticia-003",
    "title": "A necessidade urgente de pacificação política no Brasil",
    "subtitle": "Análise: Os danos da polarização extrema para as instituições democráticas.",
    "content": "<p>O cenário político brasileiro continua marcado por uma divisão profunda que transborda das redes sociais para a vida cotidiana. A incapacidade de diálogo entre diferentes setores da sociedade compromete o avanço de pautas essenciais para o desenvolvimento do país.</p><p>Caminhar em direção ao centro e buscar consensos mínimos não é sinal de fraqueza, mas sim de maturidade democrática necessária para enfrentar os grandes desafios econômicos e sociais que se impõem.</p>",
    "image": "https://placehold.co/800x450/444/ffffff?text=Opiniao+Politica",
    "category": "opiniao",
    "source": "Correio da Manhã",
    "author": "José Eduardo Marinho",
    "date": "14/02/2026",
    "time": "09:00"
  },
  {
    "id": "noticia-004",
    "title": "Petrópolis anuncia festival de gastronomia típica em março",
    "subtitle": "Evento reunirá mais de 30 restaurantes no centro histórico da Cidade Imperial.",
    "content": "<p>A prefeitura de Petrópolis lançou hoje a programação oficial do Festival Sabores da Serra. O evento, que acontece anualmente, terá como foco este ano a culinária de influência alemã e as cervejas artesanais da região.</p><p>A expectativa é atrair cerca de 50 mil turistas durante os dois finais de semana de festa, movimentando a economia local duramente afetada pelas chuvas do último verão.</p>",
    "image": "https://placehold.co/800x450/004d40/ffffff?text=Petropolis+Gastronomia",
    "category": "cultura",
    "source": "Correio Petropolitano",
    "author": "Fernanda Torres",
    "date": "15/02/2026",
    "time": "11:20"
  },
  {
    "id": "noticia-005",
    "title": "Volta Redonda investe R$ 10 milhões em iluminação de LED",
    "subtitle": "Projeto visa cobrir 100% dos bairros até o final do primeiro semestre de 2026.",
    "content": "<p>A prefeitura de Volta Redonda iniciou a segunda fase do projeto 'Cidade Iluminada'. A substituição de lâmpadas antigas por tecnologia LED promete aumentar a sensação de segurança e reduzir os custos com energia elétrica em até 40%.</p><p>Moradores do bairro Retiro já comemoram a mudança, relatando ruas muito mais claras no período noturno.</p>",
    "image": "https://placehold.co/800x450/ff9800/ffffff?text=Volta+Redonda+LED",
    "category": "brasil",
    "source": "Correio Sul Fluminense",
    "author": "Marcos Vieira",
    "date": "13/02/2026",
    "time": "15:00"
  },
  {
    "id": "noticia-006",
    "title": "Justiça barra construção de condomínio em área de preservação no Rio",
    "subtitle": "Decisão liminar atende pedido do Ministério Público contra licenciamento irregular.",
    "content": "<p>Um juiz da 5ª Vara de Fazenda Pública do Rio de Janeiro suspendeu as obras de um megaempreendimento imobiliário na Zona Oeste. Segundo o MP, o projeto invadia áreas de Mata Atlântica protegidas por lei federal.</p><p>A empresa responsável afirmou que cumpriu todos os requisitos e que irá recorrer da decisão para manter o cronograma de entrega.</p>",
    "image": "https://placehold.co/800x450/0288d1/ffffff?text=Justica+Meio+Ambiente",
    "category": "justica",
    "source": "Correio da Manhã",
    "author": "Patrícia Lima",
    "date": "15/02/2026",
    "time": "18:10"
  },
  {
    "id": "noticia-007",
    "title": "Brasil registra excedente comercial recorde com exportações de soja",
    "subtitle": "Balança comercial de fevereiro é impulsionada pela forte demanda internacional.",
    "content": "<p>O Ministério da Economia divulgou dados preliminares apontando que o Brasil exportou volumes históricos de grãos este mês. A China continua sendo o principal parceiro, absorvendo 60% da produção brasileira de soja.</p><p>Analistas preveem que o superávit ajude a manter a cotação do dólar estável nas próximas semanas.</p>",
    "image": "https://placehold.co/800x450/4caf50/ffffff?text=Agro+Economia",
    "category": "economia",
    "source": "Correio da Manhã",
    "author": "Juliana Costa",
    "date": "15/02/2026",
    "time": "10:00"
  },
  {
    "id": "noticia-008",
    "title": "Flamengo e Palmeiras empatam em clássico equilibrado no Maracanã",
    "subtitle": "Resultado mantém equipes no topo da tabela do Brasileirão 2026.",
    "content": "<p>Em um jogo de alta intensidade, as duas equipes mais vitoriosas dos últimos anos ficaram no 1 a 1. O Flamengo saiu na frente com um gol de falta, mas o Palmeiras buscou o empate em um contra-ataque rápido no segundo tempo.</p><p>A arbitragem foi criticada por ambos os lados após a anulação de um gol polêmico para o time da casa nos acréscimos.</p>",
    "image": "https://placehold.co/800x450/c62828/ffffff?text=Flamengo+vs+Palmeiras",
    "category": "esportes",
    "source": "Correio da Manhã",
    "author": "Thiago Alves",
    "date": "14/02/2026",
    "time": "21:30"
  },
  {
    "id": "noticia-009",
    "title": "Bienal do Livro de Petrópolis bate recorde de vendas",
    "subtitle": "Mais de 100 mil exemplares foram vendidos nos primeiros quatro dias de evento.",
    "content": "<p>O sucesso da Bienal deste ano surpreendeu expositores e organizadores. O destaque ficou para a literatura infanto-juvenil e os livros de autores independentes da região serrana.</p><p>O evento segue até o próximo domingo com palestras e sessões de autógrafos gratuitas.</p>",
    "image": "https://placehold.co/800x450/7e57c2/ffffff?text=Bienal+Livro+Petropolis",
    "category": "cultura",
    "source": "Correio Petropolitano",
    "author": "Beatriz Martins",
    "date": "15/02/2026",
    "time": "08:45"
  },
  {
    "id": "noticia-010",
    "title": "Barra Mansa amplia cobertura vacinal contra influenza",
    "subtitle": "Unidades de saúde estarão abertas neste sábado para o 'Dia D' de vacinação.",
    "content": "<p>A Secretaria de Saúde de Barra Mansa convocou a população para o mutirão de vacinação. O objetivo é alcançar 90% da meta para grupos prioritários antes da chegada do inverno.</p><p>Nesta semana, as doses também serão aplicadas em escolas municipais para crianças de 5 a 12 anos.</p>",
    "image": "https://placehold.co/800x450/00acc1/ffffff?text=Saude+Barra+Mansa",
    "category": "brasil",
    "source": "Correio Sul Fluminense",
    "author": "Luís Cláudio",
    "date": "15/02/2026",
    "time": "07:30"
  }
];

// Export to window object for transparency
window.mockNewsDatabase = mockNewsDatabase;
