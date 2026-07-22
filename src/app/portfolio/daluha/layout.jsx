export const metadata = {
  title: 'Daluha Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Daluha case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
  alternates: {
    canonical: 'https://www.mediaonclick.com/portfolio/daluha',
  },
  openGraph: {
    title: 'Daluha Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Daluha case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
    url: 'https://www.mediaonclick.com/portfolio/daluha',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Daluha Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Daluha case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Daluha Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Daluha case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.",
    "url": "https://www.mediaonclick.com/portfolio/daluha",
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
