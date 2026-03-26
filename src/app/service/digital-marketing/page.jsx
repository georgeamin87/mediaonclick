'use client'
import Image from "next/image";
import PageHeading from '@/app/ui/PageHeading'
import Div from '@/app/ui/Div'
import Spacing from '@/app/ui/Spacing'
import SectionHeading from '@/app/ui/SectionHeading'
import Cta from '@/app/ui/Cta'
import aboutImg5 from '/public/images/team/team.jpg'
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
const portfolioData = [
  {
    title: 'DAHUA Technology',
    subtitle: 'See Details',
    href: '/portfolio/aluha',
    src: '/images/portfolio_11.png',
  },
  {
    title: 'Grohe',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/projects/grohe.png',
  },
  {
    title: 'Hanif',
    subtitle: 'See Details',
    href: '/portfolio/hanif',
    src: '/images/projects/hanif.jpg',
  },
  {
    title: 'MultiBank',
    subtitle: 'See Details',
    href: '/portfolio/multibank-group-gala',
    src: '/images/projects/snapinsta.jpg',
  },
];
export default function ServiceDetails() {
  const details = {
    title: 'DIGITAL MARKETING',
    description: 'We build comprehensive digital strategies that work - from content creation and SEO optimization to paid campaigns and analytics. Our goal is to grow your online reach, drive meaningful engagement, and deliver measurable business results.',
    image: '/images/service_hero_bg.jpeg',
    features: [
      'Customized digital strategy development',
      'Search Engine Optimization (SEO)',
      'Pay-per-click advertising (PPC)',
      'Social media marketing & management',
      'Content marketing & blogging',
      'Email marketing automation',
      'Conversion rate optimization',
      'Comprehensive analytics & reporting'
    ],
    services: [
      { title: 'SEO', icon: '/images/icons/seo-icon.svg', desc: 'Improve organic visibility and search rankings' },
      { title: 'PPC', icon: '/images/icons/ppc-icon.svg', desc: 'Targeted paid advertising campaigns' },
      { title: 'Social Media', icon: '/images/icons/social-icon.svg', desc: 'Engagement-driven platform strategies' },
      { title: 'Content', icon: '/images/icons/content-icon.svg', desc: 'Value-driven content creation' },
      { title: 'Email', icon: '/images/icons/email-icon.svg', desc: 'Automated nurture sequences' },
      { title: 'Analytics', icon: '/images/icons/analytics-icon.svg', desc: 'Data-driven performance insights' }
    ]
  }

  return (
    <>
      <PageHeading
        title={details.title}
        bgSrc={details.image}
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80' />

      <Div className='container'>
        <SectionHeading
          title='Service Overview'
          subtitle={details.title}
        />
        <Spacing lg='70' md='45' />
        <Div className='row'>
          <Div className='col-lg-6'>
            <p className='cs-m0'>{details.description}</p>
            <Spacing lg='50' md='30' />
            <h3 className='cs-font_30 cs-m0'>Our Digital Services</h3>
            <Spacing lg='30' md='20' />
            <Div className='row'>
              {details.services.map((service, index) => (
                <Div key={index} className='col-xl-5 col-lg-6'>
                  <Div className='cs-service_icon_box'>
                    <img src={service.icon} alt={service.title} style={{ width: '64px', height: '64px' }} />
                    <h4>{service.title}</h4>
                    <p>{service.desc}</p>
                  </Div>
                </Div>
              ))}
            </Div>
          </Div>
          <Div className='col-xl-5 offset-xl-1 col-lg-6'>
            <h3 className='cs-font_30 cs-m0'>Comprehensive Solutions</h3>
            <Spacing lg='30' md='20' />
            <ul className='cs-list cs-style1 cs-mp0'>
              {details.features.map((feature, index) => (
                <li key={index}><span className='cs-accent_color'>✓</span> {feature}</li>
              ))}
            </ul>
          </Div>
        </Div>
      </Div>

      <Spacing lg='150' md='80' />

      {/* Why Choose Us */}
      <Spacing lg='100' md='60' />
      <Div className='cs-why_choose cs-style1'>
        <Div className='cs-why_choose_bg' style={{ backgroundImage: 'url(/images/why_choose_bg.jpg)' }}></Div>
        <Div className='container'>
          <SectionHeading
            title='Why Choose Our Media Planning'
            subtitle='Expertise That Delivers'
            variant='cs-style1 text-white'
          />
          <Div className='row'>
            <Div className='col-lg-4'>
              <Div className='cs-why_choose_item'>
                <h3 className='cs-why_choose_item_title'>15+ Years</h3>
                <p className='cs-why_choose_item_subtitle'>Industry Experience</p>
              </Div>
            </Div>
            <Div className='col-lg-4'>
              <Div className='cs-why_choose_item'>
                <h3 className='cs-why_choose_item_title'>95%</h3>
                <p className='cs-why_choose_item_subtitle'>Client Retention</p>
              </Div>
            </Div>
            <Div className='col-lg-4'>
              <Div className='cs-why_choose_item'>
                <h3 className='cs-why_choose_item_title'>360°</h3>
                <p className='cs-why_choose_item_subtitle'>Media Coverage</p>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg5}
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Highly experienced people with us"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                Our team at Media OnClick (MOC) turns ideas into results across every channel. We combine deep industry expertise with bold creativity to deliver immersive event management, strategic public relations, precision media planning & buying, and data-driven digital marketing.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                We design innovative campaigns through influencer marketing, compelling creatives, and cutting-edge digital innovation, including interior designing, while providing strategic consultancy tailored to your goals. Every project we take on is built to amplify your brand, engage your audience, and create measurable impact that makes your presence unforgettable.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Portfolio Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our Portfolio"
          subtitle="Case Studies"
        />
        <Spacing lg="70" md="45" />
        <PortfolioSlider data={portfolioData} />
      </Div>

      <Spacing lg='150' md='80' />
      <Cta
        title='Ready to transform your digital presence?'
        btnText='Get Started'
        btnLink='/contact'
        bgSrc='/images/cta_bg.jpeg'
      />
    </>
  )
}
