import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Building2, FileText, Brain, Database, Clock, AlertTriangle } from 'lucide-react';

const STRUGGLES = [
  { id: 1, Icon: Building2, title: '6.4 Crore',  description: 'Businesses'       },
  { id: 2, Icon: FileText,  title: '10+',         description: 'Documents per Shop'},
  { id: 3, Icon: Brain,     title: 'Low',         description: 'Awareness'         },
  { id: 4, Icon: Database,  title: 'Multiple',    description: 'Departments'       },
  { id: 5, Icon: Clock,     title: 'Missed',      description: 'Renewals'          },
  { id: 6, Icon: AlertTriangle, title: 'Penalties', description: '& Risks'        },
];

const COUNT = STRUGGLES.length;
const STEP_DEG = 360 / COUNT;

export default function WhyStruggle() {
  const [animOffset, setAnimOffset] = useState(90);
  const animFrameRef = useRef(null);
  const animOffsetRef = useRef(90);

  // Responsive radii
  const [orbitDims, setOrbitDims] = useState({ rx: 360, ry: 200 });

  useEffect(() => {
    const handleResize = () => {
      const w = window.innerWidth;
      if (w < 640) setOrbitDims({ rx: 140, ry: 180 });
      else if (w < 1024) setOrbitDims({ rx: 260, ry: 190 });
      else setOrbitDims({ rx: 360, ry: 200 });
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* ── smooth continuous auto-rotation loop ── */
  const animate = useCallback(() => {
    animOffsetRef.current = (animOffsetRef.current + 0.15) % 360;
    setAnimOffset(animOffsetRef.current);
    
    animFrameRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animFrameRef.current = requestAnimationFrame(animate);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [animate]);

  /* ── geometry calculations ── */
  const getItemProps = useCallback((index) => {
    const angleDeg = (index * STEP_DEG + animOffset) % 360;
    const angleRad = (angleDeg * Math.PI) / 180;

    const { rx, ry } = orbitDims;
    const x = rx * Math.cos(angleRad);
    const y = ry * Math.sin(angleRad);

    const distToBottom = Math.min(
      Math.abs(angleDeg - 90),
      360 - Math.abs(angleDeg - 90)
    );

    const t = Math.max(0, 1 - distToBottom / 45); 
    const ease = t * t * (3 - 2 * t); 

    const scale   = 0.85 + ease * 0.45;   
    const opacity = 0.75 + ease * 0.25;   
    const zIndex  = Math.round(y + 1000);
    const isActive = distToBottom < 20;

    return { x, y, scale, opacity, zIndex, isActive };
  }, [animOffset, orbitDims]);

  return (
    <section className="relative border-t border-slate-200 dark:border-white/5 overflow-hidden select-none text-slate-900 dark:text-white transition-colors duration-500">
      {/* ── Ambient Background Glows ── */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60 mix-blend-multiply dark:mix-blend-screen transition-colors duration-500"
        style={{
          width: '100vw', height: '100vh',
          background: 'radial-gradient(ellipse at center, var(--ambient-glow) 0%, transparent 60%)',
          filter: 'blur(60px)',
        }}
      />

      {/* ── Heading block at the top ── */}
      <div className="relative z-[500] flex flex-col items-center justify-center w-full max-w-4xl mx-auto pt-20 px-6 text-center">
        <div className="inline-flex items-center gap-2 mb-6 border border-blue-200 dark:border-white/10 rounded-full bg-blue-50 dark:bg-white/5 px-4 py-1.5 backdrop-blur-md shadow-sm dark:shadow-lg transition-colors duration-500">
          <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase text-blue-600 dark:text-blue-400">
            The Problem
          </span>
        </div>
        <h2 className="font-extrabold tracking-tight text-slate-900 dark:text-white drop-shadow-sm dark:drop-shadow-2xl transition-colors duration-500"
            style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}>
          Why Small Businesses Struggle
        </h2>
        <p className="mt-4 md:mt-6 text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto transition-colors duration-500"
           style={{ fontSize: 'clamp(1rem, 1.2vw, 1.1rem)' }}>
          A fragmented compliance landscape forces shop owners to juggle
          paperwork across dozens of departments — often without realising
          what's at stake.
        </p>
      </div>

      {/* ── Auto-rotating Orbit Area ── */}
      <div
        className="relative mx-auto flex items-center justify-center min-h-[600px] md:min-h-[700px] w-full"
      >
        
        {/* ── Center SVG Shield Lock (Image Reference) ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[0] flex items-center justify-center animate-pulse-slow">
          <div className="relative flex flex-col items-center justify-center mt-[-20px]">
            
            {/* CRED-style Multi-layered Holographic Base */}
            <div className="absolute bottom-[-45px] flex flex-col items-center justify-center w-full">
               {/* Deep ambient glow floor */}
               <div className="absolute top-[20px] w-56 h-12 bg-blue-400/30 dark:bg-blue-600/40 blur-2xl rounded-[100%] transition-colors duration-500" />
               {/* Outer ring */}
               <div className="absolute top-[0px] w-[200px] h-[55px] border border-blue-400/20 dark:border-blue-500/20 rounded-[100%] shadow-[0_0_30px_rgba(59,130,246,0.15)] dark:shadow-[0_0_30px_rgba(37,99,235,0.2)] bg-gradient-to-b from-transparent to-blue-500/10 dark:to-blue-900/20 backdrop-blur-[2px] transition-colors duration-500" />
               {/* Middle ring */}
               <div className="absolute top-[10px] w-[150px] h-[40px] border border-blue-300/40 dark:border-blue-400/30 rounded-[100%] bg-blue-100/50 dark:bg-blue-900/40 shadow-[inset_0_4px_15px_rgba(59,130,246,0.1)] dark:shadow-[inset_0_4px_15px_rgba(59,130,246,0.2)] backdrop-blur-md transition-colors duration-500" />
               {/* Inner solid glowing core */}
               <div className="absolute top-[18px] w-[100px] h-[25px] border-t border-blue-400/50 dark:border-blue-300/50 rounded-[100%] bg-gradient-to-r from-blue-400/30 via-blue-300/60 to-blue-400/30 dark:from-blue-600/40 dark:via-blue-400/60 dark:to-blue-600/40 blur-[1px] shadow-[0_-5px_15px_rgba(59,130,246,0.3)] dark:shadow-[0_-5px_15px_rgba(59,130,246,0.5)] transition-colors duration-500" />
               <div className="absolute top-[25px] w-[50px] h-[10px] bg-white/40 dark:bg-white/20 blur-[2px] rounded-[100%] transition-colors duration-500" />
            </div>
            
            {/* Holographic Concentric Rings under the shield */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[220px] border border-blue-400/20 dark:border-blue-500/15 rounded-full transition-colors duration-500" style={{ transform: 'rotateX(75deg)' }} />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-blue-400/10 dark:border-blue-500/5 rounded-full transition-colors duration-500" style={{ transform: 'rotateX(75deg)' }} />

            {/* Glowing Shield SVG */}
            <svg width="140" height="155" viewBox="0 0 120 135" fill="none" xmlns="http://www.w3.org/2000/svg" className="relative z-10 drop-shadow-lg dark:drop-shadow-[0_0_25px_rgba(59,130,246,0.6)] transition-all duration-500">
              {/* Outer Glow Shield */}
              <path d="M60 0L110 22V55C110 88 88 115 60 135C32 115 10 88 10 55V22L60 0Z" fill="url(#shieldGlow)" opacity="0.4"/>
              
              {/* Inner Solid Shield */}
              <path d="M60 5L103 24.5V55C103 84 83 108 60 125C37 108 17 84 17 55V24.5L60 5Z" fill="url(#shieldGrad)" stroke="url(#shieldBorder)" strokeWidth="2"/>
              
              {/* Inner Shield Glossy Highlight */}
              <path d="M60 5L103 24.5V55C103 84 83 108 60 125C60 125 60 5 60 5Z" fill="white" opacity="0.07"/>

              {/* Padlock Body */}
              <rect x="42" y="65" width="36" height="28" rx="6" fill="#ffffff" />
              {/* Padlock Shackle */}
              <path d="M48 65V53C48 46.3726 53.3726 41 60 41C66.6274 41 72 46.3726 72 53V65" stroke="#ffffff" strokeWidth="6" strokeLinecap="round" />
              {/* Padlock Keyhole */}
              <circle cx="60" cy="76" r="3" className="fill-blue-500 transition-colors duration-500" />
              <path d="M58.5 76L57 84H63L61.5 76H58.5Z" className="fill-blue-500 transition-colors duration-500" />
              
              <defs>
                <linearGradient id="shieldGrad" x1="60" y1="5" x2="60" y2="125" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--shield-grad-1)" className="transition-all duration-500" />
                  <stop offset="1" stopColor="var(--shield-grad-2)" className="transition-all duration-500" />
                </linearGradient>
                <linearGradient id="shieldBorder" x1="17" y1="5" x2="103" y2="125" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--shield-border-1)" className="transition-all duration-500" />
                  <stop offset="1" stopColor="var(--shield-border-2)" stopOpacity="0" className="transition-all duration-500" />
                </linearGradient>
                <radialGradient id="shieldGlow" cx="50%" cy="50%" r="50%">
                  <stop stopColor="var(--shield-glow-1)" stopOpacity="1" className="transition-all duration-500" />
                  <stop offset="1" stopColor="var(--shield-glow-2)" stopOpacity="0" className="transition-all duration-500" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* ── Orbital SVG Path ── */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-[10]">
          <svg 
            width={orbitDims.rx * 2 + 40} 
            height={orbitDims.ry * 2 + 40} 
            viewBox={`0 0 ${orbitDims.rx * 2 + 40} ${orbitDims.ry * 2 + 40}`}
          >
            <ellipse 
              cx={orbitDims.rx + 20} 
              cy={orbitDims.ry + 20} 
              rx={orbitDims.rx} 
              ry={orbitDims.ry} 
              className="stroke-slate-300 dark:stroke-blue-500/10 transition-colors duration-500" 
              strokeWidth="2" 
              fill="none" 
              strokeDasharray="6 12" 
            />
            {/* Glowing dash moving along the track */}
            <ellipse 
              cx={orbitDims.rx + 20} 
              cy={orbitDims.ry + 20} 
              rx={orbitDims.rx} 
              ry={orbitDims.ry} 
              className="stroke-blue-500 dark:stroke-blue-500 transition-colors duration-500 drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]"
              strokeWidth="2" 
              fill="none" 
              strokeDasharray="20 2000" 
              style={{ animation: 'dashMove 20s linear infinite' }}
            />
          </svg>
        </div>

        {/* ── Orbit Squircle Items ── */}
        {STRUGGLES.map(({ id, Icon, title, description }, index) => {
          const { x, y, scale, opacity, zIndex, isActive } = getItemProps(index);
          return (
            <div
              key={id}
              className="absolute will-change-transform"
              style={{
                top: '50%',
                left: '50%',
                transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                zIndex,
                transition: 'none', // Managed by requestAnimationFrame
              }}
            >
              {/* The Squircle Card - Fully Adaptable */}
              <div 
                className="relative flex flex-col items-center justify-center text-center transition-all duration-300"
                style={{
                  width: 130,
                  height: 130,
                  borderRadius: 28, 
                  background: isActive ? 'var(--card-bg-active)' : 'var(--card-bg)',
                  border: isActive ? '1px solid var(--card-border-active)' : '1px solid var(--card-border)',
                  boxShadow: isActive ? 'var(--card-shadow-active)' : 'var(--card-shadow)',
                  backdropFilter: 'blur(16px)',
                  transform: `scale(${scale})`,
                  opacity,
                }}
              >
                {/* Active Inner Glow */}
                {isActive && (
                  <div className="absolute inset-0 rounded-[28px] pointer-events-none transition-all duration-300" 
                       style={{ background: 'radial-gradient(circle at top, var(--glow-active) 0%, transparent 70%)' }} />
                )}

                {/* ID Number */}
                <div className="absolute top-3 right-3 text-[10px] font-bold transition-colors duration-300"
                     style={{ color: isActive ? 'var(--id-active)' : 'var(--id-color)' }}>
                  0{id}
                </div>

                {/* Icon */}
                <div 
                  className="mb-2 p-2 rounded-2xl transition-colors duration-300"
                  style={{
                    background: isActive ? 'var(--icon-bg-active)' : 'transparent',
                    color: isActive ? 'var(--icon-active)' : 'var(--icon-color)'
                  }}
                >
                  <Icon size={28} strokeWidth={isActive ? 2.5 : 2} />
                </div>
                
                {/* Title */}
                <h3 className="font-bold text-[15px] leading-tight mb-1 transition-colors duration-300"
                    style={{ 
                      color: isActive ? 'var(--text-title-active)' : 'var(--text-title)',
                      textShadow: isActive ? 'var(--text-shadow-active)' : 'none' 
                    }}>
                  {title}
                </h3>
                
                {/* Description */}
                <p className="text-[10px] font-medium tracking-wide uppercase transition-colors duration-300"
                   style={{ color: isActive ? 'var(--text-desc-active)' : 'var(--text-desc)' }}>
                  {description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <style>{`
        :root, html {
          --ambient-glow: rgba(59, 130, 246, 0.1);
          --shield-grad-1: #60a5fa;
          --shield-grad-2: #2563eb;
          --shield-border-1: #93c5fd;
          --shield-border-2: #3b82f6;
          --shield-glow-1: #93c5fd;
          --shield-glow-2: #3b82f6;
          
          --card-bg: rgba(255,255,255,0.8);
          --card-bg-active: rgba(255,255,255,1);
          --card-border: rgba(0,0,0,0.1);
          --card-border-active: rgba(59,130,246,0.6);
          --card-shadow: 0 4px 6px -1px rgba(0,0,0,0.05), inset 0 1px 1px rgba(255,255,255,1);
          --card-shadow-active: 0 20px 40px -10px rgba(59,130,246,0.3), inset 0 1px 1px rgba(255,255,255,1);
          --glow-active: rgba(59,130,246,0.15);
          --id-color: rgba(0,0,0,0.4);
          --id-active: rgba(37,99,235,0.9);
          --icon-color: #334155;
          --icon-active: #2563eb;
          --icon-bg-active: rgba(59,130,246,0.15);
          --text-title: #0f172a;
          --text-title-active: #000000;
          --text-shadow-active: none;
          --text-desc: #475569;
          --text-desc-active: #2563eb;
        }

        html.dark, .dark {
          --ambient-glow: rgba(37, 99, 235, 0.15);
          --shield-grad-1: #3b82f6;
          --shield-grad-2: #1e3a8a;
          --shield-border-1: #bfdbfe;
          --shield-border-2: #2563eb;
          --shield-glow-1: #60a5fa;
          --shield-glow-2: #1e3a8a;
          
          --card-bg: rgba(15,23,42,0.6);
          --card-bg-active: rgba(15,23,42,0.95);
          --card-border: rgba(255,255,255,0.08);
          --card-border-active: rgba(59,130,246,0.6);
          --card-shadow: inset 0 1px 1px rgba(255,255,255,0.05);
          --card-shadow-active: 0 20px 40px -10px rgba(59,130,246,0.3), inset 0 1px 1px rgba(255,255,255,0.1);
          --glow-active: rgba(59,130,246,0.2);
          --id-color: rgba(255,255,255,0.3);
          --id-active: rgba(96,165,250,0.8);
          --icon-color: #94a3b8;
          --icon-active: #60a5fa;
          --icon-bg-active: rgba(59,130,246,0.15);
          --text-title: #f8fafc;
          --text-title-active: #ffffff;
          --text-shadow-active: 0 0 12px rgba(255,255,255,0.3);
          --text-desc: #94a3b8;
          --text-desc-active: #93c5fd;
        }

        @keyframes dashMove {
          from { stroke-dashoffset: 2000; }
          to { stroke-dashoffset: 0; }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.95; }
          50% { transform: scale(1.08); opacity: 1; }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
