import React from 'react';
import {
  Scale,
  FileText,
  ShieldAlert,
  Building2,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollRevealAll } from '../hooks/usePremium';

export default function TermsConditions() {
  const containerRef = useScrollRevealAll();

  return (
    <>
      <PageHero
        badge="Legal & Governance"
        title="Terms &"
        highlight="Conditions"
        subtitle="Standard terms of service governing access to DukaanLocker, cloud document storage, automated compliance tracking, and India Advocacy advisory."
      />

      <section className="relative -mt-6 pb-24" ref={containerRef}>
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-3xl glass p-8 sm:p-12 shadow-card ring-1 ring-border space-y-10">
            {/* Header info */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand">Last Updated: September 2026</span>
                <h2 className="mt-1 font-display text-xl font-bold text-ink">Terms of Platform Utilization</h2>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-brand-soft/60 px-3 py-1.5 text-xs font-semibold text-brand dark:bg-brand-soft/20">
                <Scale className="h-4 w-4" /> Binding Legal Agreement
              </div>
            </div>

            {/* 1. Acceptance & Corporate Structure */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-ink">
                1. Acceptance of Terms & Corporate Identity
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                By accessing, browsing, creating an account, or uploading documents to <strong>DukaanLocker</strong> ("Service"), you signify your irrevocable acceptance of these Terms and Conditions ("Terms"). The Service is operated by <strong>India Advocacy</strong>, a brand of <strong>Piquant Consultancy & Technology Services Pvt. Ltd.</strong>, having its technology business incubation seat at Sathyabama Institute of Science and Technology, Chennai, Tamil Nadu 600119.
              </p>
              <p className="text-sm text-ink-soft leading-relaxed">
                If you are entering into this agreement on behalf of a partnership firm, proprietorship, LLP, or private company, you warrant that you possess statutory authority to bind that entity.
              </p>
            </div>

            {/* 2. Platform Scope */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-ink">
                2. Scope of Service Provided
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                DukaanLocker grants you a revocable, non-exclusive, non-transferable license to utilize the following core features:
              </p>
              <div className="grid gap-3 sm:grid-cols-2 pt-2">
                <div className="rounded-xl bg-card p-4 ring-1 ring-border text-xs text-ink-soft">
                  <strong className="block text-ink font-semibold mb-1">Encrypted Vault Storage</strong>
                  Upload, classify, and securely store shop registrations, licenses, and tax documents under AES-256 encryption.
                </div>
                <div className="rounded-xl bg-card p-4 ring-1 ring-border text-xs text-ink-soft">
                  <strong className="block text-ink font-semibold mb-1">Proactive Renewal Engine</strong>
                  Receive algorithmic alerts across WhatsApp, SMS, and email alerting you to forthcoming license expiration dates.
                </div>
                <div className="rounded-xl bg-card p-4 ring-1 ring-border text-xs text-ink-soft">
                  <strong className="block text-ink font-semibold mb-1">CA & Inspector Share Bridge</strong>
                  Generate time-bound, protected web links for authorized Chartered Accountants and audit authorities.
                </div>
                <div className="rounded-xl bg-card p-4 ring-1 ring-border text-xs text-ink-soft">
                  <strong className="block text-ink font-semibold mb-1">AI Regulatory Intelligence</strong>
                  Obtain category-specific statutory compliance roadmaps for your specific commercial sector and geography.
                </div>
              </div>
            </div>

            {/* 3. Advisory Disclaimer */}
            <div className="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-6">
              <h4 className="font-display text-base font-bold text-amber-900 dark:text-amber-300 flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-amber-600 dark:text-amber-400" /> Statutory Disclaimer & Advisory Notice
              </h4>
              <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                While DukaanLocker provides automated reminders and regulatory roadmaps, the ultimate statutory obligation to file tax returns, renew licenses, and pay municipal fees rests with the user. The platform provides compliance software tools and informational guidance, but should not replace bespoke, on-record legal representation unless specifically engaged through India Advocacy’s formal legal consultancy retainers.
              </p>
            </div>

            {/* 4. User Responsibilities */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-ink">
                3. User Account Integrity & Vault Responsibilities
              </h3>
              <ul className="space-y-2 text-sm text-ink-soft">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>You agree to provide true, accurate, and current information regarding your enterprise and license validity periods.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>You are responsible for maintaining the confidentiality of your mobile OTPs and login credentials.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>You shall not upload fraudulent, forged, or unlawful files prohibited under the Indian Penal Code or IT Act.</span>
                </li>
              </ul>
            </div>

            {/* 5. Intellectual Property */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-ink">
                4. Intellectual Property Rights
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                All platform interfaces, proprietary algorithms, database schemas, trademarks, logos, and digital branding associated with DukaanLocker and India Advocacy remain the sole intellectual property of <strong>Piquant Consultancy & Technology Services Pvt. Ltd.</strong> You retain complete ownership and intellectual property of the private documents you upload.
              </p>
            </div>

            {/* 6. Governing Law */}
            <div className="border-t border-border pt-8 space-y-3">
              <h3 className="font-display text-lg font-bold text-ink">
                5. Governing Law & Dispute Resolution
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                These Terms shall be interpreted, construed, and enforced in accordance with the laws of the Republic of India. In the event of any legal dispute or claim arising out of the use of this Service, the competent courts located in <strong>Chennai, Tamil Nadu</strong> shall have exclusive jurisdiction.
              </p>
              <p className="text-xs text-ink-soft">
                For questions regarding these Terms, contact our legal counsel at <a href="mailto:support@indiaadvocacy.in" className="text-brand hover:underline font-semibold">support@indiaadvocacy.in</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
