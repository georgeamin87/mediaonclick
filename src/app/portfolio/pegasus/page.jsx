'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import img1 from '../../../../public/images/projects/pegasus/pega1.webp';
import img2 from '../../../../public/images/projects/pegasus/pega2.webp';
import img3 from '../../../../public/images/projects/pegasus/pega3.webp';

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='Pegasus Strategic Communications'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Pegasus Liora Unveiling'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={img1} alt="Liora Unveiling by Jaiedco Launch Event" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='Liora Unveiling by Jaiedco'
              subtitle='Launching a New Standard of Living'
            >
              <Spacing lg='40' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Overview</h2>
              <Spacing lg='15' md='10' />
              <p>
                The unveiling of LIORA, a premium residential development by Jaiedco, marked a significant milestone in introducing a new benchmark for modern luxury living in Dubai. The launch was crafted to reflect the building’s identity—refined, contemporary, and aspirational.
              </p>
              <p>
                The event combined strategic public relations, targeted media coverage, and influencer engagement to generate strong market visibility and excitement. The presence of prominent personalities such as Youmi and Alkhalede5 amplified the event’s reach, creating buzz across digital platforms and attracting lifestyle-focused audiences.
              </p>
              <p className="cs-m0">
                The unveiling successfully positioned Liora not just as a residential building, but as a lifestyle destination blending architectural elegance with a compelling brand presence that resonated with both investors and end users.
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
                <p className='cs-m0'>Pegasus Strategic Communications</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Name:</h3>
                <p className='cs-m0'>Liora Unveiling by Jaiedco</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>PR, Media Coverage & Influencer Marketing</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Date:</h3>
                <p className='cs-m0'>January 2026</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='50' md='20' />
        <Div className="row">
          <SectionHeading
            title='From Concept to Engagement'
            subtitle='Our Approach'
          ></SectionHeading>
          <Spacing lg='40' md='20' />
          <Div className="col-lg-6">
            <p>
              We approached the LIORA unveiling with a clear objective: to create a launch that delivers both impact and memorability. Every element from the event atmosphere to audience engagement was carefully curated to align with the premium positioning of the development.
            </p>
            <p>
              We leveraged PR to build anticipation and secure meaningful media exposure, ensuring consistent storytelling throughout the campaign.
            </p>
          </Div>
          <Div className="col-lg-6">
            <p>
              At the same time, we activated influencer collaborations to extend reach, using real-time content and social storytelling to enhance visibility and engagement.
            </p>
            <p>
              By seamlessly integrating PR, media, and influencer strategies, we delivered a launch experience that elevated Liora’s market entry, creating a strong, lasting impression within Dubai’s competitive real estate landscape.
            </p>
          </Div>
        </Div>
        <Spacing lg='50' md='20' />
        <Div className="row">
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={img1}
              alt="Liora Unveiling Event Personalities"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={img2}
              alt="Liora Unveiling Event Atmosphere"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-12">
            <Image
              src={img3}
              alt="Liora Unveiling Event Media Panel"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/chattels-and-more' btnText='Prev Project' variant='cs-type1' />
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
