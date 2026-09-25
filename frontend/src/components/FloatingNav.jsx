import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, ArrowRight, Sparkles, Hexagon } from 'lucide-react';
import { MagneticButton } from './ReactBits';

export default function FloatingNav({
  visible,
  activeSection,
  onScrollTo,
  onOpenBooking,
  onOpenMenu
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const navItems = [
    { id: 'who-we-are', label: 'Who We Are', num: '01' },
    { id: 'services-catalog', label: 'Services', num: '02' },
    { id: 'roi-calculator', label: 'ROI Calc', num: '03' },
    { id: 'case-studies', label: 'Cases', num: '04' },
    { id: 'why-us', label: 'Why Us', num: '05' },
    { id: 'how-we-do-it', label: 'Process', num: '06' },
    { id: 'faq', label: 'FAQ', num: '07' },
  ];

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          initial={{
            opacity: 0,
            y: -100,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            y: -100,
          }}
          transition={{
            duration: 0.35,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="aceternity-floating-nav-wrapper"
          role="navigation"
          aria-label="Sticky Main Navigation"
        >
          <div className="aceternity-floating-nav-card">
            {/* Aceternity Signature Border Glow Beam */}
            <div className="aceternity-border-glow" aria-hidden="true" />

            {/* Left Brand Logo */}
            <button 
              className="aceternity-nav-logo" 
              onClick={() => onScrollTo('hero')}
              aria-label="LadderUp Home Page"
            >
              <div className="logo-icon-badge">
                <Hexagon size={14} className="text-white fill-white/20" />
              </div>
              <span className="logo-brand">LADDER UP<span className="logo-sub">®</span></span>
            </button>

            {/* Divider */}
            <div className="aceternity-nav-divider" aria-hidden="true" />

            {/* Center Navigation Links with Hover Pill & Active Highlight */}
            <nav 
              className="aceternity-nav-list"
              onMouseLeave={() => setHoveredIndex(null)}
              aria-label="Section Navigation Links"
            >
              {navItems.map((item, idx) => {
                const isActive = activeSection === item.id;
                const isHovered = hoveredIndex === idx;

                return (
                  <button
                    key={item.id}
                    className={`aceternity-nav-item ${isActive ? 'active' : ''}`}
                    onClick={() => onScrollTo(item.id)}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    aria-label={`Scroll to ${item.label} section`}
                  >
                    {/* Aceternity Hover Background Pill Animation */}
                    {isHovered && (
                      <motion.span
                        layoutId="aceternity-hover-pill"
                        className="aceternity-hover-bg"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}

                    {/* Active State Glow Indicator */}
                    {isActive && !isHovered && (
                      <span className="aceternity-active-indicator" />
                    )}

                    <span className="nav-item-num">{item.num}</span>
                    <span className="nav-item-text">{item.label}</span>
                  </button>
                );
              })}
            </nav>

            {/* Divider */}
            <div className="aceternity-nav-divider hide-mobile" aria-hidden="true" />

            {/* Right Actions: shadcn Shimmer Button CTA + Menu Toggle */}
            <div className="aceternity-nav-actions">
              {/* React Bits Magnetic CTA Button */}
              <MagneticButton 
                className="shadcn-shimmer-btn"
                onClick={onOpenBooking}
                strength={0.3}
                ariaLabel="Schedule Growth Strategy Session"
              >
                <span className="shimmer-spin-border" aria-hidden="true" />
                <span className="shimmer-btn-content">
                  <Sparkles size={13} className="text-amber-400" />
                  <span>Schedule</span>
                  <ArrowRight size={13} className="hide-mobile" />
                </span>
              </MagneticButton>

              {/* shadcn UI Outline Menu Button */}
              <button 
                className="shadcn-outline-btn"
                onClick={onOpenMenu}
                aria-label="Open full menu navigation drawer"
              >
                <Plus size={14} strokeWidth={2.5} />
                <span className="hide-mobile">MENU</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
