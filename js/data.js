// Dados extraídos da planilha Metas Produtos Omnibees
const roadmapData = {
    priorizados: {
        meta1: {
            beehive: [
                { text: "Migrar hoteis Hsystem", finishing: true },
                { text: "Taxas com períodos", finishing: true },
                { text: "Juniors: Limite de crianças do quarto por segmento de idades", finishing: false },
                { text: "Whitelabel: pequenos ajustes", finishing: false },
                { text: "Melhorias técnicas", technical: true },
                { text: "Separar OB.API", finishing: false },
                { text: "Migração Extranet CVC - hoteis partilhados", finishing: false },
                { text: "BUGS", technical: true }
            ],
            beehiveUi: [
                { text: "2FA", finishing: true },
                { text: "Renovar templates de email obsoletos", finishing: true },
                { text: "Migrações para HTML5 - PMS ACTIViTY", finishing: true },
                { text: "Migração para HTML5 - Tour operators", finishing: false },
                { text: "Melhorar detalhes dados de pagamento", finishing: false },
                { text: "Permitir o mesmo email entre guests e TPIs", finishing: false },
                { text: "Melhorias UX/UI", technical: true },
                { text: "[Ofertas e Ofertas MP] - Possibilitar periodos superiores a 6 meses", finishing: false },
                { text: "Preços fora dos limites", finishing: false },
                { text: "Melhorias técnicas: Angular 19, sync MFE, etc.", technical: true }
            ],
            beeconnect: [
                { text: "OHIP", finishing: true },
                { text: "API Gestão de Filiais CVC", finishing: false },
                { text: "Hilton - suporte a piloto e alterações", finishing: false },
                { text: "Partners API CRS (suporte a Amadeus CRS)", finishing: false },
                { text: "HBOOK - Receber CPF", finishing: false },
                { text: "HBOOK - Receber informação de Parcelamentos", finishing: false },
                { text: "Receber Montante do estorno nos dados de pagamento (bee2pay)", finishing: false },
                { text: "Concept paginação", finishing: false },
                { text: "Desligar livecheck Accor: despegar pull todas", finishing: false },
                { text: "Melhorias técnicas", technical: true },
                { text: "Migrações PMS3 Para ES (Ex.: mealplan iberostar)", finishing: false }
            ],
            beechannel: [
                { text: "Expedia Reservation Suites", finishing: true },
                { text: "Jumbonline", finishing: true },
                { text: "Despegar amountb4tax", finishing: false },
                { text: "Ctrip - upgrade até final de dezembro", finishing: false },
                { text: "Juniors: Limite de crianças do quarto por segmento de idades", finishing: false },
                { text: "Taxas com períodos", finishing: true },
                { text: "TMC acede ao myportal para ver reservas SAPCONCUR", finishing: false },
                { text: "Melhorias técnicas: Cache 2 níveis", technical: true }
            ],
            beedirect: [
                { text: "PIX Bee2Pay", finishing: true },
                { text: "Subdomínio", finishing: true },
                { text: "Upsell do quarto", finishing: false },
                { text: "Enviar dados de pagamento Adyen", finishing: false },
                { text: "Unificação dos motores", finishing: false },
                { text: "Upgrade entre níveis de loyalty", finishing: false },
                { text: "Lost reservations para 3DS e PIX", finishing: false },
                { text: "Períodos nas taxas", finishing: false },
                { text: "Tarifas exclusivas para códigos promo e grupo", finishing: false },
                { text: "Personalização pagamento parcelado", finishing: false }
            ],
            visao360: [
                { text: "Superapp", finishing: false },
                { text: "Beewizard para facilitar cadastro de propriedades", finishing: false },
                { text: "Beewizard: automapping com API Silverlight", finishing: false }
            ],
            beeprice: []
        },
        meta2: {
            beehive: [
                { text: "Juniors: Limite de crianças do quarto por segmento de idades", finishing: true },
                { text: "Extranet Despegar - derivadas TI das tarifas AP omnibees", finishing: false },
                { text: "Whitelabel: pequenos ajustes", finishing: false },
                { text: "Definir WL da propriedade quando o PMS criar tarifas e quartos", finishing: false },
                { text: "Melhorias técnicas", technical: true },
                { text: "Separar OB.API", finishing: false },
                { text: "Migração Extranet CVC - hoteis partilhados", finishing: false },
                { text: "BUGS", technical: true }
            ],
            beehiveUi: [
                { text: "Renovar templates de email obsoletos", finishing: true },
                { text: "Migrações para HTML5 - PMS ACTIViTY", finishing: true },
                { text: "Migração para HTML5 - Tour operators", finishing: true },
                { text: "[Propriedades] - Disponibilizar novas categorias para classificação de propriedades", finishing: false }
            ],
            beeconnect: [
                { text: "Hilton - suporte a piloto + outros desenvolvimentos por priorizar", finishing: false },
                { text: "Partners API CRS (suporte a Amadeus CRS)", finishing: false },
                { text: "OHIP - suporte a piloto", finishing: false },
                { text: "IHG - suporte a piloto", finishing: false },
                { text: "API Gestão de Filiais CVC", finishing: false },
                { text: "HBOOK - Receber CPF", finishing: false },
                { text: "HBOOK - Receber informação de Parcelamentos", finishing: false },
                { text: "Receber Montante do estorno nos dados de pagamento", finishing: false },
                { text: "Partners API (RMS) - Ler reservas para Climber e LightHouse", finishing: false },
                { text: "Melhorias técnicas", technical: true },
                { text: "Migrações PMS3 Para ES (Ex.: mealplan iberostar)", finishing: false }
            ],
            beechannel: [
                { text: "Ctrip - upgrade até final de dezembro", finishing: true },
                { text: "Expedia - Melhoria na API de promoções", finishing: false },
                { text: "Despegar push - retenção impostos", finishing: false },
                { text: "Juniors: Limite de crianças do quarto por segmento de idades", finishing: true },
                { text: "Taxas com períodos", finishing: true },
                { text: "Modificar dados de hóspedes do quarto", finishing: false },
                { text: "Despegar pull - retenção de impostos (retirar imposto retido)", finishing: false }
            ],
            beedirect: [],
            visao360: [],
            beeprice: []
        },
        meta3: {
            beehive: [
                { text: "RATEMIX", finishing: false }
            ],
            beehiveUi: [
                { text: "Inovação e usabilidade: fecho de vendas", finishing: false },
                { text: "Câmbios de moeda na distribuição (USD - MXN) Myportal", finishing: false },
                { text: "Câmbios de moeda na distribuição (USD - MXN) RCS", finishing: false }
            ],
            beeconnect: [
                { text: "Hilton - suporte piloto", finishing: false },
                { text: "Partners API CRS (suporte a Amadeus CRS)", finishing: false },
                { text: "IHG - suporte a piloto", finishing: false },
                { text: "Câmbio de moeda na distribuição (USD - MXN)", finishing: false },
                { text: "Totvs - mapear mais informação nas reservas (políticas, ofertas, promo, etc.)", finishing: false },
                { text: "TOTVS Agrupador da reserva", finishing: false },
                { text: "Paraty e canal de origem", finishing: false }
            ],
            beechannel: [
                { text: "Criação de quartos e tarifas na Booking", finishing: false },
                { text: "API de mapeamentos canais (AS IS)", finishing: false },
                { text: "Booking.com - Payment clarity Package 2.0", finishing: false },
                { text: "Paraty e canal origem", finishing: false },
                { text: "Câmbio de preços na distribuição (MXN)", finishing: false },
                { text: "RATEMIX", finishing: false }
            ],
            beedirect: [],
            visao360: [],
            beeprice: []
        },
        future: {
            beehive: [
                { text: "Maior Integração Niara - Meio de pagamento PIX para central de reservas", finishing: false },
                { text: "Melhorias códigos promocionais (Amarante T3)", finishing: false }
            ],
            beehiveUi: [],
            beeconnect: [
                { text: "Partners API - mapeamentos de canal - mapeamentos automáticos", finishing: false },
                { text: "HBOOK - receber extras na reserva", finishing: false },
                { text: "OHIP: dados de pagamento", finishing: false },
                { text: "Climber e Lighthouse na Partners API", finishing: false }
            ],
            beechannel: [
                { text: "Maior Integração Niara - Meio de pagamento PIX para central de reservas", finishing: false },
                { text: "Melhorias códigos promocionais (Amarante T3)", finishing: false }
            ],
            beedirect: [],
            visao360: [],
            beeprice: []
        }
    },
    naoPriorizados: [
        { team: "Beehive", text: "Distribuição Corporativa 2.0" },
        { team: "Beehive", text: "Ofertas Mobile" },
        { team: "Beehive", text: "Melhoria nas Ofertas" },
        { team: "Beehive", text: "Melhorias no módulo de Código Promocional (Niara - consome da Omnibees)" },
        { team: "Beehive", text: "Separação da ob.api" },
        { team: "Beehive", text: "Obter o WL da propriedade quando o PMS cria tarifas e quartos" },
        { team: "Beehive", text: "[Ofertas e Ofertas MP] - Possibilitar configurações superiores a 6 meses em um único período" },
        { team: "Beehive", text: "SEGURANÇA: Colocar o Cloudflare Captcha no Recover Password" },
        { team: "Beehive UI", text: "Simplificação da utilização do Omnibees" }
    ]
};

// Product configuration
const products = {
    beehive: { name: "Beehive", icon: "🔧", key: "beehive" },
    beehiveUi: { name: "Beehive UI", icon: "🎨", key: "beehive-ui" },
    beeconnect: { name: "BeeConnect", icon: "🔗", key: "beeconnect" },
    beechannel: { name: "BeeChannel & Bee2Bee", icon: "📡", key: "beechannel" },
    beedirect: { name: "BeeDirect", icon: "🎯", key: "beedirect" },
    visao360: { name: "Visão 360", icon: "👁️", key: "visao360" },
    beeprice: { name: "BeePrice", icon: "💰", key: "beeprice" }
};

const metaLabels = {
    meta1: "META 1",
    meta2: "META 2",
    meta3: "META 3",
    future: "META FUTURA"
};
