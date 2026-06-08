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
import aboutImg2 from '../../../../public/images/projects/kabayel/1.webp';
import aboutImg3 from '../../../../public/images/projects/kabayel/2.webp';
import aboutImg4 from '../../../../public/images/projects/kabayel/truck.webp';
import aboutImg5 from '../../../../public/images/projects/kabayel/3.webp';
import aboutImg6 from '../../../../public/images/projects/kabayel/taxi.webp';
import aboutImg7 from '../../../../public/images/projects/kabayel/4.webp';

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='Al Kabayel Prime'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Al Kabayel Prime'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={imgUrl} alt="Al Kabayel Prime Opening Event" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='Al Kabayel Prime'
              subtitle='Strengthening Brand Presence Through Strategic Activations'
            >
              <Spacing lg='40' md='20' />
              <p>
                Al Kabayel Prime partnered with us across multiple initiatives to establish and strengthen its presence in Dubai - UAE. Each project was designed to serve a distinct objective introducing the brand to the market and sustaining visibility through targeted campaigns.
              </p>
              <Spacing lg='10' md='10' />
              <p>
                The Grand Opening Event in September 2025 marked the official launch of the brand, bringing together key stakeholders, partners, and clients. The event served as a platform to showcase product offerings, build credibility, and create meaningful business connections within the industry.
              </p>
              <Spacing lg='10' md='10' />
              <p>
                In addition to the September 2025 launch, Al Kabayel Prime held another major grand opening in May 2026 for its biggest branch located in Cityland Mall, Dubai. Spanning over 100,000 sq. ft., the flagship branch represented a significant milestone for the brand, reinforcing its expansion and presence within the UAE retail market. The launch attracted customers, business partners, and stakeholders while highlighting the scale of the store and the overall customer experience.
              </p>
              <Spacing lg='10' md='10' />
              <p>
                Following the launch activities, the Ramadan Roaming Truck Campaign in March 2026 extended the brand’s reach beyond its physical location. Through a mobile advertising approach, Al Kabayel Prime engaged wider audiences across Dubai with culturally relevant visuals and high-frequency exposure during a key seasonal period.
              </p>
              <Spacing lg='10' md='10' />
              <p>
                To further strengthen market visibility, Al Kabayel Prime also launched a strategic billboard advertising campaign across key high-traffic areas in Dubai. The campaign enhanced brand awareness and ensured strong visibility among daily commuters and residents, reinforcing the brand’s presence throughout the city.
              </p>
              <Spacing lg='10' md='10' />
              <p>
                The Taxi Campaign further amplified market reach by transforming Dubai taxis into mobile advertising platforms carrying the Al Kabayel Prime branding across major locations in Dubai. This mobility-driven strategy created continuous exposure and strengthened overall brand recall among diverse audiences.
              </p>
              <Spacing lg='15' md='15' />
              <p className="cs-m0 font-weight-bold">
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
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Al Kabayel Prime</p>
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
                <p className='cs-m0'>Sept 2025 – March 2026</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>

        <Spacing lg='80' md='40' />
        <Div className="row">
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={aboutImg2}
              alt="Al Kabayel Prime Campaign Image 1"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={aboutImg3}
              alt="Al Kabayel Prime Campaign Image 2"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={aboutImg4}
              alt="Al Kabayel Prime Campaign Image 3"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={aboutImg5}
              alt="Al Kabayel Prime Campaign Image 4"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={aboutImg6}
              alt="Al Kabayel Prime Campaign Image 4"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={aboutImg7}
              alt="Al Kabayel Prime Campaign Image 4"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
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
              We approached each initiative with a clear understanding of its role within the brand’s growth journey.
            </p>
            <p>
              For the September 2025 opening event, we focused on delivering a structured and impactful launch experience that balanced strong brand presentation with meaningful stakeholder engagement. We curated the setup, branding, and guest journey to effectively showcase the company’s offerings while fostering valuable business connections.
            </p>
            <p>
              For the Ramadan campaign, we shifted to a mobility-driven strategy, transforming a standard truck into a visually engaging brand asset. We developed a creative direction rooted in culturally relevant Ramadan elements and carefully planned routes across high-traffic areas to maximize visibility and repetition. We also ensured clear and accessible messaging to support both brand recall and direct customer engagement.
            </p>
          </Div>
          <Div className="col-lg-6">
            <p>
              For the May 2026 Cityland Mall grand opening, our approach centered on creating a premium large-scale launch experience that reflected the significance of Al Kabayel Prime’s flagship 100,000 sq. ft. branch. We managed the event environment, branding execution, and customer engagement touchpoints to ensure a memorable and high-impact opening experience.
            </p>
            <p>
              For the billboard and taxi campaigns, we developed a visibility-driven strategy focused on maximizing audience reach and repetition across Dubai. Billboard placements were strategically selected in high-traffic locations, while the taxi branding campaign ensured continuous mobile exposure throughout the city.
            </p>
            <p>
              For the Taxi Campaign, we extended the brand’s reach through continuous citywide mobility. By turning taxis into moving advertisements, the campaign maintained consistent exposure across residential, commercial, and high-traffic areas, helping reinforce brand awareness and audience recall.
            </p>
          </Div>
        </Div>

        {/* Start Video Block Section */}
        <Spacing lg="130" md="70" />
        <Div className="container">
          <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
            Watch our Project Highlights.
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
      <Cta
        title='info@mediaonclick.me'
        bgSrc='/images/cta_bg_2.jpeg'
        variant='rounded-0'
      />
    </>
  );
}
