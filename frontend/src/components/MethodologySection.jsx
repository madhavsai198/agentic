import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Maximize2, Sparkles, ArrowRight, Clock } from 'lucide-react';
import { MagneticButton, SpotlightCard, CountUp, DecryptedText, ShinyText, BorderBeam, BlurText } from './ReactBits';

/* Aceternity UI Meteors Background Effect */
function AceternityMeteors({ number = 6 }) {
  const meteors = new Array(number).fill(true);
  return (
    <div className="aceternity-meteors-container" aria-hidden="true">
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className="aceternity-meteor"
          style={{
            top: 0,
            left: `${Math.floor(Math.random() * 500) - 50}px`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (8 - 2) + 2)}s`
          }}
        />
      ))}
    </div>
  );
}

export default function MethodologySection({
  methodologySteps,
  onSelectStep,
  onOpenBooking,
  onScrollTo
}) {
  const [hoveredStep, setHoveredStep] = useState(null);

  // Pinpointed timelines for process steps
  const timelines = ['WEEK 1-2', 'WEEK 3-4', 'WEEK 5-6', 'WEEK 7-8'];

  return (
    <section 
      className="page-5-container aceternity-methodology-section" 
      id="how-we-do-it"
      aria-label="LadderUp 4-Phase Growth Execution Methodology"
    >
      {/* Aceternity Radial Tracing Spotlight Overlay */}
      <div className="aceternity-spotlight-overlay" aria-hidden="true" />

      {/* Top Grid Split */}
      <div className="p5-top-grid">
        {/* Top Left Headline & CTA */}
        <div className="p5-top-left">
          <div>
            <div className="section-tag aceternity-tag-badge">
              <Sparkles size={12} className="text-amber-500" />
              <span>✦ <DecryptedText text="05 HOW WE DO IT • ACETERNITY PROCESS" speed={45} /></span>
            </div>

            <h2 className="p5-title" id="methodology-title">
              <span className="black">THE FAST<br />TRACK TO </span>
              <span className="grey">GROWTH<br />SUCCESS</span>
            </h2>

            <p style={{ color: '#72717a', fontSize: '0.95rem', lineHeight: 1.5, maxWidth: '340px' }}>
              4-phase execution framework. Zero bloat. Instant EBIT metrics.
            </p>
          </div>

          <MagneticButton 
            className="btn-start-journey aceternity-hover-btn" 
            onClick={onOpenBooking} 
            strength={0.3}
            ariaLabel="Start Growth Journey Strategy Session"
          >
            <span><ShinyText text="START GROWTH JOURNEY" /></span>
            <ChevronRight size={18} />
          </MagneticButton>
        </div>

        {/* Top Right 2x2 Method Steps Cards Grid with Aceternity Focus Spotlight & Meteors */}
        <div className="p5-top-right">
          <div className="steps-2x2-grid aceternity-bento-steps" onMouseLeave={() => setHoveredStep(null)}>
            {methodologySteps.map((step, idx) => {
              const isHovered = hoveredStep === idx;
              return (
                <SpotlightCard 
                  key={step.id} 
                  className={`step-card aceternity-step-card ${isHovered ? 'hovered' : ''}`}
                  onClick={() => onSelectStep(step)}
                  onMouseEnter={() => setHoveredStep(idx)}
                  spotlightColor="rgba(99, 102, 241, 0.2)"
                  style={{ cursor: 'pointer', position: 'relative', overflow: 'hidden' }}
                  aria-label={`View methodology step: ${step.title}`}
                >
                  {/* Aceternity UI Meteors Background Effect */}
                  {isHovered && <AceternityMeteors number={6} />}
                  {isHovered && <BorderBeam duration={5} colorFrom="#f59e0b" colorTo="#6366f1" />}

                  {/* Top Row Header */}
                  <div className="step-card-header">
                    <span className="step-number">{step.id}</span>
                    <div className="service-timeline-tag" style={{ background: 'rgba(0,0,0,0.05)', color: '#0f0f11', border: '1px solid rgba(0,0,0,0.1)' }}>
                      <Clock size={11} className="text-amber-600" />
                      <span>{timelines[idx] || 'WEEK 1'}</span>
                    </div>
                  </div>

                  {/* Step Title */}
                  <p className="step-card-subtext">
                    {step.title}
                  </p>

                  {/* Hover Arrow Action Circle */}
                  <div className="step-hover-arrow">
                    <ArrowRight size={14} />
                  </div>
                </SpotlightCard>
              );
            })}
          </div>

          {/* Aceternity Stat Glow Banner with CountUp */}
          <div className="pie-stat-banner aceternity-stat-glow">
            <div className="pie-chart-icon" aria-hidden="true"></div>
            <p className="pie-stat-text">
              ON AVERAGE, OUR CLIENTS INCREASE OPERATIONAL EFFICIENCY <strong>BY <CountUp end={35} suffix="%" /> IN THE FIRST <CountUp end={60} suffix=" DAYS." /></strong>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Section: WHY DELAY HURTS - Aceternity Risk Track Matrix */}
      <div className="p5-bottom-section">
        <header className="section-tag" style={{ color: '#8e8d94' }}>
          ✦ WHY DELAY HURTS • RISK CALCULATOR
        </header>

        <h2 className="delay-title">
          <span className="black">THE LONGER YOU WAIT, THE<br />MORE EXPENSIVE IT BECOMES<br /></span>
          <span className="grey">TO CATCH UP.</span>
        </h2>

        {/* 4 Aceternity Fluid Impact Tracks */}
        <div className="delay-rows-container">
          {/* Row 01 */}
          <motion.div 
            className="delay-track-row aceternity-track-row" 
            onClick={onOpenBooking} 
            whileHover={{ x: 6 }}
            role="button"
            tabIndex={0}
            aria-label="Calculate risk for manual operational tasks"
            onKeyDown={(e) => e.key === 'Enter' && onOpenBooking()}
          >
            <div className="delay-row-label">
              01/ <span>OPERATIONAL TASKS</span> <strong>STAY MANUAL</strong>
            </div>
            <div className="delay-track-wrapper">
              <div className="delay-track-line-bg"></div>
              <div className="floating-pct-badge" style={{ left: '83%' }}>
                +<CountUp end={83} suffix="%" />
              </div>
            </div>
            <div className="delay-category-tag">/WORKLOAD</div>
          </motion.div>

          {/* Row 02 */}
          <motion.div 
            className="delay-track-row aceternity-track-row" 
            onClick={onOpenBooking} 
            whileHover={{ x: 6 }}
            role="button"
            tabIndex={0}
            aria-label="Calculate risk for competitor velocity"
            onKeyDown={(e) => e.key === 'Enter' && onOpenBooking()}
          >
            <div className="delay-row-label">
              02/ <span>COMPETITORS</span> <strong>MOVE FASTER</strong>
            </div>
            <div className="delay-track-wrapper">
              <div className="delay-track-line-bg"></div>
              <div className="floating-pct-badge" style={{ left: '55%' }}>
                +<CountUp end={55} suffix="%" />
              </div>
            </div>
            <div className="delay-category-tag">/MARKETSHARE</div>
          </motion.div>

          {/* Row 03 */}
          <motion.div 
            className="delay-track-row aceternity-track-row" 
            onClick={onOpenBooking} 
            whileHover={{ x: 6 }}
            role="button"
            tabIndex={0}
            aria-label="Calculate risk for missed revenue opportunities"
            onKeyDown={(e) => e.key === 'Enter' && onOpenBooking()}
          >
            <div className="delay-row-label">
              03/ <span>MISSED</span> <strong>REVENUE OPPORTUNITIES</strong>
            </div>
            <div className="delay-track-wrapper">
              <div className="delay-track-line-bg"></div>
              <div className="floating-pct-badge" style={{ left: '66%' }}>
                +<CountUp end={66} suffix="%" />
              </div>
            </div>
            <div className="delay-category-tag">/REVENUE</div>
          </motion.div>

          {/* Row 04 */}
          <motion.div 
            className="delay-track-row aceternity-track-row" 
            onClick={onOpenBooking} 
            whileHover={{ x: 6 }}
            role="button"
            tabIndex={0}
            aria-label="Calculate risk for profitability inefficiencies"
            onKeyDown={(e) => e.key === 'Enter' && onOpenBooking()}
          >
            <div className="delay-row-label">
              04/ <span>TIME WASTED ON</span> <strong>INEFFICIENCIES</strong>
            </div>
            <div className="delay-track-wrapper">
              <div className="delay-track-line-bg"></div>
              <div className="floating-pct-badge" style={{ left: '32%' }}>
                +<CountUp end={32} suffix="%" />
              </div>
            </div>
            <div className="delay-category-tag">/PROFITABILITY</div>
          </motion.div>
        </div>

        {/* Bottom Right Floating Expand Button with React Bits Magnetic Pull */}
        <MagneticButton className="btn-floating-expand aceternity-float-top-btn" onClick={() => onScrollTo('hero')} ariaLabel="Scroll back to top" strength={0.4}>
          <Maximize2 size={24} />
        </MagneticButton>
      </div>
    </section>
  );
}
