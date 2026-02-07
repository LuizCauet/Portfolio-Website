import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app");

// Project data
const projects = {
  resonance: {
    title: "Resonance",
    subtitle: "Text-to-Synth Preset Generator",
    tag: "ML • Python • FastAPI • Next.js • 2026",
    github: "https://github.com/LuizCauet/Resonance",
    linkText: "GitHub",
    contentBlocks: [
      "Resonance is a multimodal machine learning pipeline that bridges natural language and synthesizer sound design. Using CLAP audio-text embeddings and vector similarity search, it maps creative prompts like 'warm vintage analog' to matching synthesizer presets in real-time.",
      "The system experiments with LLM-driven iterative fine-tuning, allowing users to refine presets through conversational feedback. This creates a dynamic loop where users can describe the sound they want and iteratively adjust it through natural language.",
      "The backend leverages Python + FastAPI with containerized ML workflows deployed on Oracle Cloud VM. The architecture handles embedding generation, vector similarity search, and preset manipulation in a scalable pipeline designed for real-time performance.",
      "The frontend provides an intuitive Next.js interface for semantic search and interactive preset editing. This project demonstrates advanced ML integration, cloud infrastructure management, and creative tool design at the intersection of music technology and AI."
    ],
    images: [
      { src: "/assets/Resonance/Resonance Main Menu.png" },
      { src: "/assets/Resonance/VitalSynth.png" }
    ],
    extraImages: []
  },
  audition: {
    title: "The Audition",
    subtitle: "3D Psych-Horror Musical Game",
    tag: "Godot • Game Dev • Team Lead • 2025-Current",
    github: "https://bhranthrok.itch.io/the-audition-v0",
    linkText: "itch.io",
    contentBlocks: [
      "The Audition is a psychological horror game where performance meets terror. The game centers on a unique freestyle-performance mechanic where player improvisation dynamically affects story outcomes, creating a deeply personal horror experience that responds to how you choose to perform under pressure.",
      "As lead developer, I manage a 12-member team across modeling, texturing, audio, and animation to deliver a cohesive 3D experience in Godot. The game features atmospheric environments including haunting hallways and experimental laboratory spaces that build tension through environmental storytelling.",
      "As the sole programmer, I architect all gameplay systems, real-time mechanics, and narrative logic. This includes implementing the performance mechanics, AI behaviors, player interaction systems, and the dynamic narrative engine that responds to player choices throughout the game.",
      "I handle sprint planning, Git workflow with the team, comprehensive documentation, and integration of an original soundtrack directly into gameplay systems. Performance stages serve as the climactic moments where all game systems converge - music, narrative, and gameplay merge into intense sequences that test the player's composure."
    ],
    images: [
      { src: "/assets/The Audition/Main Screen.png" },
      { src: "/assets/The Audition/Hallway.png" },
      { src: "/assets/The Audition/lab.png" },
      { src: "/assets/The Audition/Stage.png" }
    ],
    extraImages: []
  },
  smartqueue: {
    title: "SmartQueue",
    subtitle: "Adaptive Spotify Queue System",
    tag: "Next.js • React • Supabase • Spotify SDK • 2025",
    github: "https://github.com/LuizCauet/smart-queue",
    linkText: "GitHub",
    contentBlocks: [
      "SmartQueue is an intelligent queue management system that learns from listening behavior to create personalized Spotify experiences. The application dynamically reorders playlists based on real-time user feedback and contextual signals, creating a listening session that adapts to your mood and preferences.",
      "At its core is a weighted recommendation algorithm with persistent state management. The system tracks user interactions - skips, likes, and listening patterns - to build a model of preferences that improves over time. This canonical state is maintained across sessions, allowing the algorithm to remember what works for each user.",
      "Built with Next.js and React, the interface is designed for both functionality and personalization. The responsive UI provides intuitive queue control, discovery features, and library management with dropdown navigation. Advanced search functionality helps users find exactly what they're looking for in their extensive libraries.",
      "The backend leverages Supabase for authentication, row-level security policies, and state persistence. This architecture ensures user data is secure while maintaining the performance needed for real-time queue updates. The project showcases full-stack development capabilities, algorithmic design, and modern web architecture."
    ],
    images: [
      { src: "/assets/SmartQueue/Landing.png" },
      { src: "/assets/SmartQueue/Default Player.png" },
      { src: "/assets/SmartQueue/Library Dropdown.png" },
      { src: "/assets/SmartQueue/Search.png" }
    ],
    extraImages: [
      { src: "/assets/SmartQueue/Default Player.png" },
      { src: "/assets/SmartQueue/blood.png", caption: "Blood Theme" },
      { src: "/assets/SmartQueue/c o s m o s.png", caption: "Cosmos Theme" },
      { src: "/assets/SmartQueue/forest.png", caption: "Forest Theme" },
      { src: "/assets/SmartQueue/Light Mode.png", caption: "Light Mode" },
      { src: "/assets/SmartQueue/pinku.png", caption: "Pinku Theme" }
    ]
  }
};

