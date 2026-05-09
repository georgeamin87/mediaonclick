'use client'
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from '../../../public/images/about_img_1.webp'
import aboutImg2 from '../../../public/images/about_img_21.webp'
import aboutImg3 from '../../../public/images/about_img_3.jpeg'
import aboutImg4 from '../../../public/images/team/team.webp'
import Hero13 from "@/app/ui/Hero/Hero13";


const heroSocialLinks = [
  {
    name: 'Instagram',
    links: 'https://www.instagram.com/mediaonclick.me/',
  },
  {
    name: 'youtube',
    links: 'https://www.youtube.com/@mediaonclick',
  },
];

const showcaseData = [
  {
    introTitle: 'Get to Know MediaOnClick',
    title: 'About Us',
    videoUrl: '/video/moc.mp4',
    href: '/case-study/case-study-details',
  },
];


const funfaceData = [
  {
    title: 'Global Happy Clients',
    factNumber: '100',
  },
  {
    title: 'Years of Experience',
    factNumber: '10',
  },
  {
    title: 'Projects Completed',
    factNumber: '1000',
  },
  {
    title: 'Dedicated Team',
    factNumber: '18',
  },
];

export default function AboutPage() {
  return (
    <>
      <Hero13
        heroSocialLinks={heroSocialLinks}
        socialLinksHeading="Follow Us"
        showcaseData={showcaseData}
      />
      {/* Start Page Heading Section */}
      {/* End Page Heading Section */}

      {/* Start About Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-6 col-lg-7">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle="About MOC/Media On Click"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At Media OnClick (MOC), we don’t just deliver marketing—we craft experiences that connect,
                captivate, and convert. Our team of seasoned professionals brings together expertise
                across media, digital, events, branding, and interior design, allowing us to transform
                bold ideas into immersive brand moments. Every strategy is tailored to your goals and
                audience, blending creativity with insight to make campaigns that resonate. From
                influencer activations and viral digital campaigns to full-scale event productions
                and showroom transformations across the Middle East, we bring agility, precision,
                and impact to every project—turning challenges into standout results and brands
                into unforgettable experiences.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-1">
            <Image
              src={aboutImg}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-7">
            <Image
              src={aboutImg2}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-5">
            <Image
              src={aboutImg3}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
      </Div>
      <Spacing lg="75" md="55" />
      {/* End About Section */}

      {/* Start Fun Fact Section */}
      <Div className="container">
        <FunFact
          title="Our fun fact"
          subtitle="At <b>Media OnClick</b>, we don’t just run campaigns, we create digital magic. Over <b>1,000 campaigns launched, 500+ influencer collaborations, and events that have captured audiences across the UAE and beyond.</b><br></br>Our team once pulled off a full-scale event in just 48 hours and yes, it went viral! From last-minute PR miracles to jaw-dropping digital moments, we’re not just marketing experts; we’re adrenaline-charged creatives who turn challenges into standout results."
          data={funfaceData}
        />
      </Div>
      {/* End Fun Fact Section */}

      {/* Start Why Choose Section */}
      <Spacing lg="100" md="80" />
      <Div className="container">
        <Div className="row">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-image_layer cs-style1">
              <Div className="cs-image_layer_in">
                <Image
                  src={aboutImg4}
                  alt="About"
                  className="w-100 cs-radius_15"
                />
              </Div>
            </Div>
            <Spacing lg="0" md="40" />
          </Div>
          <Div className="col-xl-5 offset-xl-1 col-lg-6">
            <SectionHeading
              title="Highly Experienced People With Us"
              subtitle="Why Choose Us"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0"><strong>1. Media Planning & Buying</strong><br />
                Data-driven media strategies and ad placements across TV, radio, print, digital, and outdoor campaign.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0"><strong>2. Public Relations</strong><br />
                Strategic media relations and storytelling that build brand visibility, credibility, and trust.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0"><strong>3. Events & Production</strong><br />
                Creative planning, execution, and high-quality production of corporate events, launches, and brand activations that bring your brand vision to life.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0"><strong>4. Consultancy</strong><br />
                Expert marketing and branding guidance to refine strategy and drive sustainable growth.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0"><strong>5. Influencer Marketing</strong><br />
                Authentic collaborations with influencers to amplify brand awareness and engagement.
              </p>
              <Spacing lg="15" md="15" />
              <p className="cs-m0"><strong>6. Interior Design</strong><br />
                Thoughtfully designed spaces that combine aesthetics, functionality, and precision.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="0" />
            </SectionHeading>
          </Div>
        </Div>
      </Div>
      {/* End Why Choose Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      {/* End Team Section */}

      {/* Start CTA Section */}
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Cta
          title="Where creativity<br /> <i>sparks & brilliance </i> rises, <br />let’s make it happen together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
