import React from 'react';
import { Car, Camera, ShieldCheck, ArrowRight, Gauge } from 'lucide-react';
import './ParkingSection.css';

export default function ParkingSection({ onSelectSolution }) {
  const mobilityFeatures = [
    { title: 'ANPR Engine', text: '99.9% License plate recognition' },
    { title: 'Smart Parking', text: 'Space allocation & wayfinding' },
    { title: 'Vehicle ID', text: 'Make, model, color telemetry' },
    { title: 'Access Barriers', text: 'High-speed automated gates' },
    { title: 'Flow Monitoring', text: 'Traffic density analytics' }
  ];

  return (
    <section className="parking-section">
      <div className="container">
        <div className="parking-editorial-box">
          <div className="parking-text-col">
            <span className="eyebrow">
              <span className="eyebrow-dot"></span> SMART MOBILITY & VEHICLE ACCESS
            </span>

            <h2 className="section-title dark-text">
              Intelligent mobility.
            </h2>

            <p className="section-subtitle dark-sub">
              Automated vehicle identification, ANPR barriers, and smart parking telemetry engineered for commercial districts, ports, and transit terminals.
            </p>

            <div className="mobility-chips">
              {mobilityFeatures.map((item, idx) => (
                <div key={idx} className="mobility-chip">
                  <span className="chip-bullet"></span>
                  <span className="chip-title">{item.title}</span>
                  <span className="chip-text">• {item.text}</span>
                </div>
              ))}
            </div>

            <button 
              type="button" 
              onClick={() => onSelectSolution('parking-anpr')}
              className="btn btn-secondary-light"
            >
              <span>Explore ANPR & Mobility</span>
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="parking-visual-col">
            <div className="parking-image-wrapper">
              <img 
                src="/images/parking.jpg" 
                alt="Smart Parking and ANPR Vehicle Identification Environment" 
                className="parking-img"
              />

              {/* ANPR Live Telemetry HUD Card */}
              <div className="anpr-telemetry-badge">
                <div className="anpr-header">
                  <Gauge size={14} className="accent-icon" />
                  <span className="anpr-tag">ANPR ENTRY NODE #02</span>
                </div>
                <div className="anpr-readout">
                  <span className="readout-plate">ABI2 CDE</span>
                  <span className="readout-status">ACCESS GRANTED</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
