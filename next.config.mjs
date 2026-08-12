/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.mediaonclick.me',
          },
        ],
        destination: 'https://mediaonclick.me/:path*',
        permanent: true,
      },
      {
        source: '/about/media-partners',
        destination: '/our-clients',
        permanent: true,
      },
      {
        source: '/about/news',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/about/clientele',
        destination: '/our-clients',
        permanent: true,
      },
      {
        source: '/what-we-do/case-studies',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/what-we-do/case-studies/cfi',
        destination: '/portfolio',
        permanent: true,
      },
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
      {
        source: '/services',
        destination: '/service',
        permanent: true,
      },
      {
        source: '/work-with-us/sign-up-influencer',
        destination: '/service/influencers',
        permanent: true,
      },
      {
        source: '/work-with-us',
        destination: '/contact',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
