import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Lock,
  Mail,
  ShieldCheck,
  Send,
  Check,
  AtSign,
  Globe,
  Camera,
  Code2,
  Heart,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { useComingSoon } from '../context/ComingSoonContext';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const openComingSoon = useComingSoon();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 2500);
  };

  const soon = (title) => () =>
    openComingSoon({
      title: `${title} — Coming Soon`,
      description:
        'We are actively building this experience and it will be available in a future release.',
    });

  const columns = [
    {
      heading: 'Product',
      links: [
        { label: 'Features', to: '/features' },
        { label: 'Pricing', to: '/pricing' },
        { label: 'Roadmap', onClick: soon('Roadmap') },
      ],
    },
    {
      heading: 'Company',
      links: [
        { label: 'About Us', to: '/about' },
        { label: 'Careers', to: '/careers' },
        { label: 'Contact', onClick: soon('Contact') },
      ],
    },
    {
      heading: 'Resources',
      links: [
        { label: 'Support Center', to: '/support' },
        { label: 'Documentation', onClick: soon('Documentation') },
        { label: 'FAQs', to: '/support' },
      ],
    },
    {
      heading: 'Legal',
      links: [
        { label: 'Privacy Policy', onClick: soon('Privacy Policy') },
        { label: 'Terms & Conditions', onClick: soon('Terms & Conditions') },
        { label: 'Information Security', onClick: soon('Information Security') },
      ],
    },
  ];

  const socials = [
    { icon: <AtSign className="h-4 w-4" />, label: 'Twitter' },
    { icon: <Globe className="h-4 w-4" />, label: 'LinkedIn' },
    { icon: <Camera className="h-4 w-4" />, label: 'Instagram' },
    { icon: <Code2 className="h-4 w-4" />, label: 'GitHub' },
  ];

  const renderLink = (link) => {
    if (link.to) {
      return (
        <Link to={link.to} className="hover:text-ink transition-colors group inline-flex items-center gap-1">
          {link.label}
          <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all" />
        </Link>
      );
    }
    return (
      <button
        onClick={link.onClick}
        className="text-left hover:text-ink transition-colors group inline-flex items-center gap-1 cursor-pointer"
      >
        {link.label}
        <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all" />
      </button>
    );
  };

  return (
    <footer id="contact" className="relative border-t border-border bg-gradient-to-b from-card/40 to-card/20 pt-20 pb-10">
      {/* Top accent line */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-brand/60 to-transparent" />

      <div className="mx-auto max-w-7xl px-4">
        {/* Top Newsletter banner */}
        <div className="relative overflow-hidden rounded-3xl glass p-6 sm:p-10 shadow-card flex flex-col items-center justify-between gap-6 md:flex-row mb-16">

          <div className="relative max-w-md">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-brand mb-3 dark:bg-brand-soft/10">
              <Mail className="h-3 w-3" /> Stay Updated
            </div>
            <h3 className="font-display text-xl font-bold text-ink">Stay updated on compliance changes</h3>
            <p className="mt-1 text-sm text-ink-soft">
              Get monthly newsletters about critical regulatory updates and tax filing extensions.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="relative w-full max-w-sm flex gap-2">
            <div className="relative grow">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-ink-soft" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter shop owner email"
                required
                className="w-full rounded-xl border border-border bg-card pl-10 pr-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-brand focus:ring-1 focus:ring-brand shadow-soft"
              />
            </div>
            <button
              type="submit"
              disabled={subscribed}
              className="group flex items-center justify-center gap-1.5 rounded-xl bg-[var(--gradient-brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 disabled:opacity-80 cursor-pointer"
            >
              {subscribed ? (
                <>
                  <Check className="h-4 w-4" />
                  Subscribed
                </>
              ) : (
                <>
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  Subscribe
                </>
              )}
            </button>
          </form>
        </div>

        {/* Multi-column grid */}
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-b border-border pb-16">
          {/* Brand col */}
          <div className="sm:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <div className="grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-brand)] shadow-glow">
                <Lock className="h-4 w-4 text-white" />
              </div>
              <span className="font-display text-base font-bold tracking-tight text-ink">
                Dukaan<span className="gradient-text">Locker</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-ink-soft max-w-sm leading-relaxed">
              India's first secure document vault and AI-powered compliance tracker built for small, local businesses, general stores, and MSMEs.
            </p>
            
            {/* Contact info */}
            <div className="mt-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-ink-soft">
                <MapPin className="h-3.5 w-3.5 text-brand" />
                Bengaluru · Mumbai · Delhi NCR, India
              </div>
              <div className="flex items-center gap-2 text-xs text-ink-soft">
                <Mail className="h-3.5 w-3.5 text-brand" />
                <a href="mailto:hello@dukaanlocker.in" className="hover:text-ink transition-colors">hello@duukaanlocker.in</a>
              </div>
            </div>

            {/* Social media */}
            <div className="mt-6 flex items-center gap-2.5">
              {socials.map((s) => (
                <button
                  key={s.label}
                  onClick={soon(s.label)}
                  aria-label={s.label}
                  className="grid h-9 w-9 place-items-center rounded-xl border border-border bg-card text-ink-soft shadow-soft transition hover:-translate-y-0.5 hover:text-brand hover:border-brand/40 hover:shadow-card cursor-pointer"
                >
                  {s.icon}
                </button>
              ))}
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-bold text-ink uppercase tracking-wider mb-4 relative">
                {col.heading}
                <span className="absolute -bottom-1 left-0 w-6 h-0.5 rounded-full bg-[var(--gradient-brand)]" />
              </h4>
              <ul className="mt-6 space-y-3 text-sm text-ink-soft">
                {col.links.map((link) => (
                  <li key={link.label}>{renderLink(link)}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Trust Certifications */}
        <div className="mt-8 flex flex-col items-center justify-between gap-6 md:flex-row text-xs text-ink-soft">
          <div className="flex flex-wrap items-center gap-6">
            <div className="flex items-center gap-1.5 rounded-lg bg-secondary/50 dark:bg-secondary/10 px-2.5 py-1 ring-1 ring-border">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              AES-256 Vault Encrypted
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-secondary/50 dark:bg-secondary/10 px-2.5 py-1 ring-1 ring-border">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              ISO 27001 Certified Data
            </div>
            <div className="flex items-center gap-1.5 rounded-lg bg-secondary/50 dark:bg-secondary/10 px-2.5 py-1 ring-1 ring-border">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Govt-Tech API Sync
            </div>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1">
            <div className="flex items-center gap-1">
              <Heart className="h-3 w-3 text-rose-500" />
              &copy; {new Date().getFullYear()} DukaanLocker. All rights reserved.
            </div>
            <div className="flex items-center gap-1.5 text-[11px]">
              <span>A product by</span>
              <span className="font-semibold text-ink">India Advocacy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}