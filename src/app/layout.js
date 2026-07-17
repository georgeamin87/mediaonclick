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
        <meta name="author" content="Laralink" />
        <link rel="icon" href="/images/MOC-Primary-Logo-300x300.png" sizes="any" />
        <title>Leading PR, Events & Media Buying Agency in Dubai | MOC – Your Partner In Business</title>
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
