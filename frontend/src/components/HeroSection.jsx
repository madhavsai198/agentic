import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Plus, Hexagon, Zap, Link2, Grid, ArrowRight, Sparkles, TrendingUp, ShieldCheck } from 'lucide-react';
import { MagneticButton, TiltCard, CountUp, ShinyText, DecryptedText, BlurText, VelocityMarquee } from './ReactBits';

export default function HeroSection({
  reviewers,
  onOpenBooking,
  onOpenMenu,
  onScrollTo
}) {
  const [activeWordIndex, setActiveWordIndex] = useState(0);

  // Rotating focus words for React Bits / Aceternity Flip Words effect
  const words = ['SCALE REVENUE', 'AUTOMATE PIPELINES', 'EXPAND MARGINS', 'STREAMLINE OPS'];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveWordIndex((prev) => (prev + 1) % words.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [words.length]);

  const marqueeTags = [
    '✦ B2B REVENUE ENGINES',
    '⚡ +38% EBIT EXPANSION',
    '✦ 14-DAY SYSTEM DEPLOYMENT',
    '⚡ AUTOMATED PIPELINES',
    '✦ 4.9/5 ENTERPRISE RATING',
    '⚡ ZERO AGENCY BLOAT'
  ];

  return (
    <section 
      className="page-container aceternity-hero-container" 
      id="hero"
      aria-label="LadderUp Business Growth Agency Hero Section"
      itemScope 
      itemType="https://schema.org/WebPageElement"
    >
      
      {/* Aceternity Background Radial Spotlight */}
      <div className="aceternity-spotlight-overlay" aria-hidden="true" />

      {/* LEFT COLUMN: Glitch Portrait with React Bits Floating Glass Cards */}
      <div className="column-left aceternity-left-col">
        {/* Top Left Menu Trigger */}
        <div className="header-left">
          <MagneticButton 
            className="menu-btn shadcn-menu-trigger"
            onClick={onOpenMenu}
            ariaLabel="Toggle Navigation Drawer"
            strength={0.25}
          >
            <Plus size={14} strokeWidth={2.5} /> MENU
          </MagneticButton>
        </div>

        {/* Hero Portrait with React Bits 3D Parallax Tilt */}
        <TiltCard className="portrait-wrapper aceternity-tilt-card" maxRotation={8}>
          <img 
            src="/hero.jpg" 
            alt="LadderUp Executive Business Growth Strategy Consultant" 
            className="portrait-img"
            width="800"
            height="1000"
            loading="eager"
          />

          {/* React Bits Floating Glass Card 1 (Top Right) */}
          <motion.div 
            className="reactbits-glass-card top-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <div className="card-badge-dot" aria-hidden="true" />
            <TrendingUp size={14} className="text-emerald-400" />
            <div>
              <div className="card-val">
                +<CountUp end={28} decimals={0} suffix="%" /> MARGINS
              </div>
              <div className="card-lbl">EBIT OPTIMIZATION</div>
            </div>
          </motion.div>

          {/* React Bits Floating Glass Card 2 (Bottom Left) */}
          <motion.div 
            className="reactbits-glass-card bottom-card"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <ShieldCheck size={14} className="text-amber-400" />
            <div>
              <div className="card-val">
                <CountUp end={3} decimals={0} suffix="x" /> GROWTH
              </div>
              <div className="card-lbl">REVENUE ENGINE</div>
            </div>
          </motion.div>
        </TiltCard>

        {/* Left Action Button Pill with React Bits Magnetic Pull */}
        <div className="hero-left-cta-wrapper">
          <MagneticButton 
            className="btn-pill-dark aceternity-cta-pill" 
            onClick={onOpenBooking} 
            strength={0.3}
            ariaLabel="Schedule Free Growth Assessment"
          >
            <Sparkles size={14} /> SCHEDULE ASSESSMENT
          </MagneticButton>
        </div>
      </div>

      {/* RIGHT COLUMN: Pinpointed Headlines & Aceternity Shimmer Elements */}
      <div className="column-right aceternity-right-col">
        {/* Top Header Information & Consultation Notice */}
        <header className="header-right">
          <div 
            className="consultation-notice aceternity-shimmer-tag" 
            onClick={onOpenBooking}
            role="button"
            tabIndex={0}
            aria-label="Book 30-minute zero-obligation growth strategy call"
            onKeyDown={(e) => e.key === 'Enter' && onOpenBooking()}
          >
            <span className="pulse-dot-green" aria-hidden="true" /> 30-MIN GROWTH CALL • <ShinyText text="ZERO OBLIGATIONS" />
          </div>

          <div className="user-profile-header">
            <img 
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80" 
              alt="LadderUp Lead Growth Advisor Avatar" 
              className="profile-avatar"
              width="40"
              height="40"
            />
            <MagneticButton 
              className="profile-plus-btn" 
              ariaLabel="Book Consultation Call with Advisor" 
              onClick={onOpenBooking} 
              strength={0.4}
            >
              <Plus size={16} strokeWidth={2.5} />
            </MagneticButton>
          </div>
        </header>

        {/* Hero Copy Content */}
        <article className="hero-main-content">
          {/* React Bits Shimmer Pill Badge */}
          <div className="reactbits-badge">
            <span className="badge-glow" aria-hidden="true" />
            <Sparkles size={12} className="text-amber-400" />
            <span><DecryptedText text="REVENUE & OPERATIONAL SCALING FRAMEWORK" speed={40} /></span>
          </div>

          {/* Aceternity Flip Words & BlurText Main Title */}
          <div className="hero-title-box">
            <h1 className="hero-main-title" id="hero-main-title">
              <div className="title-static-line">
                <BlurText text="A CLEAR" className="left-clip" delay={0.08} />
                <span className="title-white">GROWTH PLAN</span>
              </div>
              
              {/* Dynamic Animated Flip Word Subheadline */}
              <div className="title-flip-wrapper">
                <span className="to-prefix">TO </span>
                <motion.span
                  key={words[activeWordIndex]}
                  initial={{ opacity: 0, y: 15, rotateX: -45 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  exit={{ opacity: 0, y: -15, rotateX: 45 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flip-word-gradient"
                >
                  {words[activeWordIndex]}
                </motion.span>
              </div>
            </h1>

            {/* Pinpointed Terminology SEO Paragraph */}
            <p className="hero-description aceternity-subtext">
              Direct revenue scaling, sales automation, and custom enterprise business systems — <strong>zero fluff, 100% executable ROI.</strong>
            </p>
          </div>

          {/* Velocity Marquee Ticker */}
          <div style={{ margin: '0.8rem 0' }}>
            <VelocityMarquee items={marqueeTags} speed={25} />
          </div>

          {/* Social Proof Metric Badge */}
          <div className="reviews-badge aceternity-proof-badge" itemScope itemType="https://schema.org/AggregateRating">
            <meta itemProp="ratingValue" content="4.9" />
            <meta itemProp="reviewCount" content="230" />
            <div className="avatar-stack">
              {reviewers.map((url, idx) => (
                <img key={idx} src={url} alt={`Enterprise Client ${idx + 1}`} width="32" height="32" />
              ))}
            </div>
            <div className="reviews-info">
              <div className="stars-rating">
                <span className="stars" aria-label="5 out of 5 stars">★★★★★</span>
                <span><CountUp end={4.9} decimals={1} suffix="/5" /></span>
              </div>
              <div className="reviews-count">
                <CountUp end={230} decimals={0} suffix="+" /> VERIFIED ENTERPRISE REVIEWS
              </div>
            </div>
          </div>
        </article>

        {/* Right Bottom Section: CTAs & Client Logos */}
        <footer className="hero-bottom-block">
          <div className="hero-cta-group">
            <MagneticButton 
              className="shadcn-hero-primary-btn" 
              onClick={onOpenBooking} 
              strength={0.3}
              ariaLabel="Book Strategy Consultation Call"
            >
              <span>SCHEDULE STRATEGY CALL</span>
              <ArrowRight size={16} />
            </MagneticButton>
            <MagneticButton 
              className="btn-pill-light aceternity-secondary-btn" 
              onClick={() => onScrollTo('who-we-are')} 
              strength={0.25}
              ariaLabel="Learn how LadderUp works"
            >
              SEE HOW IT WORKS
            </MagneticButton>
          </div>

          {/* Client Logos Footer */}
          <div className="partner-logos-footer" aria-label="Trusted Enterprise Partners">
            <div className="logo-item">
              <Hexagon className="logo-icon" strokeWidth={2.2} />
              <span>Calescence</span>
            </div>

            <div className="logo-item">
              <Zap className="logo-icon" strokeWidth={2.2} />
              <span>Boltshift</span>
            </div>

            <div className="logo-item">
              <Link2 className="logo-icon" strokeWidth={2.2} />
              <span>Interlock</span>
            </div>

            <div className="logo-item">
              <Grid className="logo-icon" strokeWidth={2.2} />
              <span>OdeaLabs</span>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
