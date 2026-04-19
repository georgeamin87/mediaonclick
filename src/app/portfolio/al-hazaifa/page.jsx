'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from '../../../../public/images/projects/hazaifa/3.webp';
import aboutImg2 from '../../../../public/images/projects/hazaifa/2.webp'
import aboutImg3 from '../../../../public/images/projects/hazaifa/1.webp'

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='Al Huzaifa Furniture'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Echoes & Innovation (Harper’s Bazaar Interiors x Al Huzaifa Furniture Panel Discussion)'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={imgUrl} alt="Al Huzaifa Furniture" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title=' Al Huzaifa Furniture - Panel Discussion Event Management'
              subtitle='Designing Dialogue and Inspiration'
            >
              <Spacing lg='40' md='20' />
              <p>
                The panel discussion brought together leading voices from the interior design industry to explore the evolution of design, innovation, and future trends. Organized by Harper’s Bazaar Interiors in collaboration with Al Huzaifa Furniture, the event highlighted the intersection of heritage, creativity, and technology in interior spaces. The discussion offered an engaging platform for industry professionals to exchange insights, while positioning Al Huzaifa as a thought leader in lifestyle-focused and bespoke interior solutions.
              </p>
              <Spacing lg='10' md='10' />
              <p>
                We designed the event to align the brand with its audience while creating a meaningful and memorable experience. By selecting expert panelists and curating topics that balanced inspiration with practical insights, we encouraged engaging discussions and audience interaction. The panel was amplified through editorial coverage, social media, and video highlights, reinforcing Al Huzaifa’s position as a leader in luxury, innovative, and personalized interior design.
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
                <p className='cs-m0'>Panel Discussion Event Management</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>October 2024</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Al Huzaifa Furniture</p>
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
