import React from 'react';
import { ArrowRight, MapPin, Building, Cpu, CheckCircle } from 'lucide-react';
import { FLAGSHIP_PROJECT } from '../data/companyData';
import './SelectedProjectSection.css';

export default function SelectedProjectSection({ onSelectProject }) {
  return (
    <section id="project" className="selected-project-section">
      <div className="container">
        {/* Editorial Feature Header */}
        <div className="project-badge-bar">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span> {FLAGSHIP_PROJECT.badge}
          </span>
        </div>

        {/* Large Single Editorial Showcase */}
        <div className="project-editorial-card">
          <div className="project-image-container">
            <img 
              src={FLAGSHIP_PROJECT.image} 
              alt={FLAGSHIP_PROJECT.title} 
              className="project-hero-img"
            />
            <div className="project-image-badge">
              <Building size={14} className="accent-icon" />
              <span>140,000 m² Integrated Complex</span>
            </div>
          </div>

          <div className="project-info-container">
            <h2 className="project-title">{FLAGSHIP_PROJECT.title}</h2>

            <div className="project-meta-row">
              <div className="meta-pill">
                <MapPin size={14} className="accent-icon" />
                <span>{FLAGSHIP_PROJECT.location}</span>
              </div>

              <div className="meta-pill">
                <Building size={14} className="accent-icon" />
                <span>{FLAGSHIP_PROJECT.industry}</span>
              </div>
            </div>

            <p className="project-desc">{FLAGSHIP_PROJECT.description}</p>

            <div className="project-solutions-used">
              <span className="solutions-label">Solutions Deployed:</span>
              <div className="solutions-tags">
                {FLAGSHIP_PROJECT.solutionsUsed.map((sol, idx) => (
                  <span key={idx} className="solution-tag">
                    <CheckCircle size={12} className="accent-icon" /> {sol}
                  </span>
                ))}
              </div>
            </div>

            <button 
              type="button" 
              onClick={onSelectProject}
              className="btn btn-primary project-cta"
            >
              <span>View Case Study & Specifications</span>
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
