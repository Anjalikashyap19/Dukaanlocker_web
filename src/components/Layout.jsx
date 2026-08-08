import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import { ComingSoonProvider } from '../context/ComingSoonContext';

export default function Layout() {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);
  const isAnimating = useRef(false);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // ── Lenis Smooth Scroll ──────────────────────────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  // ── Scroll to top on route change ────────────────────────────────────
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  // ── Apply theme class ────────────────────────────────────────────────
  const applyThemeClass = useCallback((newTheme) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  }, []);

  useEffect(() => {
    applyThemeClass(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Premium Circular Reveal Theme Toggle ─────────────────────────────
  const toggleTheme = useCallback(
    (e) => {
      if (isAnimating.current) return;

      const newTheme = theme === 'light' ? 'dark' : 'light';
      const x = e.clientX;
      const y = e.clientY;
      const endRadius = Math.hypot(
        Math.max(x, window.innerWidth - x),
        Math.max(y, window.innerHeight - y)
      );

      if (!document.startViewTransition) {
        setTheme(newTheme);
        applyThemeClass(newTheme);
        return;
      }

      isAnimating.current = true;

      const transition = document.startViewTransition(() => {
        setTheme(newTheme);
        applyThemeClass(newTheme);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${endRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 700,
            easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });

      transition.finished.then(() => {
        isAnimating.current = false;
      });
    },
    [theme, applyThemeClass]
  );

  return (
    <ComingSoonProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main key={pathname} className="animate-page-in">
          <Outlet context={{ theme }} />
        </main>
        <Footer />
      </div>
    </ComingSoonProvider>
  );
}
