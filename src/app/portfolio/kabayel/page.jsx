'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from '../../../../public/images/projects/kabayel/kabayel 1.webp';
import aboutImg2 from '../../../../public/images/projects/kabayel/kabayel 3.webp'
import aboutImg3 from '../../../../public/images/projects/kabayel/kabayel 2.webp'

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='Al Kabayel Prime'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Al Kabayel Prime Opening Event'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={imgUrl} alt="Al Kabayel Prime Opening Event" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title=' Al Kabayel Prime Opening Event'
              subtitle='Driving Innovation and Strategic Collaboration'
            >
              <Spacing lg='40' md='20' />
              <p>
                The Al Kabayel Prime Opening Event marked the official launch of the brand’s new location in Dubai Investment Park, positioning the company as a key supplier in construction materials and home solutions. The event brought together partners, clients, and stakeholders to introduce the brand, showcase its product range, and establish strong market presence within a key commercial hub. The opening served as both a brand launch and a strategic networking platform to support future business growth and partnerships.
              </p>
              <Spacing lg='10' md='10' />
              <p>
                We approached the event as a strategic brand launch rather than a traditional opening, focusing on creating a professional and engaging experience for partners and customers. The event was designed to highlight the brand’s product offerings through a curated setup and guided customer journey, while also providing networking opportunities for stakeholders and business partners. From event branding and setup to guest experience and the opening ceremony, every element was planned to ensure a smooth launch, strong brand presentation, and meaningful engagement with attendees.
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
                <p className='cs-m0'>Dubai, UAE</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Grand Opening Event & Brand Launc</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>2025</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Al Kabayel Prime</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>


        <Div className="row">
          <Div className="col-lg-6">
            <Image
              src={aboutImg2}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-6">
            <Image
              src={aboutImg3}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>


        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/hanif' btnText='Prev Project' variant='cs-type1' />
          </Div>
          <Div>
            <Button btnLink='/portfolio/design-middle-east-awards-2023' btnText='Next Project' />
          </Div>
        </Div>
      </Div>

      <Spacing lg="150" md="80" />


      <Spacing lg='145' md='80' />
      <Cta
        title='info@mediaonclick.me'
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  );
}
