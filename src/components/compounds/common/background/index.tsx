"use client";
import { FC, useLayoutEffect } from "react";
import { Cloud1, Cloud2 } from "../canvas";
import { renderGradientBg, renderStaticEls } from "./staticLayer";

type Prop = {
  mode?: "light" | "dark";
};

export const CANVAS_HEIGHT =
  typeof window !== "undefined" ? window.innerHeight : 0;
export const CANVAS_WIDTH =
  typeof window !== "undefined" ? window.innerWidth : 0;

const Background: FC<Prop> = ({ mode = "dark" }) => {
  useLayoutEffect(() => {
    let cloudAnimation: NodeJS.Timer;
    const canvas0 = document.getElementById("layer0") as HTMLCanvasElement;
    const canvas1 = document.getElementById("layer1") as HTMLCanvasElement;
    const canvas2 = document.getElementById("layer2") as HTMLCanvasElement;
    const canvas3 = document.getElementById("layer3") as HTMLCanvasElement;
    adjustCanvasSize(canvas0);
    adjustCanvasSize(canvas1);
    adjustCanvasSize(canvas2);
    adjustCanvasSize(canvas3);
    const ctx0 = canvas0.getContext("2d");
    const ctx1 = canvas1.getContext("2d");
    const ctx2 = canvas2.getContext("2d");
    const ctx3 = canvas3.getContext("2d");
    document.addEventListener("resize", () => {
      adjustCanvasSize(canvas0);
      adjustCanvasSize(canvas1);
      adjustCanvasSize(canvas2);
      adjustCanvasSize(canvas3);
    });
    ctx0 && renderGradientBg(ctx0, mode);
    if (ctx1) {
      //Draw Cloud
      const cloudObjects: Array<Cloud1 | Cloud2> = [];
      for (let i: number = 0; i < 8; i++) {
        const x = Math.random() * CANVAS_WIDTH;
        const y = Math.random() * (CANVAS_HEIGHT - 300) + 50;
        const size = Math.floor(Math.random() * 3) + 3;
        const cloud = i % 2 ? new Cloud2(x, y, size) : new Cloud1(x, y, size);
        cloudObjects.push(cloud);
      }
      cloudAnimation = setInterval(() => {
        ctx1.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        cloudObjects.forEach((cloud) => {
          if (ctx1) {
            cloud.update();
            cloud.draw(ctx1);
          }
        });
      }, 100);
    }
    if (ctx2) {
      renderStaticEls(ctx2);
    }

    return () => {
      window.removeEventListener("resize", () => {
        adjustCanvasSize(canvas0);
        adjustCanvasSize(canvas1);
        adjustCanvasSize(canvas2);
        adjustCanvasSize(canvas3);
      });
      clearInterval(cloudAnimation);
    };
  }, [mode]);

  return (
    <div className={`absolute top-0 left-0 h-full w-full z-[-1]`}>
      {/* gradient background */}
      <canvas
        id='layer0'
        className='bg-transparent absolute top-0 left-0'
      ></canvas>
      {/* animated clouds */}
      <canvas
        id='layer1'
        className='bg-transparent absolute top-0 left-0 opacity-90'
      ></canvas>
      {/* animated star */}
      <canvas
        id='layer3'
        className='bg-transparent absolute top-0 left-0 opacity-90'
      ></canvas>
      {/* static elements (trees, kitty, wall) */}
      <canvas
        id='layer2'
        className='bg-transparent absolute top-0 left-0'
      ></canvas>
    </div>
  );
};

export default Background;

function adjustCanvasSize(canvas: HTMLCanvasElement) {
  canvas.height = CANVAS_HEIGHT;
  canvas.width = CANVAS_WIDTH;
  return;
}
