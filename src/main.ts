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
      "The frontend provides an intuitive Next.js interface for semantic search and interactive preset editing. Bringing this idea to life was a lot of fun, and I am currently working on repackaging this into a usable plugin within any DAW! This project was also a great step towards enhancing my knowledge of ML integration and cloud infrastructure management!"
    ],
    images: [
      { src: "/assets/Resonance/Resonance_Landing.png" },
      { src: "/assets/Resonance/Resonance_Chat.png" },
      { src: "/assets/Resonance/Resonance_Browse.png" },
      { src: "/assets/Resonance/VitalSynth.png" }
    ],
    extraImages: []
  },
  audition: {
    title: "The Audition",
    subtitle: "3D Psych-Horror Musical Game",
    tag: "Lead AI & Software Engineer • Godot • PyTorch • 2025-Current",
    github: "https://bhranthrok.itch.io/the-audition-v0",
    linkText: "itch.io",
    contentBlocks: [
      "The Audition is a multidisciplinary game project where performance, AI, and gameplay systems come together. My work centers on the technical and ML side of the project, with a focus on evaluating how player performance can be measured and used in gameplay.",
      "I lead a 13-member multidisciplinary team while serving as the project's lead software engineer. That includes coordinating work across design, art, audio, and engineering so the game ships as a cohesive experience.",
      "I designed, trained, and evaluated a PyTorch model to classify guitar solo quality, reaching 85% agreement with human rankings using Spearman rank correlation. I also architect and implement gameplay systems, AI behaviors, and core infrastructure in Godot.",
      "The result is a game built around real technical systems rather than placeholder mechanics: model-driven evaluation, gameplay logic, and production-ready engineering decisions that support the broader creative vision."
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
      "The backend leverages Supabase for authentication, row-level security policies, and state persistence. This architecture ensures user data is secure while maintaining the performance needed for real-time queue updates. This project is still one of my proudest full-stack applications, and something that I use on a daily basis."
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
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <a class="button outline" href="/assets/Luiz%20Cauet%20Castilla%20Ruy%20Blum%20Resume%202027.pdf" target="_blank" rel="noreferrer">
            <span class="button-text-full">View Resume</span><span class="button-text-short">Resume</span>
          </a>
        </nav>
      </header>

      <main>
        <section class="hero" id="home">
          <div class="hero-content">
            <h1>Luiz Cauet</h1>
            <h1>Castilla Ruy Blum</h1>
            <p class="lead">
            Building ML systems, backend infrastructure, and creative software
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
            <p>A selection of projects across ML, systems, and creative software.</p>
          </div>
          <div class="project-cards">
            <article class="project-card" onclick="window.location.hash='#project/resonance'">
              <img src="/assets/Resonance/Resonance_Landing.png" alt="Resonance Landing" />
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
                <p class="project-subtitle">AI-Driven Guitar Performance Game</p>
                <p class="project-tech">AI & Software Engineering • PyTorch • Godot</p>
              </div>
            </article>
          </div>
        </section>

        <section class="section" id="experience">
          <div class="section-header">
            <h2>Experience</h2>
          </div>
          <div class="timeline">
            <article class="timeline-item">
              <div class="timeline-logo">
                <img src="/assets/Experience%20Logos/UCSC%20Logo.png" alt="UCSC Logo" />
              </div>
              <div class="timeline-date">Jan 2026 — Mar 2026</div>
              <div class="timeline-content">
                <h3>Research Participant (Advisor: Dr. Jim Whitehead) · Augmented Design Lab</h3>
                <p>Santa Cruz, California</p>
                <ul>
                  <li>Developed PCG prototypes using LLMs, Wave Function Collapse, and Z3 constraint solving.</li>
                  <li>Implemented grid-based world generation systems and constraint-driven content pipelines.</li>
                  <li>Analyzed and applied technical research in procedural generation and game systems.</li>
                </ul>
              </div>
            </article>
            <article class="timeline-item">
              <div class="timeline-logo">
                <img src="/assets/Experience%20Logos/TheAudition%20Logo.png" alt="The Audition Logo" />
              </div>
              <div class="timeline-date">Sep 2025 — Current</div>
              <div class="timeline-content">
                <h3>Lead AI & Software Engineer · The Audition</h3>
                <p>Santa Cruz, California</p>
                <ul>
                  <li>Leading a 13-member multidisciplinary team while serving as the project's lead software engineer.</li>
                  <li>Designed, trained, and evaluated a PyTorch model to classify guitar solo quality, achieving 85% agreement with human rankings using Spearman rank correlation.</li>
                  <li>Architecting and implementing gameplay systems, AI behaviors, and core game infrastructure in Godot.</li>
                </ul>
              </div>
            </article>
            <article class="timeline-item">
              <div class="timeline-logo">
                <img src="/assets/Experience%20Logos/Integem%20Logo.jpg" alt="Integem Logo" />
              </div>
              <div class="timeline-date">Jun 2026 — Jul 2026</div>
              <div class="timeline-content">
                <h3>AI & Robotics Instructor · Integem Inc.</h3>
                <p>Fremont, California</p>
                <ul>
                  <li>Taught robotics, computer vision, and generative AI concepts to students ages 10–17.</li>
                  <li>Guided students through the complete YOLOv5 training pipeline, including dataset creation, annotation, training, evaluation, and hyperparameter tuning.</li>
                  <li>Instructed deploying of pretrained vision models for robotic object detection and manipulation workflows.</li>
                  <li>Mentored students through NVIDIA's Generative AI curriculum, introducing diffusion models and practical machine learning concepts.</li>
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
                <p>Founded and led a 100+ member interdisciplinary music and tech collective at UCSC.</p>
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
          </div>
          <div class="skill-grid">
            <div class="skill-group">
              <h4>Languages</h4>
              <div class="chips">
                <span>Python</span><span>C/C++</span><span>TypeScript</span><span>SQL</span><span>Java</span>
              </div>
            </div>
            <div class="skill-group">
              <h4>AI / ML</h4>
              <div class="chips">
                <span>PyTorch</span><span>CUDA</span><span>NumPy</span><span>SciPy</span><span>FastAPI</span>
              </div>
            </div>
            <div class="skill-group">
              <h4>Infrastructure</h4>
              <div class="chips">
                <span>Linux</span><span>Docker</span><span>PostgreSQL</span><span>AWS</span><span>Supabase</span><span>Wireshark</span>
              </div>
            </div>
          </div>
        </section>

        <section class="section" id="education">
          <div class="section-header">
            <h2>Education</h2>
          </div>
          <div class="education-card">
            <div>
              <h3>University of California, Santa Cruz</h3>
              <p>B.S. in Computer Engineering - Systems Programming Concentration, CS Minor</p>
              <p class="muted">Expected Graduation: March 2027 · GPA: 3.5</p>
            </div>
            <div class="coursework">
              <h4>Relevant Coursework</h4>
              <p>
                Machine Learning, Data Structures & Algorithms, Networks, Systems Design, Computer Architecture, Software Engineering,
                Organization, Game AI
              </p>
            </div>
          </div>
        </section>

        <section class="section contact" id="contact">
          <div class="contact-content">
            <h2 class="contact-title">Let's Build</h2>
            <p class="contact-email"><a href="mailto:luizcauetcastilla@gmail.com">luizcauetcastilla@gmail.com</a></p>
            <p class="contact-phone">(346) 218-1701 · Santa Cruz, California</p>
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

function renderAboutPage() {
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
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <a class="button outline" href="/assets/Luiz%20Cauet%20Castilla%20Ruy%20Blum%20Resume%202027.pdf" target="_blank" rel="noreferrer">
            <span class="button-text-full">View Resume</span><span class="button-text-short">Resume</span>
          </a>
        </nav>
      </header>

      <main class="project-page">
        <section class="project-hero">
          <p class="eyebrow">About Me</p>
          <h1>Hi, I'm Luiz.</h1>
        </section>

        <section class="section">
          <div class="project-description">
            <p>
              I’m a software engineer interested in machine learning, systems, and creative technology. I’ve always enjoyed solving puzzles and finding better ways to do things, which is probably why I gravitate toward programming. I like digging into how things work, figuring out where they can be improved, and turning those ideas into software.
            </p>
          </div>
          <div class="project-description">
            <p>
              I currently lead the engineering and AI development for The Audition, a 13-person team building a musical 3D psych-horror game. I also founded The Slug Collective, a 100+ member music and tech community at UCSC. Across these projects, I’ve had the chance to work on everything from ML and game systems to team leadership and production.
            </p>
          </div>
          <div class="project-description">
            <p>
              Outside of engineering, I’m usually making music, discovering new artists, or playing games. Some of the games that have stuck with me the most are Guitar Hero, Geometry Dash, Black Desert Online, Rocket League, Counter-Strike, and League of Legends.
            </p>
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
          <button class="hamburger" id="hamburger" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <a href="#" class="logo">Luiz Blum</a>
          <div class="nav-links" id="nav-links">
            <a href="#about">About Me</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#skills">Skills</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
          </div>
          <a class="button outline" href="/assets/Luiz%20Cauet%20Castilla%20Ruy%20Blum%20Resume%202027.pdf" target="_blank" rel="noreferrer">
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
  } else if (hash === '#about') {
    app.innerHTML = renderAboutPage();
  } else {
    app.innerHTML = renderHomePage();
  }

  // Scroll to section if anchor present
  if (hash && !hash.startsWith('#project/') && hash !== '#about') {
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
