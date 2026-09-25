import React, { useState } from 'react';
import { ArrowRight, Play, CheckCircle2, Mail, ArrowUp } from 'lucide-react';
import { MagneticButton, ShinyText } from './ReactBits';

export default function FooterSection({
  onOpenBooking,
  onOpenVideo,
  onScrollTo
}) {
  const [footerEmail, setFooterEmail] = useState('');
  const [footerSubscribed, setFooterSubscribed] = useState(false);

  return (
    <footer className="site-global-footer">
      {/* Footer Top Call To Action Card */}
      <div className="footer-cta-card">
        <div className="footer-cta-left">
          <div className="footer-cta-tag">✦ READY TO SCALE?</div>
          <h2 className="footer-cta-heading">LET'S LADDER UP YOUR BUSINESS</h2>
          <p className="footer-cta-subtext">
            Transform operational bottlenecks into automated, high-yield growth engines.
          </p>
        </div>
        <div className="footer-cta-actions">
          <MagneticButton className="footer-btn-primary" onClick={onOpenBooking} strength={0.3}>
            <span><ShinyText text="BOOK STRATEGY CALL" /></span> <ArrowRight size={16} />
          </MagneticButton>
          <MagneticButton className="footer-btn-secondary" onClick={onOpenVideo} strength={0.25}>
            <Play size={14} /> WATCH DEMO
          </MagneticButton>
        </div>
      </div>

      {/* Operational Status Bar */}
      <div className="footer-status-bar">
        <div className="footer-status-pulse">
          <span className="pulse-dot"></span>
          <span className="status-text">SYSTEMS OPERATIONAL • ACCEPTING NEW CLIENT CONSULTATIONS FOR Q4</span>
        </div>
        <div className="footer-status-locations">
          <span>BENGALURU</span> • <span>MUMBAI</span> • <span>DELHI NCR</span>
        </div>
      </div>

      {/* Footer Main Content Grid */}
      <div className="footer-main-grid">
        {/* Brand & Newsletter Column */}
        <div className="footer-col-brand">
          <div className="footer-logo">LADDER UP®</div>
          <p className="footer-brand-desc">
            Premier operational scaling & strategic growth consultancy for high-velocity enterprises.
          </p>
          
          <div className="footer-newsletter">
            <div className="newsletter-label">
              <Mail size={12} /> SUBSCRIBE TO GROWTH BENCHMARKS
            </div>
            {footerSubscribed ? (
              <div className="newsletter-success">
                <CheckCircle2 size={16} /> SUBSCRIBED TO QUARTERLY BENCHMARKS
              </div>
            ) : (
              <form 
                className="newsletter-form" 
                onSubmit={(e) => {
                  e.preventDefault();
                  if (footerEmail.trim()) setFooterSubscribed(true);
                }}
              >
                <input
                  type="email"
                  placeholder="Enter work email..."
                  value={footerEmail}
                  onChange={(e) => setFooterEmail(e.target.value)}
                  required
                />
                <button type="submit" aria-label="Subscribe">
                  <ArrowRight size={16} />
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Quick Navigation Column */}
        <div className="footer-col">
          <div className="footer-col-title">/ NAVIGATION</div>
          <ul className="footer-links-list">
            <li><button onClick={() => onScrollTo('hero')}>Growth Overview</button></li>
            <li><button onClick={() => onScrollTo('who-we-are')}>Who We Are</button></li>
            <li><button onClick={() => onScrollTo('services-catalog')}>Services Catalog</button></li>
            <li><button onClick={() => onScrollTo('why-us')}>Core Advantages</button></li>
            <li><button onClick={() => onScrollTo('how-we-do-it')}>Methodology</button></li>
          </ul>
        </div>

        {/* Core Services Column */}
        <div className="footer-col">
          <div className="footer-col-title">/ CORE SERVICES</div>
          <ul className="footer-links-list">
            <li><button onClick={() => onScrollTo('services-catalog')}>Growth Consulting & Strategy</button></li>
            <li><button onClick={() => onScrollTo('services-catalog')}>Marketing & Sales Automation</button></li>
            <li><button onClick={() => onScrollTo('services-catalog')}>Custom Systems & Integrations</button></li>
            <li><button onClick={() => onScrollTo('services-catalog')}>Team Scaling & Leadership</button></li>
          </ul>
        </div>

        {/* Connect & Headquarters Column */}
        <div className="footer-col">
          <div className="footer-col-title">/ HQ & DIRECT</div>
          <div className="footer-contact-info">
            <div className="contact-item">
              <span className="item-label">DIRECT INQUIRIES</span>
              <a href="mailto:hello@ladderup.agency" className="contact-email">hello@ladderup.agency</a>
            </div>
            <div className="contact-item">
              <span className="item-label">INDIA HQ</span>
              <span className="contact-val">UB CITY, VITTAL MALLYA RD, BENGALURU, KA</span>
            </div>
          </div>
          <div className="footer-social-pills">
            <a href="#linkedin" className="social-pill" onClick={(e) => e.preventDefault()}>LINKEDIN</a>
            <a href="#twitter" className="social-pill" onClick={(e) => e.preventDefault()}>X / TWITTER</a>
            <a href="#instagram" className="social-pill" onClick={(e) => e.preventDefault()}>INSTAGRAM</a>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom-row">
        <div className="footer-copyright">
          © {new Date().getFullYear()} LADDER UP® GROWTH AGENCY. ALL RIGHTS RESERVED.
        </div>
        <div className="footer-tag-center">
          OPERATIONAL SCALING FRAMEWORK v2.4
        </div>
        <MagneticButton className="footer-back-to-top" onClick={() => onScrollTo('hero')} strength={0.3}>
          BACK TO TOP <ArrowUp size={14} />
        </MagneticButton>
      </div>
    </footer>
  );
}
