// src/Pages/Service.jsx
import React, { useState, useEffect } from "react";
import "../css/Service.css";

const services = [
  {
    id: 1,
    icon: "💳",
    title: "Savings Account",
    desc: "Secure savings account with attractive interest rates and online banking.",
    features: [
      "High interest rates",
      "Zero maintenance fees",
      "Online banking access",
      "Mobile banking app"
    ],
    color: "#14a08d"
  },
  {
    id: 2,
    icon: "🏦",
    title: "Current Account",
    desc: "Business accounts with unlimited transactions and easy banking.",
    features: [
      "Unlimited transactions",
      "Overdraft facility",
      "Business banking",
      "Multi-user access"
    ],
    color: "#0e7a6c"
  },
  {
    id: 3,
    icon: "💰",
    title: "Personal Loan",
    desc: "Quick approval personal loans with affordable interest rates.",
    features: [
      "Quick approval",
      "Flexible repayment",
      "Low interest rates",
      "No collateral required"
    ],
    color: "#ff7a59"
  },
  {
    id: 4,
    icon: "🏠",
    title: "Home Loan",
    desc: "Make your dream home a reality with flexible home loans.",
    features: [
      "Flexible tenure",
      "Competitive rates",
      "Quick disbursement",
      "Tax benefits"
    ],
    color: "#e85d3d"
  },
  {
    id: 5,
    icon: "💸",
    title: "Money Transfer",
    desc: "Fast and secure money transfer using UPI, IMPS, RTGS and NEFT.",
    features: [
      "UPI/IMPS/RTGS/NEFT",
      "Instant transfers",
      "Zero transaction fees",
      "International transfers"
    ],
    color: "#3abf7a"
  },
  {
    id: 6,
    icon: "📱",
    title: "Mobile Banking",
    desc: "Access your account anytime, anywhere using our mobile app.",
    features: [
      "24/7 access",
      "Bill payments",
      "Fund transfers",
      "Account management"
    ],
    color: "#b88ad8"
  }
];

const whyChoose = [
  {
    icon: "🔒",
    title: "Secure Banking",
    desc: "Your money is protected with advanced security."
  },
  {
    icon: "⚡",
    title: "Fast Service",
    desc: "Quick transactions with zero delays."
  },
  {
    icon: "🌐",
    title: "Digital Banking",
    desc: "Manage your account anytime from anywhere."
  },
  {
    icon: "☎",
    title: "24/7 Support",
    desc: "Our customer care team is available around the clock."
  }
];

function Service() {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    setIsClosing(false);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setIsClosing(true);
    document.body.style.overflow = 'auto';
    setTimeout(() => {
      setIsModalOpen(false);
      setIsClosing(false);
      setSelectedService(null);
    }, 300);
  };

  const handleOpenAccount = () => {
    alert("Redirecting to account opening page...");
  };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape' && isModalOpen) {
        handleCloseModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, [isModalOpen]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="service-page-wrapper">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="service-container">
          <div className="service-hero-content">
            <h1>Our Banking Services</h1>
            <p>
              Experience secure, fast and modern banking services for individuals
              and businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="service-section">
        <div className="service-container">
          <div className="service-header">
            <h2 className="service-section-title">What We Offer</h2>
            <p className="service-section-desc">
              Discover our comprehensive range of banking services designed to meet your financial needs.
            </p>
          </div>

          <div className="service-grid">
            {services.map((item) => (
              <div className="service-card" key={item.id}>
                <div className="service-icon" style={{ background: item.color }}>
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button 
                  className="service-btn"
                  onClick={() => handleLearnMore(item)}
                  aria-label={`Learn more about ${item.title}`}
                >
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="service-why-bank">
        <div className="service-container">
          <div className="service-why-header">
            <h2>Why Choose ABC Bank?</h2>
            <p>We provide banking solutions that put your needs first.</p>
          </div>

          <div className="service-why-grid">
            {whyChoose.map((item, index) => (
              <div className="service-why-card" key={index}>
                <div className="service-why-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="service-cta">
        <div className="service-container">
          <div className="service-cta-content">
            <h2>Ready to Bank With Us?</h2>
            <p>Open your account today and enjoy world-class banking services.</p>
            <button className="service-cta-btn" onClick={handleOpenAccount}>
              Open Account
            </button>
          </div>
        </div>
      </section>

      {/* Modal for Service Details */}
      {(isModalOpen || isClosing) && selectedService && (
        <div 
          className={`service-modal-overlay ${isClosing ? 'closing' : ''}`} 
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          aria-describedby="modal-desc"
        >
          <div 
            className={`service-modal ${isClosing ? 'closing' : ''}`} 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="service-modal-close" 
              onClick={handleCloseModal}
              aria-label="Close modal"
              type="button"
            >
              ×
            </button>
            
            <div className="service-modal-icon" style={{ background: selectedService.color }}>
              {selectedService.icon}
            </div>
            
            <h2 className="service-modal-title" id="modal-title">
              {selectedService.title}
            </h2>
            
            <p className="service-modal-desc" id="modal-desc">
              {selectedService.desc}
            </p>
            
            <div className="service-modal-features">
              <h4>✨ Key Features:</h4>
              <ul>
                {selectedService.features.map((feature, idx) => (
                  <li key={idx}>
                    <span className="service-feature-check">✓</span> 
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <button 
              className="service-modal-cta-btn"
              onClick={handleOpenAccount}
              type="button"
            >
              Open Account Now →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Service;