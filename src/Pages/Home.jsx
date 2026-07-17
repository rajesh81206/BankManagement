// Home.jsx
import React from "react";
import "../css/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* Hero */}
      <section className="hero-wrapper">
        <div className="hero">
          <div className="hero-content">
            <h1>
              Achieve Financial <br />
              Success &amp; Security
            </h1>
            <p>
              Expert financial planning and investment solutions <br />
              tailored for your future.
            </p>
            <button className="hero-btn">Learn More</button>
          </div>

          <div className="hero-cards">
            <div className="hero-icon-card dark">📈</div>
            <div className="hero-icon-card gold">👥</div>
            <div className="hero-icon-card dark">🛡️</div>
          </div>
        </div>

        {/* Trust cards overlapping hero bottom edge */}
        <div className="trust-cards">
          <div className="trust-card">
            <span className="trust-icon">📈</span>
            <h3>Wealth Building</h3>
            <p>
              Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. aenean
              pausur
            </p>
            <button className="trust-btn outline">Discover More</button>
          </div>
          <div className="trust-card">
            <span className="trust-icon">🪙</span>
            <h3>Investment Growth</h3>
            <p>
              Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. aenean
              pausur
            </p>
            <button className="trust-btn text">Discover More</button>
          </div>
          <div className="trust-card">
            <span className="trust-icon">🛡️</span>
            <h3>Financial Protection</h3>
            <p>
              Lorem ipsum dolor sit amet, consec tetuer adipiscing elit. aenean
              pausur
            </p>
            <button className="trust-btn outline">Discover More</button>
          </div>
        </div>
      </section>

      {/* Our Financial Solutions */}
      <section className="solutions">
        <h2>Our Financial Solutions</h2>
        <div className="solutions-grid">
          <div className="solution-card">
            <div className="solution-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&q=80"
                alt="Retirement Planning"
              />
              <span className="solution-badge dark">🧊</span>
            </div>
            <h3>Retirement Planning</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipis</p>
            <button className="solution-btn">Learn More</button>
          </div>

          <div className="solution-card">
            <div className="solution-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=500&q=80"
                alt="Investment Management"
              />
              <span className="solution-badge gold">🧊</span>
            </div>
            <h3>Investment Management</h3>
            <p>Lorem ipsum dolor sit amet, consectetuer adipis</p>
            <button className="solution-btn">Learn More</button>
          </div>

          <div className="solution-card">
            <div className="solution-img-wrap">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500&q=80"
                alt="Wealth Management"
              />
              <span className="solution-badge dark">🛡️</span>
            </div>
            <h3>Wealth Management</h3>
            <p>Lorem ipsum dolor sit amet. consectetuer adipis</p>
            <button className="solution-btn">Learn More</button>
          </div>
        </div>
      </section>

      {/* How We Work + Contact form */}
      <section className="how-we-work">
        <div className="how-we-work-left">
          <h2>How We Work</h2>
          <p className="how-intro">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
          </p>

          <div className="work-steps">
            <div className="step">
              <div className="step-icon">🤝</div>
              <h3>Initial Consultation</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="step">
              <div className="step-icon">🎯</div>
              <h3>Strategic Planning</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="step">
              <div className="step-icon">✅</div>
              <h3>Execution</h3>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
          </div>
        </div>

        <div className="contact-panel">
          <h2>
            Schedule Your <br />
            Free Consulnation
          </h2>
          <form className="contact-form">
            <div className="form-row">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="E-mail" />
            </div>
            <div className="form-row">
              <input type="text" placeholder="Phone" />
              <input type="text" placeholder="Subject" />
            </div>
            <textarea placeholder="Message" rows="3"></textarea>
            <button type="submit" className="contact-submit">
              Submit
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home;