import React, { useRef, useEffect } from "react";

const TrailEffect = () => {
  const canvasRef = useRef(null);
  const points = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const addPoint = (x, y) => {
      points.current.push({ x, y, alpha: 1 });
    };

    const fadeAndDraw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < points.current.length; i++) {
        const p = points.current[i];
        ctx.beginPath();
        ctx.arc(p.x, p.y, 3, 0, 2 * Math.PI);
        ctx.fillStyle = `rgba(0, 255, 255, ${p.alpha})`;
        ctx.shadowBlur = 20;
        ctx.shadowColor = "#00ffff";
        ctx.fill();
        p.alpha -= 0.02; 
      }
      points.current = points.current.filter((p) => p.alpha > 0);
      requestAnimationFrame(fadeAndDraw);
    };

    fadeAndDraw();

    const moveHandler = (e) => {
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      const y = e.touches ? e.touches[0].clientY : e.clientY;
      addPoint(x, y);
    };

    window.addEventListener("mousemove", moveHandler);
    window.addEventListener("touchmove", moveHandler);

    return () => {
      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("touchmove", moveHandler);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="trail-canvas"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 999,
      }}
    ></canvas>
  );
};

export default TrailEffect;
