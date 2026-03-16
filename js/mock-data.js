// Base de dados simulada para Apresentação de Layout
const portalMockData = {
  // Category Pages
  politica: [
    {
      title:
        "Governo federal anuncia novo pacote de investimentos para infraestrutura no Sudeste",
      img: "https://picsum.photos/seed/pol1/600/400",
      link: "noticia.html",
      category: "Política",
      time: "Há 2 horas",
    },
    {
      title:
        "Congresso entra em acordo e votação do novo marco fiscal é adiantada",
      img: "https://picsum.photos/seed/pol2/600/400",
      link: "noticia.html",
      category: "Política",
      time: "Há 3 horas",
    },
    {
      title:
        "Partidos da base aliada discutem estratégias para as próximas eleições municipais",
      img: "https://picsum.photos/seed/pol3/600/400",
      link: "noticia.html",
      category: "Política",
      time: "Há 4 horas",
    },
    {
      title:
        "Ministério da Fazenda revisa projeção de crescimento da economia para este ano",
      img: "https://picsum.photos/seed/pol4/600/400",
      link: "noticia.html",
      category: "Política",
      time: "Há 5 horas",
    },
    {
      title: "STF forma maioria favorável à mudança na Lei das Estatais",
      img: "https://picsum.photos/seed/pol5/600/400",
      link: "noticia.html",
      category: "Política",
      time: "Há 6 horas",
    },
    {
      title: "Senado aprova projeto de lei que altera regras de previdência",
      img: "https://picsum.photos/seed/pol6/600/400",
      link: "noticia.html",
      category: "Política",
      time: "Há 7 horas",
    },
    {
      title: "Governo federal anuncia novo programa de infraestrutura",
      img: "https://picsum.photos/seed/pol7/600/400",
      link: "noticia.html",
      category: "Política",
      time: "Há 8 horas",
    },
    {
      title: "Partidos de oposição articulam CPI sobre fraudes eletrônicas",
      img: "https://picsum.photos/seed/pol8/600/400",
      link: "noticia.html",
      category: "Política",
      time: "Há 9 horas",
    },
  ],
  justica: [
    {
      title:
        "STF forma maioria em julgamento histórico sobre direitos trabalhistas",
      img: "https://picsum.photos/seed/jus1/600/400",
      link: "noticia.html",
      category: "Justiça",
      time: "Há 2 horas",
    },
    {
      title:
        "Operação da Polícia Federal desarticula esquema milionário de fraude fiscal",
      img: "https://picsum.photos/seed/jus2/600/400",
      link: "noticia.html",
      category: "Justiça",
      time: "Há 3 horas",
    },
    {
      title:
        "Conselho Nacional de Justiça aprova novas metas para acelerar processos parados",
      img: "https://picsum.photos/seed/jus3/600/400",
      link: "noticia.html",
      category: "Justiça",
      time: "Há 4 horas",
    },
    {
      title:
        "Ministério Público instaura inquérito para investigar desvios na saúde pública",
      img: "https://picsum.photos/seed/jus4/600/400",
      link: "noticia.html",
      category: "Justiça",
      time: "Há 5 horas",
    },
    {
      title:
        "Tribunal Regional Eleitoral determina recontagem de votos em município",
      img: "https://picsum.photos/seed/jus5/600/400",
      link: "noticia.html",
      category: "Justiça",
      time: "Há 6 horas",
    },
    {
      title:
        "Justiça Federal bloqueia bíos de investigados em operação anticorrupção",
      img: "https://picsum.photos/seed/jus6/600/400",
      link: "noticia.html",
      category: "Justiça",
      time: "Há 7 horas",
    },
    {
      title:
        "STJ decide sobre competência de julgamento de crimes contra economia",
      img: "https://picsum.photos/seed/jus7/600/400",
      link: "noticia.html",
      category: "Justiça",
      time: "Há 8 horas",
    },
    {
      title: "OAB Nacional ingressa com ação contra mudanças no Código Penal",
      img: "https://picsum.photos/seed/jus8/600/400",
      link: "noticia.html",
      category: "Justiça",
      time: "Há 9 horas",
    },
  ],
  economia: [
    {
      title:
        "Ibovespa fecha em alta impulsionado por commodities e cenário externo",
      img: "https://picsum.photos/seed/eco1/600/400",
      link: "noticia.html",
      category: "Economia",
      time: "Há 2 horas",
    },
    {
      title: "Dólar recua para R$ 4,95 com otimismo sobre reforma tributária",
      img: "https://picsum.photos/seed/eco2/600/400",
      link: "noticia.html",
      category: "Economia",
      time: "Há 3 horas",
    },
    {
      title:
        "Banco Central sinaliza novo corte na taxa Selic para a próxima reunião",
      img: "https://picsum.photos/seed/eco3/600/400",
      link: "noticia.html",
      category: "Economia",
      time: "Há 4 horas",
    },
    {
      title: "Inflação desacelera em janeiro e fica abaixo da meta oficial",
      img: "https://picsum.photos/seed/eco4/600/400",
      link: "noticia.html",
      category: "Economia",
      time: "Há 5 horas",
    },
    {
      title: "PIB do Brasil cresce 0,4% no quarto trimestre de 2024",
      img: "https://picsum.photos/seed/eco5/600/400",
      link: "noticia.html",
      category: "Economia",
      time: "Há 6 horas",
    },
    {
      title: "Desemprego cai para 7,8% e atinga menor nível da série histórica",
      img: "https://picsum.photos/seed/eco6/600/400",
      link: "noticia.html",
      category: "Economia",
      time: "Há 7 horas",
    },
    {
      title: "Exportações brasileiras batem recorde em fevereiro",
      img: "https://picsum.photos/seed/eco7/600/400",
      link: "noticia.html",
      category: "Economia",
      time: "Há 8 horas",
    },
    {
      title: "Setor de serviços cresce 0,6% e impulsiona atividade econômica",
      img: "https://picsum.photos/seed/eco8/600/400",
      link: "noticia.html",
      category: "Economia",
      time: "Há 9 horas",
    },
  ],
  esportes: [
    {
      title:
        "Seleção brasileira divulga lista de convocados para os amistosos na Europa",
      img: "https://picsum.photos/seed/esp1/600/400",
      link: "noticia.html",
      category: "Esportes",
      time: "Há 2 horas",
    },
    {
      title:
        "Clássico termina empatado e mantém disputa acirrada pela liderança do campeonato",
      img: "https://picsum.photos/seed/esp2/600/400",
      link: "noticia.html",
      category: "Esportes",
      time: "Há 3 horas",
    },
    {
      title:
        "Atleta brasileiro quebra recorde mundial na natação e garante ouro inédito",
      img: "https://picsum.photos/seed/esp3/600/400",
      link: "noticia.html",
      category: "Esportes",
      time: "Há 4 horas",
    },
    {
      title:
        "Nova liga de basquete anuncia expansão para mais três capitais no próximo ano",
      img: "https://picsum.photos/seed/esp4/600/400",
      link: "noticia.html",
      category: "Esportes",
      time: "Há 5 horas",
    },
    {
      title: "Flamengo vence a Libertadores pela terceira vez",
      img: "https://picsum.photos/seed/esp5/600/400",
      link: "noticia.html",
      category: "Esportes",
      time: "Há 6 horas",
    },
    {
      title: "Formula 1 anuncia nova etapa no Brasil para temporada 2026",
      img: "https://picsum.photos/seed/esp6/600/400",
      link: "noticia.html",
      category: "Esportes",
      time: "Há 7 horas",
    },
    {
      title: "Confederação Brasileira de Futebol revela nova seleção feminina",
      img: "https://picsum.photos/seed/esp7/600/400",
      link: "noticia.html",
      category: "Esportes",
      time: "Há 8 horas",
    },
    {
      title: "Tenista brasileiro alcança melhor posição no ranking mundial",
      img: "https://picsum.photos/seed/esp8/600/400",
      link: "noticia.html",
      category: "Esportes",
      time: "Há 9 horas",
    },
  ],
  cultura: [
    {
      title:
        "Festival de cinema independente premia diretores estreantes em noite de gala",
      img: "https://picsum.photos/seed/cul1/600/400",
      link: "noticia.html",
      category: "Cultura",
      time: "Há 2 horas",
    },
    {
      title:
        "Exposição imersiva sobre arte moderna atrai multidões no centro da cidade",
      img: "https://picsum.photos/seed/cul2/600/400",
      link: "noticia.html",
      category: "Cultura",
      time: "Há 3 horas",
    },
    {
      title:
        "Banda icônica dos anos 90 anuncia turnê de reencontro com shows esgotados",
      img: "https://picsum.photos/seed/cul3/600/400",
      link: "noticia.html",
      category: "Cultura",
      time: "Há 4 horas",
    },
    {
      title:
        "Bienal do Livro bate recorde histórico de público no primeiro fim de semana",
      img: "https://picsum.photos/seed/cul4/600/400",
      link: "noticia.html",
      category: "Cultura",
      time: "Há 5 horas",
    },
    {
      title:
        "Museu do Ipiranga recebe exposição inédita sobre arte contemporânea",
      img: "https://picsum.photos/seed/cul5/600/400",
      link: "noticia.html",
      category: "Cultura",
      time: "Há 6 horas",
    },
    {
      title: "Orquestra Sinfônica Brasileira anuncia temporada 2025",
      img: "https://picsum.photos/seed/cul6/600/400",
      link: "noticia.html",
      category: "Cultura",
      time: "Há 7 horas",
    },
    {
      title: "Teatro Municipal inaugura reforma que devota glamour dos anos 30",
      img: "https://picsum.photos/seed/cul7/600/400",
      link: "noticia.html",
      category: "Cultura",
      time: "Há 8 horas",
    },
    {
      title: "Carnaval carioca atrai turistas de todo o mundo",
      img: "https://picsum.photos/seed/cul8/600/400",
      link: "noticia.html",
      category: "Cultura",
      time: "Há 9 horas",
    },
  ],
  brasil: [
    {
      title: "STF forma maioria favorável à mudança na Lei das Estatais",
      img: "https://picsum.photos/seed/bra1/600/400",
      link: "noticia.html",
      category: "Brasil",
      time: "Há 2 horas",
    },
    {
      title: "Congresso aprova projeto de reforma tributária em primeiro turno",
      img: "https://picsum.photos/seed/bra2/600/400",
      link: "noticia.html",
      category: "Brasil",
      time: "Há 3 horas",
    },
    {
      title: "Governo anuncia novo programa de infraestrutura nacional",
      img: "https://picsum.photos/seed/bra3/600/400",
      link: "noticia.html",
      category: "Brasil",
      time: "Há 4 horas",
    },
    {
      title: "Ministério da Saúde expande programa de vacinação",
      img: "https://picsum.photos/seed/bra4/600/400",
      link: "noticia.html",
      category: "Brasil",
      time: "Há 5 horas",
    },
    {
      title: "Governo federal lança novo programa de habitação popular",
      img: "https://picsum.photos/seed/bra5/600/400",
      link: "noticia.html",
      category: "Brasil",
      time: "Há 6 horas",
    },
    {
      title: "BNDES anuncia linha de crédito para pequenas empresas",
      img: "https://picsum.photos/seed/bra6/600/400",
      link: "noticia.html",
      category: "Brasil",
      time: "Há 7 horas",
    },
    {
      title: "Governo sinaliza redução de impostos para combustíveis",
      img: "https://picsum.photos/seed/bra7/600/400",
      link: "noticia.html",
      category: "Brasil",
      time: "Há 8 horas",
    },
    {
      title: "Programa de transporte urbano recebe investimento recorde",
      img: "https://picsum.photos/seed/bra8/600/400",
      link: "noticia.html",
      category: "Brasil",
      time: "Há 9 horas",
    },
  ],
  mundo: [
    {
      title: "Estados Unidos anuncia novas sanções econômicas",
      img: "https://picsum.photos/seed/mun1/600/400",
      link: "noticia.html",
      category: "Mundo",
      time: "Há 2 horas",
    },
    {
      title: "União Europeia aprova acordo comercial com Mercosul",
      img: "https://picsum.photos/seed/mun2/600/400",
      link: "noticia.html",
      category: "Mundo",
      time: "Há 3 horas",
    },
    {
      title: "China anuncia novo plano de expansão econômica",
      img: "https://picsum.photos/seed/mun3/600/400",
      link: "noticia.html",
      category: "Mundo",
      time: "Há 4 horas",
    },
    {
      title: "Crise climática gera debate na ONU",
      img: "https://picsum.photos/seed/mun4/600/400",
      link: "noticia.html",
      category: "Mundo",
      time: "Há 5 horas",
    },
    {
      title: "Rússia anuncia nova política energética",
      img: "https://picsum.photos/seed/mun5/600/400",
      link: "noticia.html",
      category: "Mundo",
      time: "Há 6 horas",
    },
    {
      title: "Conflito no Oriente Médio gera preocupação internacional",
      img: "https://picsum.photos/seed/mun6/600/400",
      link: "noticia.html",
      category: "Mundo",
      time: "Há 7 horas",
    },
    {
      title: "África do Sul anuncia novo programa de desenvolvimento",
      img: "https://picsum.photos/seed/mun7/600/400",
      link: "noticia.html",
      category: "Mundo",
      time: "Há 8 horas",
    },
    {
      title: "Organização Mundial da Saúde alerta para nova variante",
      img: "https://picsum.photos/seed/mun8/600/400",
      link: "noticia.html",
      category: "Mundo",
      time: "Há 9 horas",
    },
  ],
  opiniao: [
    {
      title: "O futuro das reformas no Brasil",
      excerpt:
        "As próximas eleições definirão o rumo das reformas estruturais que o país tanto precisa.",
      img: "https://picsum.photos/seed/op1/600/400",
      link: "noticia.html",
      author: "João Silva",
      role: "Editor-chefe",
      time: "Há 2 horas",
    },
    {
      title: "Economia: desafios e oportunidades",
      excerpt:
        "O cenário econômico atual apresenta riscos, mas também oportunidades para o crescimento.",
      img: "https://picsum.photos/seed/op2/600/400",
      link: "noticia.html",
      author: "Maria Santos",
      role: "Editora de Economia",
      time: "Há 3 horas",
    },
    {
      title: "A importância da educação",
      excerpt:
        "Investir em educação é investir no futuro do país e de suas gerações vindouras.",
      img: "https://picsum.photos/seed/op3/600/400",
      link: "noticia.html",
      author: "Carlos Oliveira",
      role: "Colunista",
      time: "Há 4 horas",
    },
    {
      title: "Meio ambiente e sustentabilidade",
      excerpt:
        "A preservação ambiental é responsabilidade de todos os setores da sociedade.",
      img: "https://picsum.photos/seed/op4/600/400",
      link: "noticia.html",
      author: "Ana Costa",
      role: "Colunista",
      time: "Há 5 horas",
    },
  ],

  // Regional News
  regionais: [
    // Linha 1
    {
      tag: "Nacional",
      title:
        "Novo programa de habitação popular pretende entregar 2 milhões de casas",
      img: "https://picsum.photos/seed/reg1/600/400",
      link: "noticia.html",
    },
    {
      tag: "São Paulo",
      title:
        "Prefeitura inaugura novo corredor de ônibus para desafogar trânsito na zona sul",
      img: "https://picsum.photos/seed/reg2/600/400",
      link: "noticia.html",
    },
    {
      tag: "Distrito Federal",
      title:
        "Governo do DF anuncia reajuste salarial para servidores da segurança pública",
      img: "https://picsum.photos/seed/reg3/600/400",
      link: "noticia.html",
    },
    {
      tag: "Sul Fluminense",
      title:
        "Polo industrial de Resende recebe investimento estrangeiro de R$ 2 bilhões",
      img: "https://picsum.photos/seed/reg4/600/400",
      link: "noticia.html",
    },

    // Linha 2
    {
      tag: "Petrópolis",
      title:
        "Turismo na Cidade Imperial cresce 15% com a chegada das frentes frias",
      img: "https://picsum.photos/seed/reg5/600/400",
      link: "noticia.html",
    },
    {
      tag: "Jornal da Barra",
      title:
        "Avenida das Américas passará por obras de recapeamento durante a madrugada",
      img: "https://picsum.photos/seed/reg6/600/400",
      link: "noticia.html",
    },
    {
      tag: "Rio de Janeiro",
      title:
        "Revitalização do Centro atrai novas empresas de tecnologia para a região portuária",
      img: "https://picsum.photos/seed/reg7/600/400",
      link: "noticia.html",
    },
    {
      tag: "Niterói",
      title:
        "Ponte Rio-Niterói terá esquema especial de trânsito para o feriado prolongado",
      img: "https://picsum.photos/seed/reg8/600/400",
      link: "noticia.html",
    },

    // Linha 3
    {
      tag: "Angra dos Reis",
      title:
        "Setor náutico espera movimentar R$ 50 milhões na alta temporada de verão",
      img: "https://picsum.photos/seed/reg9/600/400",
      link: "noticia.html",
    },
    {
      tag: "Macaé",
      title:
        "Novos campos de exploração de petróleo geram 5 mil empregos na região",
      img: "https://picsum.photos/seed/reg10/600/400",
      link: "noticia.html",
    },
    {
      tag: "Baixada Fluminense",
      title:
        "Nova unidade de pronto atendimento é inaugurada em Duque de Caxias",
      img: "https://picsum.photos/seed/reg11/600/400",
      link: "noticia.html",
    },
    {
      tag: "Cabo Frio",
      title:
        "Artesanato local ganha espaço de destaque na orla da Praia do Forte",
      img: "https://picsum.photos/seed/reg12/600/400",
      link: "noticia.html",
    },
  ],

  servidor: [
    {
      title: "Plano de saúde vai subir menos que o solicitado pela operadora",
      excerpt:
        "O Biovida Saúde, plano de saúde do Sindicato Nacional dos Aposentados, Pensionistas e Idosos, terá um reajuste menor do que o mercado esperava após intervenção regulatória...",
      img: "https://picsum.photos/seed/serv1/800/500",
      link: "noticia.html",
      category: "Servidor",
      time: "Há 2 horas",
    },
    {
      title: "Câmara aprova redução de tributos para indústria química",
      excerpt:
        "A Câmara dos Deputados aprovou o projeto de lei complementar que estabelece alíquotas de transição menores para as indústrias do setor...",
      img: "https://picsum.photos/seed/serv2/800/500",
      link: "noticia.html",
      category: "Servidor",
      time: "Há 3 horas",
    },
    {
      title: "Servidores defendem redução de jornada com escala 5x2",
      excerpt:
        "As principais centrais sindicais do país divulgaram nota pública em defesa da redução da jornada de trabalho e da adoção do modelo...",
      img: "https://picsum.photos/seed/serv3/800/500",
      link: "noticia.html",
      category: "Servidor",
      time: "Há 4 horas",
    },
    {
      title: "Governo anuncia reajuste para servidores públicos",
      excerpt:
        "O Ministério da Economia confirmou reajuste de 5% para servidores públicos federais a partir de março...",
      img: "https://picsum.photos/seed/serv4/800/500",
      link: "noticia.html",
      category: "Servidor",
      time: "Há 5 horas",
    },
  ],

  // Regional Pages (detailed data)
  nacional: [
    {
      category: "Política",
      categoryColor: "#D20A11",
      title: "STF forma maioria favorável à mudança na Lei das Estatais",
      excerpt:
        "Ministros do Supremo Tribunal Federal sinalizaram apoio à alteração que permite nomeações políticas em empresas estatais.",
      image: "https://picsum.photos/seed/nac1/800/450",
      author: "Correio da Manhã",
      time: "Há 2 horas",
      featured: true,
    },
    {
      category: "Economia",
      categoryColor: "#0056b3",
      title: "Congresso aprova projeto de reforma tributária em primeiro turno",
      excerpt:
        "A proposta foi aprovada com 290 votos a favor e 140 contra. O texto agora segue para o Senado.",
      image: "https://picsum.photos/seed/nac2/400/300",
      author: "Correio da Manhã",
      time: "Há 3 horas",
      featured: false,
    },
    {
      category: "Justiça",
      categoryColor: "#ff6b00",
      title: "Operação da PF encontra dinheiro jogado pela janela em SC",
      excerpt:
        "Polícia Federal investiga esquema de corrupção envolvendo autoridades públicas.",
      image: "https://picsum.photos/seed/nac3/400/300",
      author: "Correio da Manhã",
      time: "Há 4 horas",
      featured: false,
    },
    {
      category: "Brasil",
      categoryColor: "#009c3b",
      title: "Governo anuncia novo programa de infraestrutura",
      excerpt:
        "Programa prevê investimentos de R$ 300 bilhões em obras em todo o país.",
      image: "https://picsum.photos/seed/nac4/400/300",
      author: "Correio da Manhã",
      time: "Há 5 horas",
      featured: false,
    },
    {
      category: "Cultura",
      categoryColor: "#6a1b9a",
      title: "Festival de cinema de Gramado anuncia programação",
      excerpt: "Evento vai receber produções de mais de 20 países este ano.",
      image: "https://picsum.photos/seed/nac5/400/300",
      author: "Correio da Manhã",
      time: "Há 6 horas",
      featured: false,
    },
    {
      category: "Esportes",
      categoryColor: "#00853e",
      title: "Seleção brasileira convocada para eliminatórias",
      excerpt: "Técnico anuncia lista de 23 jogadores para os próximos jogos.",
      image: "https://picsum.photos/seed/nac6/400/300",
      author: "Correio da Manhã",
      time: "Há 7 horas",
      featured: false,
    },
  ],

  "sao-paulo": [
    {
      category: "Política",
      categoryColor: "#194466",
      title: "Governo de SP anuncia novo pacote de investimentos",
      excerpt:
        "Estado vai destinar R$ 50 bilhões para obras de infraestrutura nos próximos 4 anos.",
      image: "https://picsum.photos/seed/sp1/800/450",
      author: "Correio SP",
      time: "Há 1 hora",
      featured: true,
    },
    {
      category: "Segurança",
      categoryColor: "#194466",
      title: "Polícia Militar intensifica operações em rodovias",
      excerpt: "Ação visa reduzir número de roubos de cargas em todo o estado.",
      image: "https://picsum.photos/seed/sp2/400/300",
      author: "Correio SP",
      time: "Há 2 horas",
      featured: false,
    },
    {
      category: "Transporte",
      categoryColor: "#194466",
      title: "Metrô de São Paulo anuncia expansão da linha 6",
      excerpt: "Novas estações devem ser entregues até o final de 2025.",
      image: "https://picsum.photos/seed/sp3/400/300",
      author: "Correio SP",
      time: "Há 3 horas",
      featured: false,
    },
    {
      category: "Educação",
      categoryColor: "#194466",
      title: "Nota do Enem 2024 é divulgada pelo MEC",
      excerpt: "Estudantes de São Paulo concentram as melhores notas do país.",
      image: "https://picsum.photos/seed/sp4/400/300",
      author: "Correio SP",
      time: "Há 4 horas",
      featured: false,
    },
    {
      category: "Saúde",
      categoryColor: "#194466",
      title: "Hospital das Clínicas inaugura nova ala",
      excerpt: "Unidade vai atender pacientes de alta complexidade.",
      image: "https://picsum.photos/seed/sp5/400/300",
      author: "Correio SP",
      time: "Há 5 horas",
      featured: false,
    },
    {
      category: "Economia",
      categoryColor: "#194466",
      title: "Tecnologia em São Paulo atrai investimentos",
      excerpt:
        "Estado se consolida como maior polo de startups da América Latina.",
      image: "https://picsum.photos/seed/sp6/400/300",
      author: "Correio SP",
      time: "Há 6 horas",
      featured: false,
    },
  ],

  "distrito-federal": [
    {
      category: "Política",
      categoryColor: "#1a3a5c",
      title: "Governo do DF anuncia reajuste para servidores",
      excerpt:
        "Reajuste de 8% será aplicado a partir de março para todos os servidores do distrito.",
      image: "https://picsum.photos/seed/df1/800/450",
      author: "Correio DF",
      time: "Há 1 hora",
      featured: true,
    },
    {
      category: "Segurança",
      categoryColor: "#1a3a5c",
      title: "Novas faixas exclusivas melhoram trânsito no Eixo Monumental",
      excerpt: "Medida reduz em 30% o tempo de deslocamento na capital.",
      image: "https://picsum.photos/seed/df2/400/300",
      author: "Correio DF",
      time: "Há 2 horas",
      featured: false,
    },
    {
      category: "Cultura",
      categoryColor: "#1a3a5c",
      title: "Brasília recebe festival internacional de cinema em abril",
      excerpt:
        "Evento vai contar com presença de diretores de mais de 30 países.",
      image: "https://picsum.photos/seed/df3/400/300",
      author: "Correio DF",
      time: "Há 3 horas",
      featured: false,
    },
    {
      category: "Obras",
      categoryColor: "#1a3a5c",
      title: "Obras de infraestrutura avançam em regiões administrativas",
      excerpt: "Governo investe R$ 2 bilhões em obras no Distrito Federal.",
      image: "https://picsum.photos/seed/df4/400/300",
      author: "Correio DF",
      time: "Há 4 horas",
      featured: false,
    },
    {
      category: "Saúde",
      categoryColor: "#1a3a5c",
      title: "Novo hospital regional é inaugurado em Ceilândia",
      excerpt: "Unidade vai atender mais de 100 mil pacientes.",
      image: "https://picsum.photos/seed/df5/400/300",
      author: "Correio DF",
      time: "Há 5 horas",
      featured: false,
    },
    {
      category: "Educação",
      categoryColor: "#1a3a5c",
      title: "Universidade de Brasília expande vagas",
      excerpt: "Reitoria anuncia 2.000 novas vagas para o próximo vestibular.",
      image: "https://picsum.photos/seed/df6/400/300",
      author: "Correio DF",
      time: "Há 6 horas",
      featured: false,
    },
  ],

  "sul-fluminense": [
    {
      category: "Economia",
      categoryColor: "#1e6ba8",
      title: "Polo industrial de Resende recebe investimento de R$ 2 bilhões",
      excerpt: "Empresa automobilística anuncia nova fábrica na região.",
      image: "https://picsum.photos/seed/sf1/800/450",
      author: "Correio Sul Fluminense",
      time: "Há 1 hora",
      featured: true,
    },
    {
      category: "Obras",
      categoryColor: "#1e6ba8",
      title: "Prefeitura de Volta Redonda inaugura novo complexo esportivo",
      excerpt: "Espaço vai beneficiar mais de 50 mil moradores.",
      image: "https://picsum.photos/seed/sf2/400/300",
      author: "Correio Sul Fluminense",
      time: "Há 2 horas",
      featured: false,
    },
    {
      category: "Segurança",
      categoryColor: "#1e6ba8",
      title: "Polícia Militar intensifica patrulhamento na Via Dutra",
      excerpt: "Ação visa reduzir assaltos em rodovia.",
      image: "https://picsum.photos/seed/sf3/400/300",
      author: "Correio Sul Fluminense",
      time: "Há 3 horas",
      featured: false,
    },
    {
      category: "Educação",
      categoryColor: "#1e6ba8",
      title: "Escola técnica é inaugurada em Barra Mansa",
      excerpt: "Unidade vai oferecer cursos técnicos para jovens.",
      image: "https://picsum.photos/seed/sf4/400/300",
      author: "Correio Sul Fluminense",
      time: "Há 4 horas",
      featured: false,
    },
    {
      category: "Saúde",
      categoryColor: "#1e6ba8",
      title: "Hospital regional recebe novos equipamentos",
      excerpt: "Investimento de R$ 5 milhões melhora atendimento.",
      image: "https://picsum.photos/seed/sf5/400/300",
      author: "Correio Sul Fluminense",
      time: "Há 5 horas",
      featured: false,
    },
    {
      category: "Cultura",
      categoryColor: "#1e6ba8",
      title: "Festival de cultura popular atrai turistas",
      excerpt: "Evento celebra tradições da região.",
      image: "https://picsum.photos/seed/sf6/400/300",
      author: "Correio Sul Fluminense",
      time: "Há 6 horas",
      featured: false,
    },
  ],

  petropolis: [
    {
      category: "Turismo",
      categoryColor: "#d60000",
      title: "Turismo na Cidade Imperial cresce 15% no primeiro trimestre",
      excerpt: "Chegada de frentes frias impulsiona visitação em Petrópolis.",
      image: "https://picsum.photos/seed/pet1/800/450",
      author: "Correio Petropolitano",
      time: "Há 1 hora",
      featured: true,
    },
    {
      category: "Segurança",
      categoryColor: "#d60000",
      title: "Defesa Civil emite alerta para chuvas fortes",
      excerpt: "Previsão é de tempestades para os próximos dias.",
      image: "https://picsum.photos/seed/pet2/400/300",
      author: "Correio Petropolitano",
      time: "Há 2 horas",
      featured: false,
    },
    {
      category: "Cultura",
      categoryColor: "#d60000",
      title: "Museu Imperial recebe exposição inédita",
      excerpt: "Peças históricas são exibidas pela primeira vez.",
      image: "https://picsum.photos/seed/pet3/400/300",
      author: "Correio Petropolitano",
      time: "Há 3 horas",
      featured: false,
    },
    {
      category: "Obras",
      categoryColor: "#d60000",
      title: "Prefeitura anuncia recuperação de estradas turísticas",
      excerpt: "Obras vão melhorar acesso a pontos turísticos.",
      image: "https://picsum.photos/seed/pet4/400/300",
      author: "Correio Petropolitano",
      time: "Há 4 horas",
      featured: false,
    },
    {
      category: "Educação",
      categoryColor: "#d60000",
      title: "Escola da serra é reconhecida nacionalmente",
      excerpt: "Instituição recebe prêmio de excelência.",
      image: "https://picsum.photos/seed/pet5/400/300",
      author: "Correio Petropolitano",
      time: "Há 5 horas",
      featured: false,
    },
    {
      category: "Economia",
      categoryColor: "#d60000",
      title: "Comércio local registra alta nas vendas",
      excerpt: "Lojistas comemoram faturamento recorde.",
      image: "https://picsum.photos/seed/pet6/400/300",
      author: "Correio Petropolitano",
      time: "Há 6 horas",
      featured: false,
    },
  ],

  "jornal-da-barra": [
    {
      category: "Obras",
      categoryColor: "#0066cc",
      title: "Avenida das Américas passará por obras de recapeamento",
      excerpt:
        "Trabalho será realizado durante a madrugada para evitar transtornos.",
      image: "https://picsum.photos/seed/bar1/800/450",
      author: "Jornal da Barra",
      time: "Há 1 hora",
      featured: true,
    },
    {
      category: "Segurança",
      categoryColor: "#0066cc",
      title: "Polícia Militar intensifica patrulhamento na orla",
      excerpt: "Ação visa combater assaltos a turistas.",
      image: "https://picsum.photos/seed/bar2/400/300",
      author: "Jornal da Barra",
      time: "Há 2 horas",
      featured: false,
    },
    {
      category: "Transporte",
      categoryColor: "#0066cc",
      title: "BRT Transolímpico anuncia expansão",
      excerpt: "Novas estações serão inauguradas em 2025.",
      image: "https://picsum.photos/seed/bar3/400/300",
      author: "Jornal da Barra",
      time: "Há 3 horas",
      featured: false,
    },
    {
      category: "Cultura",
      categoryColor: "#0066cc",
      title: "Feira de artesanato da Barra atrai visitantes",
      excerpt: "Evento reúne mais de 100 expositores.",
      image: "https://picsum.photos/seed/bar4/400/300",
      author: "Jornal da Barra",
      time: "Há 4 horas",
      featured: false,
    },
    {
      category: "Esportes",
      categoryColor: "#0066cc",
      title: "Clubes da Barra anunciam novas parcerias",
      excerpt: "Investimentos vão beneficiar atletas locais.",
      image: "https://picsum.photos/seed/bar5/400/300",
      author: "Jornal da Barra",
      time: "Há 5 horas",
      featured: false,
    },
    {
      category: "Economia",
      categoryColor: "#0066cc",
      title: "Comércio local se prepara para alta temporada",
      excerpt: "Lojistas investem em reformas e contratações.",
      image: "https://picsum.photos/seed/bar6/400/300",
      author: "Jornal da Barra",
      time: "Há 6 horas",
      featured: false,
    },
  ],

  "jornal-turismo": [
    {
      category: "Turismo",
      categoryColor: "#ff6600",
      title: "Rio de Janeiro registra recorde de turistas no carnaval",
      excerpt:
        "Cidade recebeu mais de 2 milhões de visitantes durante a festa.",
      image: "https://picsum.photos/seed/tur1/800/450",
      author: "Jornal de Turismo",
      time: "Há 1 hora",
      featured: true,
    },
    {
      category: "Turismo",
      categoryColor: "#ff6600",
      title: "Novo roteiro turístico é lançado em Paraty",
      excerpt: "Pacote inclui passeios de barco e trilhas.",
      image: "https://picsum.photos/seed/tur2/400/300",
      author: "Jornal de Turismo",
      time: "Há 2 horas",
      featured: false,
    },
    {
      category: "Turismo",
      categoryColor: "#ff6600",
      title: "Pousadas de Búzios investem em reformas",
      excerpt: "Estabelecimentos se preparam para alta temporada.",
      image: "https://picsum.photos/seed/tur3/400/300",
      author: "Jornal de Turismo",
      time: "Há 3 horas",
      featured: false,
    },
    {
      category: "Turismo",
      categoryColor: "#ff6600",
      title: "Airlines anuncham novos voos para o Brasil",
      excerpt: "Companhias aéreas expandem rotas internacionais.",
      image: "https://picsum.photos/seed/tur4/400/300",
      author: "Jornal de Turismo",
      time: "Há 4 horas",
      featured: false,
    },
    {
      category: "Turismo",
      categoryColor: "#ff6600",
      title: "Hotelaria fluminense registra alta occupancy",
      excerpt: "Média de ocupação supera 80% no verão.",
      image: "https://picsum.photos/seed/tur5/400/300",
      author: "Jornal de Turismo",
      time: "Há 5 horas",
      featured: false,
    },
    {
      category: "Turismo",
      categoryColor: "#ff6600",
      title: "Agências de viagem promovem pacotes para inverno",
      excerpt: "Destinos nacionais são os mais procurados.",
      image: "https://picsum.photos/seed/tur6/400/300",
      author: "Jornal de Turismo",
      time: "Há 6 horas",
      featured: false,
    },
  ],

  campinas: [
    {
      category: "Economia",
      categoryColor: "#006633",
      title: "Campinas atrai nova fábrica de tecnologia",
      excerpt: "Empresa vai investir R$ 500 milhões e gerar 1.500 empregos.",
      image: "https://picsum.photos/seed/camp1/800/450",
      author: "Correio Campinas",
      time: "Há 1 hora",
      featured: true,
    },
    {
      category: "Transporte",
      categoryColor: "#006633",
      title: "Viracopos anuncia expansão de terminal",
      excerpt: "Obra vai aumentar capacidade de passageiros.",
      image: "https://picsum.photos/seed/camp2/400/300",
      author: "Correio Campinas",
      time: "Há 2 horas",
      featured: false,
    },
    {
      category: "Educação",
      categoryColor: "#006633",
      title: "Unicamp é reconhecida como melhor universidade do estado",
      excerpt: "Instituição lidera ranking nacional de ensino.",
      image: "https://picsum.photos/seed/camp3/400/300",
      author: "Correio Campinas",
      time: "Há 3 horas",
      featured: false,
    },
    {
      category: "Saúde",
      categoryColor: "#006633",
      title: "Hospital de Clínicas inaugura novo centro oncológico",
      excerpt: "Unidade vai tratar pacientes de toda a região.",
      image: "https://picsum.photos/seed/camp4/400/300",
      author: "Correio Campinas",
      time: "Há 4 horas",
      featured: false,
    },
    {
      category: "Cultura",
      categoryColor: "#006633",
      title: "Festival de teatro de Campinas atrai milhares",
      excerpt: "Evento conta com peças de todo o país.",
      image: "https://picsum.photos/seed/camp5/400/300",
      author: "Correio Campinas",
      time: "Há 5 horas",
      featured: false,
    },
    {
      category: "Esportes",
      categoryColor: "#006633",
      title: "Guarani encerra contratações para temporada",
      excerpt: "Clube anuncia novos reforços para o campeonato.",
      image: "https://picsum.photos/seed/camp6/400/300",
      author: "Correio Campinas",
      time: "Há 6 horas",
      featured: false,
    },
  ],
};

