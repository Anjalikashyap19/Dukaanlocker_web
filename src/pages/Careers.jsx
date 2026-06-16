import React from 'react';
import {
  Rocket,
  HeartHandshake,
  TrendingUp,
  Crown,
  GraduationCap,
  Users,
  Briefcase,
  BellRing,
  Target,
  Zap,
  Coffee,
  Globe,
  Sparkles,
  ArrowRight,
  Check,
} from 'lucide-react';
import PageHero from '../components/PageHero';
import { useComingSoon } from '../context/ComingSoonContext';

const whyWork = [
  {
    icon: <Rocket className="h-6 w-6" />,
    title: 'Innovation-Driven',
    desc: 'Work on AI, automation and govtech that has never existed in India before — at the intersection of technology and public impact.',
    gradient: 'from-blue-500/20 to-blue-600/10',
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: 'Impact-Focused',
    desc: 'Everything you build directly helps millions of small business owners thrive and grow their livelihoods.',
    gradient: 'from-emerald-500/20 to-emerald-600/10',
  },
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: 'Fast-Growing Startup',
    desc: 'Join early, grow fast, and shape the future of a category-defining product in the compliance-tech space.',
    gradient: 'from-purple-500/20 to-purple-600/10',
  },
];

const culture = [
  {
    icon: <Crown className="h-5 w-5" />,
    title: 'Ownership',
    desc: 'We trust you with real responsibility and the autonomy to make decisions that shape our product.',
  },
  {
    icon: <GraduationCap className="h-5 w-5" />,
    title: 'Learning',
    desc: 'Continuous growth, mentorship from industry experts, and the freedom to explore new ideas.',
  },
  {
    icon: <Users className="h-5 w-5" />,
    title: 'Collaboration',
    desc: 'A tight-knit team that wins together, supports each other, and celebrates every milestone.',
  },
  {
    icon: <Target className="h-5 w-5" />,
    title: 'Mission-Driven',
    desc: 'Every team member is aligned with our goal of simplifying compliance for 6.4 Crore+ businesses.',
  },
  {
    icon: <Zap className="h-5 w-5" />,
    title: 'Speed & Agility',
    desc: 'We move fast, iterate quickly, and ship features that make an immediate difference to our users.',
  },
  {
    icon: <Globe className="h-5 w-5" />,
    title: 'Remote-First',
    desc: 'Work from anywhere in India with flexible hours and a culture built around output, not hours.',
  },
];

const perks = [
  'Competitive equity packages',
  'Flexible work hours',
  'Health & wellness benefits',
  'Learning & development budget',
  'Annual retreats',
  'Latest tech equipment',
];

export default function Careers() {
  const openComingSoon = useComingSoon();

  const notifyMe = () =>
    openComingSoon({
      title: 'Careers — Coming Soon',
      description:
        'We are growing rapidly. Join the list and we will notify you the moment new roles open up.',
    });

  return (
    <>
      <PageHero
        badge="Careers"
        title="Join our"
        highlight="mission"
        subtitle="Help us simplify compliance for millions of small businesses across India — and build something that truly matters."
      >
        <button
          onClick={notifyMe}
          className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-brand)] px-5 py-3 text-sm font-semibold  shadow-glow transition hover:opacity-95 cursor-pointer"
        >
          <BellRing className="h-4 w-4" />
          Notify Me About Roles
        </button>
      </PageHero>

      {/* Stats bar */}
      <section className="relative -mt-8 pb-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-3 gap-4">
            {[
              { value: '6.4 Cr+', label: 'Users We Serve' },
              { value: 'Remote', label: 'Work Mode' },
              { value: 'Fast', label: 'Growth Stage' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-card shadow-soft ring-1 ring-border">
                <div className="font-display text-2xl font-extrabold gradient-text">{stat.value}</div>
                <div className="mt-0.5 text-xs text-ink-soft">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="relative py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
              Why Work With Us
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Build what matters
            </h2>
            <p className="mt-4 text-base text-ink-soft">
              Join a team that's redefining compliance for India's small businesses — and grow with us.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-3">
            {whyWork.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-2xl bg-card p-7 shadow-soft ring-1 ring-border transition hover:-translate-y-1 hover:shadow-card"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 dark:opacity-10`} />
                <div className="relative">
                  <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-brand)]  shadow-glow">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 font-display text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work culture */}
      <section className="relative py-20 border-t border-border bg-gradient-to-b from-transparent to-brand-soft/20 dark:to-brand-soft/5">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
              Work Culture
            </div>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              How we work together
            </h2>
            <p className="mt-4 text-base text-ink-soft">
              A culture built on trust, transparency, and the shared mission of transforming compliance in India.
            </p>
          </div>
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {culture.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl bg-card p-6 shadow-soft ring-1 ring-border transition hover:-translate-y-0.5 hover:shadow-card"
              >
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[var(--gradient-brand)]  shadow-glow">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-ink">{item.title}</h3>
                  <p className="mt-1.5 text-sm text-ink-soft leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Perks & Benefits */}
      <section className="relative py-20 border-t border-border">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
                <Sparkles className="h-3 w-3" /> Perks & Benefits
              </div>
              <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
                We invest in our people
              </h2>
              <p className="mt-4 text-base text-ink-soft">
                Because when you grow, DukaanLocker grows. Here's what you can expect when you join us.
              </p>
              <ul className="mt-8 space-y-3">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-3 text-sm text-ink">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-brand-soft text-brand dark:bg-brand-soft/10">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    {perk}
                  </li>
                ))}
              </ul>
            </div>

            {/* Image placeholder */}
            <div className="rounded-3xl bg-gradient-to-br from-brand-soft/50 to-card p-10 shadow-card ring-1 ring-border text-center">
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[var(--gradient-brand)] shadow-glow">
                <Coffee className="h-10 w-10 " />
              </div>
              <h3 className="mt-6 font-display text-xl font-bold text-ink">Great people, great culture</h3>
              <p className="mt-2 text-sm text-ink-soft max-w-md mx-auto leading-relaxed">
                Join a diverse team of builders, thinkers, and problem-solvers who are passionate about making a real impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Open roles */}
      <section className="relative py-24 border-t border-border">
        <div className="mx-auto max-w-3xl px-4">
          <div className="relative overflow-hidden rounded-3xl glass-dark p-10 text-center shadow-card sm:p-14">

            
            <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[var(--gradient-brand)] opacity-20 blur-2xl animate-pulse" />
              <div className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand-soft/50 to-card ring-1 ring-brand/10 dark:from-brand-soft/10">
                <Briefcase className="h-7 w-7 text-brand" />
              </div>
            </div>
            
            <h3 className="font-display text-xl font-extrabold text-ink sm:text-2xl">
              No Open Positions Available
            </h3>
            <p className="mx-auto mt-3 max-w-md text-ink-soft leading-relaxed">
              We are growing rapidly. Future opportunities will be announced soon.
            </p>
            
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button
                onClick={notifyMe}
                className="group inline-flex items-center gap-2 rounded-xl bg-[var(--gradient-brand)] px-6 py-3 text-sm font-semibold  shadow-glow transition hover:opacity-95 cursor-pointer"
              >
                <BellRing className="h-4 w-4" />
                Notify Me When Roles Open
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </div>

            <p className="mt-6 text-xs text-ink-soft">
              We're always looking for talented people — feel free to reach out even if there's no open role.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}