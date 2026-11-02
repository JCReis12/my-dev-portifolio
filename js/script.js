let idiomaAtual = "en";

const textosIdioma = {
    en: {
        tituloPagina: "João Carlos | Data & AI Engineer",
        botaoIdioma: "PT-BR",
        navHome: "Home",
        navAbout: "About",
        navWorks: "Works",
        navContact: "Contact",
        saudacaoTopo: "Hello, I'm João Carlos,",
        cargoTopo: "Data & AI <br> Engineer",
        descricaoTopo: "Focused on Data Engineering, AI Solutions (Autonomous AI Agents & LLMs), and scalable architectures—transforming complex data into intelligent automation and strategic value.",
        botaoContatoTopo: "Get in touch",
        tituloSobre: "About",
        paragrafoSobre: "Currently, I work in Data Engineering and AI at 2RP Net, providing specialized services for Banco Digio. In my daily routine, I work on building, analyzing, and processing data pipelines, performing data normalization and transactions in testing environments with PySpark and Databricks, and utilizing the Google Cloud Platform (GCP) ecosystem and BigQuery. Additionally, I design and plan data architectures and develop intelligent process automations powered by Autonomous AI Agents (Google ADK and Gemini/LLMs).<br><br>In the academic sphere, I am pursuing a degree in Systems Analysis and Development at SENAI, expanding my expertise in software engineering, Java APIs and backend systems, React frontends, and PostgreSQL relational databases. Prior to my undergraduate studies, I completed a Technical Degree in Systems Development also at SENAI, where I built a solid foundation developing backends with Java and Spring Boot, dynamic frontends using Vanilla JS (HTML, CSS, JavaScript), React, and Next.js, as well as modeling and normalizing relational databases with MySQL.",
        tituloSkills: "Technical Skills",
        tituloWorks: "Works",
        paragrafoWorks: "Throughout my trajectory in Data Engineering, Artificial Intelligence, and Software Development at SENAI, I have developed projects ranging from multi-agent AI systems integrated with cloud data warehouses to RESTful APIs, full-stack applications, and interactive interfaces. Below are some of the main projects from my portfolio.",
        tituloCard1: "Credit & Risk Analysis Multi-Agent",
        descCard1: "An intelligent multi-agent AI system built with Google ADK, Python, and BigQuery, designed to act as an automated credit and risk analysis assistant capable of querying analytical data and assisting in financial decision-making.",
        tituloCard2: "Smart Travel AI Agent",
        descCard2: "An autonomous travel assistant powered by AI Agents and Google ADK (in active development). Designed to provide end-to-end travel planning, including custom itineraries, real-time weather forecasts, hotel recommendations, and flight options.",
        tituloCard3: "Pet Management REST API",
        descCard3: "A backend management system developed with Java and Spring Boot integrated with a relational MySQL database, applying RESTful API design, data persistence, and layered architecture best practices.",
        tituloCard4: "React Components Study Platform",
        descCard4: "An interactive study platform built with React to explore and consolidate core modern frontend concepts, including componentization, state management, props, hooks, and dynamic UI rendering.",
        tituloCard5: "SENAI Space Arcade Game",
        descCard5: "A classic space shooter arcade game developed entirely with Vanilla JavaScript, focusing on programming logic, DOM/Canvas manipulation, collision detection, and real-time event loops.",
        tituloCard6: "Catholic Site",
        descCard6: "A full-stack web platform under active development that brings together traditional prayers, liturgical readings, and spiritual resources to support and enrich daily faith practice.",
        linkVerProjeto: "View Project",
        tituloContatoFooter: "Get in touch",
        labelNome: "Name:",
        placeholderNome: "Enter your name",
        labelEmail: "E-mail:",
        placeholderEmail: "Enter your e-mail",
        labelMensagem: "Leave your message:",
        placeholderMensagem: "Enter your message",
        botaoEnviar: "Send Message",
        alertaSucesso: "Message sent successfully!"
    },
    pt: {
        tituloPagina: "João Carlos | Engenharia de Dados & IA",
        botaoIdioma: "EN",
        navHome: "Início",
        navAbout: "Sobre",
        navWorks: "Projetos",
        navContact: "Contato",
        saudacaoTopo: "Olá, sou o João Carlos,",
        cargoTopo: "Data & AI <br> Engineer",
        descricaoTopo: "Focado em Engenharia de Dados, soluções de Inteligência Artificial (Agentes de IA & LLMs) e arquiteturas escaláveis — transformando dados complexos em automação inteligente e valor estratégico.",
        botaoContatoTopo: "Entre em contato",
        tituloSobre: "Sobre Mim",
        paragrafoSobre: "Atualmente atuo na área de Engenharia de Dados e IA pela 2RP Net, prestando serviços diretamente para o Banco Digio. No meu dia a dia, atuo na análise, construção e processamento de pipelines de dados, normalização e transação de dados em testes com PySpark e Databricks, além do uso de ferramentas do ecossistema Google Cloud (GCP) e BigQuery. Também participo do planejamento e desenvolvimento de arquiteturas e da criação de automações inteligentes de processos utilizando Agentes de IA (Google ADK e Gemini/LLMs).<br><br>No âmbito acadêmico, curso a graduação em Análise e Desenvolvimento de Sistemas pelo SENAI, aprofundando conhecimentos em engenharia de software, criação de APIs e backends em Java, frontends modernos com React e bancos de dados relacionais em PostgreSQL. Antes da graduação, concluí o curso técnico em Desenvolvimento de Sistemas também pelo SENAI, onde construí uma base sólida desenvolvendo aplicações backend em Java com Spring Boot, frontends em Vanilla JS (HTML, CSS e JS), React e Next.js, além da modelagem e normalização de bancos de dados SQL em MySQL.",
        tituloSkills: "Habilidades Técnicas",
        tituloWorks: "Projetos",
        paragrafoWorks: "Ao longo da minha trajetória em Engenharia de Dados, Inteligência Artificial e Desenvolvimento de Sistemas no SENAI, desenvolvi projetos que vão desde sistemas multiagentes de IA integrados a Data Warehouses em nuvem até APIs RESTful, aplicações full stack e interfaces interativas. Confira abaixo alguns dos principais projetos do meu portfólio.",
        tituloCard1: "Multi-Agente de Análise de Crédito e Risco",
        descCard1: "Sistema inteligente baseado em Agentes de IA desenvolvido com Google ADK, Python e BigQuery, projetado para atuar como um assistente automatizado de análise de crédito e risco, consultando dados analíticos e auxiliando na tomada de decisão.",
        tituloCard2: "Smart Travel AI Agent",
        descCard2: "Assistente autônomo de viagens baseado em Agentes de IA com Google ADK (em desenvolvimento). Projetado para oferecer suporte completo ao viajante, gerando roteiros personalizados, previsões climáticas, sugestões de hotéis e informações de voos.",
        tituloCard3: "API REST de Controle de Pets",
        descCard3: "Sistema backend de gerenciamento desenvolvido em Java com Spring Boot e integrado ao banco de dados relacional MySQL, aplicando boas práticas de arquitetura em camadas, persistência de dados e construção de APIs RESTful.",
        tituloCard4: "Plataforma de Estudos em React",
        descCard4: "Aplicação interativa construída com React para explorar e consolidar na prática os principais pilares do framework, incluindo componentização, gerenciamento de estado, props, hooks e renderização dinâmica de interfaces.",
        tituloCard5: "SENAI Space Arcade Game",
        descCard5: "Jogo estilo arcade de naves espaciais desenvolvido inteiramente com JavaScript puro (Vanilla JS), focado em lógica de programação, manipulação de eventos em tempo real, detecção de colisões e animações dinâmicas.",
        tituloCard6: "Catholic Site",
        descCard6: "Plataforma web full stack em desenvolvimento que reúne orações tradicionais, leituras litúrgicas e recursos espirituais para apoiar e facilitar a prática da fé no dia a dia.",
        linkVerProjeto: "Ver Projeto",
        tituloContatoFooter: "Entre em contato",
        labelNome: "Nome:",
        placeholderNome: "Digite seu nome",
        labelEmail: "E-mail:",
        placeholderEmail: "Digite seu e-mail",
        labelMensagem: "Deixe sua mensagem:",
        placeholderMensagem: "Digite sua mensagem",
        botaoEnviar: "Enviar Mensagem",
        alertaSucesso: "Mensagem enviada com sucesso!"
    }
};

function atualizarTextos() {
    const t = textosIdioma[idiomaAtual];

    document.documentElement.lang = idiomaAtual === "en" ? "en" : "pt-br";
    document.title = t.tituloPagina;

    document.getElementById("botaoIdioma").innerText = t.botaoIdioma;
    document.getElementById("navHome").innerText = t.navHome;
    document.getElementById("navAbout").innerText = t.navAbout;
    document.getElementById("navWorks").innerText = t.navWorks;
    document.getElementById("navContact").innerText = t.navContact;

    document.getElementById("saudacaoTopo").innerText = t.saudacaoTopo;
    document.getElementById("cargoTopo").innerHTML = t.cargoTopo;
    document.getElementById("descricaoTopo").innerText = t.descricaoTopo;
    document.getElementById("botaoContatoTopo").innerText = t.botaoContatoTopo;

    document.getElementById("tituloSobre").innerText = t.tituloSobre;
    document.getElementById("paragrafoSobre").innerHTML = t.paragrafoSobre;
    document.getElementById("tituloSkills").innerText = t.tituloSkills;

    document.getElementById("tituloWorks").innerText = t.tituloWorks;
    document.getElementById("paragrafoWorks").innerText = t.paragrafoWorks;

    document.getElementById("tituloCard1").innerText = t.tituloCard1;
    document.getElementById("descCard1").innerText = t.descCard1;
    document.getElementById("tituloCard2").innerText = t.tituloCard2;
    document.getElementById("descCard2").innerText = t.descCard2;
    document.getElementById("tituloCard3").innerText = t.tituloCard3;
    document.getElementById("descCard3").innerText = t.descCard3;
    document.getElementById("tituloCard4").innerText = t.tituloCard4;
    document.getElementById("descCard4").innerText = t.descCard4;
    document.getElementById("tituloCard5").innerText = t.tituloCard5;
    document.getElementById("descCard5").innerText = t.descCard5;
    document.getElementById("tituloCard6").innerText = t.tituloCard6;
    document.getElementById("descCard6").innerText = t.descCard6;

    const botoesVerProjeto = document.querySelectorAll(".linkVerProjeto");
    botoesVerProjeto.forEach((link) => {
        link.innerText = t.linkVerProjeto;
    });

    document.getElementById("tituloContatoFooter").innerText = t.tituloContatoFooter;
    document.getElementById("labelNome").innerText = t.labelNome;
    document.getElementById("nome").placeholder = t.placeholderNome;
    document.getElementById("labelEmail").innerText = t.labelEmail;
    document.getElementById("email").placeholder = t.placeholderEmail;
    document.getElementById("labelMensagem").innerText = t.labelMensagem;
    document.getElementById("mensagem").placeholder = t.placeholderMensagem;
    document.getElementById("enviar").innerText = t.botaoEnviar;
}

function alternarIdioma() {
    idiomaAtual = idiomaAtual === "en" ? "pt" : "en";
    atualizarTextos();
}

function enviar() {
    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("mensagem").value = "";

    alert(textosIdioma[idiomaAtual].alertaSucesso);
}

document.addEventListener("DOMContentLoaded", atualizarTextos);