const columnPlaceholderAuthors = [
  "Equipe CM",
  "Redação Especial",
  "Análise CM",
  "Editor Convidado",
  "Colunista Especial",
  "Correspondente CM",
];

const columnHighlightTopics = [
  "os bastidores da semana",
  "os movimentos mais recentes da editoria",
  "o cenário que influencia a cobertura atual",
];

const columnArticleTopics = [
  "as leituras do dia",
  "os desdobramentos mais relevantes",
  "os efeitos práticos desta agenda",
  "o impacto no noticiário regional",
  "as articulações que ganharam força",
  "o que muda para os próximos dias",
  "os personagens que concentram a atenção",
  "os sinais que o mercado acompanha",
  "a pauta que entrou no radar da redação",
];

function getSharedColumnCatalog() {
  if (
    typeof window !== "undefined" &&
    window.CMColumns &&
    typeof window.CMColumns.getCatalog === "function"
  ) {
    return window.CMColumns.getCatalog();
  }

  return [];
}

function buildColumnDescription(label) {
  return `${label} reúne análises, bastidores e leituras editoriais do Correio da Manhã para a edição digital do portal.`;
}

function buildColumnItem(column, columnIndex, itemIndex, type) {
  const topicList =
    type === "highlight" ? columnHighlightTopics : columnArticleTopics;
  const topic = topicList[itemIndex % topicList.length];
  const author =
    columnPlaceholderAuthors[(columnIndex + itemIndex) % columnPlaceholderAuthors.length];
  const itemNumber = itemIndex + 1;
  const itemId = `${column.slug}-${type}-${itemNumber}`;
  const titlePrefix = type === "highlight" ? "Panorama" : "Análise";
  const title = `${column.label}: ${titlePrefix} sobre ${topic}`;
  const excerpt = `${column.label} destaca ${topic} com foco editorial, leitura de contexto e acompanhamento permanente da redação.`;

  return {
    id: itemId,
    title,
    excerpt,
    img: `https://picsum.photos/seed/${column.slug}-${type}-${itemNumber}/600/400`,
    link: `noticia.html?id=${itemId}&product=nacional`,
    author,
    role: "Colunista",
    time: `Há ${itemNumber + 1} horas`,
    category: column.label,
    avatarImage: "",
  };
}

