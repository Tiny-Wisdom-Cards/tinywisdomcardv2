import React from 'react';
import { Bubble, Squiggle, Star, StickerBadge } from './nav.jsx';
// home.jsx — Storybook Playful homepage

// Split a string into grapheme clusters (handles Devanagari conjuncts like क्ष, त्र, ज्ञ)
export function splitGraphemes(str) {
  if (typeof Intl !== "undefined" && Intl.Segmenter) {
    return [...new Intl.Segmenter("hi", { granularity: "grapheme" }).segment(str)].map(s => s.segment);
  }
  // Fallback: spread operator handles basic Unicode code points
  return [...str];
}

function AlphabetMarquee({ accent = "var(--saffron)" }) {
  const latin = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const deva = splitGraphemes("कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञअआइईउऊएऐओऔअंअः");

  const latinTrack = [...latin, ...latin, ...latin];
  const devaTrack = [...deva, ...deva];

  return (
    <div style={{ display: "grid", gap: 4 }}>
      {/* Row 1 — Latin, left-to-right */}
      <div className="marquee-track" style={{ padding: "10px 0" }}>
        <div className="marquee" style={{ alignItems: "baseline" }}>
          {latinTrack.map((c, i) => (
            <span key={i} style={{
              fontFamily: "var(--font-display)",
              fontSize: 50, fontWeight: 800,
              color: i % 6 === 0 ? accent : "var(--paper)",
              lineHeight: 1, flexShrink: 0, letterSpacing: "-0.03em",
            }}>{c}</span>
          ))}
        </div>
      </div>
      {/* Divider */}
      <div style={{ height: 1, background: "rgba(255,248,231,0.2)" }} />
      {/* Row 2 — Devanagari, right-to-left */}
      <div className="marquee-track" style={{ padding: "10px 0" }}>
        <div className="marquee marquee-reverse" style={{ alignItems: "baseline" }}>
          {devaTrack.map((c, i) => (
            <span key={i} className="deva" style={{
              fontSize: 58, fontWeight: 500,
              color: i % 6 === 0 ? accent : "var(--paper)",
              lineHeight: 1, flexShrink: 0,
            }}>{c}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

function HomeHero({ onNav }) {
  return (
    <section className="surface-cream" style={{ position: "relative", overflow: "hidden", paddingTop: 16 }}>
      {/* Background bubbles */}
      <Bubble size={300} color="var(--peach)" style={{ top: -100, right: -80 }} />
      <Bubble size={120} color="var(--sage)" style={{ top: 140, right: 320 }} />
      <Bubble size={60} color="var(--saffron)" style={{ top: 60, left: "44%" }} />
      <Bubble size={280} color="var(--sage)" style={{ bottom: -130, left: -80 }} />
      <Bubble size={70} color="var(--saffron)" style={{ bottom: 180, left: 280 }} />
      <Squiggle width={140} color="var(--saffron)" style={{ top: 100, left: 80 }} />
      <Squiggle width={100} color="var(--sage-deep)" style={{ bottom: 220, right: 180 }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-grid" style={{
          display: "grid", gridTemplateColumns: "1.1fr 1fr",
          gap: 56, alignItems: "center",
          paddingTop: 48, paddingBottom: 96,
        }}>
          <div>
            <div className="chip chip-saffron" style={{ marginBottom: 28 }}>
              <Star size={14} color="var(--paper)" /> Ka–Kha preorder is open · ships May 2026
            </div>

            <h1 className="h-display">
              Little <span className="ink-pill">cards</span><br />
              with big<br />
              <span className="hand">wisdom</span> inside.
            </h1>

            <p className="lede" style={{ marginTop: 28 }}>
              Tiny Wisdom Cards are story-rich learning decks for curious hands aged three and up — a bilingual library of letters, legends and values, illustrated in Kathmandu.
            </p>

            <div style={{ display: "flex", gap: 14, marginTop: 40, alignItems: "center", flexWrap: "wrap" }}>
              <button className="btn btn-ink btn-lg btn-arrow" onClick={() => onNav("deck")}>
                Explore both decks
              </button>
              <button className="btn btn-lg" onClick={() => onNav("cotd")}>
                ✦ Card of the Day
              </button>
              <span style={{
                fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--saffron)",
                fontWeight: 700, transform: "rotate(-4deg)", display: "inline-block",
                marginLeft: 8,
              }}>save 30% on bundle! ↗</span>
            </div>

            <div style={{ display: "flex", gap: 36, marginTop: 56, flexWrap: "wrap" }}>
              <Stat k="2" l="decks, one heritage" />
              <Stat k="63" l="cards in total" />
              <Stat k="3+" l="years and curious" />
            </div>
          </div>

          <HeroDecks />
        </div>
      </div>

      {/* Marquee strip with sticker style */}
      <div style={{
        background: "var(--ink)",
        color: "var(--paper)",
        padding: "8px 0",
        borderTop: "3px solid var(--ink)",
        borderBottom: "3px solid var(--ink)",
      }}>
        <AlphabetMarquee accent="var(--peach)" />
      </div>
    </section>
  );
}

function Stat({ k, l }) {
  return (
    <div style={{
      background: "var(--paper)",
      border: "2.5px solid var(--ink)",
      borderRadius: 18,
      padding: "14px 20px",
      boxShadow: "var(--shadow-stk-sm)",
      transform: "rotate(-1.5deg)",
    }}>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 36,
        color: "var(--saffron)", lineHeight: 1, letterSpacing: "-0.03em",
      }}>{k}</div>
      <div style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginTop: 4, maxWidth: "16ch" }}>{l}</div>
    </div>
  );
}

function HeroDecks() {
  return (
    <div style={{ position: "relative", height: 560, minWidth: 0, transform: "translateY(-100px)" }} className="hero-decks">
      {/* Big background sticker behind cards */}
      <Bubble size={420} color="var(--saffron)" style={{ top: 60, left: "50%", marginLeft: -210, opacity: 0.95 }} />

      {/* A-Z card (back-left) */}
      <StickerCard src="/assets/ABC-Front A.png" style={{ top: 40, left: "5%", width: 200, transform: "rotate(-10deg)" }} className="float" />

      {/* Yoga back card */}
      <StickerCard src="/assets/ABC-Back OM.png" style={{ top: 70, right: "0%", width: 200, transform: "rotate(8deg)" }} className="float-2" />

      {/* Ka-Kha Cover (center hero) */}
      <StickerCard
        src="/assets/kakha-cover.png"
        style={{ top: 100, left: "50%", marginLeft: -140, width: 280, transform: "rotate(-2deg)", zIndex: 10 }}
        className="float-3"
        sticker={<StickerBadge color="var(--sage)" rotate={12} style={{ position: "absolute", top: -16, right: -20, zIndex: 5, fontSize: 18 }}>new!<br />2026</StickerBadge>}
      />

      {/* Ka card */}
      <StickerCard src="/assets/Ka-Kha-Front Ka.png" style={{ bottom: 30, left: "10%", width: 220, transform: "rotate(-6deg)", zIndex: 4 }} className="float-2" />

      {/* Kha card */}
      <StickerCard src="/assets/Ka-Kha-Front Kha.png" style={{ bottom: 10, right: "5%", width: 220, transform: "rotate(10deg)", zIndex: 4 }} className="float" />

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-decks { height: 460px; }
        }
      `}</style>
    </div>
  );
}

function StickerCard({ src, style, className, sticker }) {
  return (
    <div className={"sticker-card " + (className || "")} style={{
      position: "absolute",
      aspectRatio: "0.71/1",
      ...style,
    }}>
      <img src={src} alt="" />
      {sticker}
    </div>
  );
}

function TwoDecks({ onNav, onOrder }) {
  return (
    <section className="section surface-paper" style={{ position: "relative", overflow: "hidden" }}>
      <Bubble size={240} color="var(--sage-light)" style={{ top: -80, left: -60, opacity: 0.6 }} />
      <Bubble size={180} color="var(--peach-light)" style={{ bottom: 100, right: -60, opacity: 0.6 }} />
      <Squiggle width={140} color="var(--saffron)" style={{ top: 100, right: 120 }} />

      <div className="container">
        <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
          <span className="eyebrow">Two decks ✦ one library</span>
          <h2 className="h-1" style={{ marginTop: 24 }}>
            Pick a starting <br />letter.
          </h2>
          <p className="lede" style={{ margin: "20px auto 0" }}>
            Each deck stands on its own — pick the one that calls to your family, or pair them up for the full bilingual library.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32, marginTop: 72 }} className="decks-grid">
          <DeckCardBig
            tag="The Original"
            title="A–Z Heroes & Mantras"
            handAccent="Heroes & Mantras"
            description="26 cards introducing the English alphabet through legends from the Mahabharata and Ramayana, plus 5 mantra cards for peace and courage."
            price="Rs 499"
            priceNote="31 cards + guide book"
            image="/assets/ABC-cover.png"
            backImage="/assets/ABC-Front U.png"
            color="var(--sage)"
            cta="Open the A–Z deck"
            onClick={() => onNav("deck")}
            onOrder={() => onOrder({ az: true, kakha: false })}
            tilt={-2}
          />
          <DeckCardBig
            tag="New · Preorder"
            title="Ka–Kha Sanskar Lipi"
            handAccent="Sanskar Lipi"
            description="32 cards walking little ones through the Nepali alphabet — where क is for karma gara, ख for khelna jaau, and every letter teaches a value."
            price="Rs 300"
            priceNote="Preorder — ships May 2026"
            image="/assets/kakha-cover.png"
            backImage="/assets/Ka-Kha-Front Ka.png"
            color="var(--peach)"
            cta="Reserve a Ka–Kha"
            onClick={() => onNav("kakha")}
            onOrder={() => onOrder({ az: false, kakha: true })}
            tilt={2}
            isNew
          />
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .decks-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function DeckCardBig({ tag, title, handAccent, description, price, priceNote, image, backImage, color, cta, onClick, onOrder, tilt = 0, isNew }) {
  return (
    <article
      onClick={onClick}
      style={{
        position: "relative",
        borderRadius: 28,
        background: color,
        color: "var(--ink)",
        padding: 36,
        minHeight: 580,
        border: "3px solid var(--ink)",
        boxShadow: "10px 10px 0 var(--ink)",
        transition: "transform .25s, box-shadow .25s",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        transform: `rotate(${tilt}deg)`,
      }}
      onMouseEnter={e => { e.currentTarget.style.transform = `rotate(0deg) translate(-4px, -4px)`; e.currentTarget.style.boxShadow = "14px 14px 0 var(--ink)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${tilt}deg)`; e.currentTarget.style.boxShadow = "10px 10px 0 var(--ink)"; }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{
          background: "var(--ink)", color: "var(--paper)",
          padding: "8px 16px", borderRadius: 999,
          fontSize: 12, fontWeight: 800, letterSpacing: "0.12em",
          textTransform: "uppercase",
        }}>{tag}</span>
        {isNew && (
          <StickerBadge color="var(--paper)" rotate={8} style={{ fontSize: 16 }}>
            new!<br />2026
          </StickerBadge>
        )}
      </div>

      <div style={{
        position: "relative", flex: 1,
        margin: "24px auto", maxWidth: 360, minHeight: 280, width: "100%",
      }}>
        <div className="sticker-card" style={{
          position: "absolute", top: 10, left: 10, width: 200, aspectRatio: "0.71/1",
          transform: "rotate(-8deg)",
        }}>
          <img src={backImage} alt="" />
        </div>
        <div className="sticker-card" style={{
          position: "absolute", top: 0, right: 10, width: 220, aspectRatio: "0.71/1",
          transform: "rotate(6deg)",
        }}>
          <img src={image} alt="" />
        </div>
      </div>

      <h3 className="h-2" style={{ color: "var(--ink)" }}>
        {title.split(handAccent)[0]}
        {handAccent && <span className="hand" style={{ fontSize: "1.4em", lineHeight: 0.8 }}>{handAccent}</span>}
      </h3>
      <p style={{ color: "var(--ink-2)", marginTop: 14, fontSize: 15, lineHeight: 1.55 }}>
        {description}
      </p>

      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "flex-end",
        marginTop: 28, gap: 16,
      }}>
        <div>
          <div style={{
            fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 800, lineHeight: 1,
            letterSpacing: "-0.025em", color: "var(--ink)",
          }}>{price}</div>
          <div style={{ fontSize: 12, fontWeight: 600, color: "var(--ink-2)", marginTop: 6, letterSpacing: "0.04em" }}>{priceNote}</div>
        </div>
        <button style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: "var(--ink)", color: "var(--paper)",
          padding: "12px 22px", borderRadius: 999,
          fontWeight: 800, fontSize: 14, cursor: "pointer",
          border: "2px solid var(--ink)",
        }} onClick={(e) => { e.stopPropagation(); if (onOrder) onOrder(); }}>
          Order {title.split(" ")[0]} →
        </button>
      </div>
    </article>
  );
}

function CardOfDayTeaser({ onNav }) {
  const [flipped, setFlipped] = React.useState(false);
  return (
    <section className="section surface-ink" style={{ position: "relative", overflow: "hidden" }}>
      <Bubble size={300} color="var(--saffron)" style={{ top: -120, right: -80, opacity: 0.18 }} />
      <Bubble size={200} color="var(--peach)" style={{ bottom: -80, left: -40, opacity: 0.18 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="cotd-grid">
          <div>
            <span className="eyebrow">Card of the Day</span>
            <h2 className="h-1" style={{ marginTop: 24, color: "var(--paper)" }}>
              A daily nudge,<br />
              a <span className="hand">tiny wisdom.</span>
            </h2>
            <p className="lede" style={{ marginTop: 22 }}>
              Tap a card to receive today's word, story or mantra. A small daily ritual — for breakfast tables, classrooms or quiet evenings.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
              <button className="btn btn-primary btn-arrow" onClick={() => onNav("cotd")}>
                Open today's card
              </button>
              <button className="btn btn-ghost" onClick={() => setFlipped(f => !f)}>
                ↻ Flip this one
              </button>
            </div>
          </div>

          <div style={{ position: "relative", height: 480, perspective: 1200 }}>
            <FlipCard flipped={flipped} onClick={() => setFlipped(f => !f)} />
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .cotd-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}

function FlipCard({ flipped, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        width: 300, height: 420, margin: "0 auto",
        cursor: "pointer",
        position: "relative",
        transformStyle: "preserve-3d",
        transition: "transform .8s cubic-bezier(.2,.8,.2,1)",
        transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
      }}
    >
      <div style={{
        position: "absolute", inset: 0, borderRadius: 24,
        background: "var(--paper)",
        backfaceVisibility: "hidden",
        border: "3px solid var(--ink)",
        boxShadow: "10px 10px 0 var(--saffron)",
        overflow: "hidden",
      }}>
        <img src="/assets/Ka-Kha-Front Ka.png" alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <div style={{
        position: "absolute", inset: 0, borderRadius: 24,
        background: "var(--paper)",
        backfaceVisibility: "hidden",
        transform: "rotateY(180deg)",
        border: "3px solid var(--ink)",
        boxShadow: "10px 10px 0 var(--saffron)",
        padding: 32,
        display: "flex", flexDirection: "column", justifyContent: "center",
        color: "var(--ink)",
        textAlign: "center",
      }}>
        <div className="deva" style={{ fontSize: 78, color: "var(--saffron)", lineHeight: 1, fontWeight: 500 }}>क</div>
        <div style={{ fontFamily: "var(--font-hand)", fontSize: 20, color: "var(--ink-2)", marginTop: 4 }}>/ka/</div>
        <div className="deva" style={{ fontSize: 24, marginTop: 16, color: "var(--ink)" }}>कर्म गर</div>
        <p style={{ fontSize: 14, lineHeight: 1.5, color: "var(--ink-2)", marginTop: 14 }}>
          Do your work with care today. The smallest act, done with attention, builds the largest life.
        </p>
        <div style={{ marginTop: 18, fontSize: 11, letterSpacing: "0.2em", color: "var(--saffron)", fontWeight: 800 }}>
          @TINYWISDOMCARDS
        </div>
      </div>
    </div>
  );
}

function InsideTheDeck() {
  const cards = [
    { src: "/assets/Ka-Kha-Front a aa.png", deva: "अ" },
    { src: "/assets/ABC-Front L.png", deva: "L" },
    { src: "/assets/Ka-Kha-Front Kha.png", deva: "ख" },
    { src: "/assets/ABC-Front G.png", deva: "G" },
    { src: "/assets/Ka-Kha-Back Fa.png", deva: "फ" },
    { src: "/assets/ABC-Back OM.png", deva: "O" },
  ];
  return (
    <section className="section surface-cream" style={{ position: "relative", overflow: "hidden" }}>
      <Bubble size={180} color="var(--peach-light)" style={{ top: 80, right: -50, opacity: 0.8 }} />
      <Bubble size={120} color="var(--sage-light)" style={{ bottom: 100, left: -40 }} />

      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
          <div style={{ maxWidth: 580 }}>
            <span className="eyebrow">Inside each deck</span>
            <h2 className="h-1" style={{ marginTop: 24 }}>
              Every card is a <span className="hand">tiny world.</span>
            </h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Illustrated front and back: a letter, a word that teaches a value, three companion icons, and a scene from everyday Nepali life.
            </p>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 20 }} className="cards-grid">
          {cards.map((c, i) => {
            const baseTilt = (i % 2 === 0 ? -1 : 1) * (2 + (i % 3));
            return (
              <div key={i} className="sticker-card" style={{
                aspectRatio: "0.71/1",
                transform: `rotate(${baseTilt}deg)`,
                transition: "transform .3s cubic-bezier(.5, 1.6, .4, 1)",
                cursor: "pointer",
              }}
                onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-10px) rotate(0deg) scale(1.04)"; e.currentTarget.style.zIndex = "5"; }}
                onMouseLeave={e => { e.currentTarget.style.transform = `rotate(${baseTilt}deg)`; e.currentTarget.style.zIndex = ""; }}
              >
                <img src={c.src} alt={`${c.deva} card`} />
              </div>
            );
          })}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .cards-grid { grid-template-columns: repeat(3, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .cards-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}

function Legend({ dot, label }) {
  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 8,
      fontSize: 13, color: "var(--ink-2)", fontWeight: 700,
      background: "var(--paper)", padding: "8px 14px", borderRadius: 999,
      border: "2px solid var(--ink)",
    }}>
      <span style={{ width: 10, height: 10, borderRadius: 999, background: dot }} />
      {label}
    </span>
  );
}

function BundleOffer({ onNav, onOrder }) {
  return (
    <section className="section surface-cream" style={{ position: "relative", overflow: "hidden" }}>
      <Bubble size={300} color="var(--peach)" style={{ top: -80, left: -60, opacity: 0.5 }} />
      <Bubble size={200} color="var(--sage)" style={{ bottom: -50, right: -40, opacity: 0.5 }} />

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        <div style={{
          background: "var(--saffron)",
          color: "var(--paper)",
          borderRadius: 36,
          padding: 0,
          position: "relative",
          overflow: "hidden",
          border: "3px solid var(--ink)",
          boxShadow: "12px 12px 0 var(--ink)",
        }}>
          {/* Sticker ribbon */}
          <StickerBadge color="var(--sage)" rotate={-8} style={{
            position: "absolute", top: 30, right: 30, zIndex: 5,
            fontSize: 26, padding: "18px 22px",
          }}>save<br />30%!</StickerBadge>

          <div style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56,
            padding: "64px", alignItems: "center",
          }} className="bundle-grid">
            <div style={{ position: "relative", zIndex: 2 }}>
              <span style={{
                display: "inline-block", padding: "8px 18px",
                background: "var(--paper)", color: "var(--ink)",
                borderRadius: 999, fontSize: 12, fontWeight: 800, letterSpacing: "0.16em",
                border: "2px solid var(--ink)",
                marginBottom: 24,
                transform: "rotate(-2deg)",
              }}>THE HERITAGE BUNDLE ✦</span>

              <h2 className="h-1" style={{ color: "var(--paper)" }}>
                Both decks.<br />
                <span className="hand" style={{ color: "var(--paper)" }}>One little library.</span>
              </h2>
              <p style={{ color: "rgba(255,248,231,0.92)", marginTop: 18, fontSize: 17, lineHeight: 1.55, maxWidth: "44ch" }}>
                The A–Z Heroes deck and the Ka–Kha Sanskar Lipi deck — beautifully boxed together. Bilingual learning, two scripts, one happy shelf.
              </p>

              <div style={{
                display: "flex", alignItems: "baseline", gap: 18, marginTop: 32,
                flexWrap: "wrap",
              }}>
                <div style={{
                  fontFamily: "var(--font-display)", fontSize: 72, fontWeight: 800,
                  color: "var(--paper)", lineHeight: 1, letterSpacing: "-0.03em",
                }}>Rs 559</div>
                <div>
                  <div style={{
                    fontSize: 22, color: "rgba(255,248,231,0.5)",
                    textDecoration: "line-through", textDecorationThickness: 2,
                    fontFamily: "var(--font-display)", fontWeight: 700,
                  }}>Rs 799</div>
                  <div style={{
                    fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--paper)",
                    fontWeight: 700, marginTop: -4,
                  }}>save Rs 240!</div>
                </div>
              </div>

              <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "grid", gap: 8, fontSize: 14.5, color: "var(--paper)" }}>
                <li style={{ display: "flex", gap: 10 }}><span>✓</span> Both decks · 63 cards total</li>
                <li style={{ display: "flex", gap: 10 }}><span>✓</span> Folded guide books for each</li>
                <li style={{ display: "flex", gap: 10 }}><span>✓</span> Free shipping inside Nepal</li>
                <li style={{ display: "flex", gap: 10 }}><span>✓</span> Wrapped in a single gift-ready sleeve</li>
              </ul>

              <div style={{ display: "flex", gap: 12, marginTop: 36, flexWrap: "wrap" }}>
                <button className="btn btn-ink btn-lg btn-arrow" onClick={() => onOrder({ az: true, kakha: true })}>
                  Order the bundle — Rs 559
                </button>
                <button className="btn btn-ghost btn-lg" onClick={() => onOrder({ az: false, kakha: false })}>
                  Decks sold separately ↗
                </button>
              </div>
              <div style={{ fontSize: 12, color: "rgba(255,248,231,0.7)", marginTop: 16 }}>
                ✦ Ka–Kha portion ships May 2026 — A–Z ships immediately
              </div>
            </div>

            <div style={{ position: "relative", minHeight: 460, zIndex: 2 }}>
              <div className="sticker-card float" style={{
                position: "absolute", top: 20, left: "2%", width: "48%",
                transform: "rotate(-8deg)", aspectRatio: "0.71/1",
              }}>
                <img src="/assets/ABC-cover.png" alt="" />
              </div>
              <div className="sticker-card float-2" style={{
                position: "absolute", bottom: 20, right: "2%", width: "48%",
                transform: "rotate(8deg)", aspectRatio: "0.71/1",
              }}>
                <img src="/assets/kakha-cover.png" alt="" />
              </div>
              <div style={{
                position: "absolute", top: "50%", left: "50%",
                transform: "translate(-50%, -50%) rotate(-6deg)",
                width: 84, height: 84, borderRadius: 999,
                background: "var(--paper)", color: "var(--ink)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-display)", fontSize: 52, fontWeight: 800,
                lineHeight: 1,
                border: "3px solid var(--ink)",
                boxShadow: "5px 5px 0 var(--ink)",
                zIndex: 5,
              }}>+</div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .bundle-grid { grid-template-columns: 1fr !important; padding: 48px 32px !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  );
}

function StorySection() {
  return (
    <section className="section surface-paper" style={{ position: "relative", overflow: "hidden" }}>
      <Bubble size={140} color="var(--sage)" style={{ top: 80, right: 80, opacity: 0.6 }} />
      <Squiggle width={140} color="var(--saffron)" style={{ top: 200, left: 60 }} />

      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 80, alignItems: "center" }} className="story-grid">
          <div style={{ position: "relative" }}>
            <div style={{
              background: "var(--peach-light)",
              borderRadius: 32, padding: 32,
              border: "3px solid var(--ink)",
              boxShadow: "12px 12px 0 var(--ink)",
              aspectRatio: "0.95/1",
              position: "relative",
              overflow: "hidden",
            }}>
              <Bubble size={180} color="var(--saffron)" style={{ top: -40, right: -40, opacity: 0.5 }} />
              <Bubble size={120} color="var(--sage)" style={{ bottom: -30, left: -30, opacity: 0.6 }} />
              <div className="sticker-card" style={{
                position: "absolute", left: "10%", top: "50%",
                transform: "translateY(-50%) rotate(-7deg)",
                width: "52%", aspectRatio: "0.71/1",
              }}>
                <img src="/assets/kakha-cover.png" alt="" />
              </div>
              <div className="sticker-card" style={{
                position: "absolute", right: "8%", top: "50%",
                transform: "translateY(-48%) rotate(8deg)",
                width: "48%", aspectRatio: "0.71/1",
              }}>
                <img src="/assets/ABC-cover.png" alt="" />
              </div>
            </div>
          </div>

          <div>
            <span className="eyebrow">Our story</span>
            <h2 className="h-1" style={{ marginTop: 24 }}>
              Made by parents.<br />
              <span className="hand">Crafted with care.</span>
            </h2>
            <p className="lede" style={{ marginTop: 22 }}>
              Tiny Wisdom Cards began at a Kathmandu dinner table — a simple wish to pass on the stories, scripts and small daily values our grandparents gave us, in a form a four-year-old would actually reach for.
            </p>
            <p className="lede" style={{ marginTop: 14 }}>
              Every card is illustrated by Nepali artists, printed on heavy stock with a glossy lamination and rounded corners, and tested by very tough critics aged three to nine.
            </p>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginTop: 36 }}>
              <Pillar color="var(--sage)" icon="✦" title="Curriculum-aware" body="Aligned with early-grade Nepali language learning." />
              <Pillar color="var(--peach-light)" icon="❀" title="Beautifully illustrated" body="Illustrated by Nepali artists. No stock art." />
              <Pillar color="var(--peach-light)" icon="◈" title="Glossy laminated" body="Built for sticky fingers and re-reading." />
              <Pillar color="var(--sage)" icon="✺" title="Made in Nepal" body="Printed in Kathmandu, shipped worldwide." />
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) {
          .story-grid { grid-template-columns: 1fr !important; gap: 48px; }
        }
      `}</style>
    </section>
  );
}

function Pillar({ color, icon, title, body }) {
  return (
    <div className="card" style={{ background: color, padding: 20 }}>
      <div style={{ fontSize: 22, color: "var(--ink)", marginBottom: 6 }}>{icon}</div>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 17, fontWeight: 700, marginBottom: 4, letterSpacing: "-0.02em" }}>{title}</div>
      <div style={{ fontSize: 13.5, color: "var(--ink-2)", lineHeight: 1.5 }}>{body}</div>
    </div>
  );
}

function CommunitySection() {
  const quotes = [
    { q: "Our daughter asks for a card with breakfast every morning. The Ka–Kha deck makes Nepali feel alive in our London flat.", a: "Treeshna", r: "Mother of two, London", i: "🌿", c: "var(--sage)" },
    { q: "I use the A–Z cards as a five-minute warm-up in my Class 3 classroom. The kids fight to flip the next one.", a: "Sabina Timilsina", r: "Primary educator, Pokhara", i: "✦", c: "var(--peach)" },
    { q: "More than a toy — these have become a quiet family ritual. We light a diya and read one card before bed.", a: "The Joshi family", r: "Kathmandu", i: "❀", c: "var(--peach-light)" },
    { q: "We gifted ten decks at our nephew's annaprashan. Easily the most-talked-about gift in the family group chat.", a: "Niraj & Pranita", r: "Diaspora, Toronto", i: "◈", c: "var(--sage-light)" },
  ];
  const [idx, setIdx] = React.useState(0);
  React.useEffect(() => {
    const t = setInterval(() => setIdx(i => (i + 1) % quotes.length), 6000);
    return () => clearInterval(t);
  }, []);
  const q = quotes[idx];

  return (
    <section className="section surface-cream-2" style={{ position: "relative", overflow: "hidden" }}>
      <Bubble size={200} color="var(--saffron)" style={{ top: -60, left: -50, opacity: 0.3 }} />

      <div className="container" style={{ position: "relative", zIndex: 1 }}>
        <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 56px" }}>
          <span className="eyebrow">From our community</span>
          <h2 className="h-1" style={{ marginTop: 24 }}>
            Heard around <span className="hand">kitchen tables.</span>
          </h2>
        </div>

        <div style={{
          maxWidth: 820, margin: "0 auto",
          background: q.c, borderRadius: 32,
          padding: 48, position: "relative",
          border: "3px solid var(--ink)",
          boxShadow: "12px 12px 0 var(--ink)",
          minHeight: 300,
          transition: "background .5s",
        }}>
          <div style={{
            position: "absolute", top: 24, left: 28,
            fontFamily: "var(--font-display)", fontSize: 100, fontWeight: 800,
            color: "var(--ink)", opacity: 0.18, lineHeight: 1,
          }}>"</div>
          <div key={idx} className="page-enter" style={{ position: "relative" }}>
            <p style={{
              fontFamily: "var(--font-display)", fontSize: 28, fontWeight: 600,
              lineHeight: 1.3, color: "var(--ink)", margin: 0,
              textWrap: "pretty", letterSpacing: "-0.02em",
            }}>
              {q.q}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 16, marginTop: 32 }}>
              <div style={{
                width: 56, height: 56, borderRadius: 999, background: "var(--paper)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 24, color: "var(--saffron)",
                border: "2.5px solid var(--ink)",
              }}>{q.i}</div>
              <div>
                <div style={{ fontWeight: 800, fontSize: 16 }}>{q.a}</div>
                <div style={{ fontSize: 13, color: "var(--ink-2)" }}>{q.r}</div>
              </div>
            </div>
          </div>
          <div style={{ position: "absolute", bottom: 24, right: 28, display: "flex", gap: 8 }}>
            {quotes.map((_, i) => (
              <button key={i} onClick={() => setIdx(i)} aria-label={`go to ${i + 1}`} style={{
                width: i === idx ? 32 : 12, height: 12, borderRadius: 999,
                border: "2px solid var(--ink)", background: i === idx ? "var(--ink)" : "var(--paper)",
                transition: "all .3s", padding: 0, cursor: "pointer",
              }} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StockistsBand() {
  const [activePopup, setActivePopup] = React.useState(null);
  const stockists = [
    { name: "Bookverse", area: "Civil Mall", instaUrl: "https://www.instagram.com/bookverse.np/?hl=en", mapUrl: "https://maps.app.goo.gl/nYxRUVEmXQqdDsiA6" },
    { name: "Patan Book Shop", area: "Patandhoka, Lalitpur", instaUrl: "https://www.instagram.com/patan_book_shop/", mapUrl: "https://maps.app.goo.gl/zKBmS2u4Gm1yLkGp9" },
    { name: "Nepal Book Depot", area: "Chaksibari Marg, Thamel", instaUrl: "https://www.instagram.com/biblionepal", mapUrl: "https://maps.app.goo.gl/4cqAYog5YFwtVgnC7" },
    { name: "Tibet Book Store", area: "Tridevi Marg, Thamel", instaUrl: "https://www.instagram.com/book_store890/", mapUrl: "https://maps.app.goo.gl/8aWSEupp1yPYaiia8" },
    { name: "Pilgrims Book House", area: "Chaksibari Marg, Thamel", instaUrl: "https://www.instagram.com/pilgrimsbookhouse/?hl=en", mapUrl: "https://maps.app.goo.gl/pK7XwgAEzHRDm5jE7" },
    { name: "Vajra Books", area: "Jyatha, Thamel", instaUrl: "https://www.instagram.com/vajra.books/", mapUrl: "https://maps.app.goo.gl/eb4rQ9jB4JEwDZLH7" },
  ];
  const palette = ["var(--peach-light)", "var(--sage-light)", "var(--saffron-50)"];

  React.useEffect(() => {
    const close = () => setActivePopup(null);
    window.addEventListener("click", close);
    return () => window.removeEventListener("click", close);
  }, []);

  return (
    <section className="section surface-paper" style={{ paddingTop: 64, paddingBottom: 64, position: "relative" }}>
      <div className="container">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 16, marginBottom: 32 }}>
          <h3 className="h-2">Find us <span className="hand">on a shelf.</span></h3>
          <span style={{ fontSize: 14, color: "var(--ink-2)" }}>Six stockists across Kathmandu Valley — and growing.</span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="stockists-grid">
          {stockists.map((s, i) => (
            <article key={i} className="card" style={{
              background: palette[i % palette.length],
              display: "flex", flexDirection: "column", gap: 14,
              transform: `rotate(${(i % 2 ? 1 : -1) * 0.6}deg)`,
              position: "relative",
            }}>
              <div>
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 20, marginBottom: 6, letterSpacing: "-0.02em" }}>{s.name}</div>
                <div style={{ fontSize: 13, color: "var(--ink-2)", display: "flex", alignItems: "center", gap: 6, fontWeight: 600 }}>
                  <span style={{ color: "var(--saffron)" }}>◉</span> {s.area}
                </div>
              </div>
              <div style={{ display: "flex", gap: 8, marginTop: "auto", paddingTop: 8, borderTop: "1.5px dashed rgba(43,26,8,0.2)", position: "relative" }}>
                <a href={s.mapUrl} target="_blank" rel="noreferrer" style={linkBtnStyle}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--paper)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--paper)"; e.currentTarget.style.color = "var(--ink)"; }}>
                  <MapPinIcon /> View map
                </a>
                <a href={s.instaUrl} target="_blank" rel="noreferrer" style={linkBtnStyle}
                  onMouseEnter={e => { e.currentTarget.style.background = "var(--ink)"; e.currentTarget.style.color = "var(--paper)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background = "var(--paper)"; e.currentTarget.style.color = "var(--ink)"; }}>
                  <InstaIcon /> Instagram
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .stockists-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 520px) { .stockists-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}

const linkBtnStyle = {
  flex: 1, display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 6,
  padding: "9px 10px", borderRadius: 999,
  background: "var(--paper)", color: "var(--ink)",
  fontSize: 12, fontWeight: 700,
  border: "2px solid var(--ink)",
  transition: "background .15s, color .15s",
  textDecoration: "none",
};

function InstaIcon({ size = 14 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function MapPinIcon({ size = 13 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
    </svg>
  );
}



function FinalCTA({ onNav, onOrder }) {
  return (
    <section className="section surface-saffron" style={{ position: "relative", overflow: "hidden", paddingTop: 96, paddingBottom: 96 }}>
      <Bubble size={300} color="var(--ink)" style={{ top: -100, left: -60, opacity: 0.15 }} />
      <Bubble size={240} color="var(--paper)" style={{ bottom: -80, right: -40, opacity: 0.15 }} />
      <Squiggle width={160} color="var(--paper)" style={{ top: 80, right: 100, opacity: 0.4 }} />

      <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
        <h2 className="h-display" style={{ color: "var(--paper)", maxWidth: 820, margin: "0 auto", fontSize: "clamp(48px, 7vw, 96px)" }}>
          Bring home a piece <br />of the <span className="hand" style={{ color: "var(--paper)" }}>everyday epic.</span>
        </h2>
        <p style={{ color: "rgba(255,248,231,0.92)", maxWidth: 560, margin: "28px auto 40px", fontSize: 17, fontWeight: 500 }}>
          Pick a starting point — or grab both decks together and save 30%.
        </p>
        <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
          <button className="btn btn-lg btn-arrow" style={{ background: "var(--paper)", color: "var(--ink)" }} onClick={() => onOrder({ az: true, kakha: false })}>
            The A–Z Deck · Rs 499
          </button>
          <button className="btn btn-lg btn-arrow" style={{ background: "var(--sage)", color: "var(--ink)" }} onClick={() => onOrder({ az: false, kakha: true })}>
            The Ka–Kha · Rs 300
          </button>
          <button className="btn btn-ink btn-lg btn-arrow" style={{ position: "relative" }} onClick={() => onOrder({ az: true, kakha: true })}>
            <span style={{
              position: "absolute", top: -14, right: -14,
              background: "var(--sage)", color: "var(--ink)",
              fontFamily: "var(--font-hand)", fontSize: 18, fontWeight: 700,
              padding: "4px 10px", borderRadius: 999,
              border: "2px solid var(--ink)",
              transform: "rotate(8deg)",
              boxShadow: "3px 3px 0 var(--ink)",
            }}>save 30%!</span>
            Both decks · Rs 559
          </button>
        </div>
        <div style={{ marginTop: 24, color: "rgba(255,248,231,0.85)", fontSize: 13, fontWeight: 600 }}>
          ✦ Free shipping inside the Kathmandu Valley · International shipping available
        </div>
      </div>
    </section>
  );
}

function HomePage({ onNav, onOrder }) {
  return (
    <div className="page-enter">
      <HomeHero onNav={onNav} />
      <TwoDecks onNav={onNav} onOrder={onOrder} />
      <InsideTheDeck />
      <CardOfDayTeaser onNav={onNav} />
      <BundleOffer onNav={onNav} onOrder={onOrder} />
      <StorySection />
      <CommunitySection />
      <StockistsBand />
      <FinalCTA onNav={onNav} onOrder={onOrder} />
    </div>
  );
}

export { HomePage, AlphabetMarquee, FlipCard, BundleOffer, FinalCTA, StickerCard };
