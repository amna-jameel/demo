import React from 'react';
import { ArrowRight, GitMerge, Layers, Cpu, Shield, Home, Tv, Car, Check } from 'lucide-react';
import './SystemsIntegrationSection.css';

export default function SystemsIntegrationSection({ onSelectSolution }) {
  const subsystemBadges = [
    { name: 'AI Analytics', icon: Cpu },
    { name: 'Security & CCTV', icon: Shield },
    { name: 'Smart Building', icon: Home },
    { name: 'Control AV', icon: Tv },
    { name: 'Parking ANPR', icon: Car }
  ];

  return (
    <section className="integration-section">
      <div className="container">
        <div className="integration-grid">
          {/* Left Column: Visual Architecture */}
          <div className="integration-visual-col">
            <div className="integration-image-frame">
              <img 
                src="/images/integration.jpg" 
                alt="Integrated Intelligent Technology Environment Operations Center" 
                className="integration-img"
              />

              {/* Architectural Physical System Convergence Overlay */}
              <div className="convergence-overlay">
                <div className="convergence-title">
                  <GitMerge size={14} className="accent-icon" />
                  <span>Subsystem Convergence Architecture</span>
                </div>

                <div className="subsystem-row">
                  {subsystemBadges.map((badge, idx) => {
                    const Icon = badge.icon;
                    return (
                      <div key={idx} className="subsystem-badge">
                        <Icon size={12} className="accent-icon" />
                        <span>{badge.name}</span>
                      </div>
                    );
                  })}
                </div>

                <div className="convergence-arrow">↓ Unified Middleware Layer</div>

                <div className="result-banner">
                  <Check size={14} className="accent-icon" />
                  <span>SINGLE INTEGRATED INFRASTRUCTURE ENGINE</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="integration-content-col">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> THE INTEGRATION DIFFERENTIATOR
            </span>

            <h2 className="section-title integration-headline">
              Connected technology.<br />
              <span className="headline-muted">One integrated environment.</span>
            </h2>

            <p className="section-subtitle integration-description">
              Most vendors deploy isolated systems. AETHEL bridges computer vision, physical access, building automation, and high-density video walls into a single orchestrating software engine.
            </p>

            <div className="diff-bullets">
              <div className="diff-item">
                <div className="diff-bullet-num">01</div>
                <div>
                  <h3 className="diff-title">Native Protocol Bridging</h3>
                  <p className="diff-text">Seamless translation between legacy industrial protocols (BACnet, Modbus) and modern REST/GraphQL cloud APIs.</p>
                </div>
              </div>

              <div className="diff-item">
                <div className="diff-bullet-num">02</div>
                <div>
                  <h3 className="diff-title">Cross-System Event Triggers</h3>
                  <p className="diff-text">An ANPR camera reading an VIP vehicle can automatically prime access turnstiles, adjust floor HVAC, and signal executive displays.</p>
                </div>
              </div>

              <div className="diff-item">
                <div className="diff-bullet-num">03</div>
                <div>
                  <h3 className="diff-title">Single Pane of Glass Command</h3>
                  <p className="diff-text">Operators monitor all physical security, environmental sensors, and video feeds from one unified screen.</p>
                </div>
              </div>
            </div>

            <button 
              type="button" 
              onClick={() => onSelectSolution('integration')}
              className="btn btn-primary"
            >
              <span>Explore Systems Integration</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
