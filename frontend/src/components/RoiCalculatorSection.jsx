import React from 'react';
import { Sparkles } from 'lucide-react';
import { InteractiveRoiCalculator, DecryptedText, ShinyText } from './ReactBits';

export default function RoiCalculatorSection({ onOpenBooking }) {
  return (
    <section 
      className="page-3-container" 
      id="roi-calculator" 
      aria-label="Interactive Agency ROI & Revenue Calculator"
      style={{ background: '#0b0b0e', padding: 'clamp(3rem, 5vw, 5rem) clamp(2rem, 4vw, 4rem)', borderTop: '1px solid rgba(255,255,255,0.08)' }}
    >
      <div className="services-section-header" style={{ marginBottom: '2.5rem' }}>
        <div className="magic-shimmer-badge">
          <Sparkles size={12} className="text-amber-400" />
          <span><DecryptedText text="INTERACTIVE ROI SIMULATOR • REVENUE EXPANSION" speed={40} /></span>
        </div>
        <h2 className="services-main-title">
          <span className="title-muted">ESTIMATE YOUR ENTERPRISE </span>
          <span className="title-bright-gradient"><ShinyText text="GROWTH POTENTIAL" /></span>
        </h2>
        <p className="services-sub-pinpoint">
          Simulate projected ARR gains, EBIT margin improvements, and implementation payback speed.
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        <InteractiveRoiCalculator onBookCall={onOpenBooking} />
      </div>
    </section>
  );
}