function buildColumnsPayload() {
  return getSharedColumnCatalog().map((column, columnIndex) => ({
    slug: column.slug,
    label: column.label,
    description: buildColumnDescription(column.label),
    highlights: Array.from({ length: 3 }, (_, itemIndex) =>
      buildColumnItem(column, columnIndex, itemIndex, "highlight"),
    ),
    articles: Array.from({ length: 9 }, (_, itemIndex) =>
      buildColumnItem(column, columnIndex, itemIndex, "article"),
    ),
  }));
}

portalMockData.colunas = buildColumnsPayload();
portalMockData.colunasBySlug = Object.fromEntries(
  portalMockData.colunas.map((column) => [column.slug, column]),
);

const portalProductMap = {
  politica: "nacional",
  justica: "nacional",
  economia: "nacional",
  esportes: "nacional",
  cultura: "nacional",
  brasil: "nacional",
  mundo: "nacional",
  opiniao: "nacional",
  nacional: "nacional",
  "sao-paulo": "sp",
  "distrito-federal": "df",
  "sul-fluminense": "sulfluminense",
  petropolis: "petropolis",
  campinas: "campinas",
  "jornal-da-barra": "barra",
  "jornal-turismo": "turismo",
  servidor: "servidor",
};

const articleAliasMap = {
  "noticia-001": "justica-1",
  "noticia-002": "politica-1",
  "noticia-004": "brasil-1",
  "noticia-005": "brasil-2",
  "noticia-006": "politica-2",
  "noticia-007": "economia-1",
  "noticia-008": "esportes-1",
};

function buildArticleBody(item) {
  const excerpt = item.excerpt || "Conteúdo indisponível.";
  const author = item.author || "Correio da Manhã";
  const category = item.category || item.tag || "Notícias";

  return `
    <p>${excerpt}</p>
    <p>${author} acompanha os desdobramentos de ${category.toLowerCase()} e reúne os principais pontos desta cobertura para a edição digital do portal.</p>
    <h2>Contexto</h2>
    <p>${excerpt}</p>
    <p>Novas atualizações serão incorporadas assim que houver publicação complementar na mesma editoria.</p>
  `;
}

function buildArticleId(sectionKey, index, item) {
  const explicitId =
    typeof item.id === "string" && item.id.trim() !== ""
      ? item.id.trim()
      : null;

  return explicitId || `${sectionKey}-${index + 1}`;
}

function buildColumnArticleBody(column, item) {
  const excerpt = item.excerpt || "Conteúdo indisponível.";
  const author = item.author || "Correio da Manhã";

  return `
    <p>${excerpt}</p>
    <p>${author} apresenta os principais pontos de ${column.label.toLowerCase()} para a edição digital, com leitura de contexto e atualização permanente.</p>
    <h2>Leitura editorial</h2>
    <p>${column.description}</p>
    <p>Novos textos desta coluna serão incorporados conforme a pauta avance ao longo do dia.</p>
  `;
}

