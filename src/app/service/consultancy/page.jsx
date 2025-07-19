'use client'
import PageHeading from '@/app/ui/PageHeading'
import Div from '@/app/ui/Div'
import Spacing from '@/app/ui/Spacing'
import SectionHeading from '@/app/ui/SectionHeading'
import Cta from '@/app/ui/Cta'

export default function ServiceDetails() {
  const details = {
    title: 'CONSULTANCY',
    description: 'Our consultancy service helps you clarify your brand direction, strengthen your marketing approach, and stay competitive with data-backed insights and creative strategies. We provide tailored solutions to address your unique business challenges and opportunities.',
    image: '/images/service_5.jpeg',
    features: [
      'Brand strategy and positioning',
      'Market research and competitive analysis',
      'Consumer insights and behavior studies',
      'Marketing strategy development',
      'Digital transformation consulting',
      'Performance optimization',
      'Go-to-market strategies'
    ],
    approach: [
      {title: 'Discovery', icon: '/images/icons/discovery-icon.svg', desc: 'Deep dive into your business challenges'},
      {title: 'Analysis', icon: '/images/icons/analysis-icon.svg', desc: 'Comprehensive market and data evaluation'},
      {title: 'Strategy', icon: '/images/icons/strategy-icon.svg', desc: 'Customized roadmap development'},
      {title: 'Implementation', icon: '/images/icons/implementation-icon.svg', desc: 'Actionable recommendations and support'}
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
      
      <Div className='container'>
        <SectionHeading 
          title='Strategic Consultancy'
          subtitle={details.title}
        />
        <Spacing lg='70' md='45'/>
        <Div className='row'>
          <Div className='col-lg-6'>
            <p className='cs-m0'>{details.description}</p>
            <Spacing lg='50' md='30'/>
            <h3 className='cs-font_30 cs-m0'>Our Methodology</h3>
            <Spacing lg='30' md='20'/>
            <Div className='row'>
              {details.approach.map((step, index) => (
                <Div key={index} className='col-md-6'>
                  <Div className='cs-methodology_step'>
                    <img src={step.icon} alt={step.title} />
                    <h4>{step.title}</h4>
                    <p>{step.desc}</p>
                  </Div>
                </Div>
              ))}
            </Div>
          </Div>
          <Div className='col-lg-6'>
            <h3 className='cs-font_30 cs-m0'>Consulting Services</h3>
            <Spacing lg='30' md='20'/>
            <ul className='cs-list cs-style1 cs-mp0'>
              {details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <Spacing lg='40' md='30'/>
            <Div className='cs-consulting_areas'>
              <h4>Specialized Areas:</h4>
              <Div className='row'>
                <Div className='col-md-6'>
                  <ul className='cs-list cs-mp0'>
                    <li>Brand Strategy</li>
                    <li>Digital Marketing</li>
                  </ul>
                </Div>
                <Div className='col-md-6'>
                  <ul className='cs-list cs-mp0'>
                    <li>Consumer Insights</li>
                    <li>Growth Strategy</li>
                  </ul>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      
      <Spacing lg='150' md='80'/>
      
      <Div className='container'>
        <SectionHeading 
          title='Client Success'
          subtitle='Case Studies'
        />
        <Spacing lg='70' md='45'/>
        {/* Case studies would be added here */}
      </Div>
      
      <Spacing lg='150' md='80'/>
      <Cta 
        title='Ready to transform your business strategy?' 
        btnText='Get Started' 
        btnLink='/contact'
        bgSrc='/images/cta_bg.jpeg'
      />
    </>
  )
}
