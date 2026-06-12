import React from "react";
import profilePlaceholder from "../assets/profile-placeholder.svg";

const { useEffect, useState } = React;

const navItems = [
  { id: "work", label: "项目" },
  { id: "writing", label: "文章" },
  { id: "notes", label: "笔记" },
  { id: "contact", label: "联系" },
];

const workItems = [
  {
    year: "2026",
    category: "AI 工具",
    title: "个人知识工作台",
    body: "把资料收集、写作、项目跟踪和复盘放到一个流畅的工作流中，用结构化笔记承接长期思考。",
    cover: "/work/work-01-cover.png",
    coverAlt: "抽象岩石主视觉",
    inset: "/work/work-01-inset.png",
    insetAlt: "人物肖像视觉",
    href: "#contact",
  },
  {
    year: "2025",
    category: "工程效率",
    title: "自动化交付脚本集",
    body: "面向日常开发、发布、排障的轻量脚本，减少重复操作，提高交付稳定性。",
    cover: "/work/work-02-cover.png",
    coverAlt: "深色产品主视觉",
    inset: "/work/work-02-inset.png",
    insetAlt: "产品细节视觉",
    href: "#contact",
  },
  {
    year: "2025",
    category: "产品设计",
    title: "技术博客信息架构",
    body: "围绕文章、项目、笔记、阅读清单建立内容层级，让个人网站可以长期生长。",
    cover: "/work/work-03-cover.png",
    coverAlt: "信息架构主视觉",
    inset: "/work/work-03-inset.jpeg",
    insetAlt: "界面细节视觉",
    href: "#contact",
  },
  {
    year: "2024",
    category: "知识系统",
    title: "阅读与笔记索引",
    body: "把阅读清单、摘录、主题笔记和复盘串成可检索的长期资料库。",
    cover: "/work/work-04-cover.png",
    coverAlt: "知识系统主视觉",
    inset: "/work/work-04-inset.png",
    insetAlt: "索引卡片视觉",
    href: "#contact",
  },
  {
    year: "2024",
    category: "交互实验",
    title: "个人主页动效原型",
    body: "探索滚动、悬停和信息层级之间的节奏，让作品展示更像可浏览的目录。",
    cover: "/work/work-05-cover.png",
    coverAlt: "动效原型主视觉",
    inset: "/work/work-05-inset.png",
    insetAlt: "交互界面视觉",
    href: "#contact",
  },
  {
    year: "2023",
    category: "内容策略",
    title: "写作发布系统",
    body: "围绕选题、草稿、发布和复盘建立轻量流程，降低长期输出的维护成本。",
    cover: "/work/work-06-cover.png",
    coverAlt: "写作系统主视觉",
    inset: "/work/work-06-inset.png",
    insetAlt: "发布系统细节视觉",
    href: "#contact",
  },
];

const articles = [
  {
    topic: "engineering",
    topicLabel: "Engineering",
    date: "2026-06-01",
    displayDate: "2026.06",
    title: "大型遗留系统里，如何做一次可回滚的重构",
    body: "从边界识别、回归测试、提交粒度到风险控制，记录一次真实工程整理的工作方法。",
  },
  {
    topic: "ai",
    topicLabel: "AI",
    date: "2026-05-14",
    displayDate: "2026.05",
    title: "把 AI 当同事使用，而不是当搜索框使用",
    body: "关于上下文、任务拆解、验证闭环和产出质量的一些实践。",
  },
  {
    topic: "product",
    topicLabel: "Product",
    date: "2026-04-22",
    displayDate: "2026.04",
    title: "个人网站不是简历，而是一个长期信号系统",
    body: "如何用项目、文章、笔记和观点组合出更可信的个人表达。",
  },
  {
    topic: "engineering",
    topicLabel: "Engineering",
    date: "2026-03-09",
    displayDate: "2026.03",
    title: "从脚本到工具：什么时候值得抽象",
    body: "不是所有重复都值得平台化，先把真实约束看清楚。",
  },
];

