import { useState, useEffect, useRef } from 'react';
import {
  Sparkles,
  ShieldCheck,
  CheckCircle,
  Building2,
  ArrowRight,
  FileText,
  Check,
  Store,
  RefreshCw,
  Lock,
  UploadCloud,
  FolderCheck,
  BadgeCheck,
  HardDrive,
  Zap
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './MsmeOnboardingSection.css';

gsap.registerPlugin(ScrollTrigger);

// Reusable data structure for MSME steps
const MSME_STEPS = [
  {
    stepNumber: '01',
    badge: 'ACTIVE STAGE',
    title: 'Register with your MSME number',
    description:
      'Enter your Udyam/MSME registration number to quickly identify and onboard your registered business without manually filling the same business information again.',
    phoneScreen: 'registration',
    navLabel: 'MSME Registration'
  },
  {
    stepNumber: '02',
    badge: 'ACTIVE STAGE',
    title: 'Bring your business documents in automatically',
    description:
      'Once your business is verified, supported business information and documents can be fetched into DukaanLocker, reducing repetitive uploads and helping you get your digital locker ready faster.',
    phoneScreen: 'documents',
    navLabel: 'Document Fetching'
  }
];

export default function MsmeOnboardingSection() {
  const [activeStep, setActiveStep] = useState(0); // 0: Step 01, 1: Step 02
  const [isRevealed, setIsRevealed] = useState(false);

  const sectionRef = useRef(null);

  // ── Scroll Progress & Sticky Synchronization ──────────────────────────────
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    // 1. Initial entrance reveal via IntersectionObserver
    const revealObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.12 }
    );
    revealObserver.observe(sectionEl);

    // 2. ScrollTrigger integration with Lenis
    const st = ScrollTrigger.create({
      trigger: sectionEl,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true,
      onUpdate: (self) => {
        const p = self.progress;
        if (p > 0.02) {
          setIsRevealed(true);
        }
        // Stage threshold: 0.0 - 0.45 -> Step 01; 0.45 - 1.0 -> Step 02
        if (p >= 0.45) {
          setActiveStep(1);
        } else {
          setActiveStep(0);
        }
      }
    });

    // 3. Fallback scroll handler for window resize or direct jumps
    const handleScrollFallback = () => {
      const rect = sectionEl.getBoundingClientRect();
      const totalDist = sectionEl.offsetHeight - window.innerHeight;
      if (totalDist <= 0) return;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalDist));

      if (rect.top <= window.innerHeight * 0.85) {
        setIsRevealed(true);
      }
      if (progress >= 0.45) {
        setActiveStep(1);
      } else {
        setActiveStep(0);
      }
    };

    window.addEventListener('scroll', handleScrollFallback, { passive: true });

    return () => {
      revealObserver.disconnect();
      st.kill();
      window.removeEventListener('scroll', handleScrollFallback);
    };
  }, []);

  // Smooth scroll jump on manual stage selection
  const handleStepClick = (index) => {
    setActiveStep(index);
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const currentScroll = window.scrollY || document.documentElement.scrollTop;
    const sectionTop = currentScroll + rect.top;
    const trackHeight = sectionRef.current.offsetHeight - window.innerHeight;

    // Scroll to comfortable position for that step
    const targetOffset = index === 0 ? trackHeight * 0.18 : trackHeight * 0.68;
    const targetScroll = sectionTop + targetOffset;

    if (window.__lenis) {
      window.__lenis.scrollTo(targetScroll, { duration: 1.1 });
    } else {
      window.scrollTo({ top: targetScroll, behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className="msme-scroll-track"
      aria-label="MSME Powered Onboarding Feature"
    >
      <div className="msme-sticky-frame">
        {/* Ambient background glows */}
        <div className="msme-bg-glow" aria-hidden="true" />
        <div className="msme-grid-pattern" aria-hidden="true" />

        <div className="msme-container">
          <div className="msme-layout">

            {/* ================================================================
                LEFT COLUMN — HEADLINE, STAGE SELECTOR & OVERLAY CARD STAGE
                ================================================================ */}
            <div className="msme-content-column">
              
              {/* Intro Block */}
              <div className="msme-intro-block">
                <div className={`msme-eyebrow ${isRevealed ? 'is-revealed' : ''}`}>
                  <Sparkles className="h-3.5 w-3.5" /> MSME-POWERED ONBOARDING
                </div>

                <h2 className={`msme-main-heading ${isRevealed ? 'is-revealed' : ''}`}>
                  Start with your MSME number.{' '}
                  <span className="msme-heading-highlight">
                    Let DukaanLocker do the rest.
                  </span>
                </h2>

                <p className={`msme-supporting-copy ${isRevealed ? 'is-revealed' : ''}`}>
                  Use your Udyam/MSME registration number to onboard your business faster. 
                  DukaanLocker verifies your business information and helps bring supported business 
                  documents into one organized workspace.
                </p>
              </div>

              {/* Interactive Stage Switcher Pills */}
              <div className="msme-stage-nav" aria-label="MSME Stage Navigation">
                {MSME_STEPS.map((step, idx) => (
                  <button
                    key={step.stepNumber}
                    type="button"
                    onClick={() => handleStepClick(idx)}
                    className={`msme-stage-pill ${activeStep === idx ? 'is-current' : ''}`}
                    aria-label={`Switch to Step ${step.stepNumber}: ${step.title}`}
                  >
                    <span className="msme-stage-pill-dot" />
                    <span className="msme-stage-pill-num">{step.stepNumber}</span>
                    <span className="msme-stage-pill-label">{step.navLabel}</span>
                  </button>
                ))}
              </div>

              {/* ================================================================
                  FIXED CARD STAGE — STEP 02 OVERLAYS/REPLACES STEP 01
                  ================================================================ */}
              <div className="msme-card-stage" aria-live="polite">
                {MSME_STEPS.map((step, idx) => {
                  const isActive = activeStep === idx;
                  
                  // Animation classes:
                  // Step 01: enters from left, active, or exits upward
                  // Step 02: waits below, or enters active
                  let cardStateClass = '';
                  if (idx === 0) {
                    if (!isRevealed) {
                      cardStateClass = 'is-entering-left';
                    } else if (activeStep === 0) {
                      cardStateClass = 'is-active';
                    } else {
                      cardStateClass = 'is-exited-up';
                    }
                  } else if (idx === 1) {
                    if (activeStep === 1) {
                      cardStateClass = 'is-active';
                    } else {
                      cardStateClass = 'is-waiting-down';
                    }
                  }

                  return (
                    <div
                      key={step.stepNumber}
                      onClick={() => handleStepClick(idx)}
                      className={`msme-step-card ${cardStateClass}`}
                      role="region"
                      aria-label={`Step ${step.stepNumber}: ${step.title}`}
                    >
                      <div className="msme-feature-header">
                        <span className="msme-feature-num-badge">{step.stepNumber}</span>
                        {isActive && (
                          <div className="msme-active-indicator">
                            <span className="msme-active-indicator-pulse" /> {step.badge}
                          </div>
                        )}
                      </div>
                      <h3 className="msme-feature-title">{step.title}</h3>
                      <p className="msme-feature-desc">{step.description}</p>
                    </div>
                  );
                })}
              </div>

              {/* Benefit Chips Row */}
              <div className="msme-benefit-chips">
                <div className="msme-benefit-chip">
                  <Zap className="h-4 w-4" />
                  <span>Faster onboarding</span>
                </div>
                <div className="msme-benefit-chip">
                  <UploadCloud className="h-4 w-4" />
                  <span>Less manual uploading</span>
                </div>
                <div className="msme-benefit-chip">
                  <FolderCheck className="h-4 w-4" />
                  <span>One organized business workspace</span>
                </div>
              </div>

            </div>


            {/* ================================================================
                RIGHT COLUMN — TILTED SMARTPHONE WITH SYNCHRONIZED SCREENS
                ================================================================ */}
            <div className="msme-phone-column">
              <div className="msme-phone-stage">
                
                {/* Ambient pedestal glow */}
                <div className="msme-phone-pedestal-glow" aria-hidden="true" />

                {/* Tilted Smartphone Mockup */}
                <div className="msme-phone-wrapper">
                  <div className="msme-phone-frame">
                    
                    {/* Dynamic Island / Notch */}
                    <div className="msme-phone-notch" aria-hidden="true">
                      <div className="msme-phone-speaker" />
                      <div className="msme-phone-camera" />
                    </div>

                    {/* iOS Status Bar */}
                    <div className="msme-phone-status-bar" aria-hidden="true">
                      <span>9:41</span>
                      <div className="msme-phone-status-icons">
                        <svg width="15" height="11" viewBox="0 0 15 11" fill="none">
                          <path d="M7.5 11C11.64 11 15 7.64 15 3.5C15 2.5 14.5 1 13 0C10.5 2.5 7.5 3.5 7.5 3.5C7.5 3.5 4.5 2.5 2 0C0.5 1 0 2.5 0 3.5C0 7.64 3.36 11 7.5 11Z" fill="white" />
                        </svg>
                        <svg width="22" height="11" viewBox="0 0 25 12" fill="none">
                          <rect x="1" y="1" width="20" height="10" rx="3" stroke="white" strokeWidth="1.5" />
                          <rect x="3" y="3" width="12" height="6" rx="1.5" fill="white" />
                          <path d="M23 4V8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </div>
                    </div>

                    {/* DukaanLocker In-App Header */}
                    <div className="msme-phone-app-header">
                      <div className="msme-phone-brand">
                        <span className="msme-phone-logo">
                          <Lock className="h-3 w-3" />
                        </span>
                        dukaanlocker
                      </div>
                      <span className="msme-phone-secure-badge">
                        <ShieldCheck className="h-3 w-3" /> SECURE
                      </span>
                    </div>

                    {/* Phone Screen Viewport */}
                    <div className="msme-phone-viewport">
                      
                      {/* ──────────────────────────────────────────────────────────
                          SCREEN 1 (STEP 01): MSME / UDYAM REGISTRATION
                          ────────────────────────────────────────────────────────── */}
                      <div className={`msme-phone-slide ${activeStep === 0 ? 'is-active' : 'is-prev'}`}>
                        <span className="msme-screen-badge">
                          <Store className="h-3 w-3" /> MSME Onboarding
                        </span>
                        <h3 className="msme-screen-title">Register Your Business</h3>
                        <p className="msme-screen-desc">
                          Connect your enterprise with your official registration number.
                        </p>

                        <div className="msme-input-group">
                          <div className="msme-input-label">
                            <span>Udyam / MSME Number</span>
                            <span className="text-[10px] text-sky-400 font-mono">GOVT FORMAT</span>
                          </div>
                          <div className="msme-input-box">
                            <Building2 className="h-4 w-4" />
                            <span className="msme-input-value">UDYAM-MH-01-0029481</span>
                            <span className="msme-input-cursor" />
                          </div>
                        </div>

                        <button 
                          type="button" 
                          className="msme-cta-button"
                          onClick={() => handleStepClick(1)}
                        >
                          Verify &amp; Continue <ArrowRight className="h-3.5 w-3.5" />
                        </button>

                        <div className="msme-slide1-trust">
                          <CheckCircle className="h-4 w-4" />
                          <p>
                            Use your registered MSME details for faster business onboarding.
                          </p>
                        </div>

                        <div className="mt-auto pt-3 border-t border-white/10 flex items-center justify-between text-[10px] text-white/50">
                          <span>Status: Awaiting Verification</span>
                          <span className="text-green-400 font-semibold font-mono">READY</span>
                        </div>
                      </div>

                      {/* ──────────────────────────────────────────────────────────
                          SCREEN 2 (STEP 02): AUTOMATIC DOCUMENT FETCHING & SYNC
                          ────────────────────────────────────────────────────────── */}
                      <div className={`msme-phone-slide ${activeStep === 1 ? 'is-active' : 'is-next'}`}>
                        <span className="msme-screen-badge" style={{ color: '#22c55e', background: 'rgba(34, 197, 94, 0.12)', borderColor: 'rgba(34, 197, 94, 0.3)' }}>
                          <BadgeCheck className="h-3 w-3" /> Verified &amp; Auto-Syncing
                        </span>

                        <div className="msme-verify-inline">
                          <div className="msme-verify-pill">
                            <Check className="h-3.5 w-3.5 text-green-400 stroke-[3]" />
                            <span>UDYAM-MH-01 Valid</span>
                          </div>
                          <span className="text-[10px] text-sky-400 font-mono font-bold flex items-center gap-1">
                            <RefreshCw className="h-3 w-3 msme-spin-icon" /> Auto-Importing
                          </span>
                        </div>

                        <div className="msme-progress-bar-bg">
                          <div className="msme-progress-bar-fill" />
                        </div>

                        <div className="msme-doc-list">
                          <div className="msme-doc-card">
                            <div className="msme-doc-icon text-green-400">
                              <Building2 className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="msme-doc-title">Business Profile</p>
                              <p className="msme-doc-detail">Trade Name &amp; Entity Type</p>
                            </div>
                            <span className="msme-doc-badge verified">Verified</span>
                          </div>

                          <div className="msme-doc-card">
                            <div className="msme-doc-icon text-purple-400">
                              <FileText className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="msme-doc-title">MSME Certificate</p>
                              <p className="msme-doc-detail">Govt Issued Registration</p>
                            </div>
                            <span className="msme-doc-badge available">Fetched</span>
                          </div>

                          <div className="msme-doc-card">
                            <div className="msme-doc-icon text-sky-400">
                              <HardDrive className="h-4 w-4" />
                            </div>
                            <div>
                              <p className="msme-doc-title">Business Documents</p>
                              <p className="msme-doc-detail">Stored in private vault</p>
                            </div>
                            <span className="msme-doc-badge synced">Synced</span>
                          </div>
                        </div>

                        <div className="msme-slide3-footer mt-auto">
                          <span className="flex items-center gap-1.5">
                            <ShieldCheck className="h-3.5 w-3.5" /> Bank-grade encrypted
                          </span>
                          <span className="text-green-400 font-mono font-bold">100% READY</span>
                        </div>
                      </div>

                    </div>

                    {/* iOS Home Indicator */}
                    <div className="msme-phone-home-indicator" aria-hidden="true" />
                  </div>
                </div>

                {/* Quick Slide Toggle Controls */}
                <div className="msme-slide-controls" aria-label="Mockup Screen Controls">
                  {MSME_STEPS.map((step, idx) => (
                    <button
                      key={step.stepNumber}
                      type="button"
                      onClick={() => handleStepClick(idx)}
                      className={`msme-slide-btn ${activeStep === idx ? 'is-current' : ''}`}
                      aria-label={`View Step ${step.stepNumber} screen`}
                    >
                      <span className="msme-slide-btn-dot" />
                      {step.stepNumber} {idx === 0 ? 'Register' : 'Docs Synced'}
                    </button>
                  ))}
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
