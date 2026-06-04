import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import portrait from "@/assets/abdi-portrait.jpg.asset.json";
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

const sections = [
  { id: "hem", label: "Hem", icon: Home },
  { id: "om", label: "Om mig", icon: User },
  { id: "projekt", label: "Projekt", icon: FolderGit2 },
  { id: "kunskap", label: "Kunskap", icon: Sparkles },
  { id: "kontakt", label: "Kontakt", icon: Mail },
  { id: "referenser", label: "Referenser", icon: Quote },
];

function PortfolioPage() {
  const [active, setActive] = useState("hem");
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Mobile top bar */}
      <header className="md:hidden sticky top-0 z-40 flex items-center justify-between border-b border-border bg-background/90 backdrop-blur px-4 py-3">
        <a href="#hem" className="font-display text-sm font-bold tracking-tight">
          ABDI<span className="text-muted-foreground">.elmi</span>
        </a>
        <button
          onClick={() => setNavOpen((o) => !o)}
          aria-label="Meny"
          className="rounded-md border border-border p-2"
        >
          {navOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-72 flex-col justify-between border-r border-sidebar-border bg-sidebar text-sidebar-foreground p-8 transition-transform duration-300
          ${navOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:flex`}
      >
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-12 w-12 place-items-center rounded-full bg-sidebar-foreground text-sidebar font-display font-bold">
              AE
            </div>
            <div>
              <div className="font-display text-lg font-bold leading-tight">
                Abdi Elmi
              </div>
              <div className="text-xs text-sidebar-foreground/60">
                .NET Developer
              </div>
            </div>
          </div>

          <nav className="mt-12 space-y-1">
            {sections.map((s) => {
              const Icon = s.icon;
              const isActive = active === s.id;
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  onClick={() => setNavOpen(false)}
                  className={`group flex items-center gap-3 rounded-md px-3 py-2.5 text-sm transition-colors
                    ${
                      isActive
                        ? "bg-sidebar-accent text-sidebar-accent-foreground"
                        : "text-sidebar-foreground/70 hover:bg-sidebar-accent/60 hover:text-sidebar-foreground"
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <span className="font-medium">{s.label}</span>
                  <span
                    className={`ml-auto font-mono text-[10px] transition-opacity ${
                      isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                    }`}
                  >
                    0{sections.indexOf(s) + 1}
                  </span>
                </a>
              );
            })}
            <a
              href="#cv"
              className="mt-4 flex items-center gap-3 rounded-md border border-sidebar-border px-3 py-2.5 text-sm font-medium text-sidebar-foreground hover:bg-sidebar-accent"
            >
              <FileText className="h-4 w-4" />
              <span>CV</span>
              <ArrowUpRight className="ml-auto h-3.5 w-3.5" />
            </a>
          </nav>
        </div>

        <div className="space-y-4">
          <div className="flex gap-3 text-sidebar-foreground/60">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sidebar-foreground"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-sidebar-foreground"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:abdi.elmii@outlook.com"
              className="hover:text-sidebar-foreground"
            >
              <AtSign className="h-4 w-4" />
            </a>
          </div>
          <p className="font-mono text-[10px] leading-relaxed text-sidebar-foreground/40">
            © 2026 Abdirahman Elmi
            <br />
            Stockholm · Sverige
          </p>
        </div>
      </aside>

      {/* Main */}
      <main className="md:ml-72">
        {/* HEM */}
        <Section id="hem" className="grid-paper">
          <div className="mx-auto flex min-h-[88vh] max-w-5xl flex-col justify-center px-6 py-24 md:px-16">
            <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-foreground animate-pulse" />
              tillgänglig för uppdrag
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[0.95] tracking-tighter md:text-7xl lg:text-8xl">
              Abdirahman
              <br />
              <span className="text-muted-foreground">Elmi.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
              .NET-utvecklare med ett hjärta för ren arkitektur. Jag bygger
              stabila och skalbara lösningar med{" "}
              <span className="font-mono text-foreground">C#</span>,{" "}
              <span className="font-mono text-foreground">ASP.NET</span> och{" "}
              <span className="font-mono text-foreground">Azure</span>.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="#projekt"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
              >
                Se projekt
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium hover:bg-secondary"
              >
                Kontakta mig
              </a>
            </div>

            <div className="mt-20 grid grid-cols-2 gap-8 border-t border-border pt-8 md:grid-cols-4">
              {[
                { k: "Stack", v: ".NET · C#" },
                { k: "Plats", v: "Stockholm" },
                { k: "Fokus", v: "Backend & Cloud" },
                { k: "År aktiv", v: "2024 →" },
              ].map((it) => (
                <div key={it.k}>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {it.k}
                  </div>
                  <div className="mt-1 font-display text-sm font-semibold">
                    {it.v}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* OM MIG */}
        <Section id="om">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-16">
            <SectionHeader index="02" title="Om mig" subtitle=".NET Developer" />
            <div className="mt-12 grid gap-12 md:grid-cols-5">
              <div className="md:col-span-3 space-y-6 text-foreground/80 leading-relaxed">
                <p className="text-lg">
                  Koden är platsen där jag trivs bäst. Med en känsla för
                  detaljer och ett hjärta för ren arkitektur bygger jag
                  .NET-applikationer som inte bara fungerar — de känns rätt.
                  C# och ASP.NET är mina favoritverktyg när idéer ska bli
                  stabila, skalbara lösningar.
                </p>
                <p>
                  Modern utveckling handlar inte bara om verktyg — det handlar
                  om att förstå hur allt hänger ihop. Jag bygger högpresterande
                  appar med C# och .NET, rör mig tryggt bland SQL och Azure
                  och får allt att mötas på frontend med HTML, CSS, JavaScript
                  och React.
                </p>
                <p>
                  Oavsett om jag jobbar självständigt eller tillsammans med ett
                  team är målet alltid detsamma — att skapa mjukvara som
                  faktiskt gör skillnad för användare och ger värde för
                  kunden.
                </p>
              </div>
              <ul className="md:col-span-2 space-y-4">
                {[
                  { Icon: Phone, k: "Telefon", v: "+46 73 963 75 26" },
                  { Icon: MapPin, k: "Stad", v: "Stockholm, Sverige" },
                  { Icon: AtSign, k: "E-post", v: "abdi.elmii@outlook.com" },
                  {
                    Icon: GraduationCap,
                    k: "Examen",
                    v: "Yrkesexamen — Systemutveckling .NET",
                  },
                ].map(({ Icon, k, v }) => (
                  <li
                    key={k}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card p-4"
                  >
                    <Icon className="mt-0.5 h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {k}
                      </div>
                      <div className="text-sm font-medium">{v}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Section>

        {/* PROJEKT */}
        <Section id="projekt" className="bg-secondary/50">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-16">
            <SectionHeader index="03" title="Projekt" subtitle="Utvalt arbete" />
            <div className="mt-12 space-y-4">
              {projects.map((p, i) => (
                <ProjectCard key={p.title} project={p} index={i + 1} />
              ))}
            </div>
          </div>
        </Section>

        {/* KUNSKAP */}
        <Section id="kunskap">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-16">
            <SectionHeader
              index="04"
              title="Kunskap"
              subtitle="Färdigheter & teknologier"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {skills.map((s) => (
                <div
                  key={s.title}
                  className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground"
                >
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {s.area}
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {s.desc}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* KONTAKT */}
        <Section id="kontakt" className="bg-secondary/50">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-16">
            <SectionHeader
              index="05"
              title="Kontakt"
              subtitle="Hör av dig"
            />
            <div className="mt-12 grid gap-10 md:grid-cols-5">
              <div className="md:col-span-2 space-y-5">
                {[
                  { Icon: MapPin, k: "Plats", v: "Stockholm, Sverige" },
                  { Icon: AtSign, k: "E-post", v: "abdi.elmii@outlook.com" },
                  { Icon: Phone, k: "Telefon", v: "+46 73 963 75 26" },
                ].map(({ Icon, k, v }) => (
                  <div key={k} className="flex items-start gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-full border border-border bg-card">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {k}
                      </div>
                      <div className="mt-0.5 text-sm font-medium">{v}</div>
                    </div>
                  </div>
                ))}
              </div>

              <form
                className="md:col-span-3 space-y-4 rounded-xl border border-border bg-card p-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Tack! Ditt meddelande har skickats.");
                }}
              >
                <div className="grid gap-4 sm:grid-cols-2">
                  <Field label="Namn" name="name" required />
                  <Field label="E-post" name="email" type="email" required />
                </div>
                <Field label="Ämne" name="subject" required />
                <div>
                  <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Meddelande
                  </label>
                  <textarea
                    rows={5}
                    required
                    className="mt-1.5 w-full resize-none rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-foreground focus:outline-none"
                  />
                </div>
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5"
                >
                  Skicka meddelande
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </button>
              </form>
            </div>
          </div>
        </Section>

        {/* REFERENSER */}
        <Section id="referenser">
          <div className="mx-auto max-w-5xl px-6 py-24 md:px-16">
            <SectionHeader
              index="06"
              title="Referenser"
              subtitle="Personer som vouchar"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {references.map((r) => (
                <figure
                  key={r.name}
                  className="rounded-xl border border-border bg-card p-8"
                >
                  <Quote className="h-5 w-5 text-muted-foreground" />
                  <blockquote className="mt-4 text-sm leading-relaxed text-foreground/80">
                    {r.title}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                    <div>
                      <div className="font-display text-sm font-bold">
                        {r.name}
                      </div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                        {r.relation}
                      </div>
                    </div>
                    <a
                      href="#"
                      className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      {r.handle}
                    </a>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Section>

        <footer className="border-t border-border px-6 py-10 md:px-16">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <p className="font-mono text-xs text-muted-foreground">
              © 2026 Abdirahman Elmi. Alla rättigheter förbehållna.
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              Byggd med omsorg i Stockholm.
            </p>
          </div>
        </footer>
      </main>
    </div>
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
          /{index} — {subtitle}
        </div>
        <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          {title}
        </h2>
      </div>
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <article className="group grid gap-6 rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground md:grid-cols-12 md:p-8">
      <div className="md:col-span-2">
        <div className="font-mono text-xs text-muted-foreground">
          0{index}
        </div>
        <div
          className={`mt-3 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest ${
            project.status === "Live"
              ? "bg-foreground text-background"
              : "border border-border text-muted-foreground"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {project.status}
        </div>
      </div>
      <div className="md:col-span-10">
        <h3 className="font-display text-2xl font-bold tracking-tight md:text-3xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground/70 md:text-base">
          {project.desc}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-border bg-background px-2.5 py-1 font-mono text-[10px]"
            >
              {t}
            </span>
          ))}
          <a
            href="#"
            className="ml-auto inline-flex items-center gap-1 text-xs font-medium transition-colors hover:text-foreground/70"
          >
            {project.cta}
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
        className="mt-1.5 w-full rounded-md border border-border bg-background px-3 py-2.5 text-sm focus:border-foreground focus:outline-none"
      />
    </div>
  );
}

const projects = [
  {
    title: "Silicon — Mobilbank",
    desc: "Modern mobilbank som gör det enkelt att hantera din ekonomi. Spara, spendera och håll koll på dina utgifter direkt i appen.",
    tags: ["C#", ".NET MAUI", "Azure", "SQL"],
    status: "I process",
    cta: "Läs mer",
  },
  {
    title: "Easy Bank — Webbaserad bankplattform",
    desc: "Bankprojekt byggt i ASP.NET Core Razor Pages. Hantera kunder, konton, transaktioner och gör insättningar samt uttag.",
    tags: ["ASP.NET Core", "Razor Pages", "EF Core", "SQL Server", "Bootstrap"],
    status: "Live",
    cta: "Live demo",
  },
  {
    title: "WPF IoT Project",
    desc: "Windowsapplikation som simulerar en IoT-enhet (en fläkt) med WPF och MVVM. Kopplas till Azure IoT Hub, rapporterar tillstånd via Device Twin och konfigureras från UI.",
    tags: ["WPF", "MVVM", "Azure IoT Hub", "C#", "Device Twin"],
    status: "Live",
    cta: "Se kod",
  },
];

const skills = [
  {
    area: "Backend",
    title: "C# Programmering",
    desc: "Erfaren i att bygga applikationer med C# — webb, skrivbord och mobil. Använder .NET Framework och .NET Core för skalbara lösningar.",
    tags: ["ASP.NET Core", "Entity Framework", "LINQ"],
  },
  {
    area: "Data",
    title: "Databas-teknologier",
    desc: "Kunnig i SQL och Azure för databashantering och molntjänster. Designar relationsdatabaser och skriver komplexa frågor.",
    tags: ["SQL Server", "Azure SQL", "Datamodellering", "Stored Procedures"],
  },
  {
    area: "Frontend",
    title: "Frontend-utveckling",
    desc: "Skapar responsiva och tilltalande webbgränssnitt med moderna ramverk för att bygga dynamiska webbapplikationer.",
    tags: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
  },
];

const references = [
  {
    name: "Ayaz Rosén",
    title:
      "Verksamhetschef på Rinkeby Folkets Hus. En mentor som följt min resa sedan starten.",
    relation: "Mentor",
    handle: "ayazshukat",
  },
  {
    name: "Hadi Feisal",
    title:
      "Senior systemutvecklare med över 5 års erfarenhet i branschen. Jobbar numera på Apotek Hjärtat.",
    relation: "Vän & kollega",
    handle: "haadi-feisal",
  },
];
