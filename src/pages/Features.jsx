import React from 'react';
import {
  FolderLock,
  Cloud,
  Files,
  CalendarClock,
  BellRing,
  LayoutDashboard,
  Brain,
  FileCheck,
  Lightbulb,
  Building2,
  Share2,
  Network,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Zap,
  RefreshCw,
  CheckCircle,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useComingSoon } from '../context/ComingSoonContext';

const categories = [
  {
    badge: 'Document Management',
    title: 'Your entire business, securely stored',
    description: 'A bank-grade vault for every license, registration, and certificate your business needs — accessible anywhere, anytime.',
    gradient: 'from-emerald-500/10 via-emerald-500/5 to-transparent',
    features: [
      {
        icon: <FolderLock className="h-5 w-5" />,
        title: 'Secure Document Storage',
        desc: 'Bank-grade AES-256 encrypted vault for every license, registration and certificate.',
        tag: 'Available',
      },
      {
        icon: <Cloud className="h-5 w-5" />,
        title: 'Cloud Backup',
        desc: 'Access your documents anywhere, anytime, on any device — always backed up securely.',
        tag: 'Available',
      },
      {
        icon: <Files className="h-5 w-5" />,
        title: 'Multi-Document Support',
        desc: 'Store PDFs, images and scans of every document type in one organized, searchable place.',
        tag: 'Available',
      },
    ],
  },
  {
    badge: 'Compliance Tracking',
    title: 'Never miss a deadline again',
    description: 'Automatic monitoring of every expiry date with smart, multi-channel alerts that give you weeks of notice.',
    gradient: 'from-blue-500/10 via-blue-500/5 to-transparent',
    features: [
      {
        icon: <CalendarClock className="h-5 w-5" />,
        title: 'Expiry Monitoring',
        desc: 'Automatic tracking of every license expiry date across all your registrations in real-time.',
        tag: 'Available',
      },
      {
        icon: <BellRing className="h-5 w-5" />,
        title: 'Renewal Reminders',
        desc: 'Smart, multi-channel alerts via SMS, WhatsApp and email — weeks in advance, not days.',
        tag: 'Available',
      },
      {
        icon: <LayoutDashboard className="h-5 w-5" />,
        title: 'Compliance Dashboard',
        desc: 'A live business health score and at-a-glance compliance overview for your entire portfolio.',
        tag: 'Available',
      },
    ],
  },
  {
    badge: 'AI Assistant',
    title: 'Compliance intelligence, built in',
    description: 'Our AI analyzes your business profile and returns a personalized compliance checklist — in seconds.',
    gradient: 'from-purple-500/10 via-purple-500/5 to-transparent',
    features: [
      {
        icon: <Brain className="h-5 w-5" />,
        title: 'Business-Specific Recommendations',
        desc: 'AI analyses your business type and tells you exactly what you legally need to operate.',
        tag: 'Available',
      },
      {
        icon: <FileCheck className="h-5 w-5" />,
        title: 'Required Document Suggestions',
        desc: 'Instantly know which licenses, permits and tax registrations apply to your specific business.',
        tag: 'Available',
      },
      {
        icon: <Lightbulb className="h-5 w-5" />,
        title: 'Compliance Insights',
        desc: 'Proactive guidance that keeps your business audit-ready and penalty-free at all times.',
        tag: 'Available',
      },
    ],
  },
  {
    badge: 'Business Management',
    title: 'Run every shop from one place',
    description: 'Whether you have one store or a hundred branches — manage everything from a single, unified dashboard.',
    gradient: 'from-amber-500/10 via-amber-500/5 to-transparent',
    features: [
      {
        icon: <Building2 className="h-5 w-5" />,
        title: 'Multi-Shop Management',
        desc: 'Manage multiple shops, branches and entities under a single account with ease.',
        tag: 'Available',
      },
      {
        icon: <LayoutDashboard className="h-5 w-5" />,
        title: 'Centralized Dashboard',
        desc: 'One unified view of compliance health across all your businesses and locations.',
        tag: 'Available',
      },
      {
        icon: <Share2 className="h-5 w-5" />,
        title: 'Document Sharing',
        desc: 'Share verified documents with CAs, auditors and banks in a single tap — instantly.',
        tag: 'Available',
      },
    ],
  },
];

const integrations = [
  { name: 'GST', desc: 'Goods & Services Tax registration sync.', color: 'from-blue-500/20 to-blue-600/10' },
  { name: 'FSSAI', desc: 'Food safety license verification & sync.', color: 'from-emerald-500/20 to-emerald-600/10' },
  { name: 'Udyam / MSME', desc: 'MSME registration & benefits sync.', color: 'from-orange-500/20 to-orange-600/10' },
  { name: 'Trade License', desc: 'Municipal trade license verification.', color: 'from-purple-500/20 to-purple-600/10' },
  { name: 'DigiLocker', desc: 'National document framework integration.', color: 'from-cyan-500/20 to-cyan-600/10' },
];

export default function FeaturesPage() {
  const openComingSoon = useComingSoon();

  return (
    <>
      <PageHero
        badge="Features"
        title="Everything you need to stay"
        highlight="100% compliant"
        subtitle="A single, opinionated platform that handles documents, deadlines and government requirements — so you can focus on running your business."
      >
        <button
          onClick={() =>
            openComingSoon({
              title: 'Product Demo — Coming Soon',
              description:
                'An interactive product demo is on the way. Join the waitlist and we will notify you the moment it is live.',
            })
          }
          className="inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-brand)] px-5 py-3 text-sm font-semibold  shadow-glow transition hover:opacity-95 cursor-pointer"
        >
          <Zap className="h-4 w-4" />
          See it in action
          <ArrowUpRight className="h-4 w-4" />
        </button>
      </PageHero>

      {categories.map((cat, ci) => (
        <section
          key={cat.badge}
          className={`relative py-20 border-t border-border overflow-hidden ${
            ci % 2 === 1 ? 'bg-gradient-to-b from-transparent to-brand-soft/20 dark:to-brand-soft/5' : ''
          }`}
        >

          
          <div className="mx-auto max-w-7xl px-4 relative">
            <div className="grid gap-10 lg:grid-cols-5">
              {/* Left content */}
              <div className="lg:col-span-2">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
                  {cat.badge}
                </div>
                <h2 className="mt-4 font-display text-2xl font-extrabold tracking-tight text-ink sm:text-3xl">
                  {cat.title}
                </h2>
                <p className="mt-4 text-base text-ink-soft leading-relaxed">{cat.description}</p>
                
                {/* Feature count badge */}
                <div className="mt-6 flex items-center gap-2 text-sm text-ink-soft">
                  <CheckCircle className="h-4 w-4 text-emerald-500" />
                  <span>{cat.features.length} features available</span>
                </div>
              </div>

              {/* Right feature cards */}
              <div className="lg:col-span-3">
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {cat.features.map((f) => (
                    <div
                      key={f.title}
                      className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-card"
                    >
                      <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[var(--gradient-brand)] opacity-0 blur-2xl transition group-hover:opacity-20" />
                      <div className="relative">
                        <div className="flex items-center justify-between">
                          <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/10 dark:bg-brand-soft/10">
                            {f.icon}
                          </div>
                          <span className="rounded-md bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700 ring-1 ring-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400 dark:ring-emerald-800/40">
                            {f.tag}
                          </span>
                        </div>
                        <h3 className="mt-5 font-display text-base font-bold text-ink">{f.title}</h3>
                        <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Future Integrations */}
      <section className="relative py-24 border-t border-border overflow-hidden">

        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
              <RefreshCw className="h-3 w-3" /> Future Integrations
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Connected to every authority
            </h2>
            <p className="mt-4 text-base text-ink-soft sm:text-lg">
              Direct sync with India's key government and compliance frameworks — rolling out soon.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {integrations.map((int) => (
              <button
                key={int.name}
                onClick={() =>
                  openComingSoon({
                    title: `${int.name} Integration — Coming Soon`,
                    description:
                      'We are actively building this integration and it will be available in a future release.',
                  })
                }
                className="group text-left rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-card cursor-pointer"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${int.color} opacity-30 dark:opacity-10 rounded-2xl pointer-events-none`} />
                <div className="relative flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/10 dark:bg-brand-soft/10">
                    <Network className="h-5 w-5" />
                  </div>
                  <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 ring-1 ring-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400 dark:ring-amber-800/40">
                    Soon
                  </span>
                </div>
                <h3 className="relative mt-5 font-display text-base font-bold text-ink">{int.name}</h3>
                <p className="relative mt-1.5 text-sm text-ink-soft leading-relaxed">{int.desc}</p>
              </button>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs text-ink-soft">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              AES-256 Encrypted
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              ISO 27001 Certified
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Govt API Compliant
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-emerald-500" />
              Data Residency India
            </div>
          </div>
        </div>
      </section>
    </>
  );
}