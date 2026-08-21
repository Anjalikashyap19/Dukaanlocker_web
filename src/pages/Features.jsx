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
  Network,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Zap,
  CheckCircle,
  LockKeyhole,
  ScanLine,
  ChevronRight,
  Briefcase,
  Store,
  BadgeCheck,
  Building,
  HardDrive,
  RefreshCw
} from 'lucide-react';
import PageHero from '../components/PageHero';
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

const integrations = [
  { name: 'GST', desc: 'Goods & Services Tax registration sync.', accent: '#38bdf8', icon: <Briefcase className="h-10 w-10 text-blue-400" /> },
  { name: 'FSSAI', desc: 'Food safety license verification & sync.', accent: '#22c55e', icon: <BadgeCheck className="h-10 w-10 text-green-400" /> },
  { name: 'Udyam / MSME', desc: 'MSME registration & benefits sync.', accent: '#a855f7', icon: <Store className="h-10 w-10 text-purple-400" /> },
  { name: 'Trade License', desc: 'Municipal trade license verification.', accent: '#f59e0b', icon: <Building className="h-10 w-10 text-yellow-400" /> },
  { name: 'DigiLocker', desc: 'National document framework integration.', accent: '#06b6d4', icon: <HardDrive className="h-10 w-10 text-cyan-400" /> },
];

