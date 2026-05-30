import React from 'react';
import Image from 'next/image';
import { Logo, Footer, Star } from './nav.jsx';
// style-options.jsx — 4 distinct hero design directions

/* ═══════════════════════════════════════════════════════════
   A · EDITORIAL QUIET
   Aesop / The Gentlewoman / Apartamento.
   Massive serif italic, generous whitespace, ink + cream,
   saffron used only as a tiny ink accent. No motifs.
═══════════════════════════════════════════════════════════ */
function StyleEditorial() {
  return (
    <div className="ab-root" style={{
      background: "#F4EDDF",
      color: "#1A1208",
      fontFamily: '"Manrope", sans-serif',
      width: "100%", height: "100%",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Top bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "32px 64px", borderBottom: "1px solid rgba(26,18,8,0.12)",
      }}>
        <div style={{
          fontFamily: '"Newsreader", serif', fontStyle: "italic",
          fontSize: 24, fontWeight: 500, letterSpacing: "-0.01em",
        }}>tiny wisdom</div>
        <div style={{ display: "flex", gap: 36, fontSize: 13, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase" }}>
          <span>Decks</span><span>Ka–Kha</span><span>Stories</span><span>Stockists</span>
        </div>
        <div style={{
          fontSize: 12, fontWeight: 700, letterSpacing: "0.16em", textTransform: "uppercase",
          borderBottom: "1.5px solid #1A1208", paddingBottom: 4,
        }}>Order →</div>
      </div>

      {/* Hero */}
      <div style={{ padding: "72px 64px 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", height: "calc(100% - 90px)" }}>
        <div>
          <div style={{
            fontSize: 11, fontWeight: 700, letterSpacing: "0.24em", textTransform: "uppercase",
            color: "#9A6534", marginBottom: 32, display: "flex", alignItems: "center", gap: 12,
          }}>
            <span style={{ width: 32, height: 1, background: "#9A6534" }} />
            Issue No. 02 · The Ka–Kha
          </div>

          <h1 style={{
            fontFamily: '"Newsreader", serif',
            fontSize: 124, fontWeight: 400, lineHeight: 0.95, letterSpacing: "-0.03em",
            margin: 0, color: "#1A1208",
          }}>
            On letters,<br />
            <span style={{ fontStyle: "italic", color: "#9A6534" }}>and the</span><br />
            quiet they carry.
          </h1>

          <p style={{
            fontFamily: '"Newsreader", serif', fontSize: 19, lineHeight: 1.55,
            maxWidth: "44ch", marginTop: 36, color: "#3A2B18",
          }}>
            Two hand-illustrated decks. Sixty-three small cards. A bilingual library of letters, legends and values — passed gently from one generation to the next.
          </p>

          <div style={{
            display: "flex", alignItems: "center", gap: 20, marginTop: 44,
          }}>
            <span style={{
              padding: "16px 28px", border: "1px solid #1A1208",
              fontSize: 12, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase",
            }}>Browse the decks</span>
            <span style={{ fontSize: 13, color: "#3A2B18", fontStyle: "italic", fontFamily: '"Newsreader", serif' }}>
              Free shipping in Nepal
            </span>
          </div>
        </div>

        {/* Image side - single card, full bleed, museum-style */}
        <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center" }}>
          <div style={{
            position: "relative", width: "85%", aspectRatio: "0.71/1",
            margin: "0 0 0 auto",
            boxShadow: "0 30px 80px rgba(20,16,8,0.18)",
            borderRadius: 4,
            overflow: "hidden",
          }}>
            <Image src="/assets/kakha-cover.png" width={197} height={293} alt="Ka–Kha Sanskaar Lipi deck cover — bilingual learning cards, Kathmandu" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
          <div style={{
            position: "absolute", left: -8, top: 32,
            fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.18em",
            color: "#3A2B18", writingMode: "vertical-rl", transform: "rotate(180deg)",
          }}>SANSKAR LIPI · COVER · MMXXVI</div>
          <div style={{
            position: "absolute", bottom: 24, left: -120,
            fontFamily: '"Newsreader", serif', fontStyle: "italic", fontSize: 14, color: "#3A2B18",
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <span style={{ width: 60, height: 1, background: "#3A2B18" }} />
            Plate 01
          </div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   B · FOLK MAXIMAL
   Heavy Nepali pattern. Multi-color blocks. Hand-painted feel.
   Saffron + plum + teal + mustard + sage.
═══════════════════════════════════════════════════════════ */
function StyleFolk() {
  return (
    <div className="ab-root" style={{
      background: "#E8621A",
      color: "#FFF8E7",
      fontFamily: '"Manrope", sans-serif',
      width: "100%", height: "100%",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Decorative top border — paisley/teeth band */}
      <FolkBand top />

      {/* Top bar */}
      <div style={{
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "24px 56px", color: "#FFF8E7",
        position: "relative", zIndex: 2,
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{
            width: 44, height: 44, borderRadius: 999,
            background: "#FFF8E7", color: "#E8621A",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: '"Tiro Devanagari Hindi", serif', fontSize: 26, fontWeight: 500,
          }}>क</div>
          <span style={{
            fontFamily: '"Yeseva One", serif', fontSize: 20, letterSpacing: "0.02em",
          }}>Tiny Wisdom</span>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 13, fontWeight: 600 }}>
          {["Decks", "Ka–Kha", "Card of Day", "Bulk", "Community"].map(x => (
            <span key={x} style={{ opacity: 0.9 }}>{x}</span>
          ))}
        </div>
        <span style={{
          padding: "10px 22px", background: "#4A1E66", color: "#FFF8E7",
          borderRadius: 999, fontSize: 13, fontWeight: 700,
        }}>Order Now</span>
      </div>

      {/* Hero panels */}
      <div style={{ display: "grid", gridTemplateColumns: "1.1fr 0.9fr", height: "calc(100% - 110px)" }}>
        <div style={{
          padding: "48px 56px",
          position: "relative",
        }}>
          {/* Plum corner mandala */}
          <FolkMandala size={300} color="#4A1E66" opacity={0.18} style={{ position: "absolute", top: -40, right: -40 }} />

          <div style={{
            display: "inline-block",
            padding: "8px 18px", background: "#2D6E60",
            borderRadius: 999, fontSize: 12, fontWeight: 700, letterSpacing: "0.16em",
            marginBottom: 28,
          }}>क ख ग · A B C · ONE LIBRARY</div>

          <h1 style={{
            fontFamily: '"Yeseva One", serif',
            fontSize: 96, fontWeight: 400, lineHeight: 0.96,
            letterSpacing: "-0.01em", margin: 0,
            color: "#FFF8E7",
            textShadow: "2px 2px 0 #4A1E66",
          }}>
            From <span style={{ fontFamily: '"Tiro Devanagari Hindi", serif' }}>क</span>
            <br />
            to <span style={{ color: "#FFE38A" }}>Z,</span><br />
            with a little <span style={{ fontStyle: "italic" }}>love.</span>
          </h1>

          <p style={{
            fontSize: 17, lineHeight: 1.55, maxWidth: "44ch", marginTop: 28,
            color: "#FFF8E7", opacity: 0.92,
          }}>
            Bilingual learning decks for tiny hands. Hand-drawn in Kathmandu. Stuffed with stories, scripts and the small wisdoms our grandmothers held dear.
          </p>

          <div style={{ display: "flex", gap: 14, marginTop: 36 }}>
            <span style={{
              padding: "16px 28px", background: "#4A1E66", color: "#FFF8E7",
              borderRadius: 999, fontSize: 14, fontWeight: 700,
              boxShadow: "0 6px 0 #2D0E40",
            }}>Explore the decks →</span>
            <span style={{
              padding: "16px 28px", background: "transparent", color: "#FFF8E7",
              border: "2px solid #FFF8E7", borderRadius: 999, fontSize: 14, fontWeight: 700,
            }}>Card of the Day</span>
          </div>

          {/* Stats row, painted style */}
          <div style={{ display: "flex", gap: 32, marginTop: 56 }}>
            {[["63", "cards"], ["2", "scripts"], ["3+", "years"]].map(([k, l]) => (
              <div key={k}>
                <div style={{
                  fontFamily: '"Yeseva One", serif', fontSize: 48, lineHeight: 1, color: "#FFE38A",
                }}>{k}</div>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: color blocks with cards */}
        <div style={{ position: "relative", overflow: "hidden", display: "grid", gridTemplateRows: "1fr 1fr 1fr" }}>
          <div style={{ background: "#2D6E60", position: "relative" }}>
            <FolkMandala size={260} color="#FFF8E7" opacity={0.12} style={{ position: "absolute", top: -50, left: -50 }} />
            <Image src="/assets/Ka-Kha-Front Ka.png" width={210} height={305} alt="Ka (क) card — Do your work, Ka–Kha Sanskaar Lipi deck" style={{ position: "absolute", top: 30, left: 60, width: 160, height: "auto", transform: "rotate(-8deg)", borderRadius: 8, boxShadow: "0 16px 30px rgba(0,0,0,0.3)" }} />
            <span style={{
              position: "absolute", top: 40, right: 40, fontFamily: '"Tiro Devanagari Hindi", serif',
              fontSize: 86, color: "#FFE38A",
            }}>क</span>
          </div>
          <div style={{ background: "#4A1E66", position: "relative" }}>
            <FolkMandala size={260} color="#FFE38A" opacity={0.12} style={{ position: "absolute", bottom: -50, right: -50 }} />
            <Image src="/assets/kakha-cover.png" width={197} height={293} alt="Ka–Kha Sanskaar Lipi deck cover — bilingual learning cards, Kathmandu" style={{ position: "absolute", top: 10, right: 60, width: 180, height: "auto", transform: "rotate(5deg)", borderRadius: 8, boxShadow: "0 16px 30px rgba(0,0,0,0.3)" }} />
            <span style={{
              position: "absolute", top: 70, left: 50, fontFamily: '"Yeseva One", serif',
              fontSize: 64, color: "#FFE38A", fontStyle: "italic", lineHeight: 0.95,
            }}>Sanskar<br />Lipi</span>
          </div>
          <div style={{ background: "#C9962A", position: "relative" }}>
            <FolkMandala size={260} color="#4A1E66" opacity={0.16} style={{ position: "absolute", top: -50, left: -50 }} />
            <Image src="/assets/Ka-Kha-Front a aa.png" width={210} height={304} alt="Vowels अ/आ card — Ka–Kha Sanskaar Lipi deck" style={{ position: "absolute", bottom: 30, left: 80, width: 160, height: "auto", transform: "rotate(7deg)", borderRadius: 8, boxShadow: "0 16px 30px rgba(0,0,0,0.3)" }} />
            <span style={{
              position: "absolute", bottom: 70, right: 40, fontFamily: '"Newsreader", serif',
              fontSize: 72, color: "#4A1E66", fontStyle: "italic", fontWeight: 500,
            }}>A→Z</span>
          </div>
        </div>
      </div>

      <FolkBand />
    </div>
  );
}

function FolkBand({ top }) {
  return (
    <div style={{
      height: 24,
      background: "repeating-linear-gradient(90deg, #4A1E66 0 18px, #FFE38A 18px 22px, #2D6E60 22px 40px, #FFE38A 40px 44px)",
      position: top ? "static" : "absolute",
      bottom: top ? "auto" : 0,
      left: 0, right: 0,
      borderTop: top ? "none" : "3px solid #4A1E66",
      borderBottom: top ? "3px solid #4A1E66" : "none",
    }} />
  );
}

function FolkMandala({ size = 200, color = "#fff", opacity = 0.15, style }) {
  return (
    <svg width={size} height={size} viewBox="0 0 200 200" style={{ opacity, ...style }} aria-hidden="true">
      <g fill="none" stroke={color} strokeWidth="1.5">
        <circle cx="100" cy="100" r="20" />
        <circle cx="100" cy="100" r="40" />
        <circle cx="100" cy="100" r="60" />
        <circle cx="100" cy="100" r="80" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          return <line key={i} x1={100 + Math.cos(a) * 22} y1={100 + Math.sin(a) * 22} x2={100 + Math.cos(a) * 80} y2={100 + Math.sin(a) * 80} />;
        })}
        {Array.from({ length: 8 }).map((_, i) => {
          const a = (i / 8) * Math.PI * 2;
          const x = 100 + Math.cos(a) * 60, y = 100 + Math.sin(a) * 60;
          return <circle key={"p" + i} cx={x} cy={y} r="4" fill={color} />;
        })}
      </g>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════════════
   C · STORYBOOK PLAYFUL
   Big rounded shapes, sticker feel, kid-first.
   Soft pastel saffron + sage + cream. Mascot energy.
═══════════════════════════════════════════════════════════ */
function StyleStorybook() {
  return (
    <div className="ab-root" style={{
      background: "#FFE8C2",
      color: "#2B1A08",
      fontFamily: '"Manrope", sans-serif',
      width: "100%", height: "100%",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Floating bubble decorations */}
      <div style={{ position: "absolute", top: -60, right: -60, width: 280, height: 280, borderRadius: "50%", background: "#F39B5C" }} />
      <div style={{ position: "absolute", top: 200, right: 280, width: 80, height: 80, borderRadius: "50%", background: "#A8C77F" }} />
      <div style={{ position: "absolute", bottom: -100, left: -80, width: 320, height: 320, borderRadius: "50%", background: "#A8C77F" }} />
      <div style={{ position: "absolute", bottom: 140, left: 280, width: 60, height: 60, borderRadius: "50%", background: "#E8621A" }} />
      <div style={{ position: "absolute", top: 80, left: "45%", width: 40, height: 40, borderRadius: "50%", background: "#E8621A" }} />

      {/* Squiggles */}
      <svg style={{ position: "absolute", top: 60, left: 100, opacity: 0.5 }} width="120" height="40" viewBox="0 0 120 40">
        <path d="M5 20 Q20 5 35 20 T65 20 T95 20 T115 20" stroke="#E8621A" strokeWidth="3" fill="none" strokeLinecap="round" />
      </svg>

      {/* Pill nav */}
      <div style={{
        position: "absolute", top: 28, left: "50%", transform: "translateX(-50%)",
        background: "#FFF8E7", borderRadius: 999, padding: 6,
        display: "flex", alignItems: "center", gap: 4,
        boxShadow: "0 8px 20px rgba(0,0,0,0.06)", zIndex: 5,
        border: "2px solid #2B1A08",
      }}>
        {["Home", "Decks", "Ka–Kha", "Card of Day", "Community"].map((x, i) => (
          <span key={x} style={{
            padding: "10px 18px",
            borderRadius: 999,
            background: i === 0 ? "#E8621A" : "transparent",
            color: i === 0 ? "#fff" : "#2B1A08",
            fontSize: 13, fontWeight: 700,
          }}>{x}</span>
        ))}
        <span style={{
          padding: "10px 20px", background: "#2B1A08", color: "#FFE8C2",
          borderRadius: 999, fontSize: 13, fontWeight: 700, marginLeft: 8,
        }}>Order ✦</span>
      </div>

      {/* Logo top left */}
      <div style={{
        position: "absolute", top: 36, left: 56,
        fontFamily: '"Caveat", cursive', fontSize: 32, fontWeight: 700, color: "#E8621A",
        zIndex: 5,
      }}>tiny wisdom</div>

      {/* Hero */}
      <div style={{
        position: "absolute", inset: 0,
        display: "grid", gridTemplateColumns: "1.1fr 1fr",
        padding: "140px 80px 80px",
        gap: 40, alignItems: "center", zIndex: 2,
      }}>
        <div style={{ position: "relative", zIndex: 3 }}>
          <span style={{
            display: "inline-block", padding: "10px 22px",
            background: "#2B1A08", color: "#FFE8C2",
            borderRadius: 999, fontSize: 12, fontWeight: 800, letterSpacing: "0.16em",
            transform: "rotate(-2deg)",
            marginBottom: 28,
          }}>HELLO, LITTLE ONES ✦</span>

          <h1 style={{
            fontFamily: '"Bricolage Grotesque", "Manrope", sans-serif',
            fontSize: 108, fontWeight: 800, lineHeight: 0.92, letterSpacing: "-0.035em",
            margin: 0, color: "#2B1A08",
          }}>
            Little <span style={{
              background: "#E8621A", color: "#FFF8E7", padding: "0 18px",
              borderRadius: 18, display: "inline-block", transform: "rotate(-2deg)",
            }}>cards</span><br />
            with big<br />
            <span style={{
              fontFamily: '"Caveat", cursive', fontWeight: 700, color: "#E8621A",
              fontSize: 160, lineHeight: 0.8,
            }}>wisdom</span> inside.
          </h1>

          <p style={{
            fontSize: 18, lineHeight: 1.55, maxWidth: "42ch", marginTop: 24,
            color: "#3A2B18",
          }}>
            For curious hands aged 3 and up. Two decks, sixty-three stories, and one happy box of letters.
          </p>

          <div style={{ display: "flex", gap: 14, marginTop: 32, alignItems: "center" }}>
            <span style={{
              padding: "18px 32px",
              background: "#2B1A08",
              color: "#FFE8C2",
              borderRadius: 999,
              fontSize: 16, fontWeight: 800,
              boxShadow: "6px 6px 0 #E8621A",
            }}>Get both decks ✦</span>
            <span style={{
              fontFamily: '"Caveat", cursive', fontSize: 22, color: "#E8621A", fontWeight: 700,
              transform: "rotate(-4deg)", display: "inline-block",
            }}>save 30%! ↗</span>
          </div>
        </div>

        {/* Right: stacked stickered cards */}
        <div style={{ position: "relative", height: "100%" }}>
          <div style={{
            position: "absolute", top: 40, left: 30, width: 240,
            background: "#FFF8E7", borderRadius: 24, padding: 10,
            border: "3px solid #2B1A08",
            boxShadow: "8px 8px 0 #2B1A08",
            transform: "rotate(-6deg)",
            overflow: "hidden",
            aspectRatio: "0.71/1",
          }}>
            <Image src="/assets/kakha-cover.png" width={197} height={293} alt="Ka–Kha Sanskaar Lipi deck cover — bilingual learning cards, Kathmandu" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 14 }} />
          </div>
          <div style={{
            position: "absolute", bottom: 30, right: 30, width: 240,
            background: "#FFF8E7", borderRadius: 24, padding: 10,
            border: "3px solid #2B1A08",
            boxShadow: "8px 8px 0 #2B1A08",
            transform: "rotate(6deg)",
            overflow: "hidden",
            aspectRatio: "0.71/1",
            zIndex: 2,
          }}>
            <Image src="/assets/Ka-Kha-Front a aa.png" width={210} height={304} alt="Vowels अ/आ card — Ka–Kha Sanskaar Lipi deck" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 14 }} />
          </div>
          {/* Star sticker */}
          <div style={{
            position: "absolute", top: 20, right: 100, zIndex: 4,
            width: 80, height: 80,
            background: "#A8C77F",
            border: "3px solid #2B1A08",
            borderRadius: 18,
            display: "flex", alignItems: "center", justifyContent: "center",
            transform: "rotate(12deg)",
            fontFamily: '"Caveat", cursive', fontSize: 22, fontWeight: 700, color: "#2B1A08",
            lineHeight: 1, textAlign: "center",
          }}>new!<br />2026</div>
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════
   D · POSTCARD STAMP
   Print-y. Big serif display + monospace details.
   Two-color ink + saffron. Stamp aesthetic.
═══════════════════════════════════════════════════════════ */
function StyleStamp() {
  return (
    <div className="ab-root" style={{
      background: "#F1ECDE",
      color: "#1A1208",
      fontFamily: '"Manrope", sans-serif',
      width: "100%", height: "100%",
      overflow: "hidden",
      position: "relative",
    }}>
      {/* Postage-style top bar */}
      <div style={{
        background: "#1A1208", color: "#F1ECDE",
        padding: "12px 56px", display: "flex", justifyContent: "space-between",
        fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: "0.18em",
        textTransform: "uppercase",
      }}>
        <span>SHIPPING WORLDWIDE · KTM ↔ EVERYWHERE</span>
        <span>EST. 2024 · NEPAL</span>
        <span>PREORDER OPEN · MAY 26</span>
      </div>

      {/* Nav */}
      <div style={{
        padding: "28px 56px", display: "flex", justifyContent: "space-between", alignItems: "center",
        borderBottom: "1.5px solid #1A1208",
      }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{
            width: 56, height: 56, border: "2px solid #1A1208",
            display: "flex", alignItems: "center", justifyContent: "center",
            position: "relative",
          }}>
            <span style={{
              fontFamily: '"Tiro Devanagari Hindi", serif', fontSize: 36, fontWeight: 500, color: "#E8621A",
              lineHeight: 1,
            }}>क</span>
          </div>
          <div>
            <div style={{
              fontFamily: '"DM Serif Display", serif', fontSize: 22, lineHeight: 1, color: "#1A1208",
            }}>TINY WISDOM</div>
            <div style={{
              fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.2em",
              color: "#1A1208", marginTop: 4,
            }}>CARDS · 2 DECKS · 63 LETTERS</div>
          </div>
        </div>
        <div style={{ display: "flex", gap: 32, fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase" }}>
          <span>01 / Decks</span><span>02 / Ka–Kha</span><span>03 / Daily</span><span>04 / Stockists</span>
        </div>
        <span style={{
          padding: "12px 24px", background: "#E8621A", color: "#F1ECDE",
          fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 700,
        }}>Order ↗</span>
      </div>

      {/* Hero: two-column with stamp on right */}
      <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", height: "calc(100% - 130px)", padding: "56px" }}>
        <div style={{ position: "relative" }}>
          <div style={{
            fontFamily: '"JetBrains Mono", monospace', fontSize: 11, letterSpacing: "0.22em",
            textTransform: "uppercase", color: "#E8621A", marginBottom: 24,
            display: "flex", alignItems: "center", gap: 12,
          }}>
            <span style={{ display: "inline-block", width: 8, height: 8, background: "#E8621A", borderRadius: 999 }} />
            Series № 02 — The Ka–Kha
          </div>

          <h1 style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: 142, fontWeight: 400, lineHeight: 0.92, letterSpacing: "-0.02em",
            margin: 0, color: "#1A1208",
          }}>
            Letters that <br />
            <span style={{ fontStyle: "italic", color: "#E8621A" }}>travel</span><br />
            with you.
          </h1>

          <p style={{
            fontSize: 17, lineHeight: 1.55, maxWidth: "44ch", marginTop: 28,
            color: "#3A2B18", fontFamily: '"Newsreader", serif',
          }}>
            A bilingual library of letters, legends and small values — pressed onto heavy matte stock, packed in Kathmandu, and shipped wherever your kitchen table happens to be.
          </p>

          {/* CTA + ticket */}
          <div style={{ display: "flex", alignItems: "stretch", marginTop: 40, gap: 0, maxWidth: 480 }}>
            <span style={{
              padding: "18px 28px", background: "#1A1208", color: "#F1ECDE",
              fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700,
              flex: 1, textAlign: "center",
            }}>Reserve a deck →</span>
            <span style={{
              padding: "18px 24px", background: "transparent", color: "#1A1208",
              border: "1.5px solid #1A1208",
              fontFamily: '"JetBrains Mono", monospace', fontSize: 12, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 700,
              borderLeft: 0,
            }}>Card of Day</span>
          </div>

          {/* Footer metadata */}
          <div style={{
            display: "flex", gap: 48, marginTop: 56,
            paddingTop: 24, borderTop: "1px dashed #1A1208",
          }}>
            {[
              ["63", "CARDS"], ["2", "SCRIPTS"], ["350GSM", "MATTE STOCK"], ["RS 559", "BUNDLE PRICE"]
            ].map(([k, l]) => (
              <div key={l}>
                <div style={{ fontFamily: '"DM Serif Display", serif', fontSize: 32, lineHeight: 1, color: "#1A1208" }}>{k}</div>
                <div style={{ fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.22em", color: "#3A2B18", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: stamp composition */}
        <div style={{ position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* Stamp frame */}
          <div style={{
            width: 380, padding: 14, background: "#F1ECDE",
            border: "2px dashed #1A1208",
            position: "relative",
            boxShadow: "12px 12px 0 #E8621A",
            transform: "rotate(-3deg)",
          }}>
            <div style={{ position: "relative", aspectRatio: "0.71/1", overflow: "hidden", border: "1px solid #1A1208" }}>
              <Image src="/assets/kakha-cover.png" width={197} height={293} alt="Ka–Kha Sanskaar Lipi deck cover — bilingual learning cards, Kathmandu" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{
              display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10,
              fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.16em", color: "#1A1208",
            }}>
              <span>क → ज्ञ · NEPAL</span>
              <span>RS · 300</span>
            </div>
          </div>
          {/* Postmark */}
          <div style={{
            position: "absolute", top: 30, right: 30,
            width: 110, height: 110, borderRadius: 999,
            border: "2px solid #E8621A",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", color: "#E8621A",
            fontFamily: '"JetBrains Mono", monospace', fontSize: 10, letterSpacing: "0.16em",
            transform: "rotate(15deg)",
            background: "rgba(241,236,222,0.7)",
          }}>
            <span>★</span>
            <span style={{ fontSize: 9, marginTop: 2 }}>KATHMANDU</span>
            <span style={{ fontSize: 16, fontFamily: '"DM Serif Display", serif', letterSpacing: 0, margin: "4px 0" }}>2026</span>
            <span style={{ fontSize: 9 }}>FIRST PRINT</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export {  StyleEditorial, StyleFolk, StyleStorybook, StyleStamp  };
