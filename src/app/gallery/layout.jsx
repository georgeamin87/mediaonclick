export const metadata = {
  title: 'Our Work Gallery | PR, Events & Influencer Marketing Campaigns | MOC',
  description: 'View our gallery showcasing successful events, PR campaigns, influencer collaborations, and interior design projects by the expert MediaOnClick team in Dubai.',
  alternates: {
    canonical: 'https://mediaonclick.me/gallery',
  },
  openGraph: {
    title: 'Our Work Gallery | PR, Events & Influencer Marketing Campaigns | MOC',
    description: 'View our gallery showcasing successful events, PR campaigns, influencer collaborations, and interior design projects by the expert MediaOnClick team in Dubai.',
    url: 'https://mediaonclick.me/gallery',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Work Gallery | PR, Events & Influencer Marketing Campaigns | MOC',
    description: 'View our gallery showcasing successful events, PR campaigns, influencer collaborations, and interior design projects by the expert MediaOnClick team in Dubai.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Work Gallery | PR, Events & Influencer Marketing Campaigns | MOC",
    "description": "View our gallery showcasing successful events, PR campaigns, influencer collaborations, and interior design projects by the expert MediaOnClick team in Dubai.",
    "url": "https://mediaonclick.me/gallery"
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
