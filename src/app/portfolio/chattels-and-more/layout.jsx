export const metadata = {
  title: 'Chattels And More Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Chattels And More case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our...',
  alternates: {
    canonical: 'https://mediaonclick.me/portfolio/chattels-and-more',
  },
  openGraph: {
    title: 'Chattels And More Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Chattels And More case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our...',
    url: 'https://mediaonclick.me/portfolio/chattels-and-more',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Chattels And More Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Chattels And More case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our...',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Chattels And More Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Chattels And More case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our...",
    "url": "https://mediaonclick.me/portfolio/chattels-and-more",
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
