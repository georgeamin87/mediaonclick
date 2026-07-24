export const metadata = {
  title: 'Terms & Conditions | MediaOnClick PR & Events Agency',
  description: 'Review the terms and conditions for using MediaOnClick\'s website and services. Discover our operational guidelines and legal disclaimers.',
  alternates: {
    canonical: 'https://mediaonclick.me/terms-conditions',
  },
  openGraph: {
    title: 'Terms & Conditions | MediaOnClick PR & Events Agency',
    description: 'Review the terms and conditions for using MediaOnClick\'s website and services. Discover our operational guidelines and legal disclaimers.',
    url: 'https://mediaonclick.me/terms-conditions',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms & Conditions | MediaOnClick PR & Events Agency',
    description: 'Review the terms and conditions for using MediaOnClick\'s website and services. Discover our operational guidelines and legal disclaimers.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terms & Conditions | MediaOnClick PR & Events Agency",
    "description": "Review the terms and conditions for using MediaOnClick's website and services. Discover our operational guidelines and legal disclaimers.",
    "url": "https://mediaonclick.me/terms-conditions"
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
