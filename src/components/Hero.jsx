import React from 'react';
import { ArrowRight, Play, ShieldCheck, Lock, Globe, BellRing, FileCheck, Check, Clock, AlertTriangle } from 'lucide-react';

export default function Hero({ documents, score, renewDocument, onComingSoon }) {
  // Counts of documents based on status
  const activeCount = documents.filter((d) => d.status === 'Active').length;
  const renewCount = documents.filter((d) => d.status === 'Renew Soon').length;
  const actionCount = documents.filter((d) => d.status === 'Action Needed').length;

  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 lg:pt-40">

      <div className="mx-auto grid max-w-7xl gap-12 px-4 lg:grid-cols-2 lg:items-center">
        {/* Left Content Column */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1.5 text-xs font-medium text-ink-soft backdrop-blur">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500 relative">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping"></span>
            </span>
            India's first AI compliance platform for small businesses
          </div>
          
          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            One Platform for <span className="gradient-text">Business Documents,</span> Compliance & Renewals
          </h1>
          
          <p className="mt-6 max-w-xl text-lg text-ink-soft">
            Helping India's <span className="font-semibold text-ink">6.4 Crore+</span> small businesses manage licenses, registrations, renewals, and compliance from a single, secure platform.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={() =>
                onComingSoon?.({
                  title: 'Get Started — Coming Soon',
                  description:
                    'We are actively building the DukaanLocker onboarding experience and it will be available in a future release.',
                })
              }
              className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-brand)] px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 cursor-pointer"
            >
              Get Started Free
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() =>
                onComingSoon?.({
                  title: 'Product Demo — Coming Soon',
                  description:
                    'An interactive product demo is on the way. Join the waitlist and we will notify you the moment it is live.',
                })
              }
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-5 py-3 text-sm font-semibold text-ink shadow-soft transition hover:bg-secondary cursor-pointer"
            >
              <Play className="h-4 w-4 text-brand fill-brand" />
              Watch Demo
            </button>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-ink-soft">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-brand" />
              ISO 27001 grade security
            </div>
            <div className="flex items-center gap-2">
              <Lock className="h-4 w-4 text-brand" />
              Bank-level encryption
            </div>
            <div className="flex items-center gap-2">
              <Globe className="h-4 w-4 text-brand" />
              Available in 12 languages
            </div>
          </div>
        </div>

        {/* Right Dashboard Mockup Column */}
        <div className="relative">

          {/* Floating interactive stats tags */}
          <div className="animate-float absolute -left-6 top-10 z-20 hidden rounded-2xl bg-card px-4 py-3 shadow-card ring-1 ring-border md:block">
            <div className="text-[10px] font-medium uppercase tracking-wider text-ink-soft">Businesses</div>
            <div className="font-display text-xl font-bold text-ink">6.4 Cr+</div>
          </div>

          <div
            className="animate-float absolute -right-4 top-32 z-20 hidden rounded-2xl bg-card px-4 py-3 shadow-card ring-1 ring-border md:block"
            style={{ animationDelay: '1.2s' }}
          >
            <div className="text-[10px] font-medium uppercase tracking-wider text-ink-soft">Documents</div>
            <div className="font-display text-xl font-bold text-ink">60 Cr+</div>
          </div>

          <div
            className="animate-float absolute -bottom-2 left-8 z-20 hidden rounded-2xl bg-card px-4 py-3 shadow-card ring-1 ring-border md:block"
            style={{ animationDelay: '2s' }}
          >
            <div className="text-[10px] font-medium uppercase tracking-wider text-ink-soft">Per Business</div>
            <div className="font-display text-xl font-bold text-ink">10+ Docs</div>
          </div>

          {/* Dashboard Body Mockup */}
          <div className="glass-dark shadow-card relative overflow-hidden rounded-3xl p-3 sm:p-5">
            {/* Store Header bar */}
            <div className="flex items-center justify-between rounded-2xl bg-card/80 px-4 py-3 ring-1 ring-border">
              <div className="flex items-center gap-2">
                <div className="grid h-7 w-7 place-items-center rounded-lg bg-[var(--gradient-brand)]">
                  <Lock className="h-3.5 w-3.5 text-white" />
                </div>
                <div className="text-sm font-semibold text-ink">Sharma General Store</div>
                <span className="ml-1 hidden rounded-md bg-emerald-50 text-emerald-700 px-2 py-0.5 text-[10px] font-bold ring-1 ring-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400 dark:ring-emerald-800/40 sm:inline">
                  VERIFIED
                </span>
              </div>
              <div className="flex items-center gap-2">
                <BellRing className="h-4 w-4 text-ink-soft animate-bounce" />
                <div className="h-7 w-7 rounded-full bg-[var(--gradient-brand)]"></div>
              </div>
            </div>

            {/* Score & Category Stats Grid */}
            <div className="mt-3 grid gap-3 sm:grid-cols-5">
              {/* Compliance score dial */}
              <div className="rounded-2xl bg-card p-4 shadow-soft ring-1 ring-border sm:col-span-2">
                <div className="text-[11px] font-medium uppercase tracking-wider text-ink-soft">Compliance Score</div>
                <div className="mt-2 flex items-end gap-2">
                  <div className="font-display text-4xl font-extrabold text-ink">{score}</div>
                  <div className={`mb-1 text-xs font-semibold ${score >= 95 ? 'text-emerald-600' : 'text-amber-500'}`}>
                    {score >= 95 ? 'Perfect' : score >= 85 ? 'Excellent' : 'Action Req.'}
                  </div>
                </div>
                <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-brand-soft dark:bg-brand-soft/10">
                  <div
                    className="h-full rounded-full bg-[var(--gradient-brand)] transition-all duration-1000"
                    style={{ width: `${score}%` }}
                  ></div>
                </div>
                <div className="mt-3 flex items-center justify-between text-[11px] text-ink-soft">
                  <span>{activeCount} of {documents.length} docs valid</span>
                  <span className="font-semibold text-ink">+4 this month</span>
                </div>
              </div>

              {/* Status boxes */}
              <div className="rounded-2xl bg-gradient-to-b from-emerald-50/50 to-white dark:from-emerald-950/20 dark:to-card text-emerald-700 dark:text-emerald-400 ring-emerald-200/60 dark:ring-emerald-900/40 p-4 ring-1 shadow-soft">
                <Check className="h-4 w-4" />
                <div className="mt-2 font-display text-2xl font-bold text-ink">{activeCount}</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-ink-soft">Active</div>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-amber-50/50 to-white dark:from-amber-950/20 dark:to-card text-amber-700 dark:text-amber-400 ring-amber-200/60 dark:ring-amber-900/40 p-4 ring-1 shadow-soft">
                <Clock className="h-4 w-4" />
                <div className="mt-2 font-display text-2xl font-bold text-ink">{renewCount}</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-ink-soft">Renew Soon</div>
              </div>

              <div className="rounded-2xl bg-gradient-to-b from-rose-50/50 to-white dark:from-rose-950/20 dark:to-card text-rose-700 dark:text-rose-400 ring-rose-200/60 dark:ring-rose-900/40 p-4 ring-1 shadow-soft">
                <AlertTriangle className="h-4 w-4" />
                <div className="mt-2 font-display text-2xl font-bold text-ink">{actionCount}</div>
                <div className="text-[11px] font-medium uppercase tracking-wider text-ink-soft">Action</div>
              </div>
            </div>

            {/* Document list */}
            <div className="mt-3 rounded-2xl bg-card p-4 shadow-soft ring-1 ring-border">
              <div className="flex items-center justify-between mb-3">
                <div className="text-sm font-semibold text-ink">Documents & Licenses</div>
                <div className="text-xs text-brand font-medium hover:underline cursor-pointer">Interactive Mockup Dashboard</div>
              </div>
              <div className="grid gap-2 max-h-[280px] overflow-y-auto pr-1">
                {documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="flex items-center justify-between rounded-xl bg-secondary/50 dark:bg-secondary/10 px-3 py-2.5 ring-1 ring-border hover:bg-secondary dark:hover:bg-secondary/20 transition"
                  >
                    <div className="flex min-w-0 items-center gap-2.5">
                      <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-card ring-1 ring-border">
                        <FileCheck className="h-4 w-4 text-brand" />
                      </div>
                      <div className="min-w-0">
                        <div className="truncate text-sm font-medium text-ink">{doc.name}</div>
                        <div className="text-[11px] text-ink-soft">
                          {doc.status === 'Active'
                            ? `Expires in ${doc.expiry} days`
                            : doc.status === 'Renew Soon'
                            ? `Expires in ${doc.expiry} days! Double tap to Renew`
                            : `Urgent! Expires in ${doc.expiry} days! Click to fix`}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => renewDocument(doc.id)}
                      className={`shrink-0 rounded-md px-2 py-1 text-[10px] font-semibold ring-1 transition cursor-pointer ${
                        doc.status === 'Active'
                          ? 'bg-emerald-50 text-emerald-700 ring-emerald-200/60 dark:bg-emerald-950/40 dark:text-emerald-400 dark:ring-emerald-800/40'
                          : doc.status === 'Renew Soon'
                          ? 'bg-amber-50 text-amber-700 ring-amber-200/60 hover:bg-amber-100 dark:bg-amber-950/40 dark:text-amber-400 dark:ring-amber-800/40'
                          : 'bg-rose-50 text-rose-700 ring-rose-200/60 hover:bg-rose-100 dark:bg-rose-950/40 dark:text-rose-400 dark:ring-rose-800/40 animate-pulse'
                      }`}
                    >
                      {doc.status}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
