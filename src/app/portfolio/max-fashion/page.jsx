'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import VideoModal from "@/app/ui/VideoModal";
import imgUrl from '../../../../public/images/projects/max/max.webp';
import aboutImg2 from '../../../../public/images/projects/max/max-back-to-cool.jpg';
import aboutImg3 from '../../../../public/images/projects/max/max-branding-activation.jpg';
import aboutImg4 from '../../../../public/images/projects/max/max-at-vox-cinema.jpg';
import aboutImg5 from '../../../../public/images/projects/max/max-taxi.webp';
import aboutImg6 from '../../../../public/images/projects/max/max-taxi-back.webp';
import aboutImg7 from '../../../../public/images/projects/max/max-taxi-left.webp';


export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='MAX Fashion'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - MAX Fashion'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={imgUrl} alt="MAX Fashion Campaign" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='MAX Fashion'
              subtitle='Creating Brand Visibility Through Integrated Media, Influencer & Consumer Experiences'
            >
              <Spacing lg='40' md='20' />
              <p className="cs-m0 font-weight-bold">
                MAX Fashion – Integrated Brand Activation, Media & Experiential Campaign
              </p>
              <Spacing lg='20' md='20' />
              <p className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>
                Project Overview
              </p>
              <Spacing lg='10' md='10' />
              <p>
                MAX Fashion partnered with us to create a multi-channel campaign designed to increase brand visibility, engage consumers, and drive attention towards its branches across the UAE.
              </p>
              <Spacing lg='10' md='10' />
              <p>
                The campaign brought together influencer marketing, outdoor advertising, digital media, social media coverage, cinema collaboration, and event management to create a consistent and impactful brand presence across multiple consumer touchpoints.
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
                <p className='cs-m0'>PR, Event Management & Digital Marketing</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>UAE</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Influencer Marketing, Outdoor Advertising, Digital & Social Media, Event Management, Cinema Collaboration & Brand Activation</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>2026</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>MAX Fashion</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>

        <Spacing lg='80' md='40' />
        <Div className="row">
          <Div className="col-lg-4 col-sm-5">
            <Image
              src={aboutImg2}
              alt="MAX Fashion Campaign Image 1"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-5">
            <Image
              src={aboutImg3}
              alt="MAX Fashion Campaign Image 2"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-5">
            <Image
              src={aboutImg4}
              alt="MAX Fashion Campaign Image 3"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Div className="row">
          <Div className="col-lg-4 col-sm-5">
            <Image
              src={aboutImg5}
              alt="MAX Fashion Campaign Image 1"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-5">
            <Image
              src={aboutImg6}
              alt="MAX Fashion Campaign Image 2"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-5">
            <Image
              src={aboutImg7}
              alt="MAX Fashion Campaign Image 3"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>

        <Spacing lg='50' md='20' />
        <Div className="row">
          <SectionHeading
            title='From Concept to Reality'
            subtitle='Our Approach'
          ></SectionHeading>
          <Spacing lg='40' md='20' />
          <Div className="col-lg-6">
            <p>
              Our approach focused on connecting MAX Fashion with consumers both online and offline, using a combination of targeted media and engaging brand experiences.
            </p>
            <p>
              The influencer campaign brought selected content creators directly to MAX Fashion branches, where they created engaging social media content and showcased the brand experience to their audiences. This helped generate awareness while directing attention towards the physical stores.
            </p>
            <p>
              To strengthen outdoor visibility, we executed a full-wrap taxi advertising campaign across Sharjah, turning everyday transportation into a high-frequency moving billboard for MAX Fashion.
            </p>
            <p>
              In Abu Dhabi, the campaign was further amplified through advertising on the Al Mariah LED screen, providing high-impact digital outdoor exposure in a prominent location.
            </p>
            <p>
              Alongside the outdoor and influencer activity, we supported MAX Fashion through social media and digital news coverage, extending the campaign reach and creating additional online visibility.
            </p>
          </Div>
          <Div className="col-lg-6">
            <p>
              The campaign was also supported through a VOX Cinemas collaboration, creating another touchpoint to connect MAX Fashion with consumers through cinema audiences and entertainment environments.
            </p>
            <p>
              Our team additionally managed the event management and on-ground coordination, ensuring that the different campaign elements were delivered smoothly and consistently with the brand's objectives.
            </p>
            <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>From Concept to Engagement</h3>
            <Spacing lg='20' md='20' />
            <p>
              Rather than relying on a single communication channel, we created a connected campaign that allowed MAX Fashion to engage consumers across different environments.
            </p>
            <p>
              From influencer content inside MAX Fashion branches to high-visibility taxi wraps in Sharjah, LED advertising in Abu Dhabi, digital news and social media exposure, and cinema collaboration, each element contributed to a wider brand visibility strategy.
            </p>
            <p>
              By combining physical, digital, and experiential touchpoints, the campaign helped MAX Fashion maintain a strong and consistent presence across key markets in the UAE.
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
            videoSrc="https://www.youtube.com/watch?v=E5x6U_P5WQE"
            bgUrl="/images/projects/max/videocover.webp"
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
