import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import FeaturesPage from './pages/Features';
import Pricing from './pages/Pricing';
import Careers from './pages/Careers';
import Support from './pages/Support';

import Contact from './pages/Contact';
import Faqs from './pages/Faqs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import Security from './pages/Security';
import Documentation from './pages/Documentation';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/support" element={<Support />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/security" element={<Security />} />
        <Route path="/information-security" element={<Security />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
