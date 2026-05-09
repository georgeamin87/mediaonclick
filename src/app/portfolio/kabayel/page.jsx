'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import VideoModal from "@/app/ui/VideoModal";
import imgUrl from '../../../../public/images/projects/kabayel/kabayel 1.webp';
import aboutImg2 from '../../../../public/images/projects/kabayel/start.webp';
import aboutImg3 from '../../../../public/images/projects/kabayel/2.webp';
import aboutImg4 from '../../../../public/images/projects/kabayel/3.webp';
import aboutImg5 from '../../../../public/images/projects/kabayel/truck.webp'


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
              subtitle='Strengthening Brand Presence Through Strategic Activations'
            >
              <Spacing lg='40' md='20' />
              <p>
                Al Kabayel Prime partnered with us across multiple initiatives to establish and strengthen its presence in Dubai Investment Park. Each project was designed to serve a distinct objective—introducing the brand to the market and sustaining visibility through targeted campaigns.
              </p>
              <Spacing lg='10' md='10' />
              <p>
                The Grand Opening Event in September 2025 marked the official launch of the brand, bringing together key stakeholders, partners, and clients. The event served as a platform to showcase product offerings, build credibility, and create meaningful business connections within the industry.
              </p>
              <p>
                Following the launch, the Ramadan Roaming Truck Campaign in March 2026 extended the brand’s reach beyond its physical location. Through a mobile advertising approach, Al Kabayel Prime engaged wider audiences across Dubai with culturally relevant visuals and high-frequency exposure during a key seasonal period.
              </p>
              <Spacing lg='10' md='10' />
              <p>
                Together, these initiatives reflect a strategic approach to both brand introduction and sustained market visibility.
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
                <p className='cs-m0'>DIP, Dubai</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Event Launch & Marketing Campaigns</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>September 2025 (Grand Opening) – March 2026 (Roaming Truck)</p>
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
          <Div className="col-lg-3">
            <Image
              src={aboutImg2}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-3">
            <Image
              src={aboutImg3}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-3">
            <Image
              src={aboutImg4}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-3">
            <Image
              src={aboutImg5}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>

        <Div className="row">
          <SectionHeading
            title='From Concept to Engagement'
            subtitle='Our Approach'
          ></SectionHeading>
          <Div className="col-lg-6">
            <Spacing lg='40' md='20' />
            <p>
              We approached each initiative with a clear understanding of its role within the brand’s growth journey. For the opening event, we focused on delivering a structured and impactful launch experience that balanced strong brand presentation with meaningful stakeholder engagement. We curated the setup, branding, and guest journey to effectively showcase the company’s offerings while fostering valuable business connections.
            </p>
          </Div>
          <Div className="col-lg-5 offset-lg-1">
            <Spacing lg='40' md='20' />
            <p>For the Ramadan campaign, we shifted to a mobility-driven strategy, transforming a standard truck into a visually engaging brand asset. We developed a creative direction rooted in culturally relevant Ramadan elements and carefully planned routes across high-traffic areas to maximize visibility and repetition. We also ensured clear and accessible messaging to support both brand recall and direct customer engagement.

            </p>
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
            videoSrc="https://www.youtube.com/watch?v=b7MkunqSCzA"
            bgUrl="/images/projects/kabayel/videocover.webp"
          />
        </Div>
        {/* End Video Block Section */}

        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/hanif' btnText='Prev Project' variant='cs-type1' />
          </Div>
          <Div>
            <Button btnLink='/portfolio/design-middle-east-awards-2023' btnText='Next Project' />
          </Div>
        </Div>
      </Div >

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
