import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import portrait from "@/assets/abdi-portrait.jpg.asset.json";
import acUnitVideo from "@/assets/ac-unit.mp4.asset.json";
import easybankImage from "@/assets/easybank.png.asset.json";
import siliconImage from "@/assets/silicon.png.asset.json";
import {
  Home,
  User,
  FolderGit2,
  Sparkles,
  Mail,
  Quote,
  FileText,
  Github,
  Linkedin,
  MapPin,
  Phone,
  AtSign,
  GraduationCap,
  ArrowUpRight,
  Menu,
  X,
  Terminal,
  Cpu,
  Database,
  Cloud,
  Code2,
  Zap,
  GitBranch,
  Activity,
  Languages,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abdirahman Elmi — .NET Developer" },
      {
        name: "description",
        content:
          "Portfolio för Abdirahman Elmi — .NET-utvecklare i Stockholm. C#, ASP.NET, Azure, React. Projekt, kunskap och kontakt.",
      },
      { property: "og:title", content: "Abdirahman Elmi — .NET Developer" },
      {
        property: "og:description",
        content:
          "Portfolio för Abdirahman Elmi — .NET-utvecklare i Stockholm.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: PortfolioPage,
});

type Lang = "sv" | "en";

const dict = {
  sv: {
    nav: {
      hem: "Hem",
      om: "Om mig",
      projekt: "Projekt",
      kunskap: "Kunskap",
      kontakt: "Kontakt",
      referenser: "Referenser",
    },
    navHeader: "// navigation",
    downloadCv: "Ladda ner CV",
    online: "online",
    role: ".NET Developer",
    statusLabel: "status:",
    statusValue: "tillgänglig för uppdrag",
    heroParagraph: (
      <>
        .NET-utvecklare med ett hjärta för ren arkitektur. Jag bygger stabila
        och skalbara lösningar med{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
          C#
        </code>
        ,{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
          ASP.NET
        </code>{" "}
        och{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
          Azure
        </code>
        .
      </>
    ),
    seeProjects: "Se projekt",
    contactMe: "Kontakta mig",
    stats: { stack: "Stack", cloud: "Cloud", focus: "Fokus", active: "Aktiv" },
    statsValues: { focus: "Backend" },
    about: {
      title: "Om mig",
      sub: "about.md",
      p1: "Koden är platsen där jag trivs bäst. Med en känsla för detaljer och ett hjärta för ren arkitektur bygger jag .NET-applikationer som inte bara fungerar — de känns rätt.",
      p2: "Modern utveckling handlar inte bara om verktyg — det handlar om att förstå hur allt hänger ihop. Jag bygger högpresterande appar med C# och .NET, rör mig tryggt bland SQL och Azure och får allt att mötas på frontend med HTML, CSS, JavaScript och React.",
      p3: "Oavsett om jag jobbar självständigt eller tillsammans med ett team är målet alltid detsamma — att skapa mjukvara som faktiskt gör skillnad för användare och ger värde för kunden.",
      education: "Systemutveckling .NET",
    },
    labels: {
      phone: "telefon",
      location: "ort",
      email: "e-post",
      education: "utbildning",
    },
    projectsSection: { title: "Projekt", sub: "git log --oneline" },
    skillsSection: { title: "Kunskap", sub: "stack.config.ts" },
    proficiency: "proficiency",
    contactSection: { title: "Kontakt", sub: "curl --message" },
    form: {
      name: "namn",
      email: "e-post",
      subject: "ämne",
      message: "meddelande",
      send: "Skicka meddelande",
      sent: "Tack! Ditt meddelande har skickats.",
    },
    refsSection: { title: "Referenser", sub: "trusted_by[]" },
    footerEcho: "© 2026 Abdirahman Elmi",
    footerBranch: "main · byggd i Stockholm",
    projectStatus: { live: "Live", inProgress: "I process" },
    projectCtas: { readMore: "Läs mer", seeCode: "Se kod" },
    commit: "commit",
    projects: [
      {
        title: "Silicon — Mobilbank",
        desc: "Modern mobilbank som gör det enkelt att hantera din ekonomi. Spara, spendera och håll koll på dina utgifter direkt i appen.",
      },
      {
        title: "Easy Bank — Webbaserad bankplattform",
        desc: "Bankprojekt byggt i ASP.NET Core Razor Pages. Hantera kunder, konton, transaktioner och gör insättningar samt uttag.",
      },
      {
        title: "WPF IoT Project",
        desc: "Windowsapplikation som simulerar en IoT-enhet (en fläkt) med WPF och MVVM. Kopplas till Azure IoT Hub, rapporterar tillstånd via Device Twin och konfigureras från UI.",
      },
    ],
    skills: [
      {
        title: "C# & .NET",
        desc: "Erfaren i att bygga applikationer med C# — webb, skrivbord och mobil. Använder .NET Core för skalbara lösningar.",
        area: "Backend",
      },
      {
        title: "SQL & Azure",
        desc: "Kunnig i SQL och Azure för databashantering och molntjänster. Designar relationsdatabaser och skriver komplexa frågor.",
        area: "Data & Cloud",
      },
      {
        title: "React & Web",
        desc: "Skapar responsiva och tilltalande webbgränssnitt med moderna ramverk för att bygga dynamiska webbapplikationer.",
        area: "Frontend",
      },
    ],
    references: [
      {
        name: "Ayaz Rosén",
        title: "AI & Cybersäkerhetsstrateg. Jobbade på Microsoft i 13 år.",
        relation: "Mentor",
      },
      {
        name: "Hadi Feisal",
        title:
          "Senior systemutvecklare med över 5 års erfarenhet i branschen. Jobbar numera på Apotek Hjärtat.",
        relation: "Vän & kollega",
      },
    ],
  },
  en: {
    nav: {
      hem: "Home",
      om: "About",
      projekt: "Projects",
      kunskap: "Skills",
      kontakt: "Contact",
      referenser: "References",
    },
    navHeader: "// navigation",
    downloadCv: "Download CV",
    online: "online",
    role: ".NET Developer",
    statusLabel: "status:",
    statusValue: "available for work",
    heroParagraph: (
      <>
        .NET developer with a passion for clean architecture. I build stable
        and scalable solutions with{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
          C#
        </code>
        ,{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
          ASP.NET
        </code>{" "}
        and{" "}
        <code className="rounded bg-secondary px-1.5 py-0.5 font-mono text-[0.85em] text-foreground">
          Azure
        </code>
        .
      </>
    ),
    seeProjects: "View projects",
    contactMe: "Contact me",
    stats: { stack: "Stack", cloud: "Cloud", focus: "Focus", active: "Active" },
    statsValues: { focus: "Backend" },
    about: {
      title: "About",
      sub: "about.md",
      p1: "Code is where I feel most at home. With an eye for detail and a passion for clean architecture, I build .NET applications that don't just work — they feel right.",
      p2: "Modern development isn't only about tools — it's about understanding how everything fits together. I build high-performance apps with C# and .NET, move confidently across SQL and Azure, and tie it all together on the frontend with HTML, CSS, JavaScript and React.",
      p3: "Whether I'm working independently or with a team, the goal is the same — to ship software that actually makes a difference for users and delivers value to the client.",
      education: "Software development .NET",
    },
    labels: {
      phone: "phone",
      location: "location",
      email: "email",
      education: "education",
    },
    projectsSection: { title: "Projects", sub: "git log --oneline" },
    skillsSection: { title: "Skills", sub: "stack.config.ts" },
    proficiency: "proficiency",
    contactSection: { title: "Contact", sub: "curl --message" },
    form: {
      name: "name",
      email: "email",
      subject: "subject",
      message: "message",
      send: "Send message",
      sent: "Thanks! Your message has been sent.",
    },
    refsSection: { title: "References", sub: "trusted_by[]" },
    footerEcho: "© 2026 Abdirahman Elmi",
    footerBranch: "main · built in Stockholm",
    projectStatus: { live: "Live", inProgress: "In progress" },
    projectCtas: { readMore: "Read more", seeCode: "View code" },
    commit: "commit",
    projects: [
      {
        title: "Silicon — Mobile Bank",
        desc: "Modern mobile bank that makes it easy to manage your finances. Save, spend and track your expenses straight from the app.",
      },
      {
        title: "Easy Bank — Web Banking Platform",
        desc: "Banking project built with ASP.NET Core Razor Pages. Manage customers, accounts, transactions, deposits and withdrawals.",
      },
      {
        title: "WPF IoT Project",
        desc: "Windows application simulating an IoT device (a fan) using WPF and MVVM. Connects to Azure IoT Hub, reports state via Device Twin and is configured from the UI.",
      },
    ],
    skills: [
      {
        title: "C# & .NET",
        desc: "Experienced in building applications with C# — web, desktop and mobile. Using .NET Core for scalable solutions.",
        area: "Backend",
      },
      {
        title: "SQL & Azure",
        desc: "Skilled in SQL and Azure for data and cloud. Design relational databases and write complex queries.",
        area: "Data & Cloud",
      },
      {
        title: "React & Web",
        desc: "Building responsive and engaging web interfaces with modern frameworks for dynamic web applications.",
        area: "Frontend",
      },
    ],
    references: [
      {
        name: "Ayaz Rosén",
        title: "AI & Cybersecurity strategist. Worked at Microsoft for 13 years.",
        relation: "Mentor",
      },
      {
        name: "Hadi Feisal",
        title:
          "Senior software developer with over 5 years in the industry. Currently at Apotek Hjärtat.",
        relation: "Friend & colleague",
      },
    ],
  },
} as const;

const projectsMeta = [
  { tags: ["C#", ".NET MAUI", "Azure", "SQL"], status: "inProgress", year: "2026", category: "Mobile / FinTech", video: null as string | null, image: siliconImage.url as string | null },
  { tags: ["ASP.NET Core", "Razor Pages", "EF Core", "SQL Server", "Bootstrap"], status: "live", year: "2025", category: "Web / FinTech", video: null as string | null, image: easybankImage.url as string | null },
  { tags: ["WPF", "MVVM", "Azure IoT Hub", "C#", "Device Twin"], status: "live", year: "2025", category: "Desktop / IoT", video: acUnitVideo.url as string | null, image: null as string | null },
] as const;

const skillsMeta = [
  { tags: ["ASP.NET Core", "Entity Framework", "LINQ", "MAUI"], icon: Code2, level: 90 },
  { tags: ["SQL Server", "Azure SQL", "Data modeling"], icon: Database, level: 80 },
  { tags: ["HTML5", "CSS3", "JavaScript", "React"], icon: Zap, level: 75 },
] as const;

const referencesMeta = [
  { handle: "ayazshukat" },
  { handle: "haadi-feisal" },
] as const;

const navIcons = {
  hem: Home,
  om: User,
  projekt: FolderGit2,
  kunskap: Sparkles,
  kontakt: Mail,
  referenser: Quote,
} as const;

const navCmd = {
  hem: "~/home",
  om: "~/about",
  projekt: "~/projects",
  kunskap: "~/skills",
  kontakt: "~/contact",
  referenser: "~/refs",
} as const;

const navOrder = ["hem", "om", "projekt", "kunskap", "kontakt", "referenser"] as const;

function PortfolioPage() {
  const [active, setActive] = useState("hem");
  const [navOpen, setNavOpen] = useState(false);
  const [time, setTime] = useState("");
  const [lang, setLang] = useState<Lang>("sv");

  useEffect(() => {
    const stored = typeof window !== "undefined"
      ? (localStorage.getItem("lang") as Lang | null)
      : null;
    if (stored === "sv" || stored === "en") setLang(stored);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const t = dict[lang];

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const fmt = new Intl.DateTimeFormat(lang === "sv" ? "sv-SE" : "en-GB", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        timeZone: "Europe/Stockholm",
      }).format(d);
      setTime(fmt);
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, [lang]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    navOrder.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const toggleLang = () => setLang((l) => (l === "sv" ? "en" : "sv"));

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 backdrop-blur px-4 py-3">
        <a href="#hem" className="flex items-center gap-2 font-mono text-sm font-bold tracking-tight">
          <Terminal className="h-4 w-4 text-accent-tech" />
          abdi<span className="text-muted-foreground">@elmi:~$</span>
        </a>
        <div className="flex items-center gap-2">
          <LangToggle lang={lang} onToggle={toggleLang} />
          <button
            onClick={() => setNavOpen((o) => !o)}
            aria-label="Menu"
            className="rounded-md border border-border p-2"
          >
            {navOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-72 flex-col justify-between border-r border-sidebar-border bg-sidebar text-sidebar-foreground p-6 transition-transform duration-300
          ${navOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:flex`}
      >
        <div>
          {/* Terminal-style brand */}
          <div className="rounded-lg border border-sidebar-border bg-sidebar-accent/40 p-3">
            <div className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.18_27)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.15_85)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-tech" />
              <span className="ml-auto font-mono text-[10px] text-sidebar-foreground/40">
                ~/portfolio
              </span>
            </div>
            <div className="mt-3 font-mono text-[11px] leading-relaxed text-sidebar-foreground/80">
              <div>
                <span className="text-accent-tech">$</span> whoami
              </div>
              <div className="text-sidebar-foreground">abdirahman.elmi</div>
              <div className="mt-1">
                <span className="text-accent-tech">$</span> role
              </div>
              <div className="text-sidebar-foreground">{t.role}</div>
            </div>
          </div>

          {/* Language switch (desktop) */}
          <div className="mt-4 hidden md:block">
            <LangToggle lang={lang} onToggle={toggleLang} full />
          </div>

          <nav className="mt-6 space-y-1">
            <div className="px-3 pb-2 font-mono text-[10px] uppercase tracking-widest text-sidebar-foreground/40">
              {t.navHeader}
            </div>
            {navOrder.map((id, idx) => {
              const Icon = navIcons[id];
              const isActive = active === id;
              return (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={() => setNavOpen(false)}
                  className={`group flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-all
                    ${
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground/65 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                    }`}
                >
                  <span
                    className={`font-mono text-[10px] ${
                      isActive ? "text-accent-tech" : "text-sidebar-foreground/40"
                    }`}
                  >
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <Icon className="h-3.5 w-3.5" />
                  <span className="font-medium">{t.nav[id]}</span>
                  {isActive && (
                    <span className="ml-auto font-mono text-[10px] text-accent-tech animate-caret">
                      ▌
                    </span>
                  )}
                </a>
              );
            })}
            <a
              href="#cv"
              className="mt-4 flex items-center gap-3 rounded-md border border-sidebar-border px-3 py-2 text-sm font-medium text-sidebar-foreground hover:border-accent-tech hover:text-accent-tech"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>{t.downloadCv}</span>
              <ArrowUpRight className="ml-auto h-3.5 w-3.5" />
            </a>
          </nav>
        </div>

        <div className="space-y-3">
          <div className="rounded-md border border-sidebar-border bg-sidebar-accent/30 px-3 py-2 font-mono text-[10px] text-sidebar-foreground/60">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-accent-tech animate-pulse" />
                {t.online}
              </span>
              <span>{time || "--:--:--"}</span>
            </div>
            <div className="mt-1 flex items-center justify-between">
              <span>STO · UTC+1</span>
              <span>v2.0.26</span>
            </div>
          </div>

          <div className="flex gap-2">
            <SocialIcon href="https://github.com/" Icon={Github} />
            <SocialIcon href="https://linkedin.com/" Icon={Linkedin} />
            <SocialIcon href="mailto:abdi.elmii@outlook.com" Icon={AtSign} />
          </div>
          <p className="font-mono text-[10px] leading-relaxed text-sidebar-foreground/35">
            © 2026 · MIT
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className="md:ml-72">
        {/* HEM */}
        <Section id="hem" className="relative overflow-hidden grid-dots">
          <div className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-accent-tech/10 blur-3xl" />

          <div className="relative mx-auto grid min-h-[90vh] max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-12 md:px-16">
            <div className="md:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-3 py-1.5 font-mono text-[11px] backdrop-blur">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-tech opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-tech" />
                </span>
                <span className="text-foreground/80">{t.statusLabel}</span>
                <span className="text-foreground">{t.statusValue}</span>
              </div>

              <h1 className="mt-7 font-display text-5xl font-bold leading-[0.95] tracking-tighter md:text-6xl lg:text-7xl">
                Abdirahman
                <br />
                <span className="text-muted-foreground">Elmi</span>
                <span className="text-accent-tech">.</span>
              </h1>

              <div className="mt-6 inline-flex items-center gap-2 rounded-md border border-border bg-card px-3 py-2 font-mono text-[12px]">
                <span className="text-accent-tech">$</span>
                <span className="text-muted-foreground">./build --stack=</span>
                <span className="text-foreground">dotnet,azure,react</span>
                <span className="animate-caret text-accent-tech">▌</span>
              </div>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-foreground/80 md:text-xl">
                {t.heroParagraph}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#projekt"
                  className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-tech"
                >
                  <span className="font-mono text-accent-tech">›</span>
                  {t.seeProjects}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </a>
                <a
                  href="#kontakt"
                  className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-5 py-3 text-sm font-medium hover:border-foreground"
                >
                  <Mail className="h-4 w-4" />
                  {t.contactMe}
                </a>
              </div>
            </div>

            <div className="md:col-span-5">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-2 -z-10 rounded-xl border border-accent-tech/30" />
                <div className="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-xl bg-foreground" />
                <div className="overflow-hidden rounded-xl border border-border bg-card shadow-tech">
                  <div className="flex items-center gap-1.5 border-b border-border bg-secondary/50 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.18_27)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.15_85)]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-accent-tech" />
                    <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                      ~/profile/abdi.jpg
                    </span>
                  </div>
                  <div className="relative">
                    <img
                      src={portrait.url}
                      alt="Abdirahman Elmi"
                      className="aspect-[4/5] w-full object-cover grayscale transition-all duration-700 hover:grayscale-0"
                      loading="eager"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent_0,transparent_2px,oklch(0_0_0/0.04)_2px,oklch(0_0_0/0.04)_3px)]" />
                  </div>
                  <div className="flex items-center justify-between border-t border-border bg-secondary/40 px-3 py-2 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-3 w-3" />
                      Stockholm · SE
                    </span>
                    <span>59.3°N</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-y border-border bg-foreground py-3 text-background overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap font-mono text-xs uppercase tracking-widest">
              {[...Array(2)].map((_, i) => (
                <div key={i} className="flex items-center gap-8 px-4">
                  {[
                    "C#",
                    "ASP.NET Core",
                    "Azure",
                    "SQL Server",
                    "Entity Framework",
                    ".NET MAUI",
                    "WPF",
                    "React",
                    "TypeScript",
                    "Git",
                    "Docker",
                    "Clean Architecture",
                  ].map((tag) => (
                    <span key={tag + i} className="flex items-center gap-8">
                      <span className="text-accent-tech">◆</span>
                      <span>{tag}</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mx-auto max-w-6xl px-6 py-12 md:px-16">
            <div className="grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-4">
              {[
                { k: t.stats.stack, v: ".NET · C#", Icon: Code2 },
                { k: t.stats.cloud, v: "Azure", Icon: Cloud },
                { k: t.stats.focus, v: t.statsValues.focus, Icon: Cpu },
                { k: t.stats.active, v: "2024 →", Icon: Activity },
              ].map(({ k, v, Icon }) => (
                <div key={k} className="bg-card p-5">
                  <Icon className="h-4 w-4 text-accent-tech" />
                  <div className="mt-3 font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {k}
                  </div>
                  <div className="mt-1 font-display text-sm font-semibold">
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* OM MIG */}
        <Section id="om">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-16">
            <SectionHeader index="02" title={t.about.title} subtitle={t.about.sub} />
            <div className="mt-12 grid gap-12 md:grid-cols-5">
              <div className="md:col-span-3 space-y-6 text-foreground/80 leading-relaxed">
                <p className="text-lg">
                  <span className="font-mono text-accent-tech">{"//"} </span>
                  {t.about.p1}
                </p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
              <ul className="md:col-span-2 space-y-3">
                {[
                  { Icon: Phone, k: t.labels.phone, v: "+46 73 963 75 26" },
                  { Icon: MapPin, k: t.labels.location, v: "Stockholm, SE" },
                  { Icon: AtSign, k: t.labels.email, v: "abdi.elmii@outlook.com" },
                  { Icon: GraduationCap, k: t.labels.education, v: t.about.education },
                ].map(({ Icon, k, v }) => (
                  <li
                    key={k}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-3.5 transition-colors hover:border-accent-tech"
                  >
                    <Icon className="mt-0.5 h-4 w-4 text-accent-tech" />
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] text-muted-foreground">
                        {k}:
                      </div>
                      <div className="truncate text-sm font-medium">{v}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* PROJEKT */}
        <Section id="projekt" className="bg-secondary/40 grid-paper">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-16">
            <SectionHeader index="03" title={t.projectsSection.title} subtitle={t.projectsSection.sub} />
            <div className="mt-12 space-y-4">
              {projectsMeta.map((meta, i) => {
                const p = t.projects[i];
                return (
                <ProjectCard
                    key={p.title}
                    title={p.title}
                    desc={p.desc}
                    tags={meta.tags as readonly string[]}
                    status={t.projectStatus[meta.status]}
                    statusLive={meta.status === "live"}
                    year={meta.year}
                    category={meta.category}
                    index={i + 1}
                    commitLabel={t.commit}
                    video={meta.video}
                    image={meta.image}
                  />
                );
              })}
            </div>
          </div>
        </Section>

        {/* KUNSKAP */}
        <Section id="kunskap">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-16">
            <SectionHeader index="04" title={t.skillsSection.title} subtitle={t.skillsSection.sub} />
            <div className="mt-12 grid gap-5 md:grid-cols-3">
              {skillsMeta.map((meta, i) => {
                const s = t.skills[i];
                const Icon = meta.icon;
                return (
                  <div
                    key={s.title}
                    className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent-tech hover:shadow-tech"
                  >
                    <div className="flex items-center justify-between">
                      <div className="grid h-10 w-10 place-items-center rounded-md border border-border bg-background">
                        <Icon className="h-4 w-4 text-accent-tech" />
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {s.area}
                      </div>
                    </div>
                    <h3 className="mt-5 font-display text-xl font-bold">{s.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">{s.desc}</p>
                    <div className="mt-5">
                      <div className="flex items-center justify-between font-mono text-[10px] text-muted-foreground">
                        <span>{t.proficiency}</span>
                        <span>{meta.level}%</span>
                      </div>
                      <div className="mt-1.5 h-1 overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full rounded-full bg-foreground transition-all"
                          style={{ width: `${meta.level}%` }}
                        />
                      </div>
                    </div>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {meta.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Section>

        {/* KONTAKT */}
        <Section id="kontakt" className="bg-secondary/40">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-16">
            <SectionHeader index="05" title={t.contactSection.title} subtitle={t.contactSection.sub} />
            <div className="mt-12 grid gap-8 md:grid-cols-5">
              <div className="md:col-span-2 space-y-3">
                {[
                  { Icon: MapPin, k: t.labels.location, v: "Stockholm, SE" },
                  { Icon: AtSign, k: t.labels.email, v: "abdi.elmii@outlook.com" },
                  { Icon: Phone, k: t.labels.phone, v: "+46 73 963 75 26" },
                ].map(({ Icon, k, v }) => (
                  <div
                    key={k}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-3.5"
                  >
                    <div className="grid h-9 w-9 place-items-center rounded-md border border-border bg-background">
                      <Icon className="h-4 w-4 text-accent-tech" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-mono text-[10px] text-muted-foreground">
                        {k}:
                      </div>
                      <div className="truncate text-sm font-medium">{v}</div>
                    </div>
                  </div>
                ))}
                <div className="rounded-lg border border-border bg-foreground p-4 text-background font-mono text-[11px]">
                  <div className="text-accent-tech">$ ping abdi</div>
                  <div className="mt-1 opacity-80">
                    Reply from abdi.elmii@outlook.com
                  </div>
                  <div className="opacity-80">time&lt;24h · TTL=∞</div>
                </div>
              </div>

              <form
                className="md:col-span-3 space-y-4 rounded-xl border border-border bg-card p-6 shadow-tech"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(t.form.sent);
                }}
              >
                <div className="flex items-center gap-1.5 border-b border-border pb-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.18_27)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.15_85)]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-accent-tech" />
                  <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                    message.compose()
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label={t.form.name} name="name" required />
                  <Field label={t.form.email} name="email" type="email" required />
                </div>
                <Field label={t.form.subject} name="subject" required />
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {t.form.message}
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="mt-1.5 w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 font-mono text-sm focus:border-accent-tech focus:outline-none focus:ring-1 focus:ring-accent-tech/30"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-md bg-foreground px-5 py-3 text-sm font-medium text-background transition-all hover:-translate-y-0.5 hover:shadow-tech"
                >
                  <span className="font-mono text-accent-tech">›</span>
                  {t.form.send}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </button>
              </form>
            </div>
          </div>
        </Section>

        {/* REFERENSER */}
        <Section id="referenser">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-16">
            <SectionHeader index="06" title={t.refsSection.title} subtitle={t.refsSection.sub} />
            <div className="mt-12 grid gap-5 md:grid-cols-2">
              {referencesMeta.map((meta, i) => {
                const r = t.references[i];
                return (
                  <figure
                    key={r.name}
                    className="rounded-xl border border-border bg-card p-7 transition-all hover:border-accent-tech"
                  >
                    <Quote className="h-5 w-5 text-accent-tech" />
                    <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
                      {r.title}
                    </blockquote>
                    <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                      <div>
                        <div className="font-display text-sm font-bold">{r.name}</div>
                        <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                          // {r.relation}
                        </div>
                      </div>
                      <a
                        href="#"
                        className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-accent-tech"
                      >
                        <Linkedin className="h-3.5 w-3.5" />
                        {meta.handle}
                      </a>
                    </figcaption>
                  </figure>
                );
              })}
            </div>
          </div>
        </Section>

        <footer className="border-t border-border px-6 py-8 md:px-16">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-3 md:flex-row md:items-center">
            <p className="font-mono text-xs text-muted-foreground">
              <span className="text-accent-tech">$</span> echo {t.footerEcho}
            </p>
            <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <GitBranch className="h-3 w-3" />
              {t.footerBranch}
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function LangToggle({
  lang,
  onToggle,
  full = false,
}: {
  lang: Lang;
  onToggle: () => void;
  full?: boolean;
}) {
  return (
    <button
      onClick={onToggle}
      aria-label="Toggle language"
      className={`group inline-flex items-center gap-2 rounded-md border border-border bg-card font-mono text-[11px] transition-all hover:border-accent-tech hover:text-accent-tech ${
        full ? "w-full justify-between px-3 py-2" : "px-2.5 py-1.5"
      }`}
    >
      <span className="flex items-center gap-1.5">
        <Languages className="h-3.5 w-3.5 text-accent-tech" />
        {full && <span className="text-muted-foreground">lang</span>}
      </span>
      <span className="flex items-center gap-1">
        <span
          className={
            lang === "sv"
              ? "rounded bg-foreground px-1.5 py-0.5 text-background"
              : "text-muted-foreground"
          }
        >
          SV
        </span>
        <span className="text-muted-foreground">/</span>
        <span
          className={
            lang === "en"
              ? "rounded bg-foreground px-1.5 py-0.5 text-background"
              : "text-muted-foreground"
          }
        >
          EN
        </span>
      </span>
    </button>
  );
}

function SocialIcon({
  href,
  Icon,
}: {
  href: string;
  Icon: typeof Github;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="grid h-8 w-8 place-items-center rounded-md border border-sidebar-border text-sidebar-foreground/70 transition-colors hover:border-accent-tech hover:text-accent-tech"
    >
      <Icon className="h-3.5 w-3.5" />
    </a>
  );
}

function Section({
  id,
  children,
  className = "",
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`scroll-mt-16 ${className}`}>
      {children}
    </section>
  );
}

function SectionHeader({
  index,
  title,
  subtitle,
}: {
  index: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="flex items-end justify-between border-b border-border pb-4">
      <div>
        <div className="font-mono text-xs text-muted-foreground">
          <span className="text-accent-tech">/{index}</span> — {subtitle}
        </div>
        <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          {title}
          <span className="text-accent-tech">.</span>
        </h2>
      </div>
      <div className="hidden font-mono text-[10px] uppercase tracking-widest text-muted-foreground md:block">
        section/{index}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  desc,
  tags,
  status,
  statusLive,
  year,
  category,
  index,
  commitLabel,
  video,
  image,
}: {
  title: string;
  desc: string;
  tags: readonly string[];
  status: string;
  statusLive: boolean;
  year: string;
  category: string;
  index: number;
  commitLabel: string;
  video?: string | null;
  image?: string | null;
}) {
  return (
    <article className="group relative grid gap-6 rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-0.5 hover:border-accent-tech hover:shadow-tech md:grid-cols-12 md:p-8">
      <div className="md:col-span-3">
        <div className="font-mono text-[10px] text-muted-foreground">{commitLabel}</div>
        <div className="mt-1 font-mono text-sm font-bold tracking-wider">
          #{String(index).padStart(3, "0")}
        </div>
        <div
          className={`mt-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${
            statusLive
              ? "bg-accent-tech text-background"
              : "border border-border text-muted-foreground"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {status}
        </div>
        <div className="mt-3 font-mono text-[10px] text-muted-foreground">{year}</div>
      </div>
      <div className="md:col-span-9">
        <div className="font-mono text-[10px] text-muted-foreground">// {category}</div>
        <h3 className="mt-1 font-display text-2xl font-bold tracking-tight md:text-3xl">
          {title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70 md:text-base">{desc}</p>
        {video && (
          <div className="mt-5 overflow-hidden rounded-lg border border-border bg-background shadow-tech">
            <div className="flex items-center gap-1.5 border-b border-border bg-secondary/50 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.18_27)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.15_85)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-tech" />
              <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                demo.mp4
              </span>
            </div>
            <video
              src={video}
              controls
              playsInline
              preload="metadata"
              className="aspect-video w-full bg-black object-contain"
            />
          </div>
        )}
        {image && !video && (
          <div className="mt-5 overflow-hidden rounded-lg border border-border bg-background shadow-tech">
            <div className="flex items-center gap-1.5 border-b border-border bg-secondary/50 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.65_0.18_27)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[oklch(0.78_0.15_85)]" />
              <span className="h-2.5 w-2.5 rounded-full bg-accent-tech" />
              <span className="ml-2 font-mono text-[10px] text-muted-foreground">
                preview.png
              </span>
            </div>
            <img
              src={image}
              alt={title}
              loading="lazy"
              className="aspect-video w-full bg-black object-cover"
            />
          </div>
        )}
        <div className="mt-5 flex flex-wrap items-center gap-1.5">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded border border-border bg-background px-2 py-0.5 font-mono text-[10px]"
            >
              {tag}
            </span>
          ))}
          <a
            href="#"
            className="ml-auto inline-flex items-center gap-1 font-mono text-xs font-medium text-foreground transition-colors hover:text-accent-tech"
          >
            {cta}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:rotate-45" />
          </a>
        </div>
      </div>
    </article>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 font-mono text-sm focus:border-accent-tech focus:outline-none focus:ring-1 focus:ring-accent-tech/30"
      />
    </div>
  );
}
