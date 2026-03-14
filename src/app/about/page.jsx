'use client'
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from '../../../public/images/about_img_1.jpeg'
import aboutImg2 from '../../../public/images/about_img_2.jpeg'
import aboutImg3 from '../../../public/images/about_img_3.jpeg'
import aboutImg4 from '../../../public/images/team/team.jpg'
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
    videoUrl: '/video/dubai.mp4',
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
          <Div className="col-xl-5 col-lg-7">
            <SectionHeading
              title="Your trusted partner for business"
              subtitle="About MOC/Media On Click"
            >
              <Spacing lg="30" md="20" />
              <p className="cs-m0">
                At MOC/Media On Click, we deliver integrated marketing and communication solutions that combine strategic insight with creative impact. Our team is composed of highly experienced professionals from diverse backgrounds in media, digital, events, and branding. We apply our wide-ranging expertise to carefully assess each client’s needs, crafting customized strategies that align with their goals and target audience. Whether it’s digital marketing, influencer campaigns, PR, or full-scale event management, we ensure consistency, relevance, and measurable results across all channels. Backed by a strong track record and a deep understanding of the regional market, we pride ourselves on being hands-on, agile, and results-focused turning bold ideas into powerful brand experiences.
              </p>
              <Spacing lg="30" md="30" />
              <Div className="cs-separator cs-accent_bg"></Div>
              <Spacing lg="25" md="40" />
            </SectionHeading>
          </Div>
          <Div className="col-lg-5 offset-xl-2">
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
          subtitle="At MOC/Media On Click, we’ve successfully launched over 1000 campaigns, collaborated with more than 500 influencers, and produced events that have reached audiences across the UAE and beyond. Our team once pulled off a full-scale event in just 48 hours and yes, it trended on social media! From last-minute PR miracles to creating viral digital moments, we’re not just experts, we’re adrenaline-fueled creatives who love turning challenges into standout results."
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
              title="Highly experienced people with us"
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
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
