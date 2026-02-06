import Phaser from "phaser";

export default class Standard extends Phaser.Scene {
  private detailPanel?: Phaser.GameObjects.Container;
  private overlay?: Phaser.GameObjects.Rectangle;
  private carouselIndex = 0;
  private carouselImages: Phaser.GameObjects.Image[] = [];

  constructor() {
    super("Standard");
  }

  preload() {
    this.load.image('particle', '/star.svg');
    this.load.image('portrait', '/assets/Character.jpg');
    
    // Load SmartQueue project images
    this.load.image('smartqueue1', '/assets/SmartQueue/Landing.png');
    this.load.image('smartqueue2', '/assets/SmartQueue/Default Player.png');
    this.load.image('smartqueue3', '/assets/SmartQueue/blood.png');
    this.load.image('smartqueue4', '/assets/SmartQueue/c o s m o s.png');
    this.load.image('smartqueue5', '/assets/SmartQueue/forest.png');
    this.load.image('smartqueue6', '/assets/SmartQueue/Library Dropdown.png');
    this.load.image('smartqueue7', '/assets/SmartQueue/Light Mode.png');
    this.load.image('smartqueue8', '/assets/SmartQueue/pinku.png');
    this.load.image('smartqueue9', '/assets/SmartQueue/Search.png');
    
    // Load The Audition project images
    this.load.image('audition1', '/assets/The Audition/Hallway.png');
    this.load.image('audition2', '/assets/The Audition/lab.png');
    this.load.image('audition4', '/assets/The Audition/stage Saw.png');
    this.load.image('audition5', '/assets/The Audition/Stage.png');
  }

  create() {
    console.log("Standard Scene Started");

    // Create the rising dot (original firework timing/position)
    const dot = this.add.circle(160, 200, 2, 0xffffff);

    // Create particle emitter for firework effect
    const emitter = this.add.particles(0, 0, "particle");
    emitter.setConfig({
      follow: dot,
      lifespan: 1500,
      speed: { min: 20, max: 50 },
      scale: { start: 0.02, end: 0 },
      alpha: { start: 1, end: 0 },
      frequency: 50,
      gravityY: 20,
      angle: { min: 90 - 30, max: 90 + 30 },
      tint: 0x521278,
    });

    this.time.delayedCall(1800, () => emitter.stop());

    // Animate the dot rising
    this.tweens.add({
      targets: dot,
      y: 90,
      delay: 500,
      duration: 2000,
      ease: "power3",
      onComplete: () => {
        dot.setAlpha(0);
        this.cameras.main.flash(450, 255, 255, 255);
        this.cameras.main.shake(250, 0.005);

        // Create portfolio after explosion
        this.resizeToTarget();
        this.createLanding();
      },
    });
  }

  private createLanding() {
    const { width, height } = this.scale;
    this.cameras.main.setBackgroundColor("#000000");

    const gutter = Math.max(48, width * 0.07);
    const left = gutter;
    const right = width - gutter;

    // Creative background lines
    const grid = this.add.graphics();
    grid.lineStyle(1, 0x2f0a4b, 0.35);
    for (let x = left; x <= right; x += 80) {
      grid.lineBetween(x, 30, x, height - 60);
    }
    for (let y = 30; y <= height - 60; y += 80) {
      grid.lineBetween(left, y, right, y);
    }

    const title = this.add
      .text(left + 40, height * 0.08, "Luiz Blum", {
        fontSize: "54px",
        color: "#ffffff",
        fontFamily: "Inter, Segoe UI, Arial, sans-serif",
        fontStyle: "bold",
      })
      .setOrigin(0, 0)
      .setAlpha(0);

    const layoutWidth = right - left;
    const cardGap = Math.max(24, layoutWidth * 0.04);
    const leftColumnWidth = layoutWidth * 0.58;
    const rightColumnWidth = layoutWidth - leftColumnWidth - cardGap;

    const cardAreaTop = height * 0.26;
    const cardAreaBottom = height - 170;
    const cardAreaHeight = cardAreaBottom - cardAreaTop;

    const leftCardHeight = cardAreaHeight;
    const rightCardHeight = (cardAreaHeight - cardGap) / 2;

    const leftColumnX = left + leftColumnWidth / 2;
    const rightColumnX = left + leftColumnWidth + cardGap + rightColumnWidth / 2;

    const leftCardY = cardAreaTop + leftCardHeight / 2;
    const rightTopY = cardAreaTop + rightCardHeight / 2;
    const rightBottomY = cardAreaTop + rightCardHeight + cardGap + rightCardHeight / 2;

    this.createSectionCard(
      {
        title: "Software Engineering",
        blurb: "Full-stack development with Next.js, React, Node.js, and cloud services.",
        description: "SmartQueue is an adaptive Spotify queue management system that learns from user behavior to create personalized listening experiences. Built with Next.js and React, it features multiple themed interfaces including dark mode variants, light mode for accessibility, and custom color schemes. The application includes advanced search functionality, library management with dropdown navigation, and a responsive player interface that adapts to user preferences. Winner of 1st place at a hackathon, this project demonstrates full-stack development capabilities with modern web technologies and cloud services integration.",
        bullets: [
          "SmartQueue - Landing page with modern design",
          "Default player interface with adaptive controls",
          "Blood theme - dark mode UI variant",
          "Cosmos theme - space-inspired interface",
          "Forest theme - nature-themed UI",
          "Library dropdown with search functionality",
          "Light mode interface for accessibility",
          "Pinku theme - vibrant color scheme",
          "Advanced search with filters"
        ],
        images: ['smartqueue1', 'smartqueue2', 'smartqueue3', 'smartqueue4', 'smartqueue5', 'smartqueue6', 'smartqueue7', 'smartqueue8', 'smartqueue9'],
        bgImage: 'smartqueue2'
      },
      leftColumnX,
      leftCardY,
      leftColumnWidth,
      leftCardHeight
    );

    this.createSectionCard(
      {
        title: "Game Development",
        blurb: "Leading a 12-person team building a 3D psych-horror game in Godot.",
        description: "The Audition is a psychological horror game where I serve as the lead developer managing a diverse team of 12 talented individuals. As the sole programmer, I'm responsible for implementing all gameplay systems, narrative mechanics, and technical infrastructure. The game features atmospheric environments including haunting hallways and experimental laboratory spaces, culminating in intense performance sequences on various stage designs. I designed a unique freestyle-performance mechanic that allows players to express creativity under pressure. This project showcases my ability to lead cross-functional teams, architect complex game systems, and bring ambitious creative visions to life in the Godot engine.",
        bullets: [
          "Hallway scene - atmospheric corridor design",
          "Laboratory environment - experimental gameplay area",
          "Main screen interface with game branding",
          "Stage with saw - intense performance scene",
          "Main stage - central performance area"
        ],
        images: ['audition1', 'audition2', 'audition4', 'audition5'],
        bgImage: 'portrait'
      },
      rightColumnX,
      rightTopY,
      rightColumnWidth,
      rightCardHeight
    );

    this.createSectionCard(
      {
        title: "Music Production",
        blurb: "Composing and producing original soundtracks for interactive media.",
        description: "As a music producer and composer, I founded The Slug Collective, a thriving music community at UCSC with over 100 members. I successfully secured $1,500 in funding and directed the production of a 12-track collaborative album featuring 15 talented contributors. My work extends to game audio, where I composed and integrated the original soundtrack for The Audition, creating an immersive sonic atmosphere that enhances the psychological horror experience. My expertise spans composition, production, audio engineering, and the technical integration of music into interactive media, demonstrating a unique intersection of creative and technical skills.",
        bullets: ["The Slug Collective - Founded 100+ member music collective at UCSC", "Secured $1,500 in funding, directed 12-track album with 15 contributors", "The Audition soundtrack - Original composition and game audio integration"],
        images: [],
        bgImage: 'portrait'
      },
      rightColumnX,
      rightBottomY,
      rightColumnWidth,
      rightCardHeight
    );

    const footerLine = this.add.rectangle(width / 2, height - 120, width * 0.7, 2, 0x7a2abf, 1).setAlpha(0);

    const contact = this.add
      .text(width / 2, height - 95, "luizcauetcastilla@gmail.com • github.com/LuizCauet • linkedin.com/in/luizcauet", {
        fontSize: "16px",
        color: "#ffffff",
        fontFamily: "Inter, Segoe UI, Arial, sans-serif",
      })
      .setOrigin(0.5, 0)
      .setAlpha(0);

    this.tweens.add({
      targets: [title, footerLine, contact],
      alpha: 1,
      duration: 1000,
      ease: "power2",
      delay: 250,
    });
  }

  private createSectionCard(
    data: { title: string; blurb: string; description: string; bullets: string[]; images: string[]; bgImage: string },
    x: number,
    y: number,
    width: number,
    height: number
  ) {
    const container = this.add.container(x, y).setAlpha(1);

    const background = this.add
      .rectangle(0, 0, width, height, 0x000000, 1)
      .setStrokeStyle(2, 0x7a2abf, 1);

    // Large background image
    const bgImage = this.add
      .image(0, 0, data.bgImage)
      .setDisplaySize(width, height)
      .setAlpha(0.3);

    // Dark overlay for text readability
    const overlay = this.add
      .rectangle(0, 0, width, height, 0x000000, 0.6);

    const title = this.add.text(0, -height / 2 + 32, data.title, {
      fontSize: "22px",
      color: "#ffffff",
      fontFamily: "Inter, Segoe UI, Arial, sans-serif",
      fontStyle: "bold",
    }).setOrigin(0.5, 0);

    const blurb = this.add.text(0, -height / 2 + 74, data.blurb, {
      fontSize: "14px",
      color: "#ffffff",
      fontFamily: "Inter, Segoe UI, Arial, sans-serif",
      align: "center",
      wordWrap: { width: width - 60 },
    }).setOrigin(0.5, 0);

    const learnMore = this.add.text(0, height / 2 - 40, "Learn more →", {
      fontSize: "14px",
      color: "#ffffff",
      fontFamily: "Inter, Segoe UI, Arial, sans-serif",
      fontStyle: "bold",
    }).setOrigin(0.5, 0);

    container.add([background, bgImage, overlay, title, blurb, learnMore]);

    background.setInteractive({ useHandCursor: true });

    background.on("pointerdown", () => this.showDetailPanel(data));

  }

  private showDetailPanel(data: { title: string; blurb: string; description: string; bullets: string[]; images: string[]; bgImage: string }) {
    this.hideDetailPanel();

    const { width, height } = this.scale;

    this.overlay = this.add.rectangle(0, 0, width, height, 0x000000, 0.7).setOrigin(0).setScrollFactor(0);
    this.overlay.setInteractive({ useHandCursor: true });
    this.overlay.on("pointerdown", () => this.hideDetailPanel());

    const panelWidth = 1000;
    const panelHeight = 650;

    const panelBackground = this.add.graphics();
    panelBackground.fillStyle(0x000000, 1);
    panelBackground.fillRoundedRect(
      width / 2 - panelWidth / 2,
      height / 2 - panelHeight / 2,
      panelWidth,
      panelHeight,
      18
    );
    panelBackground.lineStyle(2, 0x9a5bff, 0.9);
    panelBackground.strokeRoundedRect(
      width / 2 - panelWidth / 2,
      height / 2 - panelHeight / 2,
      panelWidth,
      panelHeight,
      18
    );

    const title = this.add.text(width / 2 - panelWidth / 2 + 32, height / 2 - panelHeight / 2 + 28, data.title, {
      fontSize: "26px",
      color: "#ffffff",
      fontFamily: "Inter, Segoe UI, Arial, sans-serif",
      fontStyle: "bold",
    });

    const close = this.add.text(width / 2 + panelWidth / 2 - 32, height / 2 - panelHeight / 2 + 24, "✕", {
      fontSize: "18px",
      color: "#ffffff",
      fontFamily: "Inter, Segoe UI, Arial, sans-serif",
    })
    .setOrigin(1, 0)
    .setInteractive({ useHandCursor: true })
    .on("pointerdown", () => this.hideDetailPanel());

    const elements: any[] = [panelBackground, title, close];

    // Use images if provided, otherwise use placeholder
    const displayImages = data.images.length > 0 ? data.images : ['portrait'];
    
    this.carouselIndex = 0;
    this.carouselImages = [];

    const contentTop = height / 2 - panelHeight / 2 + 80;
    const contentHeight = panelHeight - 120;
    
    // Left side: Image carousel (55% of panel width)
    const leftSideWidth = panelWidth * 0.55;
    const leftSideX = width / 2 - panelWidth / 2 + leftSideWidth / 2;
    
    // Right side: Description text (45% of panel width)
    const rightSideWidth = panelWidth * 0.45 - 60;
    const rightSideX = width / 2 - panelWidth / 2 + leftSideWidth + 30;
    
    const carouselWidth = leftSideWidth - 80;
    const carouselHeight = contentHeight - 60;
    const carouselY = contentTop + carouselHeight / 2;

    displayImages.forEach((imgKey, index) => {
      const img = this.add.image(leftSideX, carouselY, imgKey);
      
      // Scale to fit within carousel bounds while maintaining aspect ratio
      const scaleX = carouselWidth / img.width;
      const scaleY = carouselHeight / img.height;
      const scale = Math.min(scaleX, scaleY);
      img.setScale(scale);
      img.setVisible(index === 0);
      
      this.carouselImages.push(img);
      elements.push(img);
    });

    // Navigation buttons for carousel
    if (displayImages.length > 1) {
      const prevBtn = this.add.text(width / 2 - panelWidth / 2 + 40, carouselY, "◀", {
        fontSize: "28px",
        color: "#ffffff",
        fontFamily: "Inter, Segoe UI, Arial, sans-serif",
      })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.carouselImages[this.carouselIndex].setVisible(false);
        this.carouselIndex = (this.carouselIndex - 1 + displayImages.length) % displayImages.length;
        this.carouselImages[this.carouselIndex].setVisible(true);
        indicator.setText(`${this.carouselIndex + 1} / ${displayImages.length}`);
      });

