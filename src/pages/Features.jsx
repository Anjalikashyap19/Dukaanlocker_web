import { useEffect, useRef, useState } from 'react';
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
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle,
  LockKeyhole,
  ScanLine,
  ChevronRight
} from 'lucide-react';
import PageHero from '../components/PageHero';
import SpotlightText from '../components/SpotlightText';
import MsmeOnboardingSection from '../components/MsmeOnboardingSection';
import AuthorityIntegrations from '../components/AuthorityIntegrations';
import { useComingSoon } from '../context/ComingSoonContext';
import './Features.css';

const categories = [
  {
    badge: 'Document Management', title: 'Your entire business, securely stored', shortTitle: 'Business vault',
    description: 'A bank-grade vault for every license, registration, and certificate your business needs — accessible anywhere, anytime.',
    accent: '#22c55e', accentRgb: '34, 197, 94',
    features: [
      { icon: <FolderLock className="h-5 w-5" />, title: 'Secure Document Storage', desc: 'Bank-grade AES-256 encrypted vault for every license, registration and certificate.', tag: 'Available' },
      { icon: <Cloud className="h-5 w-5" />, title: 'Cloud Backup', desc: 'Access your documents anywhere, anytime, on any device — always backed up securely.', tag: 'Available' },
      { icon: <Files className="h-5 w-5" />, title: 'Multi-Document Support', desc: 'Store PDFs, images and scans of every document type in one organized, searchable place.', tag: 'Available' },
    ],
  },
  {
    badge: 'Compliance Tracking', title: 'Never miss a deadline again', shortTitle: 'Deadline radar',
    description: 'Automatic monitoring of every expiry date with smart, multi-channel alerts that give you weeks of notice.',
    accent: '#38bdf8', accentRgb: '56, 189, 248',
    features: [
      { icon: <CalendarClock className="h-5 w-5" />, title: 'Expiry Monitoring', desc: 'Automatic tracking of every license expiry date across all your registrations in real-time.', tag: 'Available' },
      { icon: <BellRing className="h-5 w-5" />, title: 'Renewal Reminders', desc: 'Smart, multi-channel alerts via SMS, WhatsApp and email — weeks in advance, not days.', tag: 'Available' },
      { icon: <LayoutDashboard className="h-5 w-5" />, title: 'Compliance Dashboard', desc: 'A live business health score and at-a-glance compliance overview for your entire portfolio.', tag: 'Available' },
    ],
  },
  {
    badge: 'AI Assistant', title: 'Compliance intelligence, built in', shortTitle: 'AI copilot',
    description: 'Our AI analyzes your business profile and returns a personalized compliance checklist — in seconds.',
    accent: '#a855f7', accentRgb: '168, 85, 247',
    features: [
      { icon: <Brain className="h-5 w-5" />, title: 'Business-Specific Recommendations', desc: 'AI analyses your business type and tells you exactly what you legally need to operate.', tag: 'Available' },
      { icon: <FileCheck className="h-5 w-5" />, title: 'Required Document Suggestions', desc: 'Instantly know which licenses, permits and tax registrations apply to your specific business.', tag: 'Available' },
      { icon: <Lightbulb className="h-5 w-5" />, title: 'Compliance Insights', desc: 'Proactive guidance that keeps your business audit-ready and penalty-free at all times.', tag: 'Available' },
    ],
  },
  {
    badge: 'Business Management', title: 'Run every shop from one place', shortTitle: 'Command center',
    description: 'Whether you have one store or a hundred branches — manage everything from a single, unified dashboard.',
    accent: '#f59e0b', accentRgb: '245, 158, 11',
    features: [
      { icon: <Building2 className="h-5 w-5" />, title: 'Multi-Shop Management', desc: 'Manage multiple shops, branches and entities under a single account with ease.', tag: 'Available' },
      { icon: <LayoutDashboard className="h-5 w-5" />, title: 'Centralized Dashboard', desc: 'One unified view of compliance health across all your businesses and locations.', tag: 'Available' },
      { icon: <Share2 className="h-5 w-5" />, title: 'Document Sharing', desc: 'Share verified documents with CAs, auditors and banks in a single tap — instantly.', tag: 'Available' },
    ],
  },
];


