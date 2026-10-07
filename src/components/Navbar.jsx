import React, { useState, useEffect } from 'react';
import { Globe, Search, Menu, X, ArrowRight } from 'lucide-react';
import './Navbar.css';

export default function Navbar({ onOpenLocationModal, onOpenSearchModal, onOpenContactModal, currentRoute, navigateTo }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    if (currentRoute !== 'home') {
      navigateTo('home');
      setTimeout(() => {
        const elem = document.getElementById(sectionId);
        if (elem) elem.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const elem = document.getElementById(sectionId);
      if (elem) elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container header-container">
        {/* Brand Logo */}
        <a href="#hero" onClick={(e) => { e.preventDefault(); navigateTo('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }} className="brand-logo">
          <span className="brand-symbol">
            <span className="symbol-core"></span>
          </span>
          <span className="brand-text">
            <span className="brand-name">METRISYS</span>
            <span className="brand-sub">FUTURE DIGITAL SYSTEMS</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="desktop-nav" aria-label="Main Navigation">
          <a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')} className="nav-link">Solutions</a>
          <a href="#industries" onClick={(e) => handleNavClick(e, 'industries')} className="nav-link">Industries</a>
          <a href="#products" onClick={(e) => handleNavClick(e, 'products')} className="nav-link">Products / Technologies</a>
          <a href="#partners" onClick={(e) => handleNavClick(e, 'partners')} className="nav-link">Partners</a>
          <a href="#global-presence" onClick={(e) => handleNavClick(e, 'global-presence')} className="nav-link">Locations</a>
          <a href="#company" onClick={(e) => handleNavClick(e, 'company')} className="nav-link">About</a>
        </nav>

        {/* Right Side Controls */}
        <div className="header-actions">
          <button 
            type="button" 
            onClick={onOpenSearchModal} 
            className="action-btn"
            aria-label="Search site content"
            title="Search"
          >
            <Search size={18} />
          </button>

          <button 
            type="button" 
            onClick={onOpenLocationModal} 
            className="global-selector-btn"
            aria-label="Select global region"
          >
            <Globe size={16} className="globe-icon" />
            <span className="selector-text">Global Presence</span>
            <span className="region-indicator">5 Regions</span>
          </button>

          <button 
            type="button" 
            onClick={onOpenContactModal}
            className="btn btn-primary nav-cta"
          >
            <span>Discuss Project</span>
            <ArrowRight size={14} />
          </button>

          {/* Mobile Menu Trigger */}
          <button 
            type="button"
            className="mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer animate-fade-in">
          <div className="mobile-drawer-inner container">
            <nav className="mobile-nav">
              <a href="#solutions" onClick={(e) => handleNavClick(e, 'solutions')}>Solutions</a>
              <a href="#ecosystem" onClick={(e) => handleNavClick(e, 'ecosystem')}>Ecosystem</a>
              <a href="#industries" onClick={(e) => handleNavClick(e, 'industries')}>Industries</a>
              <a href="#project" onClick={(e) => handleNavClick(e, 'project')}>Projects</a>
              <a href="#global-presence" onClick={(e) => handleNavClick(e, 'global-presence')}>Global Presence</a>
              <a href="#company" onClick={(e) => handleNavClick(e, 'company')}>Company</a>
            </nav>

            <div className="mobile-drawer-footer">
              <button 
                type="button" 
                onClick={() => { setMobileMenuOpen(false); onOpenLocationModal(); }} 
                className="btn btn-secondary-dark full-width"
              >
                <Globe size={16} />
                <span>Global Region Selector</span>
              </button>
              
              <button 
                type="button" 
                onClick={() => { setMobileMenuOpen(false); onOpenContactModal(); }} 
                className="btn btn-primary full-width"
              >
                <span>Discuss a Project</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
