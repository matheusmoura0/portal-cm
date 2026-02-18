// Base de dados simulada para Apresentação de Layout
const portalMockData = {
    politica: [
        { title: "Governo federal anuncia novo pacote de investimentos para infraestrutura no Sudeste", img: "https://picsum.photos/seed/pol1/600/400", link: "noticia.html" },
        { title: "Congresso entra em acordo e votação do novo marco fiscal é adiantada", img: "https://picsum.photos/seed/pol2/600/400", link: "noticia.html" },
        { title: "Partidos da base aliada discutem estratégias para as próximas eleições municipais", img: "https://picsum.photos/seed/pol3/600/400", link: "noticia.html" },
        { title: "Ministério da Fazenda revisa projeção de crescimento da economia para este ano", img: "https://picsum.photos/seed/pol4/600/400", link: "noticia.html" }
    ],
    justica: [
        { title: "STF forma maioria em julgamento histórico sobre direitos trabalhistas", img: "https://picsum.photos/seed/jus1/600/400", link: "noticia.html" },
        { title: "Operação da Polícia Federal desarticula esquema milionário de fraude fiscal", img: "https://picsum.photos/seed/jus2/600/400", link: "noticia.html" },
        { title: "Conselho Nacional de Justiça aprova novas metas para acelerar processos parados", img: "https://picsum.photos/seed/jus3/600/400", link: "noticia.html" },
        { title: "Ministério Público instaura inquérito para investigar desvios na saúde pública", img: "https://picsum.photos/seed/jus4/600/400", link: "noticia.html" }
    ],
    economia: [
        { title: "Ibovespa fecha em alta impulsionado por commodities e cenário externo", img: "https://picsum.photos/seed/eco1/600/400", link: "noticia.html" },
        { title: "Dólar recua para R$ 4,95 com otimismo sobre reforma tributária", img: "https://picsum.photos/seed/eco2/600/400", link: "noticia.html" },
        { title: "Banco Central sinaliza novo corte na taxa Selic para a próxima reunião", img: "https://picsum.photos/seed/eco3/600/400", link: "noticia.html" },
        { title: "Inflação desacelera em janeiro e fica abaixo da meta oficial", img: "https://picsum.photos/seed/eco4/600/400", link: "noticia.html" }
    ],
    esportes: [
        { title: "Seleção brasileira divulga lista de convocados para os amistosos na Europa", img: "https://picsum.photos/seed/esp1/600/400", link: "noticia.html" },
        { title: "Clássico termina empatado e mantém disputa acirrada pela liderança do campeonato", img: "https://picsum.photos/seed/esp2/600/400", link: "noticia.html" },
        { title: "Atleta brasileiro quebra recorde mundial na natação e garante ouro inédito", img: "https://picsum.photos/seed/esp3/600/400", link: "noticia.html" },
        { title: "Nova liga de basquete anuncia expansão para mais três capitais no próximo ano", img: "https://picsum.photos/seed/esp4/600/400", link: "noticia.html" }
    ],
    cultura: [
        { title: "Festival de cinema independente premia diretores estreantes em noite de gala", img: "https://picsum.photos/seed/cul1/600/400", link: "noticia.html" },
        { title: "Exposição imersiva sobre arte moderna atrai multidões no centro da cidade", img: "https://picsum.photos/seed/cul2/600/400", link: "noticia.html" },
        { title: "Banda icônica dos anos 90 anuncia turnê de reencontro com shows esgotados", img: "https://picsum.photos/seed/cul3/600/400", link: "noticia.html" },
        { title: "Bienal do Livro bate recorde histórico de público no primeiro fim de semana", img: "https://picsum.photos/seed/cul4/600/400", link: "noticia.html" }
    ],
    regionais: [
        // Linha 1
        { tag: "Nacional", title: "Novo programa de habitação popular pretende entregar 2 milhões de casas", img: "https://picsum.photos/seed/reg1/600/400", link: "noticia.html" },
        { tag: "São Paulo", title: "Prefeitura inaugura novo corredor de ônibus para desafogar trânsito na zona sul", img: "https://picsum.photos/seed/reg2/600/400", link: "noticia.html" },
        { tag: "Distrito Federal", title: "Governo do DF anuncia reajuste salarial para servidores da segurança pública", img: "https://picsum.photos/seed/reg3/600/400", link: "noticia.html" },
        { tag: "Sul Fluminense", title: "Polo industrial de Resende recebe investimento estrangeiro de R$ 2 bilhões", img: "https://picsum.photos/seed/reg4/600/400", link: "noticia.html" },
        
        // Linha 2
        { tag: "Petrópolis", title: "Turismo na Cidade Imperial cresce 15% com a chegada das frentes frias", img: "https://picsum.photos/seed/reg5/600/400", link: "noticia.html" },
        { tag: "Jornal da Barra", title: "Avenida das Américas passará por obras de recapeamento durante a madrugada", img: "https://picsum.photos/seed/reg6/600/400", link: "noticia.html" },
        { tag: "Rio de Janeiro", title: "Revitalização do Centro atrai novas empresas de tecnologia para a região portuária", img: "https://picsum.photos/seed/reg7/600/400", link: "noticia.html" },
        { tag: "Niterói", title: "Ponte Rio-Niterói terá esquema especial de trânsito para o feriado prolongado", img: "https://picsum.photos/seed/reg8/600/400", link: "noticia.html" },
        
        // Linha 3 (parcial ou cheia dependendo da tela)
        { tag: "Angra dos Reis", title: "Setor náutico espera movimentar R$ 50 milhões na alta temporada de verão", img: "https://picsum.photos/seed/reg9/600/400", link: "noticia.html" },
        { tag: "Macaé", title: "Novos campos de exploração de petróleo geram 5 mil empregos na região", img: "https://picsum.photos/seed/reg10/600/400", link: "noticia.html" },
        { tag: "Baixada Fluminense", title: "Nova unidade de pronto atendimento é inaugurada em Duque de Caxias", img: "https://picsum.photos/seed/reg11/600/400", link: "noticia.html" },
        { tag: "Cabo Frio", title: "Artesanato local ganha espaço de destaque na orla da Praia do Forte", img: "https://picsum.photos/seed/reg12/600/400", link: "noticia.html" }
    ],
    servidor: [
        { 
            title: "Plano de saúde vai subir menos que o solicitado pela operadora", 
            excerpt: "O Biovida Saúde, plano de saúde do Sindicato Nacional dos Aposentados, Pensionistas e Idosos, terá um reajuste menor do que o mercado esperava após intervenção regulatória...", 
            img: "https://picsum.photos/seed/serv1/800/500", 
            link: "noticia.html" 
        },
        { 
            title: "Câmara aprova redução de tributos para indústria química", 
            excerpt: "A Câmara dos Deputados aprovou o projeto de lei complementar que estabelece alíquotas de transição menores para as indústrias do setor...", 
            img: "https://picsum.photos/seed/serv2/800/500", 
            link: "noticia.html" 
        },
        { 
            title: "Servidores defendem redução de jornada com escala 5x2", 
            excerpt: "As principais centrais sindicais do país divulgaram nota pública em defesa da redução da jornada de trabalho e da adoção do modelo...", 
            img: "https://picsum.photos/seed/serv3/800/500", 
            link: "noticia.html" 
        }
    ]
};
