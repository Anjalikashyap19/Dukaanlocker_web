import { useState, useEffect, useRef, useCallback } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import Navbar from './Navbar';
import Footer from './Footer';
import { ComingSoonProvider } from '../context/ComingSoonContext';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Layout() {
  const { pathname } = useLocation();
  const lenisRef = useRef(null);
  const isAnimating = useRef(false);

  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('theme');
    if (saved) return saved;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  // ── Lenis Smooth Scroll + GSAP Integration ──────────────────────────
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;
    window.__lenis = lenis;

    lenis.on('scroll', ScrollTrigger.update);

    const gsapTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(gsapTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      window.__lenis = null;
      gsap.ticker.remove(gsapTicker);
      lenis.destroy();
    };
  }, []);

  // ── Scroll to top on route change & initialize reveal animations ───
  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }

    // Safeguard: Ensure all reveal elements become visible smoothly
    const timer = setTimeout(() => {
      const targets = document.querySelectorAll('.reveal:not(.is-visible), .reveal-stagger:not(.is-visible)');
      if (!targets.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: '0px 0px 100px 0px' }
      );

      targets.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight + 200 && rect.bottom > -100) {
          el.classList.add('is-visible');
        } else {
          observer.observe(el);
        }
      });
    }, 50);

    return () => clearTimeout(timer);
  }, [pathname]);

  // ── Apply theme class ────────────────────────────────────────────────
  const applyThemeClass = useCallback((newTheme) => {
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', newTheme);
  }, []);

  useEffect(() => {
    applyThemeClass(theme);
  }, [theme, applyThemeClass]);

  // ── Premium Circular Reveal Theme Toggle ─────────────────────────────
  const toggleTheme = useCallback(
    (e) => {
      if (isAnimating.current) return;

      const newTheme = theme === 'light' ? 'dark' : 'light';
      const x = e?.clientX ?? (window.innerWidth / 2);
      const y = e?.clientY ?? (window.innerHeight / 2);
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
      const unlockSafety = setTimeout(() => {
        isAnimating.current = false;
      }, 850);

      try {
        const transition = document.startViewTransition(() => {
          setTheme(newTheme);
          applyThemeClass(newTheme);
        });

        transition.ready
          .then(() => {
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
          })
          .catch(() => {});

        transition.finished
          .finally(() => {
            clearTimeout(unlockSafety);
            isAnimating.current = false;
          });
      } catch {
        clearTimeout(unlockSafety);
        setTheme(newTheme);
        applyThemeClass(newTheme);
        isAnimating.current = false;
      }
    },
    [theme, applyThemeClass]
  );

  return (
    <ComingSoonProvider>
      <div className="min-h-screen bg-background text-foreground">
        <a href="#main-content" className="skip-to-content">
          Skip to content
        </a>
        <Navbar theme={theme} toggleTheme={toggleTheme} />
        <main id="main-content" key={pathname} className="animate-page-in">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ComingSoonProvider>
  );
}
