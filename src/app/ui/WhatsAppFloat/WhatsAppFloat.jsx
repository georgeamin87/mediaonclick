import React, { useEffect, useState } from "react";

const WhatsAppIcon = ({ size = 28 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M20.52 3.48A11.94 11.94 0 0 0 12.06 0C5.51 0 .2 5.31.2 11.86c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.67c1.73.95 3.69 1.45 5.67 1.45h.01c6.55 0 11.86-5.31 11.86-11.86 0-3.17-1.24-6.15-3.42-8.44ZM12.07 21.6h-.01c-1.77 0-3.5-.48-5-1.38l-.36-.21-3.8.99 1.02-3.71-.24-.38a9.87 9.87 0 0 1-1.52-5.25C2.16 6.43 6.57 2.02 12.06 2.02c2.65 0 5.14 1.03 7.01 2.9a9.86 9.86 0 0 1 2.88 7.01c0 5.49-4.41 9.9-9.88 9.9Zm5.43-7.38c-.3-.15-1.77-.87-2.05-.97-.28-.1-.49-.15-.7.15-.2.3-.8.97-.98 1.17-.18.2-.36.22-.67.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.5-1.76-1.68-2.06-.17-.3-.02-.47.13-.62.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.7-1.69-.96-2.32-.25-.6-.5-.52-.7-.53l-.6-.01c-.2 0-.52.07-.8.37-.28.3-1.06 1.03-1.06 2.5 0 1.47 1.08 2.9 1.24 3.1.15.2 2.12 3.24 5.14 4.54.72.31 1.28.49 1.72.63.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.41.25-.7.25-1.29.18-1.41-.07-.12-.27-.2-.57-.35Z" />
  </svg>
);

const PhoneIcon = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M6.62 10.79a15.09 15.09 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.85 22 2 13.15 2 2c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.2 2.2z" />
  </svg>
);

const WhatsAppFloat = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 767);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Hide mobile bar when the footer scrolls into view
  useEffect(() => {
    if (!isMobile) return;
    const footer = document.querySelector(".cs-copyright");
    if (!footer) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setFooterVisible(entry.isIntersecting));
      },
      { root: null, threshold: 0.01 }
    );
    obs.observe(footer);
    return () => obs.disconnect();
  }, [isMobile]);

  return (
    <>
      {!isMobile && (
        <a
          href="http://api.whatsapp.com/send?phone=971552782860"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          style={{
            position: "fixed",
            right: 37,
            bottom: 96,
            zIndex: 1050,
            width: 56,
            height: 56,
            borderRadius: 28,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            backgroundColor: "#ff4a17",
            boxShadow: "0 8px 20px rgba(0,0,0,0.25)",
            transition: "background-color 0.2s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#25D366")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff4a17")}
        >
          <WhatsAppIcon />
        </a>
      )}

      {isMobile && !footerVisible && (
        <div
          style={{
            position: "fixed",
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1050,
            background: "rgba(0,0,0,0.7)",
            display: "flex",
            gap: 8,
            padding: "10px 12px",
            alignItems: "center",
            backdropFilter: "saturate(120%) blur(4px)",
          }}
        >
          <a
            href="tel:+97144567122"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              color: "#fff",
              background: "rgba(255,255,255,0.12)",
              padding: "12px 14px",
              borderRadius: 10,
            }}
          >
            <PhoneIcon />
            <span style={{ fontWeight: 600 }}>Call</span>
          </a>
          <a
            href="http://api.whatsapp.com/send?phone=971552782860"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              color: "#fff",
              background: "#ff4a17",
              padding: "12px 14px",
              borderRadius: 10,
            }}
          >
            <WhatsAppIcon />
            <span style={{ fontWeight: 600 }}>WhatsApp</span>
          </a>
        </div>
      )}
    </>
  );
};

export default WhatsAppFloat;