function renderHomePage() {
  return `
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
          <a class="button outline" href="/assets/Luiz%20Cauet%20Castilla%20Ruy%20Blum%20Resume%202025.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
        </nav>
      </header>

      <main>
        <section class="hero" id="about">
          <div class="hero-content">
            <p class="eyebrow">Computer Engineering • Systems Programming</p>
            <h1>Luiz Cauet Castilla Ruy Blum</h1>
            <p class="lead">
              Software engineer, game developer, and researcher focused on full-stack products, ML-driven creative tools,
              and immersive systems that bridge music tech and interactive media.
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
          <div class="scroll-indicator">
            <span>Scroll to explore</span>
            <div class="scroll-arrow">↓</div>
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
          <div class="project-cards">
            <article class="project-card" onclick="window.location.hash='#project/resonance'">
              <img src="/assets/Resonance/Resonance Main Menu.png" alt="Resonance Main Menu" />
              <div class="project-overlay">
                <p class="tag">Text-to-Synth Preset Generator</p>
              </div>
            </article>
            <article class="project-card" onclick="window.location.hash='#project/smartqueue'">
              <img src="/assets/SmartQueue/Landing.png" alt="SmartQueue Landing" />
              <div class="project-overlay">
                <p class="tag">Adaptive Spotify Queue System</p>
              </div>
            </article>
            <article class="project-card featured" onclick="window.location.hash='#project/audition'">
              <img src="/assets/The Audition/Main Screen.png" alt="The Audition Title Screen" />
              <div class="project-overlay">
                <p class="tag">3D Psych-Horror Musical Game</p>
              </div>
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
              <h4>Programming Languages</h4>
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
              <p><a href="/assets/Luiz%20Cauet%20Castilla%20Ruy%20Blum%20Resume%202025.pdf" target="_blank" rel="noreferrer">View Resume</a></p>
            </div>
          </div>
        </section>
      </main>

      <footer class="footer">
        <p>© 2026 Luiz Cauet Castilla Ruy Blum</p>
      </footer>
    </div>
  `;
}

function renderProjectPage(projectKey: string) {
  const project = projects[projectKey as keyof typeof projects];
  if (!project) {
    window.location.hash = '';
    return '';
  }

  const otherProjects = Object.entries(projects)
    .filter(([key]) => key !== projectKey)
    .map(([key, proj]) => `
      <article class="card clickable" onclick="window.location.hash='#project/${key}'">
        <h3>${proj.title}</h3>
        <p class="tag">${proj.subtitle}</p>
        <div class="card-arrow">→</div>
      </article>
    `).join('');

  const contentSections = project.images.length > 0 
    ? project.images.map((img, index) => {
        const isImageLeft = index % 2 === 0;
        const textBlock = project.contentBlocks[index] || '';
        
        return `
          <div class="content-row ${isImageLeft ? 'image-left' : 'image-right'}">
            <div class="content-image">
              <img src="${img.src}" alt="${project.title}" />
            </div>
            <div class="content-text">
              <p>${textBlock}</p>
            </div>
          </div>
        `;
      }).join('')
    : project.contentBlocks.map(block => `<div class="project-description"><p>${block}</p></div>`).join('');
  
  const extraGallery = project.extraImages && project.extraImages.length > 0 ? `
    <section class="section">
      <div class="section-header">
        <h2>In Different Themes!</h2>
      </div>
      <div class="theme-gallery">
        ${project.extraImages.map(img => `
          <div class="theme-item">
            <img src="${img.src}" alt="${img.caption}" />
          </div>
        `).join('')}
      </div>
    </section>
  ` : '';

  return `
    <div class="page">
      <header class="site-header">
        <nav class="nav">
          <a href="#" class="logo">← Luiz Blum</a>
          <div class="nav-links">
            <a href="#">Home</a>
            <a href="#projects">Projects</a>
            <a href="${project.github}" target="_blank" rel="noreferrer">${project.linkText}</a>
          </div>
          <a class="button outline" href="/assets/Luiz%20Cauet%20Castilla%20Ruy%20Blum%20Resume%202025.pdf" target="_blank" rel="noreferrer">
            View Resume
          </a>
        </nav>
      </header>

      <main class="project-page">
        <section class="project-hero">
          <p class="eyebrow">${project.tag}</p>
          <h1>${project.title}</h1>
          <p class="subtitle">${project.subtitle}</p>
          <div class="project-actions">
            <a class="button" href="${project.github}" target="_blank" rel="noreferrer">View on ${project.linkText}</a>
          </div>
        </section>

        <section class="section project-content">
          ${contentSections}
        </section>

        ${extraGallery}

        <section class="section">
          <div class="section-header centered">
            <h2>Other Projects</h2>
          </div>
          <div class="cards other-projects">
            ${otherProjects}
          </div>
        </section>
      </main>

      <footer class="footer">
        <p>© 2026 Luiz Cauet Castilla Ruy Blum</p>
      </footer>
    </div>
  `;
}

function render() {
  if (!app) return;

  const hash = window.location.hash;
  
  if (hash.startsWith('#project/')) {
    const projectKey = hash.replace('#project/', '');
    app.innerHTML = renderProjectPage(projectKey);
  } else {
    app.innerHTML = renderHomePage();
  }

  // Scroll to section if anchor present
  if (hash && !hash.startsWith('#project/')) {
    setTimeout(() => {
      const element = document.querySelector(hash);
      element?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  } else {
    window.scrollTo(0, 0);
  }
}

// Initial render
render();

// Listen for hash changes
window.addEventListener('hashchange', render);
