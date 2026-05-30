"use client";
import React from 'react';
import { TopNav, Footer, StickyCTA } from '../components/nav.jsx';
import { HomePage } from '../components/home.jsx';
import { DeckPage, KakhaPage, CardOfDayPage, BulkPage, CommunityPage, PrivacyPage } from '../components/pages.jsx';
import { TweaksPanel, TweakSection, TweakRadio, TweakColor, useTweaks } from '../components/tweaks-panel.jsx';
import { OrderForm } from '../components/order-form.jsx';

// app.jsx — main TWC app (Storybook Playful)

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "backdrop": "cream",
  "motif": "subtle",
  "accent": "#E8621A",
  "secondary": "#A8C77F",
  "ink": "#2B1A08"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = React.useState("home");
  const [scrolled, setScrolled] = React.useState(false);
  const [stickyVisible, setStickyVisible] = React.useState(false);
  const [orderOpen, setOrderOpen] = React.useState(false);
  const [orderSelection, setOrderSelection] = React.useState({ az: true, kakha: false });

  const openOrder = (selection = { az: true, kakha: false }) => {
    setOrderSelection(selection);
    setOrderOpen(true);
  };

  React.useEffect(() => {
    document.body.classList.remove("bg-cream", "bg-paper", "bg-peach", "motif-none", "motif-subtle", "motif-heavy");
    document.body.classList.add("bg-" + t.backdrop);
    document.body.classList.add("motif-" + t.motif);

    // Backdrop changes the body's --cream value
    const surfaces = {
      cream: "#FFE8C2",   // warm peach-cream (default)
      paper: "#FFF8E7",   // bright paper
      peach: "#FCC58E",   // warmer
    };
    document.body.style.background = surfaces[t.backdrop] || surfaces.cream;
    document.documentElement.style.setProperty("--cream", surfaces[t.backdrop] || surfaces.cream);
  }, [t.backdrop, t.motif]);

  React.useEffect(() => {
    document.documentElement.style.setProperty("--saffron", t.accent);
    document.documentElement.style.setProperty("--sage", t.secondary);
    document.documentElement.style.setProperty("--ink", t.ink);
  }, [t.accent, t.secondary, t.ink]);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      setStickyVisible(window.scrollY > 700 && window.scrollY < document.body.scrollHeight - window.innerHeight - 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    // Defer the initial read to avoid a forced reflow during hydration
    requestAnimationFrame(onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onNav = (id) => {
    setPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <TopNav page={page} onNav={onNav} scrolled={scrolled} onOrder={openOrder} />

      {orderOpen && (
        <OrderForm
          key={JSON.stringify(orderSelection)}
          isOpen={orderOpen}
          initialSelection={orderSelection}
          onClose={() => setOrderOpen(false)}
        />
      )}

      <main>
        {page === "home" && <HomePage onNav={onNav} onOrder={openOrder} />}
        {page === "deck" && <DeckPage onNav={onNav} onOrder={openOrder} />}
        {page === "kakha" && <KakhaPage onNav={onNav} onOrder={openOrder} />}
        {page === "cotd" && <CardOfDayPage onNav={onNav} />}
        {page === "bulk" && <BulkPage onNav={onNav} />}
        {page === "community" && <CommunityPage onNav={onNav} />}
        {page === "privacy" && <PrivacyPage onNav={onNav} />}
      </main>

      <Footer onNav={onNav} />

      <StickyCTA visible={stickyVisible} onClick={() => openOrder({ az: false, kakha: true })} />

      <TweaksPanel title="Tweaks" defaultOpen={false}>
        <TweakSection label="Backdrop" />
        <TweakRadio
          label="Surface"
          value={t.backdrop}
          options={["cream", "paper", "peach"]}
          onChange={(v) => setTweak("backdrop", v)}
        />
        <TweakSection label="Stickers & bubbles" />
        <TweakRadio
          label="Intensity"
          value={t.motif}
          options={["none", "subtle", "heavy"]}
          onChange={(v) => setTweak("motif", v)}
        />
        <TweakSection label="Colors" />
        <TweakColor
          label="Saffron"
          value={t.accent}
          options={["#E8621A", "#D94A0A", "#C73E1D", "#E89B2A"]}
          onChange={(v) => setTweak("accent", v)}
        />
        <TweakColor
          label="Secondary"
          value={t.secondary}
          options={["#A8C77F", "#7AA055", "#B0D4E3", "#FCC58E"]}
          onChange={(v) => setTweak("secondary", v)}
        />
        <TweakColor
          label="Ink"
          value={t.ink}
          options={["#2B1A08", "#1A0F02", "#3D2410", "#231514"]}
          onChange={(v) => setTweak("ink", v)}
        />
      </TweaksPanel>
    </div>
  );
}


export default App;
