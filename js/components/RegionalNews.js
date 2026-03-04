/**
 * Regional News Component
 * News grid layout for regional pages
 * Newspaper Style Design
 */

const RegionalNews = {
  // Mock news data for demonstration
  mockNews: {
    nacional: [
      {
        id: 1,
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
        id: 2,
        category: "Economia",
        categoryColor: "#0056b3",
        title:
          "Congresso aprova projeto de reforma tributária em primeiro turno",
        excerpt:
          "A proposta foi aprovada com 290 votos a favor e 140 contra. O texto agora segue para o Senado.",
        image: "https://picsum.photos/seed/nac2/400/300",
        author: "Correio da Manhã",
        time: "Há 3 horas",
        featured: false,
      },
      {
        id: 3,
        category: "Justiça",
        categoryColor: "#ff6b00",
        title: "Operação da PF finds dinheiro jogado pela janela em SC",
        excerpt:
          "Polícia Federal investiga esquema de corrupção envolvendo autoridades públicas.",
        image: "https://picsum.photos/seed/nac3/400/300",
        author: "Correio da Manhã",
        time: "Há 4 horas",
        featured: false,
      },
      {
        id: 4,
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
        id: 5,
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
        id: 6,
        category: "Esportes",
        categoryColor: "#00853e",
        title: "Seleção brasileira convocada para eliminatórias",
        excerpt:
          "Técnico anuncia lista de 23 jogadores para os próximos jogos.",
        image: "https://picsum.photos/seed/nac6/400/300",
        author: "Correio da Manhã",
        time: "Há 7 horas",
        featured: false,
      },
    ],
    sp: [
      {
        id: 1,
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
        id: 2,
        category: "Segurança",
        categoryColor: "#194466",
        title: "Polícia Civil desbarata quadrilha de roubos de cargas",
        excerpt:
          "Operação em Campinas resultou na prisão de 8 suspeitos e recuperação de mercadorias.",
        image: "https://picsum.photos/seed/sp2/400/300",
        author: "Correio SP",
        time: "Há 2 horas",
        featured: false,
      },
      {
        id: 3,
        category: "Transporte",
        categoryColor: "#194466",
        title: "Metrô de São Paulo inaugura nova estação",
        excerpt:
          "Estação Jardim Utinga entra em operação hoje e beneficia mais de 100 mil pessoas.",
        image: "https://picsum.photos/seed/sp3/400/300",
        author: "Correio SP",
        time: "Há 3 horas",
        featured: false,
      },
      {
        id: 4,
        category: "Educação",
        categoryColor: "#194466",
        title: "USP anuncia novo campus na Zona Leste",
        excerpt:
          "Universidade vai inaugurar unidade em Itaim Paulista com 50 vagas para 2026.",
        image: "https://picsum.photos/seed/sp4/400/300",
        author: "Correio SP",
        time: "Há 4 horas",
        featured: false,
      },
      {
        id: 5,
        category: "Economia",
        categoryColor: "#194466",
        title: "Bolsa de valores de São Paulo bate recorde",
        excerpt:
          "Ibovespa fecha em nova máxima histórica impulsionado por commodities.",
        image: "https://picsum.photos/seed/sp5/400/300",
        author: "Correio SP",
        time: "Há 5 horas",
        featured: false,
      },
      {
        id: 6,
        category: "Saúde",
        categoryColor: "#194466",
        title: "Hospital das Clínicas inaugura nova ala",
        excerpt:
          "Unidade conta com 200 leitos novos e equipamentos de última geração.",
        image: "https://picsum.photos/seed/sp6/400/300",
        author: "Correio SP",
        time: "Há 6 horas",
        featured: false,
      },
    ],
    df: [
      {
        id: 1,
        category: "Política",
        categoryColor: "#1E73BE",
        title: "Governo do DF anuncia reajuste para servidores",
        excerpt:
          "Servidores públicos vão receber aumento de 8% a partir do próximo mês.",
        image: "https://picsum.photos/seed/df1/800/450",
        author: "Correio DF",
        time: "Há 1 hora",
        featured: true,
      },
      {
        id: 2,
        category: "Mobilidade",
        categoryColor: "#1E73BE",
        title: "Novas faixas exclusivas melhoram trânsito no Eixo",
        excerpt: "Medida reduz em 30% o tempo de deslocamento na W3 Norte.",
        image: "https://picsum.photos/seed/df2/400/300",
        author: "Correio DF",
        time: "Há 2 horas",
        featured: false,
      },
      {
        id: 3,
        category: "Educação",
        categoryColor: "#1E73BE",
        title: "UnB aprova novos cursos para 2026",
        excerpt:
          "Universidade de Brasília vai oferecer 15 novas graduações a partir do próximo ano.",
        image: "https://picsum.photos/seed/df3/400/300",
        author: "Correio DF",
        time: "Há 3 horas",
        featured: false,
      },
      {
        id: 4,
        category: "Turismo",
        categoryColor: "#1E73BE",
        title: "Brasília recebe festival internacional de cinema",
        excerpt:
          "Evento vai acontecer em abril e contará com produções de 30 países.",
        image: "https://picsum.photos/seed/df4/400/300",
        author: "Correio DF",
        time: "Há 4 horas",
        featured: false,
      },
      {
        id: 5,
        category: "Segurança",
        categoryColor: "#1E73BE",
        title: "PCDF instala novas câmeras de segurança",
        excerpt:
          "Equipamentos serão instalados em pontos estratégicos do Plano Piloto.",
        image: "https://picsum.photos/seed/df5/400/300",
        author: "Correio DF",
        time: "Há 5 horas",
        featured: false,
      },
      {
        id: 6,
        category: "Obras",
        categoryColor: "#1E73BE",
        title: "Avanço das obras de infraestrutura nas RA's",
        excerpt:
          "Regiões administrativas recebem investimentos em saneamento e pavimentação.",
        image: "https://picsum.photos/seed/df6/400/300",
        author: "Correio DF",
        time: "Há 6 horas",
        featured: false,
      },
    ],
    sulfluminense: [
      {
        id: 1,
        category: "Economia",
        categoryColor: "#003366",
        title: "Polo industrial de Resende recebe investimento de R$ 2 bilhões",
        excerpt:
          "Montadora anuncia expansão da fábrica e geração de 500 novos empregos.",
        image: "https://picsum.photos/seed/sf1/800/450",
        author: "Correio Sul Fluminense",
        time: "Há 1 hora",
        featured: true,
      },
      {
        id: 2,
        category: "Saúde",
        categoryColor: "#003366",
        title: "Volta Redonda amplia horário de postos de saúde",
        excerpt: "Unidades básicas de saúde passam a funcionar aos sábados.",
        image: "https://picsum.photos/seed/sf2/400/300",
        author: "Correio Sul Fluminense",
        time: "Há 2 horas",
        featured: false,
      },
      {
        id: 3,
        category: "Agricultura",
        categoryColor: "#003366",
        title: "Barra Mansa promove feira de agronegócios",
        excerpt: "Evento reúne produtores de toda a região Sul Fluminense.",
        image: "https://picsum.photos/seed/sf3/400/300",
        author: "Correio Sul Fluminense",
        time: "Há 3 horas",
        featured: false,
      },
      {
        id: 4,
        category: "Indústria",
        categoryColor: "#003366",
        title: "Novas indústrias de tecnologia se instalam em Porto Real",
        excerpt: "Parque tecnológico atrai empresas de todo o país.",
        image: "https://picsum.photos/seed/sf4/400/300",
        author: "Correio Sul Fluminense",
        time: "Há 4 horas",
        featured: false,
      },
      {
        id: 5,
        category: "Educação",
        categoryColor: "#003366",
        title: "Escola técnica de Volta Redonda inaugura novo bloco",
        excerpt: "Unidade oferece cursos técnicos na área de metalurgia.",
        image: "https://picsum.photos/seed/sf5/400/300",
        author: "Correio Sul Fluminense",
        time: "Há 5 horas",
        featured: false,
      },
      {
        id: 6,
        category: "Turismo",
        categoryColor: "#003366",
        title: "Turismo rural cresce na região",
        excerpt: "Fazendas hotéis registram aumento de 40% nas reservas.",
        image: "https://picsum.photos/seed/sf6/400/300",
        author: "Correio Sul Fluminense",
        time: "Há 6 horas",
        featured: false,
      },
    ],
    petropolitano: [
      {
        id: 1,
        category: "Turismo",
        categoryColor: "#D20A11",
        title: "Turismo na Cidade Imperial cresce 15% com frentes frias",
        excerpt:
          "Petrópolis registra ocupação recorde em hotéis e pousadas durante o inverno.",
        image: "https://picsum.photos/seed/pet1/800/450",
        author: "Correio Petropolitano",
        time: "Há 1 hora",
        featured: true,
      },
      {
        id: 2,
        category: "Cultura",
        categoryColor: "#D20A11",
        title: "Restauro de palácios históricos movimenta economia local",
        excerpt: "Obras geram empregos e atrairão mais turistas à região.",
        image: "https://picsum.photos/seed/pet2/400/300",
        author: "Correio Petropolitano",
        time: "Há 2 horas",
        featured: false,
      },
      {
        id: 3,
        category: "Eventos",
        categoryColor: "#D20A11",
        title: "Festival de Inverno confirma atrações nacionais",
        excerpt:
          "Evento em julho vai receber grandes nomes da música brasileira.",
        image: "https://picsum.photos/seed/pet3/400/300",
        author: "Correio Petropolitano",
        time: "Há 3 horas",
        featured: false,
      },
      {
        id: 4,
        category: "Comércio",
        categoryColor: "#D20A11",
        title: "Polo têxtil da Rua Teresa lança coleção de inverno",
        excerpt:
          "Lojas de fábrica apresentam novidades da estação com preços reduzidos.",
        image: "https://picsum.photos/seed/pet4/400/300",
        author: "Correio Petropolitano",
        time: "Há 4 horas",
        featured: false,
      },
      {
        id: 5,
        category: "Segurança",
        categoryColor: "#D20A11",
        title: "PM intensifica patrulhamento no Centro Histórico",
        excerpt: "Medida visa aumentar segurança de turistas e moradores.",
        image: "https://picsum.photos/seed/pet5/400/300",
        author: "Correio Petropolitano",
        time: "Há 5 horas",
        featured: false,
      },
      {
        id: 6,
        category: "Educação",
        categoryColor: "#D20A11",
        title: "Universidade Federal expande campus em Petrópolis",
        excerpt: "Nova unidade vai oferecer cursos de turismo e hotelaria.",
        image: "https://picsum.photos/seed/pet6/400/300",
        author: "Correio Petropolitano",
        time: "Há 6 horas",
        featured: false,
      },
    ],
    servidor: [
      {
        id: 1,
        category: "Servidor",
        categoryColor: "#003366",
        title: "Plano de saúde vai subir menos que o solicitado pela operadora",
        excerpt:
          "O Biovida Saúde terá um reajuste menor do que o mercado esperava após intervenção regulatória da ANS.",
        image: "https://picsum.photos/seed/serv1/800/450",
        author: "Jornal do Servidor",
        time: "Há 1 hora",
        featured: true,
      },
      {
        id: 2,
        category: "Carreira",
        categoryColor: "#003366",
        title: "Concurso público abre 500 vagas para área técnica",
        excerpt:
          "Inscrições começam na próxima semana e salários chegam a R$ 8 mil.",
        image: "https://picsum.photos/seed/serv2/400/300",
        author: "Jornal do Servidor",
        time: "Há 2 horas",
        featured: false,
      },
      {
        id: 3,
        category: "Aposentadoria",
        categoryColor: "#003366",
        title: "Governo regulamenta novas regras de aposentadoria",
        excerpt:
          "Mudanças afetam servidores federais e estaduais de todo o país.",
        image: "https://picsum.photos/seed/serv3/400/300",
        author: "Jornal do Servidor",
        time: "Há 3 horas",
        featured: false,
      },
      {
        id: 4,
        category: "Salário",
        categoryColor: "#003366",
        title: "Servidores federais discutem reajuste salarial",
        excerpt: "Sindicatos propõem aumento de 10% para compensar inflação.",
        image: "https://picsum.photos/seed/serv4/400/300",
        author: "Jornal do Servidor",
        time: "Há 4 horas",
        featured: false,
      },
      {
        id: 5,
        category: "Treinamento",
        categoryColor: "#003366",
        title: "Governo lança programa de capacitação profissional",
        excerpt:
          "Servidores terão acesso a cursos gratuitos em diversas áreas.",
        image: "https://picsum.photos/seed/serv5/400/300",
        author: "Jornal do Servidor",
        time: "Há 5 horas",
        featured: false,
      },
      {
        id: 6,
        category: "Benefícios",
        categoryColor: "#003366",
        title: "Auxílio-alimentação tem valor reajustado",
        excerpt: "Benefício passa a custar R$ 30 mais a partir de março.",
        image: "https://picsum.photos/seed/serv6/400/300",
        author: "Jornal do Servidor",
        time: "Há 6 horas",
        featured: false,
      },
    ],
    barra: [
      {
        id: 1,
        category: "Urbano",
        categoryColor: "#1A1A1A",
        title: "Avenida das Américas passará por obras de recapeamento",
        excerpt:
          "Prefeitura anuncia intervenção em 10km da avenida mais importante da Barra.",
        image: "https://picsum.photos/seed/bar1/800/450",
        author: "Jornal da Barra",
        time: "Há 1 hora",
        featured: true,
      },
      {
        id: 2,
        category: "Cultura",
        categoryColor: "#1A1A1A",
        title: "Novo centro cultural é inaugurado na Barra da Tijuca",
        excerpt: "Espaço vai oferecer exposições, shows e oficinas gratuitas.",
        image: "https://picsum.photos/seed/bar2/400/300",
        author: "Jornal da Barra",
        time: "Há 2 horas",
        featured: false,
      },
      {
        id: 3,
        category: "Gastronomia",
        categoryColor: "#1A1A1A",
        title: "Festival Gastronômico da Barra espera 50 mil visitantes",
        excerpt:
          "Evento reúne os melhores restaurantes da região em finalize de semana.",
        image: "https://picsum.photos/seed/bar3/400/300",
        author: "Jornal da Barra",
        time: "Há 3 horas",
        featured: false,
      },
      {
        id: 4,
        category: "Segurança",
        categoryColor: "#1A1A1A",
        title: "Segurança é reforçada na orla com novas câmeras",
        excerpt:
          "Equipamentos de monitoramento serão instalados do Posto 6 ao Recreio.",
        image: "https://picsum.photos/seed/bar4/400/300",
        author: "Jornal da Barra",
        time: "Há 4 horas",
        featured: false,
      },
      {
        id: 5,
        category: "Esportes",
        categoryColor: "#1A1A1A",
        title: "Arena da Barra sedia novos eventos esportivos",
        excerpt: "Local vai receber jogos de vôlei e basquete neste semestre.",
        image: "https://picsum.photos/seed/bar5/400/300",
        author: "Jornal da Barra",
        time: "Há 5 horas",
        featured: false,
      },
      {
        id: 6,
        category: "Meio Ambiente",
        categoryColor: "#1A1A1A",
        title: "Projeto de reflorestamento da Lagoa é aprovado",
        excerpt:
          "Iniciativa vai plantar 5 mil árvores ao redor da lagoa da Barra.",
        image: "https://picsum.photos/seed/bar6/400/300",
        author: "Jornal da Barra",
        time: "Há 6 horas",
        featured: false,
      },
    ],
    mundo: [
      {
        id: 1,
        category: "Internacional",
        categoryColor: "#003366",
        title: "União Europeia anuncia novas sanções econômicas",
        excerpt:
          "Líderes europeus aprovam medidas que impactam relações comerciais globais.",
        image: "https://picsum.photos/seed/mundo1/800/450",
        author: "Mundo",
        time: "Há 1 hora",
        featured: true,
      },
      {
        id: 2,
        category: "América",
        categoryColor: "#003366",
        title: "EUA anuncia nova política de imigração",
        excerpt: "Governo americano revela mudanças no processo de vistos.",
        image: "https://picsum.photos/seed/mundo2/400/300",
        author: "Mundo",
        time: "Há 2 horas",
        featured: false,
      },
      {
        id: 3,
        category: "Ásia",
        categoryColor: "#003366",
        title: "China reforça parcerias com países da América Latina",
        excerpt: "Acordos comerciais serão assinados na cúpula BRICS.",
        image: "https://picsum.photos/seed/mundo3/400/300",
        author: "Mundo",
        time: "Há 3 horas",
        featured: false,
      },
      {
        id: 4,
        category: "África",
        categoryColor: "#003366",
        title: "Países africanos firmam acordo de cooperação econômica",
        excerpt: "Bloco africano busca maior integração regional.",
        image: "https://picsum.photos/seed/mundo4/400/300",
        author: "Mundo",
        time: "Há 4 horas",
        featured: false,
      },
      {
        id: 5,
        category: "Europa",
        categoryColor: "#003366",
        title: "Reino Unido realiza eleições antecipadas",
        excerpt:
          "Primeiro-ministro convoca eleições gerais para o próximo mês.",
        image: "https://picsum.photos/seed/mundo5/400/300",
        author: "Mundo",
        time: "Há 5 horas",
        featured: false,
      },
      {
        id: 6,
        category: "Oriente Médio",
        categoryColor: "#003366",
        title: "Acordo de paz no Oriente Médio entra em nova fase",
        excerpt: "Nações unidas anunciam progresso nas negociações.",
        image: "https://picsum.photos/seed/mundo6/400/300",
        author: "Mundo",
        time: "Há 6 horas",
        featured: false,
      },
    ],
    campinas: [
      {
        id: 1,
        category: "Economia",
        categoryColor: "#003366",
        title: "Polo tecnológico de Campinas atrai investimento de R$ 1 bilhão",
        excerpt: "Parque industrial receberá 15 novas empresas de tecnologia.",
        image: "https://picsum.photos/seed/camp1/800/450",
        author: "Correio Campinas",
        time: "Há 1 hora",
        featured: true,
      },
      {
        id: 2,
        category: "Educação",
        categoryColor: "#003366",
        title: "Unicamp anuncia novo campus na região norte",
        excerpt: "Universidade vai oferecer cursos de engenharia e computação.",
        image: "https://picsum.photos/seed/camp2/400/300",
        author: "Correio Campinas",
        time: "Há 2 horas",
        featured: false,
      },
      {
        id: 3,
        category: "Agricultura",
        categoryColor: "#003366",
        title: "Feira de agropecuária movimenta economia regional",
        excerpt: "Evento reúne produtores de todo o estado de São Paulo.",
        image: "https://picsum.photos/seed/camp3/400/300",
        author: "Correio Campinas",
        time: "Há 3 horas",
        featured: false,
      },
      {
        id: 4,
        category: "Indústria",
        categoryColor: "#003366",
        title: "General Motors anuncia expansão da fábrica em Campinas",
        excerpt: "Montadora vai produzir novos modelos elétricos.",
        image: "https://picsum.photos/seed/camp4/400/300",
        author: "Correio Campinas",
        time: "Há 4 horas",
        featured: false,
      },
      {
        id: 5,
        category: "Transporte",
        categoryColor: "#003366",
        title: "Viracopos bate recorde de movimentação em dezembro",
        excerpt: "Aeroporto registrou 2 milhões de passageiros no último mês.",
        image: "https://picsum.photos/seed/camp5/400/300",
        author: "Correio Campinas",
        time: "Há 5 horas",
        featured: false,
      },
      {
        id: 6,
        category: "Saúde",
        categoryColor: "#003366",
        title: "Hospital de Clínicas inaugura nova ala de emergência",
        excerpt: "Unidade conta com 100 novos leitos e equipamentos modernos.",
        image: "https://picsum.photos/seed/camp6/400/300",
        author: "Correio Campinas",
        time: "Há 6 horas",
        featured: false,
      },
    ],
    turismo: [
      {
        id: 1,
        category: "Turismo",
        categoryColor: "#00853e",
        title: "Retomada do turismo de negócios supera expectativas para 2026",
        excerpt:
          "Setor hoteleiro registra ocupação recorde em capitais brasileiras.",
        image: "https://picsum.photos/seed/turismo1/800/450",
        author: "Jornal de Turismo",
        time: "Há 1 hora",
        featured: true,
      },
      {
        id: 2,
        category: "Aviação",
        categoryColor: "#00853e",
        title: "Novas rotas aéreas ligam o Brasil a destinos sustentáveis",
        excerpt: "Companhias aéreas investem em voos para ecodestinos.",
        image: "https://picsum.photos/seed/turismo2/400/300",
        author: "Jornal de Turismo",
        time: "Há 2 horas",
        featured: false,
      },
      {
        id: 3,
        category: "Ecoturismo",
        categoryColor: "#00853e",
        title: "Ecoturismo cresce 40% nas regiões serranas e litorâneas",
        excerpt: "Pousadas e hotéis rurais registram aumento de demanda.",
        image: "https://picsum.photos/seed/turismo3/400/300",
        author: "Jornal de Turismo",
        time: "Há 3 horas",
        featured: false,
      },
      {
        id: 4,
        category: "Destinos",
        categoryColor: "#00853e",
        title:
          "Guia de destinos: Os lugares mais cobiçados para as férias de julho",
        excerpt: "Praias do Nordeste e serras gaúchas lideram preferências.",
        image: "https://picsum.photos/seed/turismo4/400/300",
        author: "Jornal de Turismo",
        time: "Há 4 horas",
        featured: false,
      },
      {
        id: 5,
        category: "Internacional",
        categoryColor: "#00853e",
        title:
          "Brasil recebe recorde de turistas estrangeiros no primeiro trimestre",
        excerpt:
          "Número de visitantes internacionais cresceu 25% em relação ao ano anterior.",
        image: "https://picsum.photos/seed/turismo5/400/300",
        author: "Jornal de Turismo",
        time: "Há 5 horas",
        featured: false,
      },
      {
        id: 6,
        category: "Negócios",
        categoryColor: "#00853e",
        title: "Fórum Internacional de Turismo acontece em São Paulo",
        excerpt:
          "Evento reúne especialistas de todo o mundo para discutir o setor.",
        image: "https://picsum.photos/seed/turismo6/400/300",
        author: "Jornal de Turismo",
        time: "Há 6 horas",
        featured: false,
      },
    ],
  },

  render(region = "nacional") {
    const newsContainer = document.getElementById("regional-news-container");
    if (!newsContainer) return;

    const news = this.mockNews[region] || this.mockNews.nacional;
    const featuredArticle = news.find((article) => article.featured) || news[0];
    const gridArticles = news
      .filter((article) => !article.featured)
      .slice(0, 6);

    newsContainer.innerHTML = this.getTemplate(featuredArticle, gridArticles);
  },

  getTemplate(featuredArticle, gridArticles) {
    return `
      <!-- Hero Article -->
      <article class="regional-hero-article">
        <a href="noticia.html?id=${featuredArticle.id}" class="regional-hero-link">
          <div class="regional-hero-image">
            <img src="${featuredArticle.image}" alt="${featuredArticle.title}"
                 onerror="this.src='https://placehold.co/800x450/f0f0f0/999999?text=Imagem+Indisponível'">
            <span class="regional-category-tag" style="--category-color: ${featuredArticle.categoryColor}; border-left-color: ${featuredArticle.categoryColor};">
              ${featuredArticle.category}
            </span>
          </div>
          <div class="regional-hero-content">
            <h2 class="regional-hero-title">${featuredArticle.title}</h2>
            <p class="regional-hero-excerpt">${featuredArticle.excerpt}</p>
            <div class="regional-article-meta">
              <span class="regional-author">${featuredArticle.author}</span>
              <span class="regional-time">${featuredArticle.time}</span>
            </div>
          </div>
        </a>
      </article>

      <!-- News Grid -->
      <div class="regional-news-grid">
        ${gridArticles
          .map(
            (article) => `
          <article class="regional-news-card">
            <a href="noticia.html?id=${article.id}" class="regional-card-link">
              <div class="regional-card-image">
                <img src="${article.image}" alt="${article.title}"
                     onerror="this.src='https://placehold.co/400x300/f0f0f0/999999?text=Sem+Imagem'">
                <span class="regional-category-tag" style="--category-color: ${article.categoryColor}; border-left-color: ${article.categoryColor};">
                  ${article.category}
                </span>
              </div>
              <div class="regional-card-content">
                <h3 class="regional-card-title" style="--category-color: ${article.categoryColor};">${article.title}</h3>
                <p class="regional-card-excerpt">${article.excerpt}</p>
                <div class="regional-article-meta">
                  <span class="regional-author">${article.author}</span>
                  <span class="regional-time">${article.time}</span>
                </div>
              </div>
            </a>
          </article>
        `,
          )
          .join("")}
      </div>

      <!-- Advertisement Banner -->
      <div class="ad-placeholder ad-970x150">
        Espaço Publicitário - 970x150
      </div>
    `;
  },
};

window.RegionalNews = RegionalNews;
