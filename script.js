const certificadosData = [
    {
        titulo: "Python para Dados",
        instituicao: "SuperGeeks",
        ano: "2024",
        imagem: "Img/py_para_dados_certificado.png"
    },
    {
        titulo: "Começando com o Cisco Packet Tracer",
        instituicao: "Cisco Networking Academy",
        ano: "2026",
        imagem: "Img/certificadocisco.png"
    },
    {
        titulo: "Linux Unhatched",
        instituicao: "Cisco Networking Academy · NDG",
        ano: "2026",
        imagem: "Img/certificados/linux-unhatched.png",
        arquivo: "Img/certificados/linux-unhatched.pdf"
    },
    {
        titulo: "Introduction to Modern AI",
        instituicao: "Cisco Networking Academy",
        ano: "2026",
        imagem: "Img/certificados/modern-ai.png",
        arquivo: "Img/certificados/modern-ai.pdf"
    },
    {
        titulo: "Data Analytics Essentials",
        instituicao: "Cisco Networking Academy",
        ano: "2026",
        imagem: "Img/certificados/data-analytics.png",
        arquivo: "Img/certificados/data-analytics.pdf"
    },
    {
        titulo: "AWS Academy Cloud Foundations",
        instituicao: "AWS Academy",
        ano: "2026",
        imagem: "Img/certificados/aws-cloud-foundations.png",
        arquivo: "Img/certificados/aws-cloud-foundations.pdf"
    },
    {
        titulo: "Networking Basics",
        instituicao: "Cisco Networking Academy",
        ano: "2026",
        imagem: "Img/certificados/networking-basics.png",
        arquivo: "Img/certificados/networking-basics.pdf"
    }
];

