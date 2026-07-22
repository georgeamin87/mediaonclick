export const metadata = {
  title: 'Contact MediaOnClick | Top PR & Event Management Agency in Dubai',
  description: 'Get in touch with MediaOnClick for collaboration, meeting requests, or inquiries regarding PR, events, media planning, and influencer marketing services.',
  alternates: {
    canonical: 'https://www.mediaonclick.com/contact',
  },
  openGraph: {
    title: 'Contact MediaOnClick | Top PR & Event Management Agency in Dubai',
    description: 'Get in touch with MediaOnClick for collaboration, meeting requests, or inquiries regarding PR, events, media planning, and influencer marketing services.',
    url: 'https://www.mediaonclick.com/contact',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact MediaOnClick | Top PR & Event Management Agency in Dubai',
    description: 'Get in touch with MediaOnClick for collaboration, meeting requests, or inquiries regarding PR, events, media planning, and influencer marketing services.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact MediaOnClick | Top PR & Event Management Agency in Dubai",
    "description": "Get in touch with MediaOnClick for collaboration, meeting requests, or inquiries regarding PR, events, media planning, and influencer marketing services.",
    "url": "https://www.mediaonclick.com/contact"
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
