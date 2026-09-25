import React, { useEffect, useRef } from 'react';
import {
  ArrowRight, Play, ShieldCheck, Lock, Globe, BellRing,
  FileCheck, Check, Clock, AlertTriangle
} from 'lucide-react';
import { useMagnetic, useScrollRevealAll } from '../hooks/usePremium';

export default function Hero({ documents, score, renewDocument, onComingSoon }) {
  const activeCount = documents.filter((d) => d.status === 'Active').length;
  const renewCount  = documents.filter((d) => d.status === 'Renew Soon').length;
  const actionCount = documents.filter((d) => d.status === 'Action Needed').length;

  const ctaRef      = useMagnetic(0.28);
  const sectionRef  = useScrollRevealAll();

  // Floating stats mouse-parallax
  const floatRefs = [useRef(null), useRef(null), useRef(null)];

  useEffect(() => {
    const onMouseMove = (e) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;

      floatRefs.forEach((ref, i) => {
        if (!ref.current) return;
        const depth = (i + 1) * 6;
        ref.current.style.transform = `translate(${dx * depth}px, ${dy * depth}px)`;
      });
    };

    // Respect prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!mq.matches) {
      window.addEventListener('mousemove', onMouseMove, { passive: true });
    }
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  const handleWatchDemo = () => {
    const intro = document.getElementById('intro-video');
    if (intro) {
      intro.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative overflow-hidden pt-32 pb-20 lg:pt-40"
      aria-label="Hero"
    >
      {/* Full-screen SVG background (Light & Dark) */}
      <img
        src="/secure-docs-locker-light.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover dark:hidden block"
      />
      <img
        src="/secure-docs-locker.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full object-cover hidden dark:block"
      />
      {/* Radial glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[32rem] w-[60rem] -translate-x-1/2 rounded-full opacity-30 dark:opacity-20"
        style={{ background: 'radial-gradient(ellipse at center, rgba(10,84,221,0.25), transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">

        {/* ── Left Content ── */}
        <div>
          <div className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-ink-soft backdrop-blur">
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
            </span>
            India's first AI compliance platform for small businesses
          </div>

          <h1 className="reveal mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl"
              style={{ '--reveal-delay': '0.05s' }}>
            One Platform for{' '}
            <span className="gradient-text">Business Documents,</span>{' '}
            Compliance &amp; Renewals
          </h1>

          <p className="reveal mt-6 max-w-xl text-lg text-ink-soft" style={{ '--reveal-delay': '0.1s' }}>
            Helping India's{' '}
            <span className="font-semibold text-ink">6.4 Crore+</span>{' '}
            small businesses manage licenses, registrations, renewals, and compliance from a single, secure platform.
          </p>

          {/* CTA Buttons */}
          <div className="reveal mt-8 flex flex-wrap items-center gap-3" style={{ '--reveal-delay': '0.15s' }}>
            <button
              ref={ctaRef}
              onClick={() =>
                onComingSoon?.({
                  title: 'Get Started — Coming Soon',
                  description: 'We are actively building the DukaanLocker onboarding experience and it will be available in a future release.',
                })
              }
              className="magnetic group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 cursor-pointer"
              style={{ background: 'var(--gradient-brand)' }}
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>

            <button
              onClick={handleWatchDemo}
              className="group inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3.5 text-sm font-semibold text-ink shadow-soft transition hover:bg-secondary hover:border-brand/30 cursor-pointer"
            >
              <Play className="h-4 w-4 text-brand fill-brand transition-transform group-hover:scale-110" />
              Watch Demo
            </button>
          </div>

          {/* Trust badges */}
          <div className="reveal mt-10 flex flex-wrap items-center gap-6 text-xs text-ink-soft" style={{ '--reveal-delay': '0.2s' }}>
            <div className="flex items-center gap-2 transition hover:text-ink">
              <ShieldCheck className="h-4 w-4 text-brand" />
              ISO 27001 grade security
            </div>
            <div className="flex items-center gap-2 transition hover:text-ink">
              <Lock className="h-4 w-4 text-brand" />
              Bank-level encryption
            </div>
            <div className="flex items-center gap-2 transition hover:text-ink">
              <Globe className="h-4 w-4 text-brand" />
              Available in 12 languages
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
