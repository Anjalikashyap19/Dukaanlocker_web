import React from 'react';
import { Lock, ShieldCheck, Brain, BellRing, Building2, Cloud, LayoutDashboard, Share2 } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/usePremium';

export default function Features() {
  const sectionRef = useScrollRevealAll();

  const featuresList = [
    { icon: <Lock className="h-5 w-5" />, title: 'Document Locker', description: 'Securely store every business document in one encrypted vault.' },
    { icon: <ShieldCheck className="h-5 w-5" />, title: 'Smart Compliance Tracking', description: 'Track expiry dates, renewals and document health automatically.' },
    { icon: <Brain className="h-5 w-5" />, title: 'AI Compliance Assistant', description: "Know exactly which documents your business legally needs." },
    { icon: <BellRing className="h-5 w-5" />, title: 'Auto Reminders', description: 'Never miss a renewal — SMS, WhatsApp and email alerts.' },
    { icon: <Building2 className="h-5 w-5" />, title: 'Multi-Business Management', description: 'Run multiple shops, branches and entities from one account.' },
    { icon: <Cloud className="h-5 w-5" />, title: 'Cloud Backup', description: 'Access your documents anywhere, anytime, on any device.' },
    { icon: <LayoutDashboard className="h-5 w-5" />, title: 'Compliance Dashboard', description: 'A live business health score and compliance overview.' },
    { icon: <Share2 className="h-5 w-5" />, title: 'Secure Sharing', description: 'Share documents with CAs, auditors and banks in one tap.' },
  ];

  return (
    <section id="features" ref={sectionRef} className="relative py-24 border-t border-border overflow-hidden" aria-labelledby="features-heading">
      {/* Background accent */}
      <div className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full opacity-20 dark:opacity-10 -z-10"
           style={{ background: 'radial-gradient(circle, rgba(10,84,221,0.3), transparent 70%)' }}
           aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
            Meet DukaanLocker
          </div>
          <h2 id="features-heading" className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Everything you need.{' '}
            <span className="gradient-text">Nothing you don't.</span>
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            A single, opinionated platform that replaces shoeboxes of paper, dozens of WhatsApp groups, and a maze of government portals.
          </p>
          <div className="section-line" aria-hidden="true" />
        </div>

        {/* Feature Grid — staggered reveal */}
        <div className="reveal-stagger mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuresList.map((item, index) => (
            <FeatureCard key={index} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ item }) {
  // Mouse-tilt on hover
  const handleMouseMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reducedMotion) {
      el.style.transform = `perspective(600px) rotateX(${-dy * 5}deg) rotateY(${dx * 5}deg) translateZ(8px) translateY(-6px)`;
    }
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = '';
  };

  return (
    <div
      className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border
                 transition-all duration-400 hover:shadow-card hover:ring-brand/20 cursor-default"
      style={{ transition: 'transform 0.4s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease, border-color 0.3s ease', willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Corner glow */}
      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-brand opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-15" aria-hidden="true" />

      <div className="relative z-10">
        <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/10 dark:bg-brand-soft/10
                        transition-all duration-300 group-hover:scale-110 group-hover:shadow-glow group-hover:bg-brand group-hover:text-white">
          {item.icon}
        </div>
        <h3 className="mt-5 font-display text-base font-bold text-ink transition-colors group-hover:text-brand">{item.title}</h3>
        <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{item.description}</p>
      </div>
    </div>
  );
}
