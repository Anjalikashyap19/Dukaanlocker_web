import React from 'react';
import { useOutletContext } from 'react-router-dom';
import { ArrowRight, Play, ShieldCheck, Lock, Globe } from 'lucide-react';

export default function Hero({ onComingSoon }) {
  const { theme } = useOutletContext() ?? { theme: 'light' };
  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      className="relative isolate min-h-[min(100svh,860px)] overflow-hidden pt-28 pb-16 sm:pt-32 lg:pt-36 lg:pb-20"
    >
      {/* Full-width animated SVG background — swaps with theme */}
      <div
        className={`pointer-events-none absolute inset-0 z-0 overflow-hidden ${
          isDark ? 'bg-[#0c1220]' : 'bg-[#eef5ff]'
        }`}
        aria-hidden="true"
      >
        <object
          key={theme}
          type="image/svg+xml"
          data={isDark ? '/secure-docs-locker.svg' : '/secure-docs-locker-light.svg'}
          className="absolute inset-0 h-full w-full"
          tabIndex={-1}
        >
          Secure document locker animation
        </object>

        {/* Left readability wash */}
        <div
          className={`absolute inset-0 lg:w-[58%] ${
            isDark
              ? 'bg-gradient-to-r from-[#0c1220] via-[#0c1220]/80 to-transparent sm:via-[#0c1220]/60 lg:via-[#0c1220]/70'
              : 'bg-gradient-to-r from-[#eef5ff] via-[#eef5ff]/85 to-transparent sm:via-[#eef5ff]/70 lg:via-[#eef5ff]/65'
          }`}
        />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Foreground copy */}
      <div className="relative z-10 mx-auto flex min-h-[inherit] max-w-7xl items-center px-4">
        <div className="max-w-xl lg:max-w-2xl">
          <div
            className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-medium backdrop-blur ${
              isDark
                ? 'border-white/15 bg-white/10 text-sky-100'
                : 'border-border bg-card/80 text-ink-soft shadow-soft'
            }`}
          >
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
            </span>
            India's first AI compliance platform for small businesses
          </div>

          <h1
            className={`mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl ${
              isDark ? 'text-white' : 'text-ink'
            }`}
          >
            One Platform for{' '}
            <span
              className={
                isDark
                  ? 'bg-gradient-to-r from-sky-300 via-cyan-200 to-violet-300 bg-clip-text text-transparent'
                  : 'gradient-text'
              }
            >
              Business Documents,
            </span>{' '}
            Compliance & Renewals
          </h1>

          <p className={`mt-6 max-w-xl text-lg ${isDark ? 'text-slate-300' : 'text-ink-soft'}`}>
            Helping India's{' '}
            <span className={`font-semibold ${isDark ? 'text-white' : 'text-ink'}`}>6.4 Crore+</span> small
            businesses manage licenses, registrations, renewals, and compliance from a single, secure platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() =>
                onComingSoon?.({
                  title: 'Get Started — Coming Soon',
                  description:
                    'We are actively building the DukaanLocker onboarding experience and it will be available in a future release.',
                })
              }
              style={{ background: 'var(--gradient-brand)' }}
              className={`group inline-flex cursor-pointer items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-white transition hover:opacity-95 ${
                isDark
                  ? 'shadow-glow ring-1 ring-white/20'
                  : 'shadow-[0_10px_28px_-8px_rgba(10,84,221,0.55)] ring-1 ring-white/80'
              }`}
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() =>
                onComingSoon?.({
                  title: 'Product Demo — Coming Soon',
                  description:
                    'An interactive product demo is on the way. Join the waitlist and we will notify you the moment it is live.',
                })
              }
              className={`inline-flex cursor-pointer items-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold transition ${
                isDark
                  ? 'border-white/20 bg-white/10 text-white backdrop-blur hover:bg-white/15'
                  : 'border-border/80 bg-white/95 text-ink shadow-[0_8px_24px_-10px_rgba(15,23,42,0.2)] backdrop-blur hover:bg-white'
              }`}
            >
              <Play className={`h-4 w-4 ${isDark ? 'fill-sky-300 text-sky-300' : 'fill-brand text-brand'}`} />
              Watch Demo
            </button>
          </div>

          <div className={`mt-10 flex flex-wrap items-center gap-6 text-xs ${isDark ? 'text-slate-300' : 'text-ink-soft'}`}>
            <div className="flex items-center gap-2">
              <ShieldCheck className={`h-4 w-4 ${isDark ? 'text-sky-300' : 'text-brand'}`} />
              ISO 27001 grade security
            </div>
            <div className="flex items-center gap-2">
              <Lock className={`h-4 w-4 ${isDark ? 'text-sky-300' : 'text-brand'}`} />
              Bank-level encryption
            </div>
            <div className="flex items-center gap-2">
              <Globe className={`h-4 w-4 ${isDark ? 'text-sky-300' : 'text-brand'}`} />
              Available in 12 languages
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
