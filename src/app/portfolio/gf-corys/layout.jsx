export const metadata = {
  title: 'Gf Corys Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Gf Corys case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
  alternates: {
    canonical: 'https://mediaonclick.me/portfolio/gf-corys',
  },
  openGraph: {
    title: 'Gf Corys Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Gf Corys case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
    url: 'https://mediaonclick.me/portfolio/gf-corys',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gf Corys Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Gf Corys case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Gf Corys Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Gf Corys case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.",
    "url": "https://mediaonclick.me/portfolio/gf-corys",
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
