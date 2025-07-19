'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from '../../../../public/images/grohe-island-edition.jpg'; // Replace with actual image

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading 
        title='Grohe Journey – Island Edition Dubai'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Grohe Journey'
      />
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Image src={imgUrl} alt="Grohe Case Study" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40'/>
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading 
              title='Grohe Journey – Island Edition Dubai' 
              subtitle='Brand Activation & PR Campaign' 
            >
              <Spacing lg='40' md='20'/>
              <p>
                Media On Click partnered with Grohe to curate and execute an exclusive island edition of the “Grohe Journey” in Dubai. 
                This unique experience merged luxury, sustainability, and immersive storytelling on a private island, bringing together influencers, designers, and media professionals.
              </p>
              <Spacing lg='10' md='10'/>
              <p>
                From tailored branding to logistics and influencer management, Media On Click handled the entire experience. 
                The result? A high-impact brand impression aligned with Grohe’s sustainability message, amplified through strategic PR, video production, and digital content.
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
                <p className='cs-m0'>Brand Activation</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Dubai, UAE</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Concept, Branding, Influencer Engagement, PR</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>March 2023</p>
                <Spacing lg='30' md='30'/>
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Grohe</p>
                <Spacing lg='30' md='30'/>
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='65' md='10'/>
          <Div className="cs-page_navigation cs-center">
            <Div>
              <Button btnLink='/portfolio/portfolio-details' btnText='Prev Project' variant='cs-type1'/>
            </Div>
            <Div>
              <Button btnLink='/portfolio/portfolio-details' btnText='Next Project'/>
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
  )
}
