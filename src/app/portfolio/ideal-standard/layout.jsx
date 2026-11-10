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
    images: [
      {
        url: 'https://mediaonclick.me/images/projects/ideal-standard/3.webp',
        alt: 'Ideal Standard Portfolio | MediaOnClick',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ideal Standard Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Ideal Standard case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our cl...',
    images: ['https://mediaonclick.me/images/projects/ideal-standard/3.webp'],
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Ideal Standard Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Ideal Standard case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our cl...",
    "url": "https://mediaonclick.me/portfolio/ideal-standard",
    "image": "https://mediaonclick.me/images/projects/ideal-standard/3.webp",
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
