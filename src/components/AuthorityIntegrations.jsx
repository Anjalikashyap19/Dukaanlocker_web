import React from 'react';
import {
  ShieldCheck,
  FileText,
  Clock,
  Check,
  Lock,
} from 'lucide-react';

/* ==========================================================================
   Authentic Vector Authority Emblems & Logos
   ========================================================================== */

/** National Emblem of India (Ashoka Lion Capital) used for GST & Udyam */
function EmblemOfIndiaSvg({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Central Lion Head */}
      <path
        d="M32 6C34.2 6 36 7.5 36 9.5C36 10.2 35.8 10.8 35.5 11.3C37.2 12.2 38.5 14 38.5 16.2C38.5 17.5 38 18.7 37.2 19.6C38.2 20.8 38.8 22.4 38.8 24.2C38.8 27.5 36.2 30.2 33 30.5V32H31V30.5C27.8 30.2 25.2 27.5 25.2 24.2C25.2 22.4 25.8 20.8 26.8 19.6C26 18.7 25.5 17.5 25.5 16.2C25.5 14 26.8 12.2 28.5 11.3C28.2 10.8 28 10.2 28 9.5C28 7.5 29.8 6 32 6Z"
        fill={color}
      />
      {/* Left Lion Profile */}
      <path
        d="M23 15C21 15 19.5 16.5 19.5 18C19.5 18.6 19.7 19.2 20 19.7C18.8 20.6 18 22.1 18 23.8C18 25.2 18.5 26.4 19.3 27.3C18.5 28.3 18 29.6 18 31C18 33.5 19.8 35.5 22.2 35.9V37.5H24.5V34.5C24.5 33.2 24.8 32 25.5 31L23.5 28.5C22.6 27.4 22.5 25.8 23.2 24.6C24 23.2 24.8 22.2 25 21C25 19.5 24.2 18.2 23 18V15Z"
        fill={color}
        opacity="0.88"
      />
      {/* Right Lion Profile */}
      <path
        d="M41 15C43 15 44.5 16.5 44.5 18C44.5 18.6 44.3 19.2 44 19.7C45.2 20.6 46 22.1 46 23.8C46 25.2 45.5 26.4 44.7 27.3C45.5 28.3 46 29.6 46 31C46 33.5 44.2 35.5 41.8 35.9V37.5H39.5V34.5C39.5 33.2 39.2 32 38.5 31L40.5 28.5C41.4 27.4 41.5 25.8 40.8 24.6C40 23.2 39.2 22.2 39 21C39 19.5 39.8 18.2 41 18V15Z"
        fill={color}
        opacity="0.88"
      />
      {/* Abacus Platform */}
      <rect x="15" y="37" width="34" height="6.5" rx="2" fill={color} />
      {/* Ashoka Chakra in Central Abacus */}
      <circle cx="32" cy="40.2" r="3.2" stroke="#020B1C" strokeWidth="1.2" fill={color} />
      <circle cx="32" cy="40.2" r="1" fill="#020B1C" />
      {/* Lotus / Pedestal Base */}
      <path
        d="M17 45.5C21.5 49 26.5 50.5 32 50.5C37.5 50.5 42.5 49 47 45.5L48.5 52C43.5 55.5 38 57 32 57C26 57 20.5 55.5 15.5 52L17 45.5Z"
        fill={color}
        opacity="0.95"
      />
      {/* Base Foundation Bar */}
      <rect x="18" y="58" width="28" height="3" rx="1.5" fill={color} />
    </svg>
  );
}

/** FSSAI Wordmark / Logo representation for Floating Tile */
function FssaiLogoSvg({ className = "w-12 h-6" }) {
  return (
    <svg
      viewBox="0 0 76 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Stylized 'fssai' lettering */}
      <text
        x="6"
        y="26"
        fontFamily="serif, 'Times New Roman', Georgia"
        fontStyle="italic"
        fontWeight="800"
        fontSize="24"
        fill="#028544"
        letterSpacing="-0.5px"
      >
        fssai
      </text>
      {/* Green leaf / arc flourish */}
      <path
        d="M52 10C56 6 62 7 66 11C61 14 55 13 52 10Z"
        fill="#00D47B"
      />
      {/* Orange accent droplet */}
      <circle cx="67" cy="8" r="3.2" fill="#F57C00" />
    </svg>
  );
}

