import { useEffect, useRef } from "react";

export function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const draw = () => {
      time += 0.002;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep dark background
      ctx.fillStyle = "#0a0314";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Function to draw flowing bezier waves
      const drawWave = (
        yOffset: number,
        amplitude: number,
        frequency: number,
        color: string,
        speed: number,
        opacity: number
      ) => {
        ctx.beginPath();
        ctx.moveTo(0, canvas.height);
        
        for (let x = 0; x <= canvas.width; x += 20) {
          const y =
            yOffset +
            Math.sin(x * frequency + time * speed) * amplitude +
            Math.cos(x * frequency * 0.5 - time * speed * 1.5) * (amplitude * 0.5);
          ctx.lineTo(x, y);
        }
        
        ctx.lineTo(canvas.width, canvas.height);
        ctx.fillStyle = color;
        ctx.globalAlpha = opacity;
        ctx.fill();
        ctx.globalAlpha = 1.0;
      };

      // Layered mesh gradient waves
      drawWave(canvas.height * 0.5, 150, 0.002, "#8B5CF6", 1.5, 0.08); // Purple
      drawWave(canvas.height * 0.6, 200, 0.0015, "#D946EF", 2.0, 0.06); // Magenta
      drawWave(canvas.height * 0.4, 100, 0.003, "#7C3AED", 1.0, 0.05); // Violet
      drawWave(canvas.height * 0.7, 120, 0.0025, "#6D28D9", 2.5, 0.1); // Deep Purple

      // Large ambient blurred orbs in background
      const drawOrb = (x: number, y: number, r: number, color: string) => {
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, r);
        gradient.addColorStop(0, color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.globalAlpha = 0.4;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1.0;
      };

      const orb1X = canvas.width * 0.2 + Math.sin(time * 0.5) * 100;
      const orb1Y = canvas.height * 0.3 + Math.cos(time * 0.3) * 100;
      drawOrb(orb1X, orb1Y, 600, "rgba(139, 92, 246, 0.15)");

      const orb2X = canvas.width * 0.8 + Math.cos(time * 0.4) * 150;
      const orb2Y = canvas.height * 0.6 + Math.sin(time * 0.6) * 100;
      drawOrb(orb2X, orb2Y, 700, "rgba(217, 70, 239, 0.12)");

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none bg-noise">
      <canvas
        ref={canvasRef}
        className="block w-full h-full"
        style={{ filter: "blur(40px)" }} // Extra blur for that smooth mesh gradient look
      />
    </div>
  );
}
