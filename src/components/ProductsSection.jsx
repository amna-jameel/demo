import React, { useState } from 'react';
import { ArrowRight, Cpu, Shield, Tv, Sliders, Eye } from 'lucide-react';
import './ProductsSection.css';

export default function ProductsSection({ onSelectProduct }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 'algorithm-all-in-one',
      name: 'Algorithm All-in-One AI Box',
      category: 'ai-hardware',
      desc: 'Edge AI processing unit converting existing HD Cameras, DVRs, and NVRs into self-learning AI analytics.',
      image: '/images/integration.jpg'
    },
    {
      id: 'faceme-terminal',
      name: 'FaceMe® Biometric Access Terminal',
      category: 'access',
      desc: 'Facial recognition terminal with face data verification, floor stand & turnstile channel sync.',
      image: '/images/security.jpg'
    },
    {
      id: 'knx-touch-panels',
      name: 'Flush KNX Touch Switch Panels',
      category: 'automation',
      desc: 'Luxury glass & stone smart home switch panels for climate, lighting, and motorized shutter control.',
      image: '/images/smart_building.jpg'
    },
    {
      id: 'cob-led-videowall',
      name: 'All-in-One COB LED Video Wall',
      category: 'display',
      desc: 'Modular COB LED display matrix with integrated AVoIP signal routing for command & control centers.',
      image: '/images/av.jpg'
    },
    {
      id: 'anpr-barrier-system',
      name: 'ANPR Gate Barrier System',
      category: 'traffic',
      desc: 'Automated vehicle license plate recognition camera with barrier control & parking telemetry.',
      image: '/images/parking.jpg'
    },
    {
      id: 'ai-thermal-camera',
      name: 'AI Thermal & Optical Surveillance',
      category: 'surveillance',
      desc: 'Multi-sensor thermal camera with accurate human detection, intrusion alarm & fire detection.',
      image: '/images/ai_control.jpg'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'ai-hardware', label: 'AI Edge Boxes' },
    { id: 'access', label: 'Access Control' },
    { id: 'automation', label: 'KNX Touch Panels' },
    { id: 'display', label: 'COB Video Walls' },
    { id: 'traffic', label: 'ANPR Systems' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="products-section">
      <div className="container">
        <div className="section-header split-header">
          <div>
            <h2 className="section-title">Hardware & Systems Portfolio</h2>
          </div>
          <p className="section-subtitle">
            Authentic commercial-grade AI equipment, access terminals, and open automation hardware.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="product-category-tabs">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              className={`product-tab ${activeCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="products-grid">
          {filteredProducts.map((prod) => (
            <div key={prod.id} className="product-card">
              <div className="product-image-container">
                <img src={prod.image} alt={prod.name} className="product-img" />
                <span className="product-category-badge">{prod.category.toUpperCase()}</span>
              </div>
              <div className="product-info">
                <h3 className="product-title">{prod.name}</h3>
                <p className="product-desc">{prod.desc}</p>
                <button 
                  type="button" 
                  className="product-cta-btn"
                  onClick={() => onSelectProduct && onSelectProduct(prod.id)}
                >
                  <span>View Technical Details</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
