import React, { useState, useEffect } from 'react';
import FloatingNav from './components/FloatingNav';
import HeroSection from './components/HeroSection';
import WhoWeAreSection from './components/WhoWeAreSection';
import ServicesCatalogSection from './components/ServicesCatalogSection';
import RoiCalculatorSection from './components/RoiCalculatorSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import WhyUsSection from './components/WhyUsSection';
import MethodologySection from './components/MethodologySection';
import FaqSection from './components/FaqSection';
import FooterSection from './components/FooterSection';
import { 
  MenuDrawer, 
  BookingModal, 
  StepDetailModal, 
  ServiceDetailModal, 
  AdvantageDetailModal, 
  VideoModal 
} from './components/Modals';
import './index.css';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [bookingSubmitted, setBookingSubmitted] = useState(false);
  const [selectedService, setSelectedService] = useState(null);
  const [selectedAdvantage, setSelectedAdvantage] = useState(null);
  const [selectedStep, setSelectedStep] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', date: '2026-09-15', time: '10:00 AM', service: 'Growth Assessment' });

  const [p2Progress, setP2Progress] = useState(0);
  const [showNavbar, setShowNavbar] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  // Page 5 Methodology Steps (LadderUp Growth Methodology)
  const methodologySteps = [
    { id: '01/', title: 'REVENUE & WORKFLOW AUDIT', detail: 'Direct identification of manual bottlenecks, conversion leaks, and operational unit-economic gaps.' },
    { id: '02/', title: 'HIGH-ROI LEVER SELECTION', detail: 'Targeted prioritization of scalable sales pipelines, CRM triggers, and margin expansion channels.' },
    { id: '03/', title: 'SYSTEM DEPLOYMENT', detail: 'Full-stack implementation of custom growth tools, client portals, and automated software integrations.' },
    { id: '04/', title: 'MARGIN OPTIMIZATION & SCALE', detail: 'Real-time KPI tracking, departmental execution SOPs, and ongoing leadership support.' },
  ];

  // Page 4 Advantages List (LadderUp Core Advantages)
  const advantagesList = [
    { id: '01', text: 'ACTIONABLE REVENUE BLUEPRINT', detail: 'Direct growth architecture tailored to bottom-line EBIT performance.' },
    { id: '02', text: 'PROVEN SCALING FRAMEWORKS', detail: 'Tested customer acquisition funnels, CRM pipelines, and operational stacks.' },
    { id: '03', text: 'DIRECT HANDS-ON INTEGRATION', detail: 'Embedded growth engineers build and configure every system directly.' },
    { id: '04', text: 'TRANSPARENT ROI & FIXED PRICING', detail: 'Milestone-based project pricing tied to clear performance metrics.' },
  ];

  // Services Catalog Data (LadderUp Core Service Offerings)
  const servicesList = [
    {
      id: '01',
      title: 'GROWTH CONSULTING & STRATEGY',
      image: '/service_1.jpg',
      description: "DIRECT MARKET EXPANSION, UNIT-ECONOMIC OPTIMIZATION, AND CUSTOM 90-DAY REVENUE BLUEPRINTS.",
      hashtags: '#GROWTHSTRATEGY #REVENUESCALING',
      deliverables: ['Custom Growth Roadmap', 'ROI Financial Analysis', 'Market Expansion Playbook', 'Operational Risk Audit'],
      timeline: '2–3 Weeks Delivery'
    },
    {
      id: '02',
      title: 'MARKETING & SALES AUTOMATION',
      image: '/service_2.jpg',
      description: "AUTOMATED LEAD CAPTURE, CRM PIPELINE SYNCHRONIZATION, AND HIGH-CONVERTING ACQUISITION WORKFLOWS.",
      hashtags: '#SCALEMARKETING #LEADGENERATION #AUTOMATEDSALES',
      deliverables: ['Omnichannel Lead Capture', 'Automated CRM Workflows', 'Acquisition Dashboards', 'Sales Pipeline Optimization'],
      timeline: '1–2 Weeks Implementation'
    },
    {
      id: '03',
      title: 'CUSTOM SYSTEMS & TECH INTEGRATIONS',
      image: '/service_3.jpg',
      description: "CUSTOM OPERATIONS COMMAND CENTERS, SOFTWARE STACK SYNCHRONIZATION, AND LIGHTWEIGHT INTERNAL DASHBOARDS.",
      hashtags: '#CUSTOMSYSTEMS #TECHINTEGRATION',
      deliverables: ['Operations Command Center', 'Internal Executive Dashboards', 'Tech Stack Synchronization', 'Custom Client Portals'],
      timeline: '3–5 Weeks Development'
    },
    {
      id: '04',
      title: 'TEAM SCALING & LEADERSHIP ONBOARDING',
      image: '/service_4.jpg',
      description: "DEPARTMENTAL EXECUTION PLAYBOOKS, TEAM ONBOARDING FRAMEWORKS, AND 90-DAY ADVISORY SUPPORT.",
      hashtags: '#TEAMLEADERSHIP #EXECUTIONPLAYBOOK',
      deliverables: ['Team Growth Workshops', 'Standard Operating Procedures', 'Departmental Playbooks', '90-Day Advisory Support'],
      timeline: 'Ongoing Support'
    }
  ];

  // Manifesto headline lines for scroll-driven white line fill animation
  const manifestoLines = [
    "WE BUILD AUTOMATED REVENUE ENGINES",
    "FOR HIGH-VELOCITY ENTERPRISES.",
    "ZERO NOISE. ZERO THEORY.",
    "JUST SYSTEMATIZED EXPANSION",
    "AND MEASURABLE MARGIN EXPANSION."
  ];

  const reviewers = [
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80',
    'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=120&q=80',
  ];

  // Scroll listener for sticky navbar visibility, active section tracking, and Page 2 pinned text
  useEffect(() => {
    const handleScroll = () => {
      // 1. Show floating navbar when scrolled past Hero home page
      const hero = document.getElementById('hero');
      if (hero) {
        const heroRect = hero.getBoundingClientRect();
        setShowNavbar(heroRect.bottom <= 250);
      } else {
        setShowNavbar(window.scrollY > 300);
      }

      // 2. Track active section for navbar link highlights
      const sections = ['hero', 'who-we-are', 'services-catalog', 'roi-calculator', 'case-studies', 'why-us', 'how-we-do-it', 'faq'];
      const scrollPosition = window.scrollY + 250;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }

      // 3. Page 2 scroll progress for manifesto text fill animation
      const wrapper = document.getElementById('p2-wrapper');
      if (wrapper) {
        const rect = wrapper.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (window.innerWidth <= 1024) {
          const progress = Math.min(Math.max((windowHeight - rect.top) / (rect.height + windowHeight * 0.5), 0), 1);
          setP2Progress(progress);
        } else {
          const totalDistance = rect.height - windowHeight;
          if (totalDistance > 0) {
            const currentScroll = -rect.top;
            const progress = Math.min(Math.max(currentScroll / totalDistance, 0), 1);
            setP2Progress(progress);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  // Escape key listener for modals
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        setVideoOpen(false);
        setBookingOpen(false);
        setSelectedService(null);
        setSelectedAdvantage(null);
        setSelectedStep(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try { 
      await fetch('http://localhost:5000/api/assessments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
    } catch (err) {
      console.log('Backend API offline or connecting:', err);
    }
    setBookingSubmitted(true);
    setTimeout(() => {
      setBookingSubmitted(false);
      setBookingOpen(false);
    }, 2500);
  };

  const scrollToSection = (id) => {
    setMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openServiceBooking = (serviceTitle) => {
    setFormData((prev) => ({ ...prev, service: serviceTitle }));
    setSelectedService(null);
    setBookingOpen(true);
  };

  return (
    <div className="site-wrapper">

      {/* 1. Floating Navigation Bar */}
      <FloatingNav
        visible={showNavbar}
        activeSection={activeSection}
        onScrollTo={scrollToSection}
        onOpenBooking={() => setBookingOpen(true)}
        onOpenMenu={() => setMenuOpen(true)}
      />

      {/* 2. Interactive Modals & Fullscreen Drawer */}
      <MenuDrawer
        isOpen={menuOpen}
        onClose={() => setMenuOpen(false)}
        onScrollTo={scrollToSection}
        onOpenBooking={() => setBookingOpen(true)}
      />

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        formData={formData}
        setFormData={setFormData}
        bookingSubmitted={bookingSubmitted}
        onSubmit={handleBookingSubmit}
      />

      <StepDetailModal
        step={selectedStep}
        onClose={() => setSelectedStep(null)}
        onOpenBooking={() => setBookingOpen(true)}
      />

      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onBookService={openServiceBooking}
      />

      <AdvantageDetailModal
        advantage={selectedAdvantage}
        onClose={() => setSelectedAdvantage(null)}
        onOpenBooking={() => setBookingOpen(true)}
      />

      <VideoModal
        isOpen={videoOpen}
        onClose={() => setVideoOpen(false)}
      />

      <main>
        {/* 3. Page #1: Hero Section */}
        <HeroSection
          reviewers={reviewers}
          onOpenBooking={() => setBookingOpen(true)}
          onOpenMenu={() => setMenuOpen(true)}
          onScrollTo={scrollToSection}
        />

        {/* 4. Page #2: Who We Are & Manifesto */}
        <WhoWeAreSection
          manifestoLines={manifestoLines}
          p2Progress={p2Progress}
          onOpenVideo={() => setVideoOpen(true)}
          onOpenBooking={() => setBookingOpen(true)}
          onScrollTo={scrollToSection}
        />

        {/* 5. Page #3: Services Catalog Section */}
        <ServicesCatalogSection
          servicesList={servicesList}
          onSelectService={(srv) => setSelectedService(srv)}
        />

        {/* 6. Interactive Growth ROI & Revenue Calculator */}
        <RoiCalculatorSection
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 7. Page #4: Hover.dev Interactive Case Studies Section */}
        <CaseStudiesSection
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 8. Page #5: Why Companies Choose LadderUp Section */}
        <WhyUsSection
          advantagesList={advantagesList}
          onSelectAdvantage={(adv) => setSelectedAdvantage(adv)}
          onOpenBooking={() => setBookingOpen(true)}
        />

        {/* 9. Page #6: Methodology Section */}
        <MethodologySection
          methodologySteps={methodologySteps}
          onSelectStep={(step) => setSelectedStep(step)}
          onOpenBooking={() => setBookingOpen(true)}
          onScrollTo={scrollToSection}
        />

        {/* 10. Frequently Asked Questions (FAQ) Section */}
        <FaqSection
          onOpenBooking={() => setBookingOpen(true)}
        />
      </main>

      {/* 11. Global Agency Footer */}
      <FooterSection
        onOpenBooking={() => setBookingOpen(true)}
        onOpenVideo={() => setVideoOpen(true)}
        onScrollTo={scrollToSection}
      />

    </div>
  );
}
