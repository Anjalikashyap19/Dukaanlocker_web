import React, { useState } from 'react';
import {
  Mail,
  MapPin,
  Clock,
  Phone,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
  MessageSquare,
  HelpCircle,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useScrollRevealAll } from '../hooks/usePremium';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    shopName: '',
    email: '',
    phone: '',
    state: '',
    inquiryType: 'Compliance Advisory',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useScrollRevealAll();
  const officesRef = useScrollRevealAll();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  const offices = [
    {
      city: 'Chennai (Technology & Incubation HQ)',
      institution: 'Sathyabama Institute of Science and Technology',
      address: 'Sathyabama College Rd, Kamaraj Nagar, Semmencheri, Chennai, Tamil Nadu 600119',
      role: 'Core Engineering & Technology Business Incubation',
    },
    {
      city: 'Bhilai (Skills & Research Hub)',
      institution: 'Rungta International Skills University',
      address: 'G.E. Road, Kohka, Kurud, Bhilai, Chhattisgarh 490024',
      role: 'Skill Development & Regulatory Research Partnership',
    },
    {
      city: 'Patna (Regional Compliance Desk)',
      institution: 'India Advocacy North Operations',
      address: 'Bailey Road / Fraser Road Commercial Corridor, Patna, Bihar 800001',
      role: 'MSME Field Legal Assistance & Regional Outreach',
    },
    {
      city: 'Kolkata (Eastern India Hub)',
      institution: 'India Advocacy East Desk',
      address: 'Salt Lake Sector V, Bidhannagar, Kolkata, West Bengal 700091',
      role: 'Trade Advisory & Corporate Liaison',
    },
  ];

  return (
    <>
      <PageHero
        badge="Contact DukaanLocker & India Advocacy"
        title="We're here to protect & support"
        highlight="your business"
        subtitle="Speak with our legal-tech compliance specialists, get onboarding guidance, or visit our university incubation offices."
      />

      <section className="relative -mt-6 pb-20" ref={formRef}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-12 lg:grid-cols-12 items-start">
            {/* Left info column */}
            <div className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl glass p-8 shadow-card ring-1 ring-border">
                <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand dark:bg-brand-soft/10 mb-4">
                  <ShieldCheck className="h-3.5 w-3.5" /> Direct Support
                </div>
                <h2 className="font-display text-2xl font-bold text-ink">
                  How can our compliance team assist you?
                </h2>
                <p className="mt-3 text-sm text-ink-soft leading-relaxed">
                  Whether you need clarification on statutory licensing for your specific shop category or want to safeguard your multi-outlet business records, our team provides prompt, professional assistance.
                </p>

                <div className="mt-6 space-y-4 pt-4 border-t border-border">
                  <div className="flex items-start gap-3.5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-soft/10">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink">Official Email</h4>
                      <a
                        href="mailto:support@indiaadvocacy.in"
                        className="text-sm font-semibold text-brand hover:underline"
                      >
                        support@indiaadvocacy.in
                      </a>
                      <p className="text-xs text-ink-soft mt-0.5">Average response time: &lt; 2 hours</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-soft/10">
                      <Clock className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink">Operating Hours</h4>
                      <p className="text-sm font-semibold text-ink">Monday – Saturday: 9:30 AM – 6:30 PM IST</p>
                      <p className="text-xs text-ink-soft mt-0.5">Automated vault notifications operate 24/7/365</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3.5">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-soft text-brand dark:bg-brand-soft/10">
                      <Building2 className="h-5 w-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-ink">Parent Organization</h4>
                      <p className="text-sm font-semibold text-ink">India Advocacy (Piquant Consultancy & Technology Services Pvt. Ltd.)</p>
                      <p className="text-xs text-ink-soft mt-0.5">Incubated at Sathyabama Institute of Science and Technology</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Link to FAQs */}
              <div className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-ink flex items-center gap-1.5">
                    <HelpCircle className="h-4 w-4 text-brand" /> Looking for immediate answers?
                  </h4>
                  <p className="mt-1 text-xs text-ink-soft">
                    Browse our comprehensive FAQ library covering licenses, vault security, and renewals.
                  </p>
                </div>
                <Link
                  to="/faqs"
                  className="shrink-0 ml-4 rounded-xl bg-brand-soft px-3.5 py-2 text-xs font-semibold text-brand transition hover:bg-brand hover:text-white"
                >
                  View FAQs
                </Link>
              </div>
            </div>

            {/* Right form column */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl glass p-8 sm:p-10 shadow-card ring-1 ring-border">
                {submitted ? (
                  <div className="text-center py-12 animate-fade-in">
                    <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-950/50 dark:text-emerald-400 mb-5">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-ink">Message Received Successfully</h3>
                    <p className="mt-3 text-sm text-ink-soft max-w-md mx-auto leading-relaxed">
                      Thank you for contacting DukaanLocker by India Advocacy. Our compliance officer has received your submission and will get in touch with you shortly at{' '}
                      <span className="font-semibold text-ink">{formData.email || 'your email'}</span>.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({
                          name: '',
                          shopName: '',
                          email: '',
                          phone: '',
                          state: '',
                          inquiryType: 'Compliance Advisory',
                          message: '',
                        });
                      }}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-brand px-5 py-2.5 text-xs font-semibold text-white shadow-soft transition hover:opacity-90"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="border-b border-border pb-4 mb-6">
                      <h3 className="font-display text-xl font-bold text-ink">Send us an inquiry</h3>
                      <p className="mt-1 text-xs text-ink-soft">
                        Fill out the details below and an India Advocacy compliance specialist will review your request.
                      </p>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Ramesh Kumar"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-brand focus:ring-1 focus:ring-brand shadow-soft"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                          Shop / Business Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="shopName"
                          value={formData.shopName}
                          onChange={handleChange}
                          placeholder="e.g. Kumar General Store"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-brand focus:ring-1 focus:ring-brand shadow-soft"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="shop@example.com"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-brand focus:ring-1 focus:ring-brand shadow-soft"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                          Phone Number (WhatsApp) *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-brand focus:ring-1 focus:ring-brand shadow-soft"
                        />
                      </div>
                    </div>

                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                          State / Union Territory
                        </label>
                        <input
                          type="text"
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          placeholder="e.g. Tamil Nadu, Bihar, etc."
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-brand focus:ring-1 focus:ring-brand shadow-soft"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                          Inquiry Nature
                        </label>
                        <select
                          name="inquiryType"
                          value={formData.inquiryType}
                          onChange={handleChange}
                          className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none focus:border-brand focus:ring-1 focus:ring-brand shadow-soft"
                        >
                          <option value="Compliance Advisory">Statutory License & Compliance Advisory</option>
                          <option value="Vault Security">Document Vault & Encryption Setup</option>
                          <option value="Multi-branch">Multi-Branch Store Management</option>
                          <option value="Technical Support">Technical & Onboarding Support</option>
                          <option value="Other">Other Query</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-ink uppercase tracking-wider mb-2">
                        Your Message / Query Details *
                      </label>
                      <textarea
                        required
                        rows="4"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your business, the licenses you manage (GST, FSSAI, Trade, etc.), or any specific questions you have..."
                        className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-brand focus:ring-1 focus:ring-brand shadow-soft"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 disabled:opacity-70 cursor-pointer"
                      style={{ background: 'var(--gradient-brand)' }}
                    >
                      {isSubmitting ? (
                        <span>Submitting Inquiry...</span>
                      ) : (
                        <>
                          <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                          <span>Submit Inquiry to Compliance Team</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Office Locations & Incubation Centers ── */}
      <section className="relative py-20 border-t border-border bg-gradient-to-b from-transparent to-brand-soft/20 dark:to-brand-soft/5" ref={officesRef}>
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand dark:bg-brand-soft/10">
              <MapPin className="h-3.5 w-3.5" /> Nationwide Presence
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-ink">
              Our Incubation Centers & Offices
            </h2>
            <p className="mt-3 text-sm text-ink-soft">
              India Advocacy operates out of premier university technology incubators and regional centers.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {offices.map((office) => (
              <div
                key={office.city}
                className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border card-hover flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 text-brand mb-3">
                    <Building2 className="h-5 w-5" />
                    <span className="text-xs font-bold uppercase tracking-wider">{office.city}</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-ink">{office.institution}</h3>
                  <p className="mt-2 text-xs text-ink-soft leading-relaxed">{office.address}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-border/60">
                  <span className="text-[11px] font-medium text-brand">{office.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
