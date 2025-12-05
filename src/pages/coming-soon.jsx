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

  return (
    <Wrapper>
      <SEO pageTitle="Coming Soon" />
      <HeaderTwo style_2={true} />
      
      <section className="tp-coming-soon-area pt-80 pb-80" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-10 col-lg-10">
              <div className="tp-coming-soon-wrapper text-center">
                {/* Title */}
                <div className="tp-coming-soon-title mb-40">
                  <h2 className="tp-coming-soon-title-text" style={{ fontSize: "48px", fontWeight: "700", marginBottom: "20px" }}>
                    Something Exciting is Coming Soon!
                  </h2>
                  <p style={{ fontSize: "18px", color: "#55585B", marginBottom: "50px" }}>
                    We are working hard to bring you an amazing experience. Stay tuned!
                  </p>
                </div>

                {/* Countdown Timer */}
                <div className="tp-coming-soon-countdown mb-60">
                  <div className="row justify-content-center g-3">
                    <div className="col-6 col-sm-3">
                      <div className="tp-coming-soon-countdown-item" style={{ 
                        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                        padding: "30px 20px",
                        borderRadius: "15px",
                        boxShadow: "0 10px 30px rgba(102, 126, 234, 0.3)"
                      }}>
                        <h3 style={{ fontSize: "48px", fontWeight: "700", color: "#fff", marginBottom: "10px" }}>
                          {timeLeft.days}
                        </h3>
                        <p style={{ fontSize: "16px", color: "#fff", margin: "0" }}>Days</p>
                      </div>
                    </div>
                    <div className="col-6 col-sm-3">
                      <div className="tp-coming-soon-countdown-item" style={{ 
                        background: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                        padding: "30px 20px",
                        borderRadius: "15px",
                        boxShadow: "0 10px 30px rgba(245, 87, 108, 0.3)"
                      }}>
                        <h3 style={{ fontSize: "48px", fontWeight: "700", color: "#fff", marginBottom: "10px" }}>
                          {timeLeft.hours}
                        </h3>
                        <p style={{ fontSize: "16px", color: "#fff", margin: "0" }}>Hours</p>
                      </div>
                    </div>
                    <div className="col-6 col-sm-3">
                      <div className="tp-coming-soon-countdown-item" style={{ 
                        background: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                        padding: "30px 20px",
                        borderRadius: "15px",
                        boxShadow: "0 10px 30px rgba(79, 172, 254, 0.3)"
                      }}>
                        <h3 style={{ fontSize: "48px", fontWeight: "700", color: "#fff", marginBottom: "10px" }}>
                          {timeLeft.minutes}
                        </h3>
                        <p style={{ fontSize: "16px", color: "#fff", margin: "0" }}>Minutes</p>
                      </div>
                    </div>
                    <div className="col-6 col-sm-3">
                      <div className="tp-coming-soon-countdown-item" style={{ 
                        background: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                        padding: "30px 20px",
                        borderRadius: "15px",
                        boxShadow: "0 10px 30px rgba(67, 233, 123, 0.3)"
                      }}>
                        <h3 style={{ fontSize: "48px", fontWeight: "700", color: "#fff", marginBottom: "10px" }}>
                          {timeLeft.seconds}
                        </h3>
                        <p style={{ fontSize: "16px", color: "#fff", margin: "0" }}>Seconds</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Newsletter Subscription */}
                <div className="tp-coming-soon-subscribe mb-50">
                  <h4 style={{ fontSize: "24px", marginBottom: "20px" }}>Get Notified When We Launch</h4>
                  <form>
                    <div className="tp-coming-soon-subscribe-input" style={{ maxWidth: "500px", margin: "0 auto" }}>
                      <div className="input-group" style={{ display: "flex", gap: "10px", flexWrap: "wrap", justifyContent: "center" }}>
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Enter your email"
                          style={{
                            padding: "15px 20px",
                            border: "2px solid #E0E2E4",
                            borderRadius: "10px",
                            fontSize: "16px",
                            flex: "1",
                            minWidth: "250px"
                          }}
                        />
                        <button
                          type="submit"
                          className="tp-btn"
                          style={{
                            padding: "15px 30px",
                            background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                            color: "#fff",
                            border: "none",
                            borderRadius: "10px",
                            fontSize: "16px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "all 0.3s ease"
                          }}
                        >
                          Notify Me
                        </button>
                      </div>
                    </div>
                  </form>
                </div>

                {/* Contact Info */}
                <div className="tp-coming-soon-contact mb-40">
                  <h5 style={{ fontSize: "20px", marginBottom: "20px", fontWeight: "600" }}>Need Help? Contact Us</h5>
                  <div className="tp-coming-soon-contact-info" style={{ display: "flex", justifyContent: "center", gap: "40px", flexWrap: "wrap", marginBottom: "20px" }}>
                    <div>
                      <p style={{ marginBottom: "5px", color: "#55585B", fontSize: "14px" }}>Phone:</p>
                      <a href="tel:+916290218436" style={{ fontSize: "18px", fontWeight: "600", color: "#010f1c", textDecoration: "none" }}>
                        +91 6290 218 436
                      </a>
                    </div>
                    <div>
                      <p style={{ marginBottom: "5px", color: "#55585B", fontSize: "14px" }}>Email:</p>
                      <a href="mailto:support@techfieldsolution.com" style={{ fontSize: "18px", fontWeight: "600", color: "#010f1c", textDecoration: "none" }}>
                        support@techfieldsolution.com
                      </a>
                    </div>
                  </div>
                  <div>
                    <p style={{ marginBottom: "5px", color: "#55585B", fontSize: "14px" }}>Address:</p>
                    <p style={{ fontSize: "16px", color: "#55585B", margin: "0" }}>
                      Tech Avenue, Silicon Valley, CA 94000 (Kolkata)
                    </p>
                  </div>
                </div>

                {/* Social Media */}
                <div className="tp-coming-soon-social">
                  <h5 style={{ fontSize: "20px", marginBottom: "20px", fontWeight: "600" }}>Follow Us On</h5>
                  <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap" }}>
                    <a
                      href="https://www.facebook.com/people/Tech-Field-Solution/61581618428487/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: "#3b5998",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        textDecoration: "none"
                      }}
                    >
                      <i className="fab fa-facebook-f" style={{ color: "#fff", fontSize: "20px" }}></i>
                    </a>
                    <a
                      href="https://x.com/techfieldsol"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: "#000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        textDecoration: "none"
                      }}
                    >
                      <i className="fab fa-twitter" style={{ color: "#fff", fontSize: "20px" }}></i>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/techfieldsolution/"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: "#0077b5",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        textDecoration: "none"
                      }}
                    >
                      <i className="fab fa-linkedin-in" style={{ color: "#fff", fontSize: "20px" }}></i>
                    </a>
                    <a
                      href="https://www.instagram.com/techfieldsolution"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        textDecoration: "none"
                      }}
                    >
                      <i className="fab fa-instagram" style={{ color: "#fff", fontSize: "20px" }}></i>
                    </a>
                    <a
                      href="https://www.youtube.com/@techfieldsolution"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        background: "#ff0000",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        transition: "all 0.3s ease",
                        textDecoration: "none"
                      }}
                    >
                      <i className="fab fa-youtube" style={{ color: "#fff", fontSize: "20px" }}></i>
                    </a>
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
