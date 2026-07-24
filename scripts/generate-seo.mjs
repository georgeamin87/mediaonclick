import fs from 'fs';
import path from 'path';

const baseUrl = 'https://mediaonclick.me';

const routes = [
  {
    path: 'app',
    title: 'Leading PR, Events & Media Buying Agency in Dubai | MOC – Your Partner In Business',
    desc: 'Discover MediaOnClick, a premier PR, Events & Media Buying agency in Dubai. We create influential brand experiences and memorable campaigns tailored for you.',
    type: 'ProfessionalService'
  },
  {
    path: 'app/about',
    title: 'Top PR & Marketing Agency in Dubai | MediaOnClick - About Us',
    desc: 'Learn about MediaOnClick. We offer expert media planning, PR, interior design, and digital strategies to connect, captivate, and convert your target audience.',
    type: 'Organization'
  },
  {
    path: 'app/contact',
    title: 'Contact MediaOnClick | Top PR & Event Management Agency in Dubai',
    desc: 'Get in touch with MediaOnClick for collaboration, meeting requests, or inquiries regarding PR, events, media planning, and influencer marketing services.',
    type: 'ContactPage'
  },
  {
    path: 'app/faq',
    title: 'Frequently Asked Questions | PR & Media Buying Agency Dubai | MOC',
    desc: "Find answers to frequently asked questions about MediaOnClick's PR, media planning, event management, and influencer marketing services in Dubai and beyond.",
    type: 'FAQPage'
  },
  {
    path: 'app/gallery',
    title: 'Our Work Gallery | PR, Events & Influencer Marketing Campaigns | MOC',
    desc: 'View our gallery showcasing successful events, PR campaigns, influencer collaborations, and interior design projects by the expert MediaOnClick team in Dubai.',
    type: 'CollectionPage'
  },
  {
    path: 'app/our-clients',
    title: 'Trusted by Global Brands | Our Clients | MediaOnClick Dubai',
    desc: 'Explore the top global brands and businesses that trust MediaOnClick for strategic public relations, media buying, event management, and digital marketing.',
    type: 'CollectionPage'
  },
  {
    path: 'app/privacy-policy',
    title: 'Privacy Policy | MediaOnClick PR & Media Agency Dubai',
    desc: "Read MediaOnClick's privacy policy to understand how we collect, use, and protect your personal data when you visit our website or use our agency services.",
    type: 'WebPage'
  },
  {
    path: 'app/service',
    title: 'Expert PR, Media Buying & Event Management Services in Dubai | MOC',
    desc: "Explore MediaOnClick's expert services: PR, media planning, event management, interior design, consultancy, digital marketing, and influencer collaborations.",
    type: 'CollectionPage'
  },
  {
    path: 'app/team',
    title: 'Meet Our Expert Team | PR & Digital Marketing Specialists in Dubai',
    desc: 'Meet the experienced and passionate creatives behind MediaOnClick who turn challenges into standout results in PR, events, media, and digital marketing.',
    type: 'AboutPage'
  },
  {
    path: 'app/terms-conditions',
    title: 'Terms & Conditions | MediaOnClick PR & Events Agency',
    desc: "Review the terms and conditions for using MediaOnClick's website and services. Discover our operational guidelines and legal disclaimers.",
    type: 'WebPage'
  },
  {
    path: 'app/portfolio',
    title: 'Our Portfolio | Successful PR & Digital Marketing Case Studies | MOC',
    desc: "Explore MediaOnClick's portfolio of successful case studies including top brands across PR, events, digital marketing, and interior design sectors in Dubai.",
    type: 'CollectionPage'
  }
];

const services = [
  { slug: 'consultancy', name: 'Strategic Brand & Marketing Consultancy in Dubai | MediaOnClick' },
  { slug: 'digital-marketing', name: 'Result-Driven Digital Marketing Agency in Dubai | MediaOnClick' },
  { slug: 'event-management', name: 'Premier Corporate Event Management Company in Dubai | MediaOnClick' },
  { slug: 'influencers', name: 'Top Influencer Marketing Agency in Dubai & UAE | MediaOnClick' },
  { slug: 'interior-design', name: 'Creative Commercial Interior Design Solutions in Dubai | MOC' },
  { slug: 'media-plaining-buying', name: 'Expert Media Planning & Buying Agency in Dubai | MediaOnClick' },
  { slug: 'pr', name: 'Leading Public Relations (PR) Agency in Dubai | MediaOnClick' }
];