/** FSSAI Circle Icon for right-side integration list */
function FssaiListIcon({ className = "w-7 h-7" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <text
        x="50%"
        y="58%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="serif, 'Times New Roman', Georgia"
        fontStyle="italic"
        fontWeight="800"
        fontSize="17"
        fill="currentColor"
        letterSpacing="-0.5px"
      >
        fssai
      </text>
    </svg>
  );
}

/** Municipal Trade License Building Logo */
function TradeLicenseBuildingSvg({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Pediment roof triangle */}
      <path
        d="M24 7L8 16H40L24 7Z"
        fill={color}
      />
      {/* Entablature beam */}
      <rect x="9" y="17.5" width="30" height="3" rx="0.75" fill={color} />
      {/* 4 Classical Pillars */}
      <rect x="11.5" y="22" width="4.5" height="15" rx="1" fill={color} />
      <rect x="18.5" y="22" width="4.5" height="15" rx="1" fill={color} />
      <rect x="25" y="22" width="4.5" height="15" rx="1" fill={color} />
      <rect x="32" y="22" width="4.5" height="15" rx="1" fill={color} />
      {/* Foundation steps */}
      <rect x="8" y="38" width="32" height="3" rx="1" fill={color} />
      <rect x="5" y="42" width="38" height="3" rx="1.5" fill={color} opacity="0.9" />
    </svg>
  );
}

/** DigiLocker Document / Cloud Framework Logo for Floating Tile */
function DigiLockerSvg({ className = "w-6 h-6" }) {
  return (
    <svg
      viewBox="0 0 52 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Stylized DigiLocker folded certificate */}
      <path
        d="M13 10C13 8.34315 14.3431 7 16 7H30L39 16V42C39 43.6569 37.6569 45 36 45H16C14.3431 45 13 43.6569 13 42V10Z"
        fill="url(#digiGradient)"
      />
      {/* Folded corner flap */}
      <path
        d="M30 7V14C30 15.1046 30.8954 16 32 16H39L30 7Z"
        fill="#818CF8"
      />
      {/* Cloud cutout */}
      <path
        d="M20 31C18.3431 31 17 29.6569 17 28C17 26.5 18.1 25.3 19.5 25.1C19.9 23.3 21.5 22 23.5 22C25.2 22 26.7 23 27.3 24.5C27.7 24.2 28.3 24 29 24C30.7 24 32 25.3 32 27C32 27.2 32 27.4 31.9 27.6C32.6 28.2 33 29 33 30C33 31.7 31.7 33 30 33H21C20.4 33 20 32.6 20 32V31Z"
        fill="#FFFFFF"
      />
      <defs>
        <linearGradient id="digiGradient" x1="13" y1="7" x2="39" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#3B82F6" />
          <stop offset="1" stopColor="#00CFE8" />
        </linearGradient>
      </defs>
    </svg>
  );
}

