export const metadata = {
  title: 'Meet Our Expert Team | PR & Digital Marketing Specialists in Dubai',
  description: 'Meet the experienced and passionate creatives behind MediaOnClick who turn challenges into standout results in PR, events, media, and digital marketing.',
  alternates: {
    canonical: 'https://mediaonclick.me/team',
  },
  openGraph: {
    title: 'Meet Our Expert Team | PR & Digital Marketing Specialists in Dubai',
    description: 'Meet the experienced and passionate creatives behind MediaOnClick who turn challenges into standout results in PR, events, media, and digital marketing.',
    url: 'https://mediaonclick.me/team',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Expert Team | PR & Digital Marketing Specialists in Dubai',
    description: 'Meet the experienced and passionate creatives behind MediaOnClick who turn challenges into standout results in PR, events, media, and digital marketing.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "Meet Our Expert Team | PR & Digital Marketing Specialists in Dubai",
    "description": "Meet the experienced and passionate creatives behind MediaOnClick who turn challenges into standout results in PR, events, media, and digital marketing.",
    "url": "https://mediaonclick.me/team"
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
