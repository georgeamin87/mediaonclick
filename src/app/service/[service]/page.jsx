'use client'
import { useParams } from 'next/navigation'
import PageHeading from '@/app/ui/PageHeading'
import Div from '@/app/ui/Div'
import Spacing from '@/app/ui/Spacing'
import SectionHeading from '@/app/ui/SectionHeading'
import Cta from '@/app/ui/Cta'

const serviceDetails = {
  'media-plaining-buying': {
    title: 'MEDIA PLANNING & BUYING',
    description: 'We analyze audience behavior, identify the best media channels, and strategically buy ad placements to ensure your brand gains maximum visibility and return on investment.',
    image: '/images/service_1.jpeg',
    features: [
      'Audience analysis and segmentation',
      'Strategic media channel selection',
      'Cost-effective ad placement',
      'Performance tracking and optimization'
    ]
  },
  // Other services will be added similarly
}

export default function ServiceDetails() {
  const { service } = useParams()
  const details = serviceDetails[service]

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
          title='Service Overview'
          subtitle={details.title}
        />
        <Spacing lg='70' md='45'/>
        <Div className='row'>
          <Div className='col-lg-6'>
            <p className='cs-m0'>{details.description}</p>
          </Div>
          <Div className='col-lg-6'>
            <ul className='cs-list cs-style1 cs-mp0'>
              {details.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      <Cta 
        title='Ready to elevate your brand?' 
        btnText='Get Started' 
        btnLink='/contact'
        bgSrc='/images/cta_bg.jpeg'
      />
    </>
  )
}
