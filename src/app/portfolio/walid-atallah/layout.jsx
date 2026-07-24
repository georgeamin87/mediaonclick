export const metadata = {
  title: 'Walid Atallah Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Walid Atallah case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our cli...',
  alternates: {
    canonical: 'https://mediaonclick.me/portfolio/walid-atallah',
  },
  openGraph: {
    title: 'Walid Atallah Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Walid Atallah case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our cli...',
    url: 'https://mediaonclick.me/portfolio/walid-atallah',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walid Atallah Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Walid Atallah case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our cli...',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Walid Atallah Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Walid Atallah case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our cli...",
    "url": "https://mediaonclick.me/portfolio/walid-atallah",
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
