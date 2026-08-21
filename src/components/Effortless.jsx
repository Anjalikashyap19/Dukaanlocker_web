import React from 'react';
import { Shield, AlarmClock, Zap, FileSpreadsheet, HardDrive, LineChart } from 'lucide-react';

export default function Effortless() {
  const benefits = [
    {
      icon: <Shield className="h-6 w-6 text-brand" />,
      title: 'Reduce Compliance Risk',
      desc: 'Avoid heavy government penalties, legal notices, and unexpected closure orders.',
    },
    {
      icon: <AlarmClock className="h-6 w-6 text-brand" />,
      title: 'Never Miss Renewals',
      desc: 'Multi-channel smart reminders notify you weeks in advance to update licenses.',
    },
    {
      icon: <Zap className="h-6 w-6 text-brand" />,
      title: 'Save Countless Hours',
      desc: 'No more searching through file folders or visiting government offices in person.',
    },
    {
      icon: <FileSpreadsheet className="h-6 w-6 text-brand" />,
      title: 'Stay Audit Ready',
      desc: 'Keep all registrations, tax receipts, and NOCs verified and organized for inspection.',
    },
    {
      icon: <HardDrive className="h-6 w-6 text-brand" />,
      title: 'Single Source of Truth',
      desc: 'Securely access every document from desktop, mobile, or direct share links.',
    },
    {
      icon: <LineChart className="h-6 w-6 text-brand" />,
      title: 'Improve Operations',
      desc: 'Focus on scaling sales and managing your store instead of government paperwork.',
    },
  ];

  return (
    <section id="about" className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
            Operational Benefits
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Built to make compliance feel effortless
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Say goodbye to complex legal jargon and government portal login codes. We handle the hard work.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group relative rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border transition hover:shadow-card hover:-translate-y-0.5"
            >
              <div className="flex gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-soft ring-1 ring-brand/10 dark:bg-brand-soft/10">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink">{benefit.title}</h3>
                  <p className="mt-2 text-sm text-ink-soft leading-relaxed">{benefit.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
