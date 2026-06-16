import React from 'react';

export default function PageHero({ badge, title, highlight, subtitle, children }) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20">
      <div className="mx-auto max-w-3xl px-4 text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
            {badge}
          </div>
        )}
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl">
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft">{subtitle}</p>
        )}
        {children && <div className="mt-8 flex flex-wrap items-center justify-center gap-3">{children}</div>}
      </div>
    </section>
  );
}
