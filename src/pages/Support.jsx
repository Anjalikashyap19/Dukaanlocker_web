import React, { useState } from 'react';
import {
  ChevronDown,
  Mail,
  LifeBuoy,
  MessageCircle,
  BookOpen,
  Video,
  Bot,
  Search,
  Sparkles,
  ArrowRight,
  HelpCircle,
  ShieldCheck,
  FileText,
  Building2,
  Clock,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useComingSoon } from '../context/ComingSoonContext';

const faqs = [
  {
    q: 'How do I upload documents?',
    a: 'Once your account is active, you can upload documents directly from your dashboard — drag and drop files, scan with your phone, or fetch them automatically from government portals.',
    category: 'Getting Started',
  },
  {
    q: 'How do compliance reminders work?',
    a: 'DukaanLocker automatically tracks the expiry date of every license and registration, then sends you smart reminders via SMS, WhatsApp and email — weeks before anything is due.',
    category: 'Compliance',
  },
  {
    q: 'Can I manage multiple businesses?',
    a: 'Yes. Our multi-business management lets you run multiple shops, branches and entities from a single centralized dashboard with a unified compliance view.',
    category: 'Account',
  },
  {
    q: 'Is my data secure?',
    a: 'Absolutely. All documents are stored in a bank-grade AES-256 encrypted vault, backed up to the cloud, and protected under ISO 27001 certified data practices.',
    category: 'Security',
  },
  {
    q: 'What document types are supported?',
    a: 'We support all major document types including PDFs, images (JPEG, PNG), and digital certificates. You can store GST registrations, FSSAI licenses, Udyam certificates, trade licenses, and more.',
    category: 'Getting Started',
  },
  {
    q: 'How do I share documents with my CA?',
    a: 'You can generate a secure share link for any document in your vault with a single tap. The recipient gets time-limited access and can view or download based on your permissions.',
    category: 'Account',
  },
];

const contact = [
  {
    icon: <Mail className="h-6 w-6" />,
    title: 'Email Support',
    desc: 'Reach our team at help@dukaanlocker.in for any questions or concerns.',
    action: 'Email Us',
    gradient: 'from-blue-500/20 to-blue-600/10',
  },
  {
    icon: <LifeBuoy className="h-6 w-6" />,
    title: 'Help Center',
    desc: 'Browse comprehensive guides, tutorials and answers to common questions.',
    action: 'Browse Articles',
    gradient: 'from-emerald-500/20 to-emerald-600/10',
  },
  {
    icon: <MessageCircle className="h-6 w-6" />,
    title: 'Live Chat',
    desc: 'Chat with a compliance specialist in real time during business hours.',
    action: 'Start Chat',
    gradient: 'from-purple-500/20 to-purple-600/10',
  },
];

const upcoming = [
  {
    icon: <BookOpen className="h-5 w-5" />,
    title: 'Knowledge Base',
    desc: 'A searchable library of compliance guides, how-tos, and best practices.',
  },
  {
    icon: <Video className="h-5 w-5" />,
    title: 'Video Tutorials',
    desc: 'Step-by-step walkthroughs for every feature and workflow in DukaanLocker.',
  },
  {
    icon: <Bot className="h-5 w-5" />,
    title: 'AI Support Assistant',
    desc: 'Instant answers to your compliance questions powered by our AI engine.',
  },
];

const quickLinks = [
  { icon: <FileText className="h-4 w-4" />, label: 'How to upload documents', category: 'Getting Started' },
  { icon: <Clock className="h-4 w-4" />, label: 'Understanding renewal alerts', category: 'Compliance' },
  { icon: <Building2 className="h-4 w-4" />, label: 'Setting up multiple businesses', category: 'Account' },
  { icon: <ShieldCheck className="h-4 w-4" />, label: 'Data security & encryption', category: 'Security' },
];

