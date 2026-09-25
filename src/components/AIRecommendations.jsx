import React, { useState } from 'react';
import { ChefHat, ShoppingBag, Pill, Scissors, Factory, CheckSquare, Square, Info } from 'lucide-react';
import { useScrollRevealAll } from '../hooks/usePremium';

export default function AIRecommendations() {
  const [activeTab, setActiveTab] = useState('food');
  const [selectedLicenses, setSelectedLicenses] = useState({});
  const sectionRef = useScrollRevealAll();

  const categories = [
    { id: 'food', name: 'Food Business', icon: <ChefHat className="h-4 w-4" /> },
    { id: 'retail', name: 'Retail Shop', icon: <ShoppingBag className="h-4 w-4" /> },
    { id: 'pharmacy', name: 'Pharmacy', icon: <Pill className="h-4 w-4" /> },
    { id: 'salon', name: 'Salon & Spa', icon: <Scissors className="h-4 w-4" /> },
    { id: 'manufacturing', name: 'Manufacturing', icon: <Factory className="h-4 w-4" /> },
  ];

  const recommendations = {
    food: [
      { id: 'fssai', name: 'FSSAI License / Registration', auth: 'Food Safety and Standards Authority of India', crit: 'Mandatory', desc: 'Required for all food business operators including packaging and sales.' },
      { id: 'gst', name: 'GST Registration', auth: 'Department of Revenue', crit: 'Mandatory', desc: 'Mandatory if turnover exceeds ₹40 Lakhs (₹20 Lakhs for services).' },
      { id: 'shop_est', name: 'Shop & Establishment License', auth: 'State Labour Department', crit: 'Mandatory', desc: 'Regulates working hours, employment terms, and shop operations.' },
      { id: 'trade', name: 'MCD Trade License', auth: 'Municipal Corporation', crit: 'Required', desc: 'Allows the store to carry out trade activities in local municipal area.' },
    ],
    retail: [
      { id: 'gst', name: 'GST Registration', auth: 'Department of Revenue', crit: 'Mandatory', desc: 'Crucial for tax inputs, inter-state sales, and purchasing from manufacturers.' },
      { id: 'shop_est', name: 'Shop & Establishment License', auth: 'State Labour Department', crit: 'Mandatory', desc: 'Register within 30 days of starting shop operations.' },
      { id: 'udyam', name: 'MSME Udyam Registration', auth: 'Ministry of MSME', crit: 'Recommended', desc: 'Provides access to low-interest loans, government schemes, and subsidies.' },
      { id: 'trade', name: 'Local Trade License', auth: 'Municipal Corporation', crit: 'Required', desc: 'Confirms that the business complies with local safety laws and zoning.' },
    ],
    pharmacy: [
      { id: 'drug', name: 'Drug License (Retail)', auth: 'State Drug Control Organization', crit: 'Mandatory', desc: 'Specialized license to stock, sell, or distribute pharmaceutical goods.' },
      { id: 'gst', name: 'GST Registration', auth: 'Department of Revenue', crit: 'Mandatory', desc: 'Required for selling drugs and medicine components.' },
      { id: 'shop_est', name: 'Shop & Establishment License', auth: 'State Labour Department', crit: 'Mandatory', desc: 'Mandatory shop registry for retail medical premises.' },
      { id: 'udyam', name: 'MSME Udyam Registration', auth: 'Ministry of MSME', crit: 'Recommended', desc: 'Provides legal MSME status and credit benefits.' },
    ],
    salon: [
      { id: 'shop_est', name: 'Shop & Establishment License', auth: 'State Labour Department', crit: 'Mandatory', desc: 'Primary document for operating commercial service premises.' },
      { id: 'trade', name: 'MCD Health Trade License', auth: 'Municipal Corporation', crit: 'Mandatory', desc: 'Verifies safety, water supply sanitation, and hygiene facilities.' },
      { id: 'prof_tax', name: 'Professional Tax Registration', auth: 'State Commercial Tax Department', crit: 'Required', desc: 'Applies to salaried employees and professionals working in salons.' },
      { id: 'udyam', name: 'MSME Udyam Registration', auth: 'Ministry of MSME', crit: 'Recommended', desc: 'Helps in obtaining collateral-free loans for salon equipment.' },
    ],
    manufacturing: [
      { id: 'factory', name: 'Factory License', auth: 'Directorate of Industrial Safety', crit: 'Mandatory', desc: 'Required if operating factory machines with 10+ workers.' },
      { id: 'pollution', name: 'Pollution NOC (Consent to Operate)', auth: 'State Pollution Control Board', crit: 'Mandatory', desc: 'Consent relating to air emissions, waste discharge, and noise limits.' },
      { id: 'gst', name: 'GST Registration', auth: 'Department of Revenue', crit: 'Mandatory', desc: 'Mandatory for all inter-state supply and manufacturing sales.' },
      { id: 'udyam', name: 'MSME Udyam Registration', auth: 'Ministry of MSME', crit: 'Mandatory', desc: 'Critical for credit guarantees, subsidy claims, and priority sector lending.' },
    ],
  };

  const toggleLicenseSelect = (id) => {
    setSelectedLicenses((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="compliance" className="relative py-24 border-t border-border" ref={sectionRef}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
            AI Compliance Assistant
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Know Your Compliance Stack
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Select your business category to instantly see the primary licenses, permits, and tax registrations required by Indian law.
          </p>
          <div className="section-line" aria-hidden="true" />
        </div>

        {/* Tab Controls */}
        <div className="reveal mt-12 flex flex-wrap justify-center gap-2">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[var(--gradient-brand)] text-white shadow-glow'
                  : 'border border-border bg-card text-ink-soft hover:bg-secondary hover:text-ink shadow-soft'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        {/* Recommendation Checklist Box */}
        <div className="reveal mx-auto mt-8 max-w-3xl rounded-3xl glass-dark p-4 shadow-card sm:p-6">
          <div className="flex items-center justify-between border-b border-border pb-4 mb-4">
            <div>
              <span className="text-xs font-semibold text-brand uppercase tracking-wider">Required Licenses</span>
              <h3 className="text-base font-bold text-ink mt-0.5">Recommendations for {categories.find((c) => c.id === activeTab)?.name}</h3>
            </div>
            <div className="text-xs text-ink-soft flex items-center gap-1">
              <Info className="h-3.5 w-3.5 text-brand" /> Check items to mock add them
            </div>
          </div>

          <div className="reveal-stagger space-y-3">
            {recommendations[activeTab].map((rec) => {
              const isSelected = selectedLicenses[rec.id];
              return (
                <div
                  key={rec.id}
                  onClick={() => toggleLicenseSelect(rec.id)}
                  className={`group flex items-start gap-4 rounded-2xl p-4 transition cursor-pointer ${
                    isSelected
                      ? 'bg-brand/5 border border-brand/20 dark:bg-brand/10'
                      : 'bg-card border border-border hover:border-brand/30 hover:shadow-card'
                  }`}
                >
                  <div className="mt-1 shrink-0">
                    {isSelected ? (
                      <CheckSquare className="h-5 w-5 text-brand" />
                    ) : (
                      <Square className="h-5 w-5 text-ink-soft group-hover:text-brand transition-colors" />
                    )}
                  </div>
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
                      <h4 className={`font-bold text-sm ${isSelected ? 'text-brand' : 'text-ink group-hover:text-brand'} transition-colors`}>{rec.name}</h4>
                      <span className={`inline-block rounded px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                        rec.crit === 'Mandatory' ? 'bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400' 
                        : rec.crit === 'Required' ? 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400'
                        : 'bg-blue-100 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400'
                      }`}>
                        {rec.crit}
                      </span>
                    </div>
                    <div className="mt-1 text-xs font-medium text-ink-soft opacity-80">{rec.auth}</div>
                    <p className="mt-2 text-sm text-ink-soft leading-relaxed">{rec.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
