export const metadata = {
  title: 'Ofis Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Ofis case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
  alternates: {
    canonical: 'https://www.mediaonclick.com/portfolio/ofis',
  },
  openGraph: {
    title: 'Ofis Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Ofis case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
    url: 'https://www.mediaonclick.com/portfolio/ofis',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ofis Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Ofis case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ofis Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Ofis case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.",
    "url": "https://www.mediaonclick.com/portfolio/ofis",
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
