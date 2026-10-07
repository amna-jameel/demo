import React, { useState } from 'react';
import { MapPin, Globe, Building2, Phone, Mail, ArrowRight, CheckCircle2 } from 'lucide-react';
import { GLOBAL_REGIONS } from '../data/companyData';
import './GlobalPresenceSection.css';

export default function GlobalPresenceSection({ onSelectCountry }) {
  const [activeRegionId, setActiveRegionId] = useState('saudi-arabia');

  const selectedRegion = GLOBAL_REGIONS.find(r => r.id === activeRegionId) || GLOBAL_REGIONS[1];

  // Coordinates mapping for understated map visualization
  const pinPositions = {
    'pakistan': { top: '48%', left: '72%' },
    'saudi-arabia': { top: '50%', left: '58%' },
    'dubai': { top: '51%', left: '62%' },
    'oman': { top: '53%', left: '64%' }
  };

  return (
    <section id="global-presence" className="global-presence-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center-header">
          <h2 className="section-title">Technology Across Regions</h2>
          <p className="section-subtitle">
            Delivering localized systems engineering, installation, and 24/7 technical operations across 5 primary operational hubs.
          </p>
        </div>

        <div className="presence-grid">
          {/* Left Column: Interactive World & Regional Map Canvas */}
          <div className="map-canvas-container">
            <div className="understated-map-bg">
              {/* World Continent Vector Illustration Layer */}
              <svg className="map-svg-vector" viewBox="0 0 1000 500" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
                <path fill="#334155" d="M150,120 Q200,80 300,100 Q350,150 280,220 Q200,250 120,200 Z" />
                <path fill="#334155" d="M450,100 Q520,80 600,120 Q620,200 550,260 Q480,220 440,160 Z" />
                <path fill="#334155" d="M600,140 Q700,100 850,120 Q900,220 800,300 Q700,280 620,220 Z" />
                <path fill="#334155" d="M500,280 Q560,260 620,320 Q580,420 520,400 Q480,340 500,280 Z" />
                <path fill="#334155" d="M780,300 Q860,280 920,340 Q880,420 800,380 Z" />
              </svg>

              <div className="map-grid-overlay"></div>

              {/* Regional Location Pins */}
              {GLOBAL_REGIONS.map((region) => {
                const pos = pinPositions[region.id] || { top: '50%', left: '50%' };
                const isSelected = activeRegionId === region.id;

                return (
                  <button
                    key={region.id}
                    type="button"
                    className={`map-location-pin ${isSelected ? 'is-active' : ''}`}
                    style={{ top: pos.top, left: pos.left }}
                    onClick={() => setActiveRegionId(region.id)}
                    title={`Focus ${region.name}`}
                  >
                    <span className="pin-dot"></span>
                    <span className="pin-tooltip">{region.flag} {region.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Country Selector Pills */}
            <div className="country-selector-bar">
              {GLOBAL_REGIONS.map((region) => {
                const isSelected = activeRegionId === region.id;
                return (
                  <button
                    key={region.id}
                    type="button"
                    className={`country-nav-tab ${isSelected ? 'is-active' : ''}`}
                    onClick={() => setActiveRegionId(region.id)}
                  >
                    <span className="tab-flag">{region.flag}</span>
                    <span>{region.name}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Regional Hub Dossier */}
          <div className="region-dossier-card">
            <div className="dossier-header">
              <div className="dossier-flag-title">
                <span className="dossier-flag">{selectedRegion.flag}</span>
                <div>
                  <h3 className="dossier-country">{selectedRegion.name} Operations</h3>
                  <span className="dossier-sub">{selectedRegion.stats.infrastructureCoverage}</span>
                </div>
              </div>
            </div>

            <div className="dossier-stats-grid">
              <div className="stat-box">
                <span className="stat-number">{selectedRegion.stats.projects}+</span>
                <span className="stat-label">Enterprise Deployments</span>
              </div>
              <div className="stat-box">
                <span className="stat-number">{selectedRegion.stats.activeSites}</span>
                <span className="stat-label">Monitored Facilities</span>
              </div>
            </div>

            <div className="dossier-section">
              <h4 className="dossier-section-title"><Building2 size={14} /> Regional Engineering Hubs</h4>
              <div className="hubs-pill-list">
                {selectedRegion.hubs.map((hub, idx) => (
                  <span key={idx} className="hub-pill">{hub}</span>
                ))}
              </div>
            </div>

            <div className="dossier-section">
              <h4 className="dossier-section-title"><CheckCircle2 size={14} className="accent-icon" /> Key Regional Highlights</h4>
              <ul className="highlights-list">
                {selectedRegion.highlights.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="dossier-footer">
              <div className="contact-mini">
                <span className="contact-line"><Phone size={12} /> {selectedRegion.phone}</span>
                <span className="contact-line"><Mail size={12} /> {selectedRegion.email}</span>
              </div>

              <button
                type="button"
                className="btn btn-primary full-width"
                onClick={() => onSelectCountry(selectedRegion.slug)}
              >
                <span>View {selectedRegion.name} Office Dossier</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