const notes = [
  {
    number: "01",
    title: "如何判断一个想法值得写成文章",
    body: "有反复出现的问题、有清晰反例、有可以迁移的方法。",
  },
  {
    number: "02",
    title: "我的工具箱",
    body: "编辑器、自动化、知识库、部署和日常写作流程。",
  },
  {
    number: "03",
    title: "阅读清单",
    body: "工程管理、产品判断、系统设计和 AI 应用方向的书与文章。",
  },
];

const filters = [
  { id: "all", label: "全部" },
  { id: "engineering", label: "工程" },
  { id: "ai", label: "AI" },
  { id: "product", label: "产品" },
];

const tickerItems = [
  "AI WORKFLOW",
  "SYSTEM DESIGN",
  "TECHNICAL WRITING",
  "PRODUCT SENSE",
  "AUTOMATION",
  "KNOWLEDGE OPS",
];

const partnerLines = [
  "Strategic Systems",
  "Technical Writing",
  "Product Workflows",
  "AI Operations",
];

const marqueeItems = [...tickerItems, ...tickerItems];

const helixItems = [
  { meta: "01", title: "Systems", body: "工程系统" },
  { meta: "02", title: "Writing", body: "长期写作" },
  { meta: "03", title: "AI Ops", body: "智能工作流" },
  { meta: "04", title: "Product", body: "产品判断" },
  { meta: "05", title: "Automation", body: "自动化交付" },
  { meta: "06", title: "Research", body: "问题研究" },
  { meta: "07", title: "Design", body: "交互表达" },
  { meta: "08", title: "Builder", body: "持续构建" },
  { meta: "09", title: "Methods", body: "方法沉淀" },
];

function useHeaderElevation() {
  const [elevated, setElevated] = useState(false);

  useEffect(() => {
    const updateHeader = () => setElevated(window.scrollY > 8);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    return () => window.removeEventListener("scroll", updateHeader);
  }, []);

  return elevated;
}

function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
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

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [sectionIds]);

  return activeSection;
}

function useGlobalPointer() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return undefined;

    let rafId = 0;
    let nextX = 0;
    let nextY = 0;

    const commit = () => {
      const root = document.documentElement;
      root.style.setProperty("--pointer-x", nextX.toFixed(4));
      root.style.setProperty("--pointer-y", nextY.toFixed(4));
      root.style.setProperty("--cursor-x", `${window.innerWidth * (nextX + 0.5)}px`);
      root.style.setProperty("--cursor-y", `${window.innerHeight * (nextY + 0.5)}px`);
      rafId = 0;
    };

    const handlePointerMove = (event) => {
      nextX = event.clientX / window.innerWidth - 0.5;
      nextY = event.clientY / window.innerHeight - 0.5;

      if (!rafId) {
        rafId = window.requestAnimationFrame(commit);
      }
    };

    const resetPointer = () => {
      nextX = 0;
      nextY = 0;

      if (!rafId) {
        rafId = window.requestAnimationFrame(commit);
      }
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", resetPointer);
    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", resetPointer);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);
}

