export const metadata = {
  title: 'Hanif Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Hanif case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
  alternates: {
    canonical: 'https://mediaonclick.me/portfolio/hanif',
  },
  openGraph: {
    title: 'Hanif Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Hanif case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
    url: 'https://mediaonclick.me/portfolio/hanif',
    siteName: 'MediaOnClick',
    images: [
      {
        url: 'https://mediaonclick.me/images/projects/hanif.jpg',
        alt: 'Hanif Portfolio | MediaOnClick',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hanif Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Hanif case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.',
    images: ['https://mediaonclick.me/images/projects/hanif.jpg'],
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Hanif Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Hanif case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.",
    "url": "https://mediaonclick.me/portfolio/hanif",
    "image": "https://mediaonclick.me/images/projects/hanif.jpg",
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
