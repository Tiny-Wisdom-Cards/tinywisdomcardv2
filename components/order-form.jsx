import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const WA_NUMBER = "9779866104387";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;

// Nepal first, then all other countries alphabetically
const COUNTRY_CODES = [
  { name: "Nepal", flag: "🇳🇵", dial: "+977" },
  { name: "Afghanistan", flag: "🇦🇫", dial: "+93" },
  { name: "Albania", flag: "🇦🇱", dial: "+355" },
  { name: "Algeria", flag: "🇩🇿", dial: "+213" },
  { name: "Andorra", flag: "🇦🇩", dial: "+376" },
  { name: "Angola", flag: "🇦🇴", dial: "+244" },
  { name: "Argentina", flag: "🇦🇷", dial: "+54" },
  { name: "Armenia", flag: "🇦🇲", dial: "+374" },
  { name: "Australia", flag: "🇦🇺", dial: "+61" },
  { name: "Austria", flag: "🇦🇹", dial: "+43" },
  { name: "Azerbaijan", flag: "🇦🇿", dial: "+994" },
  { name: "Bahrain", flag: "🇧🇭", dial: "+973" },
  { name: "Bangladesh", flag: "🇧🇩", dial: "+880" },
  { name: "Belarus", flag: "🇧🇾", dial: "+375" },
  { name: "Belgium", flag: "🇧🇪", dial: "+32" },
  { name: "Belize", flag: "🇧🇿", dial: "+501" },
  { name: "Benin", flag: "🇧🇯", dial: "+229" },
  { name: "Bhutan", flag: "🇧🇹", dial: "+975" },
  { name: "Bolivia", flag: "🇧🇴", dial: "+591" },
  { name: "Bosnia & Herzegovina", flag: "🇧🇦", dial: "+387" },
  { name: "Botswana", flag: "🇧🇼", dial: "+267" },
  { name: "Brazil", flag: "🇧🇷", dial: "+55" },
  { name: "Brunei", flag: "🇧🇳", dial: "+673" },
  { name: "Bulgaria", flag: "🇧🇬", dial: "+359" },
  { name: "Burkina Faso", flag: "🇧🇫", dial: "+226" },
  { name: "Cambodia", flag: "🇰🇭", dial: "+855" },
  { name: "Cameroon", flag: "🇨🇲", dial: "+237" },
  { name: "Canada", flag: "🇨🇦", dial: "+1" },
  { name: "Chile", flag: "🇨🇱", dial: "+56" },
  { name: "China", flag: "🇨🇳", dial: "+86" },
  { name: "Colombia", flag: "🇨🇴", dial: "+57" },
  { name: "Congo (DRC)", flag: "🇨🇩", dial: "+243" },
  { name: "Costa Rica", flag: "🇨🇷", dial: "+506" },
  { name: "Croatia", flag: "🇭🇷", dial: "+385" },
  { name: "Cuba", flag: "🇨🇺", dial: "+53" },
  { name: "Cyprus", flag: "🇨🇾", dial: "+357" },
  { name: "Czech Republic", flag: "🇨🇿", dial: "+420" },
  { name: "Denmark", flag: "🇩🇰", dial: "+45" },
  { name: "Ecuador", flag: "🇪🇨", dial: "+593" },
  { name: "Egypt", flag: "🇪🇬", dial: "+20" },
  { name: "El Salvador", flag: "🇸🇻", dial: "+503" },
  { name: "Estonia", flag: "🇪🇪", dial: "+372" },
  { name: "Ethiopia", flag: "🇪🇹", dial: "+251" },
  { name: "Finland", flag: "🇫🇮", dial: "+358" },
  { name: "France", flag: "🇫🇷", dial: "+33" },
  { name: "Georgia", flag: "🇬🇪", dial: "+995" },
  { name: "Germany", flag: "🇩🇪", dial: "+49" },
  { name: "Ghana", flag: "🇬🇭", dial: "+233" },
  { name: "Greece", flag: "🇬🇷", dial: "+30" },
  { name: "Guatemala", flag: "🇬🇹", dial: "+502" },
  { name: "Honduras", flag: "🇭🇳", dial: "+504" },
  { name: "Hong Kong", flag: "🇭🇰", dial: "+852" },
  { name: "Hungary", flag: "🇭🇺", dial: "+36" },
  { name: "Iceland", flag: "🇮🇸", dial: "+354" },
  { name: "India", flag: "🇮🇳", dial: "+91" },
  { name: "Indonesia", flag: "🇮🇩", dial: "+62" },
  { name: "Iran", flag: "🇮🇷", dial: "+98" },
  { name: "Iraq", flag: "🇮🇶", dial: "+964" },
  { name: "Ireland", flag: "🇮🇪", dial: "+353" },
  { name: "Israel", flag: "🇮🇱", dial: "+972" },
  { name: "Italy", flag: "🇮🇹", dial: "+39" },
  { name: "Jamaica", flag: "🇯🇲", dial: "+1876" },
  { name: "Japan", flag: "🇯🇵", dial: "+81" },
  { name: "Jordan", flag: "🇯🇴", dial: "+962" },
  { name: "Kazakhstan", flag: "🇰🇿", dial: "+7" },
  { name: "Kenya", flag: "🇰🇪", dial: "+254" },
  { name: "Kuwait", flag: "🇰🇼", dial: "+965" },
  { name: "Kyrgyzstan", flag: "🇰🇬", dial: "+996" },
  { name: "Laos", flag: "🇱🇦", dial: "+856" },
  { name: "Latvia", flag: "🇱🇻", dial: "+371" },
  { name: "Lebanon", flag: "🇱🇧", dial: "+961" },
  { name: "Libya", flag: "🇱🇾", dial: "+218" },
  { name: "Lithuania", flag: "🇱🇹", dial: "+370" },
  { name: "Luxembourg", flag: "🇱🇺", dial: "+352" },
  { name: "Macau", flag: "🇲🇴", dial: "+853" },
  { name: "Malaysia", flag: "🇲🇾", dial: "+60" },
  { name: "Maldives", flag: "🇲🇻", dial: "+960" },
  { name: "Malta", flag: "🇲🇹", dial: "+356" },
  { name: "Mexico", flag: "🇲🇽", dial: "+52" },
  { name: "Moldova", flag: "🇲🇩", dial: "+373" },
  { name: "Mongolia", flag: "🇲🇳", dial: "+976" },
  { name: "Morocco", flag: "🇲🇦", dial: "+212" },
  { name: "Mozambique", flag: "🇲🇿", dial: "+258" },
  { name: "Myanmar", flag: "🇲🇲", dial: "+95" },
  { name: "Namibia", flag: "🇳🇦", dial: "+264" },
  { name: "Netherlands", flag: "🇳🇱", dial: "+31" },
  { name: "New Zealand", flag: "🇳🇿", dial: "+64" },
  { name: "Nicaragua", flag: "🇳🇮", dial: "+505" },
  { name: "Nigeria", flag: "🇳🇬", dial: "+234" },
  { name: "North Korea", flag: "🇰🇵", dial: "+850" },
  { name: "Norway", flag: "🇳🇴", dial: "+47" },
  { name: "Oman", flag: "🇴🇲", dial: "+968" },
  { name: "Pakistan", flag: "🇵🇰", dial: "+92" },
  { name: "Palestine", flag: "🇵🇸", dial: "+970" },
  { name: "Panama", flag: "🇵🇦", dial: "+507" },
  { name: "Paraguay", flag: "🇵🇾", dial: "+595" },
  { name: "Peru", flag: "🇵🇪", dial: "+51" },
  { name: "Philippines", flag: "🇵🇭", dial: "+63" },
  { name: "Poland", flag: "🇵🇱", dial: "+48" },
  { name: "Portugal", flag: "🇵🇹", dial: "+351" },
  { name: "Qatar", flag: "🇶🇦", dial: "+974" },
  { name: "Romania", flag: "🇷🇴", dial: "+40" },
  { name: "Russia", flag: "🇷🇺", dial: "+7" },
  { name: "Rwanda", flag: "🇷🇼", dial: "+250" },
  { name: "Saudi Arabia", flag: "🇸🇦", dial: "+966" },
  { name: "Senegal", flag: "🇸🇳", dial: "+221" },
  { name: "Serbia", flag: "🇷🇸", dial: "+381" },
  { name: "Singapore", flag: "🇸🇬", dial: "+65" },
  { name: "Slovakia", flag: "🇸🇰", dial: "+421" },
  { name: "Slovenia", flag: "🇸🇮", dial: "+386" },
  { name: "Somalia", flag: "🇸🇴", dial: "+252" },
  { name: "South Africa", flag: "🇿🇦", dial: "+27" },
  { name: "South Korea", flag: "🇰🇷", dial: "+82" },
  { name: "Spain", flag: "🇪🇸", dial: "+34" },
  { name: "Sri Lanka", flag: "🇱🇰", dial: "+94" },
  { name: "Sudan", flag: "🇸🇩", dial: "+249" },
  { name: "Sweden", flag: "🇸🇪", dial: "+46" },
  { name: "Switzerland", flag: "🇨🇭", dial: "+41" },
  { name: "Syria", flag: "🇸🇾", dial: "+963" },
  { name: "Taiwan", flag: "🇹🇼", dial: "+886" },
  { name: "Tajikistan", flag: "🇹🇯", dial: "+992" },
  { name: "Tanzania", flag: "🇹🇿", dial: "+255" },
  { name: "Thailand", flag: "🇹🇭", dial: "+66" },
  { name: "Tibet", flag: "🇨🇳", dial: "+86" },
  { name: "Togo", flag: "🇹🇬", dial: "+228" },
  { name: "Tunisia", flag: "🇹🇳", dial: "+216" },
  { name: "Turkey", flag: "🇹🇷", dial: "+90" },
  { name: "Turkmenistan", flag: "🇹🇲", dial: "+993" },
  { name: "UAE", flag: "🇦🇪", dial: "+971" },
  { name: "Uganda", flag: "🇺🇬", dial: "+256" },
  { name: "Ukraine", flag: "🇺🇦", dial: "+380" },
  { name: "United Kingdom", flag: "🇬🇧", dial: "+44" },
  { name: "United States", flag: "🇺🇸", dial: "+1" },
  { name: "Uruguay", flag: "🇺🇾", dial: "+598" },
  { name: "Uzbekistan", flag: "🇺🇿", dial: "+998" },
  { name: "Venezuela", flag: "🇻🇪", dial: "+58" },
  { name: "Vietnam", flag: "🇻🇳", dial: "+84" },
  { name: "Yemen", flag: "🇾🇪", dial: "+967" },
  { name: "Zambia", flag: "🇿🇲", dial: "+260" },
  { name: "Zimbabwe", flag: "🇿🇼", dial: "+263" },
];

