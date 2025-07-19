'use client'
import Image from "next/image";
import PageHeading from '@/app/ui/PageHeading'
import Div from '@/app/ui/Div'
import Spacing from '@/app/ui/Spacing'
import SectionHeading from '@/app/ui/SectionHeading'
import Cta from '@/app/ui/Cta'
import aboutImg4 from '/public/images/services/pr.jpg'
import aboutImg5 from '/public/images/team/team.jpg'
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
// Portfolio Data
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
    title: 'MEDIA PLANNING & BUYING',
    description: 'We analyze audience behavior, identify the best media channels, and strategically buy ad placements to ensure your brand gains maximum visibility and return on investment.',
    image: '/images/service_hero_bg.jpeg',
    features: [
      'Comprehensive market research',
      'Audience segmentation and profiling',
      'Media channel optimization',
      'Cost-efficient ad placement strategies',
      'Performance analytics and ROI tracking'
    ],
    process: [
      {title: 'Research', desc: 'Understanding your target audience and market landscape'},
      {title: 'Planning', desc: 'Developing a customized media strategy'},
      {title: 'Buying', desc: 'Negotiating and securing optimal ad placements'},
      {title: 'Optimization', desc: 'Continuous performance monitoring and adjustments'}
    ]
  }

  return (
    <>
      <PageHeading 
        title={details.title}
        bgSrc={details.image}
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80'/>
      
      {/* Start Service Overview Section */}
      <Div className='container'>
        <Div className='row'>
          <Div className='col-xl-5 col-lg-6'>
            <Div className='cs-image_layer cs-style1'>
              <Div className='cs-image_layer_in'>
              <Image
                  src={aboutImg4}
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg='0' md='40'/>
          </Div>
          <Div className='col-xl-5 offset-xl-1 col-lg-6'>
            <SectionHeading
              title='Strategic Media Planning & Buying'
              subtitle='Service Overview'
            >
              <Spacing lg='30' md='20'/>
              <p className='cs-m0'>
                {details.description}
              </p>
              <Spacing lg='30' md='30'/>
              <h3 className='cs-font_30 cs-m0'>Key Features</h3>
              <Spacing lg='20' md='15'/>
              <ul className='cs-list cs-style1 cs-mp0'>
                {details.features.map((feature, index) => (
                  <li key={index}>
                    <span className='cs-accent_color'>✓</span> {feature}
                  </li>
                ))}
              </ul>
              <Spacing lg='30' md='30'/>
              <Div className='cs-separator cs-accent_bg'></Div>
              <Spacing lg='25' md='0'/>
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Service Overview Section */}

      {/* Why Choose Us */}
      <Spacing lg='100' md='60'/>
      <Div className='cs-why_choose cs-style1'>
        <Div className='cs-why_choose_bg' style={{backgroundImage: 'url(/images/why_choose_bg.jpg)'}}></Div>
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
                Our team of media experts brings deep industry knowledge and innovative
                strategies to maximize your advertising ROI across all channels.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0">
                We combine data-driven insights with creative execution to deliver
                campaigns that resonate with your target audience and drive results.
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
      
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Ready to maximize your media ROI?' 
          btnText='Get Started' 
          btnLink='/contact'
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
