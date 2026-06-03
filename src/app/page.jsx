'use client';
import { useState } from 'react';
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
import VideoModalSlider from '@/app/ui/Slider/VideoModalSlider';
import Spacing from '@/app/ui/Spacing';
import VideoModal from '@/app/ui/VideoModal';
import Card from './ui/Card';
import { Icon } from '@iconify/react';

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
    href: '/portfolio/daluha',
    src: '/images/portfolio_11.png',
  },
  {
    title: 'Grohe',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/projects/grohe.png',
  },
  {
    title: 'Hanif Jewellery & Watches',
    subtitle: 'See Details',
    href: '/portfolio/hanif',
    src: '/images/projects/hanif.jpg',
  },
  {
    title: 'MultiBank Group',
    subtitle: 'See Details',
    href: '/portfolio/multibank-group-gala',
    src: '/images/projects/snapinsta.jpg',
  },
];

const videoSliderData = [
  { videoSrc: 'https://www.youtube.com/watch?v=KAYZQ8zHtj8' },
  { videoSrc: 'https://www.youtube.com/watch?v=5toKLAAeJeg' },
  { videoSrc: 'https://www.youtube.com/watch?v=pdSdIkjO7gc' },
  { videoSrc: 'https://www.youtube.com/watch?v=h_8hbapTP0U' },
  { videoSrc: 'https://www.youtube.com/watch?v=yBLDq8wEiK8' },
];

export default function Home() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    projectType: "",
    mobile: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // 'loading', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setFormData({
          fullName: "",
          email: "",
          projectType: "",
          mobile: "",
          message: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="<span >Media OnClick</span><br/><div class='cs-hero_title_sub' style='color: inherit; line-height: 1.2;'>PR, Media Buying, Events &<br/>Influencer Marketing Agency</div>"
        subtitle="We create influential brand experiences through refined PR strategies, targeted media buying, exceptional events, and curated influencer collaborations — designed to position your brand where it belongs."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.webp"
        bgImageUrlMob="/images/homebackmob1.webp"
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
      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      {/* End LogoList Section */}

      {/* Start GCC Region Section */}
      <Spacing lg="100" md="50" />
      <Div className="container text-center">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Covering The GCC Region & Clients Worldwide
        </h2>
        <Spacing lg="30" md="20" />
        <p className="cs-m0" style={{ fontSize: '18px', lineHeight: '1.6', maxWidth: '900px', margin: '0 auto' }}>
          We provide unparalleled PR and Media Buying services across the entire GCC region, including the <strong>United Arab Emirates, Saudi Arabia, Qatar, Kuwait, Bahrain, and Oman</strong>. Our global reach extends to clients all over the world, delivering impactful brand experiences tailored to your audience.
        </p>
      </Div>
      {/* End GCC Region Section */}

      {/* Start VideoModalSlider Section */}
      <Spacing lg="150" md="80" />
      <Div>
        <VideoModalSlider data={videoSliderData} />
      </Div>
      {/* End VideoModalSlider Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services Designed To Grow Your Brand"
                subtitle="Creative That Converts"
                btnText="Explore All Services"
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
            title="Portfolio To Explore"
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
          Watch Our Projects Heighlights.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=ikZx2Joae60"
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
            title="Our Tech Skills"
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
          title="Awesome Team <br/>Members"
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

      {/* End Blog Section */}

      <Spacing lg="200" md="70" />

      {/* Start PortfolioSlider Section */}

      <Div className="container">
        <h2 className="cs-font_50 cs-m0 cs-line_height_4 text-center">
          Check Out Our Latest Social Media Posts!
        </h2>
      </Div>
      <Spacing lg="90" md="70" />
      <PortfolioSlider2 />
      <Spacing lg="120" md="50" />
      {/* End PortfolioSlider Section */}

      {/* Start Contact Section */}
      <Spacing lg="0" md="70" />
      <Div className="container">
        <SectionHeading
          title="Getting touch"
          subtitle="Contact Us"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
      </Div>
      <Div className="cs-gradient_bg_1">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-5 col-lg-6">
              <Spacing lg="100" md="80" />
              <form onSubmit={handleSubmit} className="row">
                {status === "success" && (
                  <Div className="col-sm-12">
                    <div className="alert alert-success" style={{ backgroundColor: "#d4edda", color: "#155724", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
                      <strong>Success!</strong> Your message has been sent successfully. We will get back to you soon.
                    </div>
                  </Div>
                )}
                {status === "error" && (
                  <Div className="col-sm-12">
                    <div className="alert alert-danger" style={{ backgroundColor: "#f8d7da", color: "#721c24", padding: "15px", borderRadius: "5px", marginBottom: "20px" }}>
                      <strong>Error!</strong> {errorMessage}
                    </div>
                  </Div>
                )}
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Full Name*</label>
                  <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Email*</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Project Type*</label>
                  <input type="text" name="projectType" value={formData.projectType} onChange={handleChange} required className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-6">
                  <label className="cs-primary_color">Mobile*</label>
                  <input type="text" name="mobile" value={formData.mobile} onChange={handleChange} required className="cs-form_field" />
                  <Spacing lg="20" md="20" />
                </Div>
                <Div className="col-sm-12">
                  <label className="cs-primary_color">Message*</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    cols="30"
                    rows="7"
                    className="cs-form_field"
                  ></textarea>
                  <Spacing lg="25" md="25" />
                </Div>
                <Div className="col-sm-12">
                  <button type="submit" disabled={status === "loading"} className="cs-btn cs-style1">
                    <span>{status === "loading" ? "Sending..." : "Send Message"}</span>
                    <Icon icon="bi:arrow-right" />
                  </button>
                </Div>
              </form>
              <Spacing lg="100" md="60" />
            </Div>
            <Div className="col-lg-6 offset-xl-1">
              <Div
                className="cs-google_map cs-type1 cs-bg"
                data-src="assets/img/map_img_1.jpeg"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3269.905027209549!2d55.152871999999995!3d25.089578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6dea2dda75%3A0x1c332af55b2aae04!2sMedia%20OnClick%20(MOC)!5e1!3m2!1sen!2sae!4v1773482172112!5m2!1sen!2sae"
                  allowFullScreen
                  title="Google Map"
                />
              </Div>
              <Spacing lg="0" md="80" />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* Start Contact Section */}
      <Spacing lg="80" md="50" />
      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Where Creativity Meets Results.<br /> Let’s Build Something Big!"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
