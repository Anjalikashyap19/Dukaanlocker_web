import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Users,
  ShieldCheck,
  Brain,
  FolderLock,
  BellRing,
  Landmark,
  Sparkles,
  Building2,
  Quote,
  ArrowRight,
  CheckCircle2,
  Award,
  Scale,
  FileCheck,
  PhoneCall,
  MapPin,
  Clock,
  Lock,
  FileWarning,
  Layers,
  ChevronRight,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollRevealAll } from '../hooks/usePremium';

function SectionHeader({ badge, title, subtitle }) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
        {badge}
      </div>
      <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-ink-soft sm:text-lg leading-relaxed">{subtitle}</p>}
      <div className="section-line" aria-hidden="true" />
    </div>
  );
}

function StatCard({ value, label, subtext }) {
  return (
    <div className="reveal text-center p-6 rounded-2xl bg-card shadow-soft ring-1 ring-border card-hover">
      <div className="font-display text-3xl font-extrabold gradient-text sm:text-4xl">{value}</div>
      <div className="mt-2 text-sm font-semibold text-ink">{label}</div>
      {subtext && <div className="mt-1 text-xs text-ink-soft">{subtext}</div>}
    </div>
  );
}

export default function About() {
  const statsRef     = useScrollRevealAll();
  const introRef     = useScrollRevealAll();
  const parentRef    = useScrollRevealAll();
  const problemRef   = useScrollRevealAll();
  const solutionRef  = useScrollRevealAll();
  const valuesRef    = useScrollRevealAll();
  const roadmapRef   = useScrollRevealAll();

  const stats = [
    { value: '6.4 Cr+', label: 'MSMEs in India', subtext: 'The engine of national economic growth' },
    { value: '99.9%',   label: 'Sovereign Uptime', subtext: 'Bank-grade cloud infrastructure' },
    { value: '10+ Types', label: 'Statutory Licenses', subtext: 'GST, FSSAI, Udyam, Trade, Shop Act' },
    { value: '4 Cities', label: 'Office Presence', subtext: 'Chennai, Patna, Bhilai & Kolkata' },
  ];

  const problemCards = [
    {
      icon: <Brain className="h-5 w-5" />,
      title: 'Regulatory Complexity & Confusion',
      desc: 'Most dukandars and MSME owners operate without clear legal visibility into whether their business requires GST, FSSAI, Udyam, Trade License, or Shop Act registration.',
    },
    {
      icon: <Layers className="h-5 w-5" />,
      title: 'Fragmented Departmental Portals',
      desc: 'Central, state, and local municipal mandates are distributed across dozens of disconnected websites with disparate login credentials and conflicting standards.',
    },
    {
      icon: <FileWarning className="h-5 w-5" />,
      title: 'Document Vulnerability & Loss',
      desc: 'Physical paper files stored in shop drawers or lost in WhatsApp threads are easily damaged or unavailable during sudden municipal audits and loan reviews.',
    },
    {
      icon: <Clock className="h-5 w-5" />,
      title: 'Punitive Expiry Penalties',
      desc: 'Overlooked renewal deadlines trigger compound penalties, municipal show-cause notices, or business closure orders that threaten livelihoods.',
    },
  ];

  const pillarCards = [
    {
      icon: <FolderLock className="h-6 w-6 text-brand" />,
      title: 'Encrypted Digital Vault',
      desc: 'AES-256 military-grade encrypted storage specifically designed for business certificates, deeds, tax records, and licenses with zero-knowledge access architecture.',
    },
    {
      icon: <Brain className="h-6 w-6 text-brand" />,
      title: 'AI Regulatory Intelligence',
      desc: 'Instant, location-specific compliance guidance tailored to your trade sector (grocery, pharmacy, restaurant, manufacturing, apparel, or electronics).',
    },
    {
      icon: <BellRing className="h-6 w-6 text-brand" />,
      title: 'Proactive Renewal Engine',
      desc: 'Intelligent multi-channel alerts delivered via WhatsApp, SMS, and email 60, 30, and 7 days prior to expiry, eliminating costly late fees.',
    },
    {
      icon: <FileCheck className="h-6 w-6 text-brand" />,
      title: '1-Click CA & Audit Bridge',
      desc: 'Generate time-restricted, password-protected sharing links for chartered accountants, tax advocates, and government inspectors without file risk.',
    },
  ];

  const coreValues = [
    {
      icon: <Scale className="h-5 w-5 text-brand" />,
      title: 'Legal Rigor & Integrity',
      desc: 'Rooted in professional legal expertise from India Advocacy, ensuring all compliance advisory aligns with active statutory enactments.',
    },
    {
      icon: <Users className="h-5 w-5 text-brand" />,
      title: 'Dukandar-First Simplicity',
      desc: 'Engineered for simplicity so that any shopkeeper, regardless of technical background or language preference, can achieve complete compliance in minutes.',
    },
    {
      icon: <Lock className="h-5 w-5 text-brand" />,
      title: 'Zero-Compromise Security',
      desc: 'We treat business documents with sovereign confidentiality. Your data is never sold, shared, or indexed for unauthorized commercial purposes.',
    },
    {
      icon: <Award className="h-5 w-5 text-brand" />,
      title: 'MSME Economic Empowerment',
      desc: 'Our fundamental mission is shielding Indian grassroots entrepreneurs from operational harassment and administrative gridlock.',
    },
  ];

  const roadmapItems = [
    {
      icon: <Landmark className="h-5 w-5" />,
      title: 'Government Portal Auto-Fetch',
      desc: 'Direct API integrations to securely import GSTIN, Udyam, and FSSAI credentials with authenticated single-tap verification.',
      status: 'In Development',
    },
    {
      icon: <ShieldCheck className="h-5 w-5" />,
      title: 'National DigiLocker Bridge',
      desc: 'Harmonize verified corporate identity with national digital public infrastructure under government trust frameworks.',
      status: 'Planned',
    },
    {
      icon: <Sparkles className="h-5 w-5" />,
      title: 'Automated Tax Return Sync',
      desc: 'Intelligent alerts for GSTR-1, GSTR-3B, TDS payments, and state professional tax deadlines tailored to business turnover.',
      status: 'Planned',
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      title: 'Multi-Branch Enterprise Console',
      desc: 'Unified administrative panel enabling multi-outlet merchants to supervise compliance health across all retail locations.',
      status: 'In Development',
    },
  ];

  return (
    <>
      <PageHero
        badge="About DukaanLocker & India Advocacy"
        title="Pioneering legal compliance & security for"
        highlight="India's 6.4 Crore+ MSMEs"
        subtitle="DukaanLocker is India's dedicated digital document vault and AI compliance tracker — built by India Advocacy to shield local businesses and retail stores from compliance chaos and penalties."
      />

      {/* ── Key Metrics Bar ── */}
      <section className="relative -mt-8 pb-10" ref={statsRef}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="reveal-stagger grid grid-cols-2 gap-4 lg:grid-cols-4">
            {stats.map((stat) => (
              <StatCard key={stat.label} value={stat.value} label={stat.label} subtext={stat.subtext} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Corporate Heritage: India Advocacy (iadv) ── */}
      <section className="relative py-16 border-t border-border" ref={parentRef}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="rounded-3xl glass p-8 sm:p-12 shadow-card ring-1 ring-border relative overflow-hidden">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand/10 blur-3xl" aria-hidden="true" />

            <div className="relative grid gap-10 lg:grid-cols-12 items-center">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand dark:bg-brand-soft/10 mb-4">
                  <Landmark className="h-3.5 w-3.5" /> Backed by India Advocacy
                </div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-ink sm:text-3xl">
                  A Flagship Technology Product of Piquant Consultancy & Technology Services
                </h2>
                <p className="mt-4 text-base text-ink-soft leading-relaxed">
                  Founded in 2021, <strong>India Advocacy</strong> (Piquant Consultancy & Technology Services Pvt. Ltd.) is a prominent legal-tech firm committed to democratizing legal, regulatory, and corporate compliance services for Micro, Small, and Medium Enterprises (MSMEs) across India.
                </p>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  To eliminate the deep systemic friction faced by neighborhood merchants (dukandars), India Advocacy engineered <strong>DukaanLocker</strong> — synthesizing statutory legal intelligence with cloud-native security to deliver an accessible compliance operating system.
                </p>

                {/* Academic & Innovation Incubation Badges */}
                <div className="mt-6 pt-6 border-t border-border/70 grid gap-4 sm:grid-cols-2">
                  <div className="flex items-start gap-3 rounded-2xl bg-card/80 p-4 ring-1 ring-border">
                    <Building2 className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Incubated At</h4>
                      <p className="mt-0.5 text-xs text-ink-soft font-medium">Sathyabama Institute of Science and Technology, Chennai</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl bg-card/80 p-4 ring-1 ring-border">
                    <Award className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-xs font-bold text-ink uppercase tracking-wider">Skill Partner</h4>
                      <p className="mt-0.5 text-xs text-ink-soft font-medium">Rungta International Skills University, Bhilai</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap items-center gap-4 text-xs text-ink-soft">
                  <span className="flex items-center gap-1.5 font-medium text-ink">
                    <MapPin className="h-4 w-4 text-brand" /> Pan-India Operations:
                  </span>
                  <span className="rounded-lg bg-card px-2.5 py-1 ring-1 ring-border">Chennai (HQ)</span>
                  <span className="rounded-lg bg-card px-2.5 py-1 ring-1 ring-border">Patna</span>
                  <span className="rounded-lg bg-card px-2.5 py-1 ring-1 ring-border">Bhilai</span>
                  <span className="rounded-lg bg-card px-2.5 py-1 ring-1 ring-border">Kolkata</span>
                </div>
              </div>

              {/* Legal Tech Capability Highlights */}
              <div className="lg:col-span-5 space-y-4">
                <div className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border">
                  <h3 className="text-sm font-bold text-ink flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> Statutory Legal Advisory
                  </h3>
                  <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                    Direct access to legal expertise encompassing GST, Income Tax, Udyam Registration, Trademark/IPR, and Municipal Licensing laws.
                  </p>
                </div>

                <div className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border">
                  <h3 className="text-sm font-bold text-ink flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> MSME Regulatory Safeguards
                  </h3>
                  <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                    Designed to shield retailers from unannounced inspections, unlawful penalties, and sudden operational disruptions.
                  </p>
                </div>

                <div className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border">
                  <h3 className="text-sm font-bold text-ink flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" /> ISO & Encrypted Architecture
                  </h3>
                  <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                    Strict adherence to ISO 27001 data governance protocols and Digital Personal Data Protection (DPDP) Act standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission, Vision & Purpose ── */}
      <section className="relative py-16 border-t border-border" ref={introRef}>
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Strategic Direction"
            title="Our mission and operational purpose"
            subtitle="Transforming Indian retail commerce through accessible regulatory technology."
          />

          <div className="reveal-stagger mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                icon: <Users className="h-6 w-6" />,
                title: 'Who We Are',
                desc: 'A multidisciplinary collective of advocates, software engineers, and tax specialists incubated under leading academic ecosystems to solve real-world compliance headaches for shopkeepers.',
                gradient: 'from-blue-500/20 to-blue-600/10',
              },
              {
                icon: <Target className="h-6 w-6" />,
                title: 'Our Mission',
                desc: 'To eradicate compliance-induced stress for every Indian business owner by delivering automated license tracking, bank-grade document safety, and timely regulatory advice.',
                gradient: 'from-brand/20 to-purple-600/10',
              },
              {
                icon: <Eye className="h-6 w-6" />,
                title: 'Our Vision',
                desc: 'To establish DukaanLocker as the gold standard compliance vault for Bharat — a trusted digital repository ensuring that no business ever loses revenue or peace of mind to expired paperwork.',
                gradient: 'from-purple-500/20 to-brand/10',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-3xl bg-card p-8 shadow-card ring-1 ring-border card-hover"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-50 dark:opacity-20`} />
                <div className="relative">
                  <div
                    className="grid h-12 w-12 place-items-center rounded-xl shadow-glow text-white"
                    style={{ background: 'var(--gradient-brand)' }}
                  >
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

      {/* ── Problem Analysis ── */}
      <section className="relative py-20 border-t border-border" ref={problemRef}>
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="The Challenge"
            title="The compliance reality facing Indian dukandars"
            subtitle="Local merchants drive 30% of India's GDP, yet they are forced to confront an increasingly complex regulatory landscape with fragmented tools."
          />

          <div className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2">
            {problemCards.map((item, idx) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border card-hover"
              >
                <div className="relative flex gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 text-brand ring-1 ring-brand/10 dark:from-brand/10 transition group-hover:scale-110 group-hover:shadow-glow">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-brand uppercase tracking-wider">
                      Critical Friction 0{idx + 1}
                    </span>
                    <h3 className="mt-1 font-display text-base font-bold text-ink">{item.title}</h3>
                    <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DukaanLocker Solution Pillars ── */}
      <section
        className="relative py-20 border-t border-border bg-gradient-to-b from-transparent to-brand-soft/20 dark:to-brand-soft/5"
        ref={solutionRef}
      >
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Platform Architecture"
            title="How DukaanLocker solves it"
            subtitle="One cohesive platform replacing cluttered file cabinets, frantic WhatsApp messages, and confusing government portals."
          />

          <div className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pillarCards.map((item) => (
              <div key={item.title} className="group rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border card-hover">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand/20 to-brand/5 ring-1 ring-brand/10 dark:from-brand/10 transition group-hover:scale-110 group-hover:shadow-glow group-hover:bg-brand group-hover:text-white">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-ink group-hover:text-brand transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Core Values & Ethical Tenets ── */}
      <section className="relative py-20 border-t border-border" ref={valuesRef}>
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Our Principles"
            title="Values that guide our engineering"
            subtitle="Combining technological innovation with unwavering professional accountability."
          />

          <div className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((val) => (
              <div key={val.title} className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border card-hover">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-brand-soft text-brand dark:bg-brand-soft/10 mb-4">
                  {val.icon}
                </div>
                <h3 className="font-display text-base font-bold text-ink">{val.title}</h3>
                <p className="mt-2 text-sm text-ink-soft leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Future Roadmap ── */}
      <section className="relative py-20 border-t border-border" ref={roadmapRef}>
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeader
            badge="Product Vision"
            title="Strategic engineering roadmap"
            subtitle="Continuous platform improvements to stay aligned with evolving Indian GovTech frameworks."
          />

          <div className="reveal-stagger mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {roadmapItems.map((item) => (
              <div key={item.title} className="group relative card-hover rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border">
                <div
                  className="grid h-10 w-10 place-items-center rounded-xl shadow-glow text-white transition group-hover:scale-110"
                  style={{ background: 'var(--gradient-brand)' }}
                >
                  {item.icon}
                </div>
                <div className="flex items-center justify-between mt-4 mb-2">
                  <h3 className="font-display text-base font-bold text-ink leading-snug">{item.title}</h3>
                </div>
                <span
                  className={`inline-block rounded-md px-2 py-0.5 text-[10px] font-bold mb-3 ${
                    item.status === 'In Development'
                      ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400'
                      : 'bg-amber-50 text-amber-700 ring-1 ring-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400'
                  }`}
                >
                  {item.status}
                </span>
                <p className="text-sm text-ink-soft leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Executive Consultation Banner / CTA ── */}
      <section className="relative py-20 border-t border-border">
        <div className="mx-auto max-w-5xl px-4">
          <div className="reveal relative overflow-hidden rounded-3xl glass p-10 text-center shadow-card sm:p-14 ring-1 ring-border">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-brand/5 to-purple-500/5 dark:from-brand/10 dark:to-purple-500/10" aria-hidden="true" />
            <Quote className="mx-auto h-8 w-8 text-brand opacity-60" aria-hidden="true" />
            <h2 className="mt-4 font-display text-2xl font-extrabold text-ink sm:text-3xl">
              Equip Your Dukaan with Sovereign Legal Protection
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-ink-soft leading-relaxed text-sm sm:text-base">
              Speak directly with our legal-tech team or schedule a consultation with an India Advocacy compliance advisor to evaluate your enterprise's regulatory readiness.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95"
                style={{ background: 'var(--gradient-brand)' }}
              >
                <PhoneCall className="h-4 w-4" />
                Contact Legal Advisory Team
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/faqs"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-6 py-3 text-sm font-semibold text-ink shadow-soft transition hover:border-brand/40"
              >
                Explore Compliance FAQs
                <ChevronRight className="h-4 w-4 text-brand" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}