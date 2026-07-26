"use client";
import React from "react";

const SLIDES = [
  { src: "/assets/promo/slide-3.png", alt: "Sanskar Lipi — open for pre-booking" },
  { src: "/assets/promo/slide-1.png", alt: "Sanskar Lipi learning cards — every letter teaches something new" },
  { src: "/assets/promo/slide-2.png", alt: "Tiny yet powerful — big life lessons, one card at a time" },
  { src: "/assets/promo/slide-4.png", alt: "Pre-booking open — contact Tiny Wisdom Cards" },
];

const SWIPE_THRESHOLD = 50;

export function PromoSlideshow({ isOpen, onClose }) {
  const [idx, setIdx] = React.useState(0);
  const touchStartX = React.useRef(null);
  const dragX = React.useRef(0);
  const [offset, setOffset] = React.useState(0);
  const [animating, setAnimating] = React.useState(true);

  React.useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  React.useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") go(1);
      if (e.key === "ArrowLeft") go(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, idx, onClose]);

  const go = (dir) => {
    setAnimating(true);
    setOffset(0);
    setIdx((i) => {
      const next = i + dir;
      if (next < 0) return 0;
      if (next >= SLIDES.length) return SLIDES.length - 1;
      return next;
    });
  };

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    dragX.current = 0;
    setAnimating(false);
  };

  const onTouchMove = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    dragX.current = dx;
    setOffset(dx);
  };

  const onTouchEnd = () => {
    setAnimating(true);
    if (dragX.current <= -SWIPE_THRESHOLD) go(1);
    else if (dragX.current >= SWIPE_THRESHOLD) go(-1);
    else setOffset(0);
    touchStartX.current = null;
    dragX.current = 0;
  };

  if (!isOpen) return null;

  const isLast = idx === SLIDES.length - 1;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Sanskar Lipi promo"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 10000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "16px",
        background: "rgba(43,26,8,0.55)",
        backdropFilter: "blur(6px)",
      }}
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 420,
          maxHeight: "min(88vh, 720px)",
          background: "#FBAA27",
          border: "4px solid var(--ink)",
          borderRadius: 24,
          boxShadow: "8px 8px 0 var(--ink)",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          animation: "slideUp 0.35s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: 12,
            right: 12,
            zIndex: 3,
            width: 40,
            height: 40,
            borderRadius: 999,
            border: "2.5px solid var(--ink)",
            background: "var(--paper)",
            color: "var(--ink)",
            fontSize: 22,
            lineHeight: 1,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "3px 3px 0 var(--ink)",
          }}
        >
          ×
        </button>

        <div
          style={{
            flex: 1,
            overflow: "hidden",
            touchAction: "pan-y",
            cursor: "grab",
            minHeight: 0,
          }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            style={{
              display: "flex",
              height: "100%",
              width: `${SLIDES.length * 100}%`,
              transform: `translateX(calc(${(-idx * 100) / SLIDES.length}% + ${offset}px))`,
              transition: animating ? "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)" : "none",
            }}
          >
            {SLIDES.map((slide) => (
              <div
                key={slide.src}
                style={{
                  width: `${100 / SLIDES.length}%`,
                  height: "100%",
                  flexShrink: 0,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#FBAA27",
                }}
              >
                <img
                  src={slide.src}
                  alt={slide.alt}
                  draggable={false}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    display: "block",
                    userSelect: "none",
                    pointerEvents: "none",
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 12,
            padding: "14px 16px 16px",
            background: "var(--paper)",
            borderTop: "3px solid var(--ink)",
          }}
        >
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => {
                  setAnimating(true);
                  setOffset(0);
                  setIdx(i);
                }}
                aria-label={`Go to slide ${i + 1}`}
                style={{
                  width: i === idx ? 28 : 10,
                  height: 10,
                  borderRadius: 999,
                  border: "2px solid var(--ink)",
                  background: i === idx ? "var(--saffron)" : "var(--paper)",
                  padding: 0,
                  cursor: "pointer",
                  transition: "all 0.25s",
                }}
              />
            ))}
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            {idx > 0 && (
              <button
                type="button"
                className="btn btn-ghost"
                onClick={() => go(-1)}
                style={{
                  padding: "8px 14px",
                  fontSize: 13,
                  border: "2.5px solid var(--ink)",
                  borderRadius: 999,
                  background: "var(--paper)",
                  cursor: "pointer",
                  fontWeight: 700,
                }}
              >
                Back
              </button>
            )}
            <button
              type="button"
              onClick={() => (isLast ? onClose() : go(1))}
              style={{
                padding: "8px 18px",
                fontSize: 13,
                border: "2.5px solid var(--ink)",
                borderRadius: 999,
                background: "var(--saffron)",
                color: "var(--ink)",
                cursor: "pointer",
                fontWeight: 800,
                boxShadow: "3px 3px 0 var(--ink)",
              }}
            >
              {isLast ? "Got it" : "Next"}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(24px) scale(0.96); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
}
