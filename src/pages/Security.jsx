import React from 'react';
import {
  ShieldCheck,
  Lock,
  Server,
  KeyRound,
  FileCheck,
  EyeOff,
  AlertTriangle,
  Building2,
  CheckCircle2,
  HardDrive,
  RefreshCw,
  PhoneCall,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useScrollRevealAll } from '../hooks/usePremium';

export default function Security() {
  const containerRef = useScrollRevealAll();

  const securityPillars = [
    {
      icon: <Lock className="h-6 w-6 text-brand" />,
      title: 'AES-256 Encryption at Rest',
      desc: 'All documents deposited into your DukaanLocker vault are encrypted using Advanced Encryption Standard (AES) with 256-bit cryptographic keys before being written to persistent storage.',
    },
    {
      icon: <KeyRound className="h-6 w-6 text-brand" />,
      title: 'TLS 1.3 Secure Transmission',
      desc: 'Data exchanged between your mobile device, browser, and our cloud cluster is strictly transmitted over Transport Layer Security (TLS 1.3) with Perfect Forward Secrecy.',
    },
    {
      icon: <EyeOff className="h-6 w-6 text-brand" />,
      title: 'Zero-Knowledge Privacy Design',
      desc: 'Documents are partitioned with isolated tenant access keys. Platform operators and database engineers cannot read, preview, or index your private store documents.',
    },
    {
      icon: <Server className="h-6 w-6 text-brand" />,
      title: 'Sovereign Indian Data Centers',
      desc: 'Our infrastructure is housed exclusively within Tier-4 data centers physically located in India, adhering strictly to MeitY data localization mandates and the DPDP Act 2023.',
    },
    {
      icon: <HardDrive className="h-6 w-6 text-brand" />,
      title: 'Redundant Multi-Zone Backups',
      desc: 'Uploaded files are automatically replicated across geographically distinct data centers with automated point-in-time recovery, ensuring 99.999% durability against physical failure.',
    },
    {
      icon: <FileCheck className="h-6 w-6 text-brand" />,
      title: 'Time-Restricted CA Sharing',
      desc: 'When sharing documents with your chartered accountant or tax consultant, you can enforce password requirements, restrict download rights, and set automated link expirations.',
    },
  ];

  return (
    <>
      <PageHero
        badge="Enterprise Security Framework"
        title="Military-Grade Security for"
        highlight="Your Commercial Vault"
        subtitle="DukaanLocker by India Advocacy protects your trade licenses, financial certificates, and identity documents with institutional-grade encryption and zero-knowledge data isolation."
      />

      <section className="relative -mt-6 pb-24" ref={containerRef}>
        <div className="mx-auto max-w-7xl px-4">
          {/* Trust badges bar */}
          <div className="reveal flex flex-wrap items-center justify-center gap-6 rounded-2xl glass p-6 shadow-soft ring-1 ring-border mb-16">
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <span>AES-256 Vault Encryption</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <span>ISO 27001 Data Practices</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <span>Indian DPDP Act 2023 Aligned</span>
            </div>
            <div className="h-4 w-px bg-border hidden sm:block" />
            <div className="flex items-center gap-2 text-xs font-semibold text-ink">
              <ShieldCheck className="h-5 w-5 text-emerald-600" />
              <span>Sovereign Cloud Hosting</span>
            </div>
          </div>

          {/* Pillars grid */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl font-extrabold text-ink">
              Six Layers of Document Protection
            </h2>
            <p className="mt-3 text-sm text-ink-soft">
              Every certificate in your vault is protected from unauthorized access, accidental deletion, and data leakage.
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
                  <CheckCircle2 className="h-3.5 w-3.5" /> Active Protocol
                </div>
              </div>
            ))}
          </div>

          {/* Security Incident Reporting */}
          <div className="mt-16 rounded-3xl glass p-8 sm:p-10 shadow-card ring-1 ring-border text-center max-w-4xl mx-auto">
            <h3 className="font-display text-xl font-bold text-ink">Have a security question or audit request?</h3>
            <p className="mt-2 text-xs text-ink-soft max-w-lg mx-auto leading-relaxed">
              Our information security and compliance operations team at India Advocacy can provide detailed architecture whitepapers or answer technical inquiries.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-white shadow-soft transition hover:opacity-95"
                style={{ background: 'var(--gradient-brand)' }}
              >
                <PhoneCall className="h-3.5 w-3.5" />
                Contact Security Officer
              </Link>
              <a
                href="mailto:support@indiaadvocacy.in"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-2.5 text-xs font-semibold text-ink shadow-soft hover:border-brand/40"
              >
                support@indiaadvocacy.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
