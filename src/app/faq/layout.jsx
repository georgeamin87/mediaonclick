export const metadata = {
  title: 'Frequently Asked Questions | PR & Media Buying Agency Dubai | MOC',
  description: 'Find answers to frequently asked questions about MediaOnClick\'s PR, media planning, event management, and influencer marketing services in Dubai and beyond.',
  alternates: {
    canonical: 'https://mediaonclick.me/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | PR & Media Buying Agency Dubai | MOC',
    description: 'Find answers to frequently asked questions about MediaOnClick\'s PR, media planning, event management, and influencer marketing services in Dubai and beyond.',
    url: 'https://mediaonclick.me/faq',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | PR & Media Buying Agency Dubai | MOC',
    description: 'Find answers to frequently asked questions about MediaOnClick\'s PR, media planning, event management, and influencer marketing services in Dubai and beyond.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "name": "Frequently Asked Questions | PR & Media Buying Agency Dubai | MOC",
    "description": "Find answers to frequently asked questions about MediaOnClick's PR, media planning, event management, and influencer marketing services in Dubai and beyond.",
    "url": "https://mediaonclick.me/faq"
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
