// About.jsx
import React from "react";
import "../css/About.css";

// ---- Mock content (swap with real copy/API data) --------------------------

const stats = [
  { label: "Assets under management", value: "₹42,600 Cr" },
  { label: "Branches nationwide", value: "318" },
  { label: "Customers served", value: "6.2 M" },
  { label: "Years in trust", value: "30" },
];

const values = [
  {
    title: "Custody, not just service",
    body: "Every rupee in our care is treated as held in trust, not merely processed. We report plainly and reconcile daily.",
    icon: "Vault",
  },
  {
    title: "Slow to promise, quick to deliver",
    body: "We would rather under-market a feature and over-deliver on it than the reverse. Reliability compounds.",
    icon: "Clock",
  },
  {
    title: "Legible statements, no fine print",
    body: "Fees, rates, and terms are written so a first-time account holder can understand them without help.",
    icon: "Ledger",
  },
  {
    title: "Security as a default, not an upsell",
    body: "Encryption, fraud monitoring, and two-factor checks come standard on every account, at every tier.",
    icon: "Shield",
  },
];

const timeline = [
  { year: "1996", text: "Meridian Trust opens its first branch in Bhubaneswar with 4 employees." },
  { year: "2004", text: "Crosses 500,000 depositors; introduces passbook-linked savings accounts." },
  { year: "2013", text: "Launches core banking platform, enabling same-day interbank settlement." },
  { year: "2019", text: "Opens the 250th branch; rolls out 24/7 fraud monitoring across all accounts." },
  { year: "2026", text: "Serves 6.2 million customers across 318 branches and a fully digital ledger." },
];

const leadership = [
  { name: "Tulasi Panigrahi", title: "Chief Executive Officer", initials: "TP" },
  { name: "P.Kishor Patra", title: "Chief Risk Officer", initials: "KP" },
  { name: "Rajesh kumar", title: "Chief Technology Officer", initials: "RG" },
  { name: "Budhia Gouda", title: "Chief Financial Officer", initials: "BG" },
];

// ---- Premium Icon Set --------------------------------------------------

const Icon = {
  Vault: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="3" />
      <circle cx="12" cy="12" r="4" />
      <path d="M12 9v1.2M12 13.8V15M9 12h1.2M13.8 12H15" strokeLinecap="round" />
    </svg>
  ),
  Clock: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.5V12l3 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  Ledger: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M6 3h9l4 4v14a1 1 0 01-1 1H6a1 1 0 01-1-1V4a1 1 0 011-1z" />
      <path d="M9 10h7M9 13.5h7M9 17h4" strokeLinecap="round" />
    </svg>
  ),
  Shield: () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l7 3v6c0 4.5-3 7.7-7 9-4-1.3-7-4.5-7-9V6l7-3z" strokeLinejoin="round" />
      <path d="M9 12l2 2 4-4.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
};

// ---- Main Component ----------------------------------------------------------