export function OrderForm({ isOpen, initialSelection, onClose }) {
  const [selectedDecks, setSelectedDecks] = useState(initialSelection || { az: true, kakha: false });
  const [showToast, setShowToast] = useState(false);
  const [qty, setQty] = useState(1);
  const [separateQty, setSeparateQty] = useState(false);
  const [qtyAz, setQtyAz] = useState(1);
  const [qtyKakha, setQtyKakha] = useState(1);

  // Form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+977");
  const [address, setAddress] = useState("");
  const [remarks, setRemarks] = useState("");

  // Submission method: "whatsapp" or "email"
  const [submitMethod, setSubmitMethod] = useState("whatsapp");
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    // Initialize EmailJS with the public key
    emailjs.init(EMAILJS_PUBLIC_KEY);
  }, []);

  const decks = [
    { id: "az", name: "A–Z English Deck", price: 499, cover: "/assets/ABC-cover.png" },
    { id: "kakha", name: "Ka–Kha Nepali Deck", price: 300, cover: "/assets/kakha-cover.png" },
  ];

  const both = selectedDecks.az && selectedDecks.kakha;
  const noneSelected = !selectedDecks.az && !selectedDecks.kakha;

  let total = 0;
  let totalQty = 0;
  if (both) {
    if (separateQty) {
      total = qtyAz * 499 + qtyKakha * 300;
      totalQty = qtyAz + qtyKakha;
    } else {
      total = qty * 559;
      totalQty = qty * 2; // 2 decks per bundle
    }
  } else if (selectedDecks.az) {
    total = qty * 499;
    totalQty = qty;
  } else if (selectedDecks.kakha) {
    total = qty * 300;
    totalQty = qty;
  }

  // Determine if it's a bulk order (e.g., more than 20 total decks)
  const isBulkOrder = totalQty > 20;
  const orderTypeLabel = isBulkOrder ? "Bulk Order" : "Regular order";

  const canSend = !noneSelected && name.trim() && phone.trim() && address.trim() && (submitMethod !== "email" || email.trim());
  const [attempted, setAttempted] = React.useState(false);

  const buildOrderLines = () => {
    const lines = [];
    if (both) {
      if (separateQty) {
        lines.push(`• A–Z English Deck × ${qtyAz} = Rs ${qtyAz * 499}`);
        lines.push(`• Ka–Kha Nepali Deck × ${qtyKakha} = Rs ${qtyKakha * 300}`);
      } else {
        lines.push(`• Heritage Bundle (A–Z + Ka–Kha) × ${qty} = Rs ${qty * 559}`);
      }
    } else if (selectedDecks.az) {
      lines.push(`• A–Z English Deck × ${qty} = Rs ${qty * 499}`);
    } else if (selectedDecks.kakha) {
      lines.push(`• Ka–Kha Nepali Deck × ${qty} = Rs ${qty * 300}`);
    }
    return lines.join("\n");
  };

  const handleSend = async () => {
    setAttempted(true);
    if (!canSend) return;

    const orderDetails = buildOrderLines();
    
    if (submitMethod === "whatsapp") {
      const message = [
        `🌟 *New Request (${orderTypeLabel}) — Tiny Wisdom Cards*`,
        "",
        "*Order Details:*",
        orderDetails,
        `*Total: Rs ${total}*`,
        "",
        "*Customer Details:*",
        `Name: ${name}`,
        `Email: ${email || "—"}`,
        `Phone: ${countryCode} ${phone}`,
        `Address: ${address}`,
        remarks ? `Remarks: ${remarks}` : null,
      ].filter(l => l !== null).join("\n");

      const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
      window.open(url, "_blank");
    } else {
      // EmailJS Submission
      setIsSending(true);
      try {
        const templateParams = {
          order_type: orderTypeLabel,
          customer_name: name,
          customer_email: email,
          customer_phone: `${countryCode} ${phone}`,
          customer_address: address,
          order_details: orderDetails,
          total_price: `Rs ${total}`,
          remarks: remarks || "None",
        };

        console.log("Sending email with params:", templateParams);

        await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams, EMAILJS_PUBLIC_KEY);
        setShowToast(true);
        setTimeout(() => {
          setShowToast(false);
          onClose();
        }, 3000);
      } catch (error) {
        console.error("Failed to send email:", error);
        alert("Failed to send email request. Please try again or use WhatsApp.");
      } finally {
        setIsSending(false);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
      zIndex: 9999, display: "flex", justifyContent: "flex-end",
      background: "rgba(43,26,8,0.4)", backdropFilter: "blur(4px)",
    }} onClick={onClose}>
      <div
        style={{
          width: "100%", maxWidth: 640, height: "100%",
          background: "var(--paper)", borderLeft: "4px solid var(--ink)",
          boxShadow: "-12px 0 0 var(--saffron)",
          padding: "32px 40px", overflowY: "auto",
          position: "relative",
          animation: "slideIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)"
        }}
        onClick={e => e.stopPropagation()}
      >
        <button onClick={onClose} style={{
          position: "absolute", top: 24, right: 24,
          background: "transparent", border: "2px solid var(--ink)",
          borderRadius: "50%", width: 36, height: 36,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", fontWeight: "bold", fontSize: 18, color: "var(--ink)"
        }}>×</button>

        <h2 className="h-2" style={{ marginBottom: 8, fontSize: 36 }}>Reserve your <span className="hand" style={{ color: "var(--saffron)" }}>decks.</span></h2>
        <p style={{ color: "var(--ink-2)", fontSize: 15, marginBottom: 24 }}>Select your decks and fill in your details. Choose how you want to connect.</p>

        {/* Submission Method Toggle */}
        <div style={{ 
          display: "flex", 
          gap: 10, 
          marginBottom: 24,
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
            <WhatsAppIcon size={16} color={submitMethod === "whatsapp" ? "var(--paper)" : "var(--ink)"} />
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

        {/* Deck selection */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
          {decks.map(deck => {
            const isSelected = selectedDecks[deck.id];
            return (
              <label key={deck.id} style={{
                border: `2px solid ${isSelected ? "var(--ink)" : "rgba(43,26,8,0.15)"}`,
                borderRadius: 16, padding: 12, cursor: "pointer",
                background: isSelected ? "var(--cream)" : "transparent",
                transition: "all 0.2s", position: "relative"
              }}>
                <input
                  type="checkbox"
                  checked={isSelected}
                  onChange={(e) => setSelectedDecks(prev => ({ ...prev, [deck.id]: e.target.checked }))}
                  style={{ position: "absolute", top: 12, right: 12, width: 18, height: 18, accentColor: "var(--ink)", cursor: "pointer" }}
                />
                <img src={deck.cover} alt={deck.name} style={{ width: "100%", borderRadius: 8, marginBottom: 12, border: "1px solid rgba(43,26,8,0.1)" }} />
                <div style={{ fontWeight: 700, fontSize: 14, lineHeight: 1.2, marginBottom: 4, fontFamily: "var(--font-display)" }}>{deck.name}</div>
                <div style={{ fontSize: 14, color: "var(--ink-2)", fontFamily: "var(--font-hand)", fontWeight: 600 }}>Rs {deck.price}</div>
              </label>
            );
          })}
        </div>

        {/* Quantity section */}
        {!noneSelected && (
          <div style={{
            background: "var(--cream)", borderRadius: 16,
            border: "2px solid var(--ink)", padding: 20, marginBottom: 24,
          }}>
            {both ? (
              <>
                {!separateQty && (
                  <div>
                    <label style={labelStyle}>
                      Number of bundles <span style={{ color: "var(--ink-2)", fontWeight: 500 }}>(A–Z + Ka–Kha set)</span>
                    </label>
                    <QtyInput value={qty} onChange={setQty} />
                  </div>
                )}
                {separateQty && (
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                    <div>
                      <label style={labelStyle}>A–Z decks</label>
                      <QtyInput value={qtyAz} onChange={setQtyAz} />
                    </div>
                    <div>
                      <label style={labelStyle}>Ka–Kha decks</label>
                      <QtyInput value={qtyKakha} onChange={setQtyKakha} />
                    </div>
                  </div>
                )}
                <label style={{
                  display: "flex", alignItems: "center", gap: 10,
                  marginTop: 14, cursor: "pointer",
                  fontSize: 13, fontWeight: 600, color: "var(--ink-2)",
                  paddingTop: 12, borderTop: "1.5px dashed rgba(43,26,8,0.15)",
                }}>
                  <input
                    type="checkbox"
                    checked={separateQty}
                    onChange={e => setSeparateQty(e.target.checked)}
                    style={{ width: 16, height: 16, accentColor: "var(--ink)", cursor: "pointer" }}
                  />
                  I want different quantities for each deck
                </label>
              </>
            ) : (
              <div>
                <label style={labelStyle}>Number of decks</label>
                <QtyInput value={qty} onChange={setQty} />
              </div>
            )}
            
            {/* Bulk Order Indicator */}
            {isBulkOrder && (
              <div style={{ 
                marginTop: 12, 
                fontSize: 12, 
                color: "var(--saffron)", 
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 4
              }}>
                ✨ Classified as Bulk Order (Total Qty: {totalQty})
              </div>
            )}
          </div>
        )}

        {/* Contact form */}
        <form style={{ display: "grid", gap: 16 }} onSubmit={e => e.preventDefault()}>
          <div>
            <label style={labelStyle}>Full Name <span style={{ color: "#e53", fontSize: 12 }}>*</span></label>
            <input type="text" style={{ ...inputStyle, borderColor: attempted && !name.trim() ? "#e53" : "var(--ink)" }} placeholder="Your name" value={name} onChange={e => setName(e.target.value)} />
            {attempted && !name.trim() && <div style={{ fontSize: 11, color: "#e53", marginTop: 4, fontWeight: 700 }}>Required</div>}
          </div>
          <div>
            <label style={labelStyle}>Email {submitMethod === "email" && <span style={{ color: "#e53", fontSize: 12 }}>*</span>}</label>
            <input
              type="email"
              style={{ ...inputStyle, borderColor: attempted && submitMethod === "email" && !email.trim() ? "#e53" : "var(--ink)" }}
              placeholder="you@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
            {attempted && submitMethod === "email" && !email.trim() && <div style={{ fontSize: 11, color: "#e53", marginTop: 4, fontWeight: 700 }}>Required for Email option</div>}
          </div>
          <div>
            <label style={labelStyle}>Phone Number <span style={{ color: "#e53", fontSize: 12 }}>*</span></label>
            <div style={{
              display: "flex", border: `2px solid ${attempted && !phone.trim() ? "#e53" : "var(--ink)"}`,
              borderRadius: 12, overflow: "hidden", background: "transparent",
            }}>
              <select
                value={countryCode}
                onChange={e => setCountryCode(e.target.value)}
                style={{
                  background: "rgba(43,26,8,0.06)", border: "none", borderRight: "2px solid var(--ink)",
                  padding: "12px 8px", fontSize: 13, fontWeight: 700,
                  color: "var(--ink)", outline: "none", cursor: "pointer",
                  fontFamily: "var(--font-body)", flexShrink: 0, maxWidth: 160,
                }}
              >
                {COUNTRY_CODES.map(c => (
                  <option key={c.name + c.dial} value={c.dial}>{c.flag} {c.name} ({c.dial})</option>
                ))}
              </select>
              <input
                type="tel"
                style={{ ...inputStyle, border: "none", borderRadius: 0, flex: 1, minWidth: 0 }}
                placeholder="Phone number"
                value={phone}
                onChange={e => setPhone(e.target.value.replace(/[^\d\s\-]/g, ""))}
              />
            </div>
            {attempted && !phone.trim() && <div style={{ fontSize: 11, color: "#e53", marginTop: 4, fontWeight: 700 }}>Required</div>}
          </div>
          <div>
            <label style={labelStyle}>Delivery Address <span style={{ color: "#e53", fontSize: 12 }}>*</span></label>
            <textarea style={{ ...inputStyle, minHeight: 60, resize: "vertical", borderColor: attempted && !address.trim() ? "#e53" : "var(--ink)" }} placeholder="Full address" value={address} onChange={e => setAddress(e.target.value)} />
            {attempted && !address.trim() && <div style={{ fontSize: 11, color: "#e53", marginTop: 4, fontWeight: 700 }}>Required</div>}
          </div>
          <div>
            <label style={labelStyle}>Remarks</label>
            <input type="text" style={inputStyle} placeholder="Any special notes?" value={remarks} onChange={e => setRemarks(e.target.value)} />
          </div>
        </form>

        {/* Total + CTA */}
        <div style={{
          marginTop: 32, borderTop: "2px dashed rgba(43,26,8,0.2)", paddingTop: 24,
          marginBottom: 20,
        }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
            <div>
              <div style={{ fontSize: 13, color: "var(--ink-2)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em" }}>Total</div>
              <div style={{ fontFamily: "var(--font-display)", fontSize: 32, fontWeight: 800, letterSpacing: "-0.02em" }}>
                {noneSelected ? "—" : `Rs ${total}`}
              </div>
              {both && !separateQty && qty > 1 && (
                <div style={{ fontSize: 12, color: "var(--saffron)", fontWeight: 700, marginTop: 2 }}>
                  Rs 559 × {qty} bundles
                </div>
              )}
            </div>
            <button
              onClick={handleSend}
              disabled={isSending}
              style={{
                background: !canSend ? "rgba(43,26,8,0.2)" : (submitMethod === "whatsapp" ? "#25D366" : "var(--ink)"),
                color: "var(--paper)", 
                border: `2px solid ${canSend ? "var(--ink)" : "rgba(43,26,8,0.15)"}`,
                borderRadius: 999, padding: "14px 24px",
                fontWeight: 800, fontSize: 15,
                cursor: canSend && !isSending ? "pointer" : "not-allowed",
                boxShadow: canSend && !isSending ? "4px 4px 0 var(--ink)" : "none",
                transition: "transform 0.1s",
                display: "flex", alignItems: "center", gap: 8,
              }}
              onMouseDown={e => { if (canSend && !isSending) e.currentTarget.style.transform = "translate(2px,2px)"; }}
              onMouseUp={e => e.currentTarget.style.transform = "none"}
              onMouseLeave={e => e.currentTarget.style.transform = "none"}
            >
              {isSending ? (
                "Sending..."
              ) : (
                <>
                  {submitMethod === "whatsapp" ? <WhatsAppIcon /> : <EmailIcon />}
                  {submitMethod === "whatsapp" ? "Send via WhatsApp" : "Send via Email"}
                </>
              )}
            </button>
          </div>

          {/* Note */}
          <p style={{
            fontSize: 12, color: "var(--ink-2)", fontWeight: 600,
            display: "flex", alignItems: "center", gap: 6, margin: 0,
          }}>
            {submitMethod === "whatsapp" ? (
              <>
                <WhatsAppIcon size={14} color="var(--ink-2)" />
                Tapping "Send via WhatsApp" will open WhatsApp with your order pre-filled.
              </>
            ) : (
              <>
                <EmailIcon size={14} color="var(--ink-2)" />
                Tapping "Send via Email" will send the request directly to our inbox.
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
      </div>
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideUp {
          from { transform: translateY(20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

function WhatsAppIcon({ size = 18, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
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

function QtyInput({ value, onChange }) {
  return (
    <div style={{ display: "flex", alignItems: "center", border: "2px solid var(--ink)", borderRadius: 12, overflow: "hidden", width: "fit-content" }}>
      <button
        type="button"
        onClick={() => onChange(v => Math.max(1, v - 1))}
        style={{
          width: 40, height: 44, background: "var(--paper)", border: "none",
          borderRight: "2px solid var(--ink)", cursor: "pointer",
          fontSize: 20, fontWeight: 700, color: "var(--ink)",
        }}
      >−</button>
      <input
        type="number"
        min={1}
        value={value}
        onChange={e => onChange(Math.max(1, parseInt(e.target.value) || 1))}
        style={{
          width: 52, height: 44, textAlign: "center", border: "none", outline: "none",
          fontFamily: "var(--font-display)", fontSize: 18, fontWeight: 800,
          color: "var(--ink)", background: "var(--paper)",
        }}
      />
      <button
        type="button"
        onClick={() => onChange(v => v + 1)}
        style={{
          width: 40, height: 44, background: "var(--paper)", border: "none",
          borderLeft: "2px solid var(--ink)", cursor: "pointer",
          fontSize: 20, fontWeight: 700, color: "var(--ink)",
        }}
      >+</button>
    </div>
  );
}

const labelStyle = { display: "block", fontSize: 13, fontWeight: 700, marginBottom: 6 };

const inputStyle = {
  width: "100%", background: "transparent",
  border: "2px solid var(--ink)", borderRadius: 12,
  padding: "12px 16px", fontSize: 15,
  fontFamily: "var(--font-body)", color: "var(--ink)",
  outline: "none", boxSizing: "border-box",
};
