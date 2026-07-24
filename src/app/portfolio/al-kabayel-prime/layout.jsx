export const metadata = {
  title: 'Al Kabayel Prime Portfolio | Top PR & Marketing Agency Dubai | MOC',
  description: 'Explore the Al Kabayel Prime case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our ...',
  alternates: {
    canonical: 'https://mediaonclick.me/portfolio/al-kabayel-prime',
  },
  openGraph: {
    title: 'Al Kabayel Prime Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Al Kabayel Prime case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our ...',
    url: 'https://mediaonclick.me/portfolio/al-kabayel-prime',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Al Kabayel Prime Portfolio | Top PR & Marketing Agency Dubai | MOC',
    description: 'Explore the Al Kabayel Prime case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our ...',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Al Kabayel Prime Portfolio | Top PR & Marketing Agency Dubai | MOC",
    "description": "Explore the Al Kabayel Prime case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our ...",
    "url": "https://mediaonclick.me/portfolio/al-kabayel-prime",
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
