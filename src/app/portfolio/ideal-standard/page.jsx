'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import img1 from '../../../../public/images/projects/ideal-standard/1.webp';
import img2 from '../../../../public/images/projects/ideal-standard/2.webp';
import img3 from '../../../../public/images/projects/ideal-standard/3.webp';

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='Ideal Standard'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Ideal Standard Showroom Interiors'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={img3} alt="The Ideal Standard Experience" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='The Ideal Standard Experience'
              subtitle='Redefining Modern Luxury'
            >
              <Spacing lg='40' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Overview</h2>
              <Spacing lg='15' md='10' />
              <p>
                For the Ideal Standard showroom, we were tasked with creating a space that feels both architecturally bold and deeply inviting. Known for their "Together for Better" philosophy, the brand required a retail environment that didn't just display products but told a story of professional-grade design. We transformed the floor plan into a sleek, high-contrast gallery where every ceramic piece and fixture is allowed to "breathe" within a minimalist, ultra-modern setting.
              </p>
              <Spacing lg='30' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Our Approach: From Concept to Reality</h2>
              <Spacing lg='15' md='10' />
              <p>
                We believe a showroom should be an effortless journey, so we treated every fixture as a standalone piece of art. By moving away from crowded shelving, we created minimalist, backlit pods and curated vignettes that allow customers to focus on the silhouette of each design. To break the typical retail grid, we introduced a striking white "S-curve" central island that naturally leads visitors through the space representing the Ideal Standard logo. Our goal was to blend the raw strength of the materials with a refined, gallery-like atmosphere, ensuring that every guest can easily visualize these premium pieces within their own home.
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
                <p className='cs-m0'>Ideal Standard</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Name:</h3>
                <p className='cs-m0'>The Ideal Standard Experience</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Retail Bathroom & Sanitary Showroom Interiors</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Locations:</h3>
                <p className='cs-m0'>Abu Dhabi – Al Ain & Deira</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='50' md='20' />
        <Div className="row">
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={img1}
              alt="Ideal Standard Vignette Display"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={img2}
              alt="Ideal Standard Modern Pods"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-12">
            <Image
              src={img3}
              alt="Ideal Standard S-Curve Central Island"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/gf-corys' btnText='Prev Project' variant='cs-type1' />
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
