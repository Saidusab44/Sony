import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {

  return (

    <div>

      <Navbar />

      {/* HERO SECTION */}

      <section className="hero">

        <div className="hero-content">

          <p className="hero-label">
            EXPERIENCE THE FUTURE
          </p>

          <h1>
            Beyond <br />
            <span>Imagination.</span>
          </h1>

          <p className="hero-description">
            Discover a world where innovation meets
            creativity. Experience technology designed
            to inspire your everyday life.
          </p>

          <a href="#/404" className="hero-btn">
            Explore More →
          </a>

        </div>

        <div className="hero-image">

          <img
            src="https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900"
            alt="Premium smartphone"
          />

        </div>

      </section>


      {/* ABOUT SECTION */}

      <section className="about section-padding">

        <p className="section-label">WHO WE ARE</p>

        <h2>
          Innovation that <span>moves you.</span>
        </h2>

        <p>
          Sony brings together technology, entertainment
          and creativity to create extraordinary experiences.
          We believe in pushing boundaries and transforming
          the way people experience the digital world.
        </p>

      </section>


      {/* SERVICES SECTION */}

      <section className="services section-padding">

        <p className="section-label">WHAT WE OFFER</p>

        <h2>Experience Excellence</h2>

        <div className="service-grid">

          <div className="service-card">
            <div className="service-icon">📱</div>
            <h3>Premium Smartphones</h3>
            <p>
              Experience exceptional design and
              powerful smartphone technology.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📸</div>
            <h3>Professional Camera</h3>
            <p>
              Capture extraordinary moments with
              advanced imaging technology.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🎧</div>
            <h3>Immersive Audio</h3>
            <p>
              Experience high-quality sound
              with immersive audio technology.
            </p>
          </div>

        </div>

      </section>


      {/* PRODUCT SECTION */}

      <section className="product-section">

        <div className="product-content">

          <p className="section-label">
            DISCOVER SONY
          </p>

          <h2>
            Technology meets <span>creativity.</span>
          </h2>

          <p>
            Designed for people who expect more.
            Discover innovation without limits.
          </p>

          <a href="#/404" className="hero-btn">
            Discover More →
          </a>

        </div>

      </section>


      <Footer />

    </div>

  );

}

export default Home;