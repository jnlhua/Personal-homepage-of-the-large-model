import { useEffect, useRef } from 'react';
import './CursorTrail.css';

export default function CursorTrail() {
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let dpr = window.devicePixelRatio || 1;
    let w = window.innerWidth;
    let h = window.innerHeight;

    const resize = () => {
      dpr = window.devicePixelRatio || 1;
      w = window.innerWidth;
      h = window.innerHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      canvas.style.width = w + 'px';
      canvas.style.height = h + 'px';
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = [
      { r: 168, g: 85, b: 247 },  // purple #a855f7
      { r: 139, g: 92, b: 246 },  // violet #8b5cf6
      { r: 255, g: 255, b: 255 }, // white
      { r: 196, g: 132, b: 252 }, // light purple #c484fc
      { r: 230, g: 230, b: 255 }, // near white purple
    ];

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

      // Spawn 2-3 particles per frame
      for (let i = 0; i < 3; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        particlesRef.current.push({
          x: mouseRef.current.x + (Math.random() - 0.5) * 8,
          y: mouseRef.current.y + (Math.random() - 0.5) * 8,
          vx: (Math.random() - 0.5) * 1.5,
          vy: (Math.random() - 0.5) * 1.5,
          size: Math.random() * 3 + 1.5,
          color,
          alpha: 1,
          decay: 0.015 + Math.random() * 0.02,
          life: 0,
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    let rafId;
    const animate = () => {
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life += 1;
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.02; // slight gravity
        p.alpha -= p.decay;
        p.size *= 0.98;

        if (p.alpha <= 0 || p.size < 0.3) {
          particles.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.globalAlpha = p.alpha;
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 1)`;
        ctx.shadowColor = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0.6)`;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Limit max particles
      if (particles.length > 300) {
        particles.splice(0, particles.length - 300);
      }

      rafId = requestAnimationFrame(animate);
    };
    rafId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="cursor-trail-canvas" />;
}
