'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from '../../../../public/images/projects/snapinsta.jpg';

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading 
        title='MultiBank Group Gala'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - MultiBank Group Gala'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Image src={imgUrl} alt="MultiBank Group Gala" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='MultiBank Group Annual Gala' 
              subtitle='Corporate Event Management' 
            >
              <Spacing lg='40' md='20'/>
              <p>
                Media On Click orchestrated a sophisticated gala event for MultiBank Group, creating an unforgettable experience for executives and stakeholders. 
                Our team handled every aspect from venue selection to entertainment and guest management.
              </p>
              <Spacing lg='10' md='10'/>
              <p>
                The event featured elegant decor, gourmet dining, and high-profile entertainment, all aligned with MultiBank Group's corporate identity. 
                Our meticulous planning ensured flawless execution and positive feedback from all attendees.
              </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40'/>
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30'/>
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Category:</h3>
                <p className='cs-m0'>Event Management</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Dubai, UAE</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Full Event Production</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>2023</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>MultiBank Group</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/hanif' btnText='Prev Project' variant='cs-type1'/>
          </Div>
          <Div>
            <Button btnLink='/portfolio/design-middle-east-awards-2023' btnText='Next Project'/>
          </Div>
        </Div>
      </Div>
      <Spacing lg='145' md='80'/>
      <Cta 
        title='info@mediaonclick.me' 
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  );
}
