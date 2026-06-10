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
    variant: "featured",
    meta: "AI 工具 / 2026",
    title: "个人知识工作台",
    body: "把资料收集、写作、项目跟踪和复盘放到一个流畅的工作流中，用结构化笔记承接长期思考。",
  },
  {
    meta: "工程效率 / 2025",
    title: "自动化交付脚本集",
    body: "面向日常开发、发布、排障的轻量脚本，减少重复操作，提高交付稳定性。",
  },
  {
    variant: "dark",
    meta: "产品设计 / 2025",
    title: "技术博客信息架构",
    body: "围绕文章、项目、笔记、阅读清单建立内容层级，让个人网站可以长期生长。",
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

function Header() {
  const elevated = useHeaderElevation();
  const activeSection = useActiveSection(navItems.map((item) => item.id));

  return (
    <header className="site-header" data-elevated={String(elevated)}>
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
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="live-dot" aria-hidden="true" />
            Independent developer / Technical writer
          </p>
          <h1 id="hero-title">
            <span>把复杂系统</span>
            <span>写清楚，</span>
            <span>也把想法</span>
            <span>做成产品。</span>
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

        <aside className="portrait-panel" aria-label="个人信息摘要">
          <div className="portrait-shell">
            <img
              src={profilePlaceholder}
              alt="个人头像占位图"
              className="portrait"
              width="520"
              height="640"
            />
            <div className="portrait-readout" aria-hidden="true">
              <span>BUILD LOG</span>
              <strong>2026.06</strong>
            </div>
          </div>
          <div className="availability">
            <span className="status-dot" aria-hidden="true" />
            <span>开放远程协作 / 咨询 / 写作合作</span>
          </div>
        </aside>
      </section>

      <div className="ticker" aria-label="关注领域">
        <div className="ticker-bg" aria-hidden="true" />
        <span className="sr-only">{tickerItems.join(" / ")}</span>
      </div>
    </>
  );
}

function ProfileSection() {
  return (
    <section className="section split-section" aria-labelledby="about-title">
      <div>
        <p className="section-kicker">Profile</p>
        <h2 id="about-title">一个偏工程、偏产品、也偏写作的人。</h2>
      </div>
      <div className="prose">
        <p>
          这里可以换成你的真实介绍：你做过什么、擅长什么、现在关注什么，以及别人为什么应该信任你。
          当前版本先保留清爽的个人品牌表达，后面可以扩展成简历、博客、知识库或项目展示站。
        </p>
        <div className="metrics" aria-label="关键数据">
          <div>
            <strong>8+</strong>
            <span>年工程经验</span>
          </div>
          <div>
            <strong>30+</strong>
            <span>项目沉淀</span>
          </div>
          <div>
            <strong>120k</strong>
            <span>文字记录</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function WorkSection() {
  return (
    <section className="section" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Selected work</p>
          <h2 id="work-title">精选项目</h2>
        </div>
        <a className="text-link" href="#contact">
          合作咨询
        </a>
      </div>
      <div className="work-grid">
        {workItems.map((item) => (
          <article
            key={item.title}
            className={["work-item", item.variant].filter(Boolean).join(" ")}
          >
            <div className="work-meta">{item.meta}</div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
            <a href="#contact" aria-label={`联系了解${item.title}项目`}>
              联系了解
            </a>
          </article>
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
    <section className="section writing-section" id="writing" aria-labelledby="writing-title">
      <div className="section-heading">
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
        {visibleArticles.map((article) => (
          <article className="article-row" key={article.title}>
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
    <section className="section notes-section" id="notes" aria-labelledby="notes-title">
      <div className="section-heading">
        <div>
          <p className="section-kicker">Notes</p>
          <h2 id="notes-title">近期笔记</h2>
        </div>
      </div>
      <div className="notes-grid">
        {notes.map((note) => (
          <a className="note-card" href="#contact" key={note.number}>
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
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <p className="section-kicker">Contact</p>
      <h2 id="contact-title">如果你也在构建复杂但值得的东西，欢迎联系。</h2>
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
