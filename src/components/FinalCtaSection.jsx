import React from 'react';
import { ArrowRight, Mail, Phone, Globe } from 'lucide-react';
import './FinalCtaSection.css';

export default function FinalCtaSection({ onOpenContactModal }) {
  return (
    <section className="final-cta-section">
      <div className="container">
        <div className="final-cta-card">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span> GLOBAL SYSTEMS ENGAGEMENT
          </span>

          <h2 className="section-title cta-headline">
            Let's build the right technology environment.
          </h2>

          <p className="section-subtitle cta-subtitle">
            Tell us what you are building, securing or connecting. Our international systems engineering teams consult on projects across Pakistan, Saudi Arabia, Oman, UAE, and Portugal.
          </p>

          <div className="final-cta-btn-group">
            <button 
              type="button" 
              onClick={onOpenContactModal} 
              className="btn btn-primary"
            >
              <span>Discuss a Project</span>
              <ArrowRight size={16} />
            </button>

            <a href="#solutions" className="btn btn-secondary-dark">
              <span>Explore Solutions</span>
            </a>
          </div>

          <div className="cta-regions-bar">
            <span>Engineering Offices: Islamabad • Riyadh • Muscat • Dubai • Lisbon</span>
          </div>
        </div>
      </div>
    </section>
  );
}
