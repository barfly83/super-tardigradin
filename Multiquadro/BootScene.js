export default class BootScene extends Phaser.Scene {
  constructor() { super('BootScene'); }

  preload() {
    this.load.audio('start', 'assets/start.wav');
  }

  create() {
    this.add.text(
      this.scale.width / 2, 
      250, 
      '🦠 SUPER TARDIGRADIN 🦠',
      { fontSize: '48px', fill: '#00ffcc', fontFamily: 'monospace' }
    ).setOrigin(0.5);

    const startText = this.add.text(
      this.scale.width / 2,
      380,
      'Clicca o premi un tasto per iniziare',
      { fontSize: '22px', fill: '#fff', fontFamily: 'monospace' }
    ).setOrigin(0.5);

    this.tweens.add({
      targets: startText,
      alpha: { from: 1, to: 0.3 },
      duration: 1000,
      yoyo: true,
      repeat: -1
    });

    const startGame = () => {
      this.sound.play('start');
      this.scene.start('Level1', { score: 0, lives: 3 });
    };

    this.input.once('pointerdown', startGame);
    this.input.keyboard.once('keydown', startGame);
  }
}
