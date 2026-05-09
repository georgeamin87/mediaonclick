'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import VideoModal from "@/app/ui/VideoModal";
import imgUrl from '../../../../public/images/projects/grohe.png';
import aboutImg1 from '../../../../public/images/projects/grohe/UAE/1.png'
import aboutImg2 from '../../../../public/images/projects/grohe/UAE/2.webp'
import aboutImg3 from '../../../../public/images/projects/grohe/UAE/3.webp'

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='GROHE Showroom'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Grohe: Interior Design & Product Display Experience'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={imgUrl} alt="Grohe Case Study" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='GROHE Experiential Events, Retail Design & Brand Activation'
              subtitle='Delivering Immersive Brand Experiences Across Multiple Touchpoints'
            >
              <Spacing lg='40' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Overview </h2>
              <p>
                GROHE partnered with us across a series of integrated initiatives designed to strengthen its presence in the region through immersive brand experiences, retail environments, and consumer activations. Each project was developed to engage a distinct audience while reinforcing the brand’s core values of innovation, design, and premium quality
              </p>
              <Spacing lg='10' md='10' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Our Approach: From Concept to Reality</h2>
              <p>
                The GROHE Journey at Anantara World Islands Resort offered an exclusive, invitation-only experience for architects, interior designers, and industry professionals. Set in a unique island destination, the event combined industry engagement with lifestyle elements, featuring curated boat transfers, a gala dinner, live entertainment, and a drone show to create a memorable brand moment.
              </p>
            </SectionHeading>
          </Div>

          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40' />
            <p>
              Expanding into physical retail, the GROHE Showroom Experience redefined traditional showroom environments across multiple markets including Bahrain, Iraq, Jordan, Kuwait, Oman, Pakistan, Qatar, and the UAE. The concept transformed product displays into immersive, gallery-like spaces, allowing customers to interact with GROHE’s technology within refined, lifestyle-inspired settings.
            </p>
            <p>
              Complementing these initiatives, the GROHE Water Stories Activation brought the brand directly into communities through multi-location experiences across City Walk, Dubai Ladies Club, Mudon Community, and Jumeirah Park Pavilion. The activation focused on everyday water interactions in kitchens and bathrooms, enabling visitors to engage with products through realistic, hands-on demonstrations.
            </p>
            <p>
              Together, these initiatives created a cohesive brand ecosystem—spanning exclusive events, permanent retail spaces, and mobile activations—to enhance both professional engagement and consumer interaction.
            </p>
          </Div>
        </Div>
        <Div className="row">
          <Div className="col-lg-4">
            <Image
              src={aboutImg1}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4">
            <Image
              src={aboutImg2}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4">
            <Image
              src={aboutImg3}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>

        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='From Concept to Engagement'
              subtitle='Our Approach'
            >
              <Spacing lg='40' md='20' />
              <p>
                We approached GROHE’s projects as a connected brand journey, ensuring consistency in storytelling while tailoring each experience to its specific audience and environment.
              </p>
              <p>
                For the GROHE Journey, we designed a seamless, end-to-end guest experience, managing every detail from transportation logistics to on-site programming. We balanced professional networking with premium hospitality, integrating entertainment and a drone show to deliver a visually impactful and memorable event.
              </p>
              <p>
                For the showroom environments, we shifted from traditional retail layouts to curated experiential spaces. We treated each product as a design feature, creating aspirational vignettes that allow customers to visualize real-life applications while appreciating the craftsmanship and innovation behind the brand.
              </p>
              <p>
                For the Water Stories activation, we focused on interactivity and accessibility. We designed hands-on zones that transform everyday routines into engaging experiences, allowing visitors to directly connect with the functionality and design of GROHE products in familiar, lifestyle-driven settings.
              </p>
              <p>
                By integrating event experiences, retail design, and community activations, we enabled GROHE to engage its audience across multiple touchpoints, building awareness, deepening interaction, and reinforcing its position as a leader in water innovation.
              </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='180' md='40' />
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30' />
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>PR, Event Management & Digital Marketing</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>UAE & Regional Markets</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Experiential Events, Retail Design & Brand Activation</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>February 2023 (Grohe Journey) & November & October 2024 (Brand Activation) & 2023-2026 (Showroom Interior Designing)</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>GROHE</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>
        {/* Start Video Block Section */}
        <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            Watch our Projects Heighlights.
          </h2>
          <Spacing lg="70" md="70" />
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=ikZx2Joae60"
            bgUrl="/images/projects/grohe.png"
          />
        </Div>
        {/* End Video Block Section */}
        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/aluha' btnText='Prev Project' variant='cs-type1' />
          </Div>
          <Div>
            <Button btnLink='/portfolio/hanif' btnText='Next Project' />
          </Div>
        </Div>
      </Div>
      <Spacing lg='145' md='80' />
      <Cta
        title='info@mediaonclick.me'
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  );
}
