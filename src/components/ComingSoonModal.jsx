import React, { useState } from 'react';
import { X, Loader2, Bell, ArrowLeft, Check, Sparkles, Mail, Rocket } from 'lucide-react';

export default function ComingSoonModal({ isOpen, onClose, title, description, showWaitlist = true }) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
      onClose();
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      
      <div className="relative z-10 w-full max-w-sm rounded-2xl bg-card shadow-[0_25px_80px_-15px_rgba(0,0,0,0.5)] ring-1 ring-border animate-slide-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 grid h-7 w-7 place-items-center rounded-full bg-card/80 backdrop-blur text-ink-soft hover:text-ink hover:shadow-card transition cursor-pointer"
          aria-label="Close modal"
        >
          <X className="h-3.5 w-3.5" />
        </button>

        {/* Gradient accent bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-[var(--gradient-brand)] rounded-t-2xl" />

        <div className="p-6 text-center">
          {/* Compact Illustration */}
          <div className="relative mx-auto mb-4 flex h-20 w-20 items-center justify-center">
            {/* Animated ring */}
            <div className="absolute -inset-2 rounded-full border-2 border-brand/20 animate-pulse-ring" />
            
            {/* Icon container */}
            <div className="relative grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand-soft/80 to-card ring-1 ring-brand/20 dark:from-brand-soft/10">
              {subscribed ? (
                <div className="grid h-10 w-10 place-items-center rounded-full bg-emerald-500/20">
                  <Check className="h-5 w-5 text-emerald-500" />
                </div>
              ) : (
                <div className="relative">
                  <Loader2 className="h-7 w-7 text-brand animate-spin" />
                  <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-amber-400 animate-bounce" />
                  <Rocket className="absolute -bottom-0.5 -left-0.5 h-3 w-3 text-brand-foreground" />
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <h2 className="font-display text-xl font-extrabold text-ink leading-tight">
            {title || 'Coming Soon'}
          </h2>
          <p className="mt-2 text-sm text-ink-soft leading-relaxed">
            {description || 'We are actively building this experience and it will be available in a future release.'}
          </p>

          {/* Waitlist Form */}
          {showWaitlist && !subscribed && (
            <div className="mt-5 p-4 rounded-xl bg-gradient-to-b from-secondary/80 to-secondary/40 dark:from-secondary/10 dark:to-secondary/5 ring-1 ring-border">
              <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-ink mb-2">
                <Bell className="h-3.5 w-3.5 text-brand" />
                Get Notified When Live
              </div>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="relative flex-1">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-ink-soft" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-border bg-card pl-9 pr-3 py-2 text-xs text-ink outline-none placeholder:text-ink-soft/50 focus:border-brand focus:ring-1 focus:ring-brand shadow-soft"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-1.5 rounded-lg bg-[var(--gradient-brand)] px-4 py-2 text-xs font-semibold  shadow-glow transition hover:opacity-95 cursor-pointer shrink-0"
                >
                  <Bell className="h-3.5 w-3.5" />
                  Notify
                </button>
              </form>
            </div>
          )}

          {/* Success state */}
          {subscribed && (
            <div className="mt-5 p-4 rounded-xl bg-gradient-to-b from-emerald-50/80 to-emerald-50/40 dark:from-emerald-950/20 dark:to-emerald-950/10 ring-1 ring-emerald-200/60 dark:ring-emerald-900/40">
              <div className="flex items-center justify-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                <Check className="h-4 w-4" />
                You're on the list!
              </div>
            </div>
          )}

          {/* Back Button */}
          <button
            onClick={onClose}
            className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-ink-soft hover:text-ink transition-colors cursor-pointer group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            Back to Website
          </button>
        </div>
      </div>
    </div>
  );
}