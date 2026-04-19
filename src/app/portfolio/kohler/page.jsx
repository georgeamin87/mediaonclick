'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import VideoModal from "@/app/ui/VideoModal";
import imgUrl from '../../../../public/images/projects/kohler.webp';
import aboutImg1 from '../../../../public/images/projects/kohlerh/1.jpg'
import aboutImg2 from '../../../../public/images/projects/kohlerh/2.webp'
import aboutImg3 from '../../../../public/images/projects/kohlerh/3.webp'

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='Kohler Grand Opening Event'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Kohler X Al Hashimiya Opening Event'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={imgUrl} alt="Grohe Case Study" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='Kohler X Al Hashimiya Opening Event'
              subtitle='A Grand Unveiling of Design Experiences'
            >
              <Spacing lg='40' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Overview </h2>
              <p>
                The Kohler x Al Hashimiya Opening Event celebrated the launch of another branch, bringing together executives, key stakeholders, and interior designers. The event was designed as an exclusive meet-and-greet, allowing guests to connect directly with the leadership team and experience the new space. Every element of the opening emphasized the brand’s commitment to excellence, collaboration, and creating meaningful engagement with its people.
              </p>
              <Spacing lg='10' md='10' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Our Approach: From Conversation to Immersive Experience</h2>
              <p>
                We crafted the event to ensure a seamless flow, balancing formality with approachability to create an intimate and engaging environment. The layout and presentation of the new branch encouraged natural interaction among executives, employees, and guests. By focusing on thoughtful spatial design, attention to detail, and personalized engagement, we transformed the grand opening into a memorable experience that celebrated the brand, fostered connections, and set the tone for the branch’s operations.
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
                <p className='cs-m0'>Event Management & Branding</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Al Wasl, Dubai</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>  Grand Opening Event & Brand Launch</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>November 2025</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Kohler</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>
        <Div className="row">
          <Div className="col-lg-4">
            <Image
              src={aboutImg1}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
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
        </Div>


        {/* Start Video Block Section */}
        <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            Watch our Projects Heighlights.
          </h2>
          <Spacing lg="70" md="70" />
          <VideoModal
            videoSrc="https://www.youtube.com/watch?v=yBLDq8wEiK8"
            bgUrl="/images/projects/kohler.webp"
          />
        </Div>
        {/* End Video Block Section */}
        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/aluha' btnText='Prev Project' variant='cs-type1' />
          </Div>
          <Div>
            <Button btnLink='/portfolio/hanif' btnText='Next Project' />
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
