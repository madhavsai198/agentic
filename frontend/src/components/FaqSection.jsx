import React from 'react';
import { Sparkles, HelpCircle } from 'lucide-react';
import { FaqAccordion, DecryptedText, ShinyText, MagneticButton } from './ReactBits';

export default function FaqSection({ onOpenBooking }) {
  const faqItems = [
    {
      question: "What makes LadderUp different from traditional marketing or consulting agencies?",
      answer: "Unlike traditional agencies that charge high monthly retainers for vanity metrics (impressions, clicks, fluff PDF reports), LadderUp acts as embedded growth engineers. We build custom, automated revenue pipelines and operations command centers directly inside your stack, with fixed pricing tied to EBIT margin growth."
    },
    {
      question: "What is the typical deployment timeline for a growth engine?",
      answer: "Our sprint deployments range from 14 days (for marketing & sales automation triggers) to 6 weeks (for custom software command centers and full departmental SOP playbooks). You start seeing real-time pipeline telemetry in Week 1."
    },
    {
      question: "Does LadderUp integrate with our existing tech stack and CRM?",
      answer: "Yes. We seamlessly synchronize with major CRM platforms (HubSpot, Salesforce, Pipedrive), payment processors (Stripe, Razorpay, QuickBooks), ERPs, custom databases, and communication channels (Slack, WhatsApp, SMS)."
    },
    {
      question: "How is pricing structured?",
      answer: "We offer transparent, fixed milestone pricing with zero hidden fees or endless hourly billing. Every proposal outlines exact deliverables, implementation timelines, and baseline performance targets before work begins."
    },
    {
      question: "What kind of ongoing support and team onboarding do you provide?",
      answer: "Every engagement includes standard operating procedure (SOP) playbooks, departmental workshops, and 90 days of executive advisory support to ensure your internal team operates the system smoothly."
    }
  ];

  return (
    <section 
      className="page-5-container" 
      id="faq" 
      aria-label="Frequently Asked Questions about LadderUp Agency"
      style={{ background: '#09090b', color: '#ffffff', borderTop: '1px solid rgba(255,255,255,0.08)', padding: 'clamp(3rem, 5vw, 5rem) clamp(2rem, 4vw, 4rem)' }}
      itemScope
      itemType="https://schema.org/FAQPage"
    >
      <div className="services-section-header" style={{ marginBottom: '2.5rem' }}>
        <div className="magic-shimmer-badge">
          <Sparkles size={12} className="text-amber-400" />
          <span><DecryptedText text="TRANSPARENCY • FREQUENTLY ASKED QUESTIONS" speed={40} /></span>
        </div>
        <h2 className="services-main-title">
          <span className="title-muted">EVERYTHING YOU NEED TO KNOW ABOUT </span>
          <span className="title-bright-gradient"><ShinyText text="WORKING WITH LADDERUP" /></span>
        </h2>
        <p className="services-sub-pinpoint">
          Clear answers regarding pricing, execution timelines, technical integrations, and EBIT accountability.
        </p>
      </div>

      <FaqAccordion items={faqItems} />

      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <p style={{ fontSize: '0.88rem', color: '#8888aa', marginBottom: '1rem' }}>
          Have a specific technical or architectural question about your business stack?
        </p>
        <MagneticButton className="shadcn-hero-primary-btn" onClick={onOpenBooking} strength={0.3} ariaLabel="Talk directly to a Growth Engineer">
          <span>TALK DIRECTLY TO A GROWTH ENGINEER</span>
        </MagneticButton>
      </div>
    </section>
  );
}
