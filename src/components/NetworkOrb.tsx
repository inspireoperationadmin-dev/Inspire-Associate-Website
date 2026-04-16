import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  angle: number;
  radius: number;
  orbitRadius: number;
  speed: number;
  baseRadius: number;
  pulseSpeed: number;
}

export function NetworkOrb() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;
    let centerX = 0;
    let centerY = 0;
    let mainOrbRadius = 0;
    let nodes: Node[] = [];

    const setup = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      centerX = rect.width / 2;
      centerY = rect.height / 2;
      mainOrbRadius = Math.min(rect.width, rect.height) * 0.25;

      const numNodes = 12;
      nodes = Array.from({ length: numNodes }).map(() => {
        const orbitRadius = mainOrbRadius + 40 + Math.random() * 120;
        return {
          x: 0,
          y: 0,
          angle: Math.random() * Math.PI * 2,
          radius: 3 + Math.random() * 4,
          baseRadius: 3 + Math.random() * 4,
          orbitRadius,
          speed: (Math.random() * 0.005 + 0.002) * (Math.random() > 0.5 ? 1 : -1),
          pulseSpeed: Math.random() * 0.05 + 0.02,
        };
      });
    };

    setup();

    const handleResize = () => {
      setup();
    };

    window.addEventListener("resize", handleResize);

    const draw = () => {
      time += 1;
      const rect = canvas.getBoundingClientRect();
      ctx.clearRect(0, 0, rect.width, rect.height);

      // Draw Main Orb (Glow + Core)
      const pulse = Math.sin(time * 0.02) * 10;
      const currentOrbRadius = mainOrbRadius + pulse;

      const mainGradient = ctx.createRadialGradient(
        centerX,
        centerY,
        0,
        centerX,
        centerY,
        currentOrbRadius * 2
      );
      mainGradient.addColorStop(0, "rgba(217, 70, 239, 0.9)"); // Bright magenta core
      mainGradient.addColorStop(0.2, "rgba(139, 92, 246, 0.7)"); // Purple mid
      mainGradient.addColorStop(0.5, "rgba(124, 58, 237, 0.2)"); // Violet outer
      mainGradient.addColorStop(1, "rgba(124, 58, 237, 0)"); // Transparent edge

      ctx.beginPath();
      ctx.arc(centerX, centerY, currentOrbRadius * 2, 0, Math.PI * 2);
      ctx.fillStyle = mainGradient;
      ctx.fill();

      // Update and draw nodes
      nodes.forEach((node) => {
        node.angle += node.speed;
        
        // Wobble orbit radius slightly
        const currentOrbit = node.orbitRadius + Math.sin(time * node.pulseSpeed) * 10;
        
        node.x = centerX + Math.cos(node.angle) * currentOrbit;
        node.y = centerY + Math.sin(node.angle) * currentOrbit;
        node.radius = node.baseRadius + Math.sin(time * node.pulseSpeed * 2) * 2;

        // Draw connections to center
        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(node.x, node.y);
        ctx.strokeStyle = `rgba(139, 92, 246, ${0.15 + Math.sin(time * 0.05) * 0.1})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, Math.max(0.1, node.radius), 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255, 255, 255, 0.9)";
        ctx.shadowColor = "#D946EF";
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // Reset
      });

      // Draw connections between nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            const alpha = (1 - dist / 120) * 0.3;
            ctx.strokeStyle = `rgba(217, 70, 239, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-[400px] md:h-[600px] relative flex items-center justify-center pointer-events-none">
      <canvas
        ref={canvasRef}
        className="w-full h-full max-w-[600px] max-h-[600px]"
      />
    </div>
  );
}
