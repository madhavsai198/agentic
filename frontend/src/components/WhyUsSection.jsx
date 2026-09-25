import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Sparkles, TrendingUp, ShieldCheck, Activity, Smartphone, ArrowRight } from 'lucide-react';
import { TiltCard, CountUp, SpotlightCard, DecryptedText, ShinyText, MagneticButton, BorderBeam, BlurText } from './ReactBits';

export default function WhyUsSection({
  advantagesList,
  onSelectAdvantage,
  onOpenBooking
}) {
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [hoveredAdvantage, setHoveredAdvantage] = useState(null);

  return (
    <section 
      className="page-4-container aceternity-whyus-section" 
      id="why-us"
      aria-label="Why Companies Choose LadderUp Growth Agency"
    >
      {/* Background Radial Magic Glow */}
      <div className="services-radial-glow" aria-hidden="true" />

      {/* Top Split Grid */}
      <div className="p4-top-grid">
        {/* Top Left Title Block with Magic UI Shimmer Badge */}
        <div className="p4-top-left">
          <div>
            <div className="magic-shimmer-badge">
              <Sparkles size={12} className="text-amber-500" />
              <span>✦ <DecryptedText text="03 WHY US?" speed={50} /></span>
            </div>

            <h2 className="p4-title" id="whyus-title">
              <span className="grey">WHY<br />COMPANIES<br /></span>
              <span className="black">CHOOSE<br />LADDERUP®</span>
            </h2>

            <p style={{ color: '#72717a', fontSize: '0.92rem', lineHeight: 1.5, maxWidth: '340px' }}>
              Direct, data-driven business scaling with guaranteed EBIT impact.
            </p>
          </div>

          <div style={{ marginTop: '2rem' }}>
            <MagneticButton 
              className="shadcn-hero-primary-btn" 
              onClick={onOpenBooking} 
              strength={0.3}
              ariaLabel="Request Client Growth Case Studies"
            >
              <span><ShinyText text="REQUEST CASE STUDIES" /></span>
              <ArrowRight size={14} />
            </MagneticButton>
          </div>
        </div>

        {/* Top Right Advantages Block - Magic UI + Aceternity Bento List */}
        <div className="p4-top-right">
          <div>
            <div className="advantages-header">
              OUR ADVANTAGES <span>INCLUDE:</span>
            </div>

            <div className="aceternity-bento-advantages-list" onMouseLeave={() => setHoveredAdvantage(null)}>
              {advantagesList.map((adv, idx) => {
                const isHovered = hoveredAdvantage === idx;
                return (
                  <motion.div 
                    key={adv.id} 
                    className={`advantage-item-row aceternity-bento-item ${isHovered ? 'magic-advantage-hovered' : ''}`}
                    onClick={() => onSelectAdvantage(adv)}
                    onMouseEnter={() => setHoveredAdvantage(idx)}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                    role="button"
                    tabIndex={0}
                    aria-label={`View detail for advantage: ${adv.text}`}
                    onKeyDown={(e) => e.key === 'Enter' && onSelectAdvantage(adv)}
                    style={{ position: 'relative', overflow: 'hidden' }}
                  >
                    {/* Magic UI Border Beam line on hovered item */}
                    {isHovered && <BorderBeam duration={5} colorFrom="#f59e0b" colorTo="#6366f1" />}

                    <span className="bento-item-id">{adv.id}</span>
                    <span className="bento-item-text">{adv.text}</span>
                    <ArrowUpRight size={16} className="bento-arrow-icon" />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Source Footer Line */}
          <div className="p4-source-footer">
            <div>SOURCE: <span style={{ color: '#0f0f11' }}>CLIENT FEEDBACK & PROJECT DATA</span></div>
            <div>📅 APR 2026 • LADDERUP FRAMEWORK v2.4</div>
          </div>
        </div>
      </div>

      {/* Bottom Split Grid (Metrics & Phone App Visual with Magic UI Effects) */}
      <div className="p4-bottom-grid">
        {/* Bottom Left Metrics & Copy */}
        <div className="p4-bottom-left">
          {/* Top 3 Metrics - Magic UI & React Bits Metric Cards */}
          <div className="metrics-row-flex aceternity-bento-metrics" onMouseLeave={() => setHoveredMetric(null)}>
            
            {/* Metric 1 */}
            <SpotlightCard 
              className="metric-box aceternity-metric-card magic-metric-card" 
              spotlightColor="rgba(16, 185, 129, 0.18)"
              style={{ position: 'relative' }}
            >
              <div 
                onMouseEnter={() => setHoveredMetric(0)} 
                style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                {hoveredMetric === 0 && <BorderBeam duration={6} colorFrom="#10b981" colorTo="#3b82f6" />}
                <div className="metric-icon-badge">
                  <TrendingUp size={16} className="text-emerald-600" />
                </div>
                <div className="metric-number">
                  <CountUp end={3} suffix="x" decimals={0} />
                </div>
                <div className="metric-label">REVENUE GROWTH</div>
              </div>
            </SpotlightCard>

            {/* Metric 2 */}
            <SpotlightCard 
              className="metric-box aceternity-metric-card magic-metric-card" 
              spotlightColor="rgba(37, 99, 235, 0.18)"
              style={{ position: 'relative' }}
            >
              <div 
                onMouseEnter={() => setHoveredMetric(1)} 
                style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                {hoveredMetric === 1 && <BorderBeam duration={6} colorFrom="#3b82f6" colorTo="#8b5cf6" />}
                <div className="metric-icon-badge">
                  <ShieldCheck size={16} className="text-blue-600" />
                </div>
                <div className="metric-number">
                  <CountUp end={99.5} suffix="%" decimals={1} />
                </div>
                <div className="metric-label">CLIENT RETENTION</div>
              </div>
            </SpotlightCard>

            {/* Metric 3 */}
            <SpotlightCard 
              className="metric-box aceternity-metric-card magic-metric-card" 
              spotlightColor="rgba(147, 51, 234, 0.18)"
              style={{ position: 'relative' }}
            >
              <div 
                onMouseEnter={() => setHoveredMetric(2)} 
                style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
              >
                {hoveredMetric === 2 && <BorderBeam duration={6} colorFrom="#8b5cf6" colorTo="#f59e0b" />}
                <div className="metric-icon-badge">
                  <Activity size={16} className="text-purple-600" />
                </div>
                <div className="metric-number">
                  +<CountUp end={28} suffix="%" decimals={0} />
                </div>
                <div className="metric-label">MARGIN EXPANSION</div>
              </div>
            </SpotlightCard>
          </div>

          {/* Bottom Copy with Magic UI Shimmer Tag */}
          <div>
            <div className="magic-shimmer-badge" style={{ display: 'inline-flex', marginBottom: '0.8rem' }}>
              <Smartphone size={12} className="text-amber-500" />
              <span>✦ REAL-TIME GROWTH TELEMETRY</span>
            </div>

            <h2 className="app-feature-title">
              YOUR BUSINESS GROWTH, ALWAYS IN YOUR POCKET
            </h2>

            <p style={{ color: '#72717a', fontSize: '0.92rem', lineHeight: 1.55, maxWidth: '420px' }}>
              Real-time revenue telemetry, campaign approvals, and automated KPI dashboards right from your phone.
            </p>
          </div>
        </div>

        {/* Bottom Right Phone Mockup Visual with Magic UI Glow & React Bits 3D Tilt */}
        <div className="p4-bottom-right">
          <TiltCard className="app-visual-wrapper aceternity-mockup-glow magic-mockup-card" maxRotation={12}>
            <BorderBeam duration={8} />
            <img 
              src="/mobile_mockup.jpg" 
              alt="LadderUp Mobile Growth Control App Interface" 
              className="mockup-img" 
              width="450"
              height="600"
              loading="lazy"
            />
          </TiltCard>

          <div style={{ position: 'absolute', bottom: '1.5rem', left: '2rem', fontSize: '0.65rem', fontWeight: 800, color: '#888790', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
            <span className="pulse-dot-green" aria-hidden="true" /> || LadderUp Mobile*
          </div>
        </div>
      </div>
    </section>
  );
}
