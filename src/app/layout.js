"use client";
import { GoogleTagManager } from '@next/third-parties/google';
import Header from "@/app/ui/Header";
import CustomCursor from "@/app/ui/CustomCursor";
import Footer from "@/app/ui/Footer";
import WhatsAppFloat from "@/app/ui/WhatsAppFloat/WhatsAppFloat";
import "swiper/css";
import "swiper/css/pagination";
import "./scss/index.scss";
import { Poppins, Open_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--primary-font",
});
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--secondary-font",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="author" content="MediaOnClick" />
        <link rel="icon" href="/images/MOC-Primary-Logo-300x300.png" sizes="any" />
        <title>Leading PR, Events & Media Buying Agency in Dubai | MOC – Your Partner In Business</title>
        <meta name="description" content="Discover MediaOnClick, a premier PR, Events & Media Buying agency in Dubai. We create influential brand experiences and memorable campaigns tailored for you." />
        <meta property="og:title" content="Leading PR, Events & Media Buying Agency in Dubai | MOC – Your Partner In Business" />
        <meta property="og:description" content="Discover MediaOnClick, a premier PR, Events & Media Buying agency in Dubai. We create influential brand experiences and memorable campaigns tailored for you." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mediaonclick.me/" />
        <meta property="og:image" content="https://mediaonclick.me/images/mediaonclickog.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Leading PR, Events & Media Buying Agency in Dubai | MOC – Your Partner In Business" />
        <meta name="twitter:description" content="Discover MediaOnClick, a premier PR, Events & Media Buying agency in Dubai. We create influential brand experiences and memorable campaigns tailored for you." />
        <meta name="twitter:image" content="https://mediaonclick.me/images/mediaonclickog.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "Media OnClick (MOC)",
              "description": "Discover MediaOnClick, a premier PR, Events & Media Buying agency in Dubai. We create influential brand experiences and memorable campaigns tailored for you.",
              "url": "https://mediaonclick.me/",
              "telephone": "+971-4-456-7122",
              "priceRange": "$$$",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Office No. 2609, Shatha Tower",
                "addressLocality": "Dubai Media City",
                "addressRegion": "Dubai",
                "addressCountry": "AE"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 25.089509680652707,
                "longitude": 55.15277141716587
              },
              "sameAs": [
                "https://www.linkedin.com/company/media-onclick/",
                "https://instagram.com",
                "https://www.facebook.com/mediaonclick.me/"
              ]
            })
          }}
        />
      </head>
      <body className={`${openSans.variable} ${poppins.variable}`}>
        <Header />
        <CustomCursor />
        {children}
        <Footer />
        <WhatsAppFloat />
        <GoogleTagManager gtmId="GTM-5QLV5BMQ" />
      </body>
    </html>
  );
}
