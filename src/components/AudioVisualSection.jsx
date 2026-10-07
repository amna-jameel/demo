import React from 'react';
import { Tv, Monitor, Users, Radio, ArrowRight, Video } from 'lucide-react';
import './AudioVisualSection.css';

export default function AudioVisualSection({ onSelectSolution }) {
  const avSolutions = [
    { title: 'Seamless Video Walls', icon: Tv, desc: 'Ultra-narrow bezel and direct-view LED matrices' },
    { title: 'Control Room Centers', icon: Monitor, desc: 'Low-latency matrix routing & operator desktops' },
    { title: 'Executive Conference AV', icon: Video, desc: 'Acoustically tuned telepresence suites' },
    { title: 'Digital Signage Nets', icon: Radio, desc: 'Centralized media distribution infrastructure' },
    { title: 'Interactive Collaboration', icon: Users, desc: 'Multi-user touch display environments' }
  ];

  return (
    <section className="av-section">
      <div className="container">
        <div className="av-grid">
          {/* Left Column: Content */}
          <div className="av-content-col">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> COMMAND VISUALIZATION & AV
            </span>

            <h2 className="section-title av-headline">
              Visual environments for modern operations.
            </h2>

            <p className="section-subtitle av-description">
              High-density video wall installations, command desks, and collaboration environments engineered for uninterrupted enterprise decision-making.
            </p>

            <div className="av-solutions-list">
              {avSolutions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="av-card">
                    <div className="av-icon-box">
                      <Icon size={16} className="accent-icon" />
                    </div>
                    <div>
                      <h3 className="av-card-title">{item.title}</h3>
                      <p className="av-card-desc">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button 
              type="button" 
              onClick={() => onSelectSolution('audio-visual')}
              className="btn btn-primary"
            >
              <span>Explore Audio Visual Solutions</span>
              <ArrowRight size={16} />
            </button>
          </div>

          {/* Right Column: Visual */}
          <div className="av-visual-col">
            <div className="av-image-wrapper">
              <img 
                src="/images/av.jpg" 
                alt="Corporate Control Room and Video Wall Environment" 
                className="av-img"
              />

              <div className="av-overlay-card">
                <div className="overlay-line">
                  <span className="dot-green"></span>
                  <span className="overlay-text">Video Wall Sync: 4K @ 60Hz Low-Latency AVoIP</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
