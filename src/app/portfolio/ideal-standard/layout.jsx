export const metadata = {
  title: 'Ideal Standard Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Ideal Standard case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our cl...',
  alternates: {
    canonical: 'https://mediaonclick.me/portfolio/ideal-standard',
  },
  openGraph: {
    title: 'Ideal Standard Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Ideal Standard case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our cl...',
    url: 'https://mediaonclick.me/portfolio/ideal-standard',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ideal Standard Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Ideal Standard case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our cl...',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ideal Standard Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Ideal Standard case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our cl...",
    "url": "https://mediaonclick.me/portfolio/ideal-standard",
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
