import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

if (app) {
  app.innerHTML = `
    <div class="page">
      <header class="site-header">
        <nav class="nav">
          <div class="logo">Luiz Blum</div>
          <div class="nav-links">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <a class="button outline" href="/assets/Luiz%20Cauet%20Castilla%20Ruy%20Blum%20Resume%202025G.docx" download>
            Download Resume
          </a>
        </nav>
      </header>

      <main>
        <section class="hero" id="about">
          <div class="hero-content">
            <p class="eyebrow">Computer Engineering • Systems Programming</p>
            <h1>Luiz Cauet Castilla Ruy Blum</h1>
            <p class="lead">
              Software engineer and researcher focused on full-stack product development, ML-driven creative tools,
              and scalable systems that bridge music tech and interactive media.
            </p>
            <div class="hero-actions">
              <a class="button" href="mailto:luizcauetcastilla@gmail.com">Email Me</a>
              <a class="button ghost" href="https://github.com/LuizCauet" target="_blank" rel="noreferrer">GitHub</a>
              <a class="button ghost" href="https://linkedin.com/in/luizcauet" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
            <div class="meta">
              <div>
                <span>Location</span>
                Santa Cruz, CA
              </div>
              <div>
                <span>Phone</span>
                (346) 218-1701
              </div>
              <div>
                <span>Focus</span>
                Full-stack • ML • Systems
              </div>
            </div>
          </div>
          <div class="hero-card">
            <h3>Current Highlights</h3>
            <ul>
              <li>Developing React + Supabase features for a music-tech web application.</li>
              <li>Building a text-to-synth preset generator with CLAP embeddings + LLM workflows.</li>
              <li>Researching procedural content generation with LLMs, WFC, and Z3 constraints.</li>
            </ul>
          </div>
        </section>

        <section class="section" id="experience">
          <div class="section-header">
            <h2>Experience</h2>
            <p>Engineering, research, and leadership roles spanning software, games, and music.</p>
          </div>
          <div class="timeline">
            <article class="timeline-item">
              <div class="timeline-date">Jul 2025 — Current</div>
              <div class="timeline-content">
                <h3>Software Engineering Intern · Prosper XO</h3>
                <p>Developed features for a React + Supabase music-tech web application.</p>
                <ul>
                  <li>Built reusable UI components and implemented backend database integrations.</li>
                  <li>Prototyped product features and contributed to technical planning and design discussions.</li>
                </ul>
              </div>
            </article>
            <article class="timeline-item">
              <div class="timeline-date">Jan 2026 — Current</div>
              <div class="timeline-content">
                <h3>Research Participant · Augmented Design Lab</h3>
                <p>Developed PCG prototypes using LLMs, Wave Function Collapse, and Z3 constraint solving.</p>
                <ul>
                  <li>Implemented grid-based world generation systems and constraint-driven content pipelines.</li>
                  <li>Analyzed and applied technical research in procedural generation and game systems.</li>
                </ul>
              </div>
            </article>
            <article class="timeline-item">
              <div class="timeline-date">Dec 2024 — Current</div>
              <div class="timeline-content">
                <h3>Founder & President · The Slug Collective</h3>
                <p>Founded and led a 100+ member interdisciplinary music & tech collective at UCSC.</p>
                <ul>
                  <li>Secured $1,500 in funding through technical project proposals and organizational leadership.</li>
                  <li>Directed collaborative production of a 12-track multi-contributor digital release.</li>
                </ul>
              </div>
            </article>
          </div>
        </section>

        <section class="section" id="projects">
          <div class="section-header">
            <h2>Projects</h2>
            <p>Selected work across games, machine learning, and product design.</p>
          </div>
          <div class="cards">
            <article class="card">
              <h3>Resonance</h3>
              <p class="tag">Text-to-Synth Preset Generator · 2026—Current</p>
              <p>
                Developed a multimodal ML pipeline mapping natural language prompts to synthesizer presets using
                CLAP audio-text embeddings and vector similarity search.
              </p>
              <ul>
                <li>Experimented with LLM-driven iterative fine-tuning based on user feedback.</li>
                <li>Built Python + FastAPI services; containerized ML pipelines on Oracle Cloud with Docker.</li>
                <li>Created a Next.js interface for real-time semantic search and interactive preset editing.</li>
              </ul>
            </article>
            <article class="card">
              <h3>SmartQueue</h3>
              <p class="tag">Next.js · React · TypeScript · Supabase · Spotify SDK · 2025</p>
              <p>
                Built an adaptive queue system that dynamically reorders playlists based on user behavior.
              </p>
              <ul>
                <li>Designed a weighted recommendation algorithm with persistent canonical state.</li>
                <li>Implemented authentication + RLS policies via Supabase.</li>
              </ul>
            </article>
            <article class="card">
              <h3>Music Collaboration Forum</h3>
              <p class="tag">Node.js · Express · React · AWS S3 · 2024</p>
              <p>
                1st place hackathon winner. Built a full-stack collaboration platform supporting authentication,
                media uploads, and real-time user interaction.
              </p>
              <ul>
                <li>Implemented AWS S3-backed audio storage and scalable backend services.</li>
                <li>Delivered responsive UI for collaborative workflows.</li>
              </ul>
            </article>
          </div>
        </section>

        <section class="section" id="skills">
          <div class="section-header">
            <h2>Skills</h2>
            <p>Tools and languages spanning software, systems, and audio production.</p>
          </div>
          <div class="skill-grid">
            <div class="skill-group">
              <h4>Languages</h4>
              <div class="chips">
                <span>Python</span><span>JavaScript/TypeScript</span><span>C/C++</span><span>Java</span><span>SQL</span>
              </div>
            </div>
            <div class="skill-group">
              <h4>Frameworks & Platforms</h4>
              <div class="chips">
                <span>React</span><span>Next.js</span><span>Node.js</span><span>Express</span><span>FastAPI</span><span>Supabase</span><span>Docker</span><span>AWS</span><span>Oracle Cloud</span>
              </div>
            </div>
            <div class="skill-group">
              <h4>Systems & Creative Tech</h4>
              <div class="chips">
                <span>Unix/Linux</span><span>Git</span><span>Wireshark</span><span>Godot</span><span>Audio Processing</span><span>Sound Design</span><span>FL Studio</span>
              </div>
            </div>
            <div class="skill-group">
              <h4>Spoken Languages</h4>
              <div class="chips">
                <span>English</span><span>Portuguese</span><span>Spanish</span>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="education">
          <div class="section-header">
            <h2>Education</h2>
            <p>Academic background and coursework.</p>
          </div>
          <div class="education-card">
            <div>
              <h3>University of California, Santa Cruz</h3>
              <p>B.S. in Computer Engineering (Systems Programming) · CS Minor</p>
              <p class="muted">Expected Graduation: March 2027 · GPA: 3.5</p>
            </div>
            <div class="coursework">
              <h4>Relevant Coursework</h4>
              <p>
                Data Structures & Algorithms, Networks, Systems Design, Computer Architecture, Intro to Software Engineering,
                Computer Organization, Game AI
              </p>
            </div>
          </div>
        </section>

        <section class="section contact" id="contact">
          <div class="section-header">
            <h2>Let’s Build</h2>
            <p>Reach out for collaboration, research, or product development.</p>
          </div>
          <div class="contact-card">
            <div>
              <h3>Contact</h3>
              <p><strong>Email:</strong> <a href="mailto:luizcauetcastilla@gmail.com">luizcauetcastilla@gmail.com</a></p>
              <p><strong>Phone:</strong> (346) 218-1701</p>
            </div>
            <div>
              <h3>Profiles</h3>
              <p><a href="https://github.com/LuizCauet" target="_blank" rel="noreferrer">github.com/LuizCauet</a></p>
              <p><a href="https://linkedin.com/in/luizcauet" target="_blank" rel="noreferrer">linkedin.com/in/luizcauet</a></p>
            </div>
            <div>
              <h3>Resume</h3>
              <p><a href="/assets/Luiz%20Cauet%20Castilla%20Ruy%20Blum%20Resume%202025G.docx" download>Download DOCX</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <p>© 2026 Luiz Cauet Castilla Ruy Blum · Built with care for systems, sound, and story.</p>
      </footer>
    </div>
  `;
}
