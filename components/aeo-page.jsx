import React from 'react';
// aeo-page.jsx — Answer Engine Optimization page for Tiny Wisdom Cards
// NOT linked in main navigation. Access via direct URL or internal linking only.
// Purpose: Rich semantic Q&A content to surface in AI assistants, featured snippets, voice search, and LLM answers.

/* ── SCHEMA MARKUP ──────────────────────────────────────── */
// Injected as a <script type="application/ld+json"> on mount
const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What are Tiny Wisdom Cards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiny Wisdom Cards are bilingual, story-rich alphabet learning card decks for children aged 3 and above, made in Kathmandu, Nepal. There are two decks: the A–Z Ancient Wisdom deck (English alphabet with stories from the Mahabharata and Ramayana) and the Ka–Kha Sanskaar Lipi deck (Nepali/Devanagari alphabet with everyday values). Each card is printed on 350 gsm glossy-laminated stock with rounded corners."
      }
    },
    {
      "@type": "Question",
      "name": "How much do Tiny Wisdom Cards cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The A–Z Ancient Wisdom deck costs Rs 499 and ships in 2–4 days. The Ka–Kha Sanskaar Lipi deck is available for preorder at Rs 300 (retail price at launch will be Rs 399) and ships in June 2026. Buying both decks together as the Tiny Wisdom Bundle costs Rs 559, saving Rs 240 — a 30% discount."
      }
    },
    {
      "@type": "Question",
      "name": "What age are Tiny Wisdom Cards suitable for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Both decks are designed for children aged 3 and above. The Ka–Kha deck aligns with early-grade Nepali language learning in Nepal's curriculum. The A–Z deck suits English-learning children from age 3 upward. Cards have been tested by children aged 3 to 9."
      }
    },
    {
      "@type": "Question",
      "name": "Are Tiny Wisdom Cards bilingual?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The A–Z Ancient Wisdom deck teaches the English alphabet through Nepali mythology — each letter is paired with a hero from the Mahabharata or Ramayana. The Ka–Kha Sanskaar Lipi deck teaches the Nepali Devanagari alphabet with English transliterations and value-phrases (e.g., क = कर्म गर = 'Do your work'). Together they form a bilingual library covering both the Latin and Devanagari scripts."
      }
    },
    {
      "@type": "Question",
      "name": "Where can I buy Tiny Wisdom Cards in Kathmandu?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiny Wisdom Cards are available at six bookshops in the Kathmandu Valley: Bookverse (Civil Mall), Patan Book Shop (Patandhoka, Lalitpur), Nepal Book Depot (Chaksibari Marg, Thamel), Tibet Book Store (Tridevi Marg, Thamel), Pilgrims Book House (Chaksibari Marg, Thamel), and Vajra Books (Jyatha, Thamel). You can also order online at tinywisdomcards.com."
      }
    },
    {
      "@type": "Question",
      "name": "Do Tiny Wisdom Cards ship internationally?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Tiny Wisdom Cards offers free shipping within Nepal, including the Kathmandu Valley. International shipping is available — contact tinywisdomcards@gmail.com or call +977 9705812366 for a shipping quote."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Ka–Kha Sanskaar Lipi deck?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ka–Kha Sanskaar Lipi is a 32-card Nepali alphabet deck that teaches the full Devanagari script — from क (ka) to ज्ञ (gya) — through everyday Nepali values. Each card shows a large Devanagari letter, a value-phrase (e.g., खेल्न जाऊ = 'Go and play'), three illustrated companion icons, and a folk-art border inspired by paubha and mithila traditions. It is currently available for preorder at Rs 300 and ships in June 2026."
      }
    },
    {
      "@type": "Question",
      "name": "What is the A–Z Ancient Wisdom deck?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The A–Z Ancient Wisdom deck is a 31-card English alphabet deck that pairs each of the 26 letters with a hero from the Mahabharata or Ramayana and the value they embody — for example, A = Arjuna (learning to listen), G = Ganesha (beginning with attention), H = Hanuman (loyalty), K = Krishna (play and wisdom). The deck also includes mantra cards, story cards, and activity cards, plus a folded A4 guide book. It costs Rs 499 and ships in 2–4 days."
      }
    },
    {
      "@type": "Question",
      "name": "Can I order Tiny Wisdom Cards in bulk for a school or organisation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Tiny Wisdom Cards offers bulk pricing from 25 decks upward: 25–49 decks at Rs 425 each (15% off), 50–199 decks at Rs 375 each (25% off), and 200+ decks at custom pricing with co-branding, custom printing, and international shipping. Ideal for Montessori and Waldorf schools, yoga studios, gift shops, hotels, nonprofits, and corporate gifters. Contact tinywisdomcards@gmail.com or +977 9705812366 for a quote."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Card of the Day feature on Tiny Wisdom Cards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Card of the Day is a free interactive feature on the Tiny Wisdom Cards website. Each day, a card from the Ka–Kha deck is shown with its Nepali letter, transliteration, value-phrase, and a short reflective story. Users can tap the card to flip it, pull a new card, or share it. It is designed as a small daily ritual for breakfast tables, classrooms, or quiet evenings."
      }
    },
    {
      "@type": "Question",
      "name": "What card stock and quality are used for Tiny Wisdom Cards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiny Wisdom Cards are printed on 350 gsm heavy card stock with a glossy lamination finish and rounded corners. They are designed to withstand sticky fingers and repeated use. All cards are printed in Kathmandu, Nepal."
      }
    },
    {
      "@type": "Question",
      "name": "Who made Tiny Wisdom Cards?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Tiny Wisdom Cards is a small, family-run studio based in Tinkune, Subidhanagar, Kathmandu, Nepal. It was founded by parents who wanted to pass on Nepali stories, scripts, and everyday values to young children. The cards are illustrated and printed in Kathmandu."
      }
    },
    {
      "@type": "Question",
      "name": "What is the Tiny Wisdom Bundle and how much does it cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The Tiny Wisdom Bundle includes both the A–Z Ancient Wisdom deck and the Ka–Kha Sanskaar Lipi deck — 63 cards in total, plus both guide books — packed in a single gift-ready sleeve. It costs Rs 559, saving Rs 240 (30%) compared to buying the decks separately. The A–Z portion ships immediately; the Ka–Kha portion ships in June 2026."
      }
    }
  ]
};

