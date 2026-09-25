import React, { useState } from 'react';
import {
  Search,
  ChevronDown,
  HelpCircle,
  ShieldCheck,
  Building2,
  FileText,
  Clock,
  Sparkles,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from '../components/PageHero';
import { useScrollRevealAll } from '../hooks/usePremium';

const allFaqs = [
  // Getting Started & Vault
  {
    category: 'Vault & Storage',
    q: 'What is DukaanLocker and how does it protect my shop?',
    a: 'DukaanLocker is India\'s dedicated digital document vault and AI compliance engine created by India Advocacy. It allows retail store owners and MSMEs to securely store all business licenses (GST, FSSAI, Trade License, Shop Act, Udyam) in an encrypted vault, track expiry dates automatically, and access documents instantly during inspections or audits.',
  },
  {
    category: 'Vault & Storage',
    q: 'How do I upload and categorize my documents?',
    a: 'You can upload documents in PDF, JPG, PNG, or scanned formats directly from your smartphone or desktop. DukaanLocker automatically tags documents by license type, detects registration numbers and expiration dates, and organizes them into neat, searchable categories.',
  },
  {
    category: 'Vault & Storage',
    q: 'What happens if my phone gets lost or damaged?',
    a: 'Your documents remain completely safe and intact in the cloud. DukaanLocker uses sovereign Indian cloud infrastructure with automated redundant backups. You simply log in from any new device to instantly retrieve all your store records.',
  },

  // Statutory Licenses
  {
    category: 'Licenses & Compliance',
    q: 'Which statutory licenses does DukaanLocker support?',
    a: 'DukaanLocker supports all major central, state, and municipal licenses required by Indian businesses, including GST Registration, FSSAI Food Licenses (Basic, State, Central), Udyam MSME Registration, Municipal Trade Licenses, Shop & Establishment Act Certificates, Fire Safety NOCs, Weights & Measures Stamping Certificates, Labour Registrations, and Pollution Control Certificates.',
  },
  {
    category: 'Licenses & Compliance',
    q: 'How does the automated renewal alert system work?',
    a: 'Once a license is uploaded, DukaanLocker monitors its validity timeline. You receive proactive reminders via WhatsApp, SMS, and email 60 days, 30 days, 15 days, and 2 days before the expiry date, ensuring you never miss a renewal deadline or incur punitive penalties.',
  },
  {
    category: 'Licenses & Compliance',
    q: 'Can DukaanLocker advise me on which licenses my shop legally needs?',
    a: 'Yes. Our AI regulatory engine, backed by India Advocacy\'s legal team, analyzes your trade sector (grocery, pharmacy, restaurant, manufacturing, apparel, electronics), location, and turnover to generate a tailored checklist of mandatory and recommended licenses.',
  },

  // Security & Privacy
  {
    category: 'Security & Privacy',
    q: 'How secure is my business data on DukaanLocker?',
    a: 'All files are encrypted using bank-grade AES-256 encryption at rest and TLS 1.3 in transit. We maintain a zero-knowledge architecture where only you control document access. We strictly follow ISO 27001 standards and the Indian Digital Personal Data Protection (DPDP) Act, 2023.',
  },
  {
    category: 'Security & Privacy',
    q: 'Does DukaanLocker share my business documents with third parties?',
    a: 'No. DukaanLocker and India Advocacy have a strict zero-sale, zero-commercialization privacy policy. Your tax returns, bank details, and government certificates remain completely confidential and sovereign to your enterprise.',
  },

  // Multi-business & CA Sharing
  {
    category: 'Sharing & Multi-Store',
    q: 'Can I manage multiple shops or branch outlets?',
    a: 'Yes. DukaanLocker offers multi-entity management. If you own multiple retail stores, wholesale godowns, or family business outlets, you can switch between them seamlessly under one account and view aggregated compliance status.',
  },
  {
    category: 'Sharing & Multi-Store',
    q: 'How do I share documents with my CA or tax advocate?',
    a: 'You can generate a secure, password-protected, time-restricted link for individual documents or entire compliance bundles. Your CA or tax consultant can view or download the files without needing full administrative access to your account.',
  },

  // India Advocacy & Advisory
  {
    category: 'Legal Advisory',
    q: 'Who is behind DukaanLocker?',
    a: 'DukaanLocker is engineered and operated by India Advocacy (Piquant Consultancy & Technology Services Pvt. Ltd.), an Indian legal-tech firm incubated at Sathyabama Institute of Science and Technology (Chennai) with academic skill partnerships at Rungta International Skills University (Bhilai).',
  },
  {
    category: 'Legal Advisory',
    q: 'Can I get help from human legal advisors if I receive a government notice?',
    a: 'Yes. Through India Advocacy\'s legal panel, DukaanLocker users can request professional legal representation and consultation for municipal inspection notices, GST queries, trademark filing, and regulatory disputes.',
  },
];

const categories = [
  'All Questions',
  'Vault & Storage',
  'Licenses & Compliance',
  'Security & Privacy',
  'Sharing & Multi-Store',
  'Legal Advisory',
];

export default function Faqs() {
  const [selectedCategory, setSelectedCategory] = useState('All Questions');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState(null);
  const containerRef = useScrollRevealAll();

  const filteredFaqs = allFaqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === 'All Questions' || faq.category === selectedCategory;
    const matchesSearch =
      faq.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleAccordion = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <>
      <PageHero
        badge="Help Center & Knowledge Base"
        title="Frequently Asked"
        highlight="Questions"
        subtitle="Clear, verified answers regarding statutory compliance, bank-grade vault encryption, automated expiry alerts, and India Advocacy advisory."
      />

      <section className="relative -mt-6 pb-20" ref={containerRef}>
        <div className="mx-auto max-w-4xl px-4">
          {/* Search Bar */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-soft pointer-events-none" />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setOpenIndex(null);
              }}
              placeholder="Search by license type, security, renewals, or features..."
              className="w-full rounded-2xl border border-border bg-card pl-12 pr-4 py-4 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-brand focus:ring-2 focus:ring-brand/20 shadow-soft transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-10 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setOpenIndex(null);
                }}
                className={`rounded-xl px-4 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-brand text-white shadow-soft'
                    : 'bg-card text-ink-soft border border-border hover:border-brand/40 hover:text-ink'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-3.5">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-16 rounded-3xl bg-card shadow-soft ring-1 ring-border">
                <Search className="mx-auto h-10 w-10 text-ink-soft/60" />
                <h3 className="mt-4 font-display text-lg font-bold text-ink">No matching questions found</h3>
                <p className="mt-2 text-xs text-ink-soft max-w-sm mx-auto">
                  Try adjusting your search keywords or clear the category filter to explore all topics.
                </p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All Questions');
                  }}
                  className="mt-5 rounded-xl bg-brand-soft px-4 py-2 text-xs font-semibold text-brand"
                >
                  Reset Filters
                </button>
              </div>
            ) : (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.q}
                    className={`overflow-hidden rounded-2xl bg-card shadow-soft ring-1 transition-all duration-300 ${
                      isOpen
                        ? 'ring-brand/40 shadow-card bg-card/95'
                        : 'ring-border hover:ring-brand/20 hover:shadow-card'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center justify-between gap-4 p-5 text-left cursor-pointer"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                        <span className="w-fit rounded-md bg-brand-soft/60 px-2 py-0.5 text-[10px] font-bold text-brand dark:bg-brand-soft/20">
                          {faq.category}
                        </span>
                        <span
                          className={`font-display text-sm font-bold transition-colors ${
                            isOpen ? 'text-brand' : 'text-ink'
                          }`}
                        >
                          {faq.q}
                        </span>
                      </div>
                      <ChevronDown
                        className={`h-4 w-4 shrink-0 text-brand transition-transform duration-300 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 pt-1 text-sm text-ink-soft leading-relaxed border-t border-border/50 animate-fade-in">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          {/* Assistance Box */}
          <div className="mt-14 rounded-3xl glass p-8 text-center ring-1 ring-border shadow-card">
            <h3 className="font-display text-xl font-bold text-ink">Still have a question?</h3>
            <p className="mt-2 text-sm text-ink-soft max-w-lg mx-auto leading-relaxed">
              Our legal and technical advisors are available to review your compliance documents or help you configure your dukaan vault.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-xs font-semibold text-white shadow-soft transition hover:opacity-95"
                style={{ background: 'var(--gradient-brand)' }}
              >
                <PhoneCall className="h-3.5 w-3.5" />
                Contact Support Team
              </Link>
              <a
                href="mailto:support@indiaadvocacy.in"
                className="inline-flex items-center gap-2 rounded-xl bg-card border border-border px-5 py-2.5 text-xs font-semibold text-ink shadow-soft hover:border-brand/40"
              >
                Email: support@indiaadvocacy.in
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
