import { ArrowRight, Play, ShieldCheck, Lock, BellRing } from 'lucide-react';
import { useComingSoon } from '../context/ComingSoonContext';

export default function HomePlatformSection({ onComingSoon }) {
  const openComingSoon = useComingSoon();

  const handleGetStarted = () => {
    const trigger = onComingSoon || openComingSoon;
    if (trigger) {
      trigger({
        title: 'Get Started — Coming Soon',
        description:
          'We are actively building the DukaanLocker onboarding experience and it will be available in a future release.',
      });
    }
  };

  const handleWatchDemo = () => {
    const introSection = document.getElementById('intro-video');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
      const videoEl = introSection.querySelector('video');
      if (videoEl) {
        if (videoEl.ended) {
          videoEl.currentTime = 0;
        }
        videoEl.play().catch(() => {});
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative w-full min-h-screen min-h-[100dvh] overflow-hidden bg-background dark:bg-[#0c1220] flex items-center py-20 lg:py-0 select-none transition-colors duration-300"
      aria-label="Platform Overview"
    >
      {/* ── Fullscreen SVG Background Visual (Light & Dark) ── */}
      <img
        src="/secure-docs-locker-light.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right select-none dark:hidden block"
      />
      <img
        src="/secure-docs-locker.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-right select-none hidden dark:block"
      />

      {/* ── Directional & Transition Gradient Overlays ── */}
      {/* Subtle mobile/tablet contrast overlay so text remains crisp and legible */}
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-transparent dark:from-[#0c1220]/90 dark:via-[#0c1220]/60 lg:opacity-0 z-10"
        aria-hidden="true"
      />

      {/* Top subtle blend smoothly transitioning from hero video */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24 sm:h-32 bg-gradient-to-b from-black/20 dark:from-[#02050b] to-transparent z-10"
        aria-hidden="true"
      />

      {/* Bottom subtle blend smoothly transitioning into the next section */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-24 sm:h-32 bg-gradient-to-t from-background to-transparent z-10"
        aria-hidden="true"
      />

      {/* ── Main Content Container ── */}
      <div className="relative z-20 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-[620px]">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2.5 rounded-full border border-blue-200/80 dark:border-white/10 bg-blue-50/80 dark:bg-white/[0.04] px-3.5 py-1.5 text-xs sm:text-[13px] font-medium text-blue-700 dark:text-sky-300 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>AI-powered compliance &amp; document management for small businesses</span>
          </div>

          {/* Main Heading */}
          <h1 className="mt-5 text-4xl sm:text-5xl lg:text-[58px] font-extrabold tracking-tight text-ink dark:text-white leading-[1.08]">
            One Platform for{' '}
            <span className="block mt-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-sky-400 dark:via-cyan-300 dark:to-indigo-400 bg-clip-text text-transparent">
              Business Documents,
            </span>{' '}
            <span className="block mt-1">Compliance &amp; Renewals</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base sm:text-lg text-ink-soft dark:text-slate-300 leading-relaxed font-normal">
            Helping small businesses manage licenses, registrations, documents, expiry dates and renewals from one secure workspace.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
            {/* Primary button */}
            <button
              type="button"
              onClick={handleGetStarted}
              className="group inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm sm:text-base font-semibold text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
              style={{
                background:
                  'var(--gradient-brand, linear-gradient(135deg, #1874ed 0%, #3646e8 50%, #4c1ebc 100%))',
              }}
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </button>

            {/* Secondary button */}
            <button
              type="button"
              onClick={handleWatchDemo}
              className="group inline-flex items-center gap-2 rounded-xl border border-border dark:border-white/15 hover:border-brand/40 dark:hover:border-white/30 bg-card/90 dark:bg-white/[0.06] hover:bg-secondary dark:hover:bg-white/[0.12] px-6 py-3.5 text-sm sm:text-base font-semibold text-ink dark:text-white backdrop-blur-sm hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer shadow-soft"
            >
              <Play className="h-4 w-4 text-brand dark:text-sky-400 fill-brand dark:fill-sky-400 transition-transform duration-200 group-hover:scale-110" />
              Watch Demo
            </button>
          </div>

          {/* Trust Information */}
          <div className="mt-10 sm:mt-12 flex flex-wrap items-center gap-y-3 gap-x-6 sm:gap-x-8 text-xs sm:text-sm text-ink-soft dark:text-slate-300/85">
            <div className="flex items-center gap-2 transition-colors hover:text-ink dark:hover:text-white">
              <ShieldCheck className="h-4 w-4 text-brand dark:text-sky-400 shrink-0" />
              <span>Secure document storage</span>
            </div>
            <div className="flex items-center gap-2 transition-colors hover:text-ink dark:hover:text-white">
              <Lock className="h-4 w-4 text-brand dark:text-sky-400 shrink-0" />
              <span>Protected business data</span>
            </div>
            <div className="flex items-center gap-2 transition-colors hover:text-ink dark:hover:text-white">
              <BellRing className="h-4 w-4 text-brand dark:text-sky-400 shrink-0" />
              <span>Smart renewal reminders</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
