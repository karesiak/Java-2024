import Animation from './Animation.js';

class Controller {
  constructor() {
    this.canvas = document.getElementById('canvas');
    this.numBallsInput = document.getElementById('numBalls');
    this.distanceInput = document.getElementById('distance');
    this.speedInput = document.getElementById('speed');
    this.lineWidthInput = document.getElementById('lineWidth');
    this.startButton = document.getElementById('startButton');
    this.resetButton = document.getElementById('resetButton');

    this.animation = new Animation(
      this.canvas,
      this.numBallsInput,
      this.distanceInput,
      this.speedInput,
      this.lineWidthInput
    );

    this.addEventListeners();
  }

  addEventListeners() {
    this.startButton.addEventListener('click', () => this.animation.start());
    this.resetButton.addEventListener('click', () => this.animation.stop());
    window.addEventListener('resize', () => {
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.animation.init();
      this.animation.animate();
    });

    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.animation.start();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Controller();
});
