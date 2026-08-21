import React, { useState } from 'react';
import Hero from '../components/Hero';
import WhyStruggle from '../components/WhyStruggle';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';
import AIRecommendations from '../components/AIRecommendations';
import GovernmentIntegrations from '../components/GovernmentIntegrations';
import Effortless from '../components/Effortless';
import RevenueModel from '../components/RevenueModel';
import { useComingSoon } from '../context/ComingSoonContext';

export default function Home() {
  const openComingSoon = useComingSoon();

  const [documents, setDocuments] = useState([
    { id: 1, name: 'GST Registration', expiry: 142, status: 'Active' },
    { id: 2, name: 'FSSAI License', expiry: 18, status: 'Renew Soon' },
    { id: 3, name: 'Udyam / MSME', expiry: 312, status: 'Active' },
    { id: 4, name: 'Trade License', expiry: 4, status: 'Action Needed' },
    { id: 5, name: 'Shop & Establishment', expiry: 96, status: 'Active' },
    { id: 6, name: 'Labour License', expiry: 240, status: 'Active' },
  ]);

  const score = Math.round(
    documents.reduce((acc, doc) => {
      const val = doc.status === 'Active' ? 100 : doc.status === 'Renew Soon' ? 90 : 60;
      return acc + val;
    }, 0) / documents.length
  );

  const renewDocument = (id) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id ? { ...doc, status: 'Active', expiry: 365 } : doc
      )
    );
  };

  const handleDocumentFetched = (docName) => {
    setDocuments((prev) => {
      const exists = prev.find((d) => d.name.toLowerCase() === docName.toLowerCase());
      if (exists) {
        return prev.map((d) =>
          d.name.toLowerCase() === docName.toLowerCase()
            ? { ...d, status: 'Active', expiry: 365 }
            : d
        );
      }
      return [
        ...prev,
        { id: prev.length + 1, name: docName, expiry: 365, status: 'Active' },
      ];
    });
  };

  return (
    <>
      <Hero
        documents={documents}
        score={score}
        renewDocument={renewDocument}
        onComingSoon={openComingSoon}
      />
      <WhyStruggle />
      <Features />
      <HowItWorks />
      <AIRecommendations />
      <GovernmentIntegrations onDocumentFetched={handleDocumentFetched} />
      <Effortless />
      <RevenueModel />
    </>
  );
}
