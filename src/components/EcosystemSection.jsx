import React, { useState } from 'react';
import { ECOSYSTEM_FLOW } from '../data/companyData';
import { Cpu, Shield, Home, Tv, Car, GitMerge, CheckCircle, ArrowDown } from 'lucide-react';
import './EcosystemSection.css';

const iconMap = {
  '01': Cpu,
  '02': Shield,
  '03': Home,
  '04': Tv,
  '05': Car,
  '06': GitMerge
};

export default function EcosystemSection() {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  return (
    <section id="ecosystem" className="ecosystem-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header center-header">
          <span className="eyebrow">
            <span className="eyebrow-dot"></span> INTEGRATED ARCHITECTURE
          </span>
          <h2 className="section-title">One technology ecosystem.</h2>
          <p className="section-subtitle">
            AI, security, automation and intelligent infrastructure — connected through one integrated approach.
          </p>
        </div>

        {/* Architectural Ecosystem Linear Integration System */}
        <div className="ecosystem-architecture-container">
          <div className="architecture-lines-bg">
            <div className="main-axis-line"></div>
          </div>

          <div className="ecosystem-flow-grid">
            {ECOSYSTEM_FLOW.map((item, index) => {
              const IconComponent = iconMap[item.step] || Cpu;
              const isActive = activeStepIndex === index;

              return (
                <React.Fragment key={item.step}>
                  <div
                    className={`ecosystem-node ${isActive ? 'is-active' : ''}`}
                    onClick={() => setActiveStepIndex(index)}
                    onMouseEnter={() => setActiveStepIndex(index)}
                  >
                    <div className="node-top-bar">
                      <span className="node-number">{item.step}</span>
                      <IconComponent size={20} className="node-icon" />
                    </div>

                    <h3 className="node-title">{item.title}</h3>
                    <p className="node-desc">{item.desc}</p>

                    <div className="node-status-bar">
                      <span className="status-dot"></span>
                      <span className="status-text">
                        {isActive ? 'Active Pipeline Synchronized' : 'Connected'}
                      </span>
                    </div>
                  </div>

                  {index < ECOSYSTEM_FLOW.length - 1 && (
                    <div className="flow-connector" aria-hidden="true">
                      <div className="connector-line"></div>
                      <ArrowDown size={14} className="connector-arrow" />
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>

        {/* Integration Summary Card */}
        <div className="integration-summary-box">
          <div className="summary-col">
            <div className="summary-badge">
              <CheckCircle size={16} className="accent-icon" />
              <span>Unified Data Protocol</span>
            </div>
            <p>Eliminates siloed building management by passing real-time video analytics to HVAC, access control, and executive display dashboards.</p>
          </div>
          
          <div className="summary-col">
            <div className="summary-badge">
              <CheckCircle size={16} className="accent-icon" />
              <span>Enterprise Redundancy</span>
            </div>
            <p>Multi-regional edge processing ensures localized operational continuity even during remote network disconnections.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
