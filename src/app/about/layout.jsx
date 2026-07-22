export const metadata = {
  title: 'Top PR & Marketing Agency in Dubai | MediaOnClick - About Us',
  description: 'Learn about MediaOnClick. We offer expert media planning, PR, interior design, and digital strategies to connect, captivate, and convert your target audience.',
  alternates: {
    canonical: 'https://www.mediaonclick.com/about',
  },
  openGraph: {
    title: 'Top PR & Marketing Agency in Dubai | MediaOnClick - About Us',
    description: 'Learn about MediaOnClick. We offer expert media planning, PR, interior design, and digital strategies to connect, captivate, and convert your target audience.',
    url: 'https://www.mediaonclick.com/about',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Top PR & Marketing Agency in Dubai | MediaOnClick - About Us',
    description: 'Learn about MediaOnClick. We offer expert media planning, PR, interior design, and digital strategies to connect, captivate, and convert your target audience.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Media OnClick (MOC)",
    "url": "https://www.mediaonclick.com/about",
    "logo": "https://www.mediaonclick.com/images/MOC-Primary-Logo-300x300.png",
    "telephone": "+971-4-456-7122",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No. 2609, Shatha Tower",
        "addressLocality": "Dubai Media City",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
    },
    "sameAs": [
        "https://www.linkedin.com/company/media-onclick/",
        "https://instagram.com",
        "https://www.facebook.com/mediaonclick.me/"
    ]
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
