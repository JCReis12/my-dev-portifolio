/* Dados do portfólio (conteúdo transcrito do protótipo) */
const ATTRS=[
 ["AI & AGENTIC SYSTEMS",92,"Modelos Foundation, Engenharia de Prompt, RAG avançado, Agentes Autônomos e automação de fluxos.","#fbbf24","#fbbf24"],
 ["DATA ENGINEERING",88,"Modelagem relacional/NoSQL, SQL otimizado, MySQL, BigQuery, ETL e ingestão de fluxos.","#9a9a9e","#bdbdc2"],
 ["BACKEND ARCHITECTURE",95,"Java, Spring Boot, Microsserviços distribuídos, DDD, APIs RESTful de baixa latência.","#3d6aa8","#a8c5ff"],
 ["FULLSTACK DEV",90,"Next.js, TypeScript, React, ecossistema Web moderno, SSR e interfaces reativas.","#ffb59a","#ffb59a"]];
// [nome, categoria, descrição, nível, rótulo, classe, ícone, cor]
const SKILLS=[
 ["Java","backend","Tipagem estrita, robustez para enterprise e resiliência.",99,98,"RARO","","coffee","lb"],
 ["Spring Boot","backend","Framework de alto impacto para microsserviços e APIs com…",95,95,"ÉPICO","epico","rocket","lb"],
 ["APIs REST","backend","Comunicação e protocolos padronizados, arquitetura de dados.",98,98,"TÁTICO","tat","arrow-left-right","lb"],
 ["POO & Design","backend","Orientação a objetos, Clean Architecture e padrões de projeto.",99,99,"LENDÁRIO","len","workflow","y"],
 ["Next.js & React","frontend","Renderização moderna, componentes modulares e máxima performance.",96,96,"ÉPICO","epico","gauge","lb"],
 ["JavaScript","frontend","Lógica dinâmica, ecossistema moderno e tratamento assíncrono.",97,97,"VERSÁTIL","ver","terminal-square","y"],
 ["HTML5 & CSS3","frontend","Semântica rigorosa, estética pixel-perfect e animações CSS.",94,94,"BASE","base","palette","pc"],
 ["SQL Avançado","dados","Queries performáticas, agregações analíticas e otimização.",98,98,"RELÍQUIA","rl","database","lb"],
 ["MySQL","dados","Modelagem consistente, integridade relacional e performance.",94,94,"TÁTICO","tat","rows-3","pc"],
 ["BigQuery","dados","Analytics massivo, processamento em larga escala.",95,95,"COLOSSAL","col","refresh-cw","y"],
 ["Eng. de Dados","dados","Pipelines ETL/ELT robustos, governança e alta qualidade.",96,96,"ÉPICO","epico","git-fork","lb"],
 ["IA Generativa","ia","Modelos fundacionais, embeddings, RAG vetorial e agentes.",99,99,"LENDÁRIO","len","brain","y"],
 ["Prompt Craft","ia","Técnicas avançadas de raciocínio contextual, Chain-of-Thought.",96,96,"ÉPICO","epico","message-circle-question","lb"],
 ["Agentes de IA","ia","Sistemas autônomos, orquestração de ferramentas e memória.",98,98,"SUPREMO","sup","bot","y"],
 ["Git","ferramentas","Controle de versão rigoroso, estratégias de branch e review.",97,97,"EQUIPADO","eq","git-commit-horizontal","pc"],
 ["Docker","ferramentas","Containerização robusta, multi-stage builds e ambientes.",96,96,"ÉPICO","epico","archive","lb"],
 ["VS Code","ferramentas","Ambiente de desenvolvimento otimizado com depuração.",95,95,"TÁTICO","tat","laptop","pc"],
 ["Sys Architecture","ferramentas","Sistemas distribuídos resilientes, alta disponibilidade.",99,99,"SUPREMO","sup","drafting-compass","y"]
].map(([n,c,d,l,p,r,rc,i,col])=>({n,c,d,l,p,r,rc,i,col}));
const SKILL_FILTERS=[["todos","[00_TODOS]","layout-grid"],["backend","[01_BACKEND]","server"],["frontend","[02_FRONTEND]","app-window"],["dados","[03_DADOS]","table-2"],["ia","[04_IA_AGENTS]","bot"],["ferramentas","[05_FERRAMENTAS]","wrench"]];
const EQUIP_DETAIL={Java:{sub:"BACKEND ENGINE • TIPAGEM ESTRITA",d:"Pilar de força e resiliência arquitetural. Utilizado na construção de microsserviços escaláveis, controle rigoroso de concorrência e tipagem robusta.",s:["+99 XP","+95 DPS","+90 RES","< 0.1s"]}};
// repo/demo: preencher com URLs reais (o protótipo não traz os destinos)
const PROJECTS=[
 ["Sistema de Agentes Autônomos IA","ia","S","Pipeline de orquestração multi-agente para automação e análise de dados complexos com memória contextual e tomada de decisão.",["Python","LLMs","LangChain","BigQuery"],["DEMO LIVE","play",""]],
 ["Plataforma Microsserviços Backend","backend","A","Arquitetura distribuída resiliente de alta concorrência com circuit-breakers, tracing distribuído e mensageria assíncrona.",["Java","Spring Boot","Docker","PostgreSQL"],["DOCS","book-open","or"]],
 ["Pipeline de Dados & Analytics","ia","S","Extração, transformação e carga em grande volume de dados analíticos com particionamento inteligente e entrega em tempo real.",["SQL","BigQuery","Python","Docker"],["DASHBOARD","chart-no-axes-combined",""]],
 ["Ecommerce Fullstack Moderno","fullstack","B","Aplicação web responsiva com checkout integrado, Server-Side Rendering de alta performance, caching inteligente e design system.",["Next.js","TypeScript","Tailwind","REST API"],["DEMO LIVE","eye",""]],
 ["Gerenciador de Infraestrutura Docker","backend","A","Dashboard interativo para monitoramento de contêineres, gestão de imagens, métricas de consumo em tempo real e logs.",["JavaScript","Node.js","Docker API","WebSockets"],["DEMO","circle-play",""]],
 ["API RESTful Enterprise","backend","A","Serviço seguro de alta conformidade com autenticação JWT, rate limiting, caching distribuído, cobertura total de testes e documentação.",["Java","Spring Security","MySQL","JUnit"],["SWAGGER","file-text",""]]
].map(([t,c,r,d,s,a],i)=>({t,c,r,d,s,a,i:i+1}));
const PROJ_FILTERS=[["todos","[ALL_MISSIONS (06)]"],["ia","AI & DATA (02)"],["backend","BACKEND & ARCH (03)"],["fullstack","FULLSTACK (01)"]];
