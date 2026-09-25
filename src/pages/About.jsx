import React from 'react';
import {
  Target, Eye, Users, FileWarning, Layers, CalendarClock,
  ShieldCheck, Brain, FolderLock, BellRing, Download,
  Landmark, Sparkles, Building2, Quote, ArrowRight, Play,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollRevealAll } from '../hooks/usePremium';

function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="reveal mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
        {badge}
      </div>
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-ink-soft sm:text-lg">{subtitle}</p>}
      <div className="section-line" aria-hidden="true" />
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="reveal text-center p-6 rounded-2xl bg-card shadow-soft ring-1 ring-border card-hover">
      <div className="font-display text-3xl font-extrabold gradient-text sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-ink-soft">{label}</div>
    </div>
  );
}

export default function About() {
  const statsRef = useScrollRevealAll();
  const storyRef = useScrollRevealAll();
  const whyRef   = useScrollRevealAll();
  const roadRef  = useScrollRevealAll();

  const story = [
    { icon: <Brain className="h-5 w-5" />, title: 'Compliance Confusion', desc: 'Most shop owners simply do not know which licenses and registrations their business legally requires — leading to unknowing violations.' },
    { icon: <Layers className="h-5 w-5" />, title: 'Too Many Licenses', desc: 'GST, FSSAI, Udyam, Trade License, Shop & Establishment — scattered across multiple government departments with no unified view.' },
    { icon: <FileWarning className="h-5 w-5" />, title: 'Document Chaos', desc: 'Critical documents live in drawers, WhatsApp chats, and email inboxes — impossible to find when needed for inspections or applications.' },
    { icon: <CalendarClock className="h-5 w-5" />, title: 'Missed Renewals & Penalties', desc: 'Expiry dates slip by unnoticed, leading to fines, legal notices, and even closure orders that could devastate a small business.' },
  ];

  const why = [
    { icon: <FolderLock className="h-6 w-6 text-brand" />, title: 'One Platform for Compliance', desc: 'Every license, registration and document for your business — unified in a single secure vault with instant access.' },
    { icon: <Brain className="h-6 w-6 text-brand" />, title: 'AI-Powered Guidance', desc: 'Our AI tells you exactly which documents your business needs based on its type and location — personalized compliance in seconds.' },
    { icon: <ShieldCheck className="h-6 w-6 text-brand" />, title: 'Document Management', desc: 'Bank-grade encrypted storage with instant search, secure sharing, and cloud backup so your documents are always safe.' },
    { icon: <BellRing className="h-6 w-6 text-brand" />, title: 'Renewal Tracking', desc: 'Automatic expiry monitoring with multi-channel reminders via SMS, WhatsApp, and email — so you never miss a deadline.' },
  ];

  const roadmap = [
    { icon: <Download className="h-5 w-5" />, title: 'Auto-Fetch Government Documents', desc: 'Pull licenses and registrations directly from official portals with one tap — no more manual data entry.', status: 'In Development' },
    { icon: <Landmark className="h-5 w-5" />, title: 'DigiLocker Integration', desc: "Seamlessly sync verified records with India's national document framework for instant verification.", status: 'Planned' },
    { icon: <Sparkles className="h-5 w-5" />, title: 'Smart Compliance Recommendations', desc: 'Proactive, AI-driven suggestions tailored to your business growth and regulatory changes.', status: 'Planned' },
    { icon: <Building2 className="h-5 w-5" />, title: 'Multi-Business Management', desc: 'Manage multiple shops, branches and entities from one centralized dashboard with unified compliance view.', status: 'In Development' },
  ];

  const stats = [
    { value: '6.4 Cr+', label: 'Small Businesses in India' },
    { value: '60 Cr+', label: 'Documents Managed' },
    { value: '10+',    label: 'License Types Covered' },
    { value: '12',     label: 'Languages Supported' },
  ];

  return (
    <>
      <PageHero
        badge="About DukaanLocker"
        title="Simplifying compliance for India's"
        highlight="6.4 Crore+ small businesses"
        subtitle="We are building the most trusted compliance platform for small businesses — turning a maze of licenses, documents and renewals into one calm, secure experience."
      />

      {/* ── Stats Bar ── */}
      <section className="relative -mt-8 pb-8" ref={statsRef}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal-stagger grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => <StatCard key={stat.label} value={stat.value} label={stat.label} />)}
          </div>
        </div>
      </section>

      {/* ── Who We Are + Mission + Vision ── */}
      <section className="relative py-12 border-t border-border" ref={storyRef}>
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-brand-soft/20 to-transparent dark:from-brand-soft/5" />
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal-stagger grid gap-6 lg:grid-cols-3">
            {[
              { icon: <Users className="h-6 w-6" />, title: 'Who We Are', desc: "DukaanLocker is India's first AI-powered compliance and document platform built for local shops, general stores and MSMEs — the backbone of the Indian economy.", gradient: 'from-blue-500/20 to-blue-600/10' },
              { icon: <Target className="h-6 w-6" />, title: 'Our Mission', desc: 'To make business compliance effortless and accessible for every small business owner in India — regardless of size, language or technical skill.', gradient: 'from-brand/20 to-purple-600/10' },
              { icon: <Eye className="h-6 w-6" />, title: 'Our Vision', desc: "To become India's most trusted compliance platform for small businesses — a single source of truth for every document and deadline.", gradient: 'from-purple-500/20 to-brand/10' },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl bg-card p-8 shadow-card ring-1 ring-border card-hover"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 dark:opacity-20`} />
                <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-brand opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-10" aria-hidden="true" />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl shadow-glow" style={{ background: 'var(--gradient-brand)' }}>
                    {item.icon}
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-ink">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Founder Story Video ── */}
      <section className="relative py-16 border-t border-border">
        <div className="mx-auto max-w-4xl px-4">
          <div className="reveal text-center mb-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
              Our Story
            </div>
            <h2 className="mt-4 font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Hear from the founders
            </h2>
            <p className="mt-3 text-ink-soft">Why we are building DukaanLocker — in our own words.</p>
            <div className="section-line" aria-hidden="true" />
          </div>

          {/* VIDEO PLACEHOLDER
              1. Record a 60-90s founder story video
              2. Export as founder-story.webm (primary) + founder-story.mp4 (fallback)
              3. Place in /public/videos/
              4. Replace the placeholder div below with:
                 <video controls poster="/videos/founder-story-poster.jpg" ...>
                   <source src="/videos/founder-story.webm" type="video/webm" />
                   <source src="/videos/founder-story.mp4" type="video/mp4" />
                 </video>
          */}
          <div className="reveal video-container shadow-card ring-1 ring-border bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-white/50">
              <div className="text-6xl mb-2">🎬</div>
              <p className="text-sm font-semibold tracking-wide">Founder Story Video</p>
              <p className="text-xs opacity-60 max-w-xs text-center">Drop <code className="bg-white/10 px-1 py-0.5 rounded text-[10px]">founder-story.mp4</code> into <code className="bg-white/10 px-1 py-0.5 rounded text-[10px]">/public/videos/</code> to activate</p>
            </div>
            <button
              className="video-play-overlay"
              aria-label="Play founder story video (coming soon)"
            >
              <div className="video-play-btn">
                <Play className="h-6 w-6 text-brand ml-1" />
              </div>
            </button>
          </div>
          <p className="mt-3 text-center text-xs text-ink-soft">60-second founder story · Click to play · Subtitles available</p>
        </div>
      </section>

      {/* ── Our Story — Problem Cards ── */}
      <section className="relative py-24 border-t border-border" ref={storyRef}>
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Our Story"
            title="The problem we set out to solve"
            subtitle="India's small businesses power the economy — yet they are forced to navigate a fragmented, confusing compliance landscape alone."
          />
          <div className="reveal-stagger mt-14 grid gap-5 sm:grid-cols-2">
            {story.map((item, idx) => (
              <div key={item.title} className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border card-hover">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand opacity-0 blur-2xl transition duration-500 group-hover:opacity-15" aria-hidden="true" />
                <div className="relative flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 text-brand ring-1 ring-brand/10 dark:from-brand/10 transition group-hover:scale-110 group-hover:shadow-glow">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Challenge 0{idx + 1}</span>
                    <h3 className="mt-1 font-display text-base font-bold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DukaanLocker ── */}
      <section className="relative py-24 border-t border-border bg-gradient-to-b from-transparent to-brand-soft/20 dark:to-brand-soft/5" ref={whyRef}>
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Why DukaanLocker"
            title="Everything compliance, in one place"
            subtitle="We replace shoeboxes of paper, dozens of WhatsApp groups and a maze of government portals with a single, intelligent platform."
          />
          <div className="reveal-stagger mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item) => (
              <div key={item.title} className="group rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border card-hover">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 ring-1 ring-brand/10 dark:from-brand/10 transition group-hover:scale-110 group-hover:shadow-glow group-hover:bg-brand group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-ink group-hover:text-brand transition-colors">{item.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Vision Banner ── */}
      <section className="relative py-20 border-t border-border">
        <div className="mx-auto max-w-5xl px-4">
          <div className="reveal relative overflow-hidden rounded-3xl glass-dark p-10 text-center shadow-card sm:p-16 ring-1 ring-border hover:ring-brand/20 transition-all duration-500">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/5 to-purple-500/5 dark:from-brand/10 dark:to-purple-500/10" aria-hidden="true" />
            <Quote className="mx-auto h-8 w-8 text-brand opacity-50" aria-hidden="true" />
            <h2 className="mt-5 font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Building India's most trusted compliance platform
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-soft leading-relaxed">
              Our vision is a future where every small business owner in India can run a fully compliant business with confidence — without ever feeling lost in paperwork or fearing penalties.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-glow cursor-default" style={{ background: 'var(--gradient-brand)' }}>
                <Sparkles className="h-4 w-4" />
                Join the Mission
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Future Roadmap ── */}
      <section className="relative py-24 border-t border-border" ref={roadRef}>
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Future Roadmap"
            title="Where we're headed"
            subtitle="A clear path toward becoming the operating system for small business compliance in India."
          />
          <div className="reveal-stagger mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roadmap.map((item, idx) => (
              <div key={item.title} className="group relative card-hover rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border">
                <div className="grid h-10 w-10 place-items-center rounded-xl shadow-glow transition group-hover:scale-110" style={{ background: 'var(--gradient-brand)' }}>
                  {item.icon}
                </div>
                <div className="flex items-center justify-between mt-4 mb-2">
                  <h3 className="font-display text-base font-bold text-ink leading-snug">{item.title}</h3>
                </div>
                <span className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-bold mb-3 ${
                  item.status === 'In Development'
                    ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400'
                    : 'bg-amber-50 text-amber-700 ring-1 ring-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400'
                }`}>
                  {item.status}
                </span>
                <p className="text-sm text-ink-soft leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}