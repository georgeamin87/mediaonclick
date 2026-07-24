export const metadata = {
  title: 'Trusted by Global Brands | Our Clients | MediaOnClick Dubai',
  description: 'Explore the top global brands and businesses that trust MediaOnClick for strategic public relations, media buying, event management, and digital marketing.',
  alternates: {
    canonical: 'https://mediaonclick.me/our-clients',
  },
  openGraph: {
    title: 'Trusted by Global Brands | Our Clients | MediaOnClick Dubai',
    description: 'Explore the top global brands and businesses that trust MediaOnClick for strategic public relations, media buying, event management, and digital marketing.',
    url: 'https://mediaonclick.me/our-clients',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trusted by Global Brands | Our Clients | MediaOnClick Dubai',
    description: 'Explore the top global brands and businesses that trust MediaOnClick for strategic public relations, media buying, event management, and digital marketing.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Trusted by Global Brands | Our Clients | MediaOnClick Dubai",
    "description": "Explore the top global brands and businesses that trust MediaOnClick for strategic public relations, media buying, event management, and digital marketing.",
    "url": "https://mediaonclick.me/our-clients"
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
