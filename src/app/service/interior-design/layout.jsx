export const metadata = {
  title: 'Creative Commercial Interior Design Solutions in Dubai | MOC',
  description: 'Elevate your brand with MediaOnClick\'s expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.',
  alternates: {
    canonical: 'https://mediaonclick.me/service/interior-design',
  },
  openGraph: {
    title: 'Creative Commercial Interior Design Solutions in Dubai | MOC',
    description: 'Elevate your brand with MediaOnClick\'s expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.',
    url: 'https://mediaonclick.me/service/interior-design',
    siteName: 'MediaOnClick',
    images: [
      {
        url: 'https://mediaonclick.me/images/about_img_6.webp',
        alt: 'Creative Commercial Interior Design Solutions in Dubai | MOC',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative Commercial Interior Design Solutions in Dubai | MOC',
    description: 'Elevate your brand with MediaOnClick\'s expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.',
    images: ['https://mediaonclick.me/images/about_img_6.webp'],
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Creative Commercial Interior Design Solutions in Dubai | MOC",
    "description": "Elevate your brand with MediaOnClick's expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.",
    "url": "https://mediaonclick.me/service/interior-design",
    "image": "https://mediaonclick.me/images/about_img_6.webp",
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
