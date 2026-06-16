import React from 'react';
import { UserPlus, ListChecks, Cpu, UploadCloud, Award } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: <UserPlus className="h-5 w-5" />,
      title: 'Register Business',
      description: 'Enter basic shop details and GSTIN/PAN info.',
    },
    {
      num: '02',
      icon: <ListChecks className="h-5 w-5" />,
      title: 'Select Business Type',
      description: 'Tell us what kind of shop you operate (food, retail, etc.).',
    },
    {
      num: '03',
      icon: <Cpu className="h-5 w-5" />,
      title: 'AI Analyzes Requirements',
      description: 'Our AI compliance engine extracts required documents.',
    },
    {
      num: '04',
      icon: <UploadCloud className="h-5 w-5" />,
      title: 'Upload or Fetch',
      description: 'Upload local files or fetch them via secure API sync.',
    },
    {
      num: '05',
      icon: <Award className="h-5 w-5" />,
      title: 'Rest Easy',
      description: 'Track expiry, trigger smart renewals, and stay secure.',
    },
  ];

  return (
    <section id="how" className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
            Workflow
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Get Compliant in Minutes
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Stay on top of registrations, documents, and government requirements in 5 easy steps.
          </p>
        </div>

        {/* Steps Grid Layout */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-card"
            >
              {/* Giant background step number */}
              <div className="absolute -right-2 -top-2 font-display text-7xl font-extrabold text-ink opacity-[0.03] select-none group-hover:opacity-[0.06] transition-all">
                {step.num}
              </div>

              <div className="relative">
                <div className="grid h-10 w-10 place-items-center rounded-lg bg-[var(--gradient-brand)] text-white shadow-glow">
                  {step.icon}
                </div>
                <h3 className="mt-5 font-display text-base font-bold text-ink">
                  {step.title}
                </h3>
                <p className="mt-1.5 text-sm text-ink-soft">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
