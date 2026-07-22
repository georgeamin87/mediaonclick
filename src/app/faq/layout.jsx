export const metadata = {
  title: 'Frequently Asked Questions | PR & Media Buying Agency Dubai | MOC',
  description: 'Find answers to frequently asked questions about MediaOnClick\'s PR, media planning, event management, and influencer marketing services in Dubai and beyond.',
  alternates: {
    canonical: 'https://www.mediaonclick.com/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | PR & Media Buying Agency Dubai | MOC',
    description: 'Find answers to frequently asked questions about MediaOnClick\'s PR, media planning, event management, and influencer marketing services in Dubai and beyond.',
    url: 'https://www.mediaonclick.com/faq',
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
    "url": "https://www.mediaonclick.com/faq"
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
