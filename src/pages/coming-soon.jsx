import React, { useEffect, useState } from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import Header from "@/layout/headers/header";
import Footer from "@/layout/footers/footer";
import emailjs from '@emailjs/browser';

const ComingSoon = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    projectType: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    emailjs.init("YOUR_PUBLIC_KEY");
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    try {
      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        {
          from_name: formData.name,
          from_email: formData.email,
          whatsapp: formData.whatsapp,
          project_type: formData.projectType,
          message: formData.message,
          to_email: 'support@techfieldsolution.com'
        }
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', whatsapp: '', projectType: '', message: '' });
      setTimeout(() => setSubmitStatus(''), 3000);
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(''), 3000);
    }
  };

  return (
    <Wrapper>
      <SEO pageTitle="Get In Touch - Tech Field Solution | IT Services & Web Development" />
      <Header />
      
      {/* Hero Banner Section */}
      <section className="hero-banner-section position-relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 50%, #7e22ce 100%)',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        paddingTop: '80px',
        paddingBottom: '80px'
      }}>
        {/* Animated Background Particles */}
        <div className="particles position-absolute w-100 h-100" style={{ top: 0, left: 0, overflow: 'hidden', zIndex: 1 }}>
          <div className="particle" style={{
            position: 'absolute',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(255,215,0,0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            top: '10%',
            right: '5%',
            animation: 'float 8s ease-in-out infinite'
          }}></div>
          <div className="particle" style={{
            position: 'absolute',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            bottom: '15%',
            left: '10%',
            animation: 'float 6s ease-in-out infinite reverse'
          }}></div>
          <div className="particle" style={{
            position: 'absolute',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            top: '60%',
            right: '15%',
            animation: 'float 7s ease-in-out infinite'
          }}></div>
        </div>

        <div className="container position-relative" style={{ zIndex: 2 }}>
          <div className="row align-items-center g-5">
            {/* Left Content */}
            <div className="col-xl-6 col-lg-6">
              <div className="hero-content text-white">
                {/* Special Offer Badge */}
                <div className="offer-badge mb-4" style={{
                  display: 'inline-block',
                  padding: '12px 24px',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  borderRadius: '50px',
                  fontSize: '15px',
                  fontWeight: '700',
                  color: '#000',
                  boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)',
                  animation: 'pulse 2s ease-in-out infinite'
                }}>
                  🎉 Limited Time: 20% OFF on First Project!
                </div>
                
                <h1 className="hero-title mb-4" style={{
                  fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                  fontWeight: '900',
                  lineHeight: '1.1',
                  textShadow: '2px 4px 8px rgba(0,0,0,0.3)',
                  letterSpacing: '-1px'
                }}>
                  Transform Your <br />
                  <span style={{
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    display: 'inline-block'
                  }}>Digital Vision</span>
                  <br />Into Reality
                </h1>

                <p className="hero-subtitle mb-5" style={{
                  fontSize: 'clamp(1.1rem, 2vw, 1.4rem)',
                  lineHeight: '1.8',
                  opacity: '0.95',
                  maxWidth: '600px',
                  fontWeight: '300'
                }}>
                  Partner with <strong style={{ fontWeight: '700', color: '#FFD700' }}>Tech Field Solution</strong> for 
                  innovative web development, mobile apps, AI solutions, and digital marketing that drives measurable results.
                </p>

                {/* Key Benefits */}
                <div className="benefits mb-5">
                  {[
                    { icon: '✓', text: 'Expert Team of Developers' },
                    { icon: '✓', text: '24/7 Dedicated Support' },
                    { icon: '✓', text: 'On-Time Project Delivery' },
                    { icon: '✓', text: 'Affordable Premium Quality' }
                  ].map((benefit, index) => (
                    <div key={index} className="benefit-item d-flex align-items-center mb-3" style={{
                      fontSize: '1.1rem',
                      opacity: '0.95'
                    }}>
                      <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '28px',
                        height: '28px',
                        background: '#FFD700',
                        color: '#000',
                        borderRadius: '50%',
                        marginRight: '15px',
                        fontWeight: '900',
                        fontSize: '14px'
                      }}>{benefit.icon}</span>
                      {benefit.text}
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="hero-buttons d-flex flex-wrap gap-3 mb-5">
                  <a href="#contact-form" className="btn-hero-primary" style={{
                    padding: '18px 40px',
                    background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                    border: 'none',
                    borderRadius: '50px',
                    color: '#000',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 8px 25px rgba(255, 215, 0, 0.4)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.transform = 'translateY(-3px) scale(1.02)';
                    e.currentTarget.style.boxShadow = '0 12px 35px rgba(255, 215, 0, 0.6)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 8px 25px rgba(255, 215, 0, 0.4)';
                  }}>
                    Get Started Now
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>

                  <a href="tel:+916290218436" className="btn-hero-secondary" style={{
                    padding: '18px 40px',
                    background: 'transparent',
                    border: '2px solid rgba(255, 255, 255, 0.6)',
                    borderRadius: '50px',
                    color: '#fff',
                    fontWeight: '700',
                    fontSize: '1.1rem',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '12px',
                    transition: 'all 0.3s ease',
                    backdropFilter: 'blur(10px)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.15)';
                    e.currentTarget.style.borderColor = '#fff';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.6)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                    Call Us Now
                  </a>
                </div>

                {/* Stats Row */}
                <div className="stats-row d-flex flex-wrap gap-4">
                  {[
                    { number: '20+', label: 'Projects Delivered' },
                    { number: '18+', label: 'Happy Clients' },
                    { number: '98%', label: 'Satisfaction Rate' }
                  ].map((stat, index) => (
                    <div key={index} className="stat-item" style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px'
                    }}>
                      <div style={{
                        fontSize: '2rem',
                        fontWeight: '900',
                        color: '#FFD700',
                        textShadow: '0 2px 4px rgba(0,0,0,0.3)'
                      }}>{stat.number}</div>
                      <div style={{
                        fontSize: '0.9rem',
                        opacity: '0.9',
                        lineHeight: '1.3'
                      }}>{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side - Feature Cards */}
            <div className="col-xl-6 col-lg-6">
              <div className="hero-cards-wrapper" style={{ position: 'relative' }}>
                {/* Main Feature Card */}
                <div className="main-feature-card p-5" style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(20px)',
                  borderRadius: '30px',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  boxShadow: '0 20px 60px rgba(0, 0, 0, 0.3)'
                }}>
                  <div className="text-center mb-4">
                    <div className="logo-wrapper mb-4" style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      borderRadius: '20px',
                      padding: '30px',
                      display: 'inline-block'
                    }}>
                      <img 
                        src="/assets/img/logo/logo.svg" 
                        alt="Tech Field Solution" 
                        style={{
                          width: '100%',
                          maxWidth: '250px',
                          height: 'auto',
                          filter: 'brightness(0) invert(1)'
                        }}
                      />
                    </div>
                    <h3 className="text-white mb-3" style={{
                      fontSize: '1.8rem',
                      fontWeight: '700'
                    }}>Your Success Partner</h3>
                    <p className="text-white" style={{
                      opacity: '0.9',
                      fontSize: '1.1rem',
                      lineHeight: '1.7'
                    }}>
                      We don't just build software – we build success stories. 
                      Let's create something amazing together.
                    </p>
                  </div>

                  {/* Services Grid */}
                  <div className="row g-3">
                    {[
                      { icon: '🌐', name: 'Web Development', color: '#667eea' },
                      { icon: '📱', name: 'Mobile Apps', color: '#764ba2' },
                      { icon: '🤖', name: 'AI Solutions', color: '#f093fb' },
                      { icon: '📈', name: 'Digital Marketing', color: '#4facfe' },
                      { icon: '☁️', name: 'Cloud Services', color: '#43e97b' },
                      { icon: '🎨', name: 'UI/UX Design', color: '#fa709a' }
                    ].map((service, index) => (
                      <div key={index} className="col-6">
                        <div className="service-mini-card p-3 text-center" style={{
                          background: 'rgba(255, 255, 255, 0.1)',
                          backdropFilter: 'blur(10px)',
                          borderRadius: '15px',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          transition: 'all 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.background = `${service.color}33`;
                          e.currentTarget.style.transform = 'translateY(-5px)';
                          e.currentTarget.style.borderColor = service.color;
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                          e.currentTarget.style.transform = 'translateY(0)';
                          e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.15)';
                        }}>
                          <div style={{ fontSize: '2rem', marginBottom: '8px' }}>{service.icon}</div>
                          <div className="text-white" style={{
                            fontSize: '0.9rem',
                            fontWeight: '600'
                          }}>{service.name}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Floating Badge - Years of Experience */}
                <div className="floating-badge" style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                  color: '#000',
                  padding: '20px',
                  borderRadius: '20px',
                  boxShadow: '0 15px 40px rgba(255, 165, 0, 0.5)',
                  textAlign: 'center',
                  minWidth: '120px',
                  animation: 'float 3s ease-in-out infinite',
                  zIndex: 10
                }}>
                  <div style={{ fontSize: '2.5rem', fontWeight: '900', lineHeight: '1' }}>2+</div>
                  <div style={{ fontSize: '0.9rem', fontWeight: '700', marginTop: '5px' }}>Years<br/>Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div style={{
          position: 'absolute',
          bottom: '-2px',
          left: 0,
          width: '100%',
          overflow: 'hidden',
          lineHeight: 0,
          zIndex: 2
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" style={{
            width: '100%',
            height: '80px'
          }}>
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#f8f9fa"></path>
          </svg>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-section py-5" style={{ background: '#f8f9fa' }}>
        <div className="container py-5">
          <div className="text-center mb-5">
            <h2 style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: '800',
              color: '#1e3c72',
              marginBottom: '20px'
            }}>
              Why Choose <span style={{ color: '#FFA500' }}>Tech Field Solution</span>?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              color: '#666',
              maxWidth: '700px',
              margin: '0 auto'
            }}>
              We combine innovation, expertise, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                icon: '🎯',
                title: 'Results-Driven Approach',
                description: 'We focus on delivering measurable outcomes that align with your business goals',
                color: '#667eea'
              },
              {
                icon: '💎',
                title: 'Premium Quality',
                description: 'Enterprise-grade solutions with attention to detail and best coding practices',
                color: '#764ba2'
              },
              {
                icon: '⚡',
                title: 'Fast Turnaround',
                description: 'Agile development process ensuring quick delivery without compromising quality',
                color: '#f093fb'
              },
              {
                icon: '🔒',
                title: 'Secure & Scalable',
                description: 'Built with security in mind and designed to grow with your business',
                color: '#4facfe'
              },
              {
                icon: '💬',
                title: 'Transparent Communication',
                description: 'Regular updates and clear communication throughout the project lifecycle',
                color: '#43e97b'
              },
              {
                icon: '🏆',
                title: 'Proven Track Record',
                description: '98% client satisfaction rate with 20+ successful projects delivered',
                color: '#fa709a'
              }
            ].map((item, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div className="why-card p-4 h-100" style={{
                  background: '#fff',
                  borderRadius: '20px',
                  border: '2px solid transparent',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.borderColor = item.color;
                  e.currentTarget.style.transform = 'translateY(-10px)';
                  e.currentTarget.style.boxShadow = `0 15px 40px ${item.color}33`;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}>
                  <div style={{
                    fontSize: '3rem',
                    marginBottom: '20px'
                  }}>{item.icon}</div>
                  <h4 style={{
                    fontSize: '1.4rem',
                    fontWeight: '700',
                    color: '#1e3c72',
                    marginBottom: '15px'
                  }}>{item.title}</h4>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: '1.7',
                    margin: 0
                  }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="contact-form-section py-5" style={{ background: '#fff' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="text-center mb-5">
                <h2 style={{
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  fontWeight: '800',
                  color: '#1e3c72',
                  marginBottom: '20px'
                }}>
                  Start Your <span style={{ color: '#FFA500' }}>Project Today</span>
                </h2>
                <p style={{
                  fontSize: '1.2rem',
                  color: '#666'
                }}>
                  Tell us about your project and get a free consultation
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form p-5" style={{
                background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                borderRadius: '30px',
                boxShadow: '0 20px 60px rgba(102, 126, 234, 0.4)'
              }}>
                <div className="row g-4">
                  <div className="col-md-6">
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your Name *"
                      required
                      style={{
                        width: '100%',
                        padding: '18px 24px',
                        borderRadius: '15px',
                        border: 'none',
                        fontSize: '1rem',
                        background: 'rgba(255, 255, 255, 0.95)',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Your Email *"
                      required
                      style={{
                        width: '100%',
                        padding: '18px 24px',
                        borderRadius: '15px',
                        border: 'none',
                        fontSize: '1rem',
                        background: 'rgba(255, 255, 255, 0.95)',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <input
                      type="tel"
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={handleInputChange}
                      placeholder="WhatsApp Number"
                      style={{
                        width: '100%',
                        padding: '18px 24px',
                        borderRadius: '15px',
                        border: 'none',
                        fontSize: '1rem',
                        background: 'rgba(255, 255, 255, 0.95)',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '18px 24px',
                        borderRadius: '15px',
                        border: 'none',
                        fontSize: '1rem',
                        background: 'rgba(255, 255, 255, 0.95)',
                        outline: 'none'
                      }}
                    >
                      <option value="">Select Service *</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="ai">AI Solutions</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="cloud">Cloud Services</option>
                      <option value="design">UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project..."
                      rows="5"
                      style={{
                        width: '100%',
                        padding: '18px 24px',
                        borderRadius: '15px',
                        border: 'none',
                        fontSize: '1rem',
                        background: 'rgba(255, 255, 255, 0.95)',
                        outline: 'none',
                        resize: 'vertical'
                      }}
                    ></textarea>
                  </div>
                  <div className="col-12">
                    <button
                      type="submit"
                      disabled={submitStatus === 'sending'}
                      style={{
                        width: '100%',
                        padding: '20px',
                        background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
                        border: 'none',
                        borderRadius: '15px',
                        color: '#000',
                        fontSize: '1.2rem',
                        fontWeight: '700',
                        cursor: submitStatus === 'sending' ? 'not-allowed' : 'pointer',
                        transition: 'all 0.3s ease',
                        textTransform: 'uppercase',
                        letterSpacing: '1px'
                      }}
                      onMouseOver={(e) => {
                        if (submitStatus !== 'sending') {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                          e.currentTarget.style.boxShadow = '0 10px 30px rgba(255, 215, 0, 0.5)';
                        }
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {submitStatus === 'sending' ? 'Sending...' : 'Send Message & Get 20% OFF'}
                    </button>
                  </div>
                </div>

                {submitStatus === 'success' && (
                  <div className="alert alert-success mt-4 text-center" style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '15px',
                    padding: '15px',
                    color: '#155724',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    ✅ Thank you! We'll contact you soon with your exclusive 20% discount.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="alert alert-danger mt-4 text-center" style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    borderRadius: '15px',
                    padding: '15px',
                    color: '#721c24',
                    fontSize: '1.1rem',
                    fontWeight: '600'
                  }}>
                    ❌ Something went wrong. Please try again or call us directly.
                  </div>
                )}
              </form>

              {/* Contact Cards */}
              <div className="row g-4 mt-5">
                <div className="col-md-6">
                  <div className="contact-card p-4 text-center" style={{
                    background: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📍</div>
                    <h5 style={{ color: '#1e3c72', fontWeight: '700', marginBottom: '10px' }}>Visit Us</h5>
                    <p style={{ color: '#666', margin: 0 }}>Tech Avenue, Silicon Valley<br/>CA 94000 (Kolkata)</p>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="contact-card p-4 text-center" style={{
                    background: '#fff',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📞</div>
                    <h5 style={{ color: '#1e3c72', fontWeight: '700', marginBottom: '10px' }}>Call Us</h5>
                    <p style={{ color: '#666', margin: 0 }}>
                      <a href="tel:+916290218436" style={{ color: '#FFA500', textDecoration: 'none', fontWeight: '600' }}>
                        +91 6290 218 436
                      </a>
                      <br/>
                      <a href="mailto:support@techfieldsolution.com" style={{ color: '#666', textDecoration: 'none', fontSize: '0.9rem' }}>
                        support@techfieldsolution.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        @keyframes pulse {
          0%, 100% {
            transform: scale(1);
            box-shadow: 0 8px 25px rgba(255, 215, 0, 0.4);
          }
          50% {
            transform: scale(1.05);
            box-shadow: 0 12px 35px rgba(255, 215, 0, 0.6);
          }
        }
      `}</style>

      <Footer />
    </Wrapper>
  );
};

export default ComingSoon;