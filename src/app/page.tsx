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

const skills: string[] = [
  "Python",
  "Java",
  "C++",
  "C",
  "JavaScript",
  "Rust",
  "TypeScript",
  "HTML/CSS",
  "SQL",
  "React",
  "Node.js",
  "FastAPI",
  "Pydantic",
  "Next.js",
  "Streamlit",
  "AWS Bedrock",
  "AWS Athena",
  "AWS Glue",
  "Docker",
  "Git",
  "GitLab CI/CD",
  "Tableau",
  "PostgreSQL",
  "SQLite",
  "Pandas",
  "NumPy",
  "Scikit-learn",
  "Matplotlib",
  "Seaborn",
  "pgvector",
  "Visx/D3",
  "React Flow",
  "Recharts",
];

function SectionHeader({ children }: { children: string }) {
  return (
    <h2 className="text-sm uppercase tracking-widest text-[#8a847a] mb-4 border-b border-[#d9d3c7] pb-2">
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16">
      <header className="mb-12">
        <h1 className="text-4xl font-bold text-[#2c2a26] mb-2">
          Sai Shettar
        </h1>
        <p className="text-lg text-[#5c584e]">Computer Science @ NYU</p>
        <p className="text-sm text-[#7a756a] mt-1">New York, NY</p>
      </header>

      <section className="mb-12">
        <div className="flex flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/saishettar"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#6b5b4d] hover:text-[#3d3a35] underline underline-offset-4 transition-colors"
          >
            github.com/saishettar
          </a>
          <a
            href="mailto:saishettar@nyu.edu"
            className="text-[#6b5b4d] hover:text-[#3d3a35] underline underline-offset-4 transition-colors"
          >
            saishettar@nyu.edu
          </a>
        </div>
      </section>

      <section className="mb-12">
        <SectionHeader>About</SectionHeader>
        <p className="leading-relaxed text-[#4a473f]">
          Computer Science student and software engineer interested in
          natural language processing, agentic systems, and applied machine
          learning. Experienced with Java, Python, TypeScript, React, and
          more.
        </p>
      </section>

      <section className="mb-12">
        <SectionHeader>Experience</SectionHeader>
        {experience.map((job) => (
          <div key={job.company} className="mb-8">
            <div className="flex justify-between items-start mb-1">
              <h3 className="font-semibold text-[#2c2a26]">{job.company}</h3>
              <span className="text-sm text-[#7a756a]">{job.dates}</span>
            </div>
            <p className="text-sm text-[#5c584e] mb-2">{job.role}</p>
            <p className="text-sm text-[#7a756a] italic">{job.summary}</p>
          </div>
        ))}
      </section>

      <section className="mb-12">
        <SectionHeader>Projects</SectionHeader>
        <ul className="space-y-6">
          {projects.map((project) => (
            <li key={project.name}>
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#4a3f35] hover:text-[#2c2a26] font-medium underline underline-offset-4 transition-colors"
                  >
                    {project.name}
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-3 text-xs text-[#8a847a] hover:text-[#5c584e] transition-colors"
                    >
                      [live &rarr;]
                    </a>
                  )}
                  <p className="text-sm text-[#6b655a] mt-1">
                    {project.summary}
                  </p>
                </div>
                <div className="flex items-center gap-3 text-xs text-[#8a847a] shrink-0">
                  <span className="px-2 py-0.5 bg-[#e8e2d6] rounded">
                    {project.language}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <SectionHeader>Skills</SectionHeader>
        <div className="flex flex-wrap gap-2">
          {skills.map((item) => (
            <span
              key={item}
              className="px-3 py-1 bg-[#e8e2d6] text-[#5c584e] text-sm rounded"
            >
              {item}
            </span>
          ))}
        </div>
      </section>

      <footer className="pt-8 border-t border-[#d9d3c7] text-sm text-[#8a847a]">
        Built with Next.js
      </footer>
    </main>
  );
}
