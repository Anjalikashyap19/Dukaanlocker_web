import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';

const WAVEFORM_BARS = [
  { height: 6, duration: 0.85, delay: 0.1 },
  { height: 14, duration: 0.65, delay: 0.25 },
  { height: 8, duration: 0.9, delay: 0.05 },
  { height: 22, duration: 0.55, delay: 0.2 },
  { height: 8, duration: 0.8, delay: 0.15 },
  { height: 14, duration: 0.6, delay: 0.3 },
  { height: 6, duration: 0.75, delay: 0.0 },
];

export default function FullscreenVideoIntro() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Respect prefers-reduced-motion
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mq.matches) {
      video.pause();
    } else {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser autoplay policy fallback
        });
      }
    }

    const handleMotionChange = (e) => {
      if (e.matches) {
        video.pause();
      } else {
        video.play().catch(() => {});
      }
    };

    mq.addEventListener('change', handleMotionChange);
    return () => mq.removeEventListener('change', handleMotionChange);
  }, []);

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    const nextMuted = !video.muted;
    video.muted = nextMuted;
    setIsMuted(nextMuted);
  };

  const scrollToHero = () => {
    if (window.__lenis) {
      window.__lenis.scrollTo('#home', { duration: 1.2 });
    } else {
      const heroSection = document.getElementById('home');
      if (heroSection) {
        heroSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
      }
    }
  };

  const handleVideoEnded = () => {
    const scrollY = window.scrollY || window.pageYOffset;
    if (scrollY < window.innerHeight * 0.5) {
      scrollToHero();
    }
  };

  const handleVideoClick = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.ended) {
      video.currentTime = 0;
      video.play().catch(() => {});
    }
  };

  return (
    <section
      id="intro-video"
      className="video-intro-section relative w-full h-screen h-[100dvh] overflow-hidden bg-[#02050b] m-0 p-0 select-none"
      aria-label="DukaanLocker Cinematic Introduction"
    >
      {/* 100vw x 100vh Fullscreen Video - Plays once and triggers auto-scroll when completed */}
      <video
        ref={videoRef}
        autoPlay
        muted={isMuted}
        playsInline
        webkit-playsinline="true"
        preload="metadata"
        poster="/videos/hero-poster.webp"
        onClick={handleVideoClick}
        onEnded={handleVideoEnded}
        className="w-full h-full object-cover block m-0 p-0"
        aria-label="DukaanLocker 3D Cloud Vault Product Presentation"
      >
        <source src="/videos/hero-vault.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Audio Waveform Toggle at Top Right Corner (Matches Image 2) */}
      <button
        type="button"
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        title={isMuted ? 'Click to unmute sound' : 'Click to mute sound'}
        className={`absolute top-6 right-6 md:top-8 md:right-8 z-30 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-2xl border backdrop-blur-md transition-all duration-200 cursor-pointer shadow-lg group ${
          isMuted
            ? 'bg-black/40 border-white/20 hover:bg-black/60 hover:border-white/40 hover:scale-105'
            : 'bg-black/60 border-white/40 ring-1 ring-white/25 hover:bg-black/75 hover:scale-105'
        }`}
      >
        <div className="flex items-center justify-center gap-[2.5px] h-6 px-1">
          {WAVEFORM_BARS.map((bar, idx) => (
            <span
              key={idx}
              className="w-[2.5px] rounded-full bg-white"
              style={{
                height: `${bar.height}px`,
                transformOrigin: 'center',
                animation: !isMuted
                  ? `sound-wave-bounce ${bar.duration}s ease-in-out infinite alternate ${bar.delay}s`
                  : 'none',
              }}
            />
          ))}
        </div>
      </button>

      {/* Subtle Scroll Cue at Bottom Center */}
      <button
        type="button"
        onClick={scrollToHero}
        aria-label="Scroll to DukaanLocker homepage"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-white/75 hover:text-white transition-all hover:scale-105 cursor-pointer group"
      >
        <span className="text-[11px] font-medium tracking-widest uppercase text-white/70 group-hover:text-white transition-colors drop-shadow-sm">
          Scroll to explore
        </span>
        <div className="grid h-7 w-7 place-items-center rounded-full bg-black/40 border border-white/15 backdrop-blur-sm group-hover:bg-black/60 transition-all shadow-md animate-bounce">
          <ChevronDown className="h-4 w-4 text-white" />
        </div>
      </button>
    </section>
  );
}
