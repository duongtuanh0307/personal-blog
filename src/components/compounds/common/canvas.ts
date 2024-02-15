import { CANVAS_HEIGHT } from "./background";

const PI = Math.PI;

class Star {
  x: number;
  y: number;
  radius: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.radius = Math.random() * 5;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, 2 * PI);
    ctx.fill();
    ctx.restore();
  }
}

class Cloud {
  x: number;
  y: number;
  screenWidth: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.screenWidth = 1.5 * window.innerWidth;
  }
}

class Cloud1 extends Cloud {
  size: number;
  width: number;
  height: number;

  constructor(x: number, y: number, size: number) {
    super(x, y);
    this.size = size;
    this.width = this.size * 40;
    this.height = (this.size * 40) / 3;
  }
  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.translate(this.x - 0.1 * this.screenWidth, this.y);
    ctx.beginPath();
    ctx.arc(2, this.height / 2, this.height / 2, PI / 2, (PI * 3) / 2);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(
      this.width - this.width / 30,
      this.height / 2 - 5,
      this.height / 2 + 5,
      -PI / 2,
      -(PI * 3) / 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.arc(this.width / 4, this.height / 4, this.width / 4, PI, PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(
      (this.width * 2) / 3,
      2,
      this.width / 3,
      this.height,
      0,
      PI,
      PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(
      this.width / 4,
      this.height - 2,
      this.width / 4,
      this.height / 4,
      0,
      0,
      PI
    );
    ctx.fill();
    ctx.ellipse(
      (this.width * 2) / 3,
      this.height - 2,
      this.width / 3,
      this.height / 4,
      0,
      0,
      PI
    );
    ctx.fill();
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.restore();
  }

  update() {
    this.x = (this.x + 15 - 2 * this.size) % this.screenWidth;
  }
}

class Cloud2 extends Cloud {
  size: number;
  width: number;
  height: number;
  scaleX: number;

  constructor(x: number, y: number, size: number) {
    super(x, y);
    this.size = size;
    this.width = this.size * 40;
    this.height = this.size * 10;
    this.scaleX = Math.round(Math.random() * 2) - 1 || 1;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.translate(this.x - 0.1 * this.screenWidth, this.y);
    ctx.scale(this.scaleX, 1);
    ctx.beginPath();
    ctx.ellipse(
      (this.width * 2) / 9,
      this.height / 4,
      (this.width * 3) / 8,
      (this.height * 3) / 4,
      0,
      PI,
      PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.arc((this.width * 4) / 7, this.height / 4, this.width / 3, PI, PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(
      this.width / 2,
      this.height,
      this.width / 3,
      this.height / 2,
      0,
      0,
      PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(
      this.width / 8,
      (this.height * 7) / 8,
      this.width / 3,
      this.height / 2,
      0,
      0,
      PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(
      0,
      this.height / 2,
      this.width / 3,
      this.height / 2,
      0,
      0,
      PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(
      (this.width * 3) / 4,
      this.height / 2,
      this.width / 3,
      (this.height * 4) / 5,
      0,
      0,
      2 * PI
    );
    ctx.fill();
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.restore();
  }

  update() {
    this.x = (this.x + 15 - 2 * this.size) % this.screenWidth;
  }
}

class Kitty {
  x: number;
  y: number;
  width: number;
  height: number;
  scaleX: number;
  scaleY: number;

  constructor(x: number, y: number, scaleX: number, scaleY: number) {
    this.x = x;
    this.y = y;
    this.width = 300;
    this.height = 300;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.scale(this.scaleX, this.scaleY);
    ctx.fillStyle = "black";
    //body
    ctx.beginPath();
    const [p1x, p1y] = [200, 80];
    const [p2x, p2y] = [200, 280];
    ctx.moveTo(p1x, p1y);
    ctx.bezierCurveTo(200, 100, 20, 280, p2x, p2y);
    ctx.bezierCurveTo(380, 280, 200, 100, p1x, p1y);
    //ctx.quadraticCurveTo(200, 300, p1x, p1y);
    ctx.closePath();
    //ctx.ellipse(200, 200, 80, 100, 0, Math.PI * 0.3, Math.PI * 0.7, true);
    ctx.fill();

    //head
    ctx.beginPath();
    ctx.ellipse(200, 80, 50, 40, 0, 0, Math.PI * 2);
    ctx.fill();
    this.drawEars(ctx);

    //tail
    ctx.beginPath();
    ctx.moveTo(100, 100);
    //ctx.quadraticCurveTo(60, 80, 100, 80);
    //ctx.bezierCurveTo(200, 100, -80, 320, 240, 260);
    ctx.bezierCurveTo(200, 120, -60, 360, 240, 260);
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.strokeStyle = "black";
    ctx.stroke();

    ctx.restore();
  }

  drawEar(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(0, 40);
    ctx.quadraticCurveTo(20, -40, 40, 40);
    ctx.closePath();
    ctx.fill();
  }

  drawEars(ctx: CanvasRenderingContext2D) {
    //left ear
    ctx.save();
    ctx.rotate(-Math.PI / 6);
    ctx.translate(96, 112);
    this.drawEar(ctx);
    ctx.restore();

    //right ear
    ctx.save();
    ctx.rotate(Math.PI / 6);
    ctx.translate(210, -88);
    this.drawEar(ctx);
    ctx.restore();
  }
}

class Tree {
  x: number;
  y: number;
  size: number;
  width: number;
  height: number;

  constructor(x: number, y: number, size: number) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.width = this.size * 40;
    this.height = this.size * 10;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.save();

    ctx.fillStyle = "darkGreen";
    ctx.translate(this.x, this.y);
    ctx.beginPath();
    ctx.ellipse(
      (this.width * 2) / 9,
      this.height / 4,
      (this.width * 3) / 8,
      (this.height * 3) / 4,
      0,
      PI,
      PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.arc((this.width * 4) / 7, this.height / 4, this.width / 3, PI, PI * 2);
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(
      this.width / 2,
      this.height,
      this.width / 3,
      this.height / 2,
      0,
      0,
      PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(
      this.width / 8,
      (this.height * 7) / 8,
      this.width / 3,
      this.height / 2,
      0,
      0,
      PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(
      0,
      this.height / 2,
      this.width / 3,
      this.height / 2,
      0,
      0,
      PI * 2
    );
    ctx.fill();
    ctx.beginPath();
    ctx.ellipse(
      (this.width * 3) / 4,
      this.height / 2,
      this.width / 3,
      (this.height * 4) / 5,
      0,
      0,
      2 * PI
    );
    ctx.fill();
    ctx.fillRect(0, 0, this.width, this.height);

    ctx.restore();
  }
}

export { Star, Cloud1, Cloud2, Kitty, Tree };
