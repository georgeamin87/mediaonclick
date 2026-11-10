export const metadata = {
  title: 'Strategic Brand & Marketing Consultancy in Dubai | MediaOnClick',
  description: 'Elevate your brand with MediaOnClick\'s expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.',
  alternates: {
    canonical: 'https://mediaonclick.me/service/consultancy',
  },
  openGraph: {
    title: 'Strategic Brand & Marketing Consultancy in Dubai | MediaOnClick',
    description: 'Elevate your brand with MediaOnClick\'s expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.',
    url: 'https://mediaonclick.me/service/consultancy',
    siteName: 'MediaOnClick',
    images: [
      {
        url: 'https://mediaonclick.me/images/service_5.jpeg',
        alt: 'Strategic Brand & Marketing Consultancy in Dubai | MediaOnClick',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strategic Brand & Marketing Consultancy in Dubai | MediaOnClick',
    description: 'Elevate your brand with MediaOnClick\'s expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.',
    images: ['https://mediaonclick.me/images/service_5.jpeg'],
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Strategic Brand & Marketing Consultancy in Dubai | MediaOnClick",
    "description": "Elevate your brand with MediaOnClick's expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.",
    "url": "https://mediaonclick.me/service/consultancy",
    "image": "https://mediaonclick.me/images/service_5.jpeg",
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
