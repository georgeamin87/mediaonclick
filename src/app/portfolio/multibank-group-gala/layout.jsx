export const metadata = {
  title: 'Multibank Group Gala Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Multibank Group Gala case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for ...',
  alternates: {
    canonical: 'https://mediaonclick.me/portfolio/multibank-group-gala',
  },
  openGraph: {
    title: 'Multibank Group Gala Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Multibank Group Gala case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for ...',
    url: 'https://mediaonclick.me/portfolio/multibank-group-gala',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multibank Group Gala Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Multibank Group Gala case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for ...',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Multibank Group Gala Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Multibank Group Gala case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for ...",
    "url": "https://mediaonclick.me/portfolio/multibank-group-gala",
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
