export default function PageHero({
  badge,
  title,
  highlight,
  subtitle,
  illuminatedLine,
  containerMaxWidth = 'max-w-3xl',
  children,
}) {
  return (
    <section className="relative overflow-hidden pt-36 pb-16 lg:pt-44 lg:pb-20 animate-fade-in-blur">
      <div className={`mx-auto ${containerMaxWidth} px-4 text-center`}>
        {badge && (
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10 animate-slide-up-fade" style={{ animationDelay: '0.1s', animationFillMode: 'both' }}>
            {badge}
          </div>
        )}
        <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl animate-slide-up-fade" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
          {title} {highlight && <span className="gradient-text hero-gradient-sweep">{highlight}</span>}
        </h1>
        {subtitle && (
          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-soft animate-slide-up-fade" style={{ animationDelay: '0.3s', animationFillMode: 'both' }}>{subtitle}</p>
        )}
        {illuminatedLine && (
          <div className="mt-7 sm:mt-8 animate-slide-up-fade" style={{ animationDelay: '0.35s', animationFillMode: 'both' }}>
            {illuminatedLine}
          </div>
        )}
        {children && (
          <div className={`${illuminatedLine ? 'mt-7 sm:mt-8' : 'mt-8'} flex flex-wrap items-center justify-center gap-3 animate-slide-up-fade`} style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