services.forEach(s => {
  routes.push({
    path: `app/service/${s.slug}`,
    title: s.name,
    desc: `Elevate your brand with MediaOnClick's expert services. We deliver strategic, data-driven solutions to achieve measurable growth and market dominance in Dubai.`,
    type: 'Service'
  });
});

const portfolios = [
  'al-hazaifa', 'al-kabayel-prime', 'chattels-and-more', 'daluha',
  'design-middle-east-awards-2023', 'dubai-police', 'gf-corys', 'grohe',
  'hanif', 'homes-r-us', 'ideal-standard', 'interior-furniture',
  'kabayel', 'kohler', 'multibank-group-gala', 'ofis', 'pegasus', 'walid-atallah'
];

function formatName(slug) {
  return slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

portfolios.forEach(p => {
  const name = formatName(p);
  routes.push({
    path: `app/portfolio/${p}`,
    title: `${name} Portfolio | Top PR & Marketing Agency Dubai | MOC`,
    desc: `Explore the ${name} case study by MediaOnClick. See how our expert strategies in PR, media buying, and events delivered exceptional results for our clients.`,
    type: 'Service' // Using Service schema for Portfolios as requested
  });
});

function generateLayoutContent(route) {
  let titleStr = route.title;
  let descStr = route.desc;
  if (descStr.length > 160) {
    descStr = descStr.substring(0, 157) + '...';
  }

  const urlPath = route.path === 'app' ? '' : route.path.replace('app/', '');
  const url = `${baseUrl}/${urlPath}`;

  let jsonLd;

  if (route.type === 'Organization') {
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Media OnClick (MOC)",
      "url": url,
      "logo": "https://mediaonclick.me/images/MOC-Primary-Logo-300x300.png",
      "telephone": "+971-4-456-7122",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Office No. 2609, Shatha Tower",
        "addressLocality": "Dubai Media City",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
      },
      "sameAs": [
        "https://www.linkedin.com/company/media-onclick/",
        "https://instagram.com",
        "https://www.facebook.com/mediaonclick.me/"
      ]
    };
  } else if (route.type === 'Service') {
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": titleStr,
      "description": descStr,
      "url": url,
      "provider": {
        "@type": "ProfessionalService",
        "name": "Media OnClick (MOC)",
        "telephone": "+971-4-456-7122",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Office No. 2609, Shatha Tower",
          "addressLocality": "Dubai Media City",
          "addressRegion": "Dubai",
          "addressCountry": "AE"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": "Dubai"
      }
    };
  } else {
    jsonLd = {
      "@context": "https://schema.org",
      "@type": route.type,
      "name": titleStr,
      "description": descStr,
      "url": url
    };
  }

  return `export const metadata = {
  title: '${titleStr.replace(/'/g, "\\'")}',
  description: '${descStr.replace(/'/g, "\\'")}',
  alternates: {
    canonical: '${url}',
  },
  openGraph: {
    title: '${titleStr.replace(/'/g, "\\'")}',
    description: '${descStr.replace(/'/g, "\\'")}',
    url: '${url}',
    siteName: 'MediaOnClick',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '${titleStr.replace(/'/g, "\\'")}',
    description: '${descStr.replace(/'/g, "\\'")}',
  }
};

export default function Layout({ children }) {
  const jsonLd = ${JSON.stringify(jsonLd, null, 4)};

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
`;
}

routes.forEach(route => {
  if (route.path === 'app') return; // Skip root layout handled manually

  const dir = path.join(process.cwd(), 'src', route.path);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  const filePath = path.join(dir, 'layout.jsx');
  fs.writeFileSync(filePath, generateLayoutContent(route));
  console.log(`Generated ${filePath}`);
});
