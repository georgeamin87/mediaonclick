'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import recImg from '../../../../public/images/projects/gfcorys/rec.webp';
import displayImg from '../../../../public/images/projects/gfcorys/display.webp';
import receptionImg from '../../../../public/images/projects/gfcorys/reception.webp';

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='GF Corys KSA'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - GF Corys KSA Office & Product Display'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={receptionImg} alt="GF Corys KSA Office and Product Display Interiors" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='GF Corys KSA'
              subtitle='Designing for Flow and Connection'
            >
              <Spacing lg='40' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Overview</h2>
              <Spacing lg='15' md='10' />
              <p>
                For the GF Corys office and product display interiors, the design moved away from the traditional cubicle layout to create a more open, functional, and collaborative workspace. The office was planned to reflect the company’s professionalism and engineering expertise, while the integrated product display area allows clients to experience their solutions within the workspace itself. The result is a clean, modern environment that supports productivity, teamwork, and client engagement.
              </p>
              <Spacing lg='30' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Our Approach: From Concept to Reality</h2>
              <Spacing lg='15' md='10' />
              <p>
                We moved beyond traditional aesthetics to focus on "Spatial Connectivity." By analysing how teams interact, we curated a balance between open-plan transparency and high-spec private zones. Our goal was to reflect GF Corys’ reputation for precision through clean lines and industrial-chic finishes, ensuring the final design felt both technically advanced and human-cantered.
              </p>
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='60' md='40' />
            <h2 className='cs-font_30 cs-font_26_sm cs-m0'>Project Info -</h2>
            <Spacing lg='50' md='30' />
            <Div className="row">
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>GF Corys Piping System</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Name:</h3>
                <p className='cs-m0'>GF Corys KSA – Office & Product Display Interiors</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Creatives & Digital Innovation (Interior Design)</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>KSA</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='50' md='20' />
        <Div className="row">
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={recImg}
              alt="GF Corys Reception Area"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={displayImg}
              alt="GF Corys Product Display Area"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-12">
            <Image
              src={receptionImg}
              alt="GF Corys Workspace Office"
              placeholder="blur"
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
