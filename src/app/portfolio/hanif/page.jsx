'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from '../../../../public/images/projects/hanif.jpg';

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading 
        title='Hanif PR & Publication'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Hanif'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Image src={imgUrl} alt="Hanif Case Study" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Hanif Media Relations' 
              subtitle='PR & Publication Services' 
            >
              <Spacing lg='40' md='20'/>
              <p>
                Media On Click managed comprehensive PR and publication services for Hanif, creating compelling narratives that resonated with target audiences. 
                Our strategic approach secured coverage in key industry publications and enhanced brand visibility.
              </p>
              <Spacing lg='10' md='10'/>
              <p>
                From press release writing to media outreach and interview coordination, we ensured Hanif's messaging was consistent and impactful. 
                The campaign resulted in increased brand recognition and positive media sentiment.
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
                <p className='cs-m0'>PR & Publication</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Dubai, UAE</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Press Releases, Media Placement</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>2023</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Hanif</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/grohe' btnText='Prev Project' variant='cs-type1'/>
          </Div>
          <Div>
            <Button btnLink='/portfolio/multibank-group-gala' btnText='Next Project'/>
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
