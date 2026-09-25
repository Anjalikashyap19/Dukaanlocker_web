import React from 'react';
import {
  ShieldCheck,
  Lock,
  EyeOff,
  Database,
  FileCheck,
  Building2,
  Mail,
  MapPin,
  Clock,
  CheckCircle2,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useScrollRevealAll } from '../hooks/usePremium';

export default function PrivacyPolicy() {
  const containerRef = useScrollRevealAll();

  return (
    <>
      <PageHero
        badge="Legal & Transparency"
        title="Privacy"
        highlight="Policy"
        subtitle="How DukaanLocker and India Advocacy safeguard your business records and commercial documents in strict compliance with the Indian Digital Personal Data Protection (DPDP) Act, 2023."
      />

      <section className="relative -mt-6 pb-24" ref={containerRef}>
        <div className="mx-auto max-w-4xl px-4">
          <div className="rounded-3xl glass p-8 sm:p-12 shadow-card ring-1 ring-border space-y-10">
            {/* Effective date & intro badge */}
            <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-brand">Effective Date: September 2026</span>
                <h2 className="mt-1 font-display text-xl font-bold text-ink">Commitment to Merchant Confidentiality</h2>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-700 ring-1 ring-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400">
                <ShieldCheck className="h-4 w-4" /> DPDP Act 2023 Compliant
              </div>
            </div>

            {/* 1. Introduction & Ownership */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-ink flex items-center gap-2">
                1. Introduction & Corporate Ownership
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                This Privacy Policy governs the collection, storage, processing, and protection of data on <strong>DukaanLocker</strong> (the "Platform"), an enterprise SaaS product owned, engineered, and operated by <strong>India Advocacy</strong> (legal entity: <em>Piquant Consultancy & Technology Services Pvt. Ltd.</em>), incubated at Sathyabama Institute of Science and Technology, Chennai, Tamil Nadu.
              </p>
              <p className="text-sm text-ink-soft leading-relaxed">
                We respect the privacy of Indian shopkeepers, trade merchants, and MSME founders. When you store documents or manage compliance on DukaanLocker, your records are guarded under rigorous technical, organizational, and sovereign legal protocols.
              </p>
            </div>

            {/* 2. Information Collected */}
            <div className="space-y-4">
              <h3 className="font-display text-lg font-bold text-ink flex items-center gap-2">
                2. Nature of Information Collected
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-card p-5 ring-1 ring-border">
                  <h4 className="text-sm font-bold text-ink flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-brand" /> Account & Profile Data
                  </h4>
                  <p className="text-xs text-ink-soft leading-relaxed">
                    Name, merchant mobile number, official email address, shop name, registered trading address, state, and pincode used for authentication and service alerts.
                  </p>
                </div>

                <div className="rounded-2xl bg-card p-5 ring-1 ring-border">
                  <h4 className="text-sm font-bold text-ink flex items-center gap-1.5 mb-2">
                    <CheckCircle2 className="h-4 w-4 text-brand" /> Vault Documents & Records
                  </h4>
                  <p className="text-xs text-ink-soft leading-relaxed">
                    Digital copies or photos of GST certificates, FSSAI licenses, Udyam MSME certificates, Trade licenses, Shop Act documents, and associated expiry dates uploaded by you.
                  </p>
                </div>
              </div>
            </div>

            {/* 3. Bank-Grade Security & Sovereign Hosting */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-ink flex items-center gap-2">
                3. Encryption & Sovereign Data Storage
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                All vault documents uploaded to DukaanLocker are encrypted using <strong>AES-256 (Advanced Encryption Standard)</strong> at rest and transmitted using <strong>TLS 1.3</strong> protocol. Storage clusters are strictly hosted in Tier-4 Indian sovereign cloud facilities in adherence to Reserve Bank of India (RBI) and Ministry of Electronics & IT (MeitY) data localization norms.
              </p>
              <p className="text-sm text-ink-soft leading-relaxed">
                DukaanLocker employs a zero-knowledge architectural framework: our database administrators and staff have zero access to the decrypted contents of your confidential tax and corporate files.
              </p>
            </div>

            {/* 4. Purpose of Data Processing */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-ink flex items-center gap-2">
                4. Lawful Purpose & Processing
              </h3>
              <ul className="space-y-2 text-sm text-ink-soft">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand mt-2 shrink-0" />
                  <span>To calculate license expiry horizons and dispatch multi-channel reminders via WhatsApp, SMS, and email.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand mt-2 shrink-0" />
                  <span>To map your trade category to applicable statutory laws (e.g. food safety standards, municipal shop acts).</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand mt-2 shrink-0" />
                  <span>To facilitate user-authorized sharing links for certified Chartered Accountants (CAs) and legal advisors.</span>
                </li>
              </ul>
            </div>

            {/* 5. Zero-Sale Policy */}
            <div className="rounded-2xl bg-brand-soft/40 p-6 dark:bg-brand-soft/10 ring-1 ring-brand/20">
              <h4 className="font-display text-base font-bold text-ink flex items-center gap-2">
                <EyeOff className="h-5 w-5 text-brand" /> Zero-Commercialization Guarantee
              </h4>
              <p className="mt-2 text-xs text-ink-soft leading-relaxed">
                India Advocacy and DukaanLocker will <strong>never</strong> sell, rent, monetize, or exchange your commercial records, turnover data, or phone numbers with predatory lending brokers, third-party marketing agencies, or unverified ad networks.
              </p>
            </div>

            {/* 6. User Rights under DPDP Act 2023 */}
            <div className="space-y-3">
              <h3 className="font-display text-lg font-bold text-ink">
                5. Your Rights as a Data Principal
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                In alignment with Chapter III of the Digital Personal Data Protection Act, 2023, you retain sovereign rights over your business data:
              </p>
              <div className="grid gap-3 sm:grid-cols-3 pt-2">
                <div className="rounded-xl bg-card p-4 ring-1 ring-border text-xs text-ink-soft">
                  <strong className="block text-ink font-semibold mb-1">Right to Access</strong>
                  Inspect, download, and extract all uploaded certificates anytime in open formats.
                </div>
                <div className="rounded-xl bg-card p-4 ring-1 ring-border text-xs text-ink-soft">
                  <strong className="block text-ink font-semibold mb-1">Right to Rectify</strong>
                  Update modified business details, renewed registration IDs, and expiration schedules.
                </div>
                <div className="rounded-xl bg-card p-4 ring-1 ring-border text-xs text-ink-soft">
                  <strong className="block text-ink font-semibold mb-1">Right to Erasure</strong>
                  Request irreversible purging of your vault archives and associated account credentials.
                </div>
              </div>
            </div>

            {/* 7. Grievance Officer */}
            <div className="border-t border-border pt-8 space-y-3">
              <h3 className="font-display text-lg font-bold text-ink flex items-center gap-2">
                6. Grievance Redressal & Data Protection Officer
              </h3>
              <p className="text-sm text-ink-soft leading-relaxed">
                Pursuant to the Information Technology Act, 2000 and DPDP Act provisions, any privacy inquiries, data subject requests, or grievances may be directed to our appointed officer:
              </p>
              <div className="rounded-2xl bg-card p-5 ring-1 ring-border text-xs text-ink-soft space-y-1.5">
                <p><strong className="text-ink">Designation:</strong> Data Protection & Grievance Redressal Officer</p>
                <p><strong className="text-ink">Organization:</strong> India Advocacy (Piquant Consultancy & Technology Services Pvt. Ltd.)</p>
                <p><strong className="text-ink">Incubation Address:</strong> Sathyabama Institute of Science and Technology, Semmencheri, Chennai, Tamil Nadu 600119</p>
                <p><strong className="text-ink">Official Email:</strong> <a href="mailto:support@indiaadvocacy.in" className="text-brand hover:underline font-semibold">support@indiaadvocacy.in</a></p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
