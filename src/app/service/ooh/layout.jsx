export const metadata = {
  title: 'Leading Outdoor & Out-of-Home (OOH) Advertising Agency in Dubai | MediaOnClick',
  description: 'Dominate Dubai and the UAE with high-impact Out-of-Home (OOH) and Digital OOH advertising. Billboards, transit ads, mall screens, and landmark building wraps from MediaOnClick.',
  alternates: {
    canonical: 'https://mediaonclick.me/service/ooh',
  },
  openGraph: {
    title: 'Leading Outdoor & Out-of-Home (OOH) Advertising Agency in Dubai | MediaOnClick',
    description: 'Dominate Dubai and the UAE with high-impact Out-of-Home (OOH) and Digital OOH advertising. Billboards, transit ads, mall screens, and landmark building wraps from MediaOnClick.',
    url: 'https://mediaonclick.me/service/ooh',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Leading Outdoor & Out-of-Home (OOH) Advertising Agency in Dubai | MediaOnClick',
    description: 'Dominate Dubai and the UAE with high-impact Out-of-Home (OOH) and Digital OOH advertising. Billboards, transit ads, mall screens, and landmark building wraps from MediaOnClick.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Leading Outdoor & Out-of-Home (OOH) Advertising Agency in Dubai | MediaOnClick",
    "description": "Dominate Dubai and the UAE with high-impact Out-of-Home (OOH) and Digital OOH advertising. Billboards, transit ads, mall screens, and landmark building wraps from MediaOnClick.",
    "url": "https://mediaonclick.me/service/ooh",
    "provider": {
        "@type": "ProfessionalService",
        "name": "Media OnClick (MOC)",
        "telephone": "+971-4-456-7122",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Office No. 2609, Shatha Tower",
            "addressLocality": "Dubai Media City",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
        }
    },
    "areaServed": {
        "@type": "City",
        "name": "Dubai"
    }
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
