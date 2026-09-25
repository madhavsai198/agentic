import React from 'react';
import { X, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';

/* =========================================================
   FULLSCREEN MENU DRAWER
   ========================================================= */
export function MenuDrawer({
  isOpen,
  onClose,
  onScrollTo,
  onOpenBooking
}) {
  if (!isOpen) return null;

  return (
    <div className="menu-drawer">
      <div className="drawer-header">
        <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '0.05em' }}>
          LADDER UP * GROWTH AGENCY
        </div>
        <button className="close-btn" onClick={onClose} aria-label="Close Menu">
          <X size={22} />
        </button>
      </div>

      <div className="drawer-links">
        <button className="drawer-link-item active" onClick={() => onScrollTo('hero')}>
          <span>01</span> GROWTH PLAN
        </button>
        <button className="drawer-link-item" onClick={() => onScrollTo('who-we-are')}>
          <span>02</span> WHO WE ARE
        </button>
        <button className="drawer-link-item" onClick={() => onScrollTo('services-catalog')}>
          <span>03</span> SERVICES & OFFERINGS
        </button>
        <button className="drawer-link-item" onClick={() => onScrollTo('why-us')}>
          <span>04</span> WHY LADDER UP®
        </button>
        <button className="drawer-link-item" onClick={() => onScrollTo('how-we-do-it')}>
          <span>05</span> HOW WE DO IT
        </button>
        <button className="drawer-link-item" onClick={() => { onClose(); onOpenBooking(); }}>
          <span>06</span> SCHEDULE ASSESSMENT
        </button>
      </div>

      <div className="drawer-footer">
        <div>
          <div style={{ fontWeight: 800, color: '#ffffff', marginBottom: '0.3rem' }}>HEADQUARTERS</div>
          <div>BENGALURU • MUMBAI • DELHI NCR</div>
        </div>
        <div>
          <div style={{ fontWeight: 800, color: '#ffffff', marginBottom: '0.3rem' }}>DIRECT CONTACT</div>
          <div>hello@ladderup.agency</div>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ASSESSMENT BOOKING MODAL
   ========================================================= */
export function BookingModal({
  isOpen,
  onClose,
  formData,
  setFormData,
  bookingSubmitted,
  onSubmit
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="close-btn" 
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {!bookingSubmitted ? (
          <>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#8888aa', fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '0.5rem' }}>
              <Sparkles size={14} color="#ffffff" /> 30-MINUTE GROWTH CLARITY CALL
            </div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, marginBottom: '1.5rem', textTransform: 'uppercase' }}>
              Schedule Free Assessment
            </h3>

            <form onSubmit={onSubmit}>
              <div className="form-group">
                <label>Selected Service Focus</label>
                <input 
                  type="text" 
                  readOnly
                  className="form-input" 
                  style={{ background: '#252530', color: '#aaaabb' }}
                  value={formData.service}
                />
              </div>

              <div className="form-group">
                <label>Full Name</label>
                <input 
                  type="text" 
                  required 
                  className="form-input" 
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label>Work Email</label>
                <input 
                  type="email" 
                  required 
                  className="form-input" 
                  placeholder="alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input 
                    type="date" 
                    className="form-input" 
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label>Time Slot</label>
                  <select 
                    className="form-input" 
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  >
                    <option>10:00 AM EST</option>
                    <option>01:30 PM EST</option>
                    <option>04:00 PM EST</option>
                  </select>
                </div>
              </div>

              <button type="submit" className="p2-btn-white" style={{ marginTop: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                CONFIRM ASSESSMENT <ArrowRight size={16} />
              </button>
            </form>
          </>
        ) : (
          <div style={{ textAlign: 'center', padding: '2rem 0' }}>
            <CheckCircle2 size={56} color="#4ade80" style={{ margin: '0 auto 1rem auto' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 900, marginBottom: '0.8rem' }}>
              ASSESSMENT CONFIRMED!
            </h3>
            <p style={{ color: '#aaaabb', fontSize: '0.9rem', lineHeight: 1.5 }}>
              We’ve sent a calendar invitation for <strong>{formData.service}</strong> to <strong>{formData.email || 'your email'}</strong>. Our growth team looks forward to helping you scale!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

/* =========================================================
   METHODOLOGY STEP DETAIL MODAL
   ========================================================= */
export function StepDetailModal({
  step,
  onClose,
  onOpenBooking
}) {
  if (!step) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '520px' }} onClick={(e) => e.stopPropagation()}>
        <button 
          className="close-btn" 
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div style={{ color: '#8888aa', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
          METHODOLOGY STEP {step.id}
        </div>

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.2rem', textTransform: 'uppercase' }}>
          {step.title}
        </h3>

        <p style={{ color: '#aaaabb', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.8rem' }}>
          {step.detail}
        </p>

        <button 
          className="p2-btn-white" 
          style={{ width: '100%' }}
          onClick={() => { onClose(); onOpenBooking(); }}
        >
          START THIS STEP WITH US
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   SERVICE DETAIL MODAL
   ========================================================= */
export function ServiceDetailModal({
  service,
  onClose,
  onBookService
}) {
  if (!service) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '640px' }} onClick={(e) => e.stopPropagation()}>
        <button 
          className="close-btn" 
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div style={{ color: '#72727e', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
          SERVICE /{service.id}
        </div>

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 900, marginBottom: '1.2rem', textTransform: 'uppercase' }}>
          {service.title}
        </h3>

        <p style={{ color: '#aaaabb', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
          {service.description}
        </p>

        <div style={{ background: '#1c1c24', padding: '1.2rem', borderRadius: '12px', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '0.8rem' }}>
            ✦ KEY DELIVERABLES
          </div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {service.deliverables.map((item, i) => (
              <li key={i} style={{ fontSize: '0.82rem', color: '#cccccc', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={14} color="#4ade80" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#888899', textTransform: 'uppercase' }}>
            TIMELINE: {service.timeline}
          </span>
          <button 
            className="p2-btn-white" 
            style={{ width: 'auto', padding: '0.8rem 1.6rem' }}
            onClick={() => onBookService(service.title)}
          >
            BOOK THIS SERVICE
          </button>
        </div>
      </div>
    </div>
  );
}

/* =========================================================
   ADVANTAGE DETAIL MODAL
   ========================================================= */
export function AdvantageDetailModal({
  advantage,
  onClose,
  onOpenBooking
}) {
  if (!advantage) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '520px' }} onClick={(e) => e.stopPropagation()}>
        <button 
          className="close-btn" 
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div style={{ color: '#8888aa', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', marginBottom: '0.4rem' }}>
          ADVANTAGE /{advantage.id}
        </div>

        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 900, marginBottom: '1.2rem', textTransform: 'uppercase' }}>
          {advantage.text}
        </h3>

        <p style={{ color: '#aaaabb', fontSize: '0.92rem', lineHeight: 1.6, marginBottom: '1.8rem' }}>
          {advantage.detail}
        </p>

        <button 
          className="p2-btn-white" 
          style={{ width: '100%' }}
          onClick={() => { onClose(); onOpenBooking(); }}
        >
          TALK TO A GROWTH EXPERT
        </button>
      </div>
    </div>
  );
}

/* =========================================================
   VIDEO PLAYER MODAL
   ========================================================= */
export function VideoModal({
  isOpen,
  onClose
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="video-modal-card" onClick={(e) => e.stopPropagation()}>
        <button 
          className="close-btn" 
          style={{ position: 'absolute', top: '1rem', right: '1rem', zIndex: 10, background: 'rgba(0,0,0,0.6)' }}
          onClick={onClose}
        >
          <X size={20} />
        </button>
        <iframe 
          src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
          title="How We Help Your Business Grow Without The Hype" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
