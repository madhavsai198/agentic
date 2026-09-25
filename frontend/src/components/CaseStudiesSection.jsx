import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, Zap, X, CheckCircle2, ArrowRight } from 'lucide-react';
import { MagneticButton, TiltCard, CountUp, DecryptedText, ShinyText, SpotlightCard, BorderBeam, BlurText } from './ReactBits';

/* =========================================================
   HOVER.DEV STYLE CASE STUDIES DATA (PINPOINTED TERMINOLOGY)
   ========================================================= */
const caseStudiesData = [
  {
    id: 'CS-01',
    client: 'FINSCALE PAYMENTS',
    industry: 'FINTECH & ENTERPRISE PAYMENTS',
    headline: 'AUTOMATED COMPLIANCE & 3.4X ARR PIPELINE EXPANSION',
    metrics: [
      { label: 'ARR GROWTH', val: 340, suffix: '%' },
      { label: 'EBIT MARGIN', val: 38, suffix: '%', prefix: '+' },
      { label: 'PAYBACK PERIOD', val: 4, suffix: ' WKS' }
    ],
    timeline: '6-Week Rollout',
    image: '/service_1.jpg',
    summary: 'Replaced manual deal underwriting with an automated risk score engine & instant CRM pipeline trigger.',
    tags: ['#FINTECH', '#AUTOMATEDPIPELINE', '#EBITEXPANSION'],
    deliverables: [
      'Automated Risk Scoring Engine',
      'Instant CRM Pipeline Routing',
      'Real-Time Underwriting Telemetry',
      'Leadership KPI Executive Portal'
    ]
  },
  {
    id: 'CS-02',
    client: 'NEXUS SAAS PLATFORM',
    industry: 'B2B SOFTWARE & CLOUD',
    headline: '+42% EBIT MARGIN IN 14 DAYS VIA SELF-SERVE ENGINE',
    metrics: [
      { label: 'EBIT MARGIN', val: 42, suffix: '%', prefix: '+' },
      { label: 'CHURN REDUCTION', val: 68, suffix: '%' },
      { label: 'ONBOARDING TIME', val: 12, suffix: ' MINS' }
    ],
    timeline: '14-Day Deployment',
    image: '/service_2.jpg',
    summary: 'Redesigned user onboarding flow & automated retention triggers for enterprise tiers.',
    tags: ['#B2BSAAS', '#SELFSERVE', '#RETENTIONENGINE'],
    deliverables: [
      'Interactive Product Onboarding',
      'Automated Churn Warning System',
      'Self-Serve Enterprise Upgrade Funnel',
      'Stripe & Hubspot Live Sync'
    ]
  },
  {
    id: 'CS-03',
    client: 'MEDICORE HEALTH',
    industry: 'HEALTHTECH & LOGISTICS',
    headline: '3.8X PATIENT ACQUISITION & AI TRIAGE ROUTING',
    metrics: [
      { label: 'ACQUISITION RATE', val: 3.8, suffix: 'x', decimals: 1 },
      { label: 'OPERATIONAL SAVINGS', val: 450, prefix: '$', suffix: 'K' },
      { label: 'PATIENT SATISFACTION', val: 99.2, suffix: '%', decimals: 1 }
    ],
    timeline: '30-Day Rollout',
    image: '/service_3.jpg',
    summary: 'Unified appointment scheduling with real-time patient queue telemetry and automated sms dispatch.',
    tags: ['#HEALTHTECH', '#AITRIAGE', '#LOGISTICS'],
    deliverables: [
      'AI Patient Queue Dispatcher',
      'Automated SMS & WhatsApp Reminders',
      'HIPAA-Compliant Executive Portal',
      'Real-Time Telehealth Routing'
    ]
  },
  {
    id: 'CS-04',
    client: 'APEX GLOBAL RETAIL',
    industry: 'OMNICHANNEL E-COMMERCE',
    headline: '$4.2M ADDED REVENUE VIA CART RECOVERY AUTOMATION',
    metrics: [
      { label: 'ADDED REVENUE', val: 4.2, prefix: '$', suffix: 'M', decimals: 1 },
      { label: 'CONVERSION GAIN', val: 28, suffix: '%', prefix: '+' },
      { label: 'ROAS MULTIPLIER', val: 5.4, suffix: 'x', decimals: 1 }
    ],
    timeline: '6-Week Integration',
    image: '/service_4.jpg',
    summary: 'Deploys high-converting cross-channel recovery workflows and dynamic checkout incentives.',
    tags: ['#ECOMMERCE', '#CARTRECOVERY', '#ROASBOOST'],
    deliverables: [
      'Dynamic Checkout Incentive Engine',
      'Omnichannel Abandonment Recovery',
      'Predictive LTV Customer Segmentation',
      'Klaviyo & Shopify Enterprise Sync'
    ]
  }
];

