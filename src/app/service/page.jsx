'use client'
import Card from "../ui/Card";
import Accordion from "@/app/ui/Accordion";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import IconBox from "@/app/ui/IconBox";
import ServiceList from "@/app/ui/ServiceList";
import PricingTableList from "@/app/ui/PricingTable/PricingTableList";
import SectionHeading from "@/app/ui/SectionHeading";
import TestimonialSlider from "@/app/ui/Slider/TestimonialSlider";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import serviceImage2 from '/public/images/service_img_1.jpeg';

export default function ServicesPage() {
  return (
    <>
      <PageHeading
        title='Services'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80' />
      <Div className='cs-shape_wrap_4'>
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title='Where Brands Meet Influence'
                subtitle='Discover how we accelerate your media presence'
              />
              <Spacing lg='90' md='45' />
            </Div>
            <Div className='col-xl-8'>
              <Div className='row'>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='MEDIA PLANNING & BUYING'
                    link='/service/media-plaining-buying'
                    src='/images/service_1.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30' />
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='EVENT MANAGEMENT'
                    link='/service/event-management'
                    src='/images/services/event.jpg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30' />
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Interior Design Solutions'
                    link='/service/interior-design'
                    src='/images/about_img_6.webp'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30' />
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='PUBLIC RELATIONS'
                    link='/service/pr'
                    src='/images/services/pr.jpg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30' />
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='CONSULTANCY'
                    link='/service/consultancy'
                    src='/images/service_4.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30' />
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='INFLUENCER MARKETING'
                    link='/service/influencers'
                    src='/images/services/influence.jpg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30' />
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80' />
      <Div className="container">
        <SectionHeading
          title='What We Offer'
          subtitle='360° Marketing Solutions'
          variant='cs-style1 text-center'
        />
        <Spacing lg='90' md='45' />
        <Div className="row justify-content-center">
          <Div className="col-lg-4">
            <IconBox
              href='/service/pr'
              icon='/images/icons/service_icon_4.svg'
              title='Public Relations'
              subtitle="We amplify your brands message through media outreach, crisis communication, brand reputation management, and editorial placements."
            />
            <Spacing lg='30' md='30' />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              href='/service/media-plaining-buying'
              icon='/images/icons/service_icon_7.svg'
              title='Media Planning & Buying'
              subtitle="Strategic media planning and buying across all platforms to maximize your reach and optimize your return on investment."
            />
            <Spacing lg='30' md='30' />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              href='/service/event-management'
              icon='/images/icons/service_icon_3.svg'
              title='Events & Activations'
              subtitle='We plan and execute on-ground experiences that excite, engage, and inspire-from product launches to mall activations and interactive exhibits.'
            />
            <Spacing lg='30' md='30' />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              href='/service'
              icon='/images/icons/service_icon_2.svg'
              title='Branding'
              subtitle="We develop your brand's identity through logo design, brand strategy, visual systems, and storytelling to build strong emotional connections with your audience."
            />
            <Spacing lg='30' md='30' />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              href='/service/influencers'
              icon='/images/icons/service_icon_5.svg'
              title='Influencer Marketing'
              subtitle='We connect your brand with the right creators to deliver authentic collaborations that engage audiences and drive real business impact.'
            />
            <Spacing lg='30' md='30' />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              href='/service'
              icon='/images/icons/service_icon_6.svg'
              title='Production'
              subtitle="Comprehensive solutions including LED Screen, Drone Show, Staging light system and Sound system to bring your event's vision to life."
            />
            <Spacing lg='30' md='30' />
          </Div>
          <Div className="col-lg-4">
            <IconBox
              href='/service/#digital'
              icon='/images/icons/service_icon_1.svg'
              title='Digital Marketing'
              subtitle="Targeted campaigns featuring Digital Screen and Sponsored content, Programmatic Advertisement to maximize your reach and engagement."
            />
            <Spacing lg='30' md='30' />
          </Div>
        </Div>
        <Spacing lg='120' md='50' />
        <Div className="container">
          <Div className="row align-items-center">
            <Div className="col-xl-5 col-lg-6">
              <Div className="cs-radius_15 cs-shine_hover_1">
                <Image src={serviceImage2} alt="Our Services" className='cs-radius_15 w-100' placeholder="blur" />
              </Div>
              <Spacing lg='0' md='40' />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <h2 className="cs-font_50 cs-m0">Tailored Marketing Solutions Built For Impact</h2>
              <Spacing lg='50' md='30' />
              <p>
                At Media On Click, we believe in integrated marketing that delivers. Whether you’re looking for a standout digital presence, a bold brand identity, or engaging campaigns—our cross-functional team delivers excellence across every touchpoint.
              </p>
            </Div>
          </Div>
        </Div>
        <Spacing lg='150' md='80' />
      </Div>

      {/* Start Services Section */}
      <Spacing lg="145" md="80" />
      <Div id="digital" className="container">
        <SectionHeading
          title="Our Core Digital Services"
          subtitle="Services"
          variant="cs-style1 text-center"
        />
        <Spacing lg="70" md="45" />
        <ServiceList />
      </Div>
      {/* End Services Section */}

      <Spacing lg='125' md='55' />
      <TestimonialSlider />
      <Spacing lg='145' md='80' />
      <Div className="container cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <SectionHeading
                title='Frequently Asked Questions'
                subtitle='FAQ’s'
              />
              <Spacing lg='90' md='45' />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Accordion />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Cta
          title="Where creativity<br /> <i>sparks & brilliance </i> rises, <br />let’s make it happen together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  )
}
