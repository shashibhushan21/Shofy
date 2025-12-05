import React, { useState, useEffect } from "react";
import SEO from "@/components/seo";
import Wrapper from "@/layout/wrapper";
import HeaderTwo from "@/layout/headers/header-2";
import Footer from "@/layout/footers/footer";

const ComingSoon = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <Wrapper>
      <SEO pageTitle="Coming Soon - Luxury Jewelry Collection" />
      <HeaderTwo style_2={true} />
      
      <section 
        className="tp-coming-soon-area py-5" 
        style={{ 
          background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 50%, #f8f9fa 100%)",
          minHeight: "85vh",
          display: "flex",
          alignItems: "center",
          position: "relative"
        }}
      >
        <div style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: "radial-gradient(circle at 25% 25%, rgba(212, 175, 55, 0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(212, 175, 55, 0.03) 0%, transparent 50%)",
          pointerEvents: "none"
        }}></div>

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-11">
              <div className="text-center">
                
                <div className="mb-4">
                  <a href="/">
                    <img src="/assets/img/logo/logo.png" alt="Shofy Logo" style={{ maxWidth: "180px" }} />
                  </a>
                </div>

                <div className="mb-4">
                  <span style={{
                    display: "inline-block",
                    padding: "10px 30px",
                    background: "linear-gradient(135deg, #d4af37 0%, #f4e5a1 100%)",
                    color: "#1a1a2e",
                    fontSize: "13px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                    textTransform: "uppercase",
                    borderRadius: "50px",
                    boxShadow: "0 4px 20px rgba(212, 175, 55, 0.3)"
                  }}>
                    Exclusive Launch
                  </span>
                </div>

                <div className="mb-4">
                  <h1 style={{ 
                    fontSize: "clamp(36px, 5vw, 64px)", 
                    fontWeight: "700", 
                    marginBottom: "20px",
                    color: "#1a1a2e",
                    lineHeight: "1.2",
                    fontFamily: "'Playfair Display', serif"
                  }}>
                    Unveiling a New Era<br />
                    <span style={{ color: "#d4af37" }}>of Luxury Jewelry</span>
                  </h1>
                  <p style={{ 
                    fontSize: "clamp(18px, 2.5vw, 24px)", 
                    color: "#555", 
                    marginBottom: "30px",
                    fontWeight: "400"
                  }}>
                    Discover hand-crafted elegance in gold, diamonds & gemstones
                  </p>
                </div>

                <div className="mb-5" style={{ maxWidth: "700px", margin: "0 auto 50px" }}>
                  <p style={{
                    fontSize: "16px",
                    color: "#666",
                    lineHeight: "1.8",
                    marginBottom: "15px"
                  }}>
                    We're building an exclusive shopping experience designed for customers who value <span style={{color: "#d4af37", fontWeight: "600"}}>authenticity</span>, <span style={{color: "#d4af37", fontWeight: "600"}}>craftsmanship</span>, and <span style={{color: "#d4af37", fontWeight: "600"}}>luxury</span>.
                  </p>
                  <p style={{
                    fontSize: "16px",
                    color: "#666",
                    lineHeight: "1.8"
                  }}>
                    Our curated collection of premium jewelry will be live shortly. Stay connected - something exquisite is on the way.
                  </p>
                </div>

                <div className="mb-5">
                  <div className="row justify-content-center g-3">
                    {[
                      { value: timeLeft.days, label: "DAYS" },
                      { value: timeLeft.hours, label: "HOURS" },
                      { value: timeLeft.minutes, label: "MINUTES" },
                      { value: timeLeft.seconds, label: "SECONDS" }
                    ].map((item, index) => (
                      <div key={index} className="col-6 col-sm-3">
                        <div style={{ 
                          background: "#fff",
                          padding: "40px 20px",
                          borderRadius: "20px",
                          border: "2px solid #f0f0f0",
                          boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)"
                        }}>
                          <h3 style={{ 
                            fontSize: "56px", 
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

                <div className="mb-5" style={{ maxWidth: "650px", margin: "0 auto 50px" }}>
                  <div style={{
                    background: "#fff",
                    padding: "50px 40px",
                    borderRadius: "25px",
                    border: "2px solid #f0f0f0",
                    boxShadow: "0 15px 50px rgba(0, 0, 0, 0.1)"
                  }}>
                    <h4 style={{ 
                      fontSize: "28px", 
                      marginBottom: "12px",
                      color: "#1a1a2e",
                      fontWeight: "700"
                    }}>
                      Be the First to Know
                    </h4>
                    <p style={{
                      fontSize: "15px",
                      color: "#888",
                      marginBottom: "30px"
                    }}>
                      Enter your email or WhatsApp to receive early access & exclusive offers
                    </p>
                    <form onSubmit={handleSubmit}>
                      <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email address"
                          required
                          style={{
                            flex: "1",
                            minWidth: "280px",
                            padding: "18px 25px",
                            border: "2px solid #e5e5e5",
                            borderRadius: "12px",
                            fontSize: "15px",
                            background: "#fafafa",
                            color: "#333",
                            outline: "none",
                            transition: "all 0.3s ease"
                          }}
                          onFocus={(e) => {
                            e.target.style.borderColor = "#d4af37";
                            e.target.style.background = "#fff";
                          }}
                          onBlur={(e) => {
                            e.target.style.borderColor = "#e5e5e5";
                            e.target.style.background = "#fafafa";
                          }}
                        />
                        <button
                          type="submit"
                          style={{
                            padding: "18px 45px",
                            background: "linear-gradient(135deg, #d4af37 0%, #f4e5a1 100%)",
                            color: "#1a1a2e",
                            border: "none",
                            borderRadius: "12px",
                            fontSize: "15px",
                            fontWeight: "700",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                            boxShadow: "0 8px 25px rgba(212, 175, 55, 0.3)"
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.transform = "translateY(-2px)";
                            e.target.style.boxShadow = "0 12px 35px rgba(212, 175, 55, 0.5)";
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.transform = "translateY(0)";
                            e.target.style.boxShadow = "0 8px 25px rgba(212, 175, 55, 0.3)";
                          }}
                        >
                          Notify Me
                        </button>
                      </div>
                      {isSubmitted && (
                        <div style={{
                          marginTop: "20px",
                          padding: "15px",
                          background: "#f0f8f0",
                          border: "1px solid #d4af37",
                          borderRadius: "10px",
                          color: "#2c5f2d",
                          fontSize: "14px",
                          fontWeight: "600"
                        }}>
                          Thank you! You'll be the first to know when we launch.
                        </div>
                      )}
                    </form>
                  </div>
                </div>

                <div className="row justify-content-center g-4">
                  
                  <div className="col-md-6">
                    <div style={{
                      background: "#fff",
                      padding: "35px 30px",
                      borderRadius: "20px",
                      border: "2px solid #f0f0f0",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                      height: "100%",
                      textAlign: "left"
                    }}>
                      <h5 style={{ 
                        fontSize: "20px", 
                        marginBottom: "25px", 
                        color: "#1a1a2e",
                        fontWeight: "700"
                      }}>
                        Get in Touch
                      </h5>
                      <div>
                        <div style={{ marginBottom: "18px" }}>
                          <p style={{ fontSize: "12px", color: "#999", marginBottom: "5px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Phone</p>
                          <a href="tel:+916290218436" style={{ 
                            color: "#d4af37", 
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
                            color: "#d4af37", 
                            textDecoration: "none",
                            fontSize: "16px",
                            fontWeight: "600"
                          }}>
                            support@techfieldsolution.com
                          </a>
                        </div>
                        <div>
                          <p style={{ fontSize: "12px", color: "#999", marginBottom: "5px", fontWeight: "600", textTransform: "uppercase", letterSpacing: "1px" }}>Location</p>
                          <p style={{ color: "#666", margin: "0", fontSize: "15px" }}>
                            Tech Avenue, Silicon Valley,<br />CA 94000 (Kolkata)
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div style={{
                      background: "#fff",
                      padding: "35px 30px",
                      borderRadius: "20px",
                      border: "2px solid #f0f0f0",
                      boxShadow: "0 10px 40px rgba(0, 0, 0, 0.08)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center"
                    }}>
                      <h5 style={{ 
                        fontSize: "20px", 
                        marginBottom: "25px", 
                        color: "#1a1a2e",
                        fontWeight: "700",
                        textAlign: "center"
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
                              width: "55px",
                              height: "55px",
                              borderRadius: "50%",
                              background: social.bg,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              transition: "all 0.3s ease",
                              textDecoration: "none",
                              boxShadow: "0 5px 20px rgba(0, 0, 0, 0.15)"
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform = "translateY(-5px)";
                              e.currentTarget.style.boxShadow = "0 8px 30px rgba(0, 0, 0, 0.25)";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)";
                              e.currentTarget.style.boxShadow = "0 5px 20px rgba(0, 0, 0, 0.15)";
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
    </Wrapper>
  );
};

export default ComingSoon;