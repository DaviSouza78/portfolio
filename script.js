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
    }
];

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
        document.body.classList.remove("modal-open");
        activeModal = null;

        if (restoreFocus && previousFocus instanceof HTMLElement) {
            previousFocus.focus();
        }
    }
};

window.modalManager = modalManager;

const renderCertificadoModal = (src, title) => {
    const image = document.getElementById("img-certificado");
    const caption = document.getElementById("legenda-certificado");
    if (!image || !caption) return;

    image.hidden = false;
    image.onerror = () => {
        image.hidden = true;
        caption.textContent = `${title} — imagem ainda não disponível nesta pasta`;
    };
    image.src = src;
    image.alt = `Certificado: ${title}`;
    caption.textContent = title;
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
        card.addEventListener("click", () => renderCertificadoModal(certificado.imagem, certificado.titulo));
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
    const revealElements = Array.from(document.querySelectorAll(".gs-reveal"));
    revealElements.forEach(element => element.classList.add("native-reveal"));

    if (!("IntersectionObserver" in window)) {
        revealElements.forEach(element => element.classList.add("native-visible"));
        return;
    }

    const revealObserver = new IntersectionObserver(entries => {
        const visibleEntries = entries.filter(entry => entry.isIntersecting);
        visibleEntries.forEach((entry, index) => {
            entry.target.style.transitionDelay = `${index * 80}ms`;
            entry.target.classList.add("native-visible");
            revealObserver.unobserve(entry.target);
        });
    }, { threshold: 0.08, rootMargin: "0px 0px -7%" });

    revealElements.forEach(element => revealObserver.observe(element));
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

    window.ScrollTrigger.batch(".gs-reveal", {
        start: "top 90%",
        once: true,
        interval: 0.12,
        batchMax: 4,
        onEnter: batch => window.gsap.fromTo(batch,
            { y: 30, autoAlpha: 0 },
            { y: 0, autoAlpha: 1, duration: 1.05, stagger: 0.1, ease: "power4.out", overwrite: true }
        )
    });

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
    toggle?.setAttribute("aria-label", isLight ? "Ativar tema escuro" : "Ativar tema claro");
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
    setupModalListeners();
    initTheme();
    initScrollUI();
    initAnimations();
    initTiltCards();
    initThreeBackground();
});
