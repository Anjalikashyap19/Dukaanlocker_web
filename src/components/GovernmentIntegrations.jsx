import React, { useState } from 'react';
import { Database, RefreshCw, CheckCircle, Terminal, Play, Check } from 'lucide-react';

export default function GovernmentIntegrations({ onDocumentFetched }) {
  const [activeTab, setActiveTab] = useState('gst');
  const [inputs, setInputs] = useState({
    gst: '',
    fssai: '',
    udyam: '',
    shop: '',
  });
  const [status, setStatus] = useState({
    gst: 'idle', // idle, loading, success
    fssai: 'idle',
    udyam: 'idle',
    shop: 'idle',
  });

  const apiDetails = {
    gst: {
      label: 'GSTIN Number',
      placeholder: 'e.g. 07AAAAA1111A1Z1',
      docName: 'GST Registration',
      endpoint: 'POST /api/v1/verify/gstin',
      code: `{
  "gstin": "07AAAAA1111A1Z1",
  "source": "GSTN Portal",
  "consent": true
}`
    },
    fssai: {
      label: 'FSSAI License Number',
      placeholder: 'e.g. 10021011000123',
      docName: 'FSSAI License',
      endpoint: 'POST /api/v1/verify/fssai',
      code: `{
  "fssai_no": "10021011000123",
  "source": "FOSCOS Portal",
  "consent": true
}`
    },
    udyam: {
      label: 'Udyam Registration Number',
      placeholder: 'e.g. UDYAM-DL-01-1234567',
      docName: 'Udyam / MSME',
      endpoint: 'POST /api/v1/verify/udyam',
      code: `{
  "udyam_no": "UDYAM-DL-01-1234567",
  "source": "Udyam Portal",
  "consent": true
}`
    },
    shop: {
      label: 'Shop & Establishment License Number',
      placeholder: 'e.g. 2026001234',
      docName: 'Shop & Establishment',
      endpoint: 'POST /api/v1/verify/shop-est',
      code: `{
  "license_no": "2026001234",
  "source": "State Labor Portal",
  "consent": true
}`
    },
  };

  const handleInputChange = (key, value) => {
    setInputs((prev) => ({ ...prev, [key]: value }));
  };

  const triggerFetch = (key) => {
    if (!inputs[key]) return;
    
    setStatus((prev) => ({ ...prev, [key]: 'loading' }));

    setTimeout(() => {
      setStatus((prev) => ({ ...prev, [key]: 'success' }));
      // Trigger callback to update global document state & score
      if (onDocumentFetched) {
        onDocumentFetched(apiDetails[key].docName);
      }
    }, 1500);
  };

  return (
    <section className="relative py-24 border-t border-border bg-gradient-to-b from-transparent to-brand-soft/20 dark:to-brand-soft/5">
      <div className="mx-auto max-w-7xl px-4">
        {/* Title */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand/20 bg-brand-soft/50 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand backdrop-blur dark:bg-brand-soft/10">
            Integrations
          </div>
          <h2 className="mt-4 font-display text-3xl font-extrabold leading-tight tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Direct Government API Integrations
          </h2>
          <p className="mt-4 text-base text-ink-soft sm:text-lg">
            Fetch, verify and import licenses in one tap. No logging into legacy municipal or central government websites.
          </p>
        </div>

        {/* Flex layout for Interactive Fetcher + Code Block */}
        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {/* Left panel: Fetcher input controls */}
          <div className="rounded-3xl glass p-5 sm:p-6 shadow-card flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6 border-b border-border pb-4">
                <Database className="h-5 w-5 text-brand" />
                <h3 className="text-base font-bold text-ink">Fetch Licenses from Government Portals</h3>
              </div>

              {/* Sub-tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {Object.keys(apiDetails).map((key) => (
                  <button
                    key={key}
                    onClick={() => setActiveTab(key)}
                    className={`rounded-lg px-3.5 py-1.5 text-xs font-semibold transition cursor-pointer ${
                      activeTab === key
                        ? 'bg-brand text-white'
                        : 'bg-card text-ink-soft hover:bg-secondary hover:text-ink ring-1 ring-border shadow-soft'
                    }`}
                  >
                    {apiDetails[key].docName}
                  </button>
                ))}
              </div>

              {/* Input block */}
              <div className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-ink uppercase tracking-wider mb-2">
                    {apiDetails[activeTab].label}
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputs[activeTab]}
                      onChange={(e) => handleInputChange(activeTab, e.target.value)}
                      placeholder={apiDetails[activeTab].placeholder}
                      className="grow rounded-xl border border-border bg-card px-4 py-2.5 text-sm text-ink outline-none placeholder:text-ink-soft/50 focus:border-brand focus:ring-1 focus:ring-brand shadow-soft"
                    />
                    <button
                      onClick={() => triggerFetch(activeTab)}
                      disabled={!inputs[activeTab] || status[activeTab] === 'loading'}
                      className="group flex items-center justify-center gap-1.5 rounded-xl bg-[var(--gradient-brand)] px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {status[activeTab] === 'loading' ? (
                        <>
                          <RefreshCw className="h-4 w-4 animate-spin" />
                          Syncing...
                        </>
                      ) : status[activeTab] === 'success' ? (
                        <>
                          <CheckCircle className="h-4 w-4" />
                          Synced
                        </>
                      ) : (
                        <>
                          <Database className="h-4 w-4 transition-transform group-hover:scale-110" />
                          Fetch Info
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Instruction description */}
            <div className="mt-8 rounded-2xl bg-secondary/50 dark:bg-secondary/15 p-4 border border-border">
              <div className="text-xs font-bold text-ink flex items-center gap-2">
                <span className="inline-flex h-2.5 w-2.5 items-center justify-center rounded-full bg-brand text-[8px] text-white">i</span>
                How to test this live dashboard integration:
              </div>
              <p className="mt-1.5 text-xs text-ink-soft leading-relaxed">
                Type any mock license number above and click <strong>Fetch Info</strong>. Our mock service will simulate a portal sync, and once complete, it will verify and add the document directly to your <strong>Live Dashboard Mockup</strong> in the Hero section above.
              </p>
            </div>
          </div>

          {/* Right panel: Live Code Snippet Display */}
          <div className="rounded-3xl bg-[#091123] p-5 sm:p-6 shadow-card border border-white/10 text-white font-mono flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <Terminal className="h-4 w-4 text-brand" />
                  <span className="text-xs font-bold tracking-wider text-white/70">API ENDPOINT PREVIEW</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-500"></span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
                </div>
              </div>

              <div className="text-xs font-semibold text-brand mb-2">
                {apiDetails[activeTab].endpoint}
              </div>
              <pre className="text-xs bg-black/40 p-4 rounded-xl overflow-x-auto border border-white/5 text-emerald-400">
                <code>{apiDetails[activeTab].code}</code>
              </pre>
            </div>

            <div className="mt-6 border-t border-white/10 pt-4">
              <div className="text-xs font-bold text-white/50 uppercase tracking-wider mb-2">Response Payload (HTTP 200)</div>
              <pre className="text-xs text-blue-300 bg-black/40 p-4 rounded-xl overflow-x-auto border border-white/5">
                <code>{`{
  "status": "success",
  "verified_at": "${new Date().toISOString().split('T')[0]}",
  "data": {
    "entity_name": "Sharma General Store",
    "valid_until": "2031-12-31",
    "document_type": "${apiDetails[activeTab].docName}"
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
