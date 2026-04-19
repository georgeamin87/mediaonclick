'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import VideoModal from "@/app/ui/VideoModal";
import imgUrl from '../../../../public/images/projects/dubai police/2.webp';
import aboutImg1 from '../../../../public/images/projects/dubai police/1.webp'
import aboutImg2 from '../../../../public/images/projects/dubai police/3.webp'

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='Dubai Police'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Dubai Police: Conference & Event Management'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={imgUrl} alt="Dubai Police Case Study" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='Dubai Police'
              subtitle='Shaping Strategic Dialogue Through Engagement'
            >
              <Spacing lg='40' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Overview </h2>
              <p>
                The Dubai Police Conference & Strategic Engagement Event brought together government entities, security leaders, technology partners, and industry experts to discuss the future of policing, security innovation, and cross-sector collaboration. The event served as a strategic platform for knowledge sharing, innovation showcase, and partnership development, reinforcing Dubai Police’s commitment to adopting advanced technologies and strengthening international cooperation in modern policing and public safety. The conference featured presentations, panel discussions, and networking sessions focused on innovation, AI, and future security solutions
              </p>
              <Spacing lg='10' md='10' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Our Approach: From Concept to Engagement</h2>
              <p>
                We focused on creating a professional and well-structured conference environment that encouraged knowledge exchange and stakeholder engagement. We combined formal presentations, panel discussions, and networking opportunities, supported by clear event branding, stage setup, and guest management to ensure a seamless and engaging experience for all attendees.
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
                <p className='cs-m0'> Downtown - Dubai</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Conference & Event Management</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>February 2018</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'> Dubai Police</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>
        <Div className="row">
          <Div className="col-lg-6">
            <Image
              src={aboutImg1}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-6">
            <Image
              src={aboutImg2}
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
            videoSrc="https://www.youtube.com/watch?v=z4Bemz7n0j0"
            bgUrl="/images/projects/videocover.webp"
          />
        </Div>
        {/* End Video Block Section */}
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
