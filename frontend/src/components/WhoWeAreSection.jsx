import React from 'react';
import { Play, Sparkles, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { MagneticButton, TiltCard, ShinyText, SpotlightCard, DecryptedText, BlurText, AgencyComparisonSlider } from './ReactBits';

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
            left: `${Math.floor(Math.random() * 600) - 50}px`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (8 - 2) + 2)}s`
          }}
        />
      ))}
    </div>
  );
}

export default function WhoWeAreSection({
  manifestoLines,
  p2Progress,
  onOpenVideo,
  onOpenBooking,
  onScrollTo
}) {
  const proofPills = [
    '✦ 3.2x ARR GROWTH',
    '⚡ 35% EFFICIENCY GAIN',
    '★ 4.9/5 CLIENT RATING',
    '✦ 99.5% RETENTION',
    '⚡ 2-WEEK DEPLOYMENT'
  ];

  return (
    <div id="p2-wrapper" className="p2-scroll-wrapper">
      <section 
        className="page-2-container sticky-p2 aceternity-whoweare-section" 
        id="who-we-are"
        aria-label="About LadderUp Growth Agency & Manifesto"
        itemScope 
        itemType="https://schema.org/AboutPage"
      >
        
        {/* Aceternity UI Signature Lamp Glow Effect Overlay */}
        <div className="aceternity-lamp-glow-overlay" aria-hidden="true" />
        <div className="aceternity-spotlight-overlay" aria-hidden="true" />

        {/* Page 2 Left Column (38% Width) */}
        <div className="p2-column-left">
          {/* Top Video Section Box with Aceternity Card Spotlight & Meteors */}
          <SpotlightCard className="video-card-container aceternity-glass-card" spotlightColor="rgba(99, 102, 241, 0.2)">
            <div className="video-header-bar">
              <span className="aceternity-shimmer-tag"><Sparkles size={11} className="text-amber-400" /> ACETERNITY DEMO</span>
              <span>✦ 2:30</span>
            </div>

            <h3 className="video-card-title">
              HOW WE HELP YOUR BUSINESS GROW WITHOUT THE HYPE
            </h3>

            {/* React Bits 3D Interactive Parallax Tilt Card for Video Thumbnail */}
            <TiltCard 
              className="video-thumbnail-box" 
              onClick={onOpenVideo} 
              maxRotation={10}
              aria-label="Play LadderUp Growth Demo Video"
            >
              <img 
                src="/office_thumb.jpg" 
                alt="LadderUp Growth Team Video Demonstration" 
                width="400"
                height="220"
                loading="lazy"
              />
              <div className="play-button-overlay" aria-label="Play Video">
                <Play size={20} fill="#0f0f11" stroke="none" style={{ marginLeft: '3px' }} />
              </div>
            </TiltCard>

            <p className="video-subtext">
              EMBEDDED CONSULTANTS • <span>REVENUE VELOCITY</span> • 100% EXECUTABLE
            </p>
          </SpotlightCard>

          {/* Bottom Left Services Block */}
          <div className="p2-services-block">
            <div className="section-tag aceternity-tag-badge">
              <Sparkles size={12} className="text-amber-400" />
              <span>✦ <DecryptedText text="02 SERVICES OVERVIEW" speed={45} /></span>
            </div>
            <h2 className="services-title">
              <span className="muted">TURNING BOTTLENECKS INTO </span>
              <span className="bright">HIGH-GROWTH SYSTEMS</span>
            </h2>
          </div>
        </div>

        {/* Page 2 Right Column (62% Width) */}
        <div className="p2-column-right" style={{ position: 'relative', overflow: 'hidden' }}>
          {/* Background Meteors for Right Column */}
          <AceternityMeteors number={8} />

          <div>
            {/* Aceternity Infinite Moving Proof Marquee Strip */}
            <div className="aceternity-marquee-wrapper" aria-label="Key Performance Indicators Marquee">
              <div className="aceternity-marquee-track">
                {proofPills.concat(proofPills).map((pill, idx) => (
                  <span key={idx} className="marquee-pill-item">
                    {pill}
                  </span>
                ))}
              </div>
            </div>

            <header className="p2-header-tag aceternity-shimmer-tag" style={{ display: 'inline-flex', marginBottom: '1.2rem' }}>
              <Sparkles size={12} className="text-amber-400" />
              <span>✦ 01 WHO WE ARE • ACETERNITY MANIFESTO</span>
            </header>

            {/* Main Manifesto Headline with Continuous White Fill on Scroll */}
            <h2 className="manifesto-title" id="manifesto-heading">
              {manifestoLines.map((lineText, idx) => {
                const totalLines = manifestoLines.length;
                const lineStart = (idx / totalLines) * 0.85;
                const lineEnd = ((idx + 1) / totalLines) * 0.85;
                const lineProgress = Math.min(Math.max((p2Progress - lineStart) / (lineEnd - lineStart), 0), 1);
                const alpha = 0.25 + (lineProgress * 0.75);

                return (
                  <span 
                    key={idx} 
                    className="manifesto-line-item"
                    style={{
                      color: `rgba(255, 255, 255, ${alpha.toFixed(2)})`,
                      transition: 'color 0.15s ease-out, text-shadow 0.15s ease-out',
                      textShadow: lineProgress > 0.5 ? '0 0 20px rgba(255, 255, 255, 0.35)' : 'none',
                      display: 'inline'
                    }}
                  >
                    {lineText}{' '}
                  </span>
                );
              })}
            </h2>

            {/* Interactive Agency Model Comparison Component */}
            <div style={{ margin: '1.5rem 0' }}>
              <AgencyComparisonSlider onOpenBooking={onOpenBooking} />
            </div>

            {/* Client Success Manager Badge */}
            <div 
              className="manager-badge aceternity-badge-hover" 
              onClick={onOpenBooking}
              role="button"
              tabIndex={0}
              aria-label="Connect with Jessica Burns, Client Success Manager"
              onKeyDown={(e) => e.key === 'Enter' && onOpenBooking()}
            >
              <img 
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80" 
                alt="Jessica Burns - Client Success Manager at LadderUp Agency" 
                className="manager-avatar"
                width="48"
                height="48"
              />
              <div className="manager-details">
                <div className="manager-name">JESSICA BURNS</div>
                <div className="manager-role">CLIENT SUCCESS MANAGER</div>
              </div>
            </div>

            {/* Pinpointed Description */}
            <p className="p2-description">
              Practical growth consulting and system execution built for leadership teams that mandate <strong>measurable EBIT performance.</strong>
            </p>
          </div>

          {/* Bottom White Action Button + Brand Mark */}
          <footer className="p2-bottom-row">
            <MagneticButton 
              className="p2-btn-white aceternity-hover-btn" 
              onClick={() => onScrollTo('services-catalog')} 
              strength={0.3}
              ariaLabel="Explore Services Catalog"
            >
              <ShinyText text="EXPLORE SERVICES" />
              <ArrowRight size={14} style={{ marginLeft: '6px' }} />
            </MagneticButton>

            <div className="p2-bottom-credit">
              || LadderUp*
            </div>
          </footer>
        </div>
      </section>
    </div>
  );
}
