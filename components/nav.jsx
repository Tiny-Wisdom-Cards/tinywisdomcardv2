import React from 'react';
// nav.jsx — Storybook Playful chrome

function Logo({ scale = 1, color = "auto" }) {
  const src = "/assets/TWC Logo.svg";
  const filter = color === "light" ? "brightness(0) invert(1)" : "none";
  return (
    <div style={{
      display: "inline-flex", alignItems: "center",
      transform: `scale(${scale})`, transformOrigin: "left center",
    }}>
      <img
        src={src}
        alt="Tiny Wisdom Cards"
        width={216}
        height={72}
        style={{ height: 72, width: "auto", display: "block", filter }}
      />
    </div>
  );
}

function TopNav({ page, onNav, scrolled, onOrder }) {
  const items = [
    { id: "home", label: "Home" },
    { id: "deck", label: "A–Z Deck" },
    { id: "kakha", label: "Ka–Kha Deck", badge: "New" },
    { id: "cotd", label: "Card of Day" },
    { id: "bulk", label: "Bulk" },
    { id: "community", label: "Stories" },
  ];
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => { setOpen(false); }, [page]);
  return (
    <header style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      padding: "16px 0",
      background: scrolled ? "rgba(255, 232, 194, 0.88)" : "transparent",
      backdropFilter: scrolled ? "saturate(140%) blur(8px)" : "none",
      transition: "background .3s",
    }}>
      <div className="container" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
      }}>
        <a href="#home" onClick={(e) => { e.preventDefault(); onNav("home"); }} style={{ cursor: "pointer", display: "flex" }}>
          <Logo />
        </a>

        <nav className="nav-desktop" style={{
          display: "flex", alignItems: "center", gap: 2,
          background: "var(--paper)",
          border: "2.5px solid var(--ink)",
          borderRadius: 999, padding: 4,
          boxShadow: "var(--shadow-stk-sm)",
        }}>
          {items.map(it => (
            <a key={it.id} href={"#" + it.id} onClick={(e) => { e.preventDefault(); onNav(it.id); }} style={{
              cursor: "pointer",
              padding: "9px 14px",
              borderRadius: 999,
              fontSize: 13.5,
              fontWeight: 700,
              color: page === it.id ? "var(--paper)" : "var(--ink)",
              background: page === it.id ? "var(--saffron)" : "transparent",
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              transition: "background .2s",
              whiteSpace: "nowrap",
            }}>
              {it.label}
              {it.badge && (
                <span style={{
                  fontFamily: "var(--font-hand)", fontSize: 16, fontWeight: 700,
                  color: page === it.id ? "#fff" : "var(--saffron)",
                  marginLeft: 2, lineHeight: 1,
                  transform: "rotate(-8deg)",
                  display: "inline-block",
                }}>{it.badge}!</span>
              )}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <button className="btn btn-ink nav-order" onClick={() => onOrder({ az: true, kakha: true })}>
            Order ✦
          </button>
          {/* Mobile hamburger */}
          <button onClick={() => setOpen(o => !o)} aria-label="Menu" className="nav-burger" style={{
            display: "none",
            width: 48, height: 48,
            borderRadius: 999,
            background: "var(--paper)",
            border: "2.5px solid var(--ink)",
            boxShadow: "var(--shadow-stk-sm)",
            cursor: "pointer",
            padding: 0,
            alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: 4,
          }}>
            <span style={{ width: 18, height: 2, background: "var(--ink)", borderRadius: 2 }} />
            <span style={{ width: 18, height: 2, background: "var(--ink)", borderRadius: 2 }} />
            <span style={{ width: 18, height: 2, background: "var(--ink)", borderRadius: 2 }} />
          </button>
        </div>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <div className="container" style={{ paddingTop: 16 }}>
          <nav style={{
            background: "var(--paper)",
            border: "2.5px solid var(--ink)",
            borderRadius: 18,
            padding: 12,
            display: "grid", gap: 4,
            boxShadow: "var(--shadow-stk)",
          }}>
            {items.map(it => (
              <a key={it.id} href={"#" + it.id} onClick={(e) => { e.preventDefault(); onNav(it.id); }} style={{
                cursor: "pointer",
                padding: "12px 16px",
                borderRadius: 12,
                fontSize: 15, fontWeight: 700,
                color: page === it.id ? "var(--paper)" : "var(--ink)",
                background: page === it.id ? "var(--saffron)" : "transparent",
                display: "flex", alignItems: "center", gap: 8,
              }}>
                {it.label}
                {it.badge && (
                  <span style={{
                    fontFamily: "var(--font-hand)", fontSize: 18, color: "var(--saffron)",
                    lineHeight: 1, transform: "rotate(-8deg)", display: "inline-block",
                  }}>{it.badge}!</span>
                )}
              </a>
            ))}
          </nav>
        </div>
      )}

      <style>{`
        /* compact nav above 1200px is fine; below show hamburger */
        @media (max-width: 1100px) {
          .nav-desktop { display: none !important; }
          .nav-order { display: none !important; }
          .nav-burger { display: inline-flex !important; }
        }
      `}</style>
    </header>
  );
}

