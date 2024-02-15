import { colors } from "@/utils/colors";
import { CANVAS_WIDTH, CANVAS_HEIGHT } from ".";
import { Kitty, Star, Tree } from "../canvas";

export function renderGradientBg(
  context: CanvasRenderingContext2D,
  bgMode: "light" | "dark"
): void {
  context.fillStyle =
    bgMode !== "light"
      ? createDayLightGradient(context)
      : createNightSkyGradient(context);
  context.beginPath();
  context.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
}

export function renderStaticEls(context: CanvasRenderingContext2D) {
  //Draw star
  const starObjects: Array<Star> = [];
  for (let i: number = 0; i < 50; i++) {
    const x = Math.random() * CANVAS_WIDTH;
    const y = Math.random() * (CANVAS_HEIGHT - 200);
    const star = new Star(x, y);
    star.draw(context);
    starObjects.push(star);
  }
  starObjects.forEach((star) => star.draw(context));
  //Trees
  const tree1 = new Tree(CANVAS_WIDTH - 200, CANVAS_HEIGHT - 200, 9);
  const tree2 = new Tree(CANVAS_WIDTH - 500, CANVAS_HEIGHT - 120, 8);
  const tree3 = new Tree(-50, CANVAS_HEIGHT - 160, 8);
  const tree4 = new Tree(CANVAS_WIDTH / 3, CANVAS_HEIGHT - 60, 10);
  tree1.draw(context);
  tree2.draw(context);
  tree3.draw(context);
  tree4.draw(context);

  //Wall
  context.fillStyle = "gray";
  context.beginPath();
  context.fillRect(0, CANVAS_HEIGHT - 80, CANVAS_WIDTH, 80);
  context.closePath();

  //Kitty
  const kitty = new Kitty(80, CANVAS_HEIGHT - 400, 1.2, 1.2);
  const smallKitty = new Kitty(640, CANVAS_HEIGHT - 320, -1, 0.9);
  kitty.draw(context);
  smallKitty.draw(context);
}

function createNightSkyGradient(ctx: CanvasRenderingContext2D): CanvasGradient {
  const gradient = ctx.createLinearGradient(
    CANVAS_WIDTH / 2,
    0,
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT
  );
  gradient.addColorStop(0, colors.navyBlue);
  gradient.addColorStop(0.3, colors.cornFlowerBlue);
  gradient.addColorStop(0.5, colors.royalBlue);
  gradient.addColorStop(0.75, colors.darkBlue);
  gradient.addColorStop(0.85, colors.mediumBlue);
  gradient.addColorStop(1, colors.lightBlue);
  return gradient;
}

function createDayLightGradient(ctx: CanvasRenderingContext2D): CanvasGradient {
  const gradient = ctx.createLinearGradient(
    CANVAS_WIDTH / 2,
    0,
    CANVAS_WIDTH / 2,
    CANVAS_HEIGHT
  );
  gradient.addColorStop(0, colors.blueMedium4);
  gradient.addColorStop(0.3, colors.blueMedium3);
  gradient.addColorStop(0.4, colors.blueMedium2);
  gradient.addColorStop(0.55, colors.blueMedium1);
  gradient.addColorStop(0.7, colors.blueLight);
  gradient.addColorStop(1, colors.lightYellow);
  return gradient;
}