      const nextBtn = this.add.text(width / 2 - panelWidth / 2 + leftSideWidth - 40, carouselY, "▶", {
        fontSize: "28px",
        color: "#ffffff",
        fontFamily: "Inter, Segoe UI, Arial, sans-serif",
      })
      .setOrigin(0.5)
      .setInteractive({ useHandCursor: true })
      .on("pointerdown", () => {
        this.carouselImages[this.carouselIndex].setVisible(false);
        this.carouselIndex = (this.carouselIndex + 1) % displayImages.length;
        this.carouselImages[this.carouselIndex].setVisible(true);
        indicator.setText(`${this.carouselIndex + 1} / ${displayImages.length}`);
      });

      const indicator = this.add.text(leftSideX, height / 2 + panelHeight / 2 - 50, `${this.carouselIndex + 1} / ${displayImages.length}`, {
        fontSize: "14px",
        color: "#ffffff",
        fontFamily: "Inter, Segoe UI, Arial, sans-serif",
      }).setOrigin(0.5);

      elements.push(prevBtn, nextBtn, indicator);
    }

    // Right side: Description paragraph
    const descriptionText = this.add.text(rightSideX, contentTop + 20, data.description, {
      fontSize: "15px",
      color: "#ffffff",
      fontFamily: "Inter, Segoe UI, Arial, sans-serif",
      align: "left",
      wordWrap: { width: rightSideWidth },
      lineSpacing: 8
    })
    .setOrigin(0, 0);

    elements.push(descriptionText);

    this.detailPanel = this.add.container(0, 0, elements);
    this.detailPanel.setScrollFactor(0);
    this.detailPanel.setAlpha(0);

    this.tweens.add({ targets: this.detailPanel, alpha: 1, duration: 200, ease: "power2" });
  }

  private nextImage() {
    // Removed - functionality now inline in carousel buttons
  }

  private prevImage() {
    // Removed - functionality now inline in carousel buttons
  }

  private hideDetailPanel() {
    this.carouselImages = [];
    this.carouselIndex = 0;
    
    this.detailPanel?.destroy();
    this.detailPanel = undefined;

    this.overlay?.destroy();
    this.overlay = undefined;
  }


  private resizeToTarget() {
    const targetWidth = window.innerWidth >= 1920 ? 1920 : window.innerWidth;
    const targetHeight = window.innerHeight >= 1080 ? 1080 : window.innerHeight;

    this.scale.resize(targetWidth, targetHeight);
    this.cameras.resize(targetWidth, targetHeight);
  }

  update() {
    // Game loop
  }
}
