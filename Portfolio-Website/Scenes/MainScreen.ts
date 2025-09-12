import Phaser from "phaser";

export default class MainScene extends Phaser.Scene {
  constructor() {
    super("MainScene");
  }

  preload() {
    // Load assets here later, e.g. this.load.image("dot", "dot.png")
    this.load.image('particle', '/star.svg');
  }

  create() {
    const dot = this.add.circle(160, 200, 2, 0xffffff); // x, y, radius, color

    const emitter = this.add.particles(0, 0, 'particle');
    emitter.setConfig({
      follow: dot,
      lifespan: 1500,
      speed: { min: 20, max: 50 },
      scale: { start: 0.02, end: 0 },
      alpha: { start: 1, end: 0 },
      frequency: 50,
      gravityY: 20,
      angle: {min: 90 - 30, max: 90 + 30},
      tint: 0x521278,
    });

    this.time.delayedCall(1800, () => emitter.stop());

    this.tweens.add({
      targets: dot,
      y: 90,
      delay: 500,
      duration: 2000,
      ease: "power3",
      onComplete: () => {
        this.cameras.main.flash(500, 255, 255, 255); // 500ms White flash
        this.cameras.main.shake(300, 0.01); // 300ms screen shake
        dot.setAlpha(0);
      }
    });
  }

  update() {
    // called every frame, e.g. for animations later
  }
}
