import React, { useEffect, useRef } from 'react';

interface ParticleSystemProps {
  className?: string;
}

interface Particle {
  x: number;
  y: number;
  lastX: number;
  lastY: number;
  vx: number;
  vy: number;
  color: string;
  speed: number;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Initialize particles
    const colors = ['#00ffff', '#00ccff', '#00ffcc']; 
    const particleCount = 12; 
    const gridSize = 40;

    const createParticle = (): Particle => {
      const x = Math.floor(Math.random() * (canvas.width / gridSize)) * gridSize;
      const y = Math.floor(Math.random() * (canvas.height / gridSize)) * gridSize;
      
      const dirs = [
        { vx: 1, vy: 0 },
        { vx: -1, vy: 0 },
        { vx: 0, vy: 1 },
        { vx: 0, vy: -1 }
      ];
      const dir = dirs[Math.floor(Math.random() * dirs.length)];
      
      return {
        x,
        y,
        lastX: x,
        lastY: y,
        vx: dir.vx,
        vy: dir.vy,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: 2
      };
    };

    particlesRef.current = Array.from({ length: particleCount }, createParticle);

    const animate = () => {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.globalCompositeOperation = 'source-over';
      
      particlesRef.current.forEach(p => {
        p.lastX = p.x;
        p.lastY = p.y;


        p.x += p.vx * p.speed;
        p.y += p.vy * p.speed;


        let wrapped = false;
        if (p.x < 0) { p.x = canvas.width; wrapped = true; }
        if (p.x > canvas.width) { p.x = 0; wrapped = true; }
        if (p.y < 0) { p.y = canvas.height; wrapped = true; }
        if (p.y > canvas.height) { p.y = 0; wrapped = true; }


        if (wrapped) {
          p.lastX = p.x;
          p.lastY = p.y;
        }


        const alignedX = Math.abs(p.x % gridSize) < p.speed;
        const alignedY = Math.abs(p.y % gridSize) < p.speed;
        
        if ((alignedX && alignedY) && Math.random() < 0.05) {
          if (p.vx !== 0) {
            p.vx = 0;
            p.vy = Math.random() > 0.5 ? 1 : -1;
          } else {
            p.vy = 0;
            p.vx = Math.random() > 0.5 ? 1 : -1;
          }
          p.x = Math.round(p.x / gridSize) * gridSize;
          p.y = Math.round(p.y / gridSize) * gridSize;
          p.lastX = p.x;
          p.lastY = p.y;
        }


        ctx.beginPath();
        ctx.fillStyle = '#fff';
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fill();


        ctx.beginPath();
        ctx.strokeStyle = p.color;
        ctx.lineWidth = 2;
        ctx.moveTo(p.lastX, p.lastY);
        ctx.lineTo(p.x, p.y);
        ctx.stroke();
        

      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 pointer-events-none z-0 ${className}`}
      style={{ opacity: 0.6 }}
    />
  );
};

export default ParticleSystem;
