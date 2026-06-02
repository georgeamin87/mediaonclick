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
    title: 'INTERIOR DESIGN SOLUTIONS',
    description: 'We create functional, visually striking spaces tailored to your business needs. From modern showrooms that elevate customer experience to efficient warehouse layouts that maximize workflow and productivity, our interior design solutions combine creativity, strategy, and practicality. We deliver customized designs for commercial, retail, and industrial environments with attention to aesthetics, space planning, and operational efficiency.',
    image: '/images/about_img_6.webp',
    features: [
      'Customized space planning & zoning',
      '3D conceptual design & visualization',
      'Material sourcing & finish selection',
      'Ergonomic workspace configurations',
      'Commercial & retail showroom layout optimization',
      'Industrial & warehouse workflow design',
      'Lighting design & acoustic planning',
      'Turnkey execution & project coordination'
    ],
    services: [
      { title: 'Commercial Design', icon: '/images/icons/service_icon_1.svg', desc: 'Sleek, professional spaces tailored to corporate environments.' },
      { title: 'Retail & Showrooms', icon: '/images/icons/service_icon_3.svg', desc: 'Visually striking layouts that enhance customer engagement.' },
      { title: 'Industrial Layouts', icon: '/images/icons/service_icon_6.svg', desc: 'Efficient configurations optimizing workflow and productivity.' },
      { title: 'Space Planning', icon: '/images/icons/service_icon_2.svg', desc: 'Strategic space utilization and workflow optimization.' },
      { title: '3D Visualization', icon: '/images/icons/service_icon_5.svg', desc: 'High-fidelity conceptual 3D renders of your future space.' },
      { title: 'Material Selection', icon: '/images/icons/service_icon_7.svg', desc: 'Curated sourcing of premium finishes, furniture, and lighting.' }
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
            <h3 className='cs-font_30 cs-m0'>Our Design Solutions</h3>
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
            <h3 className='cs-font_30 cs-m0'>Comprehensive Offerings</h3>
            <Spacing lg='30' md='20' />
            <ul className='cs-list cs-style1 cs-mp0'>
              {details.features.map((feature, index) => (
                <li key={index}><span className='cs-accent_color'>✓</span> {feature}</li>
              ))}
            </ul>
          </Div>
        </Div>
      </Div>
      {/* 
      <Spacing lg='150' md='80' />

 Why Choose Us 
      <Spacing lg='100' md='60' />
      <Div className='cs-why_choose cs-style1'>
        <Div className='cs-why_choose_bg' style={{ backgroundImage: 'url(/images/why_choose_bg.jpg)' }}></Div>
        <Div className='container'>
          <SectionHeading
            title='Why Choose Our Expertise'
            subtitle='Excellence That Delivers'
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
                <p className='cs-why_choose_item_subtitle'>Creative Coverage</p>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
*/}
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
        title='Ready to transform your physical space?'
        btnText='Get Started'
        btnLink='/contact'
        bgSrc='/images/cta_bg.jpeg'
      />
    </>
  )
}
