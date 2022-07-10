import { Game } from './Game.js';
import { Landing } from './Landing.js';
import { GameOver } from './GameOver.js';

const config = {
  type: Phaser.AUTO,
  width: 288,
  height: 512,
  scene: [Landing, Game, GameOver],
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 0},
      debug: false
    }
  }
}

// console.log(Phaser.Signal);

var game = new Phaser.Game(config);