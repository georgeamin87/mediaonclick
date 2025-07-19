'use client';
import Cta from '@/app/ui/Cta';
import Div from '@/app/ui/Div';
import FunFact from '@/app/ui/FunFact';
import Hero from '@/app/ui/Hero';
import LogoList from '@/app/ui/LogoList';
import MovingText from '@/app/ui/MovingText';
import SectionHeading from '@/app/ui/SectionHeading';
import PortfolioSlider from '@/app/ui/Slider/PortfolioSlider';
import PostSlider from '@/app/ui/Slider/PostSlider';
import TeamSlider from '@/app/ui/Slider/TeamSlider';
import TestimonialSlider from '@/app/ui/Slider/TestimonialSlider';
import TimelineSlider from '@/app/ui/Slider/TimelineSlider';
import PortfolioSlider2 from "@/app/ui/Slider/PortfolioSlider2";
import Spacing from '@/app/ui/Spacing';
import VideoModal from '@/app/ui/VideoModal';
import Card from './ui/Card';

// Hero Social Links
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
// FunFact Data
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

const funfaceData2 = [
  {
    title: 'Web Development',
    factNumber: '90%',
  },
  {
    title: 'Web Design',
    factNumber: '95%',
  },
  {
    title: 'Ads Manager',
    factNumber: '92%',
  },
  {
    title: 'Publications & Link building',
    factNumber: '85%',
  },
  {
    title: 'Content Writing',
    factNumber: '100%',
  },
  {
    title: 'SEO onsite & Offsite',
    factNumber: '70%',
  },
];
// Portfolio Data
const portfolioData = [
  {
    title: 'DAHUA Technology',
    subtitle: 'See Details',
    href: '/portfolio/aluha',
    src: '/images/portfolio_11.png',
  },
  {
    title: 'Grohe',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/projects/grohe.png',
  },
  {
    title: 'Hanif',
    subtitle: 'See Details',
    href: '/portfolio/hanif',
    src: '/images/projects/hanif.jpg',
  },
  {
    title: 'MultiBank',
    subtitle: 'See Details',
    href: '/portfolio/multibank-group-gala',
    src: '/images/projects/snapinsta.jpg',
  },
];

export default function Home() {
  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Creativity In <br/>Our Blood Line"
        subtitle="WE ARE A 360° BOUTIQUE AGENCY BASED IN DUBAI. With over 10 years of experience, MOC has established itself as a leading PR and Events Company."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="MOC JOURNEY"
          subtitle="With over 10 years of experience, MOC has established itself as one of the leading PR and Events Company. Our journey has been marked by numerous milestones and achievements that highlight our commitment to excellence and innovation."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="PUBLIC RELATIONS"
                    link="/service/pr"
                    src="/images/services/pr.jpg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="EVENT MANAGEMENT"
                    link="/service/event-management"
                    src="/images/services/event.jpg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="INFLUENCER MARKETING"
                    link="/service/influencers"
                    src="/images/services/influence.jpg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="MEDIA PLANNING & BUYING"
                    link="/service/media-plaining-buying"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}

      {/* Start Awards Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="HEADLINE-WORTHY PR"
                subtitle="GET YOUR BRAND A"
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Awards Section */}

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Watch our Projects Heighlights.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=7QNE8TCadiM"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      <Spacing lg="120" md="50" />

      {/* skill  Section */}
      <section
        className="cs-bg"
        style={{ backgroundImage: 'url(/images/funfact_bg.jpeg)' }}
      >
        <div className="container">
          <FunFact
            variant="cs-type2"
            title="Our tech skills"
            subtitle="Stay ahead in the digital landscape with our innovative marketing strategies. We engage your audience, boost your online presence, and drive growth through targeted campaigns that deliver measurable results."
            data={funfaceData2}
          />
        </div>
      </section>
      {/* Start Portfolio Section */}

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
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="90" md="70" />
      {/* End LogoList Section */}

      {/* Start PortfolioSlider Section */}

      <Div className="container">
        <h2 className="cs-font_50 cs-m0 cs-line_height_4 text-center">
          Check out our latest social media posts!
        </h2>
      </Div>
      <Spacing lg="90" md="70" />
      <PortfolioSlider2 />
            <Spacing lg="120" md="50" />
      {/* End PortfolioSlider Section */}

      {/* Start CTA Section */}
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
