import React from 'react';
import { useScrollRevealAll } from '../hooks/usePremium';

export default function HowItWorks() {
  const sectionRef = useScrollRevealAll();

  const steps = [
    {
      num: '01',
      title: 'Register Business',
      description: 'Enter basic shop details and your GSTIN or PAN information.',
    },
    {
      num: '02',
      title: 'Select Business Type',
      description: 'Tell us what kind of shop you operate (food, retail, pharmacy, etc.).',
    },
    {
      num: '03',
      title: 'AI Analyzes Requirements',
      description: 'Our AI compliance engine extracts and recommends the required documents.',
    },
    {
      num: '04',
      title: 'Upload Documents',
      description: 'Upload your shop documents, licenses, and business certificates easily.',
    },
    {
      num: '05',
      title: 'Rest Easy',
      description: 'Track expiry, receive smart renewal alerts, and stay secure.',
    },
  ];

  return (
    <section id="how" ref={sectionRef} className="relative py-20 bg-transparent overflow-hidden text-slate-800 dark:text-white font-sans border-t border-slate-200 dark:border-white/5" aria-labelledby="hiw-heading">
      <div className="mx-auto max-w-7xl px-4 relative z-10">

        {/* Header section */}
        <div className="reveal mx-auto max-w-4xl text-center relative z-20">
          <div className="inline-flex items-center justify-center rounded-full border border-blue-500/30 bg-blue-50/50 dark:border-[#00d2ff]/40 dark:bg-[#00d2ff]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-[#00d2ff] backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.1)] dark:shadow-[0_0_15px_rgba(0,210,255,0.2)]">
            Workflow
          </div>
          <h2 id="hiw-heading" className="mt-6 font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white whitespace-nowrap">
            Get Compliant in Minutes
          </h2>
          <p className="mt-5 text-base text-slate-600 dark:text-slate-400 sm:text-lg max-w-xl mx-auto font-medium">
            Stay on top of registrations, documents, and government requirements in 5 easy steps.
          </p>
          <div className="section-line" aria-hidden="true" />
        </div>

        {/* Simple, Clean 5-Step Workflow Cards */}
        <div className="mt-14 max-w-6xl mx-auto pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {steps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border flex flex-col justify-between hover:shadow-card hover:ring-brand/30 transition-all duration-200"
              >
                <div>
                  <div className="mb-4">
                    <span className="inline-flex items-center justify-center text-xs font-bold text-brand bg-brand-soft/60 dark:bg-brand-soft/20 rounded-full px-2.5 py-1">
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-base text-ink mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-ink-soft leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