function PhoneScene({ activeIndex }) {
  const currentCategory = categories[activeIndex] || categories[0];

  return (
    <div className="glass-widget-box">
      {/* Static Single Phone Mockup - Frame stays rock-solid in place */}
      <div
        className="phone-mockup"
        style={{
          '--feature-accent': currentCategory.accent,
          '--feature-accent-rgb': currentCategory.accentRgb,
        }}
      >
        {/* Dynamic Island / Notch */}
        <div className="phone-notch">
          <div className="phone-speaker" />
          <div className="phone-camera" />
        </div>

        {/* Status Bar */}
        <div className="phone-status-bar">
          <span className="phone-time">9:41</span>
          <div className="phone-status-icons">
            <svg width="17" height="11" viewBox="0 0 17 11" fill="none">
              <path d="M16 3L16 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 1L12 10" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M8 3L8 8" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <path d="M4 5L4 6" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
              <path d="M7.5 11C11.6421 11 15 7.64214 15 3.5C15 2.5 14.5 1 13 0C10.5 2.5 7.5 3.5 7.5 3.5C7.5 3.5 4.5 2.5 2 0C0.5 1 0 2.5 0 3.5C0 7.64214 3.35786 11 7.5 11Z" fill="white" />
            </svg>
            <svg width="25" height="12" viewBox="0 0 25 12" fill="none">
              <rect x="1" y="1" width="21" height="10" rx="3" stroke="white" strokeWidth="1.5" />
              <rect x="3" y="3" width="13" height="6" rx="1.5" fill="white" />
              <path d="M24 4V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        {/* Static dukaanlocker App Top Bar */}
        <div className="phone-app-header">
          <div className="phone-app-brand">
            <span
              className="phone-app-logo transition-colors duration-500"
              style={{ background: currentCategory.accent }}
            >
              <LockKeyhole className="h-3 w-3" />
            </span>
            dukaanlocker
          </div>
          <span
            className="phone-app-secure transition-colors duration-500"
            style={{ color: currentCategory.accent }}
          >
            <ShieldCheck className="h-3.5 w-3.5" /> SECURE
          </span>
        </div>

        {/* Screen Viewport with smooth vertical scrolling track */}
        <div className="phone-screen-viewport">
          <div
            className="phone-screen-track"
            style={{
              transform: `translateY(-${activeIndex * 100}%)`,
            }}
          >
            {categories.map((cat, idx) => (
              <div
                key={cat.badge}
                className={`phone-screen-slide ${idx === activeIndex ? 'is-active-slide' : ''}`}
                style={{
                  '--feature-accent': cat.accent,
                  '--feature-accent-rgb': cat.accentRgb,
                }}
              >
                {/* Category Header Row */}
                <div className="phone-app-title-row">
                  <div className="flex items-center justify-between">
                    <span className="phone-step-counter">
                      0{idx + 1} / 0{categories.length}
                    </span>
                    <span
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wider"
                      style={{
                        background: `rgba(${cat.accentRgb}, 0.15)`,
                        color: cat.accent,
                        border: `1px solid rgba(${cat.accentRgb}, 0.3)`,
                      }}
                    >
                      {cat.badge}
                    </span>
                  </div>
                  <h3 className="phone-app-title">{cat.shortTitle}</h3>
                </div>

                {/* Feature Mini Cards */}
                <div className="phone-feature-list">
                  {cat.features.slice(0, 2).map((feature, fIndex) => (
                    <div className="phone-feature-card" key={feature.title}>
                      <div className="phone-feature-icon">{feature.icon}</div>
                      <div className="phone-feature-text">
                        <h4>{feature.title}</h4>
                        <p>{fIndex === 0 ? 'Verified & Synced' : '24/7 Active'}</p>
                      </div>
                      <div className="phone-feature-check">
                        <CheckCircle className="h-3.5 w-3.5" />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Rich Central Visual / Image Card */}
                <div className="phone-central-image mt-3 flex-1 flex items-center justify-center">
                  {idx === 0 && (
                    <div
                      className="doc-security-image"
                      style={{
                        background: 'rgba(34, 197, 94, 0.08)',
                        border: '1px solid rgba(34, 197, 94, 0.25)',
                        padding: '1.2rem',
                        borderRadius: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        boxShadow: 'inset 0 0 30px rgba(34,197,94,0.08)',
                      }}
                    >
                      <div className="relative mb-2">
                        <FolderLock className="w-10 h-10 text-green-400" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
                        </span>
                      </div>
                      <div className="text-[11px] text-green-400 font-bold tracking-wider uppercase mb-0.5">
                        Vault Encrypted
                      </div>
                      <div className="text-[8px] text-green-400/70 font-mono">
                        AES-256 BANK-GRADE STORAGE
                      </div>
                      <div className="mt-2.5 w-full bg-black/40 rounded-lg p-2 border border-green-500/20 text-[9px] flex items-center justify-between">
                        <span className="text-white/80">GSTIN • FSSAI • MSME</span>
                        <span className="text-green-400 font-semibold font-mono">100% SECURE</span>
                      </div>
                    </div>
                  )}

                  {idx === 1 && (
                    <div
                      className="doc-security-image"
                      style={{
                        background: 'rgba(56, 189, 248, 0.08)',
                        border: '1px solid rgba(56, 189, 248, 0.25)',
                        padding: '1.2rem',
                        borderRadius: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        boxShadow: 'inset 0 0 30px rgba(56,189,248,0.08)',
                      }}
                    >
                      <div className="relative mb-2">
                        <CalendarClock className="w-10 h-10 text-sky-400" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500" />
                        </span>
                      </div>
                      <div className="text-[11px] text-sky-400 font-bold tracking-wider uppercase mb-0.5">
                        Deadline Radar
                      </div>
                      <div className="text-[8px] text-sky-400/70 font-mono">
                        24/7 REAL-TIME EXPIRY TRACKING
                      </div>
                      <div className="mt-2.5 w-full bg-black/40 rounded-lg p-2 border border-sky-500/20 text-[9px] flex items-center justify-between">
                        <span className="text-white/80">Trade License (4d left)</span>
                        <span className="text-amber-400 font-semibold font-mono">ALERT SENT</span>
                      </div>
                    </div>
                  )}

                  {idx === 2 && (
                    <div
                      className="doc-security-image"
                      style={{
                        background: 'rgba(168, 85, 247, 0.08)',
                        border: '1px solid rgba(168, 85, 247, 0.25)',
                        padding: '1.2rem',
                        borderRadius: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        boxShadow: 'inset 0 0 30px rgba(168,85,247,0.08)',
                      }}
                    >
                      <div className="relative mb-2">
                        <Brain className="w-10 h-10 text-purple-400" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500" />
                        </span>
                      </div>
                      <div className="text-[11px] text-purple-400 font-bold tracking-wider uppercase mb-0.5">
                        AI Compliance Copilot
                      </div>
                      <div className="text-[8px] text-purple-400/70 font-mono">
                        INTELLIGENT VERIFICATION
                      </div>
                      <div className="mt-2.5 w-full bg-black/40 rounded-lg p-2 border border-purple-500/20 text-[9px] flex items-center justify-between">
                        <span className="text-white/80">Checklist: 4/5 complete</span>
                        <span className="text-purple-300 font-semibold font-mono">99% ACCURACY</span>
                      </div>
                    </div>
                  )}

                  {idx === 3 && (
                    <div
                      className="doc-security-image"
                      style={{
                        background: 'rgba(245, 158, 11, 0.08)',
                        border: '1px solid rgba(245, 158, 11, 0.25)',
                        padding: '1.2rem',
                        borderRadius: '1.25rem',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '100%',
                        boxShadow: 'inset 0 0 30px rgba(245,158,11,0.08)',
                      }}
                    >
                      <div className="relative mb-2">
                        <Building2 className="w-10 h-10 text-amber-400" />
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75" />
                          <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500" />
                        </span>
                      </div>
                      <div className="text-[11px] text-amber-400 font-bold tracking-wider uppercase mb-0.5">
                        Command Center
                      </div>
                      <div className="text-[8px] text-amber-400/70 font-mono">
                        MULTI-SHOP SYNC &amp; CA SHARING
                      </div>
                      <div className="mt-2.5 w-full bg-black/40 rounded-lg p-2 border border-amber-500/20 text-[9px] flex items-center justify-between">
                        <span className="text-white/80">3 Stores • 1 Account</span>
                        <span className="text-amber-400 font-semibold font-mono">IN SYNC</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer in slide */}
                <div className="phone-app-footer mt-auto">
                  <div className="phone-status-indicator">
                    <ScanLine className="h-3.5 w-3.5" style={{ color: cat.accent }} />
                    Status: optimal
                  </div>
                  <div className="phone-signal-bars">
                    <i /><i /><i />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom iOS Home Indicator */}
        <div className="phone-home-indicator-bar" />
      </div>
    </div>
  );
}


function FeatureJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      const triggerY = window.innerHeight * 0.45;
      let closestIndex = 0;
      let minDistance = Infinity;

      stepRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        const elementPoint = rect.top + rect.height * 0.25;
        const distance = Math.abs(elementPoint - triggerY);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToStep = (index) => {
    const el = stepRefs.current[index];
    if (!el) return;
    if (window.__lenis) {
      window.__lenis.scrollTo(el, { duration: 1.0 });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="feature-journey" aria-labelledby="feature-journey-title">
      <div className="feature-journey-intro">
        <div className="feature-eyebrow"><Sparkles className="h-3.5 w-3.5" /> Product experience</div>
        <p>One secure workspace, four intelligent layers.</p>
        <span>Each module moves your business closer to effortless compliance.</span>
      </div>
      <div className="feature-journey-layout">
        <aside className="feature-scene-column">
          <PhoneScene activeIndex={activeIndex} />
          <div className="feature-progress" aria-label={`Viewing step ${activeIndex + 1} of ${categories.length}`}>
            {categories.map((category, index) => (
              <button
                type="button"
                onClick={() => scrollToStep(index)}
                className={`feature-progress-dot ${index === activeIndex ? 'is-active' : ''}`}
                key={category.badge}
                aria-label={`Jump to ${category.title}`}
              >
                <i />
                <b>{String(index + 1).padStart(2, '0')}</b>
              </button>
            ))}
          </div>
        </aside>
        <div className="feature-step-list">
          {categories.map((category, categoryIndex) => (
            <article
              className={`feature-scroll-step ${activeIndex === categoryIndex ? 'is-active' : ''}`}
              data-step={categoryIndex}
              key={category.badge}
              ref={(element) => { stepRefs.current[categoryIndex] = element; }}
            >
              <div className="feature-step-number">0{categoryIndex + 1}</div>
              <div className="feature-step-copy">
                <div className="feature-step-badge" style={{ '--step-accent': category.accent, '--step-accent-rgb': category.accentRgb }}><span className="feature-step-badge-dot" />{category.badge}</div>
                <h2 id={categoryIndex === 0 ? 'feature-journey-title' : undefined}>{category.title}</h2>
                <p>{category.description}</p>
              </div>
              <div className="feature-detail-stack">
                {category.features.map((feature, featureIndex) => (
                  <div className="feature-detail-card" key={feature.title}>
                    <div className="feature-detail-icon" style={{ '--step-accent': category.accent, '--step-accent-rgb': category.accentRgb }}>{feature.icon}</div>
                    <div><div className="feature-detail-title"><h3>{feature.title}</h3><span>{feature.tag}</span></div><p>{feature.desc}</p></div>
                    <span className="feature-detail-index">0{featureIndex + 1}</span>
                  </div>
                ))}
              </div>
              <div className="feature-step-continue"><span>{categoryIndex === categories.length - 1 ? 'Your entire workspace, in sync' : 'Keep scrolling to unlock the next layer'}</span><ChevronRight className="h-4 w-4" /></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


export default function FeaturesPage() {
  const openComingSoon = useComingSoon();

  return (
    <>
      <PageHero
        badge="Features"
        title="Everything you need to stay"
        highlight="100% compliant"
        subtitle="A single, opinionated platform that handles documents, deadlines and government requirements — so you can focus on running your business."
        containerMaxWidth="max-w-4xl"
        illuminatedLine={
          <SpotlightText text="your business documents stay protected while you stay focused on your business" />
        }
      >
        <button
          onClick={() => openComingSoon({ title: 'Product Demo — Coming Soon', description: 'An interactive product demo is on the way. Join the waitlist and we will notify you the moment it is live.' })}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-glow transition hover:opacity-95"
          style={{ background: 'var(--gradient-brand)' }}
        >
          <Zap className="h-4 w-4" /> See it in action <ArrowUpRight className="h-4 w-4" />
        </button>
      </PageHero>
      <FeatureJourney />
      <MsmeOnboardingSection />
      <AuthorityIntegrations />
    </>
  );
}
