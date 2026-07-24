export const metadata = {
  title: 'Interior Furniture Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Interior Furniture case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for ou...',
  alternates: {
    canonical: 'https://mediaonclick.me/portfolio/interior-furniture',
  },
  openGraph: {
    title: 'Interior Furniture Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Interior Furniture case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for ou...',
    url: 'https://mediaonclick.me/portfolio/interior-furniture',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interior Furniture Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Interior Furniture case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for ou...',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Interior Furniture Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Interior Furniture case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for ou...",
    "url": "https://mediaonclick.me/portfolio/interior-furniture",
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