const englishTranslations = {
    "Pular para o conteúdo": "Skip to content",
    "Davi Souza — início": "Davi Souza — home",
    "Navegação principal": "Main navigation",
    "Sobre": "About",
    "Projetos": "Projects",
    "Trajetória": "Journey",
    "Vamos conversar": "Let's talk",
    "Selecionar idioma": "Select language",
    "Alternar tema": "Toggle theme",
    "Ativar tema escuro": "Enable dark theme",
    "Ativar tema claro": "Enable light theme",
    "Disponível para novos projetos": "Available for new projects",
    "PORTFÓLIO / 2026": "PORTFOLIO / 2026",
    "Código que conecta": "Code that connects",
    "ideias a produtos.": "ideas to products.",
    "Sou": "I am",
    ", desenvolvedor full stack e estudante de ADS. Transformo problemas em experiências web claras, responsivas e funcionais.": ", a full-stack developer and Software Development student. I turn problems into clear, responsive and functional web experiences.",
    "Explorar projetos": "Explore projects",
    "Baixar currículo": "Download résumé",
    "Links profissionais": "Professional links",
    "LOCALIZAÇÃO": "LOCATION",
    "Resumo profissional em código": "Professional summary in code",
    "Resumo do portfólio": "Portfolio summary",
    "projetos em destaque": "featured projects",
    "certificações": "certifications",
    "formação em andamento": "degree in progress",
    "vontade de construir": "drive to build",
    "Tecnologias principais": "Core technologies",
    "01 / SOBRE": "01 / ABOUT",
    "Curiosidade técnica.": "Technical curiosity.",
    "Visão de produto.": "Product thinking.",
    "Sou estudante de Análise e Desenvolvimento de Sistemas, apaixonado por tecnologia e resolução de problemas. Minha prática passa por interfaces, lógica, automações e construção de experiências completas — sempre buscando clareza, utilidade e evolução constante.": "I am a Software Development student passionate about technology and problem-solving. My work spans interfaces, logic, automation and end-to-end experiences — always pursuing clarity, usefulness and continuous growth.",
    "Fora do código, RPG de mesa e jogos competitivos fortalecem habilidades que levo para cada projeto: estratégia, colaboração, comunicação direta e tomada de decisão sob pressão.": "Outside code, tabletop RPGs and competitive games strengthen skills I bring to every project: strategy, collaboration, direct communication and decision-making under pressure.",
    "Construção": "Building",
    "Do wireframe à interface funcional, pensando em cada etapa da experiência.": "From wireframe to functional interface, considering every step of the experience.",
    "Colaboração": "Collaboration",
    "Comunicação clara, troca constante e trabalho em equipe para chegar mais longe.": "Clear communication, continuous exchange and teamwork to go further.",
    "Evolução": "Growth",
    "Aprender, testar, revisar e transformar conhecimento em entregas melhores.": "Learn, test, review and turn knowledge into better outcomes.",
    "02 / PROJETOS": "02 / PROJECTS",
    "Trabalhos que saíram": "Work brought",
    "do papel.": "to life.",
    "Uma seleção de projetos acadêmicos e pessoais em que explorei produto, interface e desenvolvimento.": "A selection of academic and personal projects where I explored product, interface and development.",
    "01 · FINANÇAS & ESTUDOS": "01 · FINANCE & STUDY",
    "02 · PRODUTO FULL STACK": "02 · FULL-STACK PRODUCT",
    "03 · JOGO WEB": "03 · WEB GAME",
    "04 · CIBERSEGURANÇA": "04 · CYBERSECURITY",
    "Hub pessoal para organizar finanças, metas, assinaturas e rotina de estudos.": "A personal hub for managing finances, goals, subscriptions and study routines.",
    "Sistema de gerenciamento de requisitos, aprovações e propostas de software.": "A system for managing software requirements, approvals and proposals.",
    "Jogo de ritmo para navegador com diferentes trilhas e níveis de dificuldade.": "A browser rhythm game with multiple tracks and difficulty levels.",
    "Documentação prática sobre redes, TLS e sessões seguras em ambiente AWS.": "Practical documentation on networking, TLS and secure sessions in AWS.",
    "Experiência de loja digital com catálogo, detalhes de produto e carrinho.": "A digital storefront experience with catalog, product details and cart.",
    "Ver detalhes": "View details",
    "Quer ver os repositórios e acompanhar o código?": "Want to explore the repositories and follow the code?",
    "Ver todos no GitHub": "View all on GitHub",
    "03 / TRAJETÓRIA": "03 / JOURNEY",
    "FORMAÇÃO": "EDUCATION",
    "Caminho acadêmico": "Academic journey",
    "2026 — PRESENTE": "2026 — PRESENT",
    "Tecnologia em Análise e Desenvolvimento de Sistemas": "Associate Degree in Systems Analysis and Development",
    "Em andamento": "In progress",
    "Ensino Médio": "High School",
    "Concluído": "Completed",
    "CERTIFICAÇÕES": "CERTIFICATIONS",
    "Conhecimento validado": "Validated knowledge",
    "Python para Dados": "Python for Data",
    "Começando com o Cisco Packet Tracer": "Getting Started with Cisco Packet Tracer",
    "04 / STACK": "04 / STACK",
    "Linguagens & web": "Languages & web",
    "Aplicações tipadas": "Typed applications",
    "Interfaces e lógica": "Interfaces and logic",
    "Scripts e automação": "Scripts and automation",
    "Web responsiva": "Responsive web",
    "Ecossistema": "Ecosystem",
    "Componentes e estado": "Components and state",
    "Serviços e APIs": "Services and APIs",
    "Dados e consultas": "Data and queries",
    "Versão e colaboração": "Versioning and collaboration",
    "COMO EU TRABALHO": "HOW I WORK",
    "Boas soluções também dependem de boas relações.": "Great solutions also depend on great collaboration.",
    "Resolução de problemas": "Problem-solving",
    "Entender antes de construir.": "Understand before building.",
    "Trabalho em equipe": "Teamwork",
    "Compartilhar contexto e evoluir junto.": "Share context and grow together.",
    "Comunicação clara": "Clear communication",
    "Decisões simples, alinhadas e objetivas.": "Simple, aligned and objective decisions.",
    "Aprendizado contínuo": "Continuous learning",
    "Experimentar, revisar e melhorar.": "Experiment, review and improve.",
    "05 / CONTATO": "05 / CONTACT",
    "Tem uma ideia, projeto ou oportunidade?": "Have an idea, project or opportunity?",
    "Vamos transformar isso em": "Let's turn it into",
    "algo que funciona.": "something that works.",
    "Currículo": "Résumé",
    "Voltar ao início": "Back to home",
    "Projetado e desenvolvido por Davi Souza · 2026": "Designed and developed by Davi Souza · 2026",
    "Voltar ao topo": "Back to top",
    "Fechar certificado": "Close certificate",
    "Certificado": "Certificate",
    "Abrir PDF": "Open PDF",
    "Fechar imagem ampliada": "Close enlarged image",
    "Visualização ampliada": "Enlarged view",
    "PROJETO 03 · JOGO WEB": "PROJECT 03 · WEB GAME",
    "Uma plataforma web de jogo de ritmo criada para uma apresentação em sala de aula.": "A web rhythm-game platform created for a classroom presentation.",
    "O projeto simula um jogo musical com trilhas e dificuldades variadas, combinando interação, feedback visual e desempenho no navegador.": "The project simulates a music game with varied tracks and difficulties, combining interaction, visual feedback and browser performance.",
    "PROJETO 05 · E-COMMERCE": "PROJECT 05 · E-COMMERCE",
    "Uma experiência de mercado digital para descobrir, avaliar e comprar jogos.": "A digital marketplace experience for discovering, reviewing and buying games.",
    "A plataforma simula um e-commerce completo, permitindo navegar pelo catálogo, abrir detalhes dos produtos e interagir com o carrinho.": "The platform simulates a complete e-commerce experience, allowing users to browse the catalog, open product details and interact with the cart.",
    "PROJETO 02 · PRODUTO FULL STACK": "PROJECT 02 · FULL-STACK PRODUCT",
    "Um sistema completo de gerenciamento de requisitos para equipes e empresas de software.": "A complete requirements management system for software teams and companies.",
    "O painel centraliza propostas, fluxo de ideias, projetos aprovados, métricas e permissões. KPIs em tempo real facilitam a leitura de requisitos aprovados, pendentes e rejeitados.": "The dashboard centralizes proposals, idea flows, approved projects, metrics and permissions. Real-time KPIs make approved, pending and rejected requirements easy to understand.",
    "O projeto combina produtividade administrativa, rastreabilidade de decisões e uma interface escura orientada a dados.": "The project combines administrative productivity, decision traceability and a data-driven dark interface.",
    "Requisitos": "Requirements",
    "PROJETO 01 · FINANÇAS & ESTUDOS": "PROJECT 01 · FINANCE & STUDY",
    "Finanças e estudos reunidos em um hub pessoal, claro e fácil de acompanhar.": "Finances and studies brought together in a clear, easy-to-follow personal hub.",
    "A aplicação organiza despesas e parcelas, metas de economia, assinaturas e tarefas escolares. O acesso com Google e a persistência de dados tornam a experiência prática para o uso cotidiano.": "The application organizes expenses and installments, savings goals, subscriptions and school tasks. Google sign-in and persistent data make it practical for everyday use.",
    "PROJETO 04 · CIBERSEGURANÇA": "PROJECT 04 · CYBERSECURITY",
    "Um laboratório documentado de conexões, criptografia e sessões seguras.": "A documented lab on connections, encryption and secure sessions.",
    "O projeto reúne provas de conceito de inspeção de tráfego, TLS com OpenSSL e autenticação segura em Node.js, executadas em uma instância Ubuntu Server na AWS.": "The project brings together proofs of concept for traffic inspection, TLS with OpenSSL and secure Node.js authentication, running on an Ubuntu Server instance in AWS.",
    "Redes": "Networking",
    "Dashboard do PFinances com dados de demonstração": "PFinances dashboard with demo data",
    "Painel do sistema ScopeMaster": "ScopeMaster system dashboard",
    "Tela inicial do jogo SenaiHERO": "SenaiHERO game home screen",
    "Documentação do Projeto Conexões Seguras": "Secure Connections project documentation",
    "Página principal da loja Jogos Senai": "Jogos Senai store home page",
    "Tela inicial do SenaiHERO": "SenaiHERO home screen",
    "Seleção de dificuldade do SenaiHERO": "SenaiHERO difficulty selection",
    "Gameplay do SenaiHERO": "SenaiHERO gameplay",
    "Tela de vitória do SenaiHERO": "SenaiHERO victory screen",
    "Fim de jogo do SenaiHERO": "SenaiHERO game-over screen",
    "Configurações do SenaiHERO": "SenaiHERO settings",
    "Página principal do Jogos Senai": "Jogos Senai home page",
    "Página de produto do Jogos Senai": "Jogos Senai product page",
    "Segunda página de produto do Jogos Senai": "Second Jogos Senai product page",
    "Carrinho do Jogos Senai": "Jogos Senai cart",
    "Tela de login do ScopeMaster": "ScopeMaster login screen",
    "Painel principal do ScopeMaster": "ScopeMaster main dashboard",
    "Tela de entrada e recursos do PFinances": "PFinances landing and features screen",
    "Carteira do PFinances com dados de demonstração": "PFinances wallet with demo data",
    "Organização de estudos do PFinances com dados de demonstração": "PFinances study organizer with demo data",
    "Página de documentação do Projeto Conexões Seguras": "Secure Connections project documentation page"
};