function useScrollMotion() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return undefined;

    let rafId = 0;

    const commit = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      document.documentElement.style.setProperty("--scroll-progress", progress.toFixed(4));
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY.toFixed(1)}px`);
      document.documentElement.style.setProperty("--scroll-drift", `${(window.scrollY * -0.06).toFixed(1)}px`);
      document.documentElement.style.setProperty("--scroll-shift", `${(progress * -80).toFixed(1)}px`);
      document.documentElement.style.setProperty("--scroll-spin", `${(progress * 360).toFixed(2)}deg`);
      document.documentElement.style.setProperty("--scroll-counterspin", `${(progress * -220).toFixed(2)}deg`);
      document.documentElement.style.setProperty("--scroll-tilt", `${(progress * 10).toFixed(2)}deg`);
      document.documentElement.style.setProperty("--scroll-soft-tilt", `${(progress * -2.8).toFixed(2)}deg`);
      rafId = 0;
    };

    const requestCommit = () => {
      if (!rafId) {
        rafId = window.requestAnimationFrame(commit);
      }
    };

    commit();
    window.addEventListener("scroll", requestCommit, { passive: true });
    window.addEventListener("resize", requestCommit);

    return () => {
      window.removeEventListener("scroll", requestCommit);
      window.removeEventListener("resize", requestCommit);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);
}

function useRevealOnScroll() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const getPendingRevealItems = () =>
      Array.from(document.querySelectorAll("[data-reveal]:not(.is-visible)"));

    if (reduceMotion.matches) {
      getPendingRevealItems().forEach((item) => item.classList.add("is-visible"));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.18,
      },
    );

    const observePendingItems = () => {
      getPendingRevealItems().forEach((item) => observer.observe(item));
    };

    const mutationObserver = new MutationObserver(observePendingItems);

    observePendingItems();
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
}

function Header() {
  const elevated = useHeaderElevation();
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  return (
    <header className="site-header" data-elevated={String(elevated)}>
      <span className="scroll-progress" aria-hidden="true" />
      <a className="brand" href="#top" aria-label="回到首页">
        <span className="brand-mark">YN</span>
        <span>你的名字</span>
      </a>
      <nav className="nav" aria-label="主导航">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={activeSection === item.id ? "is-active" : undefined}
            aria-current={activeSection === item.id ? "page" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title" data-reveal>
        <div className="hero-copy" data-reveal>
          <p className="eyebrow">
            <span className="live-dot" aria-hidden="true" />
            Independent developer / Technical writer
          </p>
          <h1 id="hero-title">
            <span style={{ "--line-index": 0 }}>把复杂系统</span>
            <span style={{ "--line-index": 1 }}>写清楚，</span>
            <span style={{ "--line-index": 2 }}>也把想法</span>
            <span style={{ "--line-index": 3 }}>做成产品。</span>
          </h1>
          <p className="hero-intro">
            我关注工程效率、AI
            应用、产品设计和长期写作。这里收集我的项目、技术文章、实验记录与正在形成的方法论。
          </p>
          <div className="hero-tags" aria-label="关注方向">
            <span>AI Workflow</span>
            <span>Engineering Systems</span>
            <span>Product Thinking</span>
          </div>
          <div className="hero-actions" aria-label="主要操作">
            <a className="button primary" href="#writing">
              阅读文章
            </a>
            <a className="button secondary" href="#work">
              查看项目
            </a>
          </div>
        </div>

        <SingleHelix />
      </section>

      <PalmerView />
    </>
  );
}

function SingleHelix() {
  const lastIndex = helixItems.length - 1;

  return (
    <aside className="single-helix" aria-label="单螺旋动态能力展示" data-reveal>
      <div className="single-helix__stage">
        <div className="single-helix__axis" aria-hidden="true" />
        <svg className="single-helix__thread" viewBox="0 0 420 640" aria-hidden="true">
          <path d="M210 28 C84 92 84 168 210 232 S336 372 210 436 S84 548 210 612" />
        </svg>
        <div className="single-helix__track" aria-hidden="true">
          {helixItems.map((item, index) => {
            const angle = index * 48;
            const y = 8 + (index / lastIndex) * 84;

            return (
              <div
                className="single-helix__card-shell"
                key={item.title}
                style={{
                  "--helix-angle": `${angle}deg`,
                  "--helix-face": `${-angle}deg`,
                  "--helix-face-end": `${360 - angle}deg`,
                  "--helix-y": `${y}%`,
                  "--helix-delay": `${index * -0.12}s`,
                }}
              >
                <div className="single-helix__card">
                  <span>{item.meta}</span>
                  <strong>{item.title}</strong>
                  <em>{item.body}</em>
                </div>
              </div>
            );
          })}
        </div>
        <div className="single-helix__portrait">
          <img src={profilePlaceholder} alt="个人头像占位图" width="180" height="220" />
        </div>
      </div>
      <div className="availability">
        <span className="status-dot" aria-hidden="true" />
        <span>开放远程协作 / 咨询 / 写作合作</span>
      </div>
    </aside>
  );
}

function RollingText({ children }) {
  return (
    <span className="rolling-text" aria-label={children}>
      <span aria-hidden="true">{children}</span>
    </span>
  );
}

function PalmerView() {
  return (
    <section className="palmer-view" id="palmer-view" aria-labelledby="palmer-view-title">
      <div className="palmer-view__marquee" aria-hidden="true">
        <div>
          {marqueeItems.map((item, index) => (
            <span key={`${item}-${index}`}>{item}</span>
          ))}
        </div>
      </div>
      <div className="palmer-view__inner">
        <div className="palmer-view__meta" aria-label="Brand partner metadata" data-reveal>
          <span>© Brand Partners</span>
          <span>パートナー</span>
          <strong>(WDX® — 08)</strong>
        </div>

        <div className="palmer-view__statement" data-reveal>
          <p className="palmer-view__kicker">Selected practice</p>
          <h2 id="palmer-view-title">
            <RollingText>Creative</RollingText>
            <RollingText>Teams</RollingText>
          </h2>
        </div>

        <div className="palmer-view__orbit" aria-hidden="true" data-reveal>
          <svg className="orbit-ring" viewBox="0 0 220 220">
            <defs>
              <path
                id="orbit-text-path"
                d="M110,110 m-82,0 a82,82 0 1,1 164,0 a82,82 0 1,1 -164,0"
              />
            </defs>
            <circle cx="110" cy="110" r="88" />
            <text>
              <textPath href="#orbit-text-path" startOffset="0%">
                VIEW MODE • SYSTEMS • WRITING • PRODUCT •
              </textPath>
            </text>
          </svg>
          <div className="orbit-core">
            <span>View</span>
            <strong>08</strong>
          </div>
        </div>

        <ul className="palmer-view__list" aria-label="Practice areas">
          {partnerLines.map((line, index) => (
            <li
              key={line}
              data-reveal
              style={{ "--reveal-delay": `${index * 70}ms` }}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              <RollingText>{line}</RollingText>
            </li>
          ))}
        </ul>

        <div className="palmer-view__strip" aria-hidden="true">
          <span>Art Direction</span>
          <span>Systems</span>
          <span>Strategy</span>
        </div>

        <div className="palmer-view__footer" aria-hidden="true">
          <span>© Curated Interfaces ビジュアル</span>
          <span>(WDX® — 08)</span>
          <span>Digital Builder</span>
        </div>
      </div>
      <span className="sr-only">{tickerItems.join(" / ")}</span>
    </section>
  );
}

function ProfileSection() {
  return (
    <section className="section split-section" aria-labelledby="about-title" data-reveal>
      <div data-reveal>
        <p className="section-kicker">Profile</p>
        <h2 id="about-title">一个偏工程、偏产品、也偏写作的人。</h2>
      </div>
      <div className="prose" data-reveal>
        <p>
          这里可以换成你的真实介绍：你做过什么、擅长什么、现在关注什么，以及别人为什么应该信任你。
          当前版本先保留清爽的个人品牌表达，后面可以扩展成简历、博客、知识库或项目展示站。
        </p>
        <div className="metrics" aria-label="关键数据">
          <div data-reveal style={{ "--reveal-delay": "0ms" }}>
            <strong>8+</strong>
            <span>年工程经验</span>
          </div>
          <div data-reveal style={{ "--reveal-delay": "80ms" }}>
            <strong>30+</strong>
            <span>项目沉淀</span>
          </div>
          <div data-reveal style={{ "--reveal-delay": "160ms" }}>
            <strong>120k</strong>
            <span>文字记录</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  const handleCardPointerMove = (event) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    event.currentTarget.style.setProperty("--card-x", x.toFixed(4));
    event.currentTarget.style.setProperty("--card-y", y.toFixed(4));
  };

  const handleCardPointerLeave = (event) => {
    event.currentTarget.style.setProperty("--card-x", "0");
    event.currentTarget.style.setProperty("--card-y", "0");
  };

  return (
    <section className="section work-section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">See works</p>
          <h2 id="work-title">精选项目</h2>
        </div>
        <a className="text-link" href="#contact">
          合作咨询
        </a>
      </div>
      <div className="work-cards" aria-label="精选项目列表">
        {workItems.map((item, index) => (
          <a
            key={item.title}
            className={[
              "work-card",
              index === 0 ? "is-featured" : "",
              index % 3 === 1 ? "is-tall" : "",
              index % 3 === 2 ? "is-offset" : "",
            ].filter(Boolean).join(" ")}
            href={item.href}
            onPointerMove={handleCardPointerMove}
            onPointerLeave={handleCardPointerLeave}
            aria-label={`查看${item.title}项目`}
          >
            <span className="work-card__top">
              <span className="work-card__glow" aria-hidden="true" />
              <span className="work-card__media">
                <img src={item.cover} alt={item.coverAlt} loading="lazy" />
              </span>
              <span className="work-card__frame" aria-hidden="true">
                <span>{item.year}</span>
                <span>{item.category}</span>
              </span>
              <span className="work-card__inset">
                <img src={item.inset} alt={item.insetAlt} loading="lazy" />
              </span>
              <span className="work-card__banner" aria-hidden="true">
                <span>{item.category}</span>
                <span />
              </span>
              <span className="work-card__orbit" aria-hidden="true" />
            </span>
            <span className="work-card__bottom">
              <span>
                <span className="work-card__title">
                  <span>{item.title}</span>
                  <span>{item.title}</span>
                </span>
                <small>{item.body}</small>
              </span>
              <span className="work-card__count">({String(index + 1).padStart(2, "0")})</span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function WritingSection() {
  const [filter, setFilter] = useState("all");
  const visibleArticles = articles.filter(
    (article) => filter === "all" || article.topic === filter,
  );

  return (
    <section className="section writing-section" id="writing" aria-labelledby="writing-title" data-reveal>
      <div className="section-heading" data-reveal>
        <div>
          <p className="section-kicker">Writing</p>
          <h2 id="writing-title">技术文章</h2>
        </div>
        <div className="filter-group" aria-label="文章分类筛选">
          {filters.map((item) => {
            const active = filter === item.id;

            return (
              <button
                key={item.id}
                className={`filter-button${active ? " is-active" : ""}`}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="article-list">
        {visibleArticles.map((article, index) => (
          <article
            className="article-row"
            key={article.title}
            data-reveal
            style={{ "--reveal-delay": `${index * 55}ms` }}
          >
            <time dateTime={article.date}>{article.displayDate}</time>
            <div>
              <p className="article-topic">{article.topicLabel}</p>
              <h3>
                <a href="#contact">{article.title}</a>
              </h3>
              <p>{article.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function NotesSection() {
  return (
    <section className="section notes-section" id="notes" aria-labelledby="notes-title" data-reveal>
      <div className="section-heading" data-reveal>
        <div>
          <p className="section-kicker">Notes</p>
          <h2 id="notes-title">近期笔记</h2>
        </div>
      </div>
      <div className="notes-grid">
        {notes.map((note, index) => (
          <a
            className="note-card"
            href="#contact"
            key={note.number}
            data-reveal
            style={{ "--reveal-delay": `${index * 85}ms` }}
          >
            <span>{note.number}</span>
            <h3>{note.title}</h3>
            <p>{note.body}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  const [feedback, setFeedback] = useState("");
  const email = "hello@example.com";

  const copyEmail = async () => {
    const canUseClipboard = window.isSecureContext && navigator.clipboard;

    try {
      if (!canUseClipboard) {
        throw new Error("Clipboard API is unavailable");
      }

      await navigator.clipboard.writeText(email);
      setFeedback("邮箱已复制。");
    } catch {
      setFeedback(`请手动复制：${email}`);
    }
  };

  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title" data-reveal>
      <p className="section-kicker">Contact</p>
      <h2 id="contact-title" data-reveal>
        如果你也在构建复杂但值得的东西，欢迎联系。
      </h2>
      <div className="contact-actions">
        <a className="button primary" href={`mailto:${email}`}>
          {email}
        </a>
        <button className="button secondary" type="button" onClick={copyEmail}>
          复制邮箱
        </button>
      </div>
      <p className="copy-feedback" role="status" aria-live="polite">
        {feedback}
      </p>
    </section>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>© 2026 你的名字</span>
      <span>Built for clear thinking and durable work.</span>
    </footer>
  );
}

export default function App() {
  useGlobalPointer();
  useScrollMotion();
  useRevealOnScroll();

  return (
    <>
      <a className="skip-link" href="#work">
        跳到主要内容
      </a>
      <Header />
      <main id="top">
        <Hero />
        <ProfileSection />
        <WorkSection />
        <WritingSection />
        <NotesSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
