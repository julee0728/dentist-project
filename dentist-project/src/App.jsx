import { useState } from "react";
import "./App.css";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      feedback:
        "Exceptional care! The team was so gentle and professional. Highly recommend for anyone with dental anxiety.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      name: "Michael Chen",
      feedback:
        "Best dental experience I've had. The technology they use is state of the art. My veneers look amazing!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=michael",
    },
    {
      name: "Emma Davis",
      feedback:
        "Very kid-friendly clinic. My daughter actually looks forward to her checkups now!",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=emma",
    },
    {
      name: "James Wilson",
      feedback:
        "Professional, clean, and efficient. I was in and out for a cleaning in no time with zero discomfort.",
      rating: 4,
      avatar: "https://i.pravatar.cc/150?u=james",
    },
    {
      name: "Olivia Brown",
      feedback:
        "The staff is incredibly friendly. They explained everything clearly and made me feel at ease.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=olivia",
    },
  ];

  const openModal = (title, content) => {
    setModalContent({ title, content });
  };

  const closeModal = () => {
    setModalContent(null);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  const handleNavClick = () => {
    setMenuOpen(false);
  };

  return (
    <div className="landing-page">
      {/* Header */}
      <header className="header">
        <div className="container nav-container">
          <div className="logo">
            <div className="logo-icon">🦷</div>
            Dental
          </div>
          <nav className={`nav-links${menuOpen ? " nav-open" : ""}`}>
            <a href="#home" onClick={handleNavClick}>
              Home
            </a>
            <a href="#services" onClick={handleNavClick}>
              Services
            </a>
            <a href="#about" onClick={handleNavClick}>
              About
            </a>
            <a href="#team" onClick={handleNavClick}>
              Team
            </a>
            <a href="#testimonials" onClick={handleNavClick}>
              Reviews
            </a>
            <a href="#contact" onClick={handleNavClick}>
              Contact
            </a>
            <div className="nav-booking-mobile">
              <button
                className="book-btn"
                onClick={() => {
                  handleNavClick();
                  openModal(
                    "Book a Consultation",
                    "Fill out the form below or call us at +1 (555) 000-1111 to schedule your appointment.",
                  );
                }}
              >
                Book a call
                <span>→</span>
              </button>
            </div>
          </nav>
          <button
            className="book-btn desktop-only"
            onClick={() =>
              openModal(
                "Book a Consultation",
                "Fill out the form below or call us at +1 (555) 000-1111 to schedule your appointment.",
              )
            }
          >
            Book a call
            <span>→</span>
          </button>
          <button
            className="hamburger"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`hamburger-line${menuOpen ? " open" : ""}`}></span>
            <span className={`hamburger-line${menuOpen ? " open" : ""}`}></span>
            <span className={`hamburger-line${menuOpen ? " open" : ""}`}></span>
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div
            className="mobile-menu-overlay"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-container-overlay">
          <div className="hero-content">
            <div className="hero-badge fade-in">
              <span className="icon">🏆</span>
              <span className="badge-text">
                Australia's Most Trusted Dental Clinic
              </span>
            </div>
            <h1 className="fade-in">
              Your Smile Deserves
              <br />
              the Best in Australia.
            </h1>
            <p className="hero-description fade-in">
              Recognized for dental excellence, our team provides personalized
              care in a comfortable environment using advanced technology. We
              offer everything from routine checkups to complete smile
              transformations with precision and quality.
            </p>

            <div className="hero-trust-stats fade-in">
              <div className="trust-stat">
                <span className="trust-num">50K+</span>
                <span className="trust-label">Happy Patients</span>
              </div>
              <div className="trust-stat">
                <span className="trust-num">15+</span>
                <span className="trust-label">Years of Excellence</span>
              </div>
            </div>

            <div className="hero-cta-row fade-in">
              <button
                className="book-btn contact-us-btn"
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
              >
                Book Free Consultation
                <span className="arrow-circle">↗</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section section-padding">
        <div className="container">
          <div className="section-header centered-header">
            <span className="sur-title"> dental services</span>
            <h2>
              DISCOVER OUR SIGNATURE
              <br />
              DENTAL SERVICES
            </h2>
            <p
              style={{
                maxWidth: "600px",
                margin: "20px auto",
                fontSize: "16px",
                color: "var(--text-muted)",
              }}
            >
              Experience modern dental care delivered with comfort, precision,
              and attention to detail. Our clinic provides a calm, welcoming
              environment.
            </p>
          </div>

          <div className="services-grid">
            {[
              {
                title: "Teeth Cleaning",
                desc: "Professional cleaning for a healthier smile.",
                img: "/service_1.jpg",
                details:
                  "Our professional cleaning involves plaque removal, scaling, and polishing to ensure your gums stay healthy and your teeth shine.",
              },
              {
                title: "Dental Checkups",
                desc: "Regular exams to keep your teeth in top shape.",
                img: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2024&auto=format&fit=crop",
                details:
                  "Full diagnostic exams including digital X-rays and early screening for cavities or gum disease.",
              },
              {
                title: "Dental Veneers",
                desc: "Aesthetic improvements for a perfect look.",
                img: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop",
                details:
                  "Custom-made shells designed to cover the front surface of teeth to improve your appearance.",
              },
              {
                title: "Oral Surgery",
                desc: "Safe and effective surgical procedures.",
                img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop",
                details:
                  "Specialized surgical treatments for complex dental issues with a focus on patient comfort.",
              },
            ].map((service, i) => (
              <div key={i} className="service-card">
                <div
                  className="service-arrow"
                  onClick={() => openModal(service.title, service.details)}
                >
                  ↗
                </div>
                <img
                  src={service.img}
                  alt={service.title}
                  className="service-img"
                />
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p style={{ fontSize: "13px", opacity: 0.8 }}>
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section section-padding">
        <div className="container">
          {/* 🔥 TOP CENTER HEADER */}
          <div className="about-header centered-header">
            <span className="sur-title">About Us</span>
            <h2>WE ARE COMMITTED TO PROVIDING THE BEST DENTAL CARE</h2>
          </div>

          {/* GRID START */}
          <div className="about-grid">
            {/* LEFT IMAGE */}
            <div className="about-images">
              <div className="about-img-main">
                <img
                  src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2024&auto=format&fit=crop"
                  alt="Clinic Interior"
                />
              </div>

              <div className="experience-badge">
                <h3>15+</h3>
                <p>Years of Excellence</p>
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="about-content">
              <p className="about-text">
                Our clinic has proudly led the way in dental innovation for more
                than 2 years. Committed to excellence, we strive to create a
                welcoming environment where every patient feels valued and cared
                for. We believe that a confident smile is the foundation of
                personal well-being, which is why we offer personalized dental
                treatments tailored to each individual’s unique needs. Combining
                advanced technology with a gentle, compassionate approach, our
                team is dedicated to helping you achieve and maintain optimal
                oral health throughout your life.
              </p>

              <div className="about-highlights">
                <div className="highlight-item">
                  <div className="highlight-icon">⭐</div>
                  <div>
                    <h4>State-of-the-Art Tech</h4>
                    <p>We use the latest tools for precision diagnosis.</p>
                  </div>
                </div>

                <div className="highlight-item">
                  <div className="highlight-icon">👩‍⚕️</div>
                  <div>
                    <h4>Expert Specialists</h4>
                    <p>Experienced and internationally trained doctors.</p>
                  </div>
                </div>
              </div>

              <div className="about-actions">
                <button className="book-btn">Learn More About Us</button>

                <div className="working-hours-box">
                  <span className="icon">🕒</span>
                  <div>
                    <strong>Working hours :</strong>
                    <p>Mon - Fri : 9am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        className="why-us-section section-padding"
        style={{ background: "var(--primary)", color: "white" }}
      >
        <div className="container">
          <div className="section-header centered-header">
            <span className="sur-title" style={{ color: "var(--accent)" }}>
              Why Us
            </span>
            <h2 style={{ color: "white" }}>WHAT SETS US APART</h2>
          </div>
          <div className="why-grid">
            {[
              {
                title: "Emergency Care",
                desc: "Available 24/7 for urgent dental issues.",
                icon: "🚨",
              },
              {
                title: "Personalized Plans",
                desc: "Treatments tailored to your specific needs.",
                icon: "📋",
              },
              {
                title: "Comfort First",
                desc: "Anti-anxiety options and calm environment.",
                icon: "🛋️",
              },
              {
                title: "Affordable Pricing",
                desc: "Flexible payment options and insurance.",
                icon: "💰",
              },
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h3 style={{ color: "white", marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "14px" }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section section-padding">
        <div className="container">
          <div className="section-header centered-header">
            <span className="sur-title">Meet</span>
            <h2>THE PROFESSIONALS BEHIND YOUR SMILE</h2>
          </div>

          <div className="team-grid">
            {[
              {
                name: "Cameron Williamson",
                role: "Oral Surgery Fellowship",
                rating: "4.9",
                img: "/member1.png",
              },
              {
                name: "Annette Black",
                role: "Pedodontics (Children Dentistry)",
                rating: "5.0",
                img: "/member2.png",
              },
              {
                name: "Jenny Wilson",
                role: "Conservative Dentistry",
                rating: "4.8",
                img: "/member3.png",
              },
            ].map((doc, i) => (
              <div key={i} className="team-card">
                <div className="team-img-wrapper">
                  <img src={doc.img} alt={doc.name} className="team-img" />
                </div>
                <div className="team-info">
                  <div>
                    <div className="team-name">{doc.name}</div>
                    <div className="team-role">{doc.role}</div>
                  </div>
                  <div className="team-rating">
                    {doc.rating} <span>(150+ Reviews)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="testimonials-section section-padding"
      >
        <div className="container">
          <div className="section-header centered-header">
            <span className="sur-title">Feedback</span>
            <h2>WHAT OUR PATIENTS SAY</h2>
          </div>

          <div className="marquee-container">
            <div className="marquee">
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="feedback-card">
                  <div className="feedback-footer">
                    {/* ✅ AVATAR WITH FIRST LETTER */}
                    <div className="avatar-wrapper">
                      <div
                        className="avatar-initial"
                        style={{ background: `hsl(${i * 60}, 70%, 50%)` }}
                      >
                        {t.name.charAt(0)}
                      </div>
                    </div>

                    <div>
                      <div className="feedback-name">{t.name}</div>
                      <div className="feedback-rating">
                        {"★".repeat(t.rating)}
                      </div>
                    </div>
                  </div>
                  <br />

                  <p className="feedback-text">{t.feedback}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section section-padding">
        <div className="container contact-container">
          <div className="contact-info center-header">
            <span className="sur-title">Get in Touch</span>
            <h2>READY TO TRANSFORM YOUR SMILE?</h2>
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>456 Collins St, Melbourne, VIC 3000, Australia</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+61 (0) 3 9555 1111</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@dentalsmile.com.au</p>
                </div>
              </div>
            </div>
          </div>
          <div className="contact-form-card">
            {formSubmitted ? (
              <div className="success-message">
                <div className="success-icon">✔️</div>
                <h3>Message Sent Successfully!</h3>
                <p>We'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setFormSubmitted(false)}
                  className="book-btn"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email Address" required />
                <select required>
                  <option value="" disabled selected>
                    Select Service
                  </option>
                  <option value="cleaning">Teeth Cleaning</option>
                  <option value="checkup">Checkup</option>
                  <option value="veneers">Veneers</option>
                </select>
                <textarea placeholder="Your Message" rows="4"></textarea>
                <button
                  type="submit"
                  className="book-btn"
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer footer-compact">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div
                className="logo"
                style={{ color: "white", marginBottom: "20px" }}
              >
                <div className="logo-icon">🦷</div>
                Dental
              </div>
              <p className="footer-desc">
                Providing world-class dental care with a gentle, patient-first
                approach. We combine advanced technology with compassionate
                treatment to ensure comfort and precision. Our goal is to help
                you achieve a healthy, confident smile with ease.
              </p>
            </div>

            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#home">Home</a>
                </li>
                <li>
                  <a href="#about">About</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Services</h3>
              <ul>
                <li>
                  <a href="#services">Teeth Cleaning</a>
                </li>
                <li>
                  <a href="#services">Checkups</a>
                </li>
                <li>
                  <a href="#services">Oral Surgery</a>
                </li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Contact</h3>
              <p
                style={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "13px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span>
                  <strong>📍 Location:</strong> 456 Collins St, Melbourne, VIC
                  3000, Australia
                </span>
                <span>
                  <strong>📞 Phone:</strong> +61 (0) 3 9555 1111
                </span>
                <span>
                  <strong>✉️ Email:</strong> hello@dentalsmile.com.au
                </span>
              </p>
            </div>
          </div>

          <div className="footer-bottom centered-footer">
            <p>&copy; 2026 Ventoria Global.</p>
          </div>
        </div>
      </footer>

      {/* Modal Popup */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <div className="modal-content">
              <h2>{modalContent.title}</h2>
              <p>{modalContent.content}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
