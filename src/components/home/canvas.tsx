"use client";

import { useEffect, useRef } from "react";

export default function Canvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  // const draw = (ctx: CanvasRenderingContext2D) => {
  //   ctx.fillStyle = "#000000";
  //   // ctx.beginPath();
  //   // ctx.arc(50, 100, 20, 0, 2 * Math.PI);
  //   // ctx.fill();
  // };

  // useEffect(() => {
  //   const canvas = ref.current;
  //   if (canvas) {
  //     // setting height
  //     canvas.height = window.innerHeight;
  //     canvas.width = window.innerWidth;

  //     const context = canvas.getContext("2d");
  //     draw(context!);
  //   }
  // }, [draw]);

  return <canvas ref={ref} />;
}
