import { useState } from 'react'
import './App.css'

function App() {
  const [activeTab, setActiveTab] = useState('Dental Checkups');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const testimonials = [
    { name: "Sarah Johnson", feedback: "Exceptional care! The team was so gentle and professional. Highly recommend for anyone with dental anxiety.", rating: 5, avatar: "https://i.pravatar.cc/150?u=sarah" },
    { name: "Michael Chen", feedback: "Best dental experience I've had. The technology they use is state of the art. My veneers look amazing!", rating: 5, avatar: "https://i.pravatar.cc/150?u=michael" },
    { name: "Emma Davis", feedback: "Very kid-friendly clinic. My daughter actually looks forward to her checkups now!", rating: 5, avatar: "https://i.pravatar.cc/150?u=emma" },
    { name: "James Wilson", feedback: "Professional, clean, and efficient. I was in and out for a cleaning in no time with zero discomfort.", rating: 4, avatar: "https://i.pravatar.cc/150?u=james" },
    { name: "Olivia Brown", feedback: "The staff is incredibly friendly. They explained everything clearly and made me feel at ease.", rating: 5, avatar: "https://i.pravatar.cc/150?u=olivia" },
  ];

  const blogPosts = [
    { title: "The Secret to a Brighter Smile", date: "Oct 12, 2023", category: "Oral Health", img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop", content: "Maintaining a bright smile involves consistent hygiene and periodic professional whitening. Explore our top tips for diet and daily care..." },
    { title: "Is Teeth Whitening Safe for Everyone?", date: "Nov 05, 2023", category: "Cosmetic", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2034&auto=format&fit=crop", content: "Teeth whitening is generally safe but depends on your enamel health. We analyze common myths and clinical facts about modern whitening procedures..." },
    { title: "Best Practices for Pediatric Care", date: "Dec 01, 2023", category: "Family", img: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop", content: "Building positive dental habits early is crucial. Our specialists share their approach to making clinic visits fun and anxiety-free for kids..." },
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
          <nav className={`nav-links${menuOpen ? ' nav-open' : ''}`}>
            <a href="#home" onClick={handleNavClick}>Home</a>
            <a href="#services" onClick={handleNavClick}>Services</a>
            <a href="#about" onClick={handleNavClick}>About</a>
            <a href="#team" onClick={handleNavClick}>Team</a>
            <a href="#testimonials" onClick={handleNavClick}>Reviews</a>
            <a href="#blog" onClick={handleNavClick}>Blog</a>
            <a href="#contact" onClick={handleNavClick}>Contact</a>
          </nav>
          <button className="book-btn desktop-only" onClick={() => openModal('Book a Consultation', 'Fill out the form below or call us at +1 (555) 000-1111 to schedule your appointment.')}>
            Book a call
            <span>→</span>
          </button>
          <button
            className="hamburger"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
            <span className={`hamburger-line${menuOpen ? ' open' : ''}`}></span>
          </button>
        </div>
        {/* Mobile Menu Overlay */}
        {menuOpen && (
          <div className="mobile-menu-overlay" onClick={() => setMenuOpen(false)}></div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-container-flex">
          <div className="hero-content-left">
            <div className="hero-badge">
              <span className="icon">🏆</span>
              <span className="badge-text">Australia's Most Trusted Dental Clinic</span>
            </div>
            <h1>Your Smile Deserves<br />the Best in Australia.</h1>
            <p className="hero-description">
              Rated #1 across Sydney, Melbourne & Brisbane — our award-winning dental team delivers world-class care with cutting-edge technology. Over <strong>50,000 happy patients</strong> trust us for everything from routine checkups to full smile transformations.
            </p>

            <div className="hero-trust-stats">
              <div className="trust-stat">
                <span className="trust-num">50K+</span>
                <span className="trust-label">Happy Patients</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-stat">
                <span className="trust-num">15+</span>
                <span className="trust-label">Years of Excellence</span>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-stat">
                <span className="trust-num">4.9★</span>
                <span className="trust-label">Google Rating</span>
              </div>
            </div>

            <div className="hero-cta-row">
              <button className="book-btn contact-us-btn" onClick={() => document.getElementById('contact').scrollIntoView()}>
                Book Free Consultation
                <span className="arrow-circle">↗</span>
              </button>
              <div className="expert-doctors-badge">
                <div className="avatar-stack">
                  <img src="https://i.pravatar.cc/150?u=1" alt="doc" />
                  <img src="https://i.pravatar.cc/150?u=2" alt="doc" />
                  <img src="https://i.pravatar.cc/150?u=3" alt="doc" />
                  <div className="more-count">15+</div>
                </div>
                <p>Expert Dentists for you</p>
              </div>
            </div>
          </div>

          <div className="hero-content-right">
            <div className="hero-image-wrapper">
              <img src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2024&auto=format&fit=crop" alt="Dental Patient" className="hero-main-img" />

              <div className="status-badge badge-1">
                <span className="badge-icon">🦷</span>
                <span className="badge-name">Teeth Cleaning</span>
                <span className="badge-check">✔️</span>
              </div>
              <div className="status-badge badge-2">
                <span className="badge-icon">✨</span>
                <span className="badge-name">Whitening</span>
                <span className="badge-circle"></span>
              </div>
              <div className="status-badge badge-3">
                <span className="badge-icon">🦷</span>
                <span className="badge-name">Lost Filling</span>
                <span className="badge-circle"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="sur-title"> dental services /</span>
            <div className="section-title">
              <h2>DISCOVER OUR SIGNATURE<br />DENTAL SERVICES</h2>
              <p style={{ maxWidth: '400px', fontSize: '14px', color: 'var(--text-muted)' }}>
                Experience modern dental care delivered with comfort, precision, and attention to detail. Our clinic provides a calm, welcoming environment.
              </p>
            </div>
          </div>

          <div className="services-grid">
            {[
              { title: 'Teeth Cleaning', desc: 'Professional cleaning for a healthier smile.', img: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2070&auto=format&fit=crop', details: 'Our professional cleaning involves plaque removal, scaling, and polishing to ensure your gums stay healthy and your teeth shine.' },
              { title: 'Dental Checkups', desc: 'Regular exams to keep your teeth in top shape.', img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=2024&auto=format&fit=crop', details: 'Full diagnostic exams including digital X-rays and early screening for cavities or gum disease.' },
              { title: 'Dental Veneers', desc: 'Aesthetic improvements for a perfect look.', img: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop', details: 'Custom-made shells designed to cover the front surface of teeth to improve your appearance.' },
              { title: 'Oral Surgery', desc: 'Safe and effective surgical procedures.', img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop', details: 'Specialized surgical treatments for complex dental issues with a focus on patient comfort.' }
            ].map((service, i) => (
              <div key={i} className="service-card">
                <div className="service-arrow" onClick={() => openModal(service.title, service.details)}>↗</div>
                <img src={service.img} alt={service.title} className="service-img" />
                <div className="service-info">
                  <h3>{service.title}</h3>
                  <p style={{ fontSize: '13px', opacity: 0.8 }}>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section section-padding">
        <div className="container about-grid">
          <div className="about-images">
            <div className="about-img-main">
              <img src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2024&auto=format&fit=crop" alt="Clinic Interior" />
            </div>
            <div className="about-img-sub">
              <img src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2034&auto=format&fit=crop" alt="Consultation" />
            </div>
            <div className="experience-badge">
              <h3>15+</h3>
              <p>Years of Excellence</p>
            </div>
          </div>
          <div className="about-content">
            <span className="sur-title">About Us /</span>
            <h2>WE ARE COMMITTED TO PROVIDING THE BEST DENTAL CARE</h2>
            <p className="about-text">
              Our clinic has been at the forefront of dental innovation for over 15 years. We believe that every patient deserves a smile they are proud of, and we work tirelessly to achieve that through personalized treatments and a compassionate approach.
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">⭐</div>
                <div>
                  <h4>State-of-the-Art Tech</h4>
                  <p>We use the latest digital tools for precision diagnosis.</p>
                </div>
              </div>
              <div className="highlight-item">
                <div className="highlight-icon">👩‍⚕️</div>
                <div>
                  <h4>Expert Specialists</h4>
                  <p>Our team consists of internationally recognized doctors.</p>
                </div>
              </div>
            </div>
            <div className="about-actions">
              <button className="book-btn" onClick={() => openModal('Our Story', 'Founded in 2008, our clinic has served over 50,000 happy patients. We pride ourselves on combining artistic precision with clinical excellence.')}>
                Learn More About Us
              </button>
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
      </section>

      {/* Why Choose Us */}
      <section className="why-us-section section-padding" style={{ background: 'var(--primary)', color: 'white' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '60px' }}>
            <span className="sur-title" style={{ color: 'var(--accent)' }}>Why Us /</span>
            <h2 style={{ color: 'white' }}>WHAT SETS US APART</h2>
          </div>
          <div className="why-grid">
            {[
              { title: 'Emergency Care', desc: 'Available 24/7 for urgent dental issues.', icon: '🚨' },
              { title: 'Personalized Plans', desc: 'Treatments tailored to your specific needs.', icon: '📋' },
              { title: 'Comfort First', desc: 'Anti-anxiety options and calm environment.', icon: '🛋️' },
              { title: 'Affordable Pricing', desc: 'Flexible payment options and insurance.', icon: '💰' }
            ].map((item, i) => (
              <div key={i} className="why-card">
                <div className="why-icon">{item.icon}</div>
                <h3 style={{ color: 'white', marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '14px' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="team-section section-padding">
        <div className="container">
          <div className="stats-container">
            <div className="stat-item">
            </div>
          </div>

          <div className="section-header center-header">
            <span className="sur-title">Meet /</span>
            <div className="section-title">
              <h2>THE PROFESSIONALS<br />BEHIND YOUR SMILE</h2>
            </div>
          </div>

          <div className="team-grid">
            {[
              { name: 'Cameron Williamson', role: 'Oral Surgery Fellowship', rating: '4.9', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1964&auto=format&fit=crop' },
              { name: 'Annette Black', role: 'Pedodontics (Children Dentistry)', rating: '5.0', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?q=80&w=1974&auto=format&fit=crop' },
              { name: 'Jenny Wilson', role: 'Conservative Dentistry', rating: '4.8', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?q=80&w=2070&auto=format&fit=crop' }
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

      {/* Testimonials Section with Marquee */}
      <section id="testimonials" className="testimonials-section section-padding">
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span className="sur-title">Feedback /</span>
            <h2 style={{ fontSize: '25px' }}>WHAT OUR PATIENTS SAY</h2>
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="feedback-card">
                <div className="quote-icon">"</div>
                <p className="feedback-text">{t.feedback}</p>
                <div className="feedback-footer">
                  <img src={t.avatar} alt={t.name} className="feedback-avatar" />
                  <div>
                    <div className="feedback-name">{t.name}</div>
                    <div className="feedback-rating">{'★'.repeat(t.rating)}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="blog-section section-padding">
        <div className="container">
          <div className="section-header">
            <span className="sur-title">Latest Updates /</span>
            <h2>OUR DENTAL INSIGHTS</h2>
          </div>
          <div className="blog-grid">
            {blogPosts.map((post, i) => (
              <div key={i} className="blog-card">
                <div className="blog-img-wrapper">
                  <img src={post.img} alt={post.title} className="blog-img" />
                </div>
                <div className="blog-content">
                  <span className="blog-category">{post.category}</span>
                  <h3 className="blog-title">{post.title}</h3>
                  <div className="blog-footer">
                    <span>{post.date}</span>
                    <button className="read-more" onClick={() => openModal(post.title, post.content)}>Read More ↗</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal Popup */}
      {modalContent && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-card" onClick={e => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            <div className="modal-content">
              <h2>{modalContent.title}</h2>
              <p>{modalContent.content}</p>
              {modalContent.title === 'Book a Consultation' && (
                <button className="book-btn" style={{ marginTop: '20px', width: '100%', justifyContent: 'center' }} onClick={closeModal}>Got It</button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Contact Section */}
      <section id="contact" className="contact-section section-padding">
        <div className="container contact-container">
          <div className="contact-info center-header">
            <span className="sur-title">Get in Touch /</span>
            <h2>
              READY TO TRANSFORM<br />
              YOUR <span className="text-accent">SMILE</span>?
            </h2>
            <p>
              Our friendly team is here to answer all your questions and help you schedule your first visit.
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <span className="icon">📍</span>
                <div>
                  <h4>Location</h4>
                  <p>123 Dental Street, Suite 500, City</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">📞</span>
                <div>
                  <h4>Phone</h4>
                  <p>+1 (555) 000-1111</p>
                </div>
              </div>
              <div className="contact-item">
                <span className="icon">✉️</span>
                <div>
                  <h4>Email</h4>
                  <p>hello@dentalsmile.com</p>
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
                <button onClick={() => setFormSubmitted(false)} className="book-btn">Send Another</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Email Address" required />
                <select required>
                  <option value="" disabled selected>Select Service</option>
                  <option value="cleaning">Teeth Cleaning</option>
                  <option value="checkup">Checkup</option>
                  <option value="veneers">Veneers</option>
                </select>
                <textarea placeholder="Your Message" rows="4"></textarea>
                <button type="submit" className="book-btn" style={{ width: '100%', justifyContent: 'center' }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer section-padding">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="logo" style={{ color: 'white', marginBottom: '20px' }}>
                <div className="logo-icon">🦷</div>
                Dental
              </div>
              <p className="footer-desc">
                Providing world-class dental care with a gentle touch. Our mission is to combine state-of-the-art technology with compassionate service to give you the smile you deserve.
              </p>
              <div className="social-links" style={{ marginTop: '30px' }}>
                <a href="#" className="social-icon">FB</a>
                <a href="#" className="social-icon">IG</a>
                <a href="#" className="social-icon">TW</a>
                <a href="#" className="social-icon">LN</a>
              </div>
            </div>

            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#blog">Latest News</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Our Services</h3>
              <ul>
                <li><a href="#services">Teeth Cleaning</a></li>
                <li><a href="#services">Teeth Whitening</a></li>
                <li><a href="#services">Dental Checkups</a></li>
                <li><a href="#services">Oral Surgery</a></li>
                <li><a href="#services">Dental Fillings</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h3>Contact Info</h3>
              <ul className="footer-contact-list">
                <li>
                  <strong>📍 Address:</strong><br />
                  123 Dental St, Suite 500,<br />
                  New York, NY 10001
                </li>
                <li>
                  <strong>📞 Phone:</strong><br />
                  +1 (555) 000-1111
                </li>
                <li>
                  <strong>✉️ Email:</strong><br />
                  hello@dentalsmile.com
                </li>
                <li>
                  <strong>🕒 Working Hours:</strong><br />
                  Mon - Fri: 9am - 5pm
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2023 Dental Care Clinic. All rights reserved.</p>
            <div className="footer-legal">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
