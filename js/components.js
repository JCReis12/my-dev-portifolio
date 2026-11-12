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
// repo/demo: URLs dos repositórios fornecidos
const PROJECTS=[
 ["Credit & Risk Analysis Multi-Agent","ia","S","Sistema inteligente multi-agente de IA construído com Google ADK, Python e BigQuery, atuando na análise automatizada de crédito e risco financeiro com tomada de decisão.",["Python","Google ADK","BigQuery","Gemini LLM"],["VER REPO","code-xml",""],"https://github.com/JCReis12/credit-risk-multi-agent"],
 ["Smart Travel AI Agent","ia","S","Assistente de viagem autônomo baseado em Agentes de IA e Google ADK. Planejamento end-to-end com roteiros personalizados, previsão do tempo em tempo real, hotéis e voos.",["Python","Google ADK","AI Agents","Gemini LLM"],["VER REPO","code-xml",""],"https://github.com/JCReis12/smart-travel-agent"],
 ["Pet Management REST API","backend","A","Sistema backend de gerenciamento desenvolvido em Java e Spring Boot integrado ao banco relacional MySQL, aplicando boas práticas de APIs RESTful e arquitetura em camadas.",["Java","Spring Boot","MySQL","REST API"],["VER REPO","code-xml","or"],"https://github.com/JCReis12/Pet-Management-RestAPI.git"],
 ["React Components Study Platform","fullstack","B","Plataforma interativa construída com React para explorar e consolidar conceitos fundamentais do frontend moderno: componentização, hooks, props e renderização reativa.",["React","JavaScript","HTML5","CSS3"],["VER REPO","code-xml",""],"https://github.com/JCReis12/frontend-components-study-screen"],
 ["SENAI Space Arcade Game","fullstack","A","Jogo clássico de nave arcade espacial desenvolvido inteiramente em Vanilla JavaScript, focado em lógica de programação pura, Canvas/DOM e detecção de colisões.",["JavaScript","HTML5","CSS3","Game Logic"],["VER REPO","code-xml",""],"https://github.com/JCReis12/senai-arcade-space-vanilla"],
 ["Catholic Site","backend","A","Plataforma web fullstack que reúne orações tradicionais, leituras litúrgicas e recursos espirituais diários, com backend Java Spring Boot e banco de dados relacional MySQL.",["Java","Spring Boot","MySQL","JavaScript"],["VER REPO","code-xml",""],"https://github.com/JCReis12/catholic-2.0.git"]
].map(([t,c,r,d,s,a,repo],i)=>({t,c,r,d,s,a,repo,i:i+1}));
const PROJ_FILTERS=[["todos","[ALL_MISSIONS (06)]"],["ia","AI & DATA (02)"],["backend","BACKEND & ARCH (02)"],["fullstack","FULLSTACK (02)"]];
