import React from 'react';
import {
  Target,
  Eye,
  Users,
  FileWarning,
  Layers,
  CalendarClock,
  ShieldCheck,
  Brain,
  FolderLock,
  BellRing,
  Download,
  Landmark,
  Sparkles,
  Building2,
  Quote,
  ArrowRight,
} from 'lucide-react';
import PageHero from '../components/PageHero';

function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
        {badge}
      </div>
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-ink-soft sm:text-lg">{subtitle}</p>}
    </div>
  );
}

function StatCard({ value, label }) {
  return (
    <div className="text-center p-6 rounded-2xl bg-card shadow-soft ring-1 ring-border">
      <div className="font-display text-3xl font-extrabold gradient-text sm:text-4xl">{value}</div>
      <div className="mt-1 text-sm text-ink-soft">{label}</div>
    </div>
  );
}

export default function About() {
  const story = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: 'Compliance Confusion',
      desc: 'Most shop owners simply do not know which licenses and registrations their business legally requires — leading to unknowing violations.',
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: 'Too Many Licenses',
      desc: 'GST, FSSAI, Udyam, Trade License, Shop & Establishment — scattered across multiple government departments with no unified view.',
    },
    {
      icon: <FileWarning className="h-5 w-5" />,
      title: 'Document Chaos',
      desc: 'Critical documents live in drawers, WhatsApp chats, and email inboxes — impossible to find when needed for inspections or applications.',
    },
    {
      icon: <CalendarClock className="h-5 w-5" />,
      title: 'Missed Renewals & Penalties',
      desc: 'Expiry dates slip by unnoticed, leading to fines, legal notices, and even closure orders that could devastate a small business.',
    },
  ];

  const why = [
    {
      icon: <FolderLock className="h-6 w-6 text-brand" />,
      title: 'One Platform for Compliance',
      desc: 'Every license, registration and document for your business — unified in a single secure vault with instant access.',
    },
    {
      icon: <Brain className="h-6 w-6 text-brand" />,
      title: 'AI-Powered Guidance',
      desc: 'Our AI tells you exactly which documents your business needs based on its type and location — personalized compliance in seconds.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand" />,
      title: 'Document Management',
      desc: 'Bank-grade encrypted storage with instant search, secure sharing, and cloud backup so your documents are always safe.',
    },
    {
      icon: <BellRing className="h-6 w-6 text-brand" />,
      title: 'Renewal Tracking',
      desc: 'Automatic expiry monitoring with multi-channel reminders via SMS, WhatsApp, and email — so you never miss a deadline.',
    },
  ];

  const roadmap = [
    {
      icon: <Download className="h-5 w-5" />,
      title: 'Auto-Fetch Government Documents',
      desc: 'Pull licenses and registrations directly from official portals with one tap — no more manual data entry.',
      status: 'In Development',
    },
    {
      icon: <Landmark className="h-5 w-5" />,
      title: 'DigiLocker Integration',
      desc: 'Seamlessly sync verified records with India\'s national document framework for instant verification.',
      status: 'Planned',
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Smart Compliance Recommendations',
      desc: 'Proactive, AI-driven suggestions tailored to your business growth and regulatory changes.',
      status: 'Planned',
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      title: 'Multi-Business Management',
      desc: 'Manage multiple shops, branches and entities from one centralized dashboard with unified compliance view.',
      status: 'In Development',
    },
  ];

  const stats = [
    { value: '6.4 Cr+', label: 'Small Businesses in India' },
    { value: '60 Cr+', label: 'Documents Managed' },
    { value: '10+', label: 'License Types Covered' },
    { value: '12', label: 'Languages Supported' },
  ];

  return (
    <>
      <PageHero
        badge="About DukaanLocker"
        title="Simplifying compliance for India's"
        highlight="6.4 Crore+ small businesses"
        subtitle="We are building the most trusted compliance platform for small businesses — turning a maze of licenses, documents and renewals into one calm, secure experience."
      />

      {/* Stats Bar */}
      <section className="relative -mt-8 pb-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Who we are + Mission + Vision */}
      <section className="relative py-12 border-t border-border">
        <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-gradient-to-b from-brand-soft/20 to-transparent dark:from-brand-soft/5" />
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                title: 'Who We Are',
                desc: 'DukaanLocker is India\'s first AI-powered compliance and document platform built for local shops, general stores and MSMEs — the backbone of the Indian economy.',
                gradient: 'from-blue-500/20 to-blue-600/10',
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: 'Our Mission',
                desc: 'To make business compliance effortless and accessible for every small business owner in India — regardless of size, language or technical skill.',
                gradient: 'from-brand/20 to-purple-600/10',
              },
              {
                icon: <Eye className="h-6 w-6" />,
                title: 'Our Vision',
                desc: 'To become India\'s most trusted compliance platform for small businesses — a single source of truth for every document and deadline.',
                gradient: 'from-purple-500/20 to-brand/10',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl bg-card p-8 shadow-card ring-1 ring-border transition hover:-translate-y-1"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 dark:opacity-20`} />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-brand)]  shadow-glow">
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

      {/* Our Story */}
      <section className="relative py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Our Story"
            title="The problem we set out to solve"
            subtitle="India's small businesses power the economy — yet they are forced to navigate a fragmented, confusing compliance landscape alone."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2">
            {story.map((item, idx) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--gradient-brand)] opacity-0 blur-2xl transition group-hover:opacity-20" />
                <div className="relative flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 text-brand ring-1 ring-brand/10 dark:from-brand/10">
                    {item.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-brand uppercase tracking-wider">Challenge 0{idx + 1}</span>
                    </div>
                    <h3 className="mt-1 font-display text-base font-bold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DukaanLocker */}
      <section className="relative py-24 border-t border-border bg-gradient-to-b from-transparent to-brand-soft/20 dark:to-brand-soft/5">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Why DukaanLocker"
            title="Everything compliance, in one place"
            subtitle="We replace shoeboxes of paper, dozens of WhatsApp groups and a maze of government portals with a single, intelligent platform."
          />
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {why.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 ring-1 ring-brand/10 dark:from-brand/10">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision statement banner */}
      <section className="relative py-20 border-t border-border">
        <div className="mx-auto max-w-5xl px-4">
          <div className="relative overflow-hidden rounded-3xl glass-dark p-10 text-center shadow-card sm:p-16">

            <Quote className="mx-auto h-8 w-8 text-brand opacity-50" />
            <h2 className="mt-5 font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Building India's most trusted compliance platform
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-soft leading-relaxed">
              Our vision is a future where every small business owner in India can run a fully compliant business with confidence — without ever feeling lost in paperwork or fearing penalties.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 rounded-xl bg-[var(--gradient-brand)] px-5 py-2.5 text-sm font-semibold  shadow-glow">
                <Sparkles className="h-4 w-4" />
                Join the Mission
                <ArrowRight className="h-4 w-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Roadmap */}
      <section className="relative py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Future Roadmap"
            title="Where we're headed"
            subtitle="A clear path toward becoming the operating system for small business compliance in India."
          />
          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-[26px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand/40 via-brand/20 to-transparent hidden sm:block" />
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {roadmap.map((item, idx) => (
                <div
                  key={item.title}
                  className="group relative pl-12 sm:pl-0"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-6 sm:relative sm:left-auto sm:top-auto sm:mb-4 z-10">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-[var(--gradient-brand)]  shadow-glow">
                      {item.icon}
                    </div>
                  </div>
                  
                  <div className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-card">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                      <span className={`rounded-md px-2 py-0.5 text-[10px] font-bold ${
                        item.status === 'In Development'
                          ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400'
                          : 'bg-amber-50 text-amber-700 ring-1 ring-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}