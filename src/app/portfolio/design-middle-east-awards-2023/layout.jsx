export const metadata = {
  title: 'Design Middle East Awards 2023 Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Design Middle East Awards 2023 case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional re...',
  alternates: {
    canonical: 'https://mediaonclick.me/portfolio/design-middle-east-awards-2023',
  },
  openGraph: {
    title: 'Design Middle East Awards 2023 Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Design Middle East Awards 2023 case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional re...',
    url: 'https://mediaonclick.me/portfolio/design-middle-east-awards-2023',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design Middle East Awards 2023 Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Design Middle East Awards 2023 case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional re...',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Design Middle East Awards 2023 Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Design Middle East Awards 2023 case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional re...",
    "url": "https://mediaonclick.me/portfolio/design-middle-east-awards-2023",
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
