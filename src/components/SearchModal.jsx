import React, { useState } from 'react';
import { X, Search, Globe, Cpu, ArrowRight } from 'lucide-react';
import { TECHNOLOGY_SOLUTIONS, GLOBAL_REGIONS } from '../data/companyData';
import './SearchModal.css';

export default function SearchModal({ isOpen, onClose, onSelectSolution, onSelectCountry }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const matchedSolutions = TECHNOLOGY_SOLUTIONS.filter(s =>
    s.title.toLowerCase().includes(query.toLowerCase()) ||
    s.capabilities.some(c => c.toLowerCase().includes(query.toLowerCase())) ||
    s.shortDesc.toLowerCase().includes(query.toLowerCase())
  );

  const matchedRegions = GLOBAL_REGIONS.filter(r =>
    r.name.toLowerCase().includes(query.toLowerCase()) ||
    r.hubs.some(h => h.toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="search-modal-container" onClick={(e) => e.stopPropagation()}>
        <div className="search-input-header">
          <Search size={20} className="search-modal-icon" />
          <input
            type="text"
            className="search-modal-input"
            placeholder="Type to search solutions, capabilities, or global regions..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
          />
          <button type="button" className="close-modal-btn" onClick={onClose}>
            <X size={20} />
          </button>
        </div>

        <div className="search-results-area">
          {/* Solutions matches */}
          <div className="results-group">
            <h3 className="group-title"><Cpu size={14} /> Technology Solutions ({matchedSolutions.length})</h3>
            <div className="results-list">
              {matchedSolutions.map((sol) => (
                <div 
                  key={sol.id} 
                  className="search-item-card"
                  onClick={() => { onSelectSolution(sol.id); onClose(); }}
                >
                  <div>
                    <h4 className="item-title">{sol.title}</h4>
                    <p className="item-desc">{sol.shortDesc}</p>
                  </div>
                  <ArrowRight size={14} className="accent-icon" />
                </div>
              ))}
            </div>
          </div>

          {/* Region matches */}
          <div className="results-group">
            <h3 className="group-title"><Globe size={14} /> Global Regions ({matchedRegions.length})</h3>
            <div className="results-list">
              {matchedRegions.map((reg) => (
                <div 
                  key={reg.id} 
                  className="search-item-card"
                  onClick={() => { onSelectCountry(reg.slug); onClose(); }}
                >
                  <div className="flag-item-row">
                    <span className="search-flag">{reg.flag}</span>
                    <div>
                      <h4 className="item-title">{reg.name} Regional Office</h4>
                      <p className="item-desc">Hubs: {reg.hubs.join(', ')}</p>
                    </div>
                  </div>
                  <ArrowRight size={14} className="accent-icon" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
