import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches IntersectionObserver to a ref and
 * adds 'is-visible' class when the element enters the viewport.
 *
 * Usage:
 *   const ref = useScrollReveal();
 *   <div ref={ref} className="reveal">...</div>
 *   <div ref={ref} className="reveal-stagger">...</div>
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      el.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -60px 0px',
        ...options,
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * useScrollRevealAll — given a containerRef, observes all children
 * with .reveal or .reveal-stagger class.
 *
 * Usage:
 *   const containerRef = useScrollRevealAll();
 *   <section ref={containerRef}>
 *     <div className="reveal">...</div>
 *     <div className="reveal-stagger">...</div>
 *   </section>
 */
export function useScrollRevealAll(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const targets = container.querySelectorAll('.reveal, .reveal-stagger');
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
      {
        threshold: 0.05,
        rootMargin: '0px 0px -20px 0px',
        ...options,
      }
    );

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('is-visible');
      } else {
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, []);

  return ref;
}

/**
 * useCountUp — animates a number from 0 to `end` when element enters viewport.
 *
 * Usage:
 *   const { ref, value } = useCountUp(6400000, { suffix: 'Cr+', duration: 1800 });
 *   <span ref={ref}>{value}</span>
 */
export function useCountUp(end, { duration = 1500, suffix = '', prefix = '', decimals = 0 } = {}) {
  const ref = useRef(null);
  const displayRef = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.unobserve(el);

        const startTime = performance.now();
        const endValue = typeof end === 'number' ? end : parseFloat(end);

        const tick = (now) => {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const currentVal = eased * endValue;
          const formatted = decimals > 0
            ? currentVal.toFixed(decimals)
            : Math.round(currentVal).toLocaleString('en-IN');

          if (displayRef.current) {
            displayRef.current.textContent = `${prefix}${formatted}${suffix}`;
          }

          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, suffix, prefix, decimals]);

  return { ref, displayRef };
}

/**
 * useTiltCard — adds mouse-follow perspective tilt to a card element.
 *
 * Usage:
 *   const ref = useTiltCard();
 *   <div ref={ref} className="tilt-card">...</div>
 */
export function useTiltCard(intensity = 8) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect prefers-reduced-motion
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) / (rect.width / 2);
      const dy = (e.clientY - cy) / (rect.height / 2);

      el.style.transform = `perspective(800px) rotateX(${-dy * intensity}deg) rotateY(${dx * intensity}deg) translateZ(8px)`;
    };

    const onMouseLeave = () => {
      el.style.transform = '';
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [intensity]);

  return ref;
}

/**
 * useMagnetic — button follows cursor slightly within its bounds.
 *
 * Usage:
 *   const ref = useMagnetic();
 *   <button ref={ref} className="magnetic">CTA</button>
 */
export function useMagnetic(strength = 0.35) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion) return;

    const onMouseMove = (e) => {
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = (e.clientX - cx) * strength;
      const dy = (e.clientY - cy) * strength;
      el.style.transform = `translate(${dx}px, ${dy}px)`;
    };

    const onMouseLeave = () => {
      el.style.transform = '';
    };

    el.addEventListener('mousemove', onMouseMove);
    el.addEventListener('mouseleave', onMouseLeave);

    return () => {
      el.removeEventListener('mousemove', onMouseMove);
      el.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [strength]);

  return ref;
}
