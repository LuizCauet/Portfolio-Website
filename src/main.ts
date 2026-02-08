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
    tag: "Game Director • Godot Dev • Composer • 2025-Current",
    github: "https://bhranthrok.itch.io/the-audition-v0",
    linkText: "itch.io",
    contentBlocks: [
      "The Audition is a psychological horror game where performance meets terror. The game centers on a unique freestyle-performance mechanic where player improvisation dynamically affects story outcomes, creating a deeply personal horror experience that responds to how you choose to perform under pressure.",
      "As game director and co-creator, I conceived the original vision and lead the creative direction alongside my co-designer. I coordinate a 12-member team across modeling, texturing, audio, and animation to deliver a cohesive 3D experience in Godot. The game features atmospheric environments including haunting hallways and experimental laboratory spaces that build tension through environmental storytelling.",
      "As the sole programmer, I implement all gameplay systems, real-time mechanics, and narrative logic in Godot. This includes architecting the performance mechanics, AI behaviors, player interaction systems, and the dynamic narrative engine that responds to player choices throughout the game. Every line of code and technical implementation is built by me.",
      "I compose and produce the original soundtrack, handling sprint planning and Git workflow with the team. Performance stages serve as the climactic moments where all game systems converge - my music, narrative design, and gameplay programming merge into intense sequences that test the player's composure."
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
    <div class="page home">
      <header class="site-header">
        <nav class="nav">
          <button class="hamburger" id="hamburger" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div class="logo">Luiz Blum</div>
          <div class="nav-links" id="nav-links">
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <a class="button outline" href="/assets/Luiz%20Cauet%20Castilla%20Ruy%20Blum%20Resume%202025.pdf" target="_blank" rel="noreferrer">
            <span class="button-text-full">View Resume</span><span class="button-text-short">Resume</span>
          </a>
        </nav>
      </header>

      <main>
        <section class="hero" id="about">
          <div class="hero-content">
            <h1>Luiz Cauet</h1>
            <h1>Castilla Ruy Blum</h1>
            <p class="lead">
              Full-stack engineer & game developer creating ML-driven tools and immersive experiences.
            </p>
            <div class="hero-actions">
              <a class="button" href="mailto:luizcauetcastilla@gmail.com">Email Me</a>
              <a class="button ghost" href="https://github.com/LuizCauet" target="_blank" rel="noreferrer">GitHub</a>
              <a class="button ghost" href="https://linkedin.com/in/luizcauet" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
          <div class="scroll-indicator">
            <div class="scroll-arrow">↓</div>
          </div>
        </section>

        <section class="section" id="projects">
          <div class="section-header">
            <h2>Projects</h2>
            <p>Selected work across full-stack, machine learning, and game development.</p>
          </div>
          <div class="project-cards">
            <article class="project-card" onclick="window.location.hash='#project/resonance'">
              <img src="/assets/Resonance/Resonance Main Menu.png" alt="Resonance Main Menu" />
              <div class="project-overlay">
                <p class="project-subtitle">Text-to-Synth Preset Generator</p>
                <p class="project-tech">ML • Python • FastAPI • Next.js</p>
              </div>
            </article>
            <article class="project-card" onclick="window.location.hash='#project/smartqueue'">
              <img src="/assets/SmartQueue/Landing.png" alt="SmartQueue Landing" />
              <div class="project-overlay">
                <p class="project-subtitle">Adaptive Spotify Queue System</p>
                <p class="project-tech">Next.js • React • Supabase • Spotify SDK</p>
              </div>
            </article>
            <article class="project-card featured" onclick="window.location.hash='#project/audition'">
              <img src="/assets/The Audition/Main Screen.png" alt="The Audition Title Screen" />
              <div class="project-overlay">
                <p class="project-subtitle">3D Psych-Horror Musical Game</p>
                <p class="project-tech">Game Director • Godot Dev • Composer</p>
              </div>
            </article>
          </div>
        </section>

        <section class="section" id="experience">
          <div class="section-header">
            <h2>Experience</h2>
            <p>Engineering, research, and leadership roles spanning software, games, and music.</p>
          </div>
          <div class="timeline">
            <article class="timeline-item">
              <div class="timeline-logo">
                <img src="/assets/Experience%20Logos/prosper%20XO.png" alt="Prosper XO Logo" />
              </div>
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
              <div class="timeline-logo">
                <img src="/assets/Experience%20Logos/UCSC%20Logo.png" alt="UCSC Logo" />
              </div>
              <div class="timeline-date">Jan 2026 — Current</div>
              <div class="timeline-content">
                <h3>Research Participant · Augmented Design Lab (Dr. Jim Whitehead)</h3>
                <p>Developed PCG prototypes using LLMs, Wave Function Collapse, and Z3 constraint solving.</p>
                <ul>
                  <li>Implemented grid-based world generation systems and constraint-driven content pipelines.</li>
                  <li>Analyzed and applied technical research in procedural generation and game systems.</li>
                </ul>
              </div>
            </article>
            <article class="timeline-item">
              <div class="timeline-logo">
                <img src="/assets/Experience%20Logos/The%20Slug%20Collective%20Logo.png" alt="The Slug Collective Logo" />
              </div>
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

        <section class="section" id="skills">
          <div class="section-header">
            <h2>Skills</h2>
            <p>Tools and languages spanning software, systems, and audio production.</p>
          </div>
          <div class="skill-grid">
            <div class="skill-group">
              <h4>Programming Languages</h4>
              <div class="chips">
                <span>Python</span><span>JavaScript/TypeScript</span><span>C/C++</span><span>Java</span><span>SQL</span><span>Assembly</span><span>R</span>
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
                Data Structures & Algorithms, Game AI, Networks, Systems Design, Computer Architecture, Intro to Software Engineering,
                Computer Organization
              </p>
            </div>
          </div>
        </section>

        <section class="section contact" id="contact">
          <div class="contact-content">
            <h2 class="contact-title">Let's Build</h2>
            <p class="contact-email"><a href="mailto:luizcauetcastilla@gmail.com">luizcauetcastilla@gmail.com</a></p>
            <p class="contact-phone">(346) 218-1701 · Santa Cruz, CA</p>
            <p class="contact-location"></p>
            <div class="social-links">
              <a href="https://github.com/LuizCauet" target="_blank" rel="noreferrer" aria-label="GitHub">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/luizcauet" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="contact-divider"></div>
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
          <button class="hamburger" id="hamburger" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="#" class="logo">Luiz Blum</a>
          <div class="nav-links" id="nav-links">
          </div>
          <a class="button outline" href="/assets/Luiz%20Cauet%20Castilla%20Ruy%20Blum%20Resume%202025.pdf" target="_blank" rel="noreferrer">
            <span class="button-text-full">View Resume</span><span class="button-text-short">Resume</span>
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

// Mobile menu toggle
function setupMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('nav-links');
  const siteHeader = document.querySelector<HTMLElement>('.site-header');
  
  if (hamburger && navLinks && siteHeader) {
    // Set CSS variable for header height
    const setHeaderHeight = () => {
      const headerHeight = siteHeader.offsetHeight;
      document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
    };
    
    setHeaderHeight();
    window.addEventListener('resize', setHeaderHeight);
    
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navLinks.classList.toggle('active');
    });
    
    // Close menu when clicking nav links
    const links = navLinks.querySelectorAll('a');
    links.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }
}

let isScrollListenerSetup = false;
let isProjectCardRevealSetup = false;

function updateLogoState() {
  const currentPage = document.querySelector('.page');
  if (!currentPage) return;

  if (window.scrollY > 0) {
    currentPage.classList.add('scrolled');
  } else {
    currentPage.classList.remove('scrolled');
  }
}

function updateProjectCardHighlight() {
  const cards = Array.from(document.querySelectorAll<HTMLElement>('.project-card'));
  if (cards.length === 0) return;

  if (window.scrollY === 0) {
    cards.forEach(card => card.classList.remove('is-visible'));
    return;
  }

  const viewportCenter = window.innerHeight / 2;
  let bestCard: HTMLElement | null = null;
  let bestDistance = Number.POSITIVE_INFINITY;

  cards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
    const cardCenter = rect.top + rect.height / 2;
    const distance = Math.abs(cardCenter - viewportCenter);
    if (distance < bestDistance) {
      bestDistance = distance;
      bestCard = card;
    }
  });

  cards.forEach(card => card.classList.toggle('is-visible', card === bestCard));
}

function setupProjectCardReveal() {
  if (!isProjectCardRevealSetup) {
    window.addEventListener('scroll', updateProjectCardHighlight, { passive: true });
    window.addEventListener('resize', updateProjectCardHighlight);
    isProjectCardRevealSetup = true;
  }

  updateProjectCardHighlight();
}

// Setup scroll listener for logo visibility
function setupScrollListener() {
  if (isScrollListenerSetup) return;
  window.addEventListener('scroll', updateLogoState, { passive: true });
  updateLogoState();
  isScrollListenerSetup = true;
}

// Setup mobile menu after each render
window.addEventListener('hashchange', () => {
  render();
  setupMobileMenu();
  setupScrollListener();
  updateLogoState();
  setupProjectCardReveal();
});

setupMobileMenu();
setupScrollListener();
updateLogoState();
setupProjectCardReveal();
