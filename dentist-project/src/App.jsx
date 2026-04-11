import { useState } from "react";
import "./App.css";

function App() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);

  const testimonials = [
    {
      name: "Dr. Robert Smith",
      feedback:
        "Ventoria completely transformed our practice. We went from struggling to fill gaps to being fully booked 3 weeks out.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=robert",
    },
    {
      name: "Dr. Lisa Wong",
      feedback:
        "The ROI we've seen on our Google Ads campaigns is incredible. Marcus and his team really understand the dental market.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=lisa",
    },
    {
      name: "Dr. Mark Henderson",
      feedback:
        "Finally, an agency that actually delivers what they promise. The transparent reporting shows exactly where our leads come from.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=mark",
    },
    {
      name: "Dr. Sarah Miller",
      feedback:
        "Our local search ranking improved dramatically within the first 2 months. We're now the #1 choice in our suburb.",
      rating: 5,
      avatar: "https://i.pravatar.cc/150?u=sarah_d",
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
            Ventoria.
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
              Feedback
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
                Get free audit
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
            Get free audit
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
              <span className="badge-text">
                FOR DENTAL PRACTICES IN SYDNEY, MELBOURNE & BRISBANE
              </span>
            </div>
            <h1 className="hero-title-animated fade-in">
              <span className="title-line line-1">More patients.</span>
              <br />
              <span className="title-line line-2 title-accent-italic">Less guessing.</span>
              <br />
              <span className="title-line line-3">Guaranteed.</span>
            </h1>
            <p className="hero-description fade-in">
              We help independent dental clinics dominate local Google search,
              fill their appointment books with high-value patients, and stop
              paying for marketing that doesn't work — all within 90 days.
            </p>

            <div className="hero-trust-stats fade-in">
              <div className="trust-stat">
                <span className="trust-num">+47%</span>
                <span className="trust-label">New patient inquiries</span>
              </div>
              <div className="trust-stat">
                <span className="trust-num">#1</span>
                <span className="trust-label">Google Maps ranking</span>
              </div>
              <div className="trust-stat">
                <span className="trust-num">3.8x</span>
                <span className="trust-label">Return on ad spend</span>
              </div>
            </div>

            <div className="hero-cta-row fade-in">
              <button
                className="book-btn contact-us-btn"
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
              >
                Get your free clinic audit
                <span className="arrow-circle">↗</span>
              </button>
              <span className="no-lock-in">
                {" "}
                ✔ No lock-in contracts. Cancel anytime.
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section section-padding">
        <div className="container">
          <div className="section-header centered-header">
            <span className="sur-title"> dental services</span>
            <h2>DISCOVER OUR STRATEGIC DENTAL SERVICES</h2>
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

      {/* What We Do Section */}
      <section id="what-we-do" className="what-we-do-section section-padding">
        <div className="container">
          <div className="what-we-do-header centered-header">
            <span className="sur-title text-accent">WHAT WE DO</span>
            <h2>Everything your clinic needs to dominate local search</h2>
            <p className="what-we-do-description">
              We specialise in dental practices, which means every service is
              tuned for your industry — not repurposed from a generic agency
              playbook.
            </p>
          </div>

          <div className="what-we-do-grid">
            {[
              {
                title: "Local SEO & Google Maps",
                desc: "Get your clinic into the top 3 Google Maps results for \"dentist [your suburb]\" searches. We optimise your Google Business Profile, build local citations, and create suburb-specific landing pages.",
                price: "From AUD $1,200/mo",
                icon: "📍",
                iconColor: "#fee2e2",
              },
              {
                title: "Google Ads for Dentists",
                desc: "Targeted campaigns for high-value procedures — Invisalign, implants, veneers. Dental-specific landing pages, negative keyword lists, and conversion tracking so every dollar is accountable.",
                price: "Management from AUD $800/mo",
                icon: "🎯",
                iconColor: "#fecaca",
              },
              {
                title: "Website Design & Rebuild",
                desc: "Mobile-first, SEO-ready dental websites that load in under 2 seconds and convert visitors into booked appointments. Built on WordPress or Webflow, delivered in 2-3 weeks.",
                price: "From AUD $2,500 one-off",
                icon: "🌐",
                iconColor: "#e0f2fe",
              },
              {
                title: "AI Lead Capture Chatbot",
                desc: "An AI-powered chatbot on your website that qualifies patient enquiries 24/7, answers FAQs, and books consultations — even when your reception is closed.",
                price: "From AUD $500/mo add-on",
                icon: "🤖",
                iconColor: "#f3e8ff",
              },
              {
                title: "Lead Generation Funnels",
                desc: "End-to-end lead gen from Facebook/Instagram ads targeting local patients to automated follow-up sequences that turn enquiries into confirmed bookings. Full funnel visibility.",
                price: "From AUD $1,500/mo",
                icon: "📊",
                iconColor: "#dcfce7",
              },
              {
                title: "Review & Reputation Management",
                desc: "Automated review request campaigns to grow your Google Reviews count, respond to feedback, and build the trust signals that convert first-time website visitors into patients.",
                price: "Included in all packages",
                icon: "⭐",
                iconColor: "#fef9c3",
              },
            ].map((item, i) => (
              <div key={i} className="what-we-do-card">
                <div
                  className="what-we-do-icon"
                  style={{ backgroundColor: item.iconColor }}
                >
                  {item.icon}
                </div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <div className="what-we-do-price">{item.price}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="pricing-section section-padding">
        <div className="container">
          <div className="pricing-header centered-header">
            <span className="sur-title text-accent">PRICING</span>
            <h2>Transparent packages. No lock-in contracts.</h2>
            <p className="pricing-description">
              All packages include a free onboarding audit, monthly performance
              reports, and a dedicated account manager available during AEST
              business hours.
            </p>
          </div>

          <div className="pricing-grid">
            {/* Starter Plan */}
            <div className="pricing-card">
              <span className="plan-name">STARTER</span>
              <div className="price-tag">
                <span className="dollar">$1,200</span>
                <span className="per-month">AUD per month</span>
              </div>
              <ul className="plan-features">
                <li><span>✓</span> Local SEO (up to 15 keywords)</li>
                <li><span>✓</span> Google Business Profile optimisation</li>
                <li><span>✓</span> Monthly performance report</li>
                <li><span>✓</span> Review request setup</li>
                <li><span>✓</span> Email support</li>
              </ul>
              <button
                className="pricing-btn outline"
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
              >
                Get started
              </button>
            </div>

            {/* Growth Plan */}
            <div className="pricing-card highlighted">
              <div className="popular-badge">MOST POPULAR</div>
              <span className="plan-name">GROWTH</span>
              <div className="price-tag">
                <span className="dollar">$2,000</span>
                <span className="per-month">AUD per month</span>
              </div>
              <ul className="plan-features">
                <li><span>✓</span> Everything in Starter</li>
                <li><span>✓</span> Google Ads management (up to $2k spend)</li>
                <li><span>✓</span> Conversion-optimised landing page</li>
                <li><span>✓</span> Monthly strategy call</li>
                <li><span>✓</span> Competitor tracking dashboard</li>
                <li><span>✓</span> Priority support — AEST hours</li>
              </ul>
              <button
                className="pricing-btn highlighted-btn"
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
              >
                Get started
              </button>
            </div>

            {/* Scale Plan */}
            <div className="pricing-card">
              <span className="plan-name">SCALE</span>
              <div className="price-tag">
                <span className="dollar">$3,500</span>
                <span className="per-month">AUD per month</span>
              </div>
              <ul className="plan-features">
                <li><span>✓</span> Everything in Growth</li>
                <li><span>✓</span> Meta Ads (Facebook & Instagram)</li>
                <li><span>✓</span> AI chatbot for lead capture</li>
                <li><span>✓</span> High-value procedure campaigns</li>
                <li><span>✓</span> Weekly reporting calls</li>
                <li><span>✓</span> Multi-location support</li>
              </ul>
              <button
                className="pricing-btn outline"
                onClick={() =>
                  document.getElementById("contact").scrollIntoView()
                }
              >
                Get started
              </button>
            </div>
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

      {/* Problem Section */}
      <section id="problem" className="problem-section section-padding">
        <div className="container">
          <div className="problem-header centered-header">
            <span className="sur-title text-accent">THE PROBLEM</span>
            <h2>
              Most dental clinics are invisible online — and losing patients
              daily
            </h2>
            <p className="problem-description">
              When someone in your suburb searches "dentist near me," your
              competitor three doors down is showing up first. Here's why that
              keeps happening.
            </p>
          </div>

          <div className="problem-grid">
            {[
              {
                num: "01",
                title: "Your Google Maps ranking is weak",
                desc: "72% of patients choose a dentist from the top 3 Google Maps results. If you're not there, you're not even in the consideration set — before they've seen your website once.",
              },
              {
                num: "02",
                title: "Your website isn't converting visitors",
                desc: "Most dental websites load slowly on mobile, have no clear call to action, and aren't optimised for the phrases patients actually search. Traffic arrives and leaves without booking.",
              },
              {
                num: "03",
                title: "Your ads are wasting budget",
                desc: "Generic Google Ads campaigns without proper targeting, negative keywords, or dental-specific landing pages burn through budget on clicks that never convert to appointments.",
              },
            ].map((item, i) => (
              <div key={i} className="problem-card">
                <div className="problem-num">{item.num}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-section section-padding">
        <div className="container">
          <div className="how-header centered-header">
            <span className="sur-title text-accent">HOW IT WORKS</span>
            <h2>A proven system built for dental practices</h2>
            <p className="how-description">
              Four steps. 90 days. Measurable patient growth — or we work the
              next month at no cost.
            </p>
          </div>

          <div className="how-grid">
            {[
              {
                step: "STEP 01",
                title: "Free clinic audit",
                desc: "We audit your Google ranking, website speed, Google Business Profile, and competitor landscape — all specific to your suburb.",
              },
              {
                step: "STEP 02",
                title: "Custom strategy",
                desc: "We build a 90-day plan targeting the exact keywords your local patients search — not generic terms, but suburb-specific, service-specific intent.",
              },
              {
                step: "STEP 03",
                title: "Launch & optimise",
                desc: "We implement local SEO, optimise your Google Business Profile, and run targeted Google Ads with dental-specific landing pages. Weekly reporting.",
              },
              {
                step: "STEP 04",
                title: "Scale what works",
                desc: "Monthly strategy calls to review results, double down on top-performing campaigns, and expand to high-value services like implants and Invisalign.",
              },
            ].map((item, i, arr) => (
              <div key={i} className="how-card-wrapper">
                <div className="how-card">
                  <span className="step-num">{item.step}</span>
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                {i < arr.length - 1 && (
                  <div className="how-arrow">
                    <span>→</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="results-section section-padding">
        <div className="container">
          <div className="results-header centered-header">
            <span className="sur-title text-accent">RESULTS</span>
            <h2>What dental clinics say after 90 days</h2>
            <p className="results-description">
              Real outcomes from real practices. We measure success in new
              patients and appointment bookings — not impressions or clicks.
            </p>
          </div>

          <div className="results-grid">
            {/* Result 1 */}
            <div className="result-card">
              <div className="result-top-border"></div>
              <span className="clinic-type">DENTAL CLINIC — SYDNEY</span>
              <p className="result-quote">
                "Within 8 weeks we were ranking first for 'dentist Surry Hills'
                and our phone was ringing with new patients daily. The Google
                Ads campaign alone brought 34 new patient enquiries in the first
                month."
              </p>
              <div className="result-author">
                <div className="author-avatar">DR</div>
                <div className="author-info">
                  <strong>Dr. R. Patel</strong>
                  <span>Principal Dentist, Inner Sydney</span>
                </div>
              </div>
              <div className="result-stats">
                <div className="stat-item">
                  <span className="stat-num">34</span>
                  <span className="stat-label">New inquiries, month 1</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">+62%</span>
                  <span className="stat-label">Organic traffic increase</span>
                </div>
              </div>
            </div>

            {/* Result 2 */}
            <div className="result-card">
              <div className="result-top-border"></div>
              <span className="clinic-type">MULTI-CHAIR PRACTICE — MELBOURNE</span>
              <p className="result-quote">
                "We'd tried two other agencies. Ventoria was the first to
                actually audit our specific suburb competition and build a
                strategy around it. We moved from page 3 to page 1 in 10 weeks."
              </p>
              <div className="result-author">
                <div className="author-avatar">SC</div>
                <div className="author-info">
                  <strong>Sarah C.</strong>
                  <span>Practice Manager, East Melbourne</span>
                </div>
              </div>
              <div className="result-stats">
                <div className="stat-item">
                  <span className="stat-num">+51%</span>
                  <span className="stat-label">Monthly appointment bookings</span>
                </div>
                <div className="stat-item">
                  <span className="stat-num">4.1x</span>
                  <span className="stat-label">Google Ads ROAS</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="faq-section section-padding">
        <div className="container">
          <div className="faq-header centered-header">
            <span className="sur-title text-accent">FAQ</span>
            <h2>Common questions</h2>
          </div>

          <div className="faq-list">
            {[
              {
                q: "How long does it take to see results from SEO?",
                a: "Local SEO results typically become visible within 6-10 weeks. Most clients see their Google Maps ranking improve within the first 30 days as we fix Google Business Profile gaps. Organic keyword rankings usually stabilise by week 10-12. Google Ads delivers results from day one of campaign launch.",
              },
              {
                q: "Do you work with AHPRA advertising guidelines?",
                a: "Yes, we are highly experienced in AHPRA compliance. All our copy, before/after images, and advertising claims are vetted to ensure your practice remains compliant while still being effective at attracting new patients.",
              },
              {
                q: "What is the minimum contract length?",
                a: "We believe in earning your business every month. While we recommend a 90-day initial period to see the full impact of SEO, all our packages are on a monthly basis with no long-term lock-in contracts.",
              },
              {
                q: "Can you manage our existing Google Ads account?",
                a: "Absolutely. We can perform a full audit of your current account, identify wasted spend, and either optimise what you have or rebuild it using our dental-specific high-conversion frameworks.",
              },
              {
                q: "Do you work with multi-location dental groups?",
                a: "Yes, we work with both individual clinics and larger multi-location groups. We can provide unified reporting and strategic coordination across all your locations to dominate multiple suburbs simultaneously.",
              },
            ].map((faq, i) => (
              <div
                key={i}
                className={`faq-item ${activeFaq === i ? "active" : ""}`}
                onClick={() => setActiveFaq(activeFaq === i ? null : i)}
              >
                <div className="faq-question">
                  <h3>{faq.q}</h3>
                  <span className="faq-icon">{activeFaq === i ? "−" : "+"}</span>
                </div>
                {activeFaq === i && <div className="faq-answer">{faq.a}</div>}
              </div>
            ))}
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
