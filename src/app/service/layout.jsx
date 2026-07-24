export const metadata = {
  title: 'Expert PR, Media Buying & Event Management Services in Dubai | MOC',
  description: 'Explore MediaOnClick\'s expert services: PR, media planning, event management, interior design, consultancy, digital marketing, and influencer collaborations.',
  alternates: {
    canonical: 'https://mediaonclick.me/service',
  },
  openGraph: {
    title: 'Expert PR, Media Buying & Event Management Services in Dubai | MOC',
    description: 'Explore MediaOnClick\'s expert services: PR, media planning, event management, interior design, consultancy, digital marketing, and influencer collaborations.',
    url: 'https://mediaonclick.me/service',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert PR, Media Buying & Event Management Services in Dubai | MOC',
    description: 'Explore MediaOnClick\'s expert services: PR, media planning, event management, interior design, consultancy, digital marketing, and influencer collaborations.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Expert PR, Media Buying & Event Management Services in Dubai | MOC",
    "description": "Explore MediaOnClick's expert services: PR, media planning, event management, interior design, consultancy, digital marketing, and influencer collaborations.",
    "url": "https://mediaonclick.me/service"
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
