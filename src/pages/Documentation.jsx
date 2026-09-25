import React, { useState } from 'react';
import {
  BookOpen,
  FolderLock,
  BellRing,
  Share2,
  Building2,
  FileCheck,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  HelpCircle,
  PhoneCall,
  Search,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useScrollRevealAll } from '../hooks/usePremium';

const docTopics = [
  {
    id: 'getting-started',
    icon: <FolderLock className="h-5 w-5" />,
    title: '1. Setting Up Your Store Vault',
    desc: 'How to register your shop and configure your digital document repository.',
    steps: [
      {
        title: 'Select Business Category & Trade Sector',
        detail: 'Choose your retail category (e.g. Kirana/Grocery, Chemist/Pharmacy, Restaurant, Garments, Hardware, Light Manufacturing). DukaanLocker immediately customizes your compliance checklist.',
      },
      {
        title: 'Input Store Location & Municipal Jurisdiction',
        detail: 'Specify your state and municipality to load local Trade License and Shop & Establishment Act bylaws.',
      },
      {
        title: 'Activate Vault Encryption',
        detail: 'Your dedicated AES-256 encrypted partition is initialized on sovereign Indian cloud storage.',
      },
    ],
  },
  {
    id: 'upload-tag',
    icon: <FileCheck className="h-5 w-5" />,
    title: '2. Uploading & Auto-Tagging Documents',
    desc: 'Supported file types and automated license classification.',
    steps: [
      {
        title: 'Upload Clear Document Photos or PDFs',
        detail: 'Snap a photo with your mobile camera or drag-and-drop PDF certificates from your computer.',
      },
      {
        title: 'Specify License Category',
        detail: 'Tag your document as GST Registration, FSSAI Food License, Udyam Certificate, Trade License, Fire NOC, or Weights & Measures Stamping.',
      },
      {
        title: 'Confirm Expiry & Renewal Dates',
        detail: 'Enter the validity period printed on your certificate so our notification engine can schedule alerts.',
      },
    ],
  },
  {
    id: 'renewal-alerts',
    icon: <BellRing className="h-5 w-5" />,
    title: '3. Configuring Proactive Expiry Alerts',
    desc: 'Setting multi-channel notifications to prevent penalties.',
    steps: [
      {
        title: 'Enable WhatsApp Reminders',
        detail: 'Connect your business WhatsApp number to receive alert notifications 60, 30, and 7 days prior to expiry.',
      },
      {
        title: 'SMS & Email Fallback',
        detail: 'Critical notifications are automatically mirrored to SMS and official email to ensure no deadline slips through.',
      },
      {
        title: 'Direct Renewal Portals',
        detail: 'Alert messages include direct links to official government renewal portals for seamless filing.',
      },
    ],
  },
  {
    id: 'ca-sharing',
    icon: <Share2 className="h-5 w-5" />,
    title: '4. Sharing Vault with CAs & Tax Advocates',
    desc: 'Generating secure, password-protected links for your financial advisors.',
    steps: [
      {
        title: 'Select Documents to Bundle',
        detail: 'Choose individual certificates or generate an entire compliance pack (e.g. for annual audit or bank loan review).',
      },
      {
        title: 'Set Expiration & Security Passcode',
        detail: 'Specify link validity (e.g. 24 hours, 7 days) and attach a numeric passcode shared via WhatsApp.',
      },
      {
        title: 'Revoke Access at Any Time',
        detail: 'Once your CA has downloaded the required files, disable the link with a single tap from your dashboard.',
      },
    ],
  },
  {
    id: 'multi-branch',
    icon: <Building2 className="h-5 w-5" />,
    title: '5. Managing Multiple Shops & Outlets',
    desc: 'Supervising compliance health across multiple retail locations.',
    steps: [
      {
        title: 'Add Multiple Outlets to One Account',
        detail: 'Create separate store profiles for branch outlets, godowns, or partner shops under a unified master login.',
      },
      {
        title: 'Assign Branch Staff Permissions',
        detail: 'Allow branch managers to upload local certificates while retaining owner-only administrative control.',
      },
      {
        title: 'Centralized Renewal Calendar',
        detail: 'View all expiring licenses across all your branches in a single, color-coded timeline.',
      },
    ],
  },
];

export default function Documentation() {
  const [activeTopic, setActiveTopic] = useState(docTopics[0].id);
  const containerRef = useScrollRevealAll();

  const currentTopic = docTopics.find((t) => t.id === activeTopic) || docTopics[0];

  return (
    <>
      <PageHero
        badge="Documentation & Knowledge Base"
        title="DukaanLocker User"
        highlight="Guides"
        subtitle="Step-by-step instructions on setting up your store vault, organizing licenses, scheduling renewal alerts, and sharing records securely."
      />

      <section className="relative -mt-6 pb-24" ref={containerRef}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-12 items-start">
            {/* Left navigation sidebar */}
            <div className="lg:col-span-4 space-y-2">
              <div className="rounded-3xl glass p-4 shadow-card ring-1 ring-border sticky top-28">
                <span className="text-[11px] font-bold uppercase tracking-wider text-brand px-3 py-2 block">
                  Documentation Guide
                </span>
                <nav className="space-y-1 mt-1">
                  {docTopics.map((topic) => {
                    const isActive = activeTopic === topic.id;
                    return (
                      <button
                        key={topic.id}
                        onClick={() => setActiveTopic(topic.id)}
                        className={`w-full flex items-center justify-between gap-3 rounded-2xl px-4 py-3 text-left text-xs font-semibold transition-all cursor-pointer ${
                          isActive
                            ? 'bg-brand text-white shadow-soft'
                            : 'text-ink-soft hover:bg-card hover:text-ink'
                        }`}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          {topic.icon}
                          <span className="truncate">{topic.title}</span>
                        </div>
                        <ChevronRight className={`h-4 w-4 shrink-0 ${isActive ? 'text-white' : 'text-ink-soft'}`} />
                      </button>
                    );
                  })}
                </nav>

                <div className="mt-6 pt-4 border-t border-border px-3">
                  <div className="text-xs text-ink-soft">
                    Need technical assistance?
                  </div>
                  <Link
                    to="/contact"
                    className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-brand hover:underline"
                  >
                    <span>Contact Support Team</span>
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Right topic details */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl glass p-8 sm:p-12 shadow-card ring-1 ring-border space-y-8 animate-fade-in" key={currentTopic.id}>
                <div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand dark:bg-brand-soft/10 mb-3">
                    Guide Module
                  </div>
                  <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                    {currentTopic.title}
                  </h2>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">
                    {currentTopic.desc}
                  </p>
                </div>

                <div className="space-y-4 pt-4 border-t border-border">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-brand">
                    Step-by-Step Implementation
                  </h3>

                  <div className="space-y-4">
                    {currentTopic.steps.map((step, idx) => (
                      <div
                        key={step.title}
                        className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border relative pl-14"
                      >
                        <div className="absolute left-5 top-6 grid h-6 w-6 place-items-center rounded-full bg-brand text-[11px] font-bold text-white shadow-soft">
                          {idx + 1}
                        </div>
                        <h4 className="font-display text-sm font-bold text-ink">
                          {step.title}
                        </h4>
                        <p className="mt-1.5 text-xs text-ink-soft leading-relaxed">
                          {step.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Advice Note */}
                <div className="rounded-2xl bg-brand-soft/30 p-5 dark:bg-brand-soft/10 ring-1 ring-brand/20 flex items-start gap-3">
                  <Sparkles className="h-5 w-5 text-brand shrink-0 mt-0.5" />
                  <div className="text-xs text-ink-soft leading-relaxed">
                    <strong className="text-ink font-semibold">Pro-Tip for Dukandars:</strong> We recommend capturing clear photos of certificates in daylight with license registration numbers and date of issuance clearly readable.
                  </div>
                </div>

                {/* Footer navigation */}
                <div className="pt-6 border-t border-border flex flex-wrap items-center justify-between gap-4">
                  <Link
                    to="/faqs"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-ink-soft hover:text-ink"
                  >
                    <HelpCircle className="h-4 w-4" /> Browse FAQs
                  </Link>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-white shadow-soft"
                    style={{ background: 'var(--gradient-brand)' }}
                  >
                    <PhoneCall className="h-3.5 w-3.5" />
                    Request Direct Walkthrough
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
