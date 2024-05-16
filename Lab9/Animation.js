import Ball from './Ball.js';

export default class Animation {
  constructor(canvas, numBallsInput, distanceInput, speedInput, lineWidthInput) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.numBallsInput = numBallsInput;
    this.distanceInput = distanceInput;
    this.speedInput = speedInput;
    this.lineWidthInput = lineWidthInput;
    this.balls = [];
    this.animationId = null;
  }

  init() {
    this.balls = [];
    const numBalls = parseInt(this.numBallsInput.value);
    const speed = parseFloat(this.speedInput.value);
    for (let i = 0; i < numBalls; i++) {
      const radius = 10;
      const x = Math.random() * (this.canvas.width - radius * 2) + radius;
      const y = Math.random() * (this.canvas.height - radius * 2) + radius;
      const dx = (Math.random() - 0.5) * speed;
      const dy = (Math.random() - 0.5) * speed;
      this.balls.push(new Ball(x, y, dx, dy, radius));
    }
  }

  getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  animate() {
    this.animationId = requestAnimationFrame(() => this.animate());
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.balls.forEach(ball => {
      ball.update(this.canvas);
      ball.draw(this.ctx);
    });

    const distance = parseInt(this.distanceInput.value);
    const lineWidth = parseInt(this.lineWidthInput.value);
    for (let i = 0; i < this.balls.length; i++) {
      for (let j = i + 1; j < this.balls.length; j++) {
        const dx = this.balls[i].x - this.balls[j].x;
        const dy = this.balls[i].y - this.balls[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < distance) {
          this.ctx.beginPath();
          this.ctx.moveTo(this.balls[i].x, this.balls[i].y);
          this.ctx.lineTo(this.balls[j].x, this.balls[j].y);
          this.ctx.strokeStyle = this.getRandomColor();
          this.ctx.lineWidth = lineWidth;
          this.ctx.stroke();
          this.ctx.closePath();
        }
      }
    }
  }

  start() {
    this.init();
    this.animate();
  }

  stop() {
    cancelAnimationFrame(this.animationId);
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
}
