'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Sidebar from "@/app/ui/Sidebar.jsx/index.jsx";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import imgUrl from '../../../../public/images/post_5.jpeg';

export default function BlogDetailsPage() {
  return (
    <>
    {/* Start Page Heading Section */}
      <PageHeading
        title='Blog Single'
        bgSrc='/images/blog_details_hero_bg.jpeg'
        pageLinkText='blog-details'
      />
      {/* End Page Heading Section */}

      {/* Start Blog Details */}
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Div className="row">
          <Div className="col-lg-8">

            {/* Start Details Post Content */}
            <Div className="cs-post cs-style2">
              <Div className="cs-post_thumb cs-radius_15">
                <Image src={imgUrl} alt="Post" className="w-100 cs-radius_15" placeholder="blur" />
              </Div>
              <Div className="cs-post_info">
                <Div className="cs-post_meta cs-style1 cs-ternary_color cs-semi_bold cs-primary_font">
                  <span className="cs-posted_by">19 Jul 2025</span>
                  <Link href="/blog" className="cs-post_avatar">PR & Events</Link>
                </Div>
                <h2 className="cs-post_title">How MediaOnClick Elevates Brands Through Strategic PR & Events</h2>
                <p>MediaOnClick specializes in crafting bespoke PR and event management solutions that amplify brand visibility and engagement. Our integrated approach combines media relations, influencer partnerships, and experiential marketing to create memorable campaigns that resonate with target audiences across the UAE.</p>
                <blockquote className="cs-primary_font">
                  In today's competitive market, brands need more than just advertising - they need authentic connections. Our PR strategies build credibility while our events create tangible experiences that foster lasting relationships with customers and stakeholders.
                  <small>MediaOnClick Team</small>
                </blockquote>
                <p>From product launches to corporate anniversaries, our event management team handles every detail with precision. We combine creative vision with flawless execution to deliver events that achieve both strategic objectives and wow-factor moments. Recent projects include high-profile gala dinners, industry conferences, and influencer activations that generated significant media coverage and social buzz.</p>
                <Div className="row">
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_1.jpeg" alt="PR Event" className="cs-radius_15 w-100" />
                    <Spacing lg="25" md="25" />
                  </Div>
                  <Div className="col-md-6">
                    <img src="/images/blog_details_img_2.jpeg" alt="Media Coverage" className="cs-radius_15 w-100" />
                    <Spacing lg="25" md="25" />
                  </Div>
                </Div>
                <h3>Our Comprehensive PR Services</h3>
                <p>MediaOnClick offers end-to-end PR solutions including media outreach, press release distribution, crisis management, and spokesperson training. We have established relationships with key media outlets across the region, ensuring your brand story reaches the right audiences through the most credible channels.</p>
                <ul className="cs-list cs-style1 cs-mp0 cs-primary_font">
                  <li>Strategic media relations and press conferences</li>
                  <li>Thought leadership positioning</li>
                  <li>Reputation management</li>
                  <li>Social media amplification</li>
                  <li>Performance measurement and reporting</li>
                </ul>
                <h3>Event Management Excellence</h3>
                <p>Our event division specializes in creating immersive brand experiences. From venue selection and logistics to program development and guest management, we handle every aspect to ensure flawless execution. Recent successes include:</p>
                <ul className="cs-list cs-style1 cs-mp0 cs-primary_font">
                  <li>Product launch events with 300+ attendees</li>
                  <li>Corporate galas with celebrity appearances</li>
                  <li>Industry conferences with international speakers</li>
                  <li>Influencer activations generating 1M+ social impressions</li>
                  <li>Hybrid virtual/physical events with global reach</li>
                </ul>
                <p>Whether you need to increase brand awareness, launch a new product, or strengthen customer relationships, MediaOnClick has the expertise and regional knowledge to deliver exceptional PR and event solutions tailored to your business objectives.</p>
                <h3>Art is powerful and imaginary source</h3>
                <p>we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances.</p>
                <p>So, blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain amount of people.</p>
              </Div>
            </Div>
            {/* End Details Post Content */}

            {/* Start Comment Section */}
            <Spacing lg='30' md='30'/>
            <h2 className="cs-font_50 cs-m0">Leave A Reply</h2>
            <Spacing lg='5' md='5'/>
            <p className="cs-m0">Your email address will not be published. Required fields are marked *</p>
            <Spacing lg='40' md='30'/>
            <form className="row">
              <Div className="col-lg-6">
                <label>Full Name*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
                <Div data-lastpass-icon-root="true" style={{position: 'relative !important', height: '0px !important', width: '0px !important', float: 'left !important'}} /></Div>
              <Div className="col-lg-6">
                <label>Email*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Website*</label>
                <input type="text" className="cs-form_field" />
                <Div className="cs-height_20 cs-height_lg_20" />
              </Div>
              <Div className="col-lg-12">
                <label>Write Your Comment*</label>
                <textarea cols={30} rows={7} className="cs-form_field" />
                <Div className="cs-height_25 cs-height_lg_25" />
              </Div>
              <Div className="col-lg-12">
                <button className="cs-btn cs-style1">
                  <span>Send Message</span>
                  <Icon icon="bi:arrow-right" />               
                </button>
              </Div>
            </form>
            {/* End Comment Section */}
          </Div>
          <Div className="col-xl-3 col-lg-4 offset-xl-1">
            {/* Start Sidebar */}
            <Spacing lg='0' md='80'/>
            <Sidebar />
            {/* End Sidebar */}
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80'/>
      {/* Start Blog Details */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
      {/* End CTA Section */}
    </>
  )
}
