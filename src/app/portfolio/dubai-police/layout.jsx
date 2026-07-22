export const metadata = {
  title: 'Dubai Police Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Dubai Police case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clie...',
  alternates: {
    canonical: 'https://www.mediaonclick.com/portfolio/dubai-police',
  },
  openGraph: {
    title: 'Dubai Police Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Dubai Police case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clie...',
    url: 'https://www.mediaonclick.com/portfolio/dubai-police',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dubai Police Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Dubai Police case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clie...',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Dubai Police Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Dubai Police case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clie...",
    "url": "https://www.mediaonclick.com/portfolio/dubai-police",
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
