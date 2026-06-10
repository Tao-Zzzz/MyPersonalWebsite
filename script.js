const header = document.querySelector(".site-header");
const signalCanvas = document.querySelector(".signal-canvas");
const navLinks = document.querySelectorAll("[data-section-link]");
const sections = document.querySelectorAll("section[id]");
const filterButtons = document.querySelectorAll("[data-filter]");
const articles = document.querySelectorAll("[data-topic]");
const copyButton = document.querySelector("[data-copy-email]");
const copyFeedback = document.querySelector(".copy-feedback");
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateHeader = () => {
  if (!header) return;
  header.dataset.elevated = String(window.scrollY > 8);
};

window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

if (signalCanvas && !prefersReducedMotion) {
  const context = signalCanvas.getContext("2d");
  const particles = Array.from({ length: 42 }, () => ({
    x: Math.random(),
    y: Math.random(),
    vx: (Math.random() - 0.5) * 0.00042,
    vy: (Math.random() - 0.5) * 0.00042,
    radius: 1.2 + Math.random() * 1.8,
  }));

  let width = 0;
  let height = 0;
  let animationFrame = null;
  let lastDrawTime = 0;

  const resizeCanvas = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 2);
    const bounds = signalCanvas.getBoundingClientRect();
    width = bounds.width;
    height = bounds.height;
    signalCanvas.width = Math.floor(width * ratio);
    signalCanvas.height = Math.floor(height * ratio);
    context.setTransform(ratio, 0, 0, ratio, 0, 0);
  };

  const drawSignalField = (timestamp = 0) => {
    animationFrame = window.requestAnimationFrame(drawSignalField);

    if (document.hidden || timestamp - lastDrawTime < 33) {
      return;
    }

    lastDrawTime = timestamp;
    context.clearRect(0, 0, width, height);

    particles.forEach((particle) => {
      particle.x += particle.vx;
      particle.y += particle.vy;

      if (particle.x < 0 || particle.x > 1) particle.vx *= -1;
      if (particle.y < 0 || particle.y > 1) particle.vy *= -1;

      const x = particle.x * width;
      const y = particle.y * height;

      context.beginPath();
      context.arc(x, y, particle.radius, 0, Math.PI * 2);
      context.fillStyle = "rgba(48, 79, 115, 0.42)";
      context.fill();
    });

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const first = particles[i];
        const second = particles[j];
        const dx = (first.x - second.x) * width;
        const dy = (first.y - second.y) * height;
        const distance = Math.hypot(dx, dy);

        if (distance < 145) {
          context.beginPath();
          context.moveTo(first.x * width, first.y * height);
          context.lineTo(second.x * width, second.y * height);
          context.strokeStyle = `rgba(48, 79, 115, ${0.14 * (1 - distance / 145)})`;
          context.lineWidth = 1;
          context.stroke();
        }
      }
    }
  };

  resizeCanvas();
  drawSignalField();
  window.addEventListener("resize", resizeCanvas, { passive: true });
  window.addEventListener("pagehide", () => window.cancelAnimationFrame(animationFrame));
}

if (navLinks.length && sections.length) {
  const setActiveSection = (sectionId) => {
    navLinks.forEach((link) => {
      const isActive = link.dataset.sectionLink === sectionId;
      link.classList.toggle("is-active", isActive);

      if (isActive) {
        link.setAttribute("aria-current", "page");
      } else {
        link.removeAttribute("aria-current");
      }
    });
  };

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry) {
        setActiveSection(visibleEntry.target.id);
      }
    },
    {
      rootMargin: "-28% 0px -55% 0px",
      threshold: [0.12, 0.28, 0.45],
    },
  );

  sections.forEach((section) => sectionObserver.observe(section));
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((item) => {
      const isActive = item === button;
      item.classList.toggle("is-active", isActive);
      item.setAttribute("aria-pressed", String(isActive));
    });

    articles.forEach((article) => {
      const visible = filter === "all" || article.dataset.topic === filter;
      article.classList.toggle("is-hidden", !visible);
    });
  });
});

if (copyButton && copyFeedback) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.copyEmail;
    const canUseClipboard = window.isSecureContext && navigator.clipboard;

    try {
      if (!canUseClipboard) {
        throw new Error("Clipboard API is unavailable");
      }

      await navigator.clipboard.writeText(email);
      copyFeedback.textContent = "邮箱已复制。";
    } catch {
      copyFeedback.textContent = `请手动复制：${email}`;
    }
  });
}
