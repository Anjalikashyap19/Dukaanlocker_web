import React from 'react';
import { Check, Sparkles, ArrowRight, Zap, Shield, Users, Star, Clock } from 'lucide-react';
import PageHero from '../components/PageHero';
import { useComingSoon } from '../context/ComingSoonContext';

const plans = [
  {
    name: 'Free',
    tagline: 'Everything to get started',
    description: 'Perfect for single-shop owners just beginning their compliance journey.',
    icon: <Zap className="h-5 w-5" />,
    features: [
      'Document Storage (up to 10 files)',
      'Basic Compliance Tracking',
      'Renewal Alerts (Email)',
      'Basic Dashboard',
      'Single Business',
    ],
    popular: false,
  },
  {
    name: 'Premium',
    tagline: 'For growing businesses',
    description: 'Advanced compliance guidance for businesses ready to scale with confidence.',
    icon: <Shield className="h-5 w-5" />,
    features: [
      'Unlimited Document Storage',
      'Advanced Compliance Guidance',
      'Priority Support (SMS, WhatsApp, Email)',
      'Smart AI Recommendations',
      'AI Compliance Assistant',
      'Multi-Channel Reminders',
    ],
    popular: true,
  },
  {
    name: 'Enterprise',
    tagline: 'For multi-location operators',
    description: 'Complete compliance management for businesses with multiple locations and teams.',
    icon: <Users className="h-5 w-5" />,
    features: [
      'Everything in Premium',
      'Multi-location Businesses (Unlimited)',
      'Team Access & Roles',
      'Advanced Analytics & Reports',
      'Dedicated Account Manager',
      'Custom Integrations',
      'API Access',
    ],
    popular: false,
  },
];

const features = [
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'All plans include',
    items: ['Bank-grade AES-256 encryption', 'Cloud backup & sync', 'Real-time compliance score', 'Secure document sharing'],
  },
  {
    icon: <Clock className="h-5 w-5" />,
    title: 'No long-term contracts',
    items: ['Cancel anytime', 'No hidden fees', 'Free updates', 'Community support'],
  },
];

export default function Pricing() {
  const openComingSoon = useComingSoon();

  return (
    <>
      <PageHero
        badge="Pricing"
        title="Simple, transparent"
        highlight="pricing"
        subtitle="Plans designed to scale with your business — from a single shop to a nationwide franchise."
      />

      {/* Coming soon banner */}
      <div className="mx-auto -mt-6 mb-4 flex max-w-7xl justify-center px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/50 bg-gradient-to-r from-amber-50 to-amber-100/50 px-4 py-2 text-xs font-semibold text-amber-700 dark:border-amber-800/40 dark:from-amber-950/40 dark:to-amber-950/20 dark:text-amber-400 shadow-soft">
          <Sparkles className="h-3.5 w-3.5" />
          Pricing plans will be announced during official launch.
        </div>
      </div>

      <section className="relative py-16">
        <div className="mx-auto max-w-7xl px-4">
          {/* Pricing cards */}
          <div className="grid gap-6 lg:grid-cols-3 items-stretch">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-3xl p-8 shadow-card transition hover:-translate-y-1 ${
                  plan.popular
                    ? 'bg-card ring-2 ring-brand'
                    : 'bg-card ring-1 ring-border'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--gradient-brand)] px-4 py-1 text-[11px] font-bold uppercase tracking-wider  shadow-glow flex items-center gap-1.5">
                    <Star className="h-3 w-3" />
                    Most Popular
                  </div>
                )}

                {/* Plan icon */}
                <div className={`grid h-12 w-12 place-items-center rounded-xl ${
                  plan.popular
                    ? 'bg-[var(--gradient-brand)]  shadow-glow'
                    : 'bg-brand-soft text-brand ring-1 ring-brand/10 dark:bg-brand-soft/10'
                }`}>
                  {plan.icon}
                </div>

                <h3 className="mt-5 font-display text-xl font-bold text-ink">{plan.name}</h3>
                <p className="mt-1 text-sm text-ink-soft">{plan.tagline}</p>
                <p className="mt-2 text-xs text-ink-soft/70 leading-relaxed">{plan.description}</p>

                {/* Coming Soon price */}
                <div className="mt-6 flex items-end gap-2">
                  <span className="gradient-text font-display text-3xl font-extrabold">Coming Soon</span>
                </div>
                <div className="mt-1 text-xs text-ink-soft">Announced at official launch</div>

                <ul className="mt-8 space-y-3.5 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-ink">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-brand-soft text-brand dark:bg-brand-soft/10">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() =>
                    openComingSoon({
                      title: `${plan.name} Plan — Coming Soon`,
                      description:
                        'Pricing plans will be announced during our official launch. Join the waitlist for early access.',
                    })
                  }
                  className={`group mt-8 flex items-center justify-center gap-1.5 rounded-xl px-5 py-3 text-sm font-semibold transition cursor-pointer ${
                    plan.popular
                      ? 'bg-[var(--gradient-brand)]  shadow-glow hover:opacity-95'
                      : 'border border-border bg-card text-ink shadow-soft hover:bg-secondary'
                  }`}
                >
                  Join the Waitlist
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Included features section */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {features.map((section) => (
              <div
                key={section.title}
                className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-brand-soft text-brand ring-1 ring-brand/10 dark:bg-brand-soft/10">
                    {section.icon}
                  </div>
                  <h3 className="font-display text-base font-bold text-ink">{section.title}</h3>
                </div>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-ink-soft">
                      <Check className="h-4 w-4 text-emerald-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-16 text-center">
            <p className="text-sm text-ink-soft">
              Have questions about plans?{' '}
              <button
                onClick={() =>
                  openComingSoon({
                    title: 'Sales — Coming Soon',
                    description:
                      'Our sales team will be available at launch. Join the waitlist and we will reach out.',
                  })
                }
                className="font-semibold text-brand hover:underline cursor-pointer"
              >
                Talk to our team
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}