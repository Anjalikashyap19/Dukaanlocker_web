import React from 'react';
import { UserPlus, ListChecks, UploadCloud, Award, ShieldCheck, Clock, Bell, TrendingUp, ArrowRight } from 'lucide-react';

const GlowingVaultSvg = ({ className }) => (
  <svg viewBox="0 0 400 400" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="6" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
      <filter id="heavy-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur stdDeviation="15" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Floor glowing ellipses */}
    <ellipse cx="205" cy="330" rx="140" ry="35" fill="none" className="stroke-blue-500/40 dark:stroke-blue-500/60" strokeWidth="2.5" filter="url(#neon-glow)" />
    <ellipse cx="205" cy="330" rx="170" ry="45" fill="none" className="stroke-blue-600/20 dark:stroke-[#00d2ff]/30" strokeWidth="1" />
    <ellipse cx="205" cy="330" rx="90" ry="20" className="fill-blue-500/5 dark:fill-[#00d2ff]/10" opacity="0.8" filter="url(#heavy-glow)" />

    {/* Back faces */}
    <rect x="150" y="50" width="180" height="190" rx="16" fill="none" className="stroke-blue-500/20 dark:stroke-blue-500/30" strokeWidth="2" />

    {/* Internal Document Stacks */}
    <g opacity="0.8">
       <path d="M 120,240 L 280,180 L 310,210 L 150,270 Z" className="fill-blue-500/10 dark:fill-blue-500/40 stroke-blue-400 dark:stroke-[#00d2ff]" strokeWidth="1" />
       <path d="M 120,215 L 280,155 L 310,185 L 150,245 Z" className="fill-blue-600/15 dark:fill-blue-600/60 stroke-blue-500 dark:stroke-[#00d2ff]" strokeWidth="1.5" />
       <path d="M 120,190 L 280,130 L 310,160 L 150,220 Z" className="fill-blue-700/20 dark:fill-[#00d2ff]/20 stroke-blue-600 dark:stroke-[#00d2ff]" strokeWidth="2" filter="url(#neon-glow)" />
    </g>

    {/* Top Face */}
    <path d="M 80,110 L 150,50 L 330,50 L 260,110 Z" className="fill-blue-500/10 dark:fill-blue-500/30 stroke-blue-500 dark:stroke-[#00d2ff]" strokeWidth="2" strokeLinejoin="round" />
    
    {/* Right Face */}
    <path d="M 260,110 L 330,50 L 330,240 L 260,300 Z" className="fill-blue-600/10 dark:fill-[#0a1224]/60 stroke-blue-600/40 dark:stroke-blue-500" strokeWidth="2" strokeLinejoin="round" />

    {/* Front Face (transparent glass) */}
    <rect x="80" y="110" width="180" height="190" rx="16" className="fill-blue-500/5 dark:fill-cyan-500/10 stroke-blue-500 dark:stroke-[#00d2ff]" strokeWidth="3" filter="url(#neon-glow)" />
    
    {/* Front Face Inner Rim */}
    <rect x="92" y="122" width="156" height="166" rx="8" fill="none" className="stroke-blue-500/30 dark:stroke-[#00d2ff]/50" strokeWidth="1.5" />

    {/* Top Highlight edge */}
    <path d="M 85,110 L 255,110" className="stroke-blue-200 dark:stroke-white" strokeWidth="3" filter="url(#neon-glow)" strokeLinecap="round" />

    {/* Hinge detail */}
    <rect x="75" y="180" width="6" height="36" rx="3" className="fill-blue-500 dark:fill-[#00d2ff]" filter="url(#neon-glow)" />

    {/* Shield Icon in Center of Front Face */}
    <g transform="translate(170, 205) scale(1.1)">
       <path d="M 0,-45 C 0,-45 -40,-30 -40,-30 C -40,15 0,60 0,60 C 0,60 40,15 40,-30 C 40,-30 0,-45 0,-45 Z" className="fill-blue-500/10 dark:fill-[#00d2ff]/15 stroke-blue-500 dark:stroke-[#00d2ff]" strokeWidth="4.5" strokeLinejoin="round" filter="url(#neon-glow)"/>
       <path d="M 0,-36 C 0,-36 -30,-24 -30,-24 C -30,8 0,48 0,48 C 0,48 30,8 30,-24 C 30,-24 0,-36 0,-36 Z" className="fill-blue-600/20 dark:fill-blue-600/30 stroke-blue-600 dark:stroke-blue-500" strokeWidth="2" strokeLinejoin="round" />
       
       {/* Document Icon inside Shield */}
       <path d="M -14,-14 L 4,-14 L 14,-4 L 14,24 L -14,24 Z" className="fill-blue-600 dark:fill-[#00d2ff]" filter="url(#neon-glow)" />
       <path d="M 4,-14 L 4,-4 L 14,-4 Z" className="fill-blue-400 dark:fill-blue-600" opacity="0.6" />
       
       {/* Document Lines */}
       <line x1="-7" y1="-2" x2="7" y2="-2" className="stroke-white dark:stroke-[#030614]" strokeWidth="2.5" strokeLinecap="round" />
       <line x1="-7" y1="5" x2="7" y2="5" className="stroke-white dark:stroke-[#030614]" strokeWidth="2.5" strokeLinecap="round" />
       <line x1="-7" y1="12" x2="2" y2="12" className="stroke-white dark:stroke-[#030614]" strokeWidth="2.5" strokeLinecap="round" />
    </g>
  </svg>
);

// Custom SVG for the AI step to perfectly match the CRED-style chip
const AiChipIcon = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
    <path d="M9 9h6v6H9z"></path>
    <path d="M9 1v3"></path>
    <path d="M15 1v3"></path>
    <path d="M9 20v3"></path>
    <path d="M15 20v3"></path>
    <path d="M20 9h3"></path>
    <path d="M20 14h3"></path>
    <path d="M1 9h3"></path>
    <path d="M1 14h3"></path>
    <text x="12" y="13.5" fontSize="4.5" fill="currentColor" stroke="none" textAnchor="middle" fontWeight="800">AI</text>
  </svg>
);

export default function HowItWorks() {
  const steps = [
    {
      num: '01',
      icon: UserPlus,
      title: 'Register Business',
      description: 'Enter basic shop details and GSTIN/PAN info.',
      position: { left: '10%', top: '35%' },
    },
    {
      num: '02',
      icon: ListChecks,
      title: 'Select Business Type',
      description: 'Tell us what kind of shop you operate (food, retail, etc.).',
      position: { left: '26%', top: '65%' },
      floatingBadge: 'PAN',
    },
    {
      num: '03',
      icon: AiChipIcon,
      title: 'AI Analyzes Requirements',
      description: 'Our AI compliance engine extracts required documents.',
      position: { left: '50%', top: '75%' },
      isCenter: true,
    },
    {
      num: '04',
      icon: UploadCloud,
      title: 'Upload or Fetch',
      description: 'Upload local files or fetch them via secure API sync.',
      position: { left: '74%', top: '65%' },
    },
    {
      num: '05',
      icon: Award,
      title: 'Rest Easy',
      description: 'Track expiry, trigger smart renewals, and stay secure.',
      position: { left: '90%', top: '35%' },
    },
  ];

  const features = [
    { icon: ShieldCheck, title: '100% Secure', desc: 'Bank-level encryption for your documents.' },
    { icon: Clock, title: 'Save Time', desc: 'Automate processes and reduce manual work.' },
    { icon: Bell, title: 'Smart Alerts', desc: 'Never miss a renewal with proactive alerts.' },
    { icon: TrendingUp, title: 'All in One Place', desc: 'Documents, compliance and renewals — unified.' },
  ];

  return (
    <section id="how" className="relative py-24 bg-transparent overflow-hidden text-slate-800 dark:text-white font-sans border-t border-slate-200 dark:border-white/5">
      
      {/* Styles for complex animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes dash-flow {
          from { stroke-dashoffset: 2000; }
          to { stroke-dashoffset: 0; }
        }
        .animate-dash-flow {
          stroke-dasharray: 150 1850;
          animation: dash-flow 8s linear infinite;
        }
        @keyframes sonar-ripple {
          0% { transform: scale(0.8); opacity: 1; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        .group:hover .animate-sonar {
          animation: sonar-ripple 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .glass-panel {
          background: rgba(255, 255, 255, 0.7);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(59, 130, 246, 0.2);
          color: #1e293b;
        }
        .dark .glass-panel {
          background: rgba(8, 14, 30, 0.6);
          border: 1px solid rgba(0, 210, 255, 0.15);
          color: #ffffff;
        }
      `}} />

      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(59,130,246,0.08),_transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,_rgba(0,100,255,0.15),_transparent_70%)] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 relative z-10">
        
        {/* Header section */}
        <div className="mx-auto max-w-2xl text-center relative z-20">
          <div className="inline-flex items-center justify-center rounded-full border border-blue-500/30 bg-blue-50/50 dark:border-[#00d2ff]/40 dark:bg-[#00d2ff]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 dark:text-[#00d2ff] backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.1)] dark:shadow-[0_0_15px_rgba(0,210,255,0.2)]">
            Workflow
          </div>
          <h2 className="mt-6 font-display text-4xl font-extrabold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl drop-shadow-[0_0_20px_rgba(255,255,255,0.1)] dark:drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Get Compliant in Minutes
          </h2>
          <p className="mt-5 text-base text-slate-600 dark:text-slate-400 sm:text-lg max-w-xl mx-auto font-medium">
            Stay on top of registrations, documents, and government requirements in 5 easy steps.
          </p>
        </div>

        {/* 3D Showcase and Interactive Orbit Area */}
        <div className="relative mt-16 lg:mt-10 w-full max-w-5xl mx-auto h-[650px] lg:h-[700px]">
          
          {/* Mobile Stacked View (Hidden on LG) */}
          <div className="lg:hidden absolute inset-0 flex flex-col pt-[350px] overflow-y-auto pb-32 hide-scrollbar z-20">
             <div className="grid gap-4 px-2">
                {steps.map((step, idx) => (
                  <div key={idx} className="glass-panel p-5 rounded-2xl flex gap-4 items-start border border-[#00d2ff]/20">
                    <div className="shrink-0 relative">
                       <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-[#00d2ff]/10 border border-blue-200 dark:border-[#00d2ff]/30 flex items-center justify-center text-blue-600 dark:text-[#00d2ff] shadow-[0_0_15px_rgba(0,210,255,0.3)]">
                          <step.icon className="w-5 h-5" />
                       </div>
                       <div className="absolute -top-3 -right-2 bg-white dark:bg-[#050f24] text-blue-600 dark:text-[#00d2ff] border border-blue-200 dark:border-[#00d2ff]/30 text-[9px] font-bold px-1.5 py-0.5 rounded-full">
                         {step.num}
                       </div>
                    </div>
                    <div>
                      <h3 className="text-slate-850 dark:text-white font-bold text-sm tracking-wide">{step.title}</h3>
                      <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
             </div>
          </div>

          {/* SVG Vault Locker (Centered) */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] lg:w-[450px] lg:h-[450px] lg:top-14 z-10 pointer-events-none flex items-center justify-center">
            <GlowingVaultSvg className="w-full h-full animate-float drop-shadow-[0_0_30px_rgba(59,130,246,0.15)] dark:drop-shadow-[0_0_60px_rgba(0,210,255,0.25)]" />
            
            {/* Floating Holographic Documents (Only visible on LG) */}
            <div className="hidden lg:block absolute inset-0">
              <div className="absolute top-[15%] -left-[10%] glass-panel px-3 py-1.5 rounded-md text-[10px] font-bold tracking-widest text-blue-600 dark:text-[#00d2ff] animate-float shadow-[0_0_15px_rgba(0,210,255,0.2)]">
                GSTIN
              </div>
              <div className="absolute top-[30%] -right-[5%] glass-panel p-2 rounded-md border border-blue-200 dark:border-[#00d2ff]/30 animate-float shadow-[0_0_15px_rgba(0,210,255,0.2)]" style={{ animationDelay: '1s' }}>
                 <div className="w-8 h-10 border border-blue-500/10 dark:border-[#00d2ff]/20 rounded-sm bg-blue-500/5 dark:bg-[#00d2ff]/5 flex flex-col gap-1 p-1">
                   <div className="w-full h-1 bg-blue-500/40 dark:bg-[#00d2ff]/40 rounded-full"></div>
                   <div className="w-2/3 h-1 bg-blue-500/20 dark:bg-[#00d2ff]/20 rounded-full"></div>
                   <div className="w-4/5 h-1 bg-blue-500/20 dark:bg-[#00d2ff]/20 rounded-full"></div>
                 </div>
              </div>
            </div>
          </div>

          {/* Desktop Orbital Arc & Interactive Nodes (Hidden on Mobile) */}
          <div className="hidden lg:block absolute inset-0 z-20 pointer-events-none">
            
            {/* The SVG Orbit Path */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1000 700" preserveAspectRatio="none">
               {/* Base faint track */}
               <path d="M 100,245 C 150,400 200,455 260,455 C 330,455 410,525 500,525 C 590,525 670,455 740,455 C 800,455 850,400 900,245" fill="none" className="stroke-blue-200 dark:stroke-cyan-500/10" strokeWidth="2" strokeDasharray="4 6" />
               {/* Animated glowing energy flow */}
               <path d="M 100,245 C 150,400 200,455 260,455 C 330,455 410,525 500,525 C 590,525 670,455 740,455 C 800,455 850,400 900,245" fill="none" className="stroke-[url(#cyan-glow-light)] dark:stroke-[url(#cyan-glow-dark)] animate-dash-flow" strokeWidth="3" />
               
               <defs>
                 <linearGradient id="cyan-glow-dark" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#00d2ff" stopOpacity="0" />
                   <stop offset="50%" stopColor="#00d2ff" stopOpacity="1" />
                   <stop offset="100%" stopColor="#7000ff" stopOpacity="0" />
                 </linearGradient>
                 <linearGradient id="cyan-glow-light" x1="0%" y1="0%" x2="100%" y2="0%">
                   <stop offset="0%" stopColor="#185aeb" stopOpacity="0" />
                   <stop offset="50%" stopColor="#185aeb" stopOpacity="1" />
                   <stop offset="100%" stopColor="#4f46e5" stopOpacity="0" />
                 </linearGradient>
               </defs>
            </svg>

            {/* The 5 Step Nodes */}
            {steps.map((step, idx) => (
              <div 
                key={idx}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group pointer-events-auto cursor-pointer"
                style={{ left: step.position.left, top: step.position.top }}
              >
                {/* Sonar Ripple Effect (Activates on Hover) */}
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/50 dark:border-[#00d2ff]/50 opacity-0 animate-sonar pointer-events-none"></div>
                
                {/* Floating mini badge if any */}
                {step.floatingBadge && (
                  <div className="absolute -left-12 top-0 glass-panel px-2 py-0.5 rounded text-[9px] font-bold tracking-wider text-blue-600 dark:text-[#00d2ff] animate-float shadow-[0_0_10px_rgba(59,130,246,0.1)] dark:shadow-[0_0_10px_rgba(0,210,255,0.2)]">
                    {step.floatingBadge}
                  </div>
                )}

                {/* Step Number Pill */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white dark:bg-[#050f24] text-blue-600 dark:text-[#00d2ff] border border-blue-200 dark:border-[#00d2ff]/30 rounded-full px-2.5 py-0.5 text-[10px] font-bold tracking-widest shadow-[0_0_10px_rgba(59,130,246,0.1)] dark:shadow-[0_0_10px_rgba(0,210,255,0.1)] group-hover:bg-blue-500/10 dark:group-hover:bg-[#00d2ff]/20 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] dark:group-hover:shadow-[0_0_15px_rgba(0,210,255,0.6)] group-hover:border-blue-500 dark:group-hover:border-[#00d2ff] transition-all duration-300 z-10">
                  {step.num}
                </div>
                
                {/* Icon Circle */}
                <div className={`w-16 h-16 rounded-full glass-panel flex items-center justify-center border ${step.isCenter ? 'border-blue-500/60 dark:border-[#00d2ff]/60 shadow-[0_0_20px_rgba(59,130,246,0.2)] dark:shadow-[0_0_20px_rgba(0,210,255,0.3)] bg-blue-50 dark:bg-[#00d2ff]/10 text-blue-600 dark:text-[#00d2ff]' : 'border-blue-200 dark:border-blue-500/30 text-slate-600 dark:text-blue-300'} group-hover:border-blue-600 dark:group-hover:border-[#00d2ff] group-hover:bg-blue-500/10 dark:group-hover:bg-[#00d2ff]/20 group-hover:text-blue-650 dark:group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_35px_rgba(59,130,246,0.4),inset_0_0_20px_rgba(59,130,246,0.2)] dark:group-hover:shadow-[0_0_35px_rgba(0,210,255,0.8),inset_0_0_20px_rgba(0,210,255,0.4)] relative z-10`}>
                    <step.icon className="w-7 h-7 relative z-10 group-hover:scale-110 transition-all duration-300" />
                </div>
                
                {/* Text Block */}
                <div className="absolute top-full mt-5 left-1/2 -translate-x-1/2 w-52 text-center transition-all duration-300">
                    <h3 className="text-slate-800 dark:text-slate-200 font-bold text-[13px] tracking-wide group-hover:text-blue-600 dark:group-hover:text-[#00d2ff] group-hover:drop-shadow-[0_0_8px_rgba(0,210,255,0.2)] dark:group-hover:drop-shadow-[0_0_8px_rgba(0,210,255,0.8)] transition-all">{step.title}</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-[11px] mt-1.5 leading-relaxed group-hover:text-slate-700 dark:group-hover:text-slate-200 transition-colors">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Bottom Feature Dock */}
        <div className="relative mt-20 lg:mt-0 z-30 max-w-5xl mx-auto px-2">
           <div className="glass-panel rounded-2xl p-6 lg:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row items-center sm:items-start gap-4 group cursor-default text-center sm:text-left">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center shrink-0 group-hover:bg-blue-600 dark:group-hover:bg-blue-900/60 group-hover:border-blue-500 dark:group-hover:border-[#00d2ff]/50 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] dark:group-hover:shadow-[0_0_20px_rgba(0,210,255,0.3)] transition-all duration-300">
                            <feature.icon className="w-5 h-5 text-blue-500 dark:text-blue-450 group-hover:text-white dark:group-hover:text-[#00d2ff] group-hover:scale-110 transition-all duration-300" />
                        </div>
                        <div className="mt-1 sm:mt-0">
                            <h4 className="text-slate-800 dark:text-slate-200 font-bold text-sm tracking-wide group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{feature.title}</h4>
                            <p className="text-slate-500 dark:text-slate-400 text-xs mt-1.5 leading-relaxed">{feature.desc}</p>
                        </div>
                    </div>
                  ))}
               </div>
           </div>

           {/* CTA Button */}
           <div className="mt-10 flex justify-center pb-10">
               <button className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-900/80 dark:to-purple-900/80 px-8 py-4 text-sm font-bold text-white border border-blue-300 dark:border-blue-500/50 shadow-[0_0_15px_rgba(37,99,235,0.2)] dark:shadow-[0_0_25px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] dark:hover:shadow-[0_0_45px_rgba(0,210,255,0.6)] hover:border-blue-400 dark:hover:border-[#00d2ff] transition-all duration-500 cursor-pointer overflow-hidden">
                   <span className="relative z-10 flex items-center gap-2">
                     See it in Action
                     <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform duration-300" />
                   </span>
                   {/* Hover Glow Background */}
                   <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 dark:from-[#00d2ff]/20 dark:to-[#7000ff]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               </button>
           </div>
        </div>

      </div>
    </section>
  );
}
