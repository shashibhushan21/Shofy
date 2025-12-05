/* src/styles/comingSoon.module.css */

/* Fonts: Playfair Display for headings, Montserrat for body */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Montserrat:wght@400;500;600&display=swap');

:root {
  --navy: #07112a;
  --midnight: #091229;
  --gold: #D4AE3A;
  --gold-deep: #B8862E;
  --cream: #FFF9F2;
  --muted: #BDBDBD;
  --white: #FFFFFF;

  --glass-bg: rgba(255,255,255,0.03);
  --glass-border: rgba(212,174,58,0.25);
}

.page {
  min-height: 100vh;
  background: radial-gradient(1200px 800px at 10% 10%, #0c1838 0%, var(--navy) 50%, var(--midnight) 100%);
  color: var(--white);
  font-family: 'Montserrat', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;
  position: relative;
  overflow-x: hidden;
}

/* Soft gold glow elements */
.glowA, .glowB {
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);
  opacity: 0.35;
  animation: float 15s ease-in-out infinite;
  z-index: 0;
}
.glowA {
  width: 520px; height: 520px;
  left: -120px; top: -120px;
  background: radial-gradient(circle, rgba(212,174,58,0.25), rgba(184,134,46,0.06));
}
.glowB {
  width: 420px; height: 420px;
  right: -140px; bottom: -120px;
  background: radial-gradient(circle, rgba(184,134,46,0.25), rgba(212,174,58,0.06));
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0) translateX(0); }
  50% { transform: translateY(-12px) translateX(8px); }
}

/* Hero background texture using next/image fill */
.heroBg {
  position: absolute;
  inset: 0;
  z-index: 0;
}

/* Hero section */
.hero {
  position: relative;
  z-index: 1;
  padding: 88px 24px 24px;
  text-align: center;
  max-width: 1100px;
  margin: 0 auto;
}

.logoWrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 24px;
  opacity: 0.95;
}

.headline {
  font-family: 'Playfair Display', Georgia, 'Times New Roman', serif;
  font-weight: 700;
  font-size: clamp(40px, 6vw, 72px);
  letter-spacing: 0.4px;
  line-height: 1.1;
  margin: 12px auto 12px;
  max-width: 900px;
  color: var(--white);
  text-shadow: 0 2px 24px rgba(0,0,0,0.35);
}

.subheadline {
  font-size: clamp(18px, 2.2vw, 24px);
  color: var(--muted);
  margin-bottom: 16px;
}

.lead {
  font-size: clamp(16px, 1.8vw, 18px);
  color: #e7e7e7;
  margin: 8px auto;
  max-width: 900px;
}

/* Countdown */
.countdown {
  display: inline-flex;
  gap: 18px;
  padding: 14px 18px;
  margin-top: 20px;
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
}
.countItem {
  display: grid;
  place-items: center;
}
.countItem strong {
  font-size: 22px;
  color: var(--gold);
}
.countItem label {
  font-size: 12px;
  color: var(--muted);
}

/* Teaser silhouettes */
.teasers {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding: 16px 24px 32px;
}
.teaserItem {
  opacity: 0.75;
  filter: drop-shadow(0 8px 28px rgba(0,0,0,0.35));
  transform: translateY(0);
  transition: transform 400ms ease, opacity 400ms ease;
}
.teaserItem:hover { transform: translateY(-4px); opacity: 0.9; }

/* Features (glassmorphism panel) */
.features {
  display: grid;
  grid-template-columns: repeat(4, minmax(180px, 1fr));
  gap: 18px;
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
}
.featureCard {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 18px;
  background: var(--glass-bg);
  backdrop-filter: blur(8px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  box-shadow: inset 0 -6px 18px rgba(0,0,0,0.25), 0 12px 28px rgba(0,0,0,0.25);
}
.featureTitle {
  font-family: 'Playfair Display', serif;
  font-size: 16px;
  color: var(--white);
  margin: 0 0 6px;
}
.featureText {
  font-size: 14px;
  color: var(--muted);
  margin: 0;
}

/* Product previews */
.products {
  display: grid;
  grid-template-columns: repeat(2, minmax(240px, 1fr));
  gap: 24px;
  padding: 24px;
  max-width: 1100px;
  margin: 0 auto;
}
.productCard {
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 16px 36px rgba(0,0,0,0.35);
}

/* Form */
.formWrap {
  padding: 32px 24px 64px;
}
.formCard {
  max-width: 960px;
  margin: 0 auto;
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(8px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  box-shadow: inset 0 -6px 18px rgba(0,0,0,0.25), 0 18px 44px rgba(0,0,0,0.35);
  padding: 32px 24px;
}
.formTitle {
  font-family: 'Playfair Display', serif;
  font-size: clamp(28px, 3vw, 36px);
  margin: 0 0 8px;
}
.formSubtitle {
  color: var(--muted);
  margin: 0 0 18px;
}

.form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
}
.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.field label {
  font-size: 14px;
  color: var(--muted);
}
.field input,
.field textarea {
  background: rgba(7,17,42,0.5);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  padding: 14px 14px;
  color: var(--white);
  outline: none;
  transition: border-color 200ms ease, box-shadow 200ms ease;
}
.field input:focus,
.field textarea:focus {
  border-color: var(--gold);
  box-shadow: 0 0 0 3px rgba(212,174,58,0.25);
}
.field textarea {
  grid-column: 1 / -1;
}

.actions {
  grid-column: 1 / -1;
  display: flex;
  gap: 12px;
  margin-top: 4px;
}

.btnPrimary {
  appearance: none;
  border: none;
  border-radius: 12px;
  padding: 16px 36px;
  color: #0b0b0b;
  background: linear-gradient(135deg, var(--gold), var(--gold-deep));
  box-shadow: 0 10px 24px rgba(212,174,58,0.25), inset 0 -2px 0 rgba(0,0,0,0.15);
  cursor: pointer;
  transition: transform 120ms ease, box-shadow 180ms ease;
}
.btnPrimary:hover { transform: translateY(-1px); box-shadow: 0 14px 30px rgba(212,174,58,0.35); }

.btnSecondary {
  appearance: none;
  background: transparent;
  color: var(--gold);
  border: 2px solid var(--gold);
  border-radius: 12px;
  padding: 14px 32px;
  cursor: pointer;
  transition: background-color 160ms ease, color 160ms ease;
}
.btnSecondary:hover { background: var(--white); color: #0b0b0b; }

.status { color: var(--muted); margin-top: 8px; }
.error { color: #ffb3b3; }
.success { color: #A6E3A1; }

.noscript {
  margin-top: 16px;
  color: var(--muted);
  font-size: 14px;
}

/* Footer */
.footer {
  padding: 18px 24px 42px;
  text-align: center;
  color: var(--muted);
}
.socialRow {
  display: flex;
  gap: 16px;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
}
.social {
  display: inline-flex;
  width: 36px; height: 36px;
  align-items: center; justify-content: center;
  border-radius: 50%;
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.12);
  transition: transform 120ms ease, background 160ms ease;
}
.social:hover { transform: translateY(-1px); background: rgba(255,255,255,0.12); }
.contact a { color: var(--gold); text-decoration: none; }

/* Responsive */
@media (max-width: 1024px) {
  .features { grid-template-columns: repeat(2, 1fr); }
  .products { grid-template-columns: 1fr; }
}
@media (max-width: 640px) {
  .form { grid-template-columns: 1fr; }
  .features { grid-template-columns: 1fr; }
  .teasers { gap: 12px; }
}
