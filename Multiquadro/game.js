import BootScene from './scenes/BootScene.js';
import Level1 from './scenes/Level1.js';
import Level2 from './scenes/Level2.js';
import GameOver from './scenes/GameOver.js';
import WinScene from './scenes/WinScene.js';

const config = {
  type: Phaser.AUTO,
  width: 1600,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: { debug: false }
  },
  scene: [
    BootScene,
    Level1,
    Level2,
    GameOver,
    WinScene
  ]
};

new Phaser.Game(config);