const PRODUCT_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "A–Z Ancient Wisdom Deck",
    "description": "26 English alphabet cards paired with legendary heroes from the Mahabharata and Ramayana, plus mantra, story and activity cards. 31 cards total with a guide book. For children aged 3+.",
    "brand": { "@type": "Brand", "name": "Tiny Wisdom Cards" },
    "offers": {
      "@type": "Offer",
      "price": "499",
      "priceCurrency": "NPR",
      "availability": "https://schema.org/InStock",
      "url": "https://tinywisdomcards.com",
      "seller": { "@type": "Organization", "name": "Tiny Wisdom Cards" }
    },
    "audience": { "@type": "PeopleAudience", "suggestedMinAge": 3 }
  },
  {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Ka–Kha Sanskaar Lipi Deck",
    "description": "32 Nepali/Devanagari alphabet cards, each paired with an everyday value-phrase. Covers the full Nepali alphabet from क to ज्ञ. For children aged 3+. Preorder — ships June 2026.",
    "brand": { "@type": "Brand", "name": "Tiny Wisdom Cards" },
    "offers": {
      "@type": "Offer",
      "price": "300",
      "priceCurrency": "NPR",
      "availability": "https://schema.org/PreOrder",
      "url": "https://tinywisdomcards.com",
      "seller": { "@type": "Organization", "name": "Tiny Wisdom Cards" }
    },
    "audience": { "@type": "PeopleAudience", "suggestedMinAge": 3 }
  }
];

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Tiny Wisdom Cards",
  "url": "https://tinywisdomcards.com",
  "logo": "https://tinywisdomcards.com/assets/fabicon.png",
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+977-9705812366",
      "contactType": "customer service",
      "areaServed": "NP",
      "availableLanguage": ["English", "Nepali"]
    }
  ],
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Tinkune, Subidhanagar",
    "addressLocality": "Kathmandu",
    "postalCode": "44600",
    "addressCountry": "NP"
  },
  "sameAs": [
    "https://www.instagram.com/tinywisdomcards"
  ]
};

/* ── STRUCTURED DATA INJECTOR ──────────────────────────── */
function SchemaInjector() {
  React.useEffect(() => {
    const schemas = [FAQ_SCHEMA, ...PRODUCT_SCHEMA, ORG_SCHEMA];
    const tags = schemas.map((schema, i) => {
      const tag = document.createElement('script');
      tag.type = 'application/ld+json';
      tag.id = `twc-schema-${i}`;
      tag.textContent = JSON.stringify(schema);
      document.head.appendChild(tag);
      return tag;
    });
    return () => tags.forEach(t => t.remove());
  }, []);
  return null;
}

