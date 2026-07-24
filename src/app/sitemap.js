export default function sitemap() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://mediaonclick.me';

  const services = [
    'consultancy',
    'digital-marketing',
    'event-management',
    'influencers',
    'interior-design',
    'media-plaining-buying',
    'pr'
  ];

  const portfolios = [
    'al-hazaifa',
    'al-kabayel-prime',
    'chattels-and-more',
    'daluha',
    'design-middle-east-awards-2023',
    'dubai-police',
    'gf-corys',
    'grohe',
    'hanif',
    'homes-r-us',
    'ideal-standard',
    'interior-furniture',
    'kabayel',
    'kohler',
    'multibank-group-gala',
    'ofis',
    'pegasus',
    'walid-atallah'
  ];

  const serviceRoutes = services.map(service => ({
    url: `${baseUrl}/service/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.9,
  }));

  const portfolioRoutes = portfolios.map(portfolio => ({
    url: `${baseUrl}/portfolio/${portfolio}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/our-clients`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${baseUrl}/service`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1, // High priority as requested
    },
    {
      url: `${baseUrl}/team`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/terms-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    ...serviceRoutes,
    ...portfolioRoutes,
  ];
}