export default function About() {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero-background">
          <div className="floating-shape shape-1"></div>
          <div className="floating-shape shape-2"></div>
          <div className="floating-shape shape-3"></div>
        </div>
        <div className="about-hero-content">
          <div className="about-hero-badge">
            <span className="badge-dot"></span>
            Est. 1996 · Bhubaneswar
          </div>
          <h1>
            Thirty years of holding<br />
            <span className="gradient-text">people's trust</span>, one ledger entry at a time.
          </h1>
          <p className="about-hero-sub">
            Meridian Trust started as a single branch with a promise: every account holder
            gets a plain, accurate record of their money and a person who will answer for it.
            That promise still runs the bank today.
          </p>
          <div className="about-hero-cta">
            <button className="btn-primary">
              <span>Learn More</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">Contact Us</button>
          </div>
        </div>
        <div className="about-hero-visual">
          <div className="hero-card">
            <div className="hero-card-glow"></div>
            <div className="hero-card-header">
              <span className="bank-icon">🏦</span>
              <span className="bank-name">Meridian Trust</span>
              <span className="bank-badge">Premium</span>
            </div>
            <div className="hero-card-body">
              <div className="hero-stat">
                <span className="hero-stat-value">30</span>
                <span className="hero-stat-label">Years of Trust</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-value">6.2M</span>
                <span className="hero-stat-label">Customers</span>
              </div>
            </div>
            <div className="hero-card-footer">
              <span className="footer-item">🔒 Secure Banking</span>
              <span className="footer-item">⭐ 4.9 Rating</span>
              <span className="footer-item">🏆 Award Winning</span>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats">
        <div className="stats-container">
          {stats.map((s, index) => (
            <div className="about-stat-card" key={s.label} style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="stat-icon">
                {index === 0 && '💰'}
                {index === 1 && '🏛️'}
                {index === 2 && '👥'}
                {index === 3 && '⭐'}
              </div>
              <p className="about-stat-value">{s.value}</p>
              <p className="about-stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="about-story">
        <div className="story-container">
          <div className="about-story-text">
            <div className="story-tag">
              <span className="tag-line"></span>
              Our Story
            </div>
            <h2>Built on a <span className="gradient-text">passbook</span>, not a pitch deck</h2>
            <p>
              Our founders opened Meridian Trust after watching families lose track of their
              savings in banks that buried fees in fine print. The first product was simple:
              a passbook you could actually read. Three decades on, our digital statements
              still follow that same rule — nothing on a Meridian Trust account should need
              translation.
            </p>
            <p>
              Today we operate across 318 branches, but every one of them is required to
              settle a customer's question the same day it's asked. Growth was never allowed
              to loosen that standard.
            </p>
            <div className="story-metrics">
              <div className="metric-item">
                <span className="metric-number">318</span>
                <span className="metric-label">Branches</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-number">99.7%</span>
                <span className="metric-label">Satisfaction</span>
              </div>
              <div className="metric-divider"></div>
              <div className="metric-item">
                <span className="metric-number">24/7</span>
                <span className="metric-label">Support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values">
        <div className="values-header">
          <div className="section-tag">
            <span className="tag-line"></span>
            Core Values
          </div>
          <h2>What we <span className="gradient-text">hold ourselves</span> to</h2>
          <p>Four principles that guide every decision we make</p>
        </div>
        <div className="about-values-grid">
          {values.map((v, index) => {
            const IconCmp = Icon[v.icon];
            return (
              <div className="about-value-card" key={v.title} style={{ animationDelay: `${index * 0.15}s` }}>
                <div className="value-number">0{index + 1}</div>
                <div className="value-icon-wrapper">
                  <span className="about-value-icon"><IconCmp /></span>
                </div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Timeline Section */}
      <section className="about-timeline">
        <div className="timeline-header">
          <div className="section-tag">
            <span className="tag-line"></span>
            Our Journey
          </div>
          <h2>Thirty years, <span className="gradient-text">in ledger form</span></h2>
        </div>
        <div className="about-timeline-list">
          {timeline.map((t, index) => (
            <div className="about-timeline-row" key={t.year}>
              <div className="timeline-marker">
                <span className="timeline-year">{t.year}</span>
                <span className={`timeline-dot ${index === timeline.length - 1 ? 'active' : ''}`}>
                  <span className="dot-inner"></span>
                </span>
                {index < timeline.length - 1 && <span className="timeline-line"></span>}
              </div>
              <div className="timeline-content">
                <p className="about-timeline-text">{t.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership Section */}
      <section className="about-leadership">
        <div className="leadership-header">
          <div className="section-tag">
            <span className="tag-line"></span>
            Leadership
          </div>
          <h2>Meet our <span className="gradient-text">team</span></h2>
        </div>
        <div className="about-leadership-grid">
          {leadership.map((p, index) => (
            <div className="about-leader-card" key={p.name} style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="leader-avatar-wrapper">
                <div className="about-leader-avatar">
                  {p.initials}
                  <div className="avatar-ring"></div>
                </div>
              </div>
              <p className="about-leader-name">{p.name}</p>
              <p className="about-leader-title">{p.title}</p>
              <div className="leader-social">
                <a href="#" className="social-link">🔗</a>
                <a href="#" className="social-link">✉️</a>
                <a href="#" className="social-link">💼</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="cta-background">
          <div className="cta-shape shape-1"></div>
          <div className="cta-shape shape-2"></div>
        </div>
        <div className="cta-content">
          <h2>Ready to start your <span className="gradient-text">journey</span> with us?</h2>
          <p>Join 6.2 million customers who trust Meridian Trust with their financial future</p>
          <div className="cta-buttons">
            <button className="btn-primary">
              <span>Open Account</span>
              <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="btn-secondary">Learn More</button>
          </div>
        </div>
      </section>

      <footer className="about-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="brand-icon">🏦</span>
            <span className="brand-name">Meridian Trust</span>
          </div>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Support</a>
          </div>
          <div className="footer-bottom">
            <span>🔒 Bank-grade 256-bit encryption</span>
            <span>© 2026 Meridian Trust. All rights reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}