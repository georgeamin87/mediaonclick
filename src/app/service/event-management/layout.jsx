export const metadata = {
  title: 'Premier Corporate Event Management Company in Dubai | MediaOnClick',
  description: 'Elevate your brand with MediaOnClick\'s expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.',
  alternates: {
    canonical: 'https://mediaonclick.me/service/event-management',
  },
  openGraph: {
    title: 'Premier Corporate Event Management Company in Dubai | MediaOnClick',
    description: 'Elevate your brand with MediaOnClick\'s expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.',
    url: 'https://mediaonclick.me/service/event-management',
    siteName: 'MediaOnClick',
    images: [
      {
        url: 'https://mediaonclick.me/images/services/event.jpg',
        alt: 'Premier Corporate Event Management Company in Dubai | MediaOnClick',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premier Corporate Event Management Company in Dubai | MediaOnClick',
    description: 'Elevate your brand with MediaOnClick\'s expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.',
    images: ['https://mediaonclick.me/images/services/event.jpg'],
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Premier Corporate Event Management Company in Dubai | MediaOnClick",
    "description": "Elevate your brand with MediaOnClick's expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.",
    "url": "https://mediaonclick.me/service/event-management",
    "image": "https://mediaonclick.me/images/services/event.jpg",
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
