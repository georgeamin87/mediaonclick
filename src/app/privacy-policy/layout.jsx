export const metadata = {
  title: 'Privacy Policy | MediaOnClick PR & Media Agency Dubai',
  description: 'Read MediaOnClick\'s privacy policy to understand how we collect, use, and protect your personal data when you visit our website or use our agency services.',
  alternates: {
    canonical: 'https://www.mediaonclick.com/privacy-policy',
  },
  openGraph: {
    title: 'Privacy Policy | MediaOnClick PR & Media Agency Dubai',
    description: 'Read MediaOnClick\'s privacy policy to understand how we collect, use, and protect your personal data when you visit our website or use our agency services.',
    url: 'https://www.mediaonclick.com/privacy-policy',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy | MediaOnClick PR & Media Agency Dubai',
    description: 'Read MediaOnClick\'s privacy policy to understand how we collect, use, and protect your personal data when you visit our website or use our agency services.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Privacy Policy | MediaOnClick PR & Media Agency Dubai",
    "description": "Read MediaOnClick's privacy policy to understand how we collect, use, and protect your personal data when you visit our website or use our agency services.",
    "url": "https://www.mediaonclick.com/privacy-policy"
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
