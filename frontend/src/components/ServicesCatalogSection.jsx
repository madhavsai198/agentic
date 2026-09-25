import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, CheckCircle2, Clock, Layers } from 'lucide-react';
import { SpotlightCard, ShinyText, DecryptedText, BlurText, BorderBeam } from './ReactBits';

/* Aceternity UI Meteors Background Effect */
function AceternityMeteors({ number = 8 }) {
  const meteors = new Array(number).fill(true);
  return (
    <div className="aceternity-meteors-container" aria-hidden="true">
      {meteors.map((_, idx) => (
        <span
          key={idx}
          className="aceternity-meteor"
          style={{
            top: 0,
            left: `${Math.floor(Math.random() * 800) - 100}px`,
            animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
            animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`
          }}
        />
      ))}
    </div>
  );
}

export default function ServicesCatalogSection({
  servicesList,
  onSelectService
}) {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState('ALL');

  const categories = ['ALL', 'STRATEGY', 'AUTOMATION', 'SYSTEMS', 'LEADERSHIP'];

  const filteredServices = servicesList.filter((srv) => {
    if (activeCategory === 'ALL') return true;
    if (activeCategory === 'STRATEGY') return srv.title.includes('STRATEGY');
    if (activeCategory === 'AUTOMATION') return srv.title.includes('AUTOMATION');
    if (activeCategory === 'SYSTEMS') return srv.title.includes('SYSTEMS');
    if (activeCategory === 'LEADERSHIP') return srv.title.includes('LEADERSHIP');
    return true;
  });

  return (
    <section 
      className="page-3-container aceternity-services-section" 
      id="services-catalog"
      aria-label="LadderUp Business Growth Services Catalog"
      itemScope 
      itemType="https://schema.org/OfferCatalog"
    >
      <meta itemProp="name" content="LadderUp Enterprise Business Growth Services Catalog" />

      {/* Background Radial Glow */}
      <div className="services-radial-glow" aria-hidden="true" />

      {/* Section Header */}
      <header className="services-section-header">
        <div className="magic-shimmer-badge">
          <Sparkles size={12} className="text-amber-400" />
          <span><DecryptedText text="02 SERVICES & SOLUTIONS" speed={40} /></span>
        </div>
        <h2 className="services-main-title" id="services-main-title">
          <span className="title-muted">TURNING BOTTLENECKS INTO </span>
          <span className="title-bright-gradient"><ShinyText text="HIGH-GROWTH ENGINES" /></span>
        </h2>
        <p className="services-sub-pinpoint">
          Precision growth strategy, automated acquisition pipelines, custom tech stacks, and team SOPs.
        </p>

        {/* Category Filter Tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.6rem', marginTop: '1.8rem', flexWrap: 'wrap' }}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              aria-label={`Filter services by ${cat}`}
              style={{
                padding: '0.45rem 1.1rem',
                borderRadius: '9999px',
                border: activeCategory === cat ? '1px solid #f59e0b' : '1px solid rgba(255, 255, 255, 0.08)',
                background: activeCategory === cat ? 'rgba(245, 158, 11, 0.15)' : 'rgba(255, 255, 255, 0.03)',
                color: activeCategory === cat ? '#f59e0b' : '#aaaaaa',
                fontSize: '0.72rem',
                fontWeight: 800,
                letterSpacing: '0.06em',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </header>

      {/* Aceternity & React Bits Focus Cards Grid with Mouse Spotlight & Meteors */}
      <div className="aceternity-focus-cards-grid" onMouseLeave={() => setHoveredIndex(null)}>
        {filteredServices.map((srv, idx) => {
          const isHovered = hoveredIndex === idx;
          const isAnotherHovered = hoveredIndex !== null && !isHovered;

          return (
            <article key={srv.id} itemScope itemType="https://schema.org/Service">
              <meta itemProp="name" content={srv.title} />
              <meta itemProp="description" content={srv.description} />
              
              <SpotlightCard
                className={`magic-service-card ${isHovered ? 'hovered' : ''} ${isAnotherHovered ? 'blurred' : ''}`}
                spotlightColor="rgba(99, 102, 241, 0.25)"
                onClick={() => onSelectService(srv)}
                style={{ cursor: 'pointer', position: 'relative' }}
                aria-label={`View details for service: ${srv.title}`}
              >
                <div 
                  onMouseEnter={() => setHoveredIndex(idx)}
                  style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
                >
                  {/* Aceternity UI Meteors Background Effect */}
                  {isHovered && <AceternityMeteors number={6} />}

                  {/* React Bits Border Beam Line */}
                  {isHovered && <BorderBeam duration={6} colorFrom="#f59e0b" colorTo="#6366f1" />}

                  {/* Top Row: Index Badge & Timeline Tag */}
                  <div className="card-top-row">
                    <div className="service-index-badge">
                      /{srv.id}
                    </div>
                    <div className="service-timeline-tag">
                      <Clock size={12} className="text-emerald-400" />
                      <span>{srv.timeline}</span>
                    </div>
                  </div>

                  {/* Service Image Box with Glass Overlay */}
                  <div className="magic-image-wrapper">
                    <img 
                      src={srv.image} 
                      alt={`LadderUp Service - ${srv.title}`} 
                      className="service-card-img"
                      width="500"
                      height="300"
                      loading="lazy"
                    />
                    <div className="image-glass-overlay">
                      <span className="overlay-tag">{srv.hashtags}</span>
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="card-body">
                    <h3 className="card-service-title" itemProp="serviceType">{srv.title}</h3>
                    <p className="card-service-desc">{srv.description}</p>

                    {/* Magic UI Deliverables Chips */}
                    {srv.deliverables && (
                      <div className="deliverables-chips-grid">
                        {srv.deliverables.map((item, dIdx) => (
                          <span key={dIdx} className="deliverable-chip">
                            <CheckCircle2 size={11} className="text-emerald-400" />
                            {item}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer Action */}
                  <div className="card-action-footer">
                    <span className="action-text">EXPLORE DELIVERABLES</span>
                    <div className="action-arrow-circle">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </article>
          );
        })}
      </div>
    </section>
  );
}