function registerArticle(articles, articleId, item, product, contentBuilder = null) {
  const date = item.date || "10 de março de 2026";
  const image =
    item.image ||
    item.img ||
    "https://placehold.co/1200x600/1a3a5c/ffffff?text=Imagem+de+Destaque";
  const title = item.title || "Sem título";

  articles[articleId] = {
    id: articleId,
    category: item.category || item.tag || "Notícias",
    title,
    subtitle: item.excerpt || "",
    author: item.author || "Correio da Manhã",
    date,
    time: item.time || "",
    image,
    content:
      typeof contentBuilder === "function"
        ? contentBuilder(item)
        : item.content || buildArticleBody(item),
    product,
  };

  if (!item.id) {
    item.id = articleId;
  }

  if (!item.link || item.link === "noticia.html") {
    item.link = `noticia.html?id=${articleId}&product=${product}`;
  }
}

function normalizeArticleData() {
  const articles = {};

  Object.entries(portalMockData).forEach(([sectionKey, items]) => {
    if (!Array.isArray(items)) return;
    if (sectionKey === "colunas") return;

    const product = portalProductMap[sectionKey] || "nacional";

    items.forEach((item, index) => {
      const articleId = buildArticleId(sectionKey, index, item);
      registerArticle(articles, articleId, item, product);
    });
  });

  if (Array.isArray(portalMockData.colunas)) {
    portalMockData.colunas.forEach((column) => {
      const allItems = [...(column.highlights || []), ...(column.articles || [])];

      allItems.forEach((item, index) => {
        const articleId = item.id || `${column.slug}-item-${index + 1}`;
        registerArticle(articles, articleId, item, "nacional", (articleItem) =>
          buildColumnArticleBody(column, articleItem),
        );
      });
    });
  }

  portalMockData.articles = articles;
  portalMockData.articleAliases = articleAliasMap;
}

normalizeArticleData();
