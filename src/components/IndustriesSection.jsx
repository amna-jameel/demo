import React from 'react';
import { Landmark, Building2, GraduationCap, Stethoscope, Factory, Home } from 'lucide-react';
import './IndustriesSection.css';

export default function IndustriesSection() {
  const industries = [
    { title: 'Government', icon: Landmark, desc: 'Safe city monitoring, public mobility & administrative smart infrastructure.' },
    { title: 'Commercial', icon: Building2, desc: 'Corporate towers, DIFC executive suites & smart facility automation.' },
    { title: 'Education', icon: GraduationCap, desc: 'Campus-wide biometric access, CCTV networks & indoor energy control.' },
    { title: 'Healthcare', icon: Stethoscope, desc: 'Precision climate control, acute facility security & emergency AV.' },
    { title: 'Industrial', icon: Factory, desc: 'Port ANPR gates, logistics tracking & harsh environment surveillance.' },
    { title: 'Residential', icon: Home, desc: 'Luxury smart home environments, glass touch controls & residential security.' }
  ];

  return (
    <section id="industries" className="industries-section">
      <div className="container">
        <div className="section-header center-header">
          <h2 className="section-title">Industries we serve</h2>
          <p className="section-subtitle">
            Tailored digital systems and integrated technology architecture designed for demanding operational environments.
          </p>
        </div>

        <div className="industries-grid">
          {industries.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="industry-card">
                <div className="industry-icon-wrapper">
                  <Icon size={24} className="accent-icon" />
                </div>
                <h3 className="industry-title">{item.title}</h3>
                <p className="industry-desc">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
