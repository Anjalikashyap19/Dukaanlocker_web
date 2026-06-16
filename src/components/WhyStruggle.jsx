import React from 'react';
import { Building2, FileText, Brain, Database, Clock, AlertTriangle } from 'lucide-react';

export default function WhyStruggle() {
  const struggles = [
    {
      id: 1,
      icon: <Building2 className="h-9 w-9 text-brand" />,
      title: '6.4 Crore',
      description: 'Businesses',
    },
    {
      id: 2,
      icon: <FileText className="h-9 w-9 text-brand" />,
      title: '10+',
      description: 'Documents per Shop',
    },
    {
      id: 3,
      icon: <Brain className="h-9 w-9 text-brand" />,
      title: 'Low',
      description: 'Awareness',
    },
    {
      id: 4,
      icon: <Database className="h-9 w-9 text-brand" />,
      title: 'Multiple',
      description: 'Departments',
    },
    {
      id: 5,
      icon: <Clock className="h-9 w-9 text-brand" />,
      title: 'Missed',
      description: 'Renewals',
    },
    {
      id: 6,
      icon: <AlertTriangle className="h-9 w-9 text-brand" />,
      title: 'Penalties',
      description: '& Risks',
    },
  ];

  return (
    <section className="relative py-24 border-t border-border">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
            The Problem
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Why Small Businesses Struggle
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            A fragmented compliance landscape forces shop owners to juggle paperwork across dozens of departments — often without realising what's at stake.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="relative mt-16">
          {/* Background Connector Line */}
          <svg className="pointer-events-none absolute inset-x-0 top-12 hidden h-2 w-full lg:block" viewBox="0 0 100 2" preserveAspectRatio="none">
            <line
              x1="0"
              y1="1"
              x2="100"
              y2="1"
              stroke="url(#g1)"
              strokeWidth="0.4"
              strokeDasharray="2 1.5"
            ></line>
            <defs>
              <linearGradient id="g1" x1="0" x2="1">
                <stop offset="0" stopColor="var(--brand)" stopOpacity="0.2"></stop>
                <stop offset="0.5" stopColor="var(--brand)"></stop>
                <stop offset="1" stopColor="var(--brand)" stopOpacity="0.2"></stop>
              </linearGradient>
            </defs>
          </svg>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-6">
            {struggles.map((struggle) => (
              <div key={struggle.id} className="group flex flex-col items-center text-center">
                <div className="relative">
                  <div className="absolute inset-0 -z-10 rounded-full bg-[var(--gradient-brand)] opacity-0 blur-xl transition group-hover:opacity-30"></div>
                  <div className="grid h-24 w-24 place-items-center rounded-full bg-card shadow-card ring-1 ring-border transition group-hover:-translate-y-1">
                    {struggle.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 grid h-6 w-6 place-items-center rounded-full bg-[var(--gradient-brand)] text-[11px] font-bold text-white shadow-glow">
                    {struggle.id}
                  </div>
                </div>
                <div className="mt-4 font-display text-lg font-bold text-ink">
                  {struggle.title}
                </div>
                <div className="text-xs text-ink-soft">
                  {struggle.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