/** DigiLocker Outline Cloud Icon for Right List Row */
function DigiLockerRowSvg({ className = "w-6 h-6", color = "currentColor" }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M9 19C7.34315 19 6 17.6569 6 16C6 14.47 7.14 13.2 8.63 13.03C9.17 10.73 11.24 9 13.71 9C15.82 9 17.65 10.27 18.42 12.09C19.04 11.72 19.78 11.5 20.57 11.5C22.78 11.5 24.57 13.29 24.57 15.5C24.57 15.82 24.53 16.13 24.46 16.42C25.38 17.07 26 18.15 26 19.38C26 21.37 24.38 23 22.38 23H9.5C9.22 23 9 22.78 9 22.5V19Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 18.5H19M13 21H17"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

/* ==========================================================================
   Integration & Benefit Datasets
   ========================================================================== */

const INTEGRATION_ROWS = [
  {
    id: 'gst',
    name: 'GST',
    description: 'Goods & Services Tax registration, returns and business details.',
    accent: '#3B82F6', // Blue
    accentRgb: '59, 130, 246',
    icon: <EmblemOfIndiaSvg className="w-6 h-6" color="#3B82F6" />,
  },
  {
    id: 'fssai',
    name: 'FSSAI',
    description: 'Food safety licence verification and document sync.',
    accent: '#00D47B', // Green
    accentRgb: '0, 212, 123',
    icon: <FssaiListIcon className="w-7 h-7" />,
  },
  {
    id: 'udyam',
    name: 'Udyam / MSME',
    description: 'MSME registration, benefits and enterprise details.',
    accent: '#A855F7', // Purple
    accentRgb: '168, 85, 247',
    icon: <EmblemOfIndiaSvg className="w-6 h-6" color="#A855F7" />,
  },
  {
    id: 'trade',
    name: 'Trade License',
    description: 'Municipal trade licence verification and renewal tracking.',
    accent: '#F5B400', // Amber / yellow
    accentRgb: '245, 180, 0',
    icon: <TradeLicenseBuildingSvg className="w-6 h-6" color="#F5B400" />,
  },
  {
    id: 'digilocker',
    name: 'DigiLocker',
    description: 'National document framework integration for your business.',
    accent: '#00CFE8', // Cyan
    accentRgb: '0, 207, 232',
    icon: <DigiLockerRowSvg className="w-6 h-6" color="#00CFE8" />,
  },
];

const BOTTOM_BENEFITS = [
  {
    id: 'verified',
    title: 'Verified sources',
    description: 'Direct integration with government systems',
    icon: <ShieldCheck className="w-5 h-5 text-[#3B82F6]" />,
    iconBg: 'bg-[#3B82F6]/10 border-[#3B82F6]/25',
  },
  {
    id: 'accurate',
    title: 'Accurate information',
    description: 'Fetch and sync official documents',
    icon: <FileText className="w-5 h-5 text-[#38BDF8]" />,
    iconBg: 'bg-[#38BDF8]/10 border-[#38BDF8]/25',
  },
  {
    id: 'ahead',
    title: 'Stay ahead',
    description: 'Get timely renewal reminders',
    icon: <Clock className="w-5 h-5 text-[#818CF8]" />,
    iconBg: 'bg-[#818CF8]/10 border-[#818CF8]/25',
  },
];

/* ==========================================================================
   Main Component: AuthorityIntegrations
   ========================================================================== */

export default function AuthorityIntegrations() {
  return (
    <section
      className="relative w-full overflow-hidden py-20 lg:py-28 text-slate-900 dark:text-white select-none transition-colors duration-300 bg-gradient-to-b from-sky-50/70 via-white to-slate-50 dark:from-[#020B1C] dark:via-[#031226] dark:to-[#07152A]"
      aria-labelledby="authority-heading"
    >
      {/* Background Ambience & Elegant Sweeping Connecting Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Soft Radial Back-glow for Left Phone Area */}
        <div
          className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full blur-[140px] opacity-15 dark:opacity-25"
          style={{ background: 'radial-gradient(circle, #0ea5e9 0%, #1e1b4b 70%, transparent 100%)' }}
        />
        {/* Soft Top Glow */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] rounded-full blur-[160px] opacity-10 dark:opacity-15"
          style={{ background: 'radial-gradient(circle, #38bdf8 0%, transparent 70%)' }}
        />

        {/* Luminous flowing curved paths across the section */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M -100 240 C 250 180, 200 680, 520 620 C 780 570, 950 480, 1540 540"
            stroke="url(#flowLineGrad1)"
            strokeWidth="1.75"
            className="text-blue-600 dark:text-sky-400"
          />
          <path
            d="M 50 120 C 320 280, 280 520, 640 460 C 920 410, 1100 280, 1500 290"
            stroke="url(#flowLineGrad2)"
            strokeWidth="1.25"
            className="text-indigo-600 dark:text-sky-400"
          />
          <defs>
            <linearGradient id="flowLineGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="18%" stopColor="currentColor" stopOpacity="0.25" />
              <stop offset="45%" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="75%" stopColor="currentColor" stopOpacity="0.15" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="flowLineGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="25%" stopColor="currentColor" stopOpacity="0.2" />
              <stop offset="60%" stopColor="currentColor" stopOpacity="0.15" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* ---------------------------------------------------- */}
        {/* 1. TOP HEADING AREA                                  */}
        {/* ---------------------------------------------------- */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Eyebrow */}
          <div className="text-[12px] sm:text-[13px] font-bold uppercase tracking-[0.28em] text-blue-600 dark:text-[#60A5FA] mb-4">
            GOVERNMENT INTEGRATIONS
          </div>

          {/* Main Title */}
          <h2
            id="authority-heading"
            className="text-3xl sm:text-4xl lg:text-[52px] font-extrabold tracking-tight leading-[1.12]"
          >
            <span className="text-slate-900 dark:text-white">Connected to </span>
            <span
              className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-sky-400 dark:via-[#818CF8] dark:to-[#C084FC]"
            >
              every authority
            </span>
          </h2>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-5 text-base sm:text-lg text-slate-600 dark:text-slate-400 font-normal leading-relaxed max-w-2xl sm:max-w-3xl mx-auto">
            One secure workspace for your registrations, licences and compliance documents — with direct government integrations coming soon.
          </p>
        </div>

        {/* ---------------------------------------------------- */}
        {/* 2. MAIN TWO-COLUMN COMPOSITION                       */}
        {/* ---------------------------------------------------- */}
        <div className="mt-14 sm:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* ================================================== */}
          {/* LEFT SIDE: Phone Visual & Floating Authority Cards */}
          {/* ================================================== */}
          <div className="lg:col-span-5 flex justify-center items-center overflow-visible">
            <div className="relative w-full max-w-[340px] sm:max-w-[460px] h-[500px] sm:h-[560px] flex items-center justify-center scale-[0.88] xs:scale-95 sm:scale-100 origin-center">
              
              {/* ---------------------------------------------- */}
              {/* Tilted Smartphone Mockup                       */}
              {/* ---------------------------------------------- */}
              <div
                className="relative z-10 w-[240px] sm:w-[268px] h-[460px] sm:h-[496px] rounded-[40px] p-3 bg-slate-900 dark:bg-[#081222] border-[3px] border-slate-300 dark:border-[#334155]/80 shrink-0 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.22)] dark:shadow-[0_30px_70px_-15px_rgba(0,0,0,0.9),0_0_45px_rgba(56,189,248,0.18)]"
                style={{
                  transform: 'rotate(-7deg)',
                }}
              >
                {/* Metallic button notches on outer rim */}
                <div className="absolute -left-[5px] top-24 w-[3px] h-8 bg-slate-600/90 rounded-l" aria-hidden="true" />
                <div className="absolute -left-[5px] top-36 w-[3px] h-8 bg-slate-600/90 rounded-l" aria-hidden="true" />
                <div className="absolute -right-[5px] top-28 w-[3px] h-12 bg-slate-600/90 rounded-r" aria-hidden="true" />

                {/* Phone Glass Screen */}
                <div className="w-full h-full rounded-[30px] bg-gradient-to-b from-[#09152b] via-[#050d1a] to-[#020712] p-4 flex flex-col justify-between overflow-hidden relative border border-white/10">
                  
                  {/* Dynamic Island / Speaker Pill */}
                  <div className="w-16 h-3.5 bg-[#0a1120] rounded-full mx-auto flex items-center justify-center mb-1 shrink-0 border border-white/5">
                    <div className="w-7 h-1 bg-slate-700 rounded-full" />
                  </div>

                  {/* Inside Screen Header: DukaanLocker Branding */}
                  <div className="flex items-center justify-center gap-1.5 pt-0.5">
                    <div className="w-4 h-4 rounded bg-blue-600/30 border border-blue-400/40 flex items-center justify-center">
                      <Lock className="w-2.5 h-2.5 text-[#38BDF8]" />
                    </div>
                    <span className="text-xs font-bold tracking-tight text-white">
                      Dukaan<span className="text-[#38BDF8]">Locker</span>
                    </span>
                  </div>

                  {/* Inside Screen Title */}
                  <div className="text-center mt-2">
                    <h3 className="text-[13px] sm:text-[15px] font-extrabold text-white leading-tight">
                      All your<br />
                      business documents<br />
                      <span className="text-[#38BDF8]">in one place</span>
                    </h3>
                  </div>

                  {/* Layered Document Graphic with Glowing Shield (Matching Reference) */}
                  <div className="relative my-auto flex items-center justify-center h-32 sm:h-36 w-full">
                    {/* Luminous cyan radial glow behind */}
                    <div
                      className="absolute w-36 h-36 rounded-full pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.45) 0%, rgba(14, 165, 233, 0.18) 50%, transparent 75%)',
                        filter: 'blur(20px)',
                      }}
                    />

                    {/* Back Document Card (tilted -8deg) */}
                    <div
                      className="absolute w-[120px] sm:w-[130px] h-[78px] sm:h-[84px] rounded-xl border border-sky-400/25 shadow-lg"
                      style={{
                        background: 'linear-gradient(135deg, rgba(14, 42, 84, 0.7) 0%, rgba(7, 21, 48, 0.85) 100%)',
                        transform: 'rotate(-8deg) translateY(-2px)',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      {/* Subtle placeholder line bars */}
                      <div className="p-2.5 space-y-1.5 opacity-25">
                        <div className="h-1 w-8 bg-sky-300 rounded" />
                        <div className="h-1 w-14 bg-sky-400/50 rounded" />
                      </div>
                    </div>

                    {/* Middle Document / Folder Card (tilted +4deg) */}
                    <div
                      className="absolute w-[132px] sm:w-[144px] h-[86px] sm:h-[92px] rounded-xl border border-sky-400/35 shadow-xl"
                      style={{
                        background: 'linear-gradient(135deg, rgba(12, 50, 105, 0.75) 0%, rgba(6, 26, 60, 0.9) 100%)',
                        transform: 'rotate(4deg) translateY(2px)',
                        backdropFilter: 'blur(10px)',
                      }}
                    >
                      {/* Subtle tab & line bars */}
                      <div className="p-3 space-y-1.5 opacity-30">
                        <div className="h-1 w-10 bg-cyan-300 rounded" />
                        <div className="h-1 w-16 bg-cyan-400/50 rounded" />
                      </div>
                    </div>

                    {/* Front Main Glass Folder (Centered) */}
                    <div
                      className="absolute w-[145px] sm:w-[158px] h-[96px] sm:h-[104px] rounded-2xl border border-sky-300/50 shadow-2xl flex items-center justify-center overflow-hidden"
                      style={{
                        background: 'linear-gradient(180deg, rgba(14, 58, 120, 0.85) 0%, rgba(5, 23, 56, 0.95) 100%)',
                        boxShadow: '0 12px 30px -5px rgba(0, 0, 0, 0.6), inset 0 1px 1px rgba(255, 255, 255, 0.2)',
                      }}
                    >
                      {/* Faint document lines */}
                      <div className="absolute top-2.5 left-3 space-y-1 opacity-20">
                        <div className="h-1 w-12 bg-sky-200 rounded" />
                        <div className="h-1 w-8 bg-sky-300 rounded" />
                      </div>
                    </div>

                    {/* Front Center Glowing Shield with Padlock */}
                    <div
                      className="relative z-10 w-[54px] sm:w-[60px] h-[62px] sm:h-[68px] rounded-2xl flex items-center justify-center border border-cyan-200/90 transition-transform"
                      style={{
                        background: 'linear-gradient(180deg, #0284c7 0%, #0369a1 100%)',
                        boxShadow: '0 0 35px rgba(56, 189, 248, 0.9), 0 8px 20px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.5)',
                      }}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="white"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-7 h-7 sm:w-8 sm:h-8 text-white drop-shadow-md"
                      >
                        <rect width="14" height="10" x="5" y="11" rx="2" ry="2" />
                        <path d="M8 11V7a4 4 0 0 1 8 0v4" />
                        <circle cx="12" cy="16" r="1.2" fill="white" />
                      </svg>
                    </div>
                  </div>

                  {/* Lower 3 Benefits with Green Checkmarks */}
                  <div className="space-y-2 px-1 mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#00D47B]/20 border border-[#00D47B]/60 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#00D47B] stroke-[3]" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-200">Stay compliant</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#00D47B]/20 border border-[#00D47B]/60 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#00D47B] stroke-[3]" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-200">Never miss renewals</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-3.5 h-3.5 rounded-full bg-[#00D47B]/20 border border-[#00D47B]/60 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-[#00D47B] stroke-[3]" />
                      </div>
                      <span className="text-[11px] font-semibold text-slate-200">Focus on your business</span>
                    </div>
                  </div>

                  {/* Home Indicator Bar */}
                  <div className="w-20 h-1 bg-slate-600/50 rounded-full mx-auto shrink-0 mt-1" />
                </div>
              </div>

              {/* ---------------------------------------------- */}
              {/* 5 FLOATING AUTHORITY TILES AROUND THE PHONE    */}
              {/* ---------------------------------------------- */}

              {/* 1. GST (Upper Left) */}
              <div
                className="absolute top-6 -left-1 sm:-left-2 z-20 w-[96px] sm:w-[108px] rounded-2xl bg-white p-2.5 sm:p-3 shadow-[0_15px_35px_rgba(0,0,0,0.12)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.55)] border border-slate-200/90 dark:border-white/10 text-center flex flex-col items-center justify-center transition-transform hover:scale-105"
                style={{ transform: 'rotate(-6deg)' }}
              >
                <EmblemOfIndiaSvg className="w-6 h-6 text-slate-800" color="#1e293b" />
                <div className="mt-1 text-[11px] font-bold text-slate-900 tracking-tight leading-none">GST</div>
                <div className="mt-0.5 text-[8px] font-medium text-slate-500 leading-tight">Goods & Services Tax</div>
              </div>

              {/* 2. FSSAI (Upper Right) */}
              <div
                className="absolute top-4 -right-1 sm:-right-2 z-20 w-[96px] sm:w-[108px] rounded-2xl bg-white p-2.5 sm:p-3 shadow-[0_15px_35px_rgba(0,0,0,0.12)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.55)] border border-slate-200/90 dark:border-white/10 text-center flex flex-col items-center justify-center transition-transform hover:scale-105"
                style={{ transform: 'rotate(4deg)' }}
              >
                <FssaiLogoSvg className="w-12 h-6" />
                <div className="mt-0.5 text-[11px] font-bold text-slate-900 tracking-tight leading-none">FSSAI</div>
                <div className="mt-0.5 text-[8px] font-medium text-slate-500 leading-tight">Food Safety</div>
              </div>

              {/* 3. UDYAM (Mid Right) */}
              <div
                className="absolute top-[46%] -right-2 sm:-right-5 -translate-y-1/2 z-20 w-[96px] sm:w-[108px] rounded-2xl bg-white p-2.5 sm:p-3 shadow-[0_15px_35px_rgba(0,0,0,0.12)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.55)] border border-slate-200/90 dark:border-white/10 text-center flex flex-col items-center justify-center transition-transform hover:scale-105"
                style={{ transform: 'rotate(2deg)' }}
              >
                <EmblemOfIndiaSvg className="w-6 h-6 text-slate-800" color="#1e293b" />
                <div className="mt-1 text-[11px] font-bold text-slate-900 tracking-tight leading-none">UDYAM</div>
                <div className="mt-0.5 text-[8px] font-medium text-slate-500 leading-tight">MSME</div>
              </div>

              {/* 4. Trade License (Lower Right) */}
              <div
                className="absolute bottom-10 -right-1 sm:-right-3 z-20 w-[106px] sm:w-[118px] rounded-2xl bg-white p-2.5 sm:p-3 shadow-[0_15px_35px_rgba(0,0,0,0.12)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.55)] border border-slate-200/90 dark:border-white/10 text-center flex flex-col items-center justify-center transition-transform hover:scale-105"
                style={{ transform: 'rotate(4deg)' }}
              >
                <TradeLicenseBuildingSvg className="w-6 h-6" color="#D97706" />
                <div className="mt-1 text-[11px] font-bold text-slate-900 tracking-tight leading-none">Trade License</div>
                <div className="mt-0.5 text-[8px] font-medium text-slate-500 leading-tight">Municipal</div>
              </div>

              {/* 5. DigiLocker (Lower Left) */}
              <div
                className="absolute bottom-8 -left-1 sm:-left-3 z-20 w-[112px] sm:w-[124px] rounded-2xl bg-white p-2.5 sm:p-3 shadow-[0_15px_35px_rgba(0,0,0,0.12)] dark:shadow-[0_15px_35px_rgba(0,0,0,0.55)] border border-slate-200/90 dark:border-white/10 text-center flex flex-col items-center justify-center transition-transform hover:scale-105"
                style={{ transform: 'rotate(-4deg)' }}
              >
                <DigiLockerSvg className="w-7 h-7" />
                <div className="mt-0.5 text-[11px] font-bold text-slate-900 tracking-tight leading-none">DigiLocker</div>
                <div className="mt-0.5 text-[8px] font-medium text-slate-500 leading-tight">Government Documents</div>
              </div>

            </div>
          </div>

          {/* ================================================== */}
          {/* RIGHT SIDE: Clean 5 Government Integration Rows    */}
          {/* ================================================== */}
          <div className="lg:col-span-7 flex flex-col">
            <div className="divide-y divide-slate-200/80 dark:divide-white/[0.08]">
              {INTEGRATION_ROWS.map((row) => (
                <div
                  key={row.id}
                  className="py-5 sm:py-6 flex items-center justify-between gap-4 transition-colors duration-200 hover:bg-slate-100/60 dark:hover:bg-white/[0.02] px-3 -mx-3 rounded-2xl"
                >
                  {/* Left: Circular Icon Container */}
                  <div
                    className="w-12 h-12 sm:w-13 sm:h-13 rounded-full flex items-center justify-center shrink-0 border transition-transform duration-200"
                    style={{
                      backgroundColor: `rgba(${row.accentRgb}, 0.12)`,
                      borderColor: `rgba(${row.accentRgb}, 0.28)`,
                      color: row.accent,
                    }}
                  >
                    {row.icon}
                  </div>

                  {/* Middle: Title and Description */}
                  <div className="flex-1 min-w-0 pr-2">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white tracking-tight">
                      {row.name}
                    </h3>
                    <p className="mt-0.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      {row.description}
                    </p>
                  </div>

                  {/* Right: Small Outlined "COMING SOON" Badge */}
                  <div className="shrink-0">
                    <span
                      className="inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold tracking-wider uppercase border"
                      style={{
                        backgroundColor: `rgba(${row.accentRgb}, 0.08)`,
                        borderColor: `rgba(${row.accentRgb}, 0.35)`,
                        color: row.accent,
                      }}
                    >
                      COMING SOON
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ---------------------------------------------------- */}
        {/* 3. BOTTOM BENEFITS STRIP                             */}
        {/* ---------------------------------------------------- */}
        <div className="mt-16 sm:mt-22 rounded-2xl sm:rounded-3xl bg-white/80 dark:bg-[#061226]/80 border border-slate-200/90 dark:border-white/[0.08] backdrop-blur-md p-5 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.06)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80 dark:divide-white/[0.08] gap-5 md:gap-0">
            {BOTTOM_BENEFITS.map((benefit, idx) => (
              <div
                key={benefit.id}
                className={`flex items-center gap-4 ${
                  idx === 0
                    ? 'md:pr-6'
                    : idx === BOTTOM_BENEFITS.length - 1
                    ? 'pt-4 md:pt-0 md:pl-6'
                    : 'pt-4 md:pt-0 md:px-6'
                }`}
              >
                {/* Circular Icon Container */}
                <div
                  className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center shrink-0 border ${benefit.iconBg}`}
                >
                  {benefit.icon}
                </div>

                {/* Content */}
                <div className="min-w-0">
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                    {benefit.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-0.5 leading-snug">
                    {benefit.description}
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
