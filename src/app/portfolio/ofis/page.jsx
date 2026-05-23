'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import img1 from '../../../../public/images/projects/ofis/Ofis1-NEW.webp';
import img2 from '../../../../public/images/projects/ofis/Ofis2-NEW.webp';
import img3 from '../../../../public/images/projects/ofis/Ofis3-NEW.webp';

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='OFIS Product Launch'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Capisco by HÅG Product Launch'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={img1} alt="Capisco by HÅG Product Launch Event" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='Capisco by HÅG Product Launch'
              subtitle='Creating Dynamic Product Launch Experiences Through Design-Led Engagement'
            >
              <Spacing lg='40' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Overview</h2>
              <Spacing lg='15' md='10' />
              <p>
                The Capisco by HÅG launch was designed as a high-impact experiential activation that introduced the product through movement, interaction, and live engagement. The event blended performance, staging, and product storytelling to highlight the chair’s flexibility, ergonomics, and modern design.
              </p>
              <p className="cs-m0">
                Rather than a traditional showcase, the activation created an energetic environment where the product became part of a live experience, reinforcing its innovative and human-centric design.
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
                <p className='cs-m0'>OFIS</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Name:</h3>
                <p className='cs-m0'>Capisco by HÅG Product Launch</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Conference & Event Management / Product Showcase</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Dubai</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Date:</h3>
                <p className='cs-m0'>October 2025</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='50' md='20' />
        <Div className="row">
          <SectionHeading
            title='From Brand Presence to Hands-On Experience'
            subtitle='Our Approach'
          ></SectionHeading>
          <Spacing lg='40' md='20' />
          <Div className="col-lg-6">
            <p>
              We transformed the launch into an immersive brand moment by integrating choreography, lighting, and spatial design to demonstrate the product in motion. The setup focused on showcasing the chair’s unique functionality through real use, allowing the audience to understand its versatility in a visually engaging way.
            </p>
          </Div>
          <Div className="col-lg-6">
            <p>
              The environment combined clean, modern staging with strong visual identity, ensuring the product remained the focal point throughout the experience.
            </p>
            <p>
              By merging performance with product demonstration, the activation delivered a memorable and impactful launch that connected design, function, and audience engagement.
            </p>
          </Div>
        </Div>
        <Spacing lg='50' md='20' />
        <Div className="row">
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={img1}
              alt="Capisco by HÅG Dynamic Staging"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={img2}
              alt="Capisco by HÅG Live Performance Demonstration"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-12">
            <Image
              src={img3}
              alt="Capisco by HÅG Ergonomics Launch Showcase"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/pegasus' btnText='Prev Project' variant='cs-type1' />
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
