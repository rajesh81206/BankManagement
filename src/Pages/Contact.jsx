// src/Pages/Contact.jsx
import React, { useState } from "react";
import "../css/Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    setTimeout(() => {
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section className="contact-page-wrapper">
      <div className="contact-page-container">
        {/* Top Heading with Description */}
        <div className="contact-page-header">
          <h1 className="contact-page-title">Contact Us</h1>
          <p className="contact-page-description">
            Have questions or need assistance? We're here to help! Reach out to us 
            through the form below or contact us directly using the information provided.
          </p>
        </div>
        
        <div className="contact-page-grid">
          {/* Left Column - Address Details */}
          <div className="contact-page-info-side">
            <div className="contact-page-company-box">
              <div className="contact-page-logo">
                <h2>WAVNI</h2>
              </div>
              
              <div className="contact-page-info-item">
                <p className="contact-page-address">
                  3rd Floor, Technical Block, Survey No.91, Sundarayya<br />
                  Vignana Kendram, Madhava Reddy Colony,<br />
                  Gachibowli, Hyderabad,<br />
                  Telangana - 500032
                </p>
              </div>

              <div className="contact-page-info-item">
                <p className="contact-page-phone">
                  +91-40-30-133-133
                </p>
              </div>

              <div className="contact-page-info-item">
                <p className="contact-page-email">
                  support@telebu.com
                </p>
              </div>

              <div className="contact-page-info-item contact-page-social-link">
                <a href="#" className="contact-page-linkedin-icon">
                  in
                </a>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="contact-page-nav-links">
              <div className="contact-page-nav-column">
                <h4>WAVNI</h4>
                <ul>
                  <li><a href="#">WAVNI</a></li>
                  <li><a href="#">SMSCountry</a></li>
                  <li><a href="#">grptalk</a></li>
                </ul>
              </div>
              <div className="contact-page-nav-column">
                <h4>&nbsp;</h4>
                <ul>
                  <li><a href="#">Press3</a></li>
                  <li><a href="#">SirenButton</a></li>
                </ul>
              </div>
              <div className="contact-page-nav-column">
                <h4>Company</h4>
                <ul>
                  <li><a href="#">Contact us</a></li>
                </ul>
              </div>
            </div>

            {/* Footer */}
            <div className="contact-page-footer-text">
              <p>All Rights Reserved Wavni 2018</p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="contact-page-form-side">
            <form onSubmit={handleSubmit} className="contact-page-form">
              <div className="contact-page-form-row">
                <div className="contact-page-form-group">
                  <label htmlFor="firstName">FIRST NAME</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Sruchan Kumar"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="contact-page-form-group">
                  <label htmlFor="lastName">LAST NAME</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Polisetty"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="contact-page-form-group">
                <label htmlFor="email">EMAIL ADDRESS</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="sruchan.polisetty@smscountry.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-page-form-group">
                <label htmlFor="phone">PHONE NUMBER</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="915443428"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-page-form-group">
                <label htmlFor="message">QUESTIONS OR COMMENTS</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Type your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="contact-page-submit-btn">
                Submit
              </button>

              {isSubmitted && (
                <div className="contact-page-success-message">
                  <span>✓ Thank you! Your message has been sent successfully.</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;