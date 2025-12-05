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
      setErrorMessage('Unable to send. Please email us directly at support@techfieldsolution.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Wrapper>
      <SEO pageTitle="Coming Soon - Luxury Jewelry Collection" />
      <HeaderTwo style_2={true} />
      
      <section 
        className="tp-coming-soon-area py-5" 
        style={{ 
          background: "linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)",
          minHeight: "90vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `
            repeating-linear-gradient(45deg, transparent, transparent 50px, rgba(212, 175, 55, 0.03) 50px, rgba(212, 175, 55, 0.03) 100px),
            repeating-linear-gradient(-45deg, transparent, transparent 50px, rgba(212, 175, 55, 0.03) 50px, rgba(212, 175, 55, 0.03) 100px)
          `,
          animation: "shimmer 20s linear infinite"
        }}></div>

        <div style={{
          position: "absolute",
          top: "15%",
          left: "10%",
          fontSize: "60px",
          opacity: "0.1",
          animation: "float 6s ease-in-out infinite"
        }}></div>
        <div style={{
          position: "absolute",
          top: "70%",
          right: "15%",
          fontSize: "50px",
          opacity: "0.1",
          animation: "float 8s ease-in-out infinite",
          animationDelay: "2s"
        }}></div>
        <div style={{
          position: "absolute",
          bottom: "20%",
          left: "20%",
          fontSize: "45px",
          opacity: "0.1",
          animation: "float 7s ease-in-out infinite",
          animationDelay: "1s"
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="text-center">
                
                <div className="mb-4" style={{ animation: "fadeInDown 1s ease-out" }}>
                  <div style={{
                    display: "inline-block",
                    padding: "20px",
                    background: "rgba(212, 175, 55, 0.1)",
                    borderRadius: "20px",
                    backdropFilter: "blur(10px)",
                    boxShadow: "0 0 30px rgba(212, 175, 55, 0.3)"
                  }}>
                    <a href="/">
                      <img src="/assets/img/logo/logo.svg" alt="Shofy Logo" style={{ maxWidth: "180px", filter: "brightness(0) invert(1)" }} />
                    </a>
                  </div>
                </div>

                <div className="mb-4" style={{ animation: "fadeIn 1.5s ease-out" }}>
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "12px 35px",
                    background: "linear-gradient(135deg, #d4af37 0%, #f4e5a1 100%)",
                    color: "#1a1a2e",
                    fontSize: "13px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    borderRadius: "50px",
                    boxShadow: "0 8px 30px rgba(212, 175, 55, 0.5)",
                    animation: "pulse 2s ease-in-out infinite"
                  }}>
                    <span style={{ fontSize: "20px" }}></span>
                    Exclusive Jewelry Launch
                    <span style={{ fontSize: "20px" }}></span>
                  </span>
                </div>

                <div className="mb-4" style={{ animation: "fadeInUp 1s ease-out 0.3s both" }}>
                  <h1 style={{ 
                    fontSize: "clamp(36px, 5vw, 68px)", 
                    fontWeight: "700", 
                    marginBottom: "20px",
                    background: "linear-gradient(135deg, #ffffff 0%, #d4af37 50%, #ffffff 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1.2",
                    fontFamily: "'Playfair Display', serif",
                    textShadow: "0 0 30px rgba(212, 175, 55, 0.3)"
                  }}>
                    Crafting Timeless Elegance
                  </h1>
                  <h2 style={{ 
                    fontSize: "clamp(20px, 3vw, 32px)", 
                    color: "#f4e5a1", 
                    marginBottom: "20px",
                    fontWeight: "400",
                    letterSpacing: "1px"
                  }}>
                    Where Every Piece Tells a Story
                  </h2>
                  <p style={{ 
                    fontSize: "clamp(16px, 2vw, 20px)", 
                    color: "#b8b8b8", 
                    marginBottom: "30px",
                    fontWeight: "300",
                    maxWidth: "700px",
                    margin: "0 auto"
                  }}>
                    Experience the finest collection of handcrafted gold, diamonds & precious gemstones
                  </p>
                </div>

                <div className="mb-5" style={{ animation: "fadeInUp 1s ease-out 0.5s both" }}>
                  <div className="row justify-content-center g-4 mb-5">
                    {[
                      { icon: "", text: "Premium Diamonds" },
                      { icon: "", text: "Royal Designs" },
                      { icon: "", text: "Handcrafted" },
                      { icon: "", text: "Gift Ready" }
                    ].map((item, index) => (
                      <div key={index} className="col-6 col-md-3">
                        <div style={{
                          padding: "20px",
                          background: "rgba(255, 255, 255, 0.05)",
                          borderRadius: "15px",
                          backdropFilter: "blur(10px)",
                          transition: "all 0.3s ease"
                        }}>
                          <div style={{ fontSize: "40px", marginBottom: "10px" }}>{item.icon}</div>
                          <p style={{ color: "#d4af37", margin: 0, fontSize: "14px", fontWeight: "600" }}>{item.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-5" style={{ animation: "fadeInUp 1s ease-out 0.7s both" }}>
                  <h3 style={{ 
                    color: "#f4e5a1", 
                    fontSize: "24px", 
                    marginBottom: "30px",
                    fontWeight: "600",
                    letterSpacing: "2px"
                  }}>
                    LAUNCHING IN
                  </h3>
                  <div className="row justify-content-center g-3">
                    {[
                      { value: timeLeft.days, label: "DAYS" },
                      { value: timeLeft.hours, label: "HOURS" },
                      { value: timeLeft.minutes, label: "MINUTES" },
                      { value: timeLeft.seconds, label: "SECONDS" }
                    ].map((item, index) => (
                      <div key={index} className="col-6 col-sm-3">
                        <div style={{ 
                          background: "rgba(255, 255, 255, 0.05)",
                          padding: "35px 20px",
                          borderRadius: "20px",
                          backdropFilter: "blur(10px)",
                          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.3)"
                        }}>
                          <h3 style={{ 
                            fontSize: "clamp(42px, 5vw, 64px)", 
                            fontWeight: "700", 
                            background: "linear-gradient(135deg, #d4af37 0%, #f4e5a1 100%)",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            marginBottom: "10px",
                            fontFamily: "'Poppins', sans-serif"
                          }}>
                            {String(item.value).padStart(2, '0')}
                          </h3>
                          <p style={{ 
                            fontSize: "12px", 
                            color: "#b8b8b8", 
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

                <div className="mb-5" style={{ 
                  maxWidth: "700px", 
                  margin: "0 auto 50px",
                  animation: "fadeInUp 1s ease-out 0.9s both"
                }}>
                  <div style={{
                    background: "rgba(255, 255, 255, 0.08)",
                    padding: "50px 40px",
                    borderRadius: "25px",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 20px 60px rgba(0, 0, 0, 0.4)"
                  }}>
                    <div style={{ fontSize: "50px", marginBottom: "20px" }}></div>
                    <h4 style={{ 
                      fontSize: "32px", 
                      marginBottom: "15px",
                      color: "#fff",
                      fontWeight: "700",
                      fontFamily: "'Playfair Display', serif"
                    }}>
                      Reserve Your Exclusive Access
                    </h4>
                    <p style={{
                      fontSize: "16px",
                      color: "#d4af37",
                      marginBottom: "35px",
                      fontWeight: "500"
                    }}>
                      Be among the first to explore our exquisite collection
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Your Name"
                          required
                          style={{
                            padding: "18px 25px",
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "15px",
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                            outline: "none",
                            transition: "all 0.3s ease"
                          }}
                          onFocus={(e) => {
                            e.target.style.background = "rgba(255, 255, 255, 0.15)";
                            e.target.style.boxShadow = "0 0 20px rgba(212, 175, 55, 0.3)";
                          }}
                          onBlur={(e) => {
                            e.target.style.background = "rgba(255, 255, 255, 0.1)";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Your Email Address"
                          required
                          style={{
                            padding: "18px 25px",
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "15px",
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                            outline: "none",
                            transition: "all 0.3s ease"
                          }}
                          onFocus={(e) => {
                            e.target.style.background = "rgba(255, 255, 255, 0.15)";
                            e.target.style.boxShadow = "0 0 20px rgba(212, 175, 55, 0.3)";
                          }}
                          onBlur={(e) => {
                            e.target.style.background = "rgba(255, 255, 255, 0.1)";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                        <input
                          type="tel"
                          value={formData.whatsapp}
                          onChange={(e) => setFormData({...formData, whatsapp: e.target.value})}
                          placeholder="WhatsApp Number (Optional)"
                          style={{
                            padding: "18px 25px",
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "15px",
                            background: "rgba(255, 255, 255, 0.1)",
                            color: "#fff",
                            outline: "none",
                            transition: "all 0.3s ease"
                          }}
                          onFocus={(e) => {
                            e.target.style.background = "rgba(255, 255, 255, 0.15)";
                            e.target.style.boxShadow = "0 0 20px rgba(212, 175, 55, 0.3)";
                          }}
                          onBlur={(e) => {
                            e.target.style.background = "rgba(255, 255, 255, 0.1)";
                            e.target.style.boxShadow = "none";
                          }}
                        />
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          style={{
                            padding: "20px 50px",
                            background: isSubmitting ? "#888" : "linear-gradient(135deg, #d4af37 0%, #f4e5a1 100%)",
                            color: "#1a1a2e",
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "16px",
                            fontWeight: "700",
                            cursor: isSubmitting ? "not-allowed" : "pointer",
                            transition: "all 0.3s ease",
                            textTransform: "uppercase",
                            letterSpacing: "2px",
                            boxShadow: "0 10px 30px rgba(212, 175, 55, 0.4)"
                          }}
                          onMouseEnter={(e) => {
                            if (!isSubmitting) {
                              e.target.style.transform = "translateY(-3px)";
                              e.target.style.boxShadow = "0 15px 40px rgba(212, 175, 55, 0.6)";
                            }
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow = "0 10px 30px rgba(212, 175, 55, 0.4)";
                          }}
                        >
                          {isSubmitting ? "Sending..." : "Get VIP Access"}
                        </button>
                      </div>
                      {isSubmitted && (
                        <div style={{
                          marginTop: "20px",
                          padding: "20px",
                          background: "rgba(76, 175, 80, 0.2)",
                          borderRadius: "12px",
                          color: "#a5d6a7",
                          fontSize: "15px",
                          fontWeight: "600",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "10px"
                        }}>
                          <span style={{ fontSize: "24px" }}></span>
                          Thank you! You&apos;re on our exclusive VIP list.
                        </div>
                      )}
                      {errorMessage && (
                        <div style={{
                          marginTop: "20px",
                          padding: "20px",
                          background: "rgba(244, 67, 54, 0.2)",
                          borderRadius: "12px",
                          color: "#ffcdd2",
                          fontSize: "14px"
                        }}>
                          {errorMessage}
                        </div>
                      )}
                    </form>
                    <p style={{
                      marginTop: "20px",
                      fontSize: "13px",
                      color: "#999",
                      fontStyle: "italic"
                    }}>
                      Your information is safe with us. We respect your privacy.
                    </p>
                    <p style={{
                      marginTop: "15px",
                      fontSize: "14px",
                      color: "#d4af37"
                    }}>
                      Or contact us directly:<br />
                       support@techfieldsolution.com<br />
                       info@techfieldsolution.com<br />
                       +91 6290 218 436
                    </p>
                  </div>
                </div>

                <div className="row justify-content-center" style={{ gap: "20px" }} style={{ animation: "fadeInUp 1s ease-out 1.1s both" }}>
                  
                  <div className="col-md-6">
                    <div style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      margin: "10px",
                      padding: "35px 30px",
                      borderRadius: "20px",
                      backdropFilter: "blur(10px)",
                      height: "100%",
                      textAlign: "left"
                    }}>
                      <h5 style={{ 
                        fontSize: "22px", 
                        marginBottom: "25px", 
                        color: "#d4af37",
                        fontWeight: "700",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px"
                      }}>
                        <span style={{ fontSize: "28px" }}></span>
                        Contact Us
                      </h5>
                      <div>
                        <div style={{ marginBottom: "18px" }}>
                          <p style={{ fontSize: "12px", color: "#999", marginBottom: "5px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Phone</p>
                          <a href="tel:+916290218436" style={{ 
                            color: "#f4e5a1", 
                            textDecoration: "none",
                            fontSize: "18px",
                            fontWeight: "600"
                          }}>
                            +91 6290 218 436
                          </a>
                        </div>
                        <div style={{ marginBottom: "18px" }}>
                          <p style={{ fontSize: "12px", color: "#999", marginBottom: "5px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Email</p>
                          <a href="mailto:support@techfieldsolution.com" style={{ 
                            color: "#f4e5a1", 
                            textDecoration: "none",
                            fontSize: "15px",
                            fontWeight: "600",
                            display: "block"
                          }}>
                            support@techfieldsolution.com
                          </a>
                          <a href="mailto:info@techfieldsolution.com" style={{ 
                            color: "#f4e5a1", 
                            textDecoration: "none",
                            fontSize: "15px",
                            fontWeight: "600"
                          }}>
                            info@techfieldsolution.com
                          </a>
                        </div>
                        <div>
                          <p style={{ fontSize: "12px", color: "#999", marginBottom: "5px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Location</p>
                          <p style={{ color: "#b8b8b8", margin: "0", fontSize: "15px" }}>
                            Tech Avenue, Silicon Valley,<br />CA 94000 (Kolkata)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div style={{
                      background: "rgba(255, 255, 255, 0.05)",
                      margin: "10px",
                      padding: "35px 30px",
                      borderRadius: "20px",
                      backdropFilter: "blur(10px)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}>
                      <h5 style={{ 
                        fontSize: "22px", 
                        marginBottom: "25px", 
                        color: "#d4af37",
                        fontWeight: "700",
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "10px"
                      }}>
                        <span style={{ fontSize: "28px" }}></span>
                        Follow Our Journey
                      </h5>
                      <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
                        {[
                          { icon: "fab fa-facebook-f", bg: "#3b5998", url: "https://www.facebook.com/people/Tech-Field-Solution/61581618428487/" },
                          { icon: "fab fa-twitter", bg: "#000", url: "https://x.com/techfieldsol" },
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
                              width: "55px",
                              height: "55px",
                              borderRadius: "50%",
                              background: social.bg,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.3s ease",
                              textDecoration: "none",
                              boxShadow: "0 5px 20px rgba(0, 0, 0, 0.3)"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-5px) scale(1.1)";
                              e.currentTarget.style.boxShadow = "0 10px 30px rgba(212, 175, 55, 0.5)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0) scale(1)";
                              e.currentTarget.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.3)";
                            }}
                          >
                            <i className={social.icon} style={{ color: "#fff", fontSize: "20px" }}></i>
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
        
        @keyframes shimmer {
          0% { background-position: 0 0; }
          100% { background-position: 100px 100px; }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        input::placeholder {
          color: rgba(255, 255, 255, 0.5);
        }

        @media (max-width: 768px) {
          .col-sm-3 > div {
            padding: 25px 15px !important;
          }
          .col-sm-3 h3 {
            font-size: 36px !important;
          }
        }
      `}</style>
    </Wrapper>
  );
};

export default ComingSoon;