import { useEffect, useRef } from 'react';

/**
 * "Developer Constellation" animated background.
 *
 * Layers (all behind content, pointer-events: none, z-index: -1):
 *   1. Base        — solid theme background (body / .bg-anim)
 *   2. Grid        — faint technical grid (pure CSS, subtle scroll parallax)
 *   3. Nodes       — a restrained set of drifting glowing points (canvas)
 *   4. Connections — thin lines between nearby nodes that fade with distance
 *   5. Glow        — slowly drifting, softly breathing radial glows (CSS)
 *
 * The canvas is isolated in this component, runs a single requestAnimationFrame
 * loop, and never updates React state. Honors prefers-reduced-motion (static
 * frame only) and downscales on small screens / coarse pointers.
 */
const ACCENT_RGB = '94, 234, 212';

function makeNodes(count, width, height, speed) {
  const nodes = [];
  for (let i = 0; i < count; i++) {
    nodes.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * speed,
      vy: (Math.random() - 0.5) * speed,
      r: 1 + Math.random() * 1.6,
      a: 0.22 + Math.random() * 0.4,
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: 0.3 + Math.random() * 0.5,
    });
  }
  return nodes;
}

export default function AnimatedBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return undefined;
    const ctx = canvas.getContext('2d');
    if (!ctx) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer: fine)').matches;

    let raf = 0;
    let nodes = [];
    let width = 0;
    let height = 0;
    let linkDist = 130;
    let lastParallax = null;
    const pointer = { x: -9999, y: -9999, active: false };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const small = width < 768;
      linkDist = small ? 100 : 130;
      const count = small ? 10 : 26;
      const speed = small ? 0.09 : 0.16;
      nodes = makeNodes(count, width, height, speed);
    };

    const drawField = (t, parallax) => {
      ctx.clearRect(0, 0, width, height);
      ctx.save();
      ctx.translate(0, parallax || 0);

      // gentle pull away from the cursor (subtle, desktop only)
      if (pointer.active) {
        for (const n of nodes) {
          const dx = n.x - pointer.x;
          const dy = n.y - pointer.y;
          const d = Math.hypot(dx, dy);
          if (d < 170 && d > 0.01) {
            const force = (1 - d / 170) * 0.25;
            n.x += (dx / d) * force;
            n.y += (dy / d) * force;
          }
        }
      }

      // connections — faint lines between nearby nodes
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d >= linkDist) continue;
          let alpha = (1 - d / linkDist) * 0.13;
          if (pointer.active) {
            const mid = Math.hypot((a.x + b.x) / 2 - pointer.x, (a.y + b.y) / 2 - pointer.y);
            if (mid < 150) alpha += (1 - mid / 150) * 0.08;
          }
          ctx.strokeStyle = `rgba(${ACCENT_RGB}, ${alpha})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // nodes — small breathing dots with a faint halo
      for (const n of nodes) {
        const breathe = reduceMotion
          ? n.a * 0.8
          : n.a * (0.72 + 0.28 * Math.sin(t * n.pulseSpeed + n.pulse));
        ctx.fillStyle = `rgba(${ACCENT_RGB}, ${breathe * 0.14})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 3, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${ACCENT_RGB}, ${breathe})`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      // soft glow following the cursor (desktop only)
      if (pointer.active) {
        const glow = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 240);
        glow.addColorStop(0, `rgba(${ACCENT_RGB}, 0.05)`);
        glow.addColorStop(1, `rgba(${ACCENT_RGB}, 0)`);
        ctx.fillStyle = glow;
        ctx.fillRect(pointer.x - 240, pointer.y - 240, 480, 480);
      }

      ctx.restore();
    };

    const tick = () => {
      const t = performance.now() / 1000;
      const parallax = Math.max(-26, Math.min(26, window.scrollY * 0.045));
      // very subtle grid parallax via CSS variable (no repaint storms)
      if (lastParallax !== parallax) {
        lastParallax = parallax;
        document.documentElement.style.setProperty('--bg-parallax', `${parallax.toFixed(1)}px`);
      }
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < -30) n.x = width + 30;
        if (n.x > width + 30) n.x = -30;
        if (n.y < -30) n.y = height + 30;
        if (n.y > height + 30) n.y = -30;
      }
      drawField(t, parallax);
      raf = window.requestAnimationFrame(tick);
    };

    const onPointerMove = (event) => {
      pointer.x = event.clientX;
      pointer.y = event.clientY;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
      pointer.active = false;
    };

    resize();

    if (reduceMotion) {
      // static, subtle network — no animation, no cursor, no parallax
      document.documentElement.style.setProperty('--bg-parallax', '0px');
      drawField(0, 0);
    } else {
      tick();
      if (finePointer) {
        window.addEventListener('pointermove', onPointerMove, { passive: true });
        window.addEventListener('pointerleave', onPointerLeave);
      }
    }

    const onResize = () => {
      resize();
      if (reduceMotion) drawField(0, 0);
    };
    window.addEventListener('resize', onResize);

    const onVisibility = () => {
      if (reduceMotion) return;
      if (document.hidden) {
        window.cancelAnimationFrame(raf);
        raf = 0;
      } else if (!raf) {
        raf = window.requestAnimationFrame(tick);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      document.removeEventListener('visibilitychange', onVisibility);
    };
  }, []);

  return (
    <div aria-hidden="true" className="bg-anim">
      <div className="bg-grid" />
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <div className="bg-blob bg-blob-3" />
      <canvas ref={canvasRef} className="bg-canvas" />
    </div>
  );
}