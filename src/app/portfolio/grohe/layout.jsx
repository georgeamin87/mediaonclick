export const metadata = {
  title: 'Grohe Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Grohe case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
  alternates: {
    canonical: 'https://www.mediaonclick.com/portfolio/grohe',
  },
  openGraph: {
    title: 'Grohe Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Grohe case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
    url: 'https://www.mediaonclick.com/portfolio/grohe',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Grohe Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Grohe case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Grohe Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Grohe case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.",
    "url": "https://www.mediaonclick.com/portfolio/grohe",
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
