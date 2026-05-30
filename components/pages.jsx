import React from 'react';
import emailjs from '@emailjs/browser';
import { Bubble, Squiggle, Star, StickerBadge } from './nav.jsx';
import { FinalCTA, StickerCard, splitGraphemes } from './home.jsx';

const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
// pages.jsx — Storybook Playful — A-Z Deck, Ka-Kha, Card of the Day, Bulk, Community

/* ─── A-Z DECK PAGE ────────────────────────────────────── */

function DeckPage({ onNav, onOrder }) {
  const heroes = [
    { l: "A", w: "Arjuna", t: "The archer who learns to listen" },
    { l: "B", w: "Balarama", t: "Strength and unwavering loyalty" },
    { l: "G", w: "Ganesha", t: "Begin every story with attention" },
    { l: "H", w: "Hanuman", t: "Loyalty as a daily practice" },
    { l: "K", w: "Krishna", t: "Play, mischief, deep wisdom" },
    { l: "N", w: "Nandi", t: "The gentle guardian of devotion" },
    { l: "R", w: "Rama", t: "Patience over pride" },
    { l: "S", w: "Saraswoti", t: "Goddess of wisdom and the arts" },
  ];
  const extraCards = [
    { name: "Mantra Cards", line: "Sacred chants with simple meanings." },
    { name: "Story Cards", line: "Engaging tales behind the legends." },
    { name: "Activity Cards", line: "Fun reflections for curious minds." },
  ];

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="surface-cream" style={{ position: "relative", overflow: "hidden", paddingTop: 24, paddingBottom: 80 }}>
        <Bubble size={280} color="var(--peach)" style={{ top: -100, left: -80, opacity: 0.6 }} />
        <Bubble size={180} color="var(--sage)" style={{ top: 120, right: -50, opacity: 0.5 }} />
        <Squiggle width={140} color="var(--saffron)" style={{ top: 80, right: 180 }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <BackBtn onClick={() => onNav("home")} />
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 56, alignItems: "center" }} className="deck-hero">
            <div>
              <span className="chip chip-sage">
                <Star size={14} /> The Original · 31 cards
              </span>
              <h1 className="h-display" style={{ marginTop: 24 }}>
                Meet <span className="ink-pill">26 heroes,</span><br />
                learn one<br />
                <span className="hand">quiet wisdom.</span>
              </h1>
              <p className="lede" style={{ marginTop: 26 }}>
                Twenty-six letters. Twenty-six legends from the Mahabharata and Ramayana. Five sacred mantras for peace, courage and reflection. A deck that teaches the alphabet while passing down the stories.
              </p>
              <div style={{ display: "flex", gap: 14, marginTop: 36, alignItems: "center", flexWrap: "wrap" }}>
                <button className="btn btn-ink btn-lg btn-arrow" onClick={() => onOrder({ az: true, kakha: false })}>Order — Rs 499</button>
                <span style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 600 }}>Free shipping inside Nepal · Ships in 2–4 days</span>
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
                <Spec k="31" l="illustrated cards" />
                <Spec k="A4" l="folded guide" />
                <Spec k="350gsm" l="glossy laminated" />
              </div>
            </div>
            <div style={{ position: "relative", minHeight: 520 }}>
              <StickerCard src="/assets/ABC-cover.png" style={{ top: 0, left: "5%", width: 240, transform: "rotate(-10deg)" }} className="float" />
              <StickerCard src="/assets/ABC-Back Twameba.png" style={{ top: 100, right: "0%", width: 230, transform: "rotate(11deg)", zIndex: 2 }} className="float-2" />
              <StickerCard src="/assets/ABC-Front G.png" style={{ bottom: 20, left: "20%", width: 230, transform: "rotate(-4deg)", zIndex: 3 }} className="float-3" />
            </div>
          </div>
        </div>
      </section>

      {/* Heroes grid */}
      <section className="section surface-paper">
        <Bubble size={140} color="var(--sage-light)" style={{ top: 80, right: 60, opacity: 0.6 }} />
        <div className="container">
          <div style={{ maxWidth: 680 }}>
            <span className="eyebrow">The Heroes</span>
            <h2 className="h-1" style={{ marginTop: 24 }}>26 cards. <span className="hand">26 legends.</span></h2>
            <p className="lede" style={{ marginTop: 18 }}>
              Each card pairs a letter with a hero from our epics, and the value they quietly carry.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18, marginTop: 48 }} className="heroes-grid">
            {heroes.map((h, i) => {
              const tilt = (i % 2 === 0 ? -1 : 1) * 0.8;
              const palette = ["var(--peach-light)", "var(--sage-light)", "var(--saffron-50)", "var(--paper)"];
              return (
                <article key={i} className="card" style={{
                  background: palette[i % palette.length],
                  padding: 24, display: "flex", flexDirection: "column", gap: 12,
                  fontFamily: "var(--font-body)",
                  transform: `rotate(${tilt}deg)`,
                  position: "relative",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span style={{
                      fontFamily: "var(--font-display)", fontWeight: 800,
                      fontSize: 64, color: "var(--ink)", lineHeight: 0.9, letterSpacing: "-0.04em",
                      display: "inline-block",
                    }}>{h.l}</span>
                    <span className="label" style={{ color: "var(--ink-2)" }}>Hero {String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, letterSpacing: "-0.02em" }}>{h.w}</div>
                  <div style={{ fontSize: 14, color: "var(--ink-2)", lineHeight: 1.5 }}>{h.t}</div>
                </article>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: 32, fontFamily: "var(--font-hand)", fontSize: 24, color: "var(--saffron)", fontWeight: 700 }}>
            …and 18 more, from C through Z ↗
          </div>
        </div>
      </section>

      {/* Mantras */}
      <section className="section surface-ink" style={{ position: "relative", overflow: "hidden" }}>
        <Bubble size={300} color="var(--saffron)" style={{ bottom: -120, right: -80, opacity: 0.18 }} />
        <Bubble size={140} color="var(--peach)" style={{ top: 80, left: 60, opacity: 0.2 }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: 64, alignItems: "center" }} className="mantra-grid">
            <div>
              <span className="eyebrow">Beyond the Alphabet</span>
              <h2 className="h-1" style={{ marginTop: 24, color: "var(--paper)" }}>
                More on<br />
                <span className="hand">these cards.</span>
              </h2>
              <p className="lede" style={{ marginTop: 22 }}>
                Along with the 26 hero cards, the deck includes dedicated mantra cards, story cards, and activity cards to keep curious minds engaged and learning.
              </p>
            </div>
            <div style={{ display: "grid", gap: 14 }}>
              {extraCards.map((m, i) => (
                <div key={i} style={{
                  background: "var(--paper)",
                  color: "var(--ink)",
                  border: "2.5px solid var(--ink)",
                  borderRadius: 18,
                  padding: "20px 24px",
                  display: "flex", justifyContent: "space-between", alignItems: "center", gap: 16,
                  boxShadow: "5px 5px 0 var(--saffron)",
                  transform: `rotate(${(i % 2 ? 1 : -1) * 0.5}deg)`,
                }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, letterSpacing: "-0.02em" }}>{m.name}</div>
                    <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 4, fontFamily: "var(--font-hand)", fontWeight: 600 }}>{m.line}</div>
                  </div>
                  <Star size={22} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA onNav={onNav} onOrder={onOrder} />
      <style>{`
        @media (max-width: 900px) {
          .deck-hero, .mantra-grid { grid-template-columns: 1fr !important; }
          .heroes-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 520px) {
          .heroes-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function BackBtn({ onClick }) {
  return (
    <button onClick={onClick} style={{
      background: "var(--paper)",
      border: "2px solid var(--ink)",
      borderRadius: 999,
      padding: "8px 16px",
      fontSize: 13, fontWeight: 700,
      color: "var(--ink)",
      cursor: "pointer",
      marginBottom: 24,
      boxShadow: "3px 3px 0 var(--ink)",
      transition: "transform .15s, box-shadow .15s",
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translate(-1px, -1px)"; e.currentTarget.style.boxShadow = "4px 4px 0 var(--ink)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = ""; e.currentTarget.style.boxShadow = "3px 3px 0 var(--ink)"; }}
    >← Back home</button>
  );
}

function Spec({ k, l }) {
  return (
    <div style={{
      background: "var(--paper)",
      border: "2px solid var(--ink)",
      borderRadius: 14,
      padding: "10px 18px",
      boxShadow: "3px 3px 0 var(--ink)",
    }}>
      <div style={{ fontFamily: "var(--font-display)", fontSize: 24, fontWeight: 800, color: "var(--ink)", letterSpacing: "-0.02em", lineHeight: 1 }}>{k}</div>
      <div style={{ fontSize: 11, color: "var(--ink-2)", textTransform: "uppercase", letterSpacing: "0.16em", marginTop: 4, fontWeight: 700 }}>{l}</div>
    </div>
  );
}

/* ─── KA-KHA PAGE ──────────────────────────────────────── */

function KakhaPage({ onNav, onOrder }) {
  const letters = [
    { d: "क", lat: "ka", w: "कर्म गर", e: "Do your work", v: "Karma" },
    { d: "ख", lat: "kha", w: "खेल्न जाऊ", e: "Go and play", v: "Play" },
    { d: "ग", lat: "ga", w: "गाउँ जाऊ", e: "Go to the village", v: "Roots" },
    { d: "घ", lat: "gha", w: "घमण्ड नगर", e: "Do not be arrogant", v: "Belonging" },
    { d: "च", lat: "cha", w: "चरित्रवान् बन", e: "Become virtuous", v: "Stillness" },
    { d: "छ", lat: "chha", w: "छहारीमा बस", e: "Sit in the shade", v: "Generosity" },
    { d: "ज", lat: "ja", w: "जननी जन्मभूमि", e: "Mother and motherland", v: "Curiosity" },
    { d: "त", lat: "ta", w: "तपस्वी बन", e: "Become an ascetic", v: "Patience" },
    { d: "द", lat: "da", w: "दयालु बन", e: "Be kind", v: "Giving" },
    { d: "न", lat: "na", w: "नमस्ते गर", e: "Say namaste", v: "Humility" },
    { d: "प", lat: "pa", w: "पाठ पढ", e: "Read the lesson", v: "Learning" },
    { d: "य", lat: "ya", w: "योग गर", e: "Do yoga", v: "Balance" },
  ];

  return (
    <div className="page-enter">
      <section className="surface-cream" style={{ position: "relative", overflow: "hidden", paddingTop: 24, paddingBottom: 64 }}>
        <Bubble size={320} color="var(--peach)" style={{ top: -130, right: -100, opacity: 0.7 }} />
        <Bubble size={200} color="var(--sage)" style={{ bottom: -50, left: -60, opacity: 0.5 }} />
        <Bubble size={60} color="var(--saffron)" style={{ top: 200, left: 320 }} />
        <Squiggle width={140} color="var(--saffron)" style={{ top: 100, left: 80 }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <BackBtn onClick={() => onNav("home")} />

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.15fr", gap: 56, alignItems: "center" }} className="kakha-hero">
            <div>
              <span className="chip chip-saffron">
                <Star size={14} color="var(--paper)" /> New · Preorder · Ships June 2026
              </span>
              <h1 className="h-display" style={{ marginTop: 24 }}>
                <span className="deva" style={{ fontStyle: "normal", color: "var(--saffron)", fontSize: "0.9em" }}>क</span> is for<br />
                <span className="hand">karma gara.</span>
              </h1>
              <p className="lede" style={{ marginTop: 26 }}>
                The Ka–Kha deck walks little ones through the Nepali alphabet, not just letters, but values. क is karma gara. ख is khelna jaau. Every letter teaches a small wisdom to carry through the day.
              </p>
              <div style={{ display: "flex", gap: 14, marginTop: 36, alignItems: "center", flexWrap: "wrap" }}>
                <button className="btn btn-ink btn-lg btn-arrow" onClick={() => onOrder({ az: false, kakha: true })}>Preorder — Rs 300</button>
                <span style={{ fontSize: 14, color: "var(--ink-2)", fontWeight: 600 }}>Free shipping inside Nepal</span>
              </div>
              <div style={{ display: "flex", gap: 16, marginTop: 40, flexWrap: "wrap" }}>
                <Spec k="32" l="letter cards" />
                <Spec k="क→ज्ञ" l="full alphabet" />
                <Spec k="3+" l="years" />
              </div>
              <div style={{
                marginTop: 28, padding: 18,
                background: "var(--sage-light)",
                borderRadius: 18,
                border: "2px dashed var(--ink)",
                fontSize: 14, color: "var(--ink)",
                fontWeight: 600,
                maxWidth: 460,
                position: "relative",
              }}>
                <span style={{
                  position: "absolute", top: -14, left: 18,
                  background: "var(--ink)", color: "var(--paper)",
                  padding: "4px 12px", borderRadius: 999,
                  fontSize: 10, fontWeight: 800, letterSpacing: "0.18em",
                }}>PREORDER</span>
                Rs 300 until launch · retail price Rs 399 ✦
              </div>
            </div>

            <div style={{ position: "relative", minHeight: 600, display: "flex", justifyContent: "center", alignItems: "center" }}>
              <StickerCard src="/assets/Ka-Kha-Front Ka.png" style={{ top: 30, left: "0%", width: 200, transform: "rotate(-14deg)" }} className="float" />
              <StickerCard src="/assets/Ka-Kha-Front Kha.png" style={{ top: 80, right: "0%", width: 200, transform: "rotate(12deg)" }} className="float-2" />
              <StickerCard
                src="/assets/kakha-cover.png"
                style={{ top: "50%", left: "50%", marginLeft: -150, marginTop: -210, width: 300, transform: "rotate(-2deg)", zIndex: 4 }}
                className="float-3"
                sticker={<StickerBadge color="var(--sage)" rotate={8} style={{ position: "absolute", top: -16, right: -20, zIndex: 5, fontSize: 18 }}>new!<br />2026</StickerBadge>}
              />
              <StickerCard src="/assets/Ka-Kha-Front o au.png" style={{ bottom: 30, left: "5%", width: 200, transform: "rotate(-6deg)", zIndex: 3 }} className="float-2" />
              <StickerCard src="/assets/Ka-Kha-Back Fa.png" style={{ bottom: 10, right: "5%", width: 200, transform: "rotate(10deg)", zIndex: 3 }} className="float" />
            </div>
          </div>
        </div>
      </section>

      {/* Alphabet marquee */}
      <div style={{ background: "var(--saffron)", color: "var(--paper)", padding: "24px 0", overflow: "hidden", borderTop: "3px solid var(--ink)", borderBottom: "3px solid var(--ink)" }}>
        <div className="marquee-track">
          <div className="marquee" style={{ alignItems: "baseline", gap: 48 }}>
            {[...splitGraphemes("कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ"), ...splitGraphemes("कखगघङचछजझञटठडढणतथदधनपफबभमयरलवशषसहक्षत्रज्ञ")].map((c, i) => (
              <span key={i} className="deva" style={{ fontSize: 72, fontWeight: 500, color: i % 4 === 0 ? "var(--ink)" : "var(--paper)", flexShrink: 0, lineHeight: 1 }}>{c}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Anatomy */}
      <section className="section surface-paper">
        <Bubble size={120} color="var(--peach-light)" style={{ top: 60, left: 60, opacity: 0.6 }} />
        <Bubble size={100} color="var(--sage-light)" style={{ bottom: 100, right: 80, opacity: 0.6 }} />
        <div className="container">
          <div style={{ maxWidth: 660 }}>
            <span className="eyebrow">Anatomy of a card</span>
            <h2 className="h-1" style={{ marginTop: 24 }}>What's on each <span className="hand">tiny page.</span></h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 64, marginTop: 56, alignItems: "center" }} className="anatomy-grid">
            <div className="sticker-card" style={{ maxWidth: 380, margin: "0 auto", width: "100%", aspectRatio: "0.71/1", transform: "rotate(-3deg)" }}>
              <img src="/assets/Ka-Kha-Front Ka.png" alt="A card from the Ka–Kha Sanskaar Lipi deck showing the Nepali letter Ka (क) with the wisdom कर्म गर – Do your work, made in Kathmandu" />
            </div>
            <div>
              <ol style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 18 }}>
                <Anatomy n="1" t="The letter — large & lovable" b="Crafted in classic Devanagari proportions, sized for tiny fingers to trace." />
                <Anatomy n="2" t="A word that teaches a value" b="कर्म गर — not just kamala. The word doubles as the day's small wisdom." />
                <Anatomy n="3" t="Three companion icons" b="कमल · कलश · कछुवा — three things that share the sound, illustrated to keep eyes busy." />
                <Anatomy n="4" t="Folk-art border" b="A different Nepali pattern on every back — paubha-inspired, mithila-flavoured, beautifully detailed." />
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* All 32 letters preview */}
      <section className="section surface-cream-2">
        <Bubble size={200} color="var(--saffron)" style={{ top: -60, right: 100, opacity: 0.3 }} />
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 680, margin: "0 auto 56px" }}>
            <span className="eyebrow">All 32 cards</span>
            <h2 className="h-1" style={{ marginTop: 24 }}>
              From <span className="deva" style={{ color: "var(--saffron)" }}>क</span> to <span className="deva" style={{ color: "var(--saffron)" }}>ज्ञ</span>
            </h2>
            <p className="lede" style={{ margin: "18px auto 0" }}>
              A sneak peek at twelve of the thirty-two. Full preview unlocks with the deck.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }} className="letters-grid">
            {letters.map((L, i) => {
              const palette = ["var(--peach-light)", "var(--sage-light)", "var(--paper)", "var(--saffron-50)"];
              const tilt = (i % 2 === 0 ? -1 : 1) * 0.7;
              return (
                <article key={i} className="card" style={{
                  background: palette[i % palette.length],
                  fontFamily: "var(--font-body)",
                  transform: `rotate(${tilt}deg)`,
                  position: "relative",
                }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <span className="deva" style={{
                      fontSize: 78, lineHeight: 1, color: "var(--saffron)", fontWeight: 500,
                      display: "inline-block",
                    }}>{L.d}</span>
                  </div>
                  <div style={{ fontFamily: "var(--font-hand)", fontSize: 20, color: "var(--ink-2)", marginTop: 8, fontWeight: 700 }}>/{L.lat}/</div>
                  <div className="deva" style={{ fontSize: 20, fontWeight: 500, marginTop: 4, color: "var(--ink)" }}>{L.w}</div>
                  <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 2, fontWeight: 600 }}>{L.e}</div>
                  <div style={{
                    marginTop: 14,
                    display: "inline-block",
                    background: "var(--ink)", color: "var(--paper)",
                    padding: "4px 10px", borderRadius: 999,
                    fontSize: 10, fontWeight: 800, letterSpacing: "0.18em",
                  }}>{L.v}</div>
                </article>
              );
            })}
          </div>
          <div style={{ textAlign: "center", marginTop: 36, fontFamily: "var(--font-hand)", fontSize: 24, color: "var(--saffron)", fontWeight: 700 }}>
            …and 20 more, all the way to ज्ञ ↗
          </div>
        </div>
      </section>

      {/* Why preorder */}
      <section className="section surface-saffron" style={{ position: "relative", overflow: "hidden" }}>
        <Bubble size={300} color="var(--ink)" style={{ top: -120, left: -80, opacity: 0.18 }} />
        <Bubble size={200} color="var(--paper)" style={{ bottom: -60, right: -40, opacity: 0.18 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
            <h2 className="h-1" style={{ color: "var(--paper)" }}>
              Why preorder?
            </h2>
            <p style={{ color: "rgba(255,248,231,0.92)", fontSize: 17, marginTop: 16, marginBottom: 56, fontWeight: 500 }}>
              The first print run is small. Reserve yours and we'll ship the week it lands.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="why-grid">
            {[
              { n: "Rs 300", l: "Preorder price", s: "vs Rs 399 at launch", c: "var(--paper)" },
              { n: "June 2026", l: "Shipping window", s: "We'll email tracking", c: "var(--sage)" },
              { n: "Signed", l: "Founder's note", s: "First 200 orders only", c: "var(--peach-light)" },
            ].map((x, i) => (
              <div key={i} className="card" style={{
                background: x.c, color: "var(--ink)",
                transform: `rotate(${(i - 1) * 1.5}deg)`,
              }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 36, fontWeight: 800, letterSpacing: "-0.025em" }}>{x.n}</div>
                <div style={{ fontWeight: 800, marginTop: 8, fontSize: 16 }}>{x.l}</div>
                <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 4, fontWeight: 500 }}>{x.s}</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <button className="btn btn-ink btn-lg btn-arrow" onClick={() => onOrder({ az: false, kakha: true })}>Reserve your Ka–Kha</button>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .kakha-hero, .anatomy-grid { grid-template-columns: 1fr !important; }
          .letters-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}

function Anatomy({ n, t, b }) {
  return (
    <li style={{ display: "flex", gap: 18 }}>
      <span style={{
        flexShrink: 0,
        width: 40, height: 40, borderRadius: 999,
        background: "var(--saffron)", color: "var(--paper)",
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800,
        border: "2px solid var(--ink)",
        boxShadow: "3px 3px 0 var(--ink)",
      }}>{n}</span>
      <div>
        <div style={{ fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 700, marginBottom: 4, letterSpacing: "-0.02em" }}>{t}</div>
        <div style={{ fontSize: 15, color: "var(--ink-2)", lineHeight: 1.6 }}>{b}</div>
      </div>
    </li>
  );
}

/* ─── CARD OF THE DAY PAGE ─────────────────────────────── */

function CardOfDayPage({ onNav }) {
  const todayCards = [
    {
      d: "क", lat: "ka", w: "कर्म गर", e: "Do your work",
      story: "There's a small magic in starting before you feel ready. Krishna told Arjuna: don't worry about the fruit. Just begin. Today, do the small thing — fold the laundry, write the line, make the call. The doing is the gift.",
      tag: "Karma · Action",
    },
    {
      d: "ख", lat: "kha", w: "खेल्न जाऊ", e: "Go and play",
      story: "Play is not the opposite of work — it's how children make sense of the world. Hanuman flew because he forgot he couldn't. Today, take fifteen minutes to do something pointless and joyful. The big things will wait.",
      tag: "Khel · Joy",
    },
    {
      d: "य", lat: "ya", w: "योग गर", e: "Practise balance",
      story: "Yoga is not the pose, it is the listening. Sit for one quiet minute. Notice the breath. The body softens. The room softens. You don't have to fix anything today — just notice it first.",
      tag: "Yoga · Balance",
    },
  ];
  const [idx, setIdx] = React.useState(0);
  const [flipped, setFlipped] = React.useState(false);

  const today = todayCards[idx];

  return (
    <div className="page-enter">
      <section className="surface-ink" style={{ position: "relative", overflow: "hidden", paddingTop: 24, paddingBottom: 96, minHeight: "85vh" }}>
        <Bubble size={400} color="var(--saffron)" style={{ top: -150, right: -100, opacity: 0.18 }} />
        <Bubble size={260} color="var(--peach)" style={{ bottom: -100, left: -80, opacity: 0.16 }} />
        <Bubble size={80} color="var(--sage)" style={{ top: 220, left: "30%", opacity: 0.4 }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <BackBtn onClick={() => onNav("home")} />

          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="eyebrow">{new Date().toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}</span>
            <h1 className="h-1" style={{ marginTop: 24, color: "var(--paper)" }}>
              Today's <span className="hand">tiny wisdom.</span>
            </h1>
            <p className="lede" style={{ margin: "16px auto 0", maxWidth: 480 }}>
              Tap the card to flip. Pull a new one, or let today's stay.
            </p>
          </div>

          <div style={{ display: "flex", justifyContent: "center", marginBottom: 48 }}>
            <div style={{ perspective: 1500, position: "relative" }}>
              <div
                onClick={() => setFlipped(f => !f)}
                style={{
                  width: 360, height: 520,
                  cursor: "pointer",
                  position: "relative",
                  transformStyle: "preserve-3d",
                  transition: "transform .9s cubic-bezier(.2,.8,.2,1)",
                  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                <div style={{
                  position: "absolute", inset: 0, borderRadius: 28,
                  background: "var(--paper)",
                  backfaceVisibility: "hidden",
                  border: "3px solid var(--ink)",
                  boxShadow: "14px 14px 0 var(--saffron)",
                  padding: 32,
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  textAlign: "center",
                  overflow: "hidden",
                }}>
                  <div style={{ fontFamily: "var(--font-hand)", fontSize: 24, color: "var(--ink-2)", fontWeight: 700 }}>/{today.lat}/</div>
                  <div className="deva" style={{ fontSize: 200, color: "var(--saffron)", lineHeight: 1, fontWeight: 500, margin: "8px 0" }}>{today.d}</div>
                  <div className="deva" style={{ fontSize: 28, fontWeight: 500, color: "var(--ink)", marginTop: 12 }}>{today.w}</div>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 22, fontWeight: 700, color: "var(--ink-2)", marginTop: 6, letterSpacing: "-0.015em" }}>{today.e}</div>
                </div>
                <div style={{
                  position: "absolute", inset: 0, borderRadius: 28,
                  background: "var(--peach-light)",
                  backfaceVisibility: "hidden",
                  transform: "rotateY(180deg)",
                  border: "3px solid var(--ink)",
                  boxShadow: "14px 14px 0 var(--saffron)",
                  padding: 36,
                  display: "flex", flexDirection: "column", justifyContent: "space-between",
                  color: "var(--ink)",
                }}>
                  <div>
                    <span className="label" style={{
                      background: "var(--ink)", color: "var(--paper)",
                      padding: "5px 12px", borderRadius: 999, fontSize: 10,
                    }}>{today.tag}</span>
                    <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 26, marginTop: 14, lineHeight: 1.2, letterSpacing: "-0.02em" }}>{today.e}.</div>
                  </div>
                  <p style={{ fontSize: 15, lineHeight: 1.55, color: "var(--ink)", margin: 0 }}>
                    {today.story}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12, color: "var(--ink-2)", fontWeight: 600 }}>
                    <span>@tinywisdomcards</span>
                    <span style={{ color: "var(--saffron)" }}>✦</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <button className="btn btn-primary btn-arrow" onClick={() => { setFlipped(false); setIdx((idx + 1) % todayCards.length); }}>
              Pull a new card
            </button>
            <button className="btn btn-ghost" onClick={() => setFlipped(f => !f)}>↻ Flip the card</button>
            <button className="btn btn-ghost">📤 Share today's card</button>
          </div>

          {/* <div style={{ marginTop: 80, textAlign: "center" }}>
            <p style={{ color: "rgba(255,248,231,0.7)", maxWidth: 480, margin: "0 auto", fontSize: 14, fontWeight: 500 }}>
              Want this in your inbox at 7am each morning? Join the daily letter.
            </p>
            <div style={{
              display: "flex", margin: "20px auto 0", maxWidth: 440,
              borderRadius: 999,
              background: "var(--paper)",
              border: "2.5px solid var(--paper)",
              padding: 4,
              boxShadow: "5px 5px 0 var(--saffron)",
            }}>
              <input placeholder="your email" style={{
                flex: 1, background: "transparent", border: 0, outline: 0, color: "var(--ink)",
                padding: "12px 18px", fontSize: 14, fontFamily: "var(--font-body)", fontWeight: 600,
              }} />
              <button style={{
                background: "var(--ink)", color: "var(--paper)",
                border: 0, borderRadius: 999, padding: "10px 22px",
                fontWeight: 800, cursor: "pointer", fontSize: 14,
              }}>Subscribe</button>
            </div>
          </div> */}
        </div>
      </section>
    </div>
  );
}

/* ─── BULK ORDER PAGE ──────────────────────────────────── */

function BulkPage({ onNav }) {
  return (
    <div className="page-enter">
      <section className="surface-cream" style={{ position: "relative", overflow: "hidden", paddingTop: 24, paddingBottom: 80 }}>
        <Bubble size={280} color="var(--peach)" style={{ top: -100, left: -80, opacity: 0.6 }} />
        <Bubble size={200} color="var(--sage)" style={{ bottom: -60, right: -50, opacity: 0.5 }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <BackBtn onClick={() => onNav("home")} />
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 56, alignItems: "center" }} className="bulk-hero">
            <div>
              <span className="chip chip-sage">For schools, shops & gifters</span>
              <h1 className="h-display" style={{ marginTop: 24 }}>
                25 decks.<br />
                100 decks.<br />
                <span className="hand">A thousand.</span>
              </h1>
              <p className="lede" style={{ marginTop: 24 }}>
                Bring Tiny Wisdom into a classroom, a hotel gift drawer, a Diwali corporate hamper. We co-pack, we co-brand, we ship anywhere.
              </p>
              <div style={{ display: "flex", gap: 14, marginTop: 36, flexWrap: "wrap" }}>
                <a href="#bulk-form" className="btn btn-ink btn-lg btn-arrow">Get a quote</a>
                <button className="btn btn-lg">📞 +977 9705812366</button>
              </div>
            </div>
            <div style={{ position: "relative", height: 480 }}>
              <StickerCard src="/assets/kakha-cover.png" style={{ top: 0, left: 0, width: 220, transform: "rotate(-9deg)" }} className="float" />
              <StickerCard src="/assets/kakha-cover.png" style={{ top: 30, left: 70, width: 220, transform: "rotate(-3deg)", zIndex: 2 }} className="float-2" />
              <StickerCard src="/assets/kakha-cover.png" style={{ top: 60, left: 140, width: 220, transform: "rotate(5deg)", zIndex: 3 }} className="float-3" />
              <StickerCard src="/assets/ABC-cover.png" style={{ bottom: 30, right: 30, width: 220, transform: "rotate(8deg)", zIndex: 4 }} className="float" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="section surface-paper">
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 640, margin: "0 auto 56px" }}>
            <span className="eyebrow">Bulk pricing</span>
            <h2 className="h-1" style={{ marginTop: 24 }}>Honest tiers, <span className="hand">no haggling.</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="tiers-grid">
            {[
              { qty: "25–49", price: "Rs 425", off: "15% off", feats: ["Free shipping inside Nepal", "Priority handling", "Personalised note"], color: "var(--peach-light)" },
              { qty: "50–199", price: "Rs 375", off: "25% off", feats: ["Free shipping inside Nepal", "Priority handling", "Custom sticker on box", "Co-branded card optional"], color: "var(--saffron)", featured: true },
              { qty: "200+", price: "Talk to us", off: "Custom", feats: ["Co-branded edition", "Custom printing", "International shipping", "Dedicated account manager"], color: "var(--sage)" },
            ].map((t, i) => (
              <article key={i} className="card" style={{
                background: t.color,
                color: t.featured ? "var(--paper)" : "var(--ink)",
                position: "relative",
                transform: t.featured ? "translateY(-16px) rotate(-1.5deg)" : `rotate(${(i - 1) * 1}deg)`,
                padding: 28,
              }}>
                {t.featured && (
                  <StickerBadge color="var(--sage)" rotate={-8} style={{
                    position: "absolute", top: -20, left: "50%", marginLeft: -60,
                    fontSize: 20, padding: "8px 16px",
                  }}>most popular!</StickerBadge>
                )}
                <div style={{
                  fontSize: 12, fontWeight: 800, letterSpacing: "0.18em",
                  background: t.featured ? "var(--paper)" : "var(--ink)",
                  color: t.featured ? "var(--ink)" : "var(--paper)",
                  display: "inline-block", padding: "5px 12px", borderRadius: 999,
                }}>{t.qty} DECKS</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 48, fontWeight: 800, marginTop: 16, letterSpacing: "-0.03em", lineHeight: 1 }}>{t.price}</div>
                <div style={{ fontSize: 14, opacity: t.featured ? 0.9 : 0.7, marginTop: 4, fontWeight: 600 }}>per deck · {t.off}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 0", display: "grid", gap: 10 }}>
                  {t.feats.map((f, j) => (
                    <li key={j} style={{ display: "flex", gap: 10, fontSize: 14, fontWeight: 500 }}>
                      <span>✓</span> {f}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section surface-cream-2">
        <Bubble size={160} color="var(--peach)" style={{ top: 60, right: 80, opacity: 0.4 }} />
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 600, margin: "0 auto 48px" }}>
            <span className="eyebrow">We love working with</span>
            <h2 className="h-1" style={{ marginTop: 24 }}>People who <span className="hand">pass things on.</span></h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18 }} className="partners-grid">
            {[
              { i: "✦", t: "Montessori & Waldorf schools", b: "Curriculum-aligned, hands-on, screen-free" },
              { i: "❀", t: "Yoga & mindfulness studios", b: "For breath-work corners and parent gifting" },
              { i: "◈", t: "Gift shops & bookstores", b: "Display kit + low-stock auto-reorder" },
              { i: "✺", t: "Homeschool & cultural circles", b: "Group rates, conversation guides included" },
              { i: "✦", t: "Nonprofits & parenting orgs", b: "Sponsor decks for libraries and outreach" },
              { i: "❀", t: "Hotels & guesthouses", b: "Welcome-gift edition with custom sleeve" },
            ].map((p, i) => {
              const palette = ["var(--peach-light)", "var(--sage-light)", "var(--paper)"];
              return (
                <div key={i} className="card" style={{
                  background: palette[i % palette.length],
                  display: "flex", gap: 16, alignItems: "flex-start",
                  transform: `rotate(${(i % 2 ? 1 : -1) * 0.7}deg)`,
                }}>
                  <span style={{ fontSize: 26, color: "var(--saffron)" }}>{p.i}</span>
                  <div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 700, letterSpacing: "-0.02em" }}>{p.t}</div>
                    <div style={{ fontSize: 14, color: "var(--ink-2)", marginTop: 4, lineHeight: 1.45 }}>{p.b}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="section surface-paper" id="bulk-form">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56 }} className="form-grid">
            <div>
              <span className="eyebrow">Request a quote</span>
              <h2 className="h-1" style={{ marginTop: 24 }}>Tell us <span className="hand">about it.</span></h2>
              <p className="lede" style={{ marginTop: 16 }}>
                We respond within 24–48 hours with a tailored quote, sample images, and shipping options.
              </p>
              <div style={{ marginTop: 36, display: "grid", gap: 16 }}>
                <Info icon="✉" l="Email" v="tinywisdomcards@gmail.com" />
                <Info icon="☏" l="Phone" v="+977 9705812366, +977 9761165040" />
                <Info icon="◉" l="Studio" v="Tinkune, Subidhanagar 44600, Kathmandu" />
              </div>
            </div>
            <BulkForm />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .bulk-hero, .form-grid { grid-template-columns: 1fr !important; }
          .tiers-grid, .partners-grid { grid-template-columns: 1fr !important; }
          .tiers-grid > article { transform: none !important; }
        }
      `}</style>
    </div>
  );
}

function Info({ icon, l, v }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <span style={{
        width: 40, height: 40, borderRadius: 999,
        background: "var(--saffron)", color: "var(--paper)",
        display: "inline-flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        border: "2px solid var(--ink)",
        boxShadow: "3px 3px 0 var(--ink)",
      }}>{icon}</span>
      <div>
        <div className="label" style={{ color: "var(--ink-2)" }}>{l}</div>
        <div style={{ fontSize: 15, marginTop: 2, fontWeight: 500 }}>{v}</div>
      </div>
    </div>
  );
}

function BulkForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [whatsapp, setWhatsapp] = React.useState("");
  const [org, setOrg] = React.useState("");
  const [deck, setDeck] = React.useState("The A–Z Deck");
  const [quantity, setQuantity] = React.useState("25–49");
  const [notes, setNotes] = React.useState("");

  // Submission method: "whatsapp" or "email"
  const [submitMethod, setSubmitMethod] = React.useState("whatsapp");
  const [isSending, setIsSending] = React.useState(false);
  const [showToast, setShowToast] = React.useState(false);

  React.useEffect(() => {
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSend = async (e) => {
    e.preventDefault();

    const orderDetails = [
      `Deck(s): ${deck}`,
      `Estimated Quantity: ${quantity}`,
    ].join("\n");

    if (submitMethod === "whatsapp") {
      const message = [
        "🌟 *Bulk Order Enquiry — Tiny Wisdom Cards*",
        "",
        `Name: ${name || "—"}`,
        `Email: ${email || "—"}`,
        `WhatsApp: ${whatsapp || "—"}`,
        `Organization: ${org || "—"}`,
        "",
        orderDetails,
        notes ? `\nAdditional Notes:\n${notes}` : null,
      ].filter(l => l !== null).join("\n");

      const url = `https://wa.me/9779705812368?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    } else {
      // EmailJS Submission
      setIsSending(true);
      try {
        const templateParams = {
          order_type: "Bulk Order",
          customer_name: name,
          customer_email: email,
          customer_phone: whatsapp || "—",
          customer_address: org ? `Org: ${org}` : "—",
          order_details: orderDetails,
          total_price: `Qty Tier: ${quantity}`,
          remarks: notes || "None",
        };

        console.log("Sending bulk email with params:", templateParams);

        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
      } catch (error) {
        console.error("Failed to send email:", error);
        alert("Failed to send email request. Please try again or use WhatsApp.");
      } finally {
        setIsSending(false);
      }
    }
  };

  const fieldStyle = {
    background: "var(--cream)", border: "2px solid var(--ink)",
    borderRadius: 14, padding: "12px 16px", fontSize: 15,
    fontFamily: "var(--font-body)", color: "var(--ink)",
    outline: "none", width: "100%", fontWeight: 500, boxSizing: "border-box",
  };

  return (
    <form className="card" style={{ padding: 32 }} onSubmit={handleSend}>
      <div style={{ display: "grid", gap: 16 }}>

        {/* Submission Method Toggle */}
        <div style={{
          display: "flex",
          gap: 10,
          marginBottom: 8,
          background: "rgba(43,26,8,0.05)",
          padding: 6,
          borderRadius: 12,
          border: "1px solid rgba(43,26,8,0.1)"
        }}>
          <button
            type="button"
            onClick={() => setSubmitMethod("whatsapp")}
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 8,
              border: "none",
              background: submitMethod === "whatsapp" ? "var(--ink)" : "transparent",
              color: submitMethod === "whatsapp" ? "var(--paper)" : "var(--ink)",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "all 0.2s"
            }}
          >
            <WAIcon size={16} color={submitMethod === "whatsapp" ? "var(--paper)" : "var(--ink)"} />
            WhatsApp
          </button>
          <button
            type="button"
            onClick={() => setSubmitMethod("email")}
            style={{
              flex: 1,
              padding: "10px 14px",
              borderRadius: 8,
              border: "none",
              background: submitMethod === "email" ? "var(--ink)" : "transparent",
              color: submitMethod === "email" ? "var(--paper)" : "var(--ink)",
              fontWeight: 700,
              fontSize: 14,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              transition: "all 0.2s"
            }}
          >
            <EmailIcon size={16} color={submitMethod === "email" ? "var(--paper)" : "var(--ink)"} />
            Email
          </button>
        </div>

        <label style={{ display: "block" }}>
          <div className="label" style={{ color: "var(--ink-2)", marginBottom: 6 }}>Your name *</div>
          <input placeholder="Full name" style={fieldStyle} value={name} onChange={e => setName(e.target.value)} required />
        </label>
        <label style={{ display: "block" }}>
          <div className="label" style={{ color: "var(--ink-2)", marginBottom: 6 }}>Email *</div>
          <input placeholder="you@example.com" type="email" style={fieldStyle} value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <label style={{ display: "block" }}>
            <div className="label" style={{ color: "var(--ink-2)", marginBottom: 6 }}>WhatsApp</div>
            <input placeholder="+977…" style={fieldStyle} value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />
          </label>
          <label style={{ display: "block" }}>
            <div className="label" style={{ color: "var(--ink-2)", marginBottom: 6 }}>Organization</div>
            <input placeholder="School / studio / shop" style={fieldStyle} value={org} onChange={e => setOrg(e.target.value)} />
          </label>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <label style={{ display: "block" }}>
            <div className="label" style={{ color: "var(--ink-2)", marginBottom: 6 }}>Which deck?</div>
            <select style={{ ...fieldStyle, fontWeight: 600 }} value={deck} onChange={e => setDeck(e.target.value)}>
              {["The A–Z Deck", "The Ka–Kha Deck", "Both decks", "Not sure yet"].map(o => <option key={o}>{o}</option>)}
            </select>
          </label>
          <label style={{ display: "block" }}>
            <div className="label" style={{ color: "var(--ink-2)", marginBottom: 6 }}>Estimated quantity</div>
            <select style={{ ...fieldStyle, fontWeight: 600 }} value={quantity} onChange={e => setQuantity(e.target.value)}>
              {["25–49", "50–199", "200–499", "500+"].map(o => <option key={o}>{o}</option>)}
            </select>
          </label>
        </div>
        <label style={{ display: "block" }}>
          <div className="label" style={{ color: "var(--ink-2)", marginBottom: 6 }}>Anything we should know?</div>
          <textarea placeholder="Co-branding, timeline, gift wrapping…" rows={4} style={{ ...fieldStyle, resize: "vertical" }} value={notes} onChange={e => setNotes(e.target.value)} />
        </label>

        <button type="submit" disabled={isSending} style={{
          display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
          marginTop: 8,
          background: isSending ? "rgba(43,26,8,0.2)" : (submitMethod === "whatsapp" ? "#25D366" : "var(--ink)"),
          color: "var(--paper)",
          border: "2px solid var(--ink)", borderRadius: 999,
          padding: "14px 28px", fontWeight: 800, fontSize: 16, cursor: isSending ? "not-allowed" : "pointer",
          boxShadow: isSending ? "none" : "4px 4px 0 var(--ink)", transition: "transform 0.1s",
        }}
          onMouseDown={e => { if (!isSending) e.currentTarget.style.transform = "translate(2px,2px)"; }}
          onMouseUp={e => e.currentTarget.style.transform = "none"}
          onMouseLeave={e => e.currentTarget.style.transform = "none"}
        >
          {submitMethod === "whatsapp" ? <WAIcon /> : <EmailIcon />}
          {submitMethod === "whatsapp" ? "Send request" : "Send via Email"}
        </button>
        <p style={{ fontSize: 12, color: "var(--ink-2)", textAlign: "center", margin: 0, fontWeight: 600, display: "flex", alignItems: "center", justifyContent: "center", gap: 5 }}>
          {submitMethod === "whatsapp" ? (
            <>
              <WAIcon size={13} color="var(--ink-2)" />
              Clicking will open WhatsApp with your enquiry pre-filled.
            </>
          ) : (
            <>
              <EmailIcon size={13} color="var(--ink-2)" />
              Clicking will send the request directly to our inbox.
            </>
          )}
        </p>

        {/* Toast Notification */}
        {showToast && (
          <div style={{
            position: "fixed",
            bottom: 40,
            right: 40,
            width: "calc(100% - 80px)",
            maxWidth: 400,
            background: "var(--cream)",
            border: "2px solid var(--ink)",
            borderRadius: 16,
            padding: "16px 20px",
            boxShadow: "6px 6px 0 var(--ink)",
            zIndex: 100000,
            animation: "slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            display: "flex",
            gap: 12,
            alignItems: "center"
          }}>
            <div style={{
              width: 40, height: 40, borderRadius: "50%",
              background: "var(--sage)", color: "var(--paper)",
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 20, flexShrink: 0, border: "2px solid var(--ink)"
            }}>✓</div>
            <div>
              <div style={{ fontWeight: 800, fontFamily: "var(--font-display)", fontSize: 16, color: "var(--ink)" }}>Email Sent!</div>
              <div style={{ fontSize: 13, color: "var(--ink-2)", marginTop: 2, fontWeight: 500 }}>We have received your request and will respond soon.</div>
            </div>
          </div>
        )}
      </div>
      <style>{`
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </form>
  );
}

function WAIcon({ size = 17, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon({ size = 18, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
      <polyline points="22,6 12,13 2,6"></polyline>
    </svg>
  );
}


function Field({ l, placeholder, type = "text", textarea }) {
  const baseStyle = {
    background: "var(--cream)",
    border: "2px solid var(--ink)",
    borderRadius: 14,
    padding: "12px 16px",
    fontSize: 15,
    fontFamily: "var(--font-body)",
    color: "var(--ink)",
    outline: "none",
    width: "100%",
    fontWeight: 500,
  };
  return (
    <label style={{ display: "block" }}>
      <div className="label" style={{ color: "var(--ink-2)", marginBottom: 6 }}>{l}</div>
      {textarea ? (
        <textarea placeholder={placeholder} rows={4} style={{ ...baseStyle, resize: "vertical" }} />
      ) : (
        <input placeholder={placeholder} type={type} style={baseStyle} />
      )}
    </label>
  );
}

function Select({ l, options }) {
  return (
    <label style={{ display: "block" }}>
      <div className="label" style={{ color: "var(--ink-2)", marginBottom: 6 }}>{l}</div>
      <select style={{
        background: "var(--cream)",
        border: "2px solid var(--ink)",
        borderRadius: 14,
        padding: "12px 16px",
        fontSize: 15,
        fontFamily: "var(--font-body)",
        color: "var(--ink)",
        outline: "none",
        width: "100%",
        fontWeight: 600,
      }}>
        {options.map(o => <option key={o}>{o}</option>)}
      </select>
    </label>
  );
}

/* ─── COMMUNITY PAGE ───────────────────────────────────── */

function CommunityPage({ onNav }) {
  const stories = [
    { t: "A bedtime ritual", b: "We started reading one card before bed two months ago. Now my four-year-old reminds me. ख is her favourite, \"khelna jaau\" because she gets to pick what we play tomorrow.", i: "🌿", c: "Mother of one · Kathmandu" },
    { t: "Five-minute warm-up", b: "I open every Wednesday class with one card. Kids fight over who gets to read it. We now have a tiny shrine of their favourite cards on the bulletin board.", i: "✦", c: "Class 3 teacher · Pokhara" },
    { t: "Diaspora dinners", b: "We live in London. The kids speak more English than Nepali. The Ka–Kha deck lets us slip a syllable into dinner without it feeling like homework.", i: "❀", c: "Family of four · London" },
    { t: "Closing my classes", b: "I end every kids' yoga class with one mantra card. The shanti path one has become a tradition — they say it back to me at the door.", i: "◈", c: "Yoga teacher · Lalitpur" },
    { t: "Annaprashan gift", b: "Gifted ten decks at my nephew's annaprashan. Got messages for weeks. Now half my family group chat has switched to TWC for baby gifts.", i: "✺", c: "Uncle of many · Toronto" },
    { t: "Our morning meeting", b: "We homeschool three kids. Each morning, one of them pulls a card and we talk about the word for ten minutes. It's the most peaceful part of our day.", i: "❀", c: "Homeschool parent · Bhaktapur" },
  ];

  const colors = ["var(--peach-light)", "var(--sage-light)", "var(--saffron-50)", "var(--paper)"];

  return (
    <div className="page-enter">
      <section className="surface-cream" style={{ position: "relative", overflow: "hidden", paddingTop: 24, paddingBottom: 64 }}>
        <Bubble size={280} color="var(--peach)" style={{ top: -100, right: -80, opacity: 0.55 }} />
        <Bubble size={180} color="var(--sage)" style={{ bottom: -40, left: -50, opacity: 0.55 }} />
        <Squiggle width={140} color="var(--saffron)" style={{ top: 120, left: 100 }} />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <BackBtn onClick={() => onNav("home")} />
          <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
            <span className="eyebrow">The Community</span>
            <h1 className="h-display" style={{ marginTop: 24 }}>
              Cards on <span className="hand">kitchen tables.</span><br />
              In classrooms. <span className="ink-pill">In suitcases.</span>
            </h1>
            <p className="lede" style={{ margin: "26px auto 0", maxWidth: 560 }}>
              The best part of making Tiny Wisdom Cards is hearing where they end up. These are some of those places — sent in by families, teachers and friends.
            </p>
          </div>
        </div>
      </section>

      <section className="section surface-paper">
        <div className="container">
          <div style={{ columnCount: 3, columnGap: 24 }} className="story-cols">
            {stories.map((s, i) => (
              <article key={i} className="card" style={{
                breakInside: "avoid",
                marginBottom: 24,
                background: colors[i % colors.length],
                position: "relative",
                transform: `rotate(${(i % 2 ? 1 : -1) * 0.8}deg)`,
              }}>
                <div style={{
                  position: "absolute", top: -2, left: 24,
                  fontFamily: "var(--font-display)", fontSize: 60, fontWeight: 800,
                  color: "var(--ink)", opacity: 0.18, lineHeight: 1,
                }}>"</div>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16, marginTop: 8 }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: 999, background: "var(--saffron)",
                    color: "var(--paper)", display: "inline-flex", alignItems: "center", justifyContent: "center", fontSize: 24,
                    border: "2.5px solid var(--ink)",
                  }}>{s.i}</div>
                </div>
                <h3 className="h-3" style={{ marginBottom: 10 }}>{s.t}</h3>
                <p style={{ fontSize: 15, color: "var(--ink)", lineHeight: 1.6, margin: 0 }}>{s.b}</p>
                <div style={{ fontSize: 12, color: "var(--ink-2)", marginTop: 16, paddingTop: 14, borderTop: "1.5px dashed rgba(43,26,8,0.2)", fontWeight: 600 }}>
                  — {s.c}
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div style={{
            marginTop: 64,
            padding: 56,
            background: "var(--saffron)",
            borderRadius: 32,
            color: "var(--paper)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
            border: "3px solid var(--ink)",
            boxShadow: "14px 14px 0 var(--ink)",
          }}>
            <Bubble size={240} color="var(--paper)" style={{ top: -80, right: -60, opacity: 0.18 }} />
            <Bubble size={180} color="var(--paper)" style={{ bottom: -60, left: -40, opacity: 0.18 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <h2 className="h-1" style={{ color: "var(--paper)" }}>
                Share <span className="hand" style={{ color: "var(--paper)" }}>your card story.</span>
              </h2>
              <p style={{ color: "rgba(255,248,231,0.92)", maxWidth: 540, margin: "16px auto 28px", fontSize: 17, fontWeight: 500 }}>
                Tag <b>@tinywisdomcards</b> on our Socials, the loveliest stories end up in our next print run guidebook.
              </p>
              <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                <a href="https://www.instagram.com/tinywisdomcards" target="_blank" rel="noreferrer" className="btn btn-lg" style={{ background: "var(--paper)", color: "var(--ink)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                  Send us on Instagram
                </a>
                <a href="https://www.facebook.com/tinywisdomcards/" target="_blank" rel="noreferrer" className="btn btn-lg" style={{ background: "var(--paper)", color: "var(--ink)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                  Send us on Facebook
                </a>
                <a href="https://www.tiktok.com/@tinywisdomcards" target="_blank" rel="noreferrer" className="btn btn-lg" style={{ background: "var(--paper)", color: "var(--ink)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8 }}>
                  <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.28 6.28 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.79a4.85 4.85 0 01-1.01-.1z" /></svg>
                  Send us on TikTok
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .story-cols { column-count: 2 !important; }
        }
        @media (max-width: 600px) {
          .story-cols { column-count: 1 !important; }
        }
      `}</style>
    </div>
  );
}

export { DeckPage, KakhaPage, CardOfDayPage, BulkPage, CommunityPage, PrivacyPage, BackBtn, Spec, Anatomy, Info };

function PrivacyPage({ onNav }) {
  const sections = [
    {
      title: "Interpretation and Definitions",
      content: (
        <>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", fontWeight: 500, marginBottom: 16 }}>
            Words with capitalised initial letters have meanings defined under the following conditions. Definitions apply equally in singular and plural forms.
          </p>
          <ul style={{ paddingLeft: 20, display: "grid", gap: 8 }}>
            {[
              ["Account", "A unique account created for you to access our Service or parts of it."],
              ["Affiliate", "An entity that controls, is controlled by, or is under common control with a party."],
              ["Company", `Tiny Wisdom Cards Pvt. Ltd., Tinkune, Subidhanagar 44600, Kathmandu, Nepal.`],
              ["Cookies", "Small files placed on your device by a website, containing details of your browsing history."],
              ["Country", "Nepal"],
              ["Device", "Any device that can access the Service (computer, phone, tablet, etc.)."],
              ["Personal Data", "Any information relating to an identified or identifiable individual."],
              ["Service", "The Website — tinywisdomcards.com"],
              ["Usage Data", "Data collected automatically when using the Service (e.g., IP address, browser type, pages visited, time spent)."],
              ["You", "The individual accessing the Service, or the company on whose behalf that individual acts."],
            ].map(([term, def]) => (
              <li key={term} style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)", listStyle: "none", paddingLeft: 0 }}>
                <strong style={{ color: "var(--ink)" }}>{term}:</strong> {def}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "Types of Data We Collect",
      content: (
        <>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", fontWeight: 500, marginBottom: 12 }}>
            While using our Service, we may ask you to provide personally identifiable information including:
          </p>
          <ul style={{ paddingLeft: 20, display: "grid", gap: 6 }}>
            {["Email address", "First and last name", "Phone number", "Delivery address (city, province, postal code)", "Usage Data (collected automatically)"].map(item => (
              <li key={item} style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)" }}>{item}</li>
            ))}
          </ul>
          <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--ink-2)", marginTop: 14 }}>
            <strong>Usage Data</strong> is collected automatically and may include your device's IP address, browser type and version, pages you visit, time and date of your visit, time spent on pages, and other diagnostic data.
          </p>
        </>
      ),
    },
    {
      title: "Tracking Technologies and Cookies",
      content: (
        <>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", marginBottom: 12 }}>
            We use cookies and similar tracking technologies to track activity on our Service and store certain information. Technologies used include beacons, tags, and scripts.
          </p>
          <ul style={{ paddingLeft: 20, display: "grid", gap: 8 }}>
            {[
              ["Necessary / Essential Cookies", "Provide essential Service features and authenticate users."],
              ["Cookies Policy / Notice Acceptance Cookies", "Identify whether users have accepted the cookies policy."],
              ["Functionality Cookies", "Remember your choices and preferences for a personalised experience."],
            ].map(([name, desc]) => (
              <li key={name} style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)" }}>
                <strong style={{ color: "var(--ink)" }}>{name}:</strong> {desc}
              </li>
            ))}
          </ul>
        </>
      ),
    },
    {
      title: "How We Use Your Personal Data",
      content: (
        <ul style={{ paddingLeft: 20, display: "grid", gap: 6 }}>
          {[
            "Provide and maintain our Service",
            "Manage your Account and order reservations",
            "Perform and fulfil contracts for products or services",
            "Contact you for operational reasons or updates about your order",
            "Provide news, offers, and similar service information (you may opt out at any time)",
            "Manage your requests and enquiries",
            "Process business transfers (e.g., merger or acquisition)",
            "Analyse and improve our Service",
          ].map(item => (
            <li key={item} style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)" }}>{item}</li>
          ))}
        </ul>
      ),
    },
    {
      title: "Retention of Your Personal Data",
      content: (
        <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
          We retain your Personal Data only as long as necessary for the purposes set out in this Privacy Policy, to comply with legal obligations, resolve disputes, and enforce our agreements. Usage Data is generally retained for a shorter period unless required for security or legal reasons.
        </p>
      ),
    },
    {
      title: "Transfer of Your Personal Data",
      content: (
        <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
          Your information may be processed on computers located outside your country where data protection laws may differ. By using our Service and providing your information, you consent to such transfers. We ensure adequate controls are in place to protect your data.
        </p>
      ),
    },
    {
      title: "Deleting Your Personal Data",
      content: (
        <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
          You have the right to request deletion of your personal data at any time. You may contact us directly to make this request. We will respond within 7 business days. Note that we may retain certain information as required by law or to fulfil a legitimate business purpose.
        </p>
      ),
    },
    {
      title: "Disclosure of Your Personal Data",
      content: (
        <ul style={{ paddingLeft: 20, display: "grid", gap: 8 }}>
          {[
            ["Business Transactions", "In the event of a merger, acquisition, or asset sale, your data may be transferred."],
            ["Law Enforcement", "We may disclose your data as required by law or in response to valid requests from public authorities."],
            ["Other Legal Requirements", "To comply with legal obligations, defend our rights, investigate wrongdoing, or protect the safety of users."],
          ].map(([title, desc]) => (
            <li key={title} style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)" }}>
              <strong style={{ color: "var(--ink)" }}>{title}:</strong> {desc}
            </li>
          ))}
        </ul>
      ),
    },
    {
      title: "Security of Your Personal Data",
      content: (
        <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
          We strive to use commercially acceptable means to protect your Personal Data. However, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security.
        </p>
      ),
    },
    {
      title: "Children's Privacy",
      content: (
        <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
          Our Service is not directed to anyone under the age of 13. We do not knowingly collect personal data from children under 13. If you are a parent or guardian and believe your child has provided us with personal data, please contact us immediately and we will take steps to remove it.
        </p>
      ),
    },
    {
      title: "Links to Other Websites",
      content: (
        <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
          Our Service may contain links to third-party websites. We have no control over, and assume no responsibility for, the content, privacy policies, or practices of any third-party sites. We encourage you to review the privacy policy of any site you visit.
        </p>
      ),
    },
    {
      title: "Changes to This Privacy Policy",
      content: (
        <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)" }}>
          We may update this Privacy Policy at any time. We will notify you of significant changes by posting the updated policy on this page and revising the "Last updated" date. For material changes, we may also notify you by email or a prominent notice on our Service.
        </p>
      ),
    },
  ];

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="surface-cream" style={{ position: "relative", overflow: "hidden", paddingTop: 32, paddingBottom: 80 }}>
        <Bubble size={280} color="var(--peach)" style={{ top: -100, right: -80, opacity: 0.45 }} />
        <Bubble size={160} color="var(--sage)" style={{ bottom: -60, left: -50, opacity: 0.3 }} />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <BackBtn onClick={() => onNav("home")} />
          <div style={{ maxWidth: 760, margin: "0 auto", paddingTop: 16 }}>
            <span className="chip chip-sage">Legal</span>
            <h1 className="h-display" style={{ marginTop: 24, fontSize: "clamp(40px, 6vw, 72px)" }}>
              Privacy <span className="hand" style={{ color: "var(--saffron)" }}>Policy.</span>
            </h1>
            <p className="lede" style={{ marginTop: 16, color: "var(--ink-2)", maxWidth: "52ch" }}>
              Last updated: August 8, 2025 · Read in about 3 minutes.
            </p>
            <p style={{ marginTop: 12, fontSize: 16, lineHeight: 1.75, color: "var(--ink-2)", maxWidth: "62ch" }}>
              This Privacy Policy describes how Tiny Wisdom Cards Pvt. Ltd. ("we", "us", "our") collects, uses, and discloses your information when you use our website. By using the Service, you agree to the collection and use of information in accordance with this policy.
            </p>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="section surface-paper">
        <div className="container">
          <div style={{ maxWidth: 760, margin: "0 auto", display: "grid", gap: 48 }}>
            {sections.map((s, i) => (
              <div key={i} style={{
                borderLeft: "4px solid var(--saffron)",
                paddingLeft: 28,
              }}>
                <h2 style={{
                  fontFamily: "var(--font-display)", fontSize: 20, fontWeight: 800,
                  letterSpacing: "-0.02em", marginBottom: 14, color: "var(--ink)",
                }}>{i + 1}. {s.title}</h2>
                {s.content}
              </div>
            ))}

            {/* Contact box */}
            <div style={{
              background: "var(--cream)", borderRadius: 20, border: "2px solid var(--ink)",
              padding: "28px 32px", boxShadow: "5px 5px 0 var(--ink)", marginTop: 8,
            }}>
              <p style={{ fontFamily: "var(--font-hand)", fontSize: 24, color: "var(--saffron)", marginBottom: 12 }}>
                ✦ Contact Us
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: "var(--ink-2)", marginBottom: 12 }}>
                If you have any questions about this Privacy Policy, please reach out:
              </p>
              <div style={{ display: "grid", gap: 6 }}>
                <a href="mailto:tinywisdomcards@gmail.com" style={{ fontSize: 15, fontWeight: 700, color: "var(--saffron)", textDecoration: "none" }}>
                  ✉ tinywisdomcards@gmail.com
                </a>
                <a href="tel:+9779705812366" style={{ fontSize: 15, fontWeight: 700, color: "var(--ink)", textDecoration: "none" }}>
                  📞 +977 970-581-2366
                </a>
              </div>
            </div>

            {/* Note card */}
            <div style={{
              background: "var(--peach)", borderRadius: 20, border: "2px solid var(--ink)",
              padding: "24px 28px", boxShadow: "4px 4px 0 var(--ink)",
            }}>
              <p style={{ fontFamily: "var(--font-hand)", fontSize: 22, color: "var(--ink)", marginBottom: 8 }}>
                ✦ A note from us
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.75, color: "var(--ink)" }}>
                Tiny Wisdom Cards is a small, family-run studio in Kathmandu. We care deeply about the trust you place in us when you order. This policy will always reflect what we actually do — not legal boilerplate written to confuse.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



