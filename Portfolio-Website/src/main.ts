import Phaser from "phaser";
import Prompt from "../Scenes/Prompt.ts"
import MainScene from "../Scenes/MainScreen.ts"
import "./style.css";

const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 320,
  height: 180,  // (16:9)
  backgroundColor: "#000000",
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    parent: "phaser-game",
  },
  scene: [Prompt, MainScene],
  pixelArt: true,
};

new Phaser.Game(config);