function StickyCTA({ onClick, visible }) {
  return (
    <>
      <div className={`sticky-cta${visible ? " sticky-cta--visible" : ""}`}>
        <span>The Ka–Kha is on preorder · <b>Rs 300</b></span>
        <button onClick={onClick} className="sticky-cta__btn">
          Reserve →
        </button>
      </div>
      <style>{`
        .sticky-cta {
          position: fixed;
          bottom: 24px;
          left: 50%;
          transform: translateX(-50%) translateY(120px);
          opacity: 0;
          transition: transform .4s cubic-bezier(.2,.8,.2,1), opacity .3s;
          z-index: 40;
          background: var(--saffron);
          color: var(--paper);
          border-radius: 999px;
          padding: 10px 10px 10px 22px;
          border: 2.5px solid var(--ink);
          box-shadow: 6px 6px 0 var(--ink);
          display: flex;
          align-items: center;
          gap: 14px;
          font-size: 15px;
          font-weight: 700;
        }
        .sticky-cta--visible {
          transform: translateX(-50%) translateY(0);
          opacity: 1;
        }
        .sticky-cta__btn {
          background: var(--ink);
          color: var(--paper);
          border: 2px solid var(--ink);
          border-radius: 999px;
          padding: 10px 18px;
          font-weight: 800;
          font-size: 14px;
          cursor: pointer;
          white-space: nowrap;
          flex-shrink: 0;
          font-family: inherit;
        }
        @media (max-width: 520px) {
          .sticky-cta {
            flex-direction: column;
            align-items: stretch;
            border-radius: 20px;
            padding: 16px 18px;
            gap: 12px;
            left: 16px;
            right: 16px;
            width: auto;
            transform: translateY(120px);
          }
          .sticky-cta--visible {
            transform: translateY(0);
          }
          .sticky-cta__btn {
            width: 100%;
            text-align: center;
            padding: 12px 18px;
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
}

function Footer({ onNav }) {
  return (
    <footer className="site-footer">
      {/* Decorative bubbles */}
      <div className="bubble" style={{ width: 200, height: 200, background: "var(--saffron)", top: -80, right: -60, opacity: 0.16 }} />
      <div className="bubble" style={{ width: 140, height: 140, background: "var(--sage)", bottom: 40, left: -50, opacity: 0.18 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr 1fr 1fr", gap: 48 }} className="footer-grid">
          <div>
            <Logo color="light" />
            <p style={{ color: "rgba(255,248,231,0.7)", marginTop: 20, maxWidth: "32ch", fontSize: 15, lineHeight: 1.6 }}>
              Story-rich learning decks for curious hands aged 3+. Lovingly made in Kathmandu, shipped anywhere.
            </p>
            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              {[
                { label: "Instagram", url: "https://www.instagram.com/tinywisdomcards", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg> },
                { label: "Facebook", url: "https://www.facebook.com/tinywisdomcards/", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg> },
                { label: "TikTok", url: "https://www.tiktok.com/@tinywisdomcards", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z" /></svg> },
                { label: "YouTube", url: "https://www.youtube.com/@tinywisdomcards", icon: <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg> },
              ].map(s => (
                <a key={s.label} href={s.url} target="_blank" rel="noreferrer" aria-label={s.label} style={{
                  width: 40, height: 40, borderRadius: 999,
                  border: "2px solid rgba(255,248,231,0.4)",
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(255,248,231,0.08)", color: "var(--paper)",
                  transition: "background .2s, border-color .2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,248,231,0.2)"; e.currentTarget.style.borderColor = "var(--paper)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,248,231,0.08)"; e.currentTarget.style.borderColor = "rgba(255,248,231,0.4)"; }}
                >{s.icon}</a>
              ))}
            </div>
          </div>
          <div>
            <div className="label" style={{ color: "var(--peach)", marginBottom: 18 }}>Explore</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10, fontSize: 15 }}>
              <li><a href="#deck" onClick={(e) => { e.preventDefault(); onNav("deck"); }} style={{ cursor: "pointer" }}>The A–Z Deck</a></li>
              <li><a href="#kakha" onClick={(e) => { e.preventDefault(); onNav("kakha"); }} style={{ cursor: "pointer" }}>Ka–Kha Deck <span style={{ fontFamily: "var(--font-hand)", color: "var(--saffron)", marginLeft: 4 }}>new!</span></a></li>
              <li><a href="#cotd" onClick={(e) => { e.preventDefault(); onNav("cotd"); }} style={{ cursor: "pointer" }}>Card of the Day</a></li>
              <li><a href="#bulk" onClick={(e) => { e.preventDefault(); onNav("bulk"); }} style={{ cursor: "pointer" }}>Bulk Orders</a></li>
              <li><a href="#community" onClick={(e) => { e.preventDefault(); onNav("community"); }} style={{ cursor: "pointer" }}>Stories</a></li>
            </ul>
          </div>
          <div>
            <div className="label" style={{ color: "var(--peach)", marginBottom: 18 }}>Find Us</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10, fontSize: 15, color: "rgba(255,248,231,0.8)" }}>
              <li>Tinkune, Subidhanagar 44600</li>
              <li>Kathmandu, Nepal</li>
              <li>tinywisdomcards@gmail.com</li>
              <li>+977 9705812366</li>
            </ul>
          </div>
          <div>
            <FooterStoreList />
          </div>
        </div>
        <div style={{
          marginTop: 64, paddingTop: 24,
          borderTop: "1.5px dashed rgba(255,248,231,0.18)",
          display: "flex", justifyContent: "space-between", alignItems: "center",
          color: "rgba(255,248,231,0.5)", fontSize: 13,
        }} className="footer-bottom">
          <span>© 2025 Tiny Wisdom Cards · Made with care in Nepal <span style={{ fontFamily: "var(--font-hand)", color: "var(--peach)", fontSize: 18 }}>✦</span></span>
          <div style={{ display: "flex", gap: 24 }}>
            <button onClick={() => onNav("privacy")} style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "rgba(255,248,231,0.5)", fontSize: 13, fontFamily: "inherit" }}>Privacy</button>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
          .footer-bottom { flex-direction: column; gap: 14px; }
        }
        @media (max-width: 520px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}

/* Decorative components used across pages */

function Bubble({ size, color = "var(--peach)", style }) {
  return <div className="bubble" style={{ width: size, height: size, background: color, ...style }} />;
}

function Squiggle({ color = "var(--saffron)", width = 120, style }) {
  return (
    <svg className="squiggle" width={width} height={width / 3.5} viewBox="0 0 120 34" style={style} aria-hidden="true">
      <path d="M5 17 Q20 2 35 17 T65 17 T95 17 T115 17" stroke={color} strokeWidth="3" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function Star({ size = 24, color = "var(--saffron)", style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={style} aria-hidden="true">
      <path d="M12 2 L14 9 L21 10 L16 14 L17.5 21 L12 17 L6.5 21 L8 14 L3 10 L10 9 Z" fill={color} stroke="var(--ink)" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

function StickerBadge({ children, color = "var(--sage)", rotate = -8, style }) {
  return (
    <div style={{
      display: "inline-flex", alignItems: "center", justifyContent: "center",
      background: color, color: "var(--ink)",
      border: "2.5px solid var(--ink)",
      borderRadius: 18,
      padding: "10px 16px",
      fontFamily: "var(--font-hand)", fontSize: 22, fontWeight: 700,
      lineHeight: 1, textAlign: "center",
      transform: `rotate(${rotate}deg)`,
      boxShadow: "4px 4px 0 var(--ink)",
      ...style,
    }}>{children}</div>
  );
}


function FooterStoreList() {
  const [openStore, setOpenStore] = React.useState(null);
  const [popupPos, setPopupPos] = React.useState({ top: 0, left: 0 });
  const btnRefs = React.useRef([]);

  // Only attach close listener when popup is open, deferred by one tick
  // so the button's own click doesn't immediately close it.
  React.useEffect(() => {
    if (openStore === null) return;
    const close = () => setOpenStore(null);
    const timer = setTimeout(() => {
      document.addEventListener("click", close, { once: true });
    }, 0);
    return () => {
      clearTimeout(timer);
      document.removeEventListener("click", close);
    };
  }, [openStore]);

  const handleOpen = (i) => {
    if (openStore === i) { setOpenStore(null); return; }
    const rect = btnRefs.current[i].getBoundingClientRect();
    setPopupPos({ top: rect.top - 100, left: rect.left });
    setOpenStore(i);
  };

  const stores = [
    { name: "Daraz.com.np", darazUrl: "https://www.daraz.com.np/products/a-z-learning-cards-tiny-wisdom-cards-ancient-wisdom-hindu-gods-and-goddess-i495355514-s2219645084.html" },
    { name: "Bookverse", instaUrl: "https://www.instagram.com/bookverse.np/?hl=en", mapUrl: "https://maps.app.goo.gl/nYxRUVEmXQqdDsiA6" },
    { name: "Patan Book Shop", instaUrl: "https://www.instagram.com/patan_book_shop/", mapUrl: "https://maps.app.goo.gl/zKBmS2u4Gm1yLkGp9" },
    { name: "Nepal Book Depot", instaUrl: "https://www.instagram.com/biblionepal", mapUrl: "https://maps.app.goo.gl/4cqAYog5YFwtVgnC7" },
    { name: "Tibet Book Store", instaUrl: "https://www.instagram.com/book_store890/", mapUrl: "https://maps.app.goo.gl/8aWSEupp1yPYaiia8" },
    { name: "Pilgrims Book House", instaUrl: "https://www.instagram.com/pilgrimsbookhouse/?hl=en", mapUrl: "https://maps.app.goo.gl/pK7XwgAEzHRDm5jE7" },
    { name: "Vajra Books", instaUrl: "https://www.instagram.com/vajra.books/", mapUrl: "https://maps.app.goo.gl/eb4rQ9jB4JEwDZLH7" },
  ];

  const linkStyle = { color: "rgba(255,248,231,0.8)", textDecoration: "none", fontWeight: 600, borderBottom: "1px dashed rgba(255,248,231,0.3)", paddingBottom: 1, cursor: "pointer" };
  const popupLinkStyle = { display: "flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 700, color: "var(--ink)", textDecoration: "none" };

  return (
    <div>
      <div className="label" style={{ color: "var(--peach)", marginBottom: 18 }}>Available At</div>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 8, fontSize: 15 }}>
        {stores.map((s, i) => (
          <li key={i}>
            {s.darazUrl ? (
              <a href={s.darazUrl} target="_blank" rel="noreferrer" style={linkStyle}
                onMouseEnter={e => e.currentTarget.style.color = "var(--paper)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,248,231,0.8)"}
              >{s.name} ↗</a>
            ) : (
              <button
                ref={el => btnRefs.current[i] = el}
                onClick={() => handleOpen(i)}
                style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: "rgba(255,248,231,0.8)", fontSize: 15, fontWeight: 600, borderBottom: "1px dashed rgba(255,248,231,0.3)", paddingBottom: 1, fontFamily: "inherit" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--paper)"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(255,248,231,0.8)"}
              >{s.name} ↗</button>
            )}
          </li>
        ))}
      </ul>

      {/* Fixed popup — escapes overflow:hidden on footer */}
      {openStore !== null && stores[openStore] && !stores[openStore].darazUrl && (
        <div
          onClick={e => e.stopPropagation()}
          style={{
            position: "fixed",
            top: popupPos.top - 90,
            left: popupPos.left,
            background: "var(--paper)", border: "2px solid var(--ink)",
            borderRadius: 14, padding: "10px 12px",
            boxShadow: "4px 4px 0 var(--ink)",
            display: "flex", flexDirection: "column", gap: 8,
            zIndex: 9998, minWidth: 170,
          }}
        >
          <a href={stores[openStore].instaUrl} target="_blank" rel="noreferrer" style={popupLinkStyle}
            onMouseEnter={e => e.currentTarget.style.color = "var(--saffron)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--ink)"}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
            Instagram
          </a>
          <a href={stores[openStore].mapUrl} target="_blank" rel="noreferrer" style={popupLinkStyle}
            onMouseEnter={e => e.currentTarget.style.color = "var(--saffron)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--ink)"}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
            View on Map
          </a>
        </div>
      )}
    </div>
  );
}

export { Logo, TopNav, StickyCTA, Footer, Bubble, Squiggle, Star, StickerBadge };