function PhoneScene({ activeIndex }) {
  return (
    <div className="glass-widget-box">
      <div className="phone-stack-container">
        {categories.map((active, index) => {
          let stateClass = '';
          const offset = index - activeIndex;
          
          if (offset === 0) stateClass = 'phone-state-active';
          else if (offset < 0) stateClass = 'phone-state-past';
          else stateClass = 'phone-state-future';

          return (
            <div 
              key={active.badge}
              className={`phone-mockup ${stateClass}`} 
              style={{ 
                '--feature-accent': active.accent, 
                '--feature-accent-rgb': active.accentRgb,
                '--phone-offset': offset,
                zIndex: index
              }}
            >
              {/* Dynamic Island / Notch */}
              <div className="phone-notch">
                <div className="phone-speaker"></div>
                <div className="phone-camera"></div>
              </div>

              {/* Status Bar */}
              <div className="phone-status-bar">
                <span className="phone-time">9:41</span>
                <div className="phone-status-icons">
                  <svg width="17" height="11" viewBox="0 0 17 11" fill="none"><path d="M16 3L16 8" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M12 1L12 10" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M8 3L8 8" stroke="white" strokeWidth="2" strokeLinecap="round"/><path d="M4 5L4 6" stroke="white" strokeWidth="2" strokeLinecap="round"/></svg>
                  <svg width="15" height="11" viewBox="0 0 15 11" fill="none"><path d="M7.5 11C11.6421 11 15 7.64214 15 3.5C15 2.5 14.5 1 13 0C10.5 2.5 7.5 3.5 7.5 3.5C7.5 3.5 4.5 2.5 2 0C0.5 1 0 2.5 0 3.5C0 7.64214 3.35786 11 7.5 11Z" fill="white"/></svg>
                  <svg width="25" height="12" viewBox="0 0 25 12" fill="none"><rect x="1" y="1" width="21" height="10" rx="3" stroke="white" strokeWidth="1.5"/><rect x="3" y="3" width="13" height="6" rx="1.5" fill="white"/><path d="M24 4V8" stroke="white" strokeWidth="1.5" strokeLinecap="round"/></svg>
                </div>
              </div>

              {/* Screen Content */}
              <div className="phone-screen">
                 {/* Top bar like Image 2 */}
                 <div className="phone-app-header">
                    <div className="phone-app-brand">
                       <span className="phone-app-logo"><LockKeyhole className="h-3 w-3" /></span>
                       dukaanlocker
                    </div>
                    <span className="phone-app-secure"><ShieldCheck className="h-3.5 w-3.5" /> SECURE</span>
                 </div>

                 <div className="phone-app-content">
                    <div className="phone-app-title-row">
                       <span className="phone-step-counter">0{index + 1} / 0{categories.length}</span>
                       <h3 className="phone-app-title">{active.shortTitle}</h3>
                    </div>
                    
                    <div className="phone-feature-list">
                       {active.features.map((feature, fIndex) => (
                          <div className="phone-feature-card" key={feature.title} style={{ '--row-delay': `${fIndex * 100}ms` }}>
                             <div className="phone-feature-icon">{feature.icon}</div>
                             <div className="phone-feature-text">
                                <h4>{feature.title}</h4>
                                <p>{fIndex === 0 ? 'Synced now' : fIndex === 1 ? 'Always on' : 'Ready for you'}</p>
                             </div>
                             <div className="phone-feature-check"><CheckCircle className="h-4 w-4" /></div>
                          </div>
                       ))}
                    </div>

                    {/* Dynamic Abstract Tech visual based on active category */}
                    <div className="phone-central-image" style={{ marginTop: 'auto', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
                      {index === 0 && (
                        <div className="doc-security-image" style={{ background: 'rgba(34, 197, 94, 0.1)', border: '1px solid rgba(34, 197, 94, 0.2)', padding: '2rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', boxShadow: 'inset 0 0 40px rgba(34,197,94,0.1)' }}>
                          <FolderLock className="w-12 h-12 text-green-400 mb-3" />
                          <div className="text-[10px] text-green-400/80 font-mono tracking-widest uppercase mb-1">Vault Locked</div>
                          <div className="text-[8px] text-green-400/50 font-mono">AES-256 ENCRYPTION</div>
                        </div>
                      )}
                      {index === 1 && (
                        <div className="doc-security-image" style={{ background: 'rgba(56, 189, 248, 0.1)', border: '1px solid rgba(56, 189, 248, 0.2)', padding: '2rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', boxShadow: 'inset 0 0 40px rgba(56,189,248,0.1)' }}>
                          <CalendarClock className="w-12 h-12 text-sky-400 mb-3" />
                          <div className="text-[10px] text-sky-400/80 font-mono tracking-widest uppercase mb-1">Active Radar</div>
                          <div className="text-[8px] text-sky-400/50 font-mono">REAL-TIME MONITORING</div>
                        </div>
                      )}
                      {index === 2 && (
                        <div className="doc-security-image" style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.2)', padding: '2rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', boxShadow: 'inset 0 0 40px rgba(168,85,247,0.1)' }}>
                          <Brain className="w-12 h-12 text-purple-400 mb-3" />
                          <div className="text-[10px] text-purple-400/80 font-mono tracking-widest uppercase mb-1">AI Copilot</div>
                          <div className="text-[8px] text-purple-400/50 font-mono">NEURAL VERIFICATION</div>
                        </div>
                      )}
                      {index === 3 && (
                        <div className="doc-security-image" style={{ background: 'rgba(245, 158, 11, 0.1)', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '2rem', borderRadius: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%', boxShadow: 'inset 0 0 40px rgba(245,158,11,0.1)' }}>
                          <Building2 className="w-12 h-12 text-amber-400 mb-3" />
                          <div className="text-[10px] text-amber-400/80 font-mono tracking-widest uppercase mb-1">Central Sync</div>
                          <div className="text-[8px] text-amber-400/50 font-mono">GLOBAL NETWORK NODE</div>
                        </div>
                      )}
                    </div>

                    <div className="phone-app-footer">
                       <div className="phone-status-indicator">
                          <ScanLine className="h-3.5 w-3.5" style={{ color: 'var(--feature-accent)' }} />
                          System status: optimal
                       </div>
                       <div className="phone-signal-bars">
                          <i /><i /><i />
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function FutureIntegrations() {
  return (
    <section className="future-auth-section">
      <div className="auth-background-effects">
         <div className="auth-glow-top"></div>
         <div className="auth-glow-bottom"></div>
      </div>
      
      <div className="auth-container">
        <div className="auth-heading">
          <div className="auth-kicker"><RefreshCw className="h-3.5 w-3.5" /> FUTURE INTEGRATIONS</div>
          <h2>Connected to every authority</h2>
          <p>Direct sync with India's key government and compliance frameworks — rolling out soon.</p>
        </div>

        <div className="auth-network-container">
          {/* Central Shield */}
          <div className="auth-central-shield">
             <div className="shield-ring outer-ring"></div>
             <div className="shield-ring inner-ring"></div>
             <div className="shield-icon-wrapper">
                <ShieldCheck className="h-6 w-6 text-blue-400" />
             </div>
             {/* Lines branching out */}
             <div className="auth-lines">
               <div className="auth-line line-1"></div>
               <div className="auth-line line-2"></div>
               <div className="auth-line line-3"></div>
               <div className="auth-line line-4"></div>
               <div className="auth-line line-5"></div>
             </div>
          </div>

          {/* Cards */}
          <div className="auth-cards-grid">
            {integrations.map((integration) => (
              <div key={integration.name} className="auth-card" style={{ '--card-accent': integration.accent }}>
                 <div className="auth-card-top">
                    <div className="auth-node-icon"><Network className="h-4 w-4" /></div>
                    <span className="auth-badge-soon">Soon</span>
                 </div>
                 <h3>{integration.name}</h3>
                 <p>{integration.desc}</p>
                 <div className="auth-card-visual">
                    {integration.icon}
                    <div className="auth-card-check"><CheckCircle className="h-5 w-5" style={{ color: 'var(--card-accent)' }} /></div>
                 </div>
                 <div className="auth-card-glow"></div>
              </div>
            ))}
          </div>
        </div>

        <div className="auth-trust-row">
          <span><ShieldCheck className="h-4 w-4" /> AES-256 Encrypted</span>
          <span><ShieldCheck className="h-4 w-4" /> ISO 27001 Certified</span>
          <span><ShieldCheck className="h-4 w-4" /> Govt API Compliant</span>
          <span><HardDrive className="h-4 w-4" /> Data Residency India</span>
        </div>
      </div>
    </section>
  );
}

function FeatureJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const stepRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (mostVisible) setActiveIndex(Number(mostVisible.target.dataset.step));
      },
      { rootMargin: '-32% 0px -32% 0px', threshold: [0.15, 0.35, 0.55] }
    );
    stepRefs.current.forEach((step) => step && observer.observe(step));
    return () => observer.disconnect();
  }, []);

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
            {categories.map((category, index) => <span className={index === activeIndex ? 'is-active' : ''} key={category.badge}><i /><b>{String(index + 1).padStart(2, '0')}</b></span>)}
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
      <PageHero badge="Features" title="Everything you need to stay" highlight="100% compliant" subtitle="A single, opinionated platform that handles documents, deadlines and government requirements — so you can focus on running your business.">
        <button
          onClick={() => openComingSoon({ title: 'Product Demo — Coming Soon', description: 'An interactive product demo is on the way. Join the waitlist and we will notify you the moment it is live.' })}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold shadow-glow transition hover:opacity-95"
          style={{ background: 'var(--gradient-brand)' }}
        >
          <Zap className="h-4 w-4" /> See it in action <ArrowUpRight className="h-4 w-4" />
        </button>
      </PageHero>
      <FeatureJourney />
      <FutureIntegrations />
    </>
  );
}
