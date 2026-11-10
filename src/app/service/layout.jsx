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
    images: [
      {
        url: 'https://mediaonclick.me/images/service_img_1.jpeg',
        alt: 'MediaOnClick Services',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Expert PR, Media Buying & Event Management Services in Dubai | MOC',
    description: 'Explore MediaOnClick\'s expert services: PR, media planning, event management, interior design, consultancy, digital marketing, and influencer collaborations.',
    images: ['https://mediaonclick.me/images/service_img_1.jpeg'],
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Expert PR, Media Buying & Event Management Services in Dubai | MOC",
    "description": "Explore MediaOnClick's expert services: PR, media planning, event management, interior design, consultancy, digital marketing, and influencer collaborations.",
    "url": "https://mediaonclick.me/service",
    "image": "https://mediaonclick.me/images/service_img_1.jpeg"
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
