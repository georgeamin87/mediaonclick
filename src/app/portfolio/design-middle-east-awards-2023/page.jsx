'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from '../../../../public/images/projects/middle.jpg';

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading 
        title='Design Middle East Awards 2023'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Design Middle East Awards'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Image src={imgUrl} alt="Design Middle East Awards" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Design Middle East Awards' 
              subtitle='Digital Marketing & Event Coverage' 
            >
              <Spacing lg='40' md='20'/>
              <p>
                Media On Click provided comprehensive digital marketing services for the prestigious Design Middle East Awards 2023. 
                Our campaign amplified the event's reach through strategic social media engagement and compelling content creation.
              </p>
              <Spacing lg='10' md='10'/>
              <p>
                We executed a multi-platform strategy that included live event coverage, nominee spotlights, and post-event highlights. 
                The campaign successfully increased audience engagement and maintained buzz throughout the awards season.
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
                <p className='cs-m0'>Digital Marketing</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Dubai, UAE</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Social Media, Content Creation</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>2023</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Design Middle East</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/multibank-group-gala' btnText='Prev Project' variant='cs-type1'/>
          </Div>
          <Div>
            <Button btnLink='/portfolio/al-hazaifa' btnText='Next Project'/>
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
