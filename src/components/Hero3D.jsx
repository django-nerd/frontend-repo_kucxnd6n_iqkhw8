import { useEffect, useMemo, useState } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero3D() {
  const prefersReducedMotion = useReducedMotion();
  const [canRender3D, setCanRender3D] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setCanRender3D(false);
      return;
    }
    const webglOk = (() => {
      try {
        const canvas = document.createElement('canvas');
        return !!(window.WebGLRenderingContext &&
          (canvas.getContext('webgl') || canvas.getContext('experimental-webgl')));
      } catch {
        return false;
      }
    })();
    setCanRender3D(webglOk);
  }, [prefersReducedMotion]);

  const headlineVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.35 } },
  }), []);

  return (
    <section className="relative h-[70vh] sm:h-[80vh] w-full overflow-hidden">
      {canRender3D ? (
        <div className="absolute inset-0">
          <Spline
            scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode"
            aria-label="Futuristic 3D hero scene"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
      ) : (
        <div className="absolute inset-0">
          <div className="h-full w-full bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-sky-600/30 via-purple-600/20 to-transparent" />
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/60 dark:via-black/30 dark:to-black/80" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-4">
        <motion.div
          initial="hidden"
          animate="show"
          variants={headlineVariants}
          className="max-w-2xl"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-[0_1px_8px_rgba(0,0,0,0.35)]">
            Munta Sai Karthik
          </h1>
          <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-200">
            Creative Web & Game Developer — crafting premium, high-performance experiences blending WebGL, motion, and engineering.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="pointer-events-auto inline-flex items-center rounded-full bg-white/90 text-gray-900 px-4 py-2 text-sm font-medium backdrop-blur hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="pointer-events-auto inline-flex items-center rounded-full bg-gradient-to-r from-sky-500 to-purple-600 text-white px-4 py-2 text-sm font-medium shadow-lg shadow-purple-500/20 hover:shadow-purple-500/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500"
            >
              Hire Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
