let idiomaAtual = "en";

const textosIdioma = {
    en: {
        tituloPagina: "João Carlos | Portfolio",
        botaoIdioma: "PT-BR",
        navHome: "Home",
        navAbout: "About",
        navWorks: "Works",
        navContact: "Contact",
        saudacaoTopo: "Hello, I'm João Carlos,",
        cargoTopo: "Full Stack <br> Developer",
        descricaoTopo: "Developer focused on Backend, Data Engineering, and building scalable, resilient applications. Experienced in system integration, relational databases, and transforming complex data into efficient digital solutions.",
        botaoContatoTopo: "Get in touch",
        tituloSobre: "About",
        paragrafoSobre: "I am currently pursuing a degree in Systems Analysis and Development at SENAI. Prior to my undergraduate studies, I completed a Technical Degree in Systems Development at SENAI, where I built a strong foundation in programming logic, software architecture, object-oriented programming, and full-stack application development through hands-on, collaborative projects.<br><br>Currently, I work as a Data Engineering Intern at 2RP Net, focusing on data pipelines, systems integration, data modeling, and information governance. Passionate about Backend Development, Relational Databases, and Data Engineering, I am constantly expanding my technical repertoire with modern tools like Java, Spring Boot, and Docker to deliver high-performance, scalable software solutions.",
        tituloSkills: "Technical Skills",
        tituloWorks: "Works",
        paragrafoWorks: "Throughout my academic journey at SENAI and personal studies, I have developed a diverse range of practical projects that strengthened my technical problem-solving and engineering skills. From full-stack management systems and RESTful APIs to interactive landing pages and educational platforms, each project allowed me to apply best practices in clean code, database modeling, responsive web design, and agile teamwork. Below are some of the key projects I have built.",
        tituloCard1: "AquaBalance System",
        descCard1: "AquaBalance is a full-stack smart water management platform designed to monitor, analyze, and control consumption in real time—promoting resource conservation, operational efficiency, and environmental sustainability through interactive dashboards.",
        tituloCard2: "Bibliotech Landing Page",
        descCard2: "Bibliotech is a modern digital library platform and landing page designed to showcase book catalogs for rental, streamline reader access, and promote local literary and cultural events with an intuitive user interface.",
        tituloCard3: "SESI Estudos Project",
        descCard3: "SESI Estudos is an educational web application created to help students organize their academic routine—allowing them to track exams, assignments, study materials, and schedules seamlessly in one centralized hub.",
        tituloCard4: "Catholic Site",
        descCard4: "Catholic Site is a full-stack web platform under active development that brings together traditional prayers, liturgical readings, and spiritual resources to support and enrich daily faith practice.",
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
        tituloPagina: "Portfólio do João Carlos",
        botaoIdioma: "EN",
        navHome: "Início",
        navAbout: "Sobre",
        navWorks: "Projetos",
        navContact: "Contato",
        saudacaoTopo: "Olá, sou o João Carlos,",
        cargoTopo: "Desenvolvedor <br> Full Stack",
        descricaoTopo: "Desenvolvedor focado em Backend, Engenharia de Dados e construção de aplicações escaláveis e resilientes. Experiência em integração de sistemas, bancos de dados relacionais e transformação de dados complexos em soluções digitais eficientes.",
        botaoContatoTopo: "Entre em contato",
        tituloSobre: "Sobre Mim",
        paragrafoSobre: "Sou estudante de graduação em Análise e Desenvolvimento de Sistemas pelo SENAI. Antes da graduação, concluí o curso técnico em Desenvolvimento de Sistemas também pelo SENAI, onde construí uma base sólida em lógica de programação, arquitetura de software, programação orientada a objetos e desenvolvimento de aplicações full stack por meio de projetos práticos e colaborativos.<br><br>Atualmente atuo como estagiário em Engenharia de Dados na 2RP Net, trabalhando diretamente com pipelines de dados, integração de sistemas, modelagem e organização estratégica de informações. Tenho grande interesse em Desenvolvimento Backend, Bancos de Dados Relacionais e Engenharia de Dados, buscando constantemente evoluir tecnicamente com ferramentas modernas como Java, Spring Boot e Docker para entregar soluções de alta performance.",
        tituloSkills: "Habilidades Técnicas",
        tituloWorks: "Projetos",
        paragrafoWorks: "Ao longo da minha formação no SENAI e estudos práticos, desenvolvi diversos projetos que consolidaram minha base técnica e capacidade de resolução de problemas. Desde sistemas completos de gerenciamento e APIs RESTful até landing pages interativas e plataformas educacionais, cada projeto permitiu aplicar na prática conceitos de código limpo, modelagem de banco de dados, responsividade e trabalho ágil em equipe. Confira abaixo alguns dos principais projetos que desenvolvi.",
        tituloCard1: "Sistema AquaBalance",
        descCard1: "O AquaBalance é uma plataforma full stack inteligente de gestão hídrica projetada para monitorar, analisar e controlar o consumo de água em tempo real, promovendo economia de recursos, eficiência operacional e sustentabilidade através de dashboards interativos.",
        tituloCard2: "Landing Page Bibliotech",
        descCard2: "O Bibliotech é uma plataforma digital e landing page moderna para bibliotecas, desenvolvida para apresentar catálogos de livros para locação, facilitar o acesso dos leitores e divulgar eventos literários e culturais com uma interface intuitiva.",
        tituloCard3: "Projeto SESI Estudos",
        descCard3: "O SESI Estudos é uma aplicação web educacional criada para auxiliar estudantes na organização da rotina acadêmica, permitindo acompanhar provas, tarefas, materiais de estudo e cronogramas de forma prática e centralizada.",
        tituloCard4: "Catholic Site",
        descCard4: "O Catholic Site é uma plataforma web full stack em desenvolvimento que reúne orações tradicionais, leituras litúrgicas e recursos espirituais para apoiar e enriquecer a prática da fé no dia a dia.",
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
