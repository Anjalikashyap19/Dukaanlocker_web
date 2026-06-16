import React from 'react';
import { Lock, ShieldCheck, Brain, BellRing, Building2, Cloud, LayoutDashboard, Share2 } from 'lucide-react';

export default function Features() {
  const featuresList = [
    {
      icon: <Lock className="h-5 w-5" />,
      title: 'Document Locker',
      description: 'Securely store every business document in one encrypted vault.',
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: 'Smart Compliance Tracking',
      description: 'Track expiry dates, renewals and document health automatically.',
    },
    {
      icon: <Brain className="h-5 w-5" />,
      title: 'AI Compliance Assistant',
      description: "Know exactly which documents your business legally needs.",
    },
    {
      icon: <BellRing className="h-5 w-5" />,
      title: 'Auto Reminders',
      description: 'Never miss a renewal — SMS, WhatsApp and email alerts.',
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      title: 'Multi-Business Management',
      description: 'Run multiple shops, branches and entities from one account.',
    },
    {
      icon: <Cloud className="h-5 w-5" />,
      title: 'Cloud Backup',
      description: 'Access your documents anywhere, anytime, on any device.',
    },
    {
      icon: <LayoutDashboard className="h-5 w-5" />,
      title: 'Compliance Dashboard',
      description: 'A live business health score and compliance overview.',
    },
    {
      icon: <Share2 className="h-5 w-5" />,
      title: 'Secure Sharing',
      description: 'Share documents with CAs, auditors and banks in one tap.',
    },
  ];

  return (
    <section id="features" className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
            Meet DukaanLocker
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Everything you need. Nothing you don't.
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            A single, opinionated platform that replaces shoeboxes of paper, dozens of WhatsApp groups, and a maze of government portals.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuresList.map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-card"
            >
              {/* Corner Glow effect */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--gradient-brand)] opacity-0 blur-2xl transition group-hover:opacity-20"></div>

              <div className="relative">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/10 dark:bg-brand-soft/10">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
