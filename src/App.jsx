import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import FeaturesPage from './pages/Features';
import Pricing from './pages/Pricing';
import Careers from './pages/Careers';
import Support from './pages/Support';

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
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}
