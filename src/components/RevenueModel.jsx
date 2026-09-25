import { IndianRupee, Store, Users, TrendingUp, Sparkles } from 'lucide-react';
import { useScrollRevealAll, useCountUp } from '../hooks/usePremium';

export default function RevenueModel() {
  const sectionRef = useScrollRevealAll();
  const monetizationLayers = [
    {
      title: 'Free Basic Tier',
      desc: 'Free tracking for up to 3 licenses, manual uploads, and standard email alerts.',
    },
    {
      title: 'Auto-Renewal Processing Fee',
      desc: 'A convenience fee of ₹49–₹99 per renewal handled directly through government portals via our automated API integrations.',
    },
    {
      title: 'Premium Advisory Services',
      desc: 'Direct consultation with licensed Chartered Accountants (CAs) and Tax experts starting at ₹499/session.',
    },
    {
      title: 'Multi-business Subscription',
      desc: 'A premium SaaS tier for accounting firms or franchise owners managing 10+ shops starting at ₹299/month.',
    },
    {
      title: 'Financial Integration Layer',
      desc: 'Partnering with banks to share verified compliance history for seamless credit validation, trade financing, and business loans.',
    },
  ];

  const stats = [
    {
      icon: <Store className="h-6 w-6 text-brand transition-transform group-hover:scale-110 group-hover:text-white" />,
      value: '6.4',
      suffix: ' Crore approx',
      label: 'Addressable Shops',
      desc: 'Total small and medium enterprise (MSME) stores in India.',
    },
    {
      icon: <Users className="h-6 w-6 text-brand transition-transform group-hover:scale-110 group-hover:text-white" />,
      value: '6.4',
      suffix: ' Lakh approx',
      label: '1% Market Size',
      desc: 'Adoption target within the initial phase of launch.',
    },
    {
      icon: <IndianRupee className="h-6 w-6 text-brand transition-transform group-hover:scale-110 group-hover:text-white" />,
      value: '500',
      prefix: '₹',
      suffix: ' approx',
      label: 'Avg. Annual Revenue',
      desc: 'Calculated per active adopting business profile.',
    },
    {
      icon: <TrendingUp className="h-6 w-6 text-brand transition-transform group-hover:scale-110 group-hover:text-white" />,
      value: '32',
      prefix: '₹',
      suffix: ' Crore approx',
      label: 'Potential ARR',
      desc: 'Annual Recurring Revenue at maturity and scale.',
    },
  ];

  return (
    <section id="pricing" className="relative py-24 border-t border-border" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
            Scale & Price Model
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Built to Scale
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            How we align value creation with value capture, providing massive utility while sustaining long-term operations.
          </p>
          <div className="section-line" aria-hidden="true" />
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-12 items-start">
          {/* Monetization Steps list - Left */}
          <div className="reveal rounded-3xl glass p-6 shadow-card lg:col-span-7">
            <h3 className="text-base font-bold text-ink mb-6 flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-brand" />
              Monetization Channels
            </h3>
            <ol className="space-y-5">
              {monetizationLayers.map((layer, index) => (
                <li key={index} className="flex gap-4 group">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-soft text-xs font-semibold text-brand dark:bg-brand-soft/10 group-hover:bg-brand group-hover:text-white transition-colors shadow-soft">
                    {index + 1}
                  </span>
                  <div>
                    <h4 className="text-sm font-bold text-ink group-hover:text-brand transition-colors">{layer.title}</h4>
                    <p className="mt-1 text-xs text-ink-soft leading-relaxed">{layer.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* Revenue calculations - Right */}
          <div className="reveal-stagger lg:col-span-5 grid gap-4">
            {stats.map((stat, idx) => (
              <StatCard key={idx} stat={stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }) {
  const { ref, displayRef } = useCountUp(parseFloat(stat.value), { 
    duration: 2000, 
    prefix: stat.prefix || '', 
    suffix: stat.suffix || '', 
    decimals: stat.value.includes('.') ? 1 : 0 
  });
  
  return (
    <div ref={ref} className="group relative overflow-hidden rounded-2xl bg-card p-5 shadow-soft ring-1 ring-border card-hover">
      <div className="flex items-center gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-soft ring-1 ring-brand/10 dark:bg-brand-soft/10 transition-colors group-hover:bg-brand group-hover:shadow-glow">
          {stat.icon}
        </div>
        <div>
          <div className="text-[10px] font-bold text-brand uppercase tracking-wider">{stat.label}</div>
          <div ref={displayRef} className="font-display text-2xl font-extrabold text-ink mt-0.5 count-animate">
            {stat.prefix || ''}{stat.value}{stat.suffix || ''}
          </div>
        </div>
      </div>
      <p className="mt-3 text-xs text-ink-soft leading-relaxed">{stat.desc}</p>
    </div>
  );
}
