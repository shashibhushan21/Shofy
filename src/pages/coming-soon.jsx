import React, { useState, useEffect } from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";
import emailjs from '@emailjs/browser';

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [formData, setFormData] = useState({
    email: "",
    whatsapp: "",
    name: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const countDownDate = new Date("Dec 31, 2025 23:59:59").getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });

      if (distance < 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'service_xxxxxxx';
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'template_xxxxxxx';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

      const templateParams = {
        to_email: 'support@techfieldsolution.com, info@techfieldsolution.com',
        from_name: formData.name,
        from_email: formData.email,
        whatsapp: formData.whatsapp || 'Not provided',
        message: `New VIP Access Request from ${formData.name}`,
        reply_to: formData.email,
      };

      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ email: "", whatsapp: "", name: "" });
      }, 5000);

    } catch (error) {
      console.error('Error:', error);
      setErrorMessage('Unable to send. Please contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <SEO pageTitle="Get In Touch - Luxury Jewelry Collection" />
      <HeaderTwo style_2={true} />
      
      <section 
        className="tp-coming-soon-area py-5" 
        style={{ 
          background: "linear-gradient(180deg, #f8f5f2 0%, #fff 30%, #f8f5f2 100%)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        {/* Decorative Pattern Background - Similar to home page */}
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.05) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.05) 0%, transparent 40%)",
          pointerEvents: "none"
        }}></div>

        {/* Floating Jewelry Elements */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "5%",
          fontSize: "80px",
          opacity: "0.08",
          animation: "float 8s ease-in-out infinite",
          color: "#d4af37"
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "15%",
          right: "8%",
          fontSize: "70px",
          opacity: "0.08",
          animation: "float 10s ease-in-out infinite",
          animationDelay: "2s",
          color: "#d4af37"
        }}></div>
        <div style={{
          position: "absolute",
          top: "50%",
          right: "5%",
          fontSize: "60px",
          opacity: "0.08",
          animation: "float 12s ease-in-out infinite",
          animationDelay: "4s",
          color: "#d4af37"
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="text-center">
                
                {/* Logo */}
                <div className="mb-4" style={{ animation: "fadeInDown 1s ease-out" }}>
                  <a href="/">
                    <img 
                      src="/assets/img/logo/logo.svg" 
                      alt="Shofy Logo" 
                      style={{ 
                        maxWidth: "200px",
                        
                      }} 
                    />
                  </a>
                </div>

                {/* Premium Badge */}
                <div className="mb-4" style={{ animation: "fadeIn 1.2s ease-out" }}>
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 40px",
                    background: "linear-gradient(135deg, #d4af37 0%, #f4e5a1 100%)",
                    color: "#1a1a2e",
                    fontSize: "14px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    borderRadius: "50px",
                    boxShadow: "none"
                  }}>
                    <span style={{ fontSize: "18px" }}></span>
                    Exclusive Jewelry Collection
                  </span>
                </div>

                {/* Main Headline */}
                <div className="mb-5" style={{ animation: "fadeInUp 1s ease-out 0.3s both" }}>
                  <h1 style={{ 
                    fontSize: "clamp(40px, 6vw, 72px)", 
                    fontWeight: "700", 
                    marginBottom: "25px",
                    color: "#1a1a2e",
                    lineHeight: "1.2",
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    Get In Touch With
                    <br />
                    <span style={{ 
                      background: "linear-gradient(135deg, #d4af37 0%, #c9992e 100%)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text"
                    }}>Timeless Elegance</span>
                  </h1>
                  <p style={{ 
                    fontSize: "clamp(18px, 2.5vw, 24px)", 
                    color: "#666", 
                    marginBottom: "30px",
                    fontWeight: "400",
                    maxWidth: "700px",
                    margin: "0 auto"
                  }}>
                    Experience luxury craftsmanship in gold, diamonds & precious gemstones
                  </p>
                </div>

                {/* Feature Cards */}
                <div className="mb-5" style={{ animation: "fadeInUp 1s ease-out 0.5s both" }}>
                  <div className="row justify-content-center g-4 mb-5">
                    {[
                      { icon: "", text: "Premium Diamonds", desc: "Certified Quality" },
                      { icon: "", text: "Royal Designs", desc: "Exclusive Collection" },
                      { icon: "", text: "Handcrafted", desc: "Master Artisans" },
                      { icon: "", text: "Gift Ready", desc: "Luxury Packaging" }
                    ].map((item, index) => (
                      <div key={index} className="col-6 col-md-3">
                        <div style={{
                          padding: "30px 20px",
                          background: "rgba(255, 255, 255, 0)",
                          borderRadius: "20px",
                          boxShadow: "none",
                          transition: "all 0.3s ease",
                          cursor: "default"
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = "translateY(-8px)";
                          e.currentTarget.style.boxShadow = "0 15px 40px rgba(212, 175, 55, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = "translateY(0)";
                          e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.08)";
                        }}>
                          <div style={{ fontSize: "48px", marginBottom: "15px" }}>{item.icon}</div>
                          <h5 style={{ color: "#1a1a2e", margin: "0 0 8px 0", fontSize: "16px", fontWeight: "700" }}>{item.text}</h5>
                          <p style={{ color: "#999", margin: 0, fontSize: "13px" }}>{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Countdown Timer */}
                <div className="mb-5" style={{ animation: "fadeInUp 1s ease-out 0.7s both" }}>
                  <h3 style={{ 
                    color: "#1a1a2e", 
                    fontSize: "28px", 
                    marginBottom: "35px",
                    fontWeight: "700",
                    letterSpacing: "1px"
                  }}>
                    Collection Launching In
                  </h3>
                  <div className="row justify-content-center g-4">
                    {[
                      { value: timeLeft.days, label: "DAYS" },
                      { value: timeLeft.hours, label: "HOURS" },
                      { value: timeLeft.minutes, label: "MINUTES" },
                      { value: timeLeft.seconds, label: "SECONDS" }
                    ].map((item, index) => (
                      <div key={index} className="col-6 col-sm-3">
                        <div style={{ 
                          background: "rgba(255, 255, 255, 0)",
                          padding: "40px 20px",
                          borderRadius: "20px",
                          boxShadow: "none"
                        }}>
                          <h3 style={{ 
                            fontSize: "clamp(48px, 6vw, 72px)", 
                            fontWeight: "700", 
                            background: "linear-gradient(135deg, #d4af37 0%, #c9992e 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            marginBottom: "10px",
                            fontFamily: "'Poppins', sans-serif"
                          }}>
                            {String(item.value).padStart(2, '0')}
                          </h3>
                          <p style={{ 
                            fontSize: "13px", 
                            color: "#999", 
                            margin: "0", 
                            letterSpacing: "2px", 
                            fontWeight: "600"
                          }}>
                            {item.label}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Form */}
                <div className="mb-5" style={{ 
                  maxWidth: "750px", 
                  margin: "0 auto 50px",
                  animation: "fadeInUp 1s ease-out 0.9s both"
                }}>
                  <div style={{
                    background: "rgba(255, 255, 255, 0)",
                    padding: "60px 50px",
                    borderRadius: "30px",
                    boxShadow: "none"
                  }}>
                    <div style={{ fontSize: "56px", marginBottom: "25px" }}></div>
                    <h4 style={{ 
                      fontSize: "36px", 
                      marginBottom: "15px",
                      color: "#1a1a2e",
                      fontWeight: "700",
                      fontFamily: "'Playfair Display', serif"
                    }}>
                      Get In Touch
                    </h4>
                    <p style={{
                      fontSize: "17px",
                      color: "#666",
                      marginBottom: "40px",
                      fontWeight: "400"
                    }}>
                      Be the first to explore our exclusive jewelry collection
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your Name *"
                          required
                          style={{
                            padding: "20px 25px",
                            border: "2px solid #e8e8e8",
                            borderRadius: "12px",
                            fontSize: "16px",
                            background: "#fafafa",
                            color: "#333",
                            outline: "none",
                            transition: "all 0.3s ease"
                          }}
                          onFocus={(e) => {
                            e.target.style.background = "#fff";
                            e.target.style.borderColor = "#d4af37";
                          }}
                          onBlur={(e) => {
                            e.target.style.background = "#fafafa";
                            e.target.style.borderColor = "#e8e8e8";
                          }}
                        />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Your Email Address *"
                          required
                          style={{
                            padding: "20px 25px",
                            border: "2px solid #e8e8e8",
                            borderRadius: "12px",
                            fontSize: "16px",
                            background: "#fafafa",
                            color: "#333",
                            outline: "none",
                            transition: "all 0.3s ease"
                          }}
                          onFocus={(e) => {
                            e.target.style.background = "#fff";
                            e.target.style.borderColor = "#d4af37";
                          }}
                          onBlur={(e) => {
                            e.target.style.background = "#fafafa";
                            e.target.style.borderColor = "#e8e8e8";
                          }}
                        />
                        <input
                          type="tel"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                          placeholder="WhatsApp Number (Optional)"
                          style={{
                            padding: "20px 25px",
                            border: "2px solid #e8e8e8",
                            borderRadius: "12px",
                            fontSize: "16px",
                            background: "#fafafa",
                            color: "#333",
                            outline: "none",
                            transition: "all 0.3s ease"
                          }}
                          onFocus={(e) => {
                            e.target.style.background = "#fff";
                            e.target.style.borderColor = "#d4af37";
                          }}
                          onBlur={(e) => {
                            e.target.style.background = "#fafafa";
                            e.target.style.borderColor = "#e8e8e8";
                          }}
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          style={{
                            padding: "22px 50px",
                            background: isSubmitting ? "#ccc" : "linear-gradient(135deg, #d4af37 0%, #c9992e 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "17px",
                            fontWeight: "700",
                            cursor: isSubmitting ? "not-allowed" : "pointer",
                            transition: "all 0.3s ease",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            boxShadow: "none"
                          }}
                          onMouseEnter={(e) => {
                            if (!isSubmitting) {
                              e.target.style.transform = "translateY(-3px)";
                              e.target.style.boxShadow = "0 15px 40px rgba(212, 175, 55, 0.5)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow = "0 10px 30px rgba(212, 175, 55, 0.3)";
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                      </div>
                      {isSubmitted && (
                        <div style={{
                          marginTop: "25px",
                          padding: "20px",
                          background: "#e8f5e9",
                          borderRadius: "12px",
                          color: "#2e7d32",
                          fontSize: "15px",
                          fontWeight: "600"
                        }}>
                           Thank you! We&apos;ll get back to you shortly.
                        </div>
                      )}
                      {errorMessage && (
                        <div style={{
                          marginTop: "25px",
                          padding: "20px",
                          background: "#ffebee",
                          borderRadius: "12px",
                          color: "#c62828",
                          fontSize: "14px"
                        }}>
                          {errorMessage}
                        </div>
                      )}
                    </form>
                    <p style={{
                      marginTop: "25px",
                      fontSize: "14px",
                      color: "#999"
                    }}>
                      Or reach us directly at:
                      <br />
                      <a href="mailto:support@techfieldsolution.com" style={{ color: "#d4af37", fontWeight: "600", textDecoration: "none" }}>support@techfieldsolution.com</a>
                      {' '} | {' '}
                      <a href="tel:+916290218436" style={{ color: "#d4af37", fontWeight: "600", textDecoration: "none" }}>+91 6290 218 436</a>
                    </p>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="row justify-content-center g-4" style={{ animation: "fadeInUp 1s ease-out 1.1s both" }}>
                  
                  <div className="col-md-6">
                    <div style={{
                      background: "rgba(255, 255, 255, 0)",
                      padding: "40px 35px",
                      borderRadius: "25px",
                      boxShadow: "none",
                      height: "100%",
                      textAlign: "left"
                    }}>
                      <div style={{ 
                        width: "70px",
                        height: "70px",
                        borderRadius: "50%",
                        background: "linear-gradient(135deg, #d4af37 0%, #c9992e 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "25px"
                      }}>
                        <span style={{ fontSize: "32px" }}></span>
                      </div>
                      <h5 style={{ 
                        fontSize: "24px", 
                        marginBottom: "20px", 
                        color: "#1a1a2e",
                        fontWeight: "700"
                      }}>
                        Contact Information
                      </h5>
                      <div>
                        <div style={{ marginBottom: "18px" }}>
                          <p style={{ fontSize: "13px", color: "#999", marginBottom: "8px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Phone</p>
                          <a href="tel:+916290218436" style={{ 
                            color: "#1a1a2e", 
                            textDecoration: "none",
                            fontSize: "19px",
                            fontWeight: "600"
                          }}>
                            +91 6290 218 436
                          </a>
                        </div>
                        <div style={{ marginBottom: "18px" }}>
                          <p style={{ fontSize: "13px", color: "#999", marginBottom: "8px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Email</p>
                          <a href="mailto:support@techfieldsolution.com" style={{ 
                            color: "#1a1a2e", 
                            textDecoration: "none",
                            fontSize: "16px",
                            fontWeight: "600",
                            display: "block",
                            marginBottom: "5px"
                          }}>
                            support@techfieldsolution.com
                          </a>
                          <a href="mailto:info@techfieldsolution.com" style={{ 
                            color: "#1a1a2e", 
                            textDecoration: "none",
                            fontSize: "16px",
                            fontWeight: "600"
                          }}>
                            info@techfieldsolution.com
                          </a>
                        </div>
                        <div>
                          <p style={{ fontSize: "13px", color: "#999", marginBottom: "8px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Location</p>
                          <p style={{ color: "#666", margin: "0", fontSize: "16px", lineHeight: "1.6" }}>
                            Tech Avenue, Silicon Valley,<br />CA 94000 (Kolkata)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div style={{
                      background: "rgba(255, 255, 255, 0)",
                      padding: "40px 35px",
                      borderRadius: "25px",
                      boxShadow: "none",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      textAlign: "center"
                    }}>
                      <img src="/assets/img/icon/social.png" alt="Social" style={{ width: "70px", height: "70px", margin: "0 auto 25px" }} />
                      <h5 style={{ 
                        fontSize: "24px", 
                        marginBottom: "20px", 
                        color: "#1a1a2e",
                        fontWeight: "700"
                      }}>
                        Follow Our Journey
                      </h5>
                      <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
                        {[
                          { icon: "fab fa-facebook-f", bg: "#3b5998", url: "https://www.facebook.com/people/Tech-Field-Solution/61581618428487/" },
                          { icon: "fab fa-twitter", bg: "#1DA1F2", url: "https://x.com/techfieldsol" },
                          { icon: "fab fa-linkedin-in", bg: "#0077b5", url: "https://www.linkedin.com/company/techfieldsolution/" },
                          { icon: "fab fa-instagram", bg: "#E4405F", url: "https://www.instagram.com/techfieldsolution" },
                          { icon: "fab fa-youtube", bg: "#ff0000", url: "https://www.youtube.com/@techfieldsolution" }
                        ].map((social, index) => (
                          <a
                            key={index}
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                              width: "60px",
                              height: "60px",
                              borderRadius: "50%",
                              background: social.bg,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.3s ease",
                              textDecoration: "none",
                              boxShadow: "none"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-8px) scale(1.1)";
                              e.currentTarget.style.boxShadow = "0 12px 35px rgba(0, 0, 0, 0.25)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0) scale(1)";
                              e.currentTarget.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.15)";
                            }}
                          >
                            <i className={social.icon} style={{ color: "#fff", fontSize: "22px" }}></i>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer primary_style={true} />

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Poppins:wght@300;400;600;700&display=swap');
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-25px) rotate(5deg); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        input::placeholder {
          color: #999;
        }

        @media (max-width: 768px) {
          .col-sm-3 > div {
            padding: 30px 20px !important;
          }
          .col-sm-3 h3 {
            font-size: 42px !important;
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default ComingSoon;