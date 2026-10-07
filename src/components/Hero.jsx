import React from 'react';
import { ArrowRight, Shield, Cpu, Building, Radio, MapPin } from 'lucide-react';
import './Hero.css';

export default function Hero({ onOpenContactModal }) {
  return (
    <section id="hero" className="hero-section">
      {/* Full-screen Photorealistic Surveillance & Technology Background */}
      <div className="hero-video-wrapper">
        <img 
          src="/images/hero.jpg" 
          alt="Smart Security Operations & Surveillance Control Center" 
          className="hero-bg-img"
        />
        <div className="hero-video-overlay"></div>
        
        {/* Dynamic Surveillance HUD Grid Elements */}
        <div className="hero-hud-telemetry">
          <div className="hud-node top-left">
            <span className="hud-dot"></span>
            <span className="hud-text">CAM-01 LIVE • ANPR FEED ACTIVE</span>
          </div>
          <div className="hud-node top-right">
            <span className="hud-text">SYSTEM STATUS: OPTIMAL (60 FPS)</span>
          </div>
        </div>
      </div>

      <div className="container hero-container">
        <div className="hero-content">
          <h1 className="display-title hero-headline">
            SMART SYSTEMS.<br />
            <span className="headline-highlight">CONNECTED INTELLIGENCE.</span>
          </h1>

          <p className="hero-description">
            Empowering businesses, communities, and infrastructure with AI video analytics, smart building controls, and digital technology solutions.
          </p>

          <div className="hero-cta-group">
            <a href="#solutions" className="btn btn-primary hero-btn-large">
              <span>Explore Solutions</span>
              <ArrowRight size={18} />
            </a>

            <button 
              type="button" 
              onClick={onOpenContactModal} 
              className="btn btn-secondary-dark hero-btn-large"
            >
              <span>Talk to Our Team</span>
            </button>
          </div>
        </div>

        {/* Subtle Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="mouse-icon">
            <div className="wheel"></div>
          </div>
          <span className="scroll-text">Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