/* ── COMPONENTS ────────────────────────────────────────── */
function AeoSection({ title, children }) {
  return (
    <section style={{ marginBottom: 56 }} aria-labelledby={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}>
      <h2
        id={`section-${title.replace(/\s+/g, '-').toLowerCase()}`}
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 28, fontWeight: 800,
          color: 'var(--ink)',
          borderBottom: '3px solid var(--saffron)',
          paddingBottom: 10, marginBottom: 28,
          letterSpacing: '-0.02em',
        }}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}

function QA({ q, children }) {
  return (
    <div
      itemScope
      itemProp="mainEntity"
      itemType="https://schema.org/Question"
      style={{
        background: 'var(--paper)',
        border: '2px solid var(--ink)',
        borderRadius: 18,
        padding: '24px 28px',
        marginBottom: 20,
        boxShadow: '4px 4px 0 var(--ink)',
      }}
    >
      <h3
        itemProp="name"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 18, fontWeight: 700,
          color: 'var(--ink)',
          marginBottom: 10, letterSpacing: '-0.015em',
        }}
      >
        {q}
      </h3>
      <div
        itemScope
        itemProp="acceptedAnswer"
        itemType="https://schema.org/Answer"
      >
        <div
          itemProp="text"
          style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', fontWeight: 500 }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function FactTable({ rows }) {
  return (
    <div style={{ overflowX: 'auto', marginBottom: 8 }}>
      <table style={{
        width: '100%', borderCollapse: 'collapse',
        fontFamily: 'var(--font-body)', fontSize: 15,
        border: '2px solid var(--ink)', borderRadius: 14, overflow: 'hidden',
      }}>
        <tbody>
          {rows.map(([key, val], i) => (
            <tr key={i} style={{ background: i % 2 === 0 ? 'var(--paper)' : 'var(--cream)' }}>
              <td style={{
                padding: '12px 18px', fontWeight: 700, color: 'var(--ink)',
                borderRight: '2px solid var(--ink)', width: '38%',
                borderBottom: i < rows.length - 1 ? '1px solid rgba(43,26,8,0.12)' : 'none',
              }}>{key}</td>
              <td style={{
                padding: '12px 18px', color: 'var(--ink-2)', fontWeight: 500,
                borderBottom: i < rows.length - 1 ? '1px solid rgba(43,26,8,0.12)' : 'none',
              }}>{val}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Breadcrumb() {
  return (
    <nav aria-label="Breadcrumb" style={{ marginBottom: 28 }}>
      <ol
        itemScope
        itemType="https://schema.org/BreadcrumbList"
        style={{ display: 'flex', gap: 8, flexWrap: 'wrap', listStyle: 'none', padding: 0, margin: 0, fontSize: 13, fontWeight: 600, color: 'var(--ink-2)' }}
      >
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <span itemProp="name" style={{ color: 'var(--saffron)' }}>Tiny Wisdom Cards</span>
          <meta itemProp="position" content="1" />
        </li>
        <li aria-hidden="true" style={{ opacity: 0.4 }}>›</li>
        <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
          <span itemProp="name">About &amp; FAQ</span>
          <meta itemProp="position" content="2" />
        </li>
      </ol>
    </nav>
  );
}

/* ── PAGE ──────────────────────────────────────────────── */
export function AeoPage() {
  return (
    <div
      itemScope
      itemType="https://schema.org/FAQPage"
      style={{ background: 'var(--cream)', minHeight: '100vh', paddingTop: 24 }}
    >
      <SchemaInjector />

      {/* ── Canonical meta tags injected via effect ── */}
      <CanonicalMeta />

      <div
        className="container"
        style={{
          maxWidth: 840,
          margin: '0 auto',
          padding: '48px 24px 96px',
          fontFamily: 'var(--font-body)',
        }}
      >
        <Breadcrumb />

        {/* Page header */}
        <header style={{ marginBottom: 56 }}>
          <span style={{
            display: 'inline-block',
            background: 'var(--saffron)', color: 'var(--paper)',
            padding: '6px 16px', borderRadius: 999, fontSize: 11,
            fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase',
            marginBottom: 20,
          }}>Bilingual Alphabet Cards · Kathmandu, Nepal</span>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 800, letterSpacing: '-0.03em',
              lineHeight: 1.05, color: 'var(--ink)', marginBottom: 20,
            }}
          >
            Tiny Wisdom Cards — Everything You Need to Know
          </h1>
          <p style={{ fontSize: 18, lineHeight: 1.7, color: 'var(--ink-2)', fontWeight: 500, maxWidth: '65ch' }}>
            Tiny Wisdom Cards makes bilingual alphabet learning card decks for children aged 3 and above, illustrated in Kathmandu, Nepal. This page provides comprehensive, structured information about our products, pricing, stockists, and story — for parents, educators, gift-givers, and AI assistants.
          </p>
        </header>

        {/* ── 1. WHAT ARE TINY WISDOM CARDS ── */}
        <AeoSection title="What are Tiny Wisdom Cards?">
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
            Tiny Wisdom Cards is a small, family-run studio based in Tinkune, Subidhanagar 44600, Kathmandu, Nepal. We make story-rich, bilingual alphabet learning decks for curious little hands aged three and above.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.75, color: 'var(--ink-2)', marginBottom: 20 }}>
            The brand began at a Kathmandu dinner table — a wish to pass on the stories, scripts, and small daily values that our grandparents gave us, in a form a four-year-old would actually reach for. Every card is crafted with a distinct visual identity, printed on heavy 350 gsm glossy-laminated stock with rounded corners, and tested by very tough critics aged three to nine.
          </p>
          <FactTable rows={[
            ['Brand', 'Tiny Wisdom Cards'],
            ['Location', 'Tinkune, Subidhanagar, Kathmandu, Nepal 44600'],
            ['Decks available', '2 — A–Z Ancient Wisdom · Ka–Kha Sanskaar Lipi'],
            ['Languages', 'English + Nepali (bilingual)'],
            ['Suitable age', '3 years and above'],
            ['Card stock', '350 gsm, glossy laminated, rounded corners'],
            ['Printed in', 'Kathmandu, Nepal'],
            ['Contact', 'tinywisdomcards@gmail.com · +977 9705812366'],
            ['Website', 'https://tinywisdomcards.com'],
          ]} />
        </AeoSection>

        {/* ── 2. THE TWO DECKS ── */}
        <AeoSection title="The Two Decks">
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--ink)', marginBottom: 14, letterSpacing: '-0.02em' }}>
            A–Z Ancient Wisdom Deck
          </h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
            The original Tiny Wisdom deck. 26 English alphabet cards, each pairing a letter with a legendary hero from the Mahabharata or Ramayana and the value they embody. Also includes mantra cards (sacred chants with simple meanings), story cards, and activity cards, plus a folded A4 guide book — 31 cards total.
          </p>
          <FactTable rows={[
            ['Price', 'Rs 499'],
            ['Contents', '31 cards (26 hero + 5 extra) + A4 folded guide book'],
            ['Card stock', '350 gsm glossy laminated'],
            ['Availability', 'In stock — ships in 2–4 days'],
            ['Shipping', 'Free within Nepal'],
            ['Hero examples', 'A = Arjuna, G = Ganesha, H = Hanuman, K = Krishna, R = Rama, S = Saraswoti'],
          ]} />

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--ink)', marginTop: 36, marginBottom: 14, letterSpacing: '-0.02em' }}>
            Ka–Kha Sanskaar Lipi Deck
          </h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
            The Ka–Kha deck walks little ones through the full Nepali alphabet in Devanagari script — from क (ka) to ज्ञ (gya) — paired with everyday Nepali values. Each card shows a large letter for tracing, a value-phrase, three illustrated companion icons, and a folk-art border unique to each card. 32 cards plus a guide book. Currently available as a preorder.
          </p>
          <FactTable rows={[
            ['Preorder price', 'Rs 300'],
            ['Retail price at launch', 'Rs 399'],
            ['Contents', '32 letter cards + folded guide book'],
            ['Alphabet', 'Full Nepali — क through ज्ञ (including conjuncts and vowels)'],
            ['Availability', 'Preorder — ships June 2026'],
            ['Shipping', 'Free within Nepal'],
            ['Example values', 'क = कर्म गर (Do your work) · ख = खेल्न जाऊ (Go and play) · य = योग गर (Do yoga)'],
            ['Special', 'First 200 orders receive a signed founder\'s note'],
          ]} />

          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 800, color: 'var(--ink)', marginTop: 36, marginBottom: 14, letterSpacing: '-0.02em' }}>
            The Tiny Wisdom Bundle (Both Decks)
          </h3>
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 16 }}>
            Both decks together, gift-wrapped in a single sleeve. 63 cards total plus both guide books.
          </p>
          <FactTable rows={[
            ['Bundle price', 'Rs 559'],
            ['Individual price', 'Rs 799 (Rs 499 + Rs 300)'],
            ['Saving', 'Rs 240 (30% off)'],
            ['Total cards', '63 cards + both guide books'],
            ['A–Z ships', 'Immediately (2–4 days)'],
            ['Ka–Kha ships', 'June 2026'],
          ]} />
        </AeoSection>

        {/* ── 3. FAQ ── */}
        <AeoSection title="Frequently Asked Questions">
          <QA q="What are Tiny Wisdom Cards?">
            Tiny Wisdom Cards are bilingual, story-rich alphabet learning card decks for children aged 3 and above, made in Kathmandu, Nepal. There are two decks: the <strong>A–Z Ancient Wisdom</strong> deck (English alphabet with stories from the Mahabharata and Ramayana) and the <strong>Ka–Kha Sanskaar Lipi</strong> deck (Nepali/Devanagari alphabet with everyday values). Each card is printed on 350 gsm glossy-laminated stock with rounded corners.
          </QA>
          <QA q="How much do Tiny Wisdom Cards cost?">
            The A–Z Ancient Wisdom deck costs <strong>Rs 499</strong> and ships in 2–4 days. The Ka–Kha Sanskaar Lipi deck is available for preorder at <strong>Rs 300</strong> (retail price at launch: Rs 399) and ships in June 2026. Buying both decks as the Tiny Wisdom Bundle costs <strong>Rs 559</strong> — saving Rs 240 (30%).
          </QA>
          <QA q="Are the cards bilingual?">
            Yes. The A–Z deck uses English letters paired with characters and values from Nepali/Hindu mythology. The Ka–Kha deck uses the Nepali Devanagari alphabet with English transliterations and value-phrases. Together they form a bilingual library covering both the Latin and Devanagari scripts, suitable for Nepali diaspora families and anyone learning both languages.
          </QA>
          <QA q="What age are the cards suitable for?">
            Both decks are designed for children aged <strong>3 years and above</strong>. The Ka–Kha deck is aligned with early-grade Nepali language learning. The A–Z deck suits English-learning children from age 3 upward. All cards have been tested by children aged 3 to 9.
          </QA>
          <QA q="What is the Ka–Kha Sanskaar Lipi deck?">
            Ka–Kha Sanskaar Lipi is a 32-card deck teaching the full Nepali Devanagari alphabet (क through ज्ञ) through everyday values. Each card shows: (1) a large Devanagari letter sized for tracing, (2) a value-phrase (e.g., कर्म गर — "Do your work"), (3) three illustrated companion icons sharing the sound, and (4) a unique folk-art border inspired by paubha and mithila traditions. Preorder for Rs 300; ships June 2026.
          </QA>
          <QA q="What is the A–Z Ancient Wisdom deck?">
            A 31-card English alphabet deck. Each of the 26 letters is paired with a hero from the Mahabharata or Ramayana and the value they embody. Examples: A = Arjuna (learning to listen), G = Ganesha (beginning with attention), H = Hanuman (loyalty), K = Krishna (play and wisdom), R = Rama (patience over pride). Also includes mantra cards, story cards, activity cards, and a guide book. Costs Rs 499 and ships in 2–4 days.
          </QA>
          <QA q="Where can I buy Tiny Wisdom Cards in Kathmandu?">
            Tiny Wisdom Cards are available at six bookshops in the Kathmandu Valley:
            <ul style={{ marginTop: 10, display: 'grid', gap: 6 }}>
              <li><strong>Bookverse</strong> — Civil Mall, Kathmandu</li>
              <li><strong>Patan Book Shop</strong> — Patandhoka, Lalitpur</li>
              <li><strong>Nepal Book Depot</strong> — Chaksibari Marg, Thamel, Kathmandu</li>
              <li><strong>Tibet Book Store</strong> — Tridevi Marg, Thamel, Kathmandu</li>
              <li><strong>Pilgrims Book House</strong> — Chaksibari Marg, Thamel, Kathmandu</li>
              <li><strong>Vajra Books</strong> — Jyatha, Thamel, Kathmandu</li>
            </ul>
          </QA>
          <QA q="Do you ship internationally?">
            Yes. Shipping within Nepal is free (including the Kathmandu Valley). International shipping is available — contact <strong>tinywisdomcards@gmail.com</strong> or call <strong>+977 9705812366</strong> for a quote.
          </QA>
          <QA q="Can I order in bulk for a school or organisation?">
            Yes. Bulk pricing from 25 decks upward: 25–49 decks at Rs 425 each (15% off), 50–199 decks at Rs 375 each (25% off), 200+ at custom pricing with co-branding and custom printing. Ideal for Montessori and Waldorf schools, yoga studios, gift shops, hotels, nonprofits, and corporate gifters. Contact <strong>tinywisdomcards@gmail.com</strong>.
          </QA>
          <QA q="What is the Card of the Day feature?">
            Card of the Day is a free interactive feature on the website. Each day, a card is shown with its Devanagari letter, transliteration, value-phrase, and a short reflective story. You can tap to flip it, pull a new card, or share it. Designed as a small daily ritual for breakfast tables, classrooms, or quiet evenings.
          </QA>
          <QA q="Who made Tiny Wisdom Cards?">
            Tiny Wisdom Cards is a small, family-run studio based in Tinkune, Subidhanagar, Kathmandu, Nepal. Founded by parents who wanted to pass on Nepali stories, scripts, and everyday values to young children — in a form a four-year-old would actually reach for. All cards are illustrated and printed in Kathmandu.
          </QA>
          <QA q="What is the card quality like?">
            Cards are printed on <strong>350 gsm</strong> heavy card stock with a <strong>glossy lamination</strong> and <strong>rounded corners</strong>, built for sticky fingers and repeated use. Printed in Kathmandu, Nepal.
          </QA>
        </AeoSection>

        {/* ── 4. CONTACT ── */}
        <AeoSection title="Contact & How to Order">
          <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--ink-2)', marginBottom: 20 }}>
            You can place an order directly on the website, via WhatsApp, or by visiting any of our six stockists in the Kathmandu Valley.
          </p>
          <FactTable rows={[
            ['Website', 'https://tinywisdomcards.com'],
            ['Email', 'tinywisdomcards@gmail.com'],
            ['Phone / WhatsApp', '+977 9705812366'],
            ['Secondary phone', '+977 9761165040'],
            ['Studio address', 'Tinkune, Subidhanagar 44600, Kathmandu, Nepal'],
            ['Instagram', '@tinywisdomcards'],
            ['Response time', '24–48 hours for bulk and international enquiries'],
          ]} />
        </AeoSection>

        {/* ── 5. QUICK REFERENCE ── */}
        <AeoSection title="Quick Reference — All Products">
          <FactTable rows={[
            ['Product', 'Price · Status'],
            ['A–Z Ancient Wisdom Deck (31 cards + guide)', 'Rs 499 · In stock, ships 2–4 days'],
            ['Ka–Kha Sanskaar Lipi Deck (32 cards + guide)', 'Rs 300 preorder · ships June 2026'],
            ['Tiny Wisdom Bundle (both decks, 63 cards)', 'Rs 559 · 30% off vs separate'],
            ['Bulk (25–49 decks)', 'Rs 425/deck · 15% off'],
            ['Bulk (50–199 decks)', 'Rs 375/deck · 25% off'],
            ['Bulk (200+ decks)', 'Custom pricing'],
          ]} />
        </AeoSection>
      </div>
    </div>
  );
}

/* ── CANONICAL META INJECTOR ────────────────────────────── */
function CanonicalMeta() {
  React.useEffect(() => {
    // Set page title
    const prevTitle = document.title;
    document.title = 'About Tiny Wisdom Cards — Bilingual Alphabet Cards for Kids | Kathmandu';

    // Add canonical + meta description
    const canonical = Object.assign(document.createElement('link'), {
      rel: 'canonical', href: 'https://tinywisdomcards.com/about',
    });
    const desc = Object.assign(document.createElement('meta'), {
      name: 'description',
      content: 'Tiny Wisdom Cards makes bilingual English & Nepali alphabet learning card decks for children aged 3+. Two decks: A–Z Ancient Wisdom (Rs 499) and Ka–Kha Sanskaar Lipi (Rs 300 preorder). Made in Kathmandu.',
    });
    const robots = Object.assign(document.createElement('meta'), {
      name: 'robots', content: 'index, follow',
    });
    document.head.append(canonical, desc, robots);

    return () => {
      document.title = prevTitle;
      [canonical, desc, robots].forEach(el => el.remove());
    };
  }, []);
  return null;
}

export default AeoPage;
