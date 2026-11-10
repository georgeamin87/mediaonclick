export const metadata = {
  title: 'Laufen at Dubai Design Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Laufen at Dubai Design case study by MediaOnClick. See how our expert strategies in exhibition stand production, fabrication, and events delivered exceptional results.',
  alternates: {
    canonical: 'https://mediaonclick.me/portfolio/laufen-at-dubai-design',
  },
  openGraph: {
    title: 'Laufen at Dubai Design Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Laufen at Dubai Design case study by MediaOnClick. See how our expert strategies in exhibition stand production, fabrication, and events delivered exceptional results.',
    url: 'https://mediaonclick.me/portfolio/laufen-at-dubai-design',
    siteName: 'MediaOnClick',
    images: [
      {
        url: 'https://mediaonclick.me/images/projects/laufen/laufen-by-mediaonclick.webp',
        alt: 'Laufen at Dubai Design Portfolio | MediaOnClick',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Laufen at Dubai Design Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Laufen at Dubai Design case study by MediaOnClick. See how our expert strategies in exhibition stand production, fabrication, and events delivered exceptional results.',
    images: ['https://mediaonclick.me/images/projects/laufen/laufen-by-mediaonclick.webp'],
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Laufen at Dubai Design Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Laufen at Dubai Design case study by MediaOnClick. See how our expert strategies in exhibition stand production, fabrication, and events delivered exceptional results.",
    "url": "https://mediaonclick.me/portfolio/laufen-at-dubai-design",
    "image": "https://mediaonclick.me/images/projects/laufen/laufen-by-mediaonclick.webp",
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