export default function Support() {
  const [openIndex, setOpenIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const openComingSoon = useComingSoon();

  const filteredFaqs = searchQuery
    ? faqs.filter(
        (faq) =>
          faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
          faq.a.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : faqs;

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <PageHero
        badge="Support Center"
        title="How can we"
        highlight="help you?"
        subtitle="Find answers, get in touch, and explore everything you need to stay compliant with confidence."
      />

      {/* Quick search */}
      <section className="relative -mt-6 pb-8">
        <div className="mx-auto max-w-2xl px-4">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-soft" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for answers..."
              className="w-full rounded-2xl border border-border bg-card pl-12 pr-4 py-4 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-brand focus:ring-1 focus:ring-brand shadow-soft"
            />
          </div>
        </div>
      </section>

      {/* Quick links */}
      <section className="relative pb-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {quickLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => setOpenIndex(faqs.findIndex((f) => f.q.includes(link.label.split(' ')[0])))}
                className="group flex items-center gap-3 rounded-xl bg-card p-4 shadow-soft ring-1 ring-border transition hover:-translate-y-0.5 hover:shadow-card cursor-pointer text-left"
              >
                <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-soft text-brand ring-1 ring-brand/10 dark:bg-brand-soft/10">
                  {link.icon}
                </div>
                <div className="text-sm font-medium text-ink group-hover:text-brand transition-colors">
                  {link.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-16 border-t border-border">
        <div className="mx-auto max-w-3xl px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
              <HelpCircle className="h-3 w-3" /> FAQs
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Frequently asked questions
            </h2>
            <p className="mt-4 text-base text-ink-soft">
              Everything you need to know about DukaanLocker.
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 rounded-2xl bg-card shadow-soft ring-1 ring-border">
                <Search className="mx-auto h-8 w-8 text-ink-soft" />
                <p className="mt-3 text-sm text-ink-soft">No results found for "{searchQuery}"</p>
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.q}
                    className="overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-border transition hover:shadow-card"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className="rounded-md bg-brand-soft/50 px-2 py-0.5 text-[9px] font-bold text-brand dark:bg-brand-soft/10">
                          {faq.category}
                        </span>
                        <span className="font-display text-sm font-bold text-ink">{faq.q}</span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-brand transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-out ${
                        isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden">
                        <p className="px-5 pb-5 text-sm text-ink-soft leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </section>

      {/* Contact support */}
      <section className="relative py-20 border-t border-border bg-gradient-to-b from-transparent to-brand-soft/20 dark:to-brand-soft/5">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
              Contact Support
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-base text-ink-soft">
              Our team is here to help you with any questions or concerns.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {contact.map((c) => (
              <div
                key={c.title}
                className="group relative overflow-hidden rounded-2xl bg-card p-7 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${c.gradient} opacity-30 dark:opacity-10`} />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-brand)]  shadow-glow">
                    {c.icon}
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-ink">{c.title}</h3>
                  <p className="mt-1.5 grow text-sm text-ink-soft leading-relaxed">{c.desc}</p>
                  <button
                    onClick={() =>
                      openComingSoon({
                        title: `${c.title} — Coming Soon`,
                        description:
                          'We are actively building this support experience and it will be available in a future release.',
                      })
                    }
                    className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-xl bg-[var(--gradient-brand)] px-4 py-2.5 text-sm font-semibold  shadow-glow transition hover:opacity-95 cursor-pointer"
                  >
                    {c.action}
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coming soon resources */}
      <section className="relative py-24 border-t border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
              <Sparkles className="h-3 w-3" /> Coming Soon
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              More ways to get help
            </h2>
            <p className="mt-4 text-base text-ink-soft sm:text-lg">
              We're building richer self-serve support experiences — launching soon.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {upcoming.map((u) => (
              <button
                key={u.title}
                onClick={() =>
                  openComingSoon({
                    title: `${u.title} — Coming Soon`,
                    description:
                      'We are actively building this experience and it will be available in a future release.',
                  })
                }
                className="group text-left rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-card cursor-pointer"
              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/10 dark:bg-brand-soft/10">
                    {u.icon}
                  </div>
                  <span className="rounded-md bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700 ring-1 ring-amber-200/60 dark:bg-amber-950/40 dark:text-amber-400 dark:ring-amber-800/40">
                    Soon
                  </span>
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-ink">{u.title}</h3>
                <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{u.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}