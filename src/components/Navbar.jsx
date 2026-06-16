import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Lock, Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { useComingSoon } from '../context/ComingSoonContext';

export default function Navbar({ theme, toggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const openComingSoon = useComingSoon();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', to: '/' },
    { name: 'Features', to: '/features' },
    { name: 'Pricing', to: '/pricing' },
    { name: 'About', to: '/about' },
    { name: 'Careers', to: '/careers' },
    { name: 'Support', to: '/support' },
  ];

  const openLogin = () =>
    openComingSoon({
      title: 'Login — Coming Soon',
      description:
        'The DukaanLocker dashboard login will be available during our official launch. Join the waitlist for early access.',
    });

  const openGetStarted = () =>
    openComingSoon({
      title: 'Get Started — Coming Soon',
      description:
        'We are actively building the DukaanLocker onboarding experience and it will be available in a future release.',
    });

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="mx-auto max-w-7xl px-4">
        <nav className="glass flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="grid h-9 w-9 place-items-center rounded-xl bg-[var(--gradient-brand)] shadow-glow">
              <Lock className="h-[1.125rem] w-[1.125rem] " />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-ink">
              Dukaan<span className="gradient-text">Locker</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) =>
                    `text-sm font-medium transition-colors hover:text-ink ${
                      isActive ? 'text-ink' : 'text-ink-soft'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Action Buttons (Desktop) */}
          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={(e) => toggleTheme(e)}
              aria-label="Toggle theme"
              className={`group relative grid place-items-center overflow-hidden rounded-xl border border-border bg-card/60 text-ink-soft backdrop-blur transition-all duration-500 hover:text-ink hover:shadow-card h-9 w-9 cursor-pointer ${
                theme === 'dark'
                  ? 'hover:shadow-[0_0_15px_rgba(245,158,11,0.35)] hover:border-amber-500/30'
                  : 'hover:shadow-[0_0_15px_rgba(10,84,221,0.25)] hover:border-brand/30'
              }`}
            >
              <div className="relative h-4 w-4">
                <Sun className={`absolute inset-0 h-4 w-4 text-amber-500 transition-all duration-500 transform ${
                  theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                }`} />
                <Moon className={`absolute inset-0 h-4 w-4 text-brand transition-all duration-500 transform ${
                  theme === 'light' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`} />
              </div>
            </button>

            <button
              onClick={openLogin}
              className="rounded-xl px-4 py-2 text-sm font-medium text-ink-soft transition hover:text-ink cursor-pointer"
            >
              Login
            </button>
            <button
              onClick={openGetStarted}
              className="group flex items-center gap-1.5 rounded-xl bg-[var(--gradient-brand)] px-4 py-2 text-sm font-semibold  shadow-glow transition hover:opacity-95 hover:shadow-[0_15px_50px_-12px_oklch(0.5_0.22_262/0.6)] cursor-pointer"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>

          {/* Mobile Menu & Theme Controls */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={(e) => toggleTheme(e)}
              aria-label="Toggle theme"
              className={`group relative grid place-items-center overflow-hidden rounded-xl border border-border bg-card/60 text-ink-soft backdrop-blur transition-all duration-500 hover:text-ink hover:shadow-card h-10 w-10 cursor-pointer ${
                theme === 'dark'
                  ? 'hover:shadow-[0_0_15px_rgba(245,158,11,0.35)]'
                  : 'hover:shadow-[0_0_15px_rgba(10,84,221,0.25)]'
              }`}
            >
              <div className="relative h-4.5 w-4.5">
                <Sun className={`absolute inset-0 h-4.5 w-4.5 text-amber-500 transition-all duration-500 transform ${
                  theme === 'dark' ? 'rotate-0 scale-100 opacity-100' : 'rotate-90 scale-0 opacity-0'
                }`} />
                <Moon className={`absolute inset-0 h-4.5 w-4.5 text-brand transition-all duration-500 transform ${
                  theme === 'light' ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'
                }`} />
              </div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="grid h-10 w-10 place-items-center rounded-xl border border-border bg-card/60 backdrop-blur text-ink cursor-pointer"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="mt-2 rounded-2xl glass p-4 flex flex-col gap-4 lg:hidden animate-fade-in">
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block py-1 text-base font-medium transition-colors hover:text-ink ${
                        isActive ? 'text-ink' : 'text-ink-soft'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <hr className="border-border" />
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsOpen(false);
                  openLogin();
                }}
                className="w-full text-center py-2.5 rounded-xl border border-border text-sm font-medium text-ink cursor-pointer"
              >
                Login
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  openGetStarted();
                }}
                className="w-full text-center py-2.5 rounded-xl bg-[var(--gradient-brand)] text-sm font-semibold text-white shadow-glow cursor-pointer"
              >
                Get Started Free
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
