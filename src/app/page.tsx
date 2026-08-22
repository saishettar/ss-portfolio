type Experience = {
  company: string;
  role: string;
  dates: string;
  summary: string;
};

type Project = {
  name: string;
  repo: string;
  language: string;
  live?: string;
  summary: string;
};

const experience: Experience[] = [
  {
    company: "BCM One",
    role: "Software Engineer Intern",
    dates: "May 2026 - Aug 2026",
    summary:
      "Built an AI-powered natural language-to-SQL platform (React, FastAPI, AWS Bedrock, Athena) letting non-technical users query enterprise datasets across 9 telecom brands.",
  },
  {
    company: "Unum Game",
    role: "Software Engineer Intern",
    dates: "Jun 2023 - Aug 2023",
    summary:
      "Built Web3 wallet auth and NFT marketplace front-end for a browser-based multiplayer game, plus a real-time world-map ownership dashboard.",
  },
];

const projects: Project[] = [
  {
    name: "Iris",
    repo: "https://github.com/saishettar/iris",
    language: "TypeScript",
    summary:
      "Self-hosted, OpenTelemetry-native tracing and evaluation platform for LLM/agent pipelines that catches prompt regressions before they ship.",
  },
  {
    name: "Deepslate",
    repo: "https://github.com/saishettar/deepslate",
    language: "Rust",
    summary:
      "A dynamically-typed, bytecode-compiled programming language built in Rust, with a mark-and-sweep garbage collector.",
  },
  {
    name: "NYU Course RAG Assistant",
    repo: "https://github.com/saishettar/nyu-rag",
    language: "TypeScript",
    summary:
      "Natural-language RAG assistant over NYU's CS course catalog, answering questions with grounded, cited results.",
  },
  {
    name: "Undercut",
    repo: "https://github.com/saishettar/undercut",
    language: "Python",
    live: "https://f1-race-strategy-agent.vercel.app",
    summary:
      "Live F1 pit-strategy agent replayed from real OpenF1 telemetry, with rule-based or Claude tool-use reasoning.",
  },
  {
    name: "Soberanes",
    repo: "https://github.com/saishettar/soberanes",
    language: "Python",
    summary:
      "Cellular-automaton wildfire spread simulator driven by real terrain, fuel, and wind data, validated against the Soberanes and Dolan fires.",
  },
  {
    name: "Micromanager",
    repo: "https://github.com/saishettar/micromanager",
    language: "TypeScript",
    summary:
      "Passive-aggressive JS/TS linter that roasts bad variable names instead of catching bugs.",
  },
  {
    name: "Tire Degradation Model",
    repo: "https://github.com/saishettar/tire-deg-model",
    language: "Python",
    live: "https://f1-tire-degradation.lovable.app/",
    summary:
      "ML pipeline predicting F1 tire degradation from telemetry, with model comparison and a live Streamlit demo.",
  },
];

const skills: { label: string; items: string[] }[] = [
  {
    label: "Languages",
    items: [
      "Python",
      "Java",
      "C++",
      "C",
      "JavaScript",
      "Rust",
      "TypeScript",
      "HTML/CSS",
      "SQL",
    ],
  },
  {
    label: "Frameworks",
    items: ["React", "Node.js", "FastAPI", "Pydantic", "Next.js", "Streamlit"],
  },
  {
    label: "Developer Tools",
    items: [
      "AWS Bedrock",
      "AWS Athena",
      "AWS Glue",
      "Docker",
      "Git",
      "GitLab CI/CD",
      "Tableau",
      "PostgreSQL",
      "SQLite",
    ],
  },
  {
    label: "Libraries",
    items: [
      "Pandas",
      "NumPy",
      "Scikit-learn",
      "Matplotlib",
      "Seaborn",
      "pgvector",
      "Visx/D3",
      "React Flow",
      "Recharts",
    ],
  },
];

function SectionHeader({ children }: { children: string }) {
  return (
    <h2 className="text-xs tracking-[0.15em] text-muted border-b border-rule pb-2">
      {children}
    </h2>
  );
}

function Pill({ children }: { children: string }) {
  return (
    <span className="inline-block rounded bg-pill-bg border border-pill-border px-2 py-1 text-xs">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-2xl px-6 py-16 flex flex-col gap-10">
      <header className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Sai Shettar</h1>
        <p>Computer Science @ NYU</p>
        <p className="text-sm text-muted">New York, NY</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 pt-2 text-sm">
          <a
            href="https://github.com/saishettar"
            target="_blank"
            rel="noreferrer"
          >
            github.com/saishettar
          </a>
          <a href="mailto:saishettar@nyu.edu">saishettar@nyu.edu</a>
        </div>
      </header>

      <section className="flex flex-col gap-4">
        <SectionHeader>ABOUT</SectionHeader>
        <p className="leading-relaxed">
          Computer Science student and software engineer building full-stack
          and agentic systems — observability tooling, LLM-driven agents, and
          data platforms. Experienced with Python, TypeScript, React, and
          FastAPI.
        </p>
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeader>EXPERIENCE</SectionHeader>
        {experience.map((job) => (
          <div key={job.company} className="flex flex-col gap-1">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-bold">{job.company}</h3>
              <span className="text-sm text-muted whitespace-nowrap">
                {job.dates}
              </span>
            </div>
            <p className="text-sm italic text-muted">{job.role}</p>
            <p className="text-sm leading-relaxed">{job.summary}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeader>PROJECTS</SectionHeader>
        {projects.map((project) => (
          <div key={project.name} className="flex flex-col gap-1">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="flex items-baseline gap-2">
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold"
                >
                  {project.name}
                </a>
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-muted"
                  >
                    [live &rarr;]
                  </a>
                )}
              </h3>
              <Pill>{project.language}</Pill>
            </div>
            <p className="text-sm leading-relaxed">{project.summary}</p>
          </div>
        ))}
      </section>

      <section className="flex flex-col gap-4">
        <SectionHeader>SKILLS</SectionHeader>
        <div className="flex flex-col gap-3">
          {skills.map((group) => (
            <div key={group.label} className="flex flex-col gap-2">
              <p className="text-xs text-muted">{group.label}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Pill key={item}>{item}</Pill>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-rule pt-4 text-xs text-muted">
        Built with Next.js
      </footer>
    </main>
  );
}
