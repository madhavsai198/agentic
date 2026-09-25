import React, { useState, useEffect, useRef } from 'react';
import { motion, useSpring, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, Sparkles, Check, ChevronDown, Calculator, TrendingUp, ShieldCheck, Zap, HelpCircle } from 'lucide-react';

/* =========================================================
   REACT BITS: MAGNETIC BUTTON (CURSOR MAGNETIC PULL)
   ========================================================= */
export function MagneticButton({ 
  children, 
  className = '', 
  onClick, 
  style = {}, 
  ariaLabel, 
  strength = 0.35,
  type = 'button' 
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 15, stiffness: 150 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;

    x.set(distanceX * strength);
    y.set(distanceY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.button
      ref={ref}
      type={type}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      style={{
        x: springX,
        y: springY,
        ...style
      }}
      aria-label={ariaLabel}
    >
      {children}
    </motion.button>
  );
}

/* =========================================================
   REACT BITS: TILT CARD (3D PARALLAX MOUSE TILT WITH GLARE)
   ========================================================= */
export function TiltCard({ children, className = '', onClick, style = {}, maxRotation = 12 }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-100, 100], [maxRotation, -maxRotation]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-maxRotation, maxRotation]), { damping: 20, stiffness: 200 });

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: 'preserve-3d',
        perspective: 1000,
        ...style
      }}
    >
      {children}
    </motion.div>
  );
}

/* =========================================================
   REACT BITS: COUNT UP ANIMATED COUNTER
   ========================================================= */
export function CountUp({ end, suffix = '', prefix = '', decimals = 0, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasAnimated]);

  useEffect(() => {
    if (!hasAnimated) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easeOutProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = easeOutProgress * end;
      setCount(currentVal);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [hasAnimated, end, duration]);

  return (
    <span ref={ref} className="reactbits-countup-val">
      {prefix}
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

/* =========================================================
   REACT BITS: SPOTLIGHT CARD (MOUSE FOLLOW SPOTLIGHT)
   ========================================================= */
export function SpotlightCard({ children, className = '', onClick, style = {}, spotlightColor = 'rgba(245, 158, 11, 0.15)' }) {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`reactbits-spotlight-card ${className}`}
      style={{
        position: 'relative',
        overflow: 'hidden',
        ...style
      }}
    >
      <div
        style={{
          pointerEvents: 'none',
          position: 'absolute',
          inset: 0,
          opacity,
          transition: 'opacity 0.3s ease',
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`
        }}
      />
      {children}
    </div>
  );
}

/* =========================================================
   REACT BITS: SHINY TEXT (SWEEPING SHIMMER TEXT)
   ========================================================= */
export function ShinyText({ text, className = '', speed = 3 }) {
  return (
    <span
      className={`reactbits-shiny-text ${className}`}
      style={{
        backgroundImage: 'linear-gradient(120deg, rgba(255,255,255,0.7) 30%, rgba(255,255,255,1) 50%, rgba(255,255,255,0.7) 70%)',
        backgroundSize: '200% 100%',
        WebkitBackgroundClip: 'text',
        animation: `shinyTextSweep ${speed}s infinite linear`
      }}
    >
      {text}
    </span>
  );
}

/* =========================================================
   REACT BITS: DECRYPTED TEXT (HOVER CHARACTER SCRAMBLE)
   ========================================================= */
export function DecryptedText({ text, className = '', speed = 40 }) {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@$%&*';

  useEffect(() => {
    if (!isHovered) {
      setDisplayText(text);
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration) return text[index];
            return characters[Math.floor(Math.random() * characters.length)];
          })
          .join('')
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, speed);

    return () => clearInterval(interval);
  }, [isHovered, text, speed]);

  return (
    <span
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ cursor: 'pointer' }}
    >
      {displayText}
    </span>
  );
}

/* =========================================================
   REACT BITS: BLUR TEXT (WORD-BY-WORD STAGGERED REVEAL)
   ========================================================= */
export function BlurText({ text, className = '', delay = 0.1, animateBy = 'words' }) {
  const items = animateBy === 'words' ? text.split(' ') : text.split('');
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: delay
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 12 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <motion.span
      className={`reactbits-blur-text ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-50px' }}
      style={{ display: 'inline-block' }}
    >
      {items.map((item, idx) => (
        <motion.span
          key={idx}
          variants={childVariants}
          style={{ display: 'inline-block', marginRight: animateBy === 'words' ? '0.25em' : '0' }}
        >
          {item}
        </motion.span>
      ))}
    </motion.span>
  );
}

/* =========================================================
   REACT BITS: BORDER BEAM (ANIMATED GLOWING BORDER)
   ========================================================= */
export function BorderBeam({ size = 200, duration = 6, delay = 0, colorFrom = '#f59e0b', colorTo = '#6366f1' }) {
  return (
    <div
      className="reactbits-border-beam"
      style={{
        position: 'absolute',
        inset: 0,
        borderRadius: 'inherit',
        pointerEvents: 'none',
        border: '1px solid transparent',
        maskImage: `linear-gradient(transparent, transparent), linear-gradient(#000, #000)`,
        maskClip: 'padding-box, border-box',
        maskComposite: 'intersect',
        WebkitMaskComposite: 'xor',
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: '-100%',
          background: `conic-gradient(from 0deg at 50% 50%, transparent 0deg, ${colorFrom} 120deg, ${colorTo} 180deg, transparent 360deg)`,
          animation: `spinBorderBeam ${duration}s linear infinite`,
          animationDelay: `${delay}s`
        }}
      />
    </div>
  );
}

/* =========================================================
   REACT BITS: INTERACTIVE AGENCY ROI CALCULATOR
   ========================================================= */
export function InteractiveRoiCalculator({ onBookCall }) {
  const [monthlyRevenue, setMonthlyRevenue] = useState(75000);
  const [targetGrowth, setTargetGrowth] = useState(35); // 35% target growth
  const [marginGain, setMarginGain] = useState(15); // +15% EBIT margin improvement

  const annualCurrentRevenue = monthlyRevenue * 12;
  const projectedAnnualRevenue = annualCurrentRevenue * (1 + targetGrowth / 100);
  const annualRevenueGain = projectedAnnualRevenue - annualCurrentRevenue;
  const projectedEbitGain = projectedAnnualRevenue * (marginGain / 100);

  return (
    <SpotlightCard 
      className="agency-roi-calculator-card"
      spotlightColor="rgba(245, 158, 11, 0.18)"
      style={{
        background: '#121217',
        border: '1px solid rgba(245, 158, 11, 0.35)',
        borderRadius: '24px',
        padding: 'clamp(1.5rem, 3vw, 2.5rem)',
        color: '#ffffff',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)',
        position: 'relative'
      }}
    >
      <BorderBeam duration={8} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.2rem', flexWrap: 'wrap', gap: '0.8rem' }}>
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', padding: '0.35rem 0.85rem', borderRadius: '9999px', fontSize: '0.72rem', fontWeight: 800, border: '1px solid rgba(245, 158, 11, 0.3)' }}>
          <Calculator size={14} /> AGENCY ROI PROJECTION ENGINE
        </div>
        <span style={{ fontSize: '0.7rem', color: '#8888aa', fontWeight: 700, textTransform: 'uppercase' }}>
          ✦ VERIFIED BENCHMARK DATA
        </span>
      </div>

      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)', fontWeight: 900, marginBottom: '0.5rem', color: '#ffffff' }}>
        CALCULATE YOUR 12-MONTH REVENUE & EBIT EXPANSION
      </h3>
      <p style={{ fontSize: '0.85rem', color: '#a0a0b0', marginBottom: '1.8rem', lineHeight: 1.5 }}>
        Adjust the sliders below based on your enterprise metrics to project immediate net financial gains from deploying the LadderUp Growth Engine.
      </p>

      {/* Sliders Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
        
        {/* Slider 1: Current Monthly Revenue */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '1.2rem', borderRadius: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.78rem', fontWeight: 700 }}>
            <span style={{ color: '#cccccc' }}>Current Monthly Revenue:</span>
            <span style={{ color: '#f59e0b', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 900 }}>
              ${monthlyRevenue.toLocaleString()} /mo
            </span>
          </div>
          <input
            type="range"
            min={10000}
            max={500000}
            step={5000}
            value={monthlyRevenue}
            onChange={(e) => setMonthlyRevenue(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#f59e0b', cursor: 'pointer' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#666688', marginTop: '0.3rem' }}>
            <span>$10k/mo</span>
            <span>$500k/mo</span>
          </div>
        </div>

        {/* Slider 2: Target ARR Growth Rate */}
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', padding: '1.2rem', borderRadius: '14px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.6rem', fontSize: '0.78rem', fontWeight: 700 }}>
            <span style={{ color: '#cccccc' }}>Target Pipeline Growth:</span>
            <span style={{ color: '#6366f1', fontFamily: 'var(--font-display)', fontSize: '1rem', fontWeight: 900 }}>
              +{targetGrowth}% ARR
            </span>
          </div>
          <input
            type="range"
            min={10}
            max={150}
            step={5}
            value={targetGrowth}
            onChange={(e) => setTargetGrowth(Number(e.target.value))}
            style={{ width: '100%', accentColor: '#6366f1', cursor: 'pointer' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.65rem', color: '#666688', marginTop: '0.3rem' }}>
            <span>10% (Conservative)</span>
            <span>150% (Aggressive)</span>
          </div>
        </div>

      </div>

      {/* Projection Results Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', background: 'rgba(245, 158, 11, 0.06)', border: '1px solid rgba(245, 158, 11, 0.2)', padding: '1.2rem', borderRadius: '16px', marginBottom: '1.8rem' }}>
        
        <div>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#8888aa', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
            Projected Annual Revenue Gain
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, color: '#ffffff' }}>
            +${Math.round(annualRevenueGain).toLocaleString()}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#8888aa', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
            Projected EBIT Margin Gain
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, color: '#f59e0b' }}>
            +${Math.round(projectedEbitGain).toLocaleString()}
          </div>
        </div>

        <div>
          <div style={{ fontSize: '0.68rem', fontWeight: 800, color: '#8888aa', textTransform: 'uppercase', marginBottom: '0.2rem' }}>
            Est. Implementation Payback
          </div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, color: '#10b981' }}>
            2.5 Weeks
          </div>
        </div>

      </div>

      {/* Calculator Action Button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontSize: '0.78rem', color: '#aaaaaa', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
          <Check size={14} className="text-emerald-400" /> Guaranteed performance metrics backed by milestone deliverables.
        </div>
        <MagneticButton className="shadcn-hero-primary-btn" onClick={onBookCall} strength={0.3}>
          <span>CLAIM THIS REVENUE BLUEPRINT</span>
          <ArrowRight size={16} />
        </MagneticButton>
      </div>

    </SpotlightCard>
  );
}

/* =========================================================
   REACT BITS: AGENCY COMPARISON SLIDER (MODEL COMPARISON)
   ========================================================= */
export function AgencyComparisonSlider({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('ladderup');

  const comparisonItems = [
    {
      feature: 'Execution Speed & Time to Market',
      traditional: '3 to 6 months setup, heavy retainer bloat, slow bureaucracy.',
      ladderup: '14-Day deployment with pre-tested CRM, pipeline & SOP playbooks.'
    },
    {
      feature: 'Revenue Strategy & ROI Accountability',
      traditional: 'Vague vanity metrics (impressions, clicks, fluff reports).',
      ladderup: 'Fixed EBIT & ARR growth targets tied to bottom-line performance.'
    },
    {
      feature: 'Tech Stack & System Automation',
      traditional: 'Siloed tools, manual copy-pasting, disconnected teams.',
      ladderup: 'Custom operations command center & automated lead triage sync.'
    },
    {
      feature: 'Team Onboarding & SOP Continuity',
      traditional: 'Zero handover, reliance on agency account managers.',
      ladderup: 'Full departmental playbooks & embedded leadership training.'
    }
  ];

  return (
    <div style={{ width: '100%', margin: '2rem 0' }}>
      
      {/* Switcher Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem', gap: '0.5rem' }}>
        <button
          onClick={() => setActiveTab('ladderup')}
          style={{
            padding: '0.6rem 1.4rem',
            borderRadius: '9999px',
            border: activeTab === 'ladderup' ? '1px solid #f59e0b' : '1px solid rgba(255,255,255,0.1)',
            background: activeTab === 'ladderup' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255,255,255,0.03)',
            color: activeTab === 'ladderup' ? '#f59e0b' : '#aaaaaa',
            fontSize: '0.78rem',
            fontWeight: 800,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          ✦ LADDERUP ENGINE (MODERN)
        </button>
        <button
          onClick={() => setActiveTab('traditional')}
          style={{
            padding: '0.6rem 1.4rem',
            borderRadius: '9999px',
            border: activeTab === 'traditional' ? '1px solid #666688' : '1px solid rgba(255,255,255,0.1)',
            background: activeTab === 'traditional' ? 'rgba(255,255,255,0.1)' : 'rgba(255,255,255,0.03)',
            color: activeTab === 'traditional' ? '#ffffff' : '#8888aa',
            fontSize: '0.78rem',
            fontWeight: 700,
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          TRADITIONAL AGENCIES (LEGACY)
        </button>
      </div>

      {/* Comparison Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1rem' }}>
        {comparisonItems.map((item, idx) => (
          <SpotlightCard
            key={idx}
            spotlightColor={activeTab === 'ladderup' ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255, 255, 255, 0.05)'}
            style={{
              background: activeTab === 'ladderup' ? 'rgba(20, 20, 28, 0.9)' : 'rgba(15, 15, 18, 0.9)',
              border: activeTab === 'ladderup' ? '1px solid rgba(245, 158, 11, 0.3)' : '1px solid rgba(255,255,255,0.06)',
              borderRadius: '16px',
              padding: '1.4rem'
            }}
          >
            <div style={{ fontSize: '0.7rem', fontWeight: 800, color: activeTab === 'ladderup' ? '#f59e0b' : '#8888aa', letterSpacing: '0.06em', marginBottom: '0.4rem' }}>
              0{idx + 1} • {item.feature}
            </div>
            
            <p style={{ fontSize: '0.88rem', color: '#ffffff', lineHeight: 1.5, fontWeight: 600 }}>
              {activeTab === 'ladderup' ? item.ladderup : item.traditional}
            </p>
          </SpotlightCard>
        ))}
      </div>

    </div>
  );
}

/* =========================================================
   REACT BITS: FAQ ACCORDION WITH SCHEMA MARKUP SUPPORT
   ========================================================= */
export function FaqAccordion({ items }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="reactbits-faq-accordion" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              marginBottom: '0.8rem',
              borderRadius: '14px',
              background: isOpen ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.02)',
              border: isOpen ? '1px solid rgba(245, 158, 11, 0.35)' : '1px solid rgba(255, 255, 255, 0.06)',
              overflow: 'hidden',
              transition: 'all 0.25s ease'
            }}
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : idx)}
              aria-expanded={isOpen}
              style={{
                width: '100%',
                padding: '1.2rem 1.5rem',
                background: 'transparent',
                border: 'none',
                display: 'flex',
                justify: 'space-between',
                alignItems: 'center',
                textAlign: 'left',
                color: '#ffffff',
                fontFamily: 'var(--font-display)',
                fontSize: '1rem',
                fontWeight: 800,
                cursor: 'pointer'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                <HelpCircle size={16} className="text-amber-400" />
                {item.question}
              </span>
              <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
                <ChevronDown size={18} style={{ color: '#f59e0b' }} />
              </motion.div>
            </button>

            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 1.5rem 1.2rem 2.8rem', fontSize: '0.9rem', color: '#b0b0c0', lineHeight: 1.65 }}>
                    {item.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

/* =========================================================
   REACT BITS: VELOCITY MARQUEE TICKER
   ========================================================= */
export function VelocityMarquee({ items, speed = 25 }) {
  return (
    <div className="reactbits-marquee-wrapper" style={{ overflow: 'hidden', width: '100%', position: 'relative', padding: '1rem 0' }}>
      <div 
        className="reactbits-marquee-track"
        style={{
          display: 'flex',
          gap: '2rem',
          width: 'max-content',
          animation: `marqueeScroll ${speed}s linear infinite`
        }}
      >
        {items.concat(items).map((item, idx) => (
          <div 
            key={idx} 
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '0.5rem',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '0.45rem 1rem',
              borderRadius: '9999px',
              fontSize: '0.75rem',
              fontWeight: 800,
              color: '#dddddd',
              letterSpacing: '0.06em'
            }}
          >
            <Sparkles size={12} className="text-amber-400" />
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
