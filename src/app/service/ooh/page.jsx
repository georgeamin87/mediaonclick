'use client'
import Image from "next/image";
import Link from "next/link";
import Div from '@/app/ui/Div'
import Spacing from '@/app/ui/Spacing'
import SectionHeading from '@/app/ui/SectionHeading'
import Cta from '@/app/ui/Cta'
import aboutImg5 from '/public/images/team/team.jpg'
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import OohServiceList from './OohServiceList';

// Portfolio Data
const portfolioData = [
  {
    title: 'Chattels and More',
    subtitle: 'See Details',
    href: '/portfolio/chattels-and-more',
    src: '/images/projects/chattels and more/ooh.jpeg',
  },
  {
    title: 'Grohe',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/projects/grohe/screen.webp',
  },
  {
    title: 'Al Kabayel Prime',
    subtitle: 'See Details',
    href: '/portfolio/kabayel',
    src: '/images/projects/kabayel/4.webp',
  },
  {
    title: 'OFIS Product Launch',
    subtitle: 'See Details',
    href: '/portfolio/ofisa',
    src: '/images/projects/ofis/Ofis1-NEW.webp',
  },
];

function OOHPageHeading({ title, videoSrc, pageLinkText }) {
  return (
    <Div
      className="cs-page_heading cs-style1 cs-center text-center cs-bg"
      style={{ position: 'relative', overflow: 'hidden' }}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: 0,
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.45)',
          zIndex: 1,
        }}
      />
      <Div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <Div className="cs-page_heading_in">
          <h1 className="cs-page_title cs-font_50 cs-white_color">{title}</h1>
          <ol className="breadcrumb text-uppercase justify-content-center d-flex">
            <li className="breadcrumb-item">
              <Link href="/">Home</Link>
            </li>
            <li className="breadcrumb-item active">{pageLinkText}</li>
          </ol>
        </Div>
      </Div>
    </Div>
  );
}

export default function ServiceDetails() {
  const details = {
    title: 'OUT-OF-HOME (OOH) ADVERTISING',
    description: 'We place your brand front and center across Dubai and the UAE with high-impact Out-of-Home (OOH) and Digital OOH advertising. From iconic Sheikh Zayed Road billboards and dynamic LED screens to metro stations and luxury mall displays, our OOH strategies maximize reach, command attention, and build unforgettable brand dominance.',
    video: '/video/ooh_moc.mp4',
    features: [
      'Digital OOH (DOOH) & LED billboard networks',
      'Prime Sheikh Zayed Road & highway hoardings',
      'Metro, transit & airport media placements',
      'Luxury mall & retail digital screens',
      'Landmark building wraps & bridge banners',
      'Programmatic & data-driven OOH campaigns',
      'Location-based audience targeting & analytics'
    ],
    benefits: [
      'Unrivaled brand visibility across prime UAE locations',
      'Mass reach with 24/7 continuous exposure',
      'High-impact visual dominance that builds instant prestige',
      'Dynamic storytelling through digital OOH screens',
      'Strategic ad placement targeting high-footfall zones',
      'Seamless integration with digital & mobile campaigns'
    ]
  }

  return (
    <>
      <OOHPageHeading
        title={details.title}
        videoSrc={details.video}
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80' />

      <Div className='container'>
        <SectionHeading
          title='OOH Advertising Strategy'
          subtitle={details.title}
        />
        <Spacing lg='70' md='45' />
        <Div className='row'>
          <Div className='col-lg-6'>
            <p className='cs-m0'>{details.description}</p>
            <Spacing lg='50' md='30' />
            <h3 className='cs-font_30 cs-m0'>Key Benefits</h3>
            <Spacing lg='30' md='20' />
            <ul className='cs-list cs-style1 cs-mp0'>
              {details.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </Div>
          <Div className='col-xl-5 offset-xl-1 col-lg-6'>
            <h3 className='cs-font_30 cs-m0'>Our OOH Services</h3>
            <Spacing lg='30' md='20' />
            <ul className='cs-list cs-style1 cs-mp0'>
              {details.features.map((feature, index) => (
                <li key={index}><span className='cs-accent_color'>✓</span> {feature}</li>
              ))}
            </ul>
          </Div>
        </Div>
      </Div>

      {/* Start OOH Core Services Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Our Out-of-Home Media Formats"
          subtitle="OOH Solutions"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <OohServiceList />
      </Div>
      {/* End OOH Core Services Section */}

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
                Our team at Media OnClick (MOC) turns ideas into results across every channel. We combine deep industry expertise with bold creativity to deliver high-impact Out-of-Home (OOH) campaigns, premium outdoor billboard placements, strategic public relations, precision media planning & buying, and data-driven digital marketing.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                We design innovative campaigns through prime outdoor media, cutting-edge Digital OOH (DOOH) screens, compelling creatives, and high-footfall activations across Dubai and the Middle East. Every OOH campaign we launch is built to command attention, engage your target audience on the move, and create measurable impact that makes your presence unforgettable.
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
        title='Ready To Dominate The Skyline With High-Impact OOH Advertising?'
        btnText='Get Started'
        btnLink='/contact'
        bgSrc='/images/cta_bg.jpeg'
      />
    </>
  )
}

