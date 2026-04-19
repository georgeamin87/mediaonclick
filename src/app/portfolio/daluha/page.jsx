'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from '../../../../public/images/projects/aluha.png';
import aboutImg2 from '../../../../public/images/projects/dahua/1.webp'
import aboutImg3 from '../../../../public/images/projects/dahua/2.webp'
import aboutImg1 from '../../../../public/images/projects/dahua/3.webp'

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='Dahua Technology'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Dahua EMPOWERING THE FUTURE – Dahua & SI Partners Strategic Conference'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={imgUrl} alt="Dahua Case Study" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='Dahua Technology'
              subtitle='EMPOWERING THE FUTURE – Dahua & SI Partners Strategic Conference | Driving Innovation and Strategic Collaboration'
            >
              <Spacing lg='40' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Overview </h2>
              <p>
                The EMPOWERING THE FUTURE – Dahua & SI Partners Strategic Conference in Fujairah brought together Dahua Technology and its System Integrator (SI) partners to align on innovation, growth strategies, and future collaboration.
                The event showcased Dahua’s latest AIoT and smart security solutions while providing a platform for industry dialogue, knowledge sharing, and partnership development within the regional ecosystem
              </p>
              <Spacing lg='10' md='10' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Our Approach: From Concept to Engagement</h2>
              <p>
                We designed the conference to strengthen collaboration between Dahua and its SI partners through strategic discussions and interactive engagement sessions.
                The event featured technology showcases highlighting Dahua’s innovations, along with focused workshops that encouraged co-innovation, joint planning, and alignment on future market strategies.
              </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40' />
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30' />
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Event Management</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Fujairah, UAE</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Strategic Conference & Partner Engagement</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>February 2024</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'> Dahua Technology Middle Eest FZE</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>
        <Div className="row">
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
          <Div className="col-lg-4">
            <Image
              src={aboutImg1}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>1
        </Div>
        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/hanif' btnText='Prev Project' variant='cs-type1' />
          </Div>
          <Div>
            <Button btnLink='/portfolio/grohe' btnText='Next Project' />
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
