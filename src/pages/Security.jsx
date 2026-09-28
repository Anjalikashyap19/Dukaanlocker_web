import React from 'react';
import {
  ShieldCheck,
  Lock,
  KeyRound,
  FileCheck,
  EyeOff,
  HardDrive,
  CheckCircle2,
  PhoneCall,
  Mail,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useScrollRevealAll } from '../hooks/usePremium';

export default function Security() {
  const containerRef = useScrollRevealAll();

  const securityPillars = [
    {
      icon: <Lock className="h-6 w-6 text-brand" />,
      title: 'Secure Cloud Storage',
      desc: 'All documents deposited into your DukaanLocker vault are stored securely in protected cloud infrastructure, shielding your critical business certificates from physical loss, theft, or damage.',
    },
    {
      icon: <KeyRound className="h-6 w-6 text-brand" />,
      title: 'Encrypted Data in Transit',
      desc: 'All data exchanged between your browser, mobile device, and DukaanLocker is encrypted using standard HTTPS and TLS protocols, keeping communications safe from interception.',
    },
    {
      icon: <ShieldCheck className="h-6 w-6 text-brand" />,
      title: 'Authenticated Access Control',
      desc: 'Your store vault is protected by secure user authentication. Only verified account holders have permission to view, manage, and download their business records.',
    },
    {
      icon: <FileCheck className="h-6 w-6 text-brand" />,
      title: 'Controlled Document Sharing',
      desc: 'When sharing certificates with your Chartered Accountant (CA) or tax consultant, you can generate secure, permission-controlled links to ensure safe document distribution.',
    },
    {
      icon: <EyeOff className="h-6 w-6 text-brand" />,
      title: 'Strict User Privacy',
      desc: 'Your uploaded documents and commercial records belong strictly to you. We respect user privacy and do not sell, rent, or share your proprietary business data with third parties.',
    },
    {
      icon: <HardDrive className="h-6 w-6 text-brand" />,
      title: 'Reliable Backups & Expiry Tracking',
      desc: 'Digital document archives are safely backed up with automated expiry tracking, ensuring you always have access to current licenses and never miss statutory renewals.',
    },
  ];

  return (
    <>
      <PageHero
        badge="Information Security"
        title="Security & Privacy for"
        highlight="Your Business Documents"
        subtitle="DukaanLocker by India Advocacy protects your trade licenses, tax certificates, and commercial records with secure cloud storage, encrypted web transmission, and protected user access."
      />

      <section className="relative -mt-6 pb-24" ref={containerRef}>
        <div className="mx-auto max-w-7xl px-4">
          {/* Trust badges bar */}
          <div className="reveal flex flex-wrap items-center justify-center gap-6 rounded-2xl glass p-6 shadow-soft ring-1 ring-border mb-16">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <Lock className="h-4 w-4 text-emerald-600" />
              <span>Secure Cloud Storage</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <KeyRound className="h-4 w-4 text-emerald-600" />
              <span>Encrypted Data Transmission</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              <span>Authenticated Access</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <FileCheck className="h-4 w-4 text-emerald-600" />
              <span>Controlled Sharing</span>
            </div>
          </div>

          {/* Pillars grid */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-extrabold text-ink">
              How We Protect Your Documents
            </h2>
            <p className="mt-3 text-sm text-ink-soft">
              Reliable, transparent security measures implemented across our platform to keep your store certificates and business data safe.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {securityPillars.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-3xl bg-card p-8 shadow-soft ring-1 ring-border card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-soft text-brand dark:bg-brand-soft/10 mb-5">
                    {pillar.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-ink">{pillar.title}</h3>
                  <p className="mt-2.5 text-xs text-ink-soft leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/50 flex items-center gap-1.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400">
                  <CheckCircle2 className="h-3.5 w-3.5" /> Active Protection
                </div>
              </div>
            ))}
          </div>

          {/* Security Support / Questions */}
          <div className="mt-16 rounded-3xl glass p-8 sm:p-10 shadow-card ring-1 ring-border text-center max-w-4xl mx-auto">
            <h3 className="font-display text-xl font-bold text-ink">Have questions about document security?</h3>
            <p className="mt-2 text-xs text-ink-soft max-w-lg mx-auto leading-relaxed">
              Our team at India Advocacy is here to help clarify how your business documents and records are stored and protected.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-white shadow-soft transition hover:opacity-95"
                style={{ background: 'var(--gradient-brand)' }}
              >
                <PhoneCall className="h-3.5 w-3.5" />
                Contact Support
              </Link>
              <a
                href="mailto:support@indiaadvocacy.in"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-2.5 text-xs font-semibold text-ink shadow-soft hover:border-brand/40"
              >
                <Mail className="h-3.5 w-3.5" />
                support@indiaadvocacy.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
