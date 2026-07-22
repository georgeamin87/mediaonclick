export const metadata = {
  title: 'Our Portfolio | Successful PR & Digital Marketing Case Studies | MOC',
  description: 'Explore MediaOnClick\'s portfolio of successful case studies including top brands across PR, events, digital marketing, and interior design sectors in Dubai.',
  alternates: {
    canonical: 'https://www.mediaonclick.com/portfolio',
  },
  openGraph: {
    title: 'Our Portfolio | Successful PR & Digital Marketing Case Studies | MOC',
    description: 'Explore MediaOnClick\'s portfolio of successful case studies including top brands across PR, events, digital marketing, and interior design sectors in Dubai.',
    url: 'https://www.mediaonclick.com/portfolio',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Our Portfolio | Successful PR & Digital Marketing Case Studies | MOC',
    description: 'Explore MediaOnClick\'s portfolio of successful case studies including top brands across PR, events, digital marketing, and interior design sectors in Dubai.',
  }
};

export default function Layout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Our Portfolio | Successful PR & Digital Marketing Case Studies | MOC",
    "description": "Explore MediaOnClick's portfolio of successful case studies including top brands across PR, events, digital marketing, and interior design sectors in Dubai.",
    "url": "https://www.mediaonclick.com/portfolio"
};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