export default function CaseStudiesSection({ onOpenBooking }) {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const activeStudy = caseStudiesData[hoveredIndex] || caseStudiesData[0];

  return (
    <section 
      className="page-3-container hoverdev-casestudies-section" 
      id="case-studies"
      aria-label="Verified Growth Agency Case Studies"
      style={{ borderTop: '1px solid var(--border-dark)', background: '#0b0b0d', color: '#ffffff', padding: 'clamp(2.5rem, 4vw, 4.5rem) 0' }}
    >
      
      {/* Background Radial Glow */}
      <div className="services-radial-glow" aria-hidden="true" />

      {/* Section Header */}
      <header className="services-section-header" style={{ padding: '0 clamp(2rem, 4vw, 4rem)', marginBottom: '2.5rem' }}>
        <div className="magic-shimmer-badge">
          <Sparkles size={12} className="text-amber-400" />
          <span><DecryptedText text="PROVEN RESULTS • CASE STUDIES" speed={40} /></span>
        </div>
        <h2 className="services-main-title">
          <span className="title-muted">REAL-WORLD IMPACT: </span>
          <span className="title-bright-gradient"><ShinyText text="VERIFIED GROWTH PROOF" /></span>
        </h2>
        <p className="services-sub-pinpoint">
          Concrete EBIT expansions, automated customer acquisition engines, and unit-economic transformations.
        </p>
      </header>

      {/* HOVER.DEV STYLE SPLIT CASE STUDY INTERACTION */}
      <div className="hoverdev-grid-container" style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 45%) 1fr', gap: '2rem', padding: '0 clamp(2rem, 4vw, 4rem)', alignItems: 'stretch' }}>
        
        {/* LEFT COLUMN: HOVER.DEV EXPANDABLE LIST */}
        <div className="hoverdev-list-wrapper" style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
          {caseStudiesData.map((cs, idx) => {
            const isSelected = hoveredIndex === idx;
            return (
              <motion.div
                key={cs.id}
                onMouseEnter={() => setHoveredIndex(idx)}
                onClick={() => setSelectedCaseStudy(cs)}
                whileHover={{ x: 6 }}
                role="button"
                tabIndex={0}
                aria-label={`View case study for ${cs.client}`}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedCaseStudy(cs)}
                className={`hoverdev-list-card ${isSelected ? 'active' : ''}`}
                style={{
                  position: 'relative',
                  padding: '1.2rem 1.5rem',
                  borderRadius: '14px',
                  background: isSelected ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  border: isSelected ? '1px solid rgba(245, 158, 11, 0.4)' : '1px solid rgba(255, 255, 255, 0.06)',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease'
                }}
              >
                {/* Active Indicator Glow Line */}
                {isSelected && (
                  <motion.div
                    layoutId="hoverdev-active-line"
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: '15%',
                      bottom: '15%',
                      width: '4px',
                      borderRadius: '0 4px 4px 0',
                      background: 'linear-gradient(180deg, #f59e0b, #6366f1)'
                    }}
                  />
                )}

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.4rem' }}>
                  <span style={{ fontSize: '0.7rem', fontWeight: 800, color: '#f59e0b', letterSpacing: '0.08em' }}>
                    {cs.id} • {cs.client}
                  </span>
                  <span style={{ fontSize: '0.65rem', fontWeight: 700, color: '#8888aa', textTransform: 'uppercase' }}>
                    {cs.timeline}
                  </span>
                </div>

                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: isSelected ? '#ffffff' : '#aaaaaa', lineHeight: 1.3, marginBottom: '0.6rem' }}>
                  {cs.headline}
                </h3>

                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center', marginTop: '0.5rem', flexWrap: 'wrap' }}>
                  {cs.metrics.map((m, mIdx) => (
                    <span key={mIdx} style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ffffff', background: 'rgba(255, 255, 255, 0.06)', padding: '0.2rem 0.55rem', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.08)' }}>
                      {m.label}: <span style={{ color: '#f59e0b' }}>{m.prefix}{m.val}{m.suffix}</span>
                    </span>
                  ))}
                  <ArrowUpRight size={16} style={{ marginLeft: 'auto', opacity: isSelected ? 1 : 0.4, transform: isSelected ? 'translate(2px, -2px)' : 'none', transition: 'all 0.2s ease' }} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* RIGHT COLUMN: HOVER.DEV DYNAMIC FEATURE SHOWCASE PREVIEW */}
        <AnimatePresence mode="wait">
          <motion.article
            key={activeStudy.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            style={{ height: '100%' }}
          >
            <SpotlightCard
              spotlightColor="rgba(245, 158, 11, 0.15)"
              style={{
                height: '100%',
                borderRadius: '16px',
                background: 'rgba(20, 20, 25, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '2rem',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <BorderBeam duration={7} />

              {/* Top Banner Tag */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem' }}>
                <span className="magic-shimmer-badge" style={{ fontSize: '0.7rem' }}>
                  <Zap size={12} className="text-amber-400" />
                  {activeStudy.industry}
                </span>
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#8888aa' }}>
                  CASE STUDY #{activeStudy.id}
                </span>
              </div>

              {/* Parallax Image Visual Preview */}
              <TiltCard maxRotation={8} style={{ width: '100%', height: '220px', borderRadius: '12px', overflow: 'hidden', marginBottom: '1.5rem', border: '1px solid rgba(255,255,255,0.12)', position: 'relative' }}>
                <img
                  src={activeStudy.image}
                  alt={`LadderUp Case Study - ${activeStudy.client}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  width="600"
                  height="220"
                  loading="lazy"
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(12, 12, 14, 0.9) 100%)' }} />
                <div style={{ position: 'absolute', bottom: '1rem', left: '1.2rem', right: '1.2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 900, color: '#ffffff' }}>
                    {activeStudy.client}
                  </div>
                  <span style={{ fontSize: '0.68rem', fontWeight: 800, color: '#f59e0b', background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', padding: '0.3rem 0.7rem', borderRadius: '9999px', border: '1px solid rgba(245,158,11,0.4)' }}>
                    ✦ VERIFIED RESULT
                  </span>
                </div>
              </TiltCard>

              {/* 3 Metric Cards Row */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.8rem', marginBottom: '1.5rem' }}>
                {activeStudy.metrics.map((m, idx) => (
                  <div key={idx} style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '10px', padding: '0.8rem', textAlign: 'center' }}>
                    <div style={{ fontSize: '1.3rem', fontWeight: 900, color: '#ffffff', fontFamily: 'var(--font-display)' }}>
                      <CountUp end={m.val} prefix={m.prefix || ''} suffix={m.suffix || ''} decimals={m.decimals || 0} />
                    </div>
                    <div style={{ fontSize: '0.62rem', fontWeight: 800, color: '#8888aa', marginTop: '2px', textTransform: 'uppercase' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Deliverables Checklist */}
              <div style={{ marginBottom: '1.5rem' }}>
                <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#8888aa', textTransform: 'uppercase', marginBottom: '0.6rem' }}>
                  DEPLOYED ARCHITECTURE & DELIVERABLES:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.5rem' }}>
                  {activeStudy.deliverables.map((item, dIdx) => (
                    <div key={dIdx} style={{ fontSize: '0.75rem', color: '#dddddd', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                      <CheckCircle2 size={12} className="text-emerald-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: '1rem', borderTop: '1px solid rgba(255,255,255,0.08)' }}>
                <button
                  onClick={() => setSelectedCaseStudy(activeStudy)}
                  aria-label={`Open full breakdown for ${activeStudy.client}`}
                  style={{ background: 'transparent', border: 'none', color: '#f59e0b', fontSize: '0.78rem', fontWeight: 800, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '0.4rem' }}
                >
                  FULL CASE BREAKDOWN <ArrowRight size={14} />
                </button>
                <MagneticButton className="shadcn-hero-primary-btn" onClick={onOpenBooking} strength={0.3} ariaLabel="Get similar results for your business">
                  <span><ShinyText text="GET SIMILAR RESULTS" /></span>
                </MagneticButton>
              </div>

            </SpotlightCard>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* HOVER.DEV STYLE FULL CASE STUDY BREAKDOWN MODAL */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCaseStudy(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 999,
              background: 'rgba(0, 0, 0, 0.85)',
              backdropFilter: 'blur(10px)',
              display: 'flex',
              alignItems: 'center',
              justify: 'center',
              padding: '1.5rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '680px',
                background: '#121216',
                border: '1px solid rgba(245, 158, 11, 0.4)',
                borderRadius: '20px',
                padding: '2rem',
                color: '#ffffff',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6)'
              }}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                aria-label="Close Case Study Breakdown Modal"
                style={{
                  position: 'absolute',
                  top: '1.2rem',
                  right: '1.2rem',
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: '#ffffff',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justify: 'center',
                  cursor: 'pointer'
                }}
              >
                <X size={16} />
              </button>

              <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#f59e0b', letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
                CASE STUDY BREAKDOWN • {selectedCaseStudy.client}
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 900, marginBottom: '1rem', lineHeight: 1.25 }}>
                {selectedCaseStudy.headline}
              </h2>

              <p style={{ fontSize: '0.88rem', color: '#aaaaaa', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                {selectedCaseStudy.summary}
              </p>

              {/* 3 Large Metrics Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.5rem', background: 'rgba(255, 255, 255, 0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                {selectedCaseStudy.metrics.map((m, idx) => (
                  <div key={idx} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#f59e0b', fontFamily: 'var(--font-display)' }}>
                      <CountUp end={m.val} prefix={m.prefix || ''} suffix={m.suffix || ''} decimals={m.decimals || 0} />
                    </div>
                    <div style={{ fontSize: '0.65rem', fontWeight: 800, color: '#8888aa', textTransform: 'uppercase', marginTop: '2px' }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Deliverables List */}
              <div style={{ marginBottom: '1.8rem' }}>
                <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
                  ENTERPRISE DELIVERABLES PROCESSED:
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedCaseStudy.deliverables.map((item, dIdx) => (
                    <div key={dIdx} style={{ fontSize: '0.82rem', color: '#dddddd', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <CheckCircle2 size={14} className="text-emerald-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                <button
                  onClick={() => setSelectedCaseStudy(null)}
                  style={{ background: 'rgba(255,255,255,0.08)', border: 'none', color: '#ffffff', padding: '0.8rem 1.4rem', borderRadius: '9999px', fontSize: '0.78rem', fontWeight: 700, cursor: 'pointer' }}
                >
                  CLOSE PREVIEW
                </button>
                <MagneticButton
                  className="shadcn-hero-primary-btn"
                  onClick={() => {
                    setSelectedCaseStudy(null);
                    onOpenBooking();
                  }}
                  strength={0.3}
                  ariaLabel="Book growth strategy call for your business"
                >
                  <span>BOOK GROWTH STRATEGY CALL</span>
                  <ArrowRight size={14} />
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
