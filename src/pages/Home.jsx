import React from 'react';
import FullscreenVideoIntro from '../components/FullscreenVideoIntro';
import HomePlatformSection from '../components/HomePlatformSection';
import WhyStruggle from '../components/WhyStruggle';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import AIRecommendations from '../components/AIRecommendations';
import Effortless from '../components/Effortless';
import RevenueModel from '../components/RevenueModel';
import { useComingSoon } from '../context/ComingSoonContext';

export default function Home() {
  const openComingSoon = useComingSoon();

  return (
    <>
      <FullscreenVideoIntro />
      <HomePlatformSection onComingSoon={openComingSoon} />
      <WhyStruggle />
      <Features />
      <HowItWorks />
      <AIRecommendations />
      <Effortless />
      <RevenueModel />
    </>
  );
}
