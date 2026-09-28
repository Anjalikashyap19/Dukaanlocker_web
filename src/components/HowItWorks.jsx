import React from 'react';
import { UserPlus, ListChecks, UploadCloud, Award, ShieldCheck, Clock, Bell, TrendingUp, ArrowRight, Sparkles } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/usePremium';

export default function HowItWorks() {
  const sectionRef = useScrollRevealAll();

  const steps = [
    {
      num: '01',
      icon: UserPlus,
      title: 'Register Business',
      description: 'Enter basic shop details and your GSTIN or PAN information.',
    },
    {
      num: '02',
      icon: ListChecks,
      title: 'Select Business Type',
      description: 'Tell us what kind of shop you operate (food, retail, pharmacy, etc.).',
    },
    {
      num: '03',
      icon: Sparkles,
      title: 'AI Analyzes Requirements',
      description: 'Our AI compliance engine extracts and recommends the required documents.',
    },
    {
      num: '04',
      icon: UploadCloud,
      title: 'Upload Documents',
      description: 'Upload your shop documents, licenses, and business certificates easily.',
    },
    {
      num: '05',
      icon: Award,
      title: 'Rest Easy',
      description: 'Track expiry, receive smart renewal alerts, and stay secure.',
    },
  ];

  const features = [
    { icon: ShieldCheck, title: '100% Secure', desc: 'Secure cloud storage for your documents.' },
    { icon: Clock, title: 'Save Time', desc: 'Automate processes and reduce manual work.' },
    { icon: Bell, title: 'Smart Alerts', desc: 'Never miss a renewal with proactive alerts.' },
    { icon: TrendingUp, title: 'All in One Place', desc: 'Documents, compliance and renewals — unified.' },
  ];

  return (
    <section id="how" ref={sectionRef} className="relative py-20 bg-transparent overflow-hidden text-slate-800 dark:text-white font-sans border-t border-slate-200 dark:border-white/5" aria-labelledby="hiw-heading">
      <div className="mx-auto max-w-7xl px-4 relative z-10">

        {/* Header section */}
        <div className="reveal mx-auto max-w-2xl text-center relative z-20">
          <div className="inline-flex items-center justify-center rounded-full border border-blue-500/30 bg-blue-50/50 dark:border-[#00d2ff]/40 dark:bg-[#00d2ff]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-[#00d2ff] backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.1)] dark:shadow-[0_0_15px_rgba(0,210,255,0.2)]">
            Workflow
          </div>
          <h2 id="hiw-heading" className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl">
            Get Compliant in Minutes
          </h2>
          <p className="mt-5 text-base text-slate-600 dark:text-slate-400 sm:text-lg max-w-xl mx-auto font-medium">
            Stay on top of registrations, documents, and government requirements in 5 easy steps.
          </p>
          <div className="section-line" aria-hidden="true" />
        </div>

        {/* Simple, Clean 5-Step Workflow Cards */}
        <div className="mt-14 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-5">
            {steps.map((step) => {
              const IconComponent = step.icon;
              return (
                <div
                  key={step.num}
                  className="rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border flex flex-col justify-between hover:shadow-card hover:ring-brand/30 transition-all duration-200"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center justify-center text-xs font-bold text-brand bg-brand-soft/60 dark:bg-brand-soft/20 rounded-full px-2.5 py-1">
                        Step {step.num}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-brand-soft/40 dark:bg-brand-soft/10 flex items-center justify-center text-brand">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                    <h3 className="font-display font-bold text-base text-ink mb-2">
                      {step.title}
                    </h3>
                    <p className="text-xs text-ink-soft leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Feature Dock */}
        <div className="relative mt-16 max-w-5xl mx-auto px-2">
          <div className="rounded-2xl bg-card/70 backdrop-blur-md p-6 lg:p-8 shadow-card ring-1 ring-border">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {features.map((feature, idx) => (
                <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left">
                  <div className="w-12 h-12 rounded-xl bg-brand-soft/40 dark:bg-brand-soft/10 border border-border flex items-center justify-center shrink-0 text-brand">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-slate-800 dark:text-slate-200 font-bold text-sm tracking-wide">{feature.title}</h4>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 flex justify-center pb-6">
            <button className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-3.5 text-sm font-bold text-white shadow-glow transition hover:opacity-95 cursor-pointer">
              <span>See it in Action</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