const originalTextNodes = new WeakMap();
const originalAttributes = new WeakMap();
let currentLanguage = localStorage.getItem("portfolio-language") === "en" ? "en" : "pt";
let originalProfileCode = "";

const translatePhrase = (value, language = currentLanguage) => {
    if (language !== "en" || !value) return value;
    if (englishTranslations[value]) return englishTranslations[value];
    if (value.startsWith("Ver certificado ")) return `View certificate ${value.slice(16)}`;
    if (value.startsWith("Certificado: ")) return `Certificate: ${value.slice(13)}`;
    if (value.startsWith("Abrir o certificado ") && value.endsWith(" em PDF")) return `Open ${value.slice(20, -7)} certificate PDF`;
    if (value.startsWith("Ampliar imagem: ")) return `Enlarge image: ${translatePhrase(value.slice(16), language)}`;
    if (value.startsWith("Fechar detalhes do ")) return `Close ${value.slice(19)} details`;
    if (value.startsWith("Abrir o ") && value.endsWith(" no GitHub")) return `Open ${value.slice(8, -10)} on GitHub`;
    return value;
};

const setTranslatedAttribute = (element, attribute, sourceValue) => {
    if (!element || !sourceValue) return;
    let sources = originalAttributes.get(element);
    if (!sources) {
        sources = new Map();
        originalAttributes.set(element, sources);
    }
    sources.set(attribute, sourceValue);
    element.setAttribute(attribute, translatePhrase(sourceValue));
};

const translateTextNodes = (root = document.body) => {
    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
        acceptNode(node) {
            const parentTag = node.parentElement?.tagName;
            if (!node.nodeValue.trim() || ["SCRIPT", "STYLE", "PRE", "CODE"].includes(parentTag)) return NodeFilter.FILTER_REJECT;
            return NodeFilter.FILTER_ACCEPT;
        }
    });

    let node = walker.nextNode();
    while (node) {
        if (!originalTextNodes.has(node)) originalTextNodes.set(node, node.nodeValue);
        const source = originalTextNodes.get(node);
        const trimmed = source.trim();
        node.nodeValue = source.replace(trimmed, translatePhrase(trimmed));
        node = walker.nextNode();
    }
};

const translateAttributes = (root = document.body) => {
    const elements = [];
    if (root instanceof Element) elements.push(root);
    elements.push(...root.querySelectorAll("[aria-label], [alt], [title]"));

    elements.forEach(element => {
        ["aria-label", "alt", "title"].forEach(attribute => {
            if (!element.hasAttribute(attribute)) return;
            let sources = originalAttributes.get(element);
            if (!sources) {
                sources = new Map();
                originalAttributes.set(element, sources);
            }
            if (!sources.has(attribute)) sources.set(attribute, element.getAttribute(attribute));
            element.setAttribute(attribute, translatePhrase(sources.get(attribute)));
        });
    });
};

const refreshTranslations = (root = document.body) => {
    translateTextNodes(root);
    translateAttributes(root);
};

const syncResumeDownloads = () => {
    const isEnglish = currentLanguage === "en";
    const resumePath = isEnglish
        ? "output/pdf/Curriculo-Davi-Souza-English.pdf"
        : "Img/Curriculo-Davi-Souza.pdf";
    const downloadName = isEnglish
        ? "Davi_Souza_Resume.pdf"
        : "Curriculo_Davi_Souza.pdf";

    document.querySelectorAll("[data-cv-download]").forEach(link => {
        link.setAttribute("href", resumePath);
        link.setAttribute("download", downloadName);
    });
};

const applyLanguage = language => {
    currentLanguage = language === "en" ? "en" : "pt";
    document.documentElement.lang = currentLanguage === "en" ? "en" : "pt-BR";
    refreshTranslations(document.body);

    document.title = currentLanguage === "en" ? "Davi Souza | Full-Stack Developer" : "Davi Souza | Desenvolvedor Full Stack";
    const descriptionPt = "Portfólio de Davi Souza — desenvolvedor full stack, estudante de Análise e Desenvolvimento de Sistemas e criador de experiências web funcionais.";
    const descriptionEn = "Davi Souza's portfolio — full-stack developer, Software Development student and creator of functional web experiences.";
    const socialDescriptionPt = "Projetos, experiências e soluções web construídas com propósito.";
    const socialDescriptionEn = "Projects, experiences and web solutions built with purpose.";
    document.querySelector('meta[name="description"]')?.setAttribute("content", currentLanguage === "en" ? descriptionEn : descriptionPt);
    document.querySelector('meta[property="og:title"]')?.setAttribute("content", document.title);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute("content", document.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute("content", currentLanguage === "en" ? socialDescriptionEn : socialDescriptionPt);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute("content", currentLanguage === "en" ? socialDescriptionEn : socialDescriptionPt);

    const profileCode = document.querySelector(".code-card code");
    if (profileCode) {
        if (!originalProfileCode) originalProfileCode = profileCode.innerHTML;
        profileCode.innerHTML = currentLanguage === "en" ? `<span class="code-key">const</span> davi = {
  focus: <span class="code-string">"web products"</span>,
  stack: [<span class="code-string">"TS"</span>, <span class="code-string">"React"</span>, <span class="code-string">"Node"</span>],
  mode: <span class="code-string">"always learning"</span>
};` : originalProfileCode;
    }

    document.querySelectorAll("[data-language]").forEach(button => {
        const isActive = button.dataset.language === currentLanguage;
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    syncResumeDownloads();

    const viewerCaption = document.getElementById("image-viewer-caption");
    if (viewerCaption?.dataset.source) viewerCaption.textContent = translatePhrase(viewerCaption.dataset.source);
};

const initLanguage = () => {
    document.querySelectorAll("[data-language]").forEach(button => {
        button.addEventListener("click", () => {
            const language = button.dataset.language === "en" ? "en" : "pt";
            localStorage.setItem("portfolio-language", language);
            applyLanguage(language);
        });
    });
    applyLanguage(currentLanguage);
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
let previousFocus = null;
let activeModal = null;

const modalManager = {
    open(modalId) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        if (activeModal && activeModal !== modal) {
            this.close(activeModal.id, false);
        }

        previousFocus = document.activeElement;
        activeModal = modal;
        modal.classList.add("active");
        modal.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");

        requestAnimationFrame(() => {
            modal.querySelector("[data-close-modal]")?.focus();
        });
    },

    close(modalId, restoreFocus = true) {
        const modal = document.getElementById(modalId);
        if (!modal) return;

        modal.classList.remove("active");
        modal.setAttribute("aria-hidden", "true");
        if (!document.getElementById("image-viewer")?.classList.contains("active")) {
            document.body.classList.remove("modal-open");
        }
        activeModal = null;

        if (restoreFocus && previousFocus instanceof HTMLElement) {
            previousFocus.focus();
        }
    }
};

window.modalManager = modalManager;

const imageViewer = {
    active: false,
    previousFocus: null,

    open(sourceImage) {
        const viewer = document.getElementById("image-viewer");
        const viewerImage = document.getElementById("image-viewer-image");
        const caption = document.getElementById("image-viewer-caption");
        if (!viewer || !viewerImage || !caption || !sourceImage?.src) return;

        const sourceAlt = originalAttributes.get(sourceImage)?.get("alt") || sourceImage.alt || "Visualização ampliada";
        this.active = true;
        this.previousFocus = document.activeElement;
        viewerImage.src = sourceImage.currentSrc || sourceImage.src;
        setTranslatedAttribute(viewerImage, "alt", sourceAlt);
        caption.dataset.source = sourceAlt;
        caption.textContent = translatePhrase(sourceAlt);
        viewer.classList.add("active");
        viewer.setAttribute("aria-hidden", "false");
        document.body.classList.add("modal-open");
        requestAnimationFrame(() => document.getElementById("image-viewer-close")?.focus());
    },

    close() {
        const viewer = document.getElementById("image-viewer");
        const viewerImage = document.getElementById("image-viewer-image");
        if (!viewer) return;

        viewer.classList.remove("active");
        viewer.setAttribute("aria-hidden", "true");
        if (viewerImage) viewerImage.removeAttribute("src");
        this.active = false;
        if (!activeModal) document.body.classList.remove("modal-open");
        if (this.previousFocus instanceof HTMLElement) this.previousFocus.focus();
    }
};

const initImageViewer = () => {
    const expandableSelector = ".project-media img, .post-gallery img, .certificate-viewer .modal-img";
    document.querySelectorAll(expandableSelector).forEach(image => {
        image.classList.add("expandable-image");
        image.tabIndex = 0;
        image.setAttribute("role", "button");
        setTranslatedAttribute(image, "aria-label", `Ampliar imagem: ${image.alt || "Visualização ampliada"}`);
    });

    document.addEventListener("click", event => {
        const image = event.target.closest(expandableSelector);
        if (image) {
            imageViewer.open(image);
            return;
        }
        if (event.target.id === "image-viewer" || event.target.closest("#image-viewer-close")) imageViewer.close();
    });

    document.addEventListener("keydown", event => {
        if (imageViewer.active) {
            if (event.key === "Escape") {
                event.preventDefault();
                event.stopImmediatePropagation();
                imageViewer.close();
                return;
            }
            if (event.key === "Tab") {
                event.preventDefault();
                event.stopImmediatePropagation();
                document.getElementById("image-viewer-close")?.focus();
                return;
            }
        }

        const image = event.target.closest?.(expandableSelector);
        if (image && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            imageViewer.open(image);
        }
    }, true);
};

const renderCertificadoModal = (src, title, pdfFile = "") => {
    const image = document.getElementById("img-certificado");
    const caption = document.getElementById("legenda-certificado");
    const pdfLink = document.getElementById("link-certificado");
    if (!image || !caption || !pdfLink) return;

    image.hidden = false;
    image.onerror = () => {
        image.hidden = true;
        caption.textContent = currentLanguage === "en" ? `${translatePhrase(title)} — preview unavailable` : `${title} — imagem ainda não disponível nesta pasta`;
    };
    image.src = src;
    setTranslatedAttribute(image, "alt", `Certificado: ${title}`);
    setTranslatedAttribute(image, "aria-label", `Ampliar imagem: Certificado: ${title}`);
    caption.textContent = translatePhrase(title);
    pdfLink.hidden = !pdfFile;
    if (pdfFile) {
        pdfLink.href = pdfFile;
        setTranslatedAttribute(pdfLink, "aria-label", `Abrir o certificado ${title} em PDF`);
    } else {
        pdfLink.removeAttribute("href");
        pdfLink.removeAttribute("aria-label");
    }
    modalManager.open("modal-certificado");
};

const initCertificados = () => {
    const container = document.getElementById("certificados-grid");
    if (!container) return;

    certificadosData.forEach((certificado, index) => {
        const card = document.createElement("button");
        card.type = "button";
        card.className = "certificate-card";
        card.setAttribute("aria-label", `Ver certificado ${certificado.titulo}`);
        card.innerHTML = `
            <span class="certificate-index">${String(index + 1).padStart(2, "0")}</span>
            <span class="certificate-copy">
                <strong>${certificado.titulo}</strong>
                <small>${certificado.instituicao} · ${certificado.ano}</small>
            </span>
            <span class="certificate-arrow" aria-hidden="true">↗</span>
        `;
        card.addEventListener("click", () => renderCertificadoModal(certificado.imagem, certificado.titulo, certificado.arquivo));
        container.appendChild(card);
    });
};

const getFocusableElements = modal => Array.from(
    modal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])')
).filter(element => element.offsetParent !== null);

const setupModalListeners = () => {
    document.addEventListener("click", event => {
        const trigger = event.target.closest("[data-modal]");
        if (trigger) {
            modalManager.open(trigger.dataset.modal);
            return;
        }

        const closeButton = event.target.closest("[data-close-modal]");
        if (closeButton) {
            const modal = closeButton.closest(".modal");
            if (modal) modalManager.close(modal.id);
            return;
        }

        if (event.target.classList.contains("modal")) {
            modalManager.close(event.target.id);
        }
    });

    document.addEventListener("keydown", event => {
        if (!activeModal) return;

        if (event.key === "Escape") {
            modalManager.close(activeModal.id);
            return;
        }

        if (event.key !== "Tab") return;
        const focusable = getFocusableElements(activeModal);
        if (!focusable.length) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });
};

const initNativeAnimations = () => {
    document.body.classList.add("native-motion");
};

const initAnimations = () => {
    if (prefersReducedMotion) return;
    if (typeof window.gsap === "undefined") {
        initNativeAnimations();
        return;
    }

    if (window.ScrollTrigger) {
        window.gsap.registerPlugin(window.ScrollTrigger);
    }

    const heroTimeline = window.gsap.timeline({ defaults: { ease: "power4.out" } });
    heroTimeline
        .from(".site-header", { y: -24, autoAlpha: 0, duration: 0.85 })
        .from(".hero-copy > *", { y: 28, autoAlpha: 0, duration: 1.05, stagger: 0.09 }, "-=0.48")
        .from(".hero-visual", { x: 34, scale: 0.97, autoAlpha: 0, duration: 1.25 }, "-=0.9")
        .from(".hero-metrics .metric", { y: 18, autoAlpha: 0, duration: 0.75, stagger: 0.07 }, "-=0.72")
        .from(".tech-marquee", { y: 14, autoAlpha: 0, duration: 0.7 }, "-=0.42");

    if (!window.ScrollTrigger) return;

    window.gsap.to(".hero-visual", {
        yPercent: 7,
        ease: "none",
        scrollTrigger: { trigger: ".hero-section", start: "top top", end: "bottom top", scrub: 1.2 }
    });

    window.gsap.fromTo(".contact-glow", { scale: 0.9 }, {
        scale: 1.18,
        ease: "none",
        scrollTrigger: { trigger: ".contact-section", start: "top bottom", end: "bottom top", scrub: 1.4 }
    });
};

const initScrollReveals = () => {
    const selector = [
        ".section-header",
        ".about-copy",
        ".focus-card",
        ".project-card",
        ".projects-cta",
        ".section-label",
        ".journey-column",
        ".timeline-item",
        ".certificate-card",
        ".skill-group",
        ".skills-soft",
        ".soft-list li",
        ".contact-kicker",
        ".contact-content h2",
        ".contact-email",
        ".contact-links"
    ].join(", ");
    const elements = Array.from(document.querySelectorAll(selector));

    elements.forEach(element => {
        const siblingIndex = Array.from(element.parentElement?.children || []).indexOf(element);
        element.style.setProperty("--reveal-delay", `${Math.min(Math.max(siblingIndex, 0), 4) * 75}ms`);
        element.classList.add("scroll-reveal");
    });

    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
        elements.forEach(element => element.classList.add("is-visible"));
        return;
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -6%" });

    elements.forEach(element => observer.observe(element));
};

const initSmoothScroll = () => {
    if (!hasFinePointer || prefersReducedMotion) return;

    const root = document.documentElement;
    root.classList.add("smooth-wheel");
    let targetY = window.scrollY;
    let renderedY = targetY;
    let animationFrame = null;
    let isRendering = false;

    const maximumScroll = () => Math.max(document.documentElement.scrollHeight - window.innerHeight, 0);
    const clampScroll = value => Math.min(Math.max(value, 0), maximumScroll());

    const render = () => {
        const difference = targetY - renderedY;
        renderedY += difference * 0.12;
        isRendering = true;
        window.scrollTo(0, renderedY);
        isRendering = false;

        if (Math.abs(difference) > 0.45) {
            animationFrame = requestAnimationFrame(render);
        } else {
            renderedY = targetY;
            window.scrollTo(0, renderedY);
            animationFrame = null;
        }
    };

    const startRender = () => {
        if (!animationFrame) animationFrame = requestAnimationFrame(render);
    };

    window.addEventListener("wheel", event => {
        if (document.body.classList.contains("modal-open") || event.ctrlKey || event.target.closest(".modal-shell")) return;
        if (Math.abs(event.deltaY) < 0.1) return;

        event.preventDefault();
        const deltaMultiplier = event.deltaMode === 1 ? 18 : event.deltaMode === 2 ? window.innerHeight : 1;
        targetY = clampScroll(targetY + event.deltaY * deltaMultiplier);
        startRender();
    }, { passive: false });

    document.addEventListener("click", event => {
        const anchor = event.target.closest('a[href^="#"]');
        if (!anchor) return;
        const hash = anchor.getAttribute("href");
        const target = hash && hash !== "#" ? document.querySelector(hash) : null;
        if (!target) return;

        event.preventDefault();
        const headerOffset = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--header-height")) + 16;
        targetY = clampScroll(target.getBoundingClientRect().top + window.scrollY - headerOffset);
        renderedY = window.scrollY;
        history.pushState(null, "", hash);
        startRender();
    });

    window.addEventListener("scroll", () => {
        if (isRendering || animationFrame) return;
        targetY = window.scrollY;
        renderedY = targetY;
    }, { passive: true });

    window.addEventListener("resize", () => {
        targetY = clampScroll(targetY);
        renderedY = clampScroll(renderedY);
    });
};

const initTiltCards = () => {
    if (!hasFinePointer || prefersReducedMotion) return;

    document.querySelectorAll(".tilt-card").forEach(card => {
        card.addEventListener("pointermove", event => {
            const rect = card.getBoundingClientRect();
            const x = (event.clientX - rect.left) / rect.width - 0.5;
            const y = (event.clientY - rect.top) / rect.height - 0.5;
            card.style.transform = `perspective(1200px) rotateX(${y * -3.5}deg) rotateY(${x * 4}deg) translateY(-3px)`;
        });

        card.addEventListener("pointerleave", () => {
            card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translateY(0)";
        });
    });
};

let threeState = null;

const initThreeBackground = () => {
    if (prefersReducedMotion || typeof window.THREE === "undefined") return;

    const canvas = document.getElementById("webgl-canvas");
    if (!canvas) return;

    const isLight = document.body.classList.contains("light-theme");
    const scene = new window.THREE.Scene();
    scene.fog = new window.THREE.FogExp2(isLight ? 0xeef4f5 : 0x07111f, 0.025);

    const camera = new window.THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 100);
    camera.position.z = 14;

    const renderer = new window.THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.7));
    renderer.setSize(window.innerWidth, window.innerHeight);

    const geometry = new window.THREE.IcosahedronGeometry(0.32, 0);
    const material = new window.THREE.MeshBasicMaterial({
        color: isLight ? 0x0e8a42 : 0x22c55e,
        wireframe: true,
        transparent: true,
        opacity: isLight ? 0.07 : 0.1
    });

    const group = new window.THREE.Group();
    scene.add(group);

    for (let index = 0; index < 54; index += 1) {
        const mesh = new window.THREE.Mesh(geometry, material);
        mesh.position.set(
            (Math.random() - 0.5) * 30,
            (Math.random() - 0.5) * 22,
            (Math.random() - 0.5) * 18
        );
        const scale = Math.random() * 0.72 + 0.25;
        mesh.scale.setScalar(scale);
        mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
        group.add(mesh);
    }

    let pointerX = 0;
    let pointerY = 0;
    document.addEventListener("pointermove", event => {
        pointerX = (event.clientX / window.innerWidth - 0.5) * 0.22;
        pointerY = (event.clientY / window.innerHeight - 0.5) * 0.14;
    });

    const animate = () => {
        group.rotation.y += (pointerX - group.rotation.y) * 0.018;
        group.rotation.x += (-pointerY - group.rotation.x) * 0.018;
        group.rotation.z += 0.00035;
        group.children.forEach((mesh, index) => {
            mesh.rotation.x += 0.0007 + (index % 4) * 0.00015;
            mesh.rotation.y += 0.001;
        });
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
    };
    animate();

    window.addEventListener("resize", () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
    });

    threeState = { scene, material };
};

const applyTheme = theme => {
    const isLight = theme === "light";
    const toggle = document.getElementById("dark-mode-toggle");

    document.body.classList.toggle("light-theme", isLight);
    toggle?.setAttribute("aria-pressed", String(isLight));
    setTranslatedAttribute(toggle, "aria-label", isLight ? "Ativar tema escuro" : "Ativar tema claro");
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", isLight ? "#eef4f5" : "#0f172a");

    if (!threeState) return;
    const targetFog = new window.THREE.Color(isLight ? 0xeef4f5 : 0x07111f);
    const targetMaterial = new window.THREE.Color(isLight ? 0x0e8a42 : 0x22c55e);

    if (typeof window.gsap !== "undefined") {
        window.gsap.to(threeState.scene.fog.color, { r: targetFog.r, g: targetFog.g, b: targetFog.b, duration: 0.45 });
        window.gsap.to(threeState.material.color, { r: targetMaterial.r, g: targetMaterial.g, b: targetMaterial.b, duration: 0.45 });
        window.gsap.to(threeState.material, { opacity: isLight ? 0.07 : 0.1, duration: 0.45 });
    } else {
        threeState.scene.fog.color.copy(targetFog);
        threeState.material.color.copy(targetMaterial);
        threeState.material.opacity = isLight ? 0.07 : 0.1;
    }
};

const initTheme = () => {
    const toggle = document.getElementById("dark-mode-toggle");
    const savedTheme = localStorage.getItem("theme") === "light" ? "light" : "dark";
    applyTheme(savedTheme);

    toggle?.addEventListener("click", () => {
        const nextTheme = document.body.classList.contains("light-theme") ? "dark" : "light";
        localStorage.setItem("theme", nextTheme);
        applyTheme(nextTheme);
    });
};

const initScrollUI = () => {
    const header = document.querySelector(".site-header");
    const progress = document.querySelector(".scroll-progress span");
    const navigationLinks = Array.from(document.querySelectorAll(".site-nav a[data-section]"));
    let ticking = false;

    const updateScroll = () => {
        const scrollTop = window.scrollY;
        const scrollRange = document.documentElement.scrollHeight - window.innerHeight;
        const ratio = scrollRange > 0 ? scrollTop / scrollRange : 0;
        header?.classList.toggle("scrolled", scrollTop > 24);
        if (progress) progress.style.width = `${Math.min(ratio * 100, 100)}%`;
        ticking = false;
    };

    window.addEventListener("scroll", () => {
        if (ticking) return;
        ticking = true;
        requestAnimationFrame(updateScroll);
    }, { passive: true });
    updateScroll();

    if (!("IntersectionObserver" in window)) return;
    const observedSections = navigationLinks
        .map(link => document.getElementById(link.dataset.section))
        .filter(Boolean);

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            navigationLinks.forEach(link => {
                link.classList.toggle("active", link.dataset.section === entry.target.id);
            });
        });
    }, { rootMargin: "-25% 0px -65%", threshold: 0 });

    observedSections.forEach(section => sectionObserver.observe(section));
};

document.addEventListener("DOMContentLoaded", () => {
    initCertificados();
    initImageViewer();
    setupModalListeners();
    initTheme();
    initLanguage();
    initScrollUI();
    initAnimations();
    initScrollReveals();
    initSmoothScroll();
    initTiltCards();
    initThreeBackground();
});
