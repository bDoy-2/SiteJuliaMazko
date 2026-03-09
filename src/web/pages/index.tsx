import { useState, useEffect, useRef } from "react";
import { translations, type Lang } from "../lib/i18n";

const INSTAGRAM = "https://www.instagram.com/mazko27";
const TELEGRAM = "https://t.me/JMazko27";

const productImages = [
  "/product-shake.jpg",
  "/product-tea.jpg",
  "/product-aloe.jpg",
  "/product-bar.jpg",
];

function useScrollAnimation() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".scroll-animate").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function Index() {
  const [lang, setLang] = useState<Lang>("ru");
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[lang];
  useScrollAnimation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen font-sans bg-white">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Nunito:wght@300;400;500;600;700&display=swap');

        * { box-sizing: border-box; }
        body { font-family: 'Nunito', sans-serif; }

        .font-display { font-family: 'Playfair Display', serif; }

        :root {
          --green: #6abf69;
          --green-light: #c8e6c9;
          --green-pale: #f1f8f1;
          --purple: #9c6abf;
          --purple-light: #e1c8f5;
          --purple-pale: #f7f1fd;
          --purple-deep: #6a3d9c;
          --orange: #f5a623;
          --text: #2d2d2d;
          --text-muted: #6b7280;
        }

        .scroll-animate {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        .scroll-animate.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        .scroll-animate.delay-1 { transition-delay: 0.1s; }
        .scroll-animate.delay-2 { transition-delay: 0.2s; }
        .scroll-animate.delay-3 { transition-delay: 0.3s; }
        .scroll-animate.delay-4 { transition-delay: 0.4s; }

        .btn-primary {
          background: linear-gradient(135deg, var(--purple), var(--purple-deep));
          color: white;
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 20px rgba(156,106,191,0.3);
          text-decoration: none;
        }
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 30px rgba(156,106,191,0.45);
        }

        .btn-secondary {
          background: white;
          color: var(--purple);
          padding: 14px 32px;
          border-radius: 50px;
          font-weight: 700;
          font-size: 16px;
          border: 2px solid var(--purple);
          cursor: pointer;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }
        .btn-secondary:hover {
          background: var(--purple-pale);
          transform: translateY(-2px);
        }

        .btn-outline-green {
          background: transparent;
          color: var(--green);
          padding: 10px 24px;
          border-radius: 50px;
          font-weight: 700;
          border: 2px solid var(--green);
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 14px;
        }
        .btn-outline-green:hover {
          background: var(--green);
          color: white;
        }

        .lang-btn {
          padding: 5px 12px;
          border-radius: 20px;
          border: 1.5px solid #ddd;
          background: white;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          color: var(--text-muted);
        }
        .lang-btn.active {
          background: var(--purple);
          border-color: var(--purple);
          color: white;
        }
        .lang-btn:hover:not(.active) {
          border-color: var(--purple);
          color: var(--purple);
        }

        .nav-link {
          color: var(--text-muted);
          font-weight: 600;
          cursor: pointer;
          transition: color 0.2s;
          font-size: 15px;
          text-decoration: none;
          padding: 4px 0;
          border-bottom: 2px solid transparent;
        }
        .nav-link:hover {
          color: var(--purple);
          border-bottom-color: var(--purple);
        }

        .hero-section {
          background: linear-gradient(135deg, var(--green-pale) 0%, #fff 50%, var(--purple-pale) 100%);
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
        }
        .hero-section::before {
          content: '';
          position: absolute;
          top: -100px;
          right: -100px;
          width: 500px;
          height: 500px;
          background: radial-gradient(circle, rgba(156,106,191,0.12) 0%, transparent 70%);
          border-radius: 50%;
        }
        .hero-section::after {
          content: '';
          position: absolute;
          bottom: -80px;
          left: -80px;
          width: 400px;
          height: 400px;
          background: radial-gradient(circle, rgba(106,191,105,0.15) 0%, transparent 70%);
          border-radius: 50%;
        }

        .section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 700;
          color: var(--text);
          line-height: 1.2;
        }

        .product-card {
          background: white;
          border-radius: 20px;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.08);
          transition: all 0.3s ease;
          border: 1.5px solid rgba(156,106,191,0.1);
        }
        .product-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 12px 40px rgba(156,106,191,0.2);
        }

        .marathon-card {
          background: white;
          border-radius: 24px;
          padding: 32px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.07);
          border: 2px solid transparent;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .marathon-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, var(--purple), var(--green));
        }
        .marathon-card:hover {
          border-color: var(--purple-light);
          transform: translateY(-4px);
          box-shadow: 0 12px 40px rgba(156,106,191,0.15);
        }

        .review-card {
          background: white;
          border-radius: 20px;
          padding: 28px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.06);
          border-left: 4px solid var(--purple);
          transition: all 0.3s ease;
        }
        .review-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 32px rgba(156,106,191,0.15);
        }

        .stat-card {
          text-align: center;
          padding: 24px;
          background: white;
          border-radius: 16px;
          box-shadow: 0 4px 16px rgba(0,0,0,0.06);
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px 18px;
          border: 2px solid #e5e7eb;
          border-radius: 12px;
          font-family: 'Nunito', sans-serif;
          font-size: 15px;
          transition: border-color 0.2s;
          outline: none;
          color: var(--text);
          background: white;
        }
        .contact-form input:focus,
        .contact-form textarea:focus {
          border-color: var(--purple);
        }

        .social-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 14px 24px;
          border-radius: 14px;
          font-weight: 700;
          font-size: 15px;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .social-btn.instagram {
          background: linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888);
          color: white;
        }
        .social-btn.telegram {
          background: #0088cc;
          color: white;
        }
        .social-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 24px rgba(0,0,0,0.2);
        }

        .tag-purple { background: var(--purple-pale); color: var(--purple-deep); }
        .tag-green { background: var(--green-pale); color: #2d7a2d; }
        .tag-orange { background: #fff7ed; color: #c2410c; }

        .feature-check {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: var(--text-muted);
          padding: 4px 0;
        }
        .feature-check::before {
          content: '✓';
          color: var(--green);
          font-weight: 700;
          font-size: 16px;
          flex-shrink: 0;
        }

        .floating-leaf {
          position: absolute;
          opacity: 0.06;
          pointer-events: none;
        }

        .avatar-placeholder {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, var(--green-light), var(--purple-light));
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
          border-radius: inherit;
        }

        .hamburger {
          display: none;
          flex-direction: column;
          gap: 5px;
          cursor: pointer;
          padding: 4px;
        }
        .hamburger span {
          display: block;
          width: 24px;
          height: 2px;
          background: var(--text);
          border-radius: 2px;
          transition: all 0.3s;
        }

        @media (max-width: 768px) {
          .hamburger { display: flex; }
          .desktop-nav { display: none; }
          .mobile-menu {
            position: fixed;
            top: 68px;
            left: 0;
            right: 0;
            background: white;
            padding: 20px;
            box-shadow: 0 8px 24px rgba(0,0,0,0.1);
            z-index: 99;
            display: flex;
            flex-direction: column;
            gap: 16px;
          }
        }
      `}</style>

      {/* NAVBAR */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(255,255,255,0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.08)",
        padding: "14px 0",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <img src="/herbalife-logo.png" alt="Herbalife" style={{ height: 32, objectFit: "contain" }} />
            <span style={{ fontSize: 16, fontWeight: 700, color: "var(--purple-deep)", fontFamily: "'Playfair Display', serif" }}>Юлія</span>
          </div>

          <div className="desktop-nav" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {(["about","products","marathons","reviews","contact"] as const).map((key) => (
              <span key={key} className="nav-link" onClick={() => scrollTo(key)}>{t.nav[key]}</span>
            ))}
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            {(["ru","uk","en"] as Lang[]).map((l) => (
              <button key={l} className={`lang-btn ${lang === l ? "active" : ""}`} onClick={() => setLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span /><span /><span />
            </div>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {(["about","products","marathons","reviews","contact"] as const).map((key) => (
              <span key={key} className="nav-link" onClick={() => scrollTo(key)}>{t.nav[key]}</span>
            ))}
          </div>
        )}
      </nav>

      {/* HERO */}
      <section className="hero-section" style={{ paddingTop: 80 }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "60px 24px", width: "100%", position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}>
            <div>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "var(--purple-pale)", color: "var(--purple-deep)",
                padding: "8px 18px", borderRadius: 50, fontSize: 13, fontWeight: 700,
                marginBottom: 24, border: "1px solid var(--purple-light)"
              }}>
                <span>🌿</span> {t.hero.badge}
              </div>

              <h1 className="font-display" style={{
                fontSize: "clamp(52px, 7vw, 88px)",
                fontWeight: 700,
                color: "var(--purple-deep)",
                lineHeight: 1,
                marginBottom: 8,
              }}>
                {t.hero.title}
              </h1>

              <h2 style={{
                fontSize: "clamp(22px, 3vw, 32px)",
                fontWeight: 600,
                color: "var(--text)",
                lineHeight: 1.35,
                marginBottom: 24,
                whiteSpace: "pre-line",
              }}>
                {t.hero.subtitle}
              </h2>

              <p style={{ fontSize: 17, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 36, maxWidth: 500 }}>
                {t.hero.description}
              </p>

              <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
                <a href={TELEGRAM} target="_blank" rel="noreferrer" className="btn-primary">
                  🚀 {t.hero.cta}
                </a>
                <button className="btn-secondary" onClick={() => scrollTo("marathons")}>
                  {t.hero.ctaSecondary}
                </button>
              </div>

              <div style={{ marginTop: 40, display: "flex", gap: 32, flexWrap: "wrap" }}>
                {[
                  { num: "5+", label: t.about.fact1 },
                  { num: "200+", label: t.about.fact2 },
                  { num: "3", label: t.about.fact3 },
                ].map((item) => (
                  <div key={item.label}>
                    <div style={{ fontSize: 28, fontWeight: 800, color: "var(--purple-deep)", fontFamily: "'Playfair Display', serif" }}>{item.num}</div>
                    <div style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ display: "flex", justifyContent: "center" }}>
              <div style={{
                width: 420,
                height: 480,
                borderRadius: "60% 40% 55% 45% / 50% 45% 55% 50%",
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(156,106,191,0.25)",
                border: "4px solid white",
                background: "linear-gradient(135deg, var(--green-light), var(--purple-light))",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 100,
                maxWidth: "100%",
              }}>
                🌿
              </div>
            </div>
          </div>
        </div>

        {/* decorative circles */}
        <div style={{ position: "absolute", top: 120, right: "8%", width: 80, height: 80, borderRadius: "50%", background: "rgba(106,191,105,0.15)", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: 80, left: "12%", width: 50, height: 50, borderRadius: "50%", background: "rgba(156,106,191,0.15)", zIndex: 0 }} />
      </section>

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 70, alignItems: "center" }}>
            <div className="scroll-animate">
              <div style={{
                width: "100%",
                maxWidth: 420,
                height: 480,
                borderRadius: 32,
                background: "linear-gradient(135deg, var(--green-pale) 0%, var(--purple-pale) 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 100,
                position: "relative",
                overflow: "hidden",
                border: "2px solid var(--purple-light)",
              }}>
                👩‍💼
                <div style={{
                  position: "absolute", bottom: 24, left: 24, right: 24,
                  background: "rgba(255,255,255,0.9)",
                  backdropFilter: "blur(8px)",
                  borderRadius: 14,
                  padding: "14px 18px",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}>
                  <div style={{ fontWeight: 700, fontSize: 16, color: "var(--purple-deep)" }}>Юлія</div>
                  <div style={{ fontSize: 13, color: "var(--text-muted)" }}>Herbalife Supervisor</div>
                </div>
              </div>
            </div>

            <div>
              <p style={{ fontSize: 13, fontWeight: 700, color: "var(--green)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
                🌱 Herbalife Supervisor
              </p>
              <h2 className="section-title scroll-animate" style={{ marginBottom: 28 }}>{t.about.title}</h2>
              {[t.about.text1, t.about.text2, t.about.text3].map((text, i) => (
                <p key={i} className={`scroll-animate delay-${i+1}`} style={{ fontSize: 16, color: "var(--text-muted)", lineHeight: 1.75, marginBottom: 16 }}>
                  {text}
                </p>
              ))}

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 32 }}>
                {[
                  { num: "5+", label: t.about.fact1, icon: "⭐" },
                  { num: "200+", label: t.about.fact2, icon: "❤️" },
                  { num: "3", label: t.about.fact3, icon: "📋" },
                  { num: "10+", label: t.about.fact4, icon: "🏆" },
                ].map((item, i) => (
                  <div key={i} className={`stat-card scroll-animate delay-${i+1}`}>
                    <div style={{ fontSize: 24, marginBottom: 4 }}>{item.icon}</div>
                    <div style={{ fontSize: 26, fontWeight: 800, color: "var(--purple-deep)", fontFamily: "'Playfair Display', serif" }}>{item.num}</div>
                    <div style={{ fontSize: 12, color: "var(--text-muted)", fontWeight: 500 }}>{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" style={{ padding: "100px 24px", background: "var(--green-pale)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--green)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              🛍️ Herbalife Nutrition
            </p>
            <h2 className="section-title scroll-animate">{t.products.title}</h2>
            <p className="scroll-animate" style={{ fontSize: 17, color: "var(--text-muted)", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>{t.products.subtitle}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {t.products.items.map((item, i) => (
              <div key={i} className={`product-card scroll-animate delay-${i+1}`}>
                <div style={{ height: 220, overflow: "hidden", background: "#f9f9f9" }}>
                  <img
                    src={productImages[i]}
                    alt={item.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: 24 }}>
                  <span style={{
                    display: "inline-block",
                    background: "var(--purple-pale)", color: "var(--purple-deep)",
                    padding: "3px 12px", borderRadius: 50, fontSize: 12, fontWeight: 700, marginBottom: 10
                  }}>{item.tag}</span>
                  <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--text)", marginBottom: 10, fontFamily: "'Playfair Display', serif" }}>
                    {item.name}
                  </h3>
                  <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 18 }}>{item.desc}</p>
                  <a href={TELEGRAM} target="_blank" rel="noreferrer" className="btn-outline-green" style={{ display: "inline-block" }}>
                    {t.products.btn} →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARATHONS */}
      <section id="marathons" style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--purple)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              🏆 Онлайн-программы
            </p>
            <h2 className="section-title scroll-animate">{t.marathons.title}</h2>
            <p className="scroll-animate" style={{ fontSize: 17, color: "var(--text-muted)", marginTop: 12, maxWidth: 500, margin: "12px auto 0" }}>{t.marathons.subtitle}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 28 }}>
            {t.marathons.items.map((item, i) => (
              <div key={i} className={`marathon-card scroll-animate delay-${i+1}`}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: "var(--purple-pale)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: 28,
                  }}>{item.emoji}</div>
                  <span style={{
                    padding: "4px 14px", borderRadius: 50, fontSize: 12, fontWeight: 700,
                    ...(item.tagColor === "purple" ? { background: "var(--purple-pale)", color: "var(--purple-deep)" } :
                       item.tagColor === "green" ? { background: "var(--green-pale)", color: "#2d7a2d" } :
                       { background: "#fff7ed", color: "#c2410c" })
                  }}>{item.tag}</span>
                </div>

                <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", fontFamily: "'Playfair Display', serif", marginBottom: 4 }}>
                  {item.name}
                </h3>
                <p style={{ fontSize: 13, color: "var(--green)", fontWeight: 700, marginBottom: 14 }}>
                  ⏱ {item.duration}
                </p>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.65, marginBottom: 20 }}>
                  {item.desc}
                </p>

                <div style={{ marginBottom: 24 }}>
                  {item.features.map((f, fi) => (
                    <div key={fi} className="feature-check">{f}</div>
                  ))}
                </div>

                <a href={TELEGRAM} target="_blank" rel="noreferrer" className="btn-primary" style={{ display: "flex", justifyContent: "center" }}>
                  {t.marathons.btn}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" style={{ padding: "100px 24px", background: "var(--purple-pale)" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--purple)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              ⭐ Testimonials
            </p>
            <h2 className="section-title scroll-animate">{t.reviews.title}</h2>
            <p className="scroll-animate" style={{ fontSize: 17, color: "var(--text-muted)", marginTop: 12 }}>{t.reviews.subtitle}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
            {t.reviews.items.map((review, i) => (
              <div key={i} className={`review-card scroll-animate delay-${(i % 3) + 1}`}>
                <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                  {Array(review.stars).fill(0).map((_, si) => (
                    <span key={si} style={{ color: "#f5a623", fontSize: 18 }}>★</span>
                  ))}
                </div>
                <p style={{ fontSize: 15, color: "var(--text)", lineHeight: 1.7, marginBottom: 20, fontStyle: "italic" }}>
                  "{review.text}"
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: "50%",
                      background: "linear-gradient(135deg, var(--purple-light), var(--green-light))",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: 18, flexShrink: 0,
                    }}>👤</div>
                    <span style={{ fontWeight: 700, fontSize: 14, color: "var(--text)" }}>{review.name}</span>
                  </div>
                  <span style={{
                    background: "var(--green-pale)", color: "#2d7a2d",
                    padding: "4px 12px", borderRadius: 50, fontSize: 12, fontWeight: 700
                  }}>{review.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" style={{ padding: "100px 24px", background: "white" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: "var(--green)", letterSpacing: 2, textTransform: "uppercase", marginBottom: 12 }}>
              📩 Contact
            </p>
            <h2 className="section-title scroll-animate">{t.contact.title}</h2>
            <p className="scroll-animate" style={{ fontSize: 17, color: "var(--text-muted)", marginTop: 12 }}>{t.contact.subtitle}</p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50, alignItems: "start" }}>
            {/* Form */}
            <div className="scroll-animate">
              {formSent ? (
                <div style={{
                  background: "var(--green-pale)",
                  borderRadius: 20,
                  padding: "40px",
                  textAlign: "center",
                  border: "2px solid var(--green-light)",
                }}>
                  <div style={{ fontSize: 60, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontSize: 22, fontWeight: 700, color: "var(--text)", fontFamily: "'Playfair Display', serif", marginBottom: 8 }}>
                    {t.contact.successTitle}
                  </h3>
                  <p style={{ fontSize: 16, color: "var(--text-muted)" }}>{t.contact.successText}</p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <input
                    type="text"
                    placeholder={t.contact.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                  <input
                    type="email"
                    placeholder={t.contact.emailPlaceholder}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                  <textarea
                    placeholder={t.contact.messagePlaceholder}
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    style={{ resize: "vertical" }}
                  />
                  <button type="submit" className="btn-primary" style={{ justifyContent: "center" }}>
                    ✉️ {t.contact.btn}
                  </button>
                </form>
              )}
            </div>

            {/* Social links */}
            <div className="scroll-animate delay-1" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>{t.contact.orContact}</p>

              <a href={INSTAGRAM} target="_blank" rel="noreferrer" className="social-btn instagram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                {t.contact.instagram}
              </a>

              <a href={TELEGRAM} target="_blank" rel="noreferrer" className="social-btn telegram">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.96 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                {t.contact.telegram}
              </a>

              <div style={{
                marginTop: 16,
                background: "var(--purple-pale)",
                borderRadius: 16,
                padding: 20,
                border: "1px solid var(--purple-light)",
              }}>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6, marginBottom: 4 }}>
                  📸 <strong>Instagram:</strong> <a href={INSTAGRAM} target="_blank" rel="noreferrer" style={{ color: "var(--purple)", textDecoration: "none" }}>@mazko27</a>
                </p>
                <p style={{ fontSize: 14, color: "var(--text-muted)", lineHeight: 1.6 }}>
                  ✈️ <strong>Telegram:</strong> <a href={TELEGRAM} target="_blank" rel="noreferrer" style={{ color: "var(--purple)", textDecoration: "none" }}>@JMazko27</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{
        background: "var(--text)",
        color: "white",
        padding: "36px 24px",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
            <img src="/herbalife-logo.png" alt="Herbalife" style={{ height: 28, objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.8 }} />
          </div>
          <p style={{ fontSize: 14, opacity: 0.6, marginBottom: 4 }}>{t.footer.consultant}</p>
          <p style={{ fontSize: 13, opacity: 0.4 }}>
            © {new Date().getFullYear()} Юлія — {t.footer.rights}
          </p>
        </div>
      </footer>
    </div>
  );
}
