'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import VideoModal from "@/app/ui/VideoModal";
import imgUrl from '../../../../public/images/projects/walid/Walid1.webp';
import aboutImg2 from '../../../../public/images/projects/walid/Walid2.webp'
import aboutImg3 from '../../../../public/images/projects/walid/Walid3.webp'
import aboutImg1 from '../../../../public/images/projects/walid/Walid1.webp'

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='Walid Atallah'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Walid Atallah × Al Huzaifa Furniture'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={imgUrl} alt="Dahua Case Study" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='Walid Atallah Fashion Show'
              subtitle='Bringing Fashion and Interior Design Together'
            >
              <Spacing lg='40' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Overview </h2>
              <p>
                A unique collaboration between renowned fashion designer Walid Atallah and Al Huzaifa Furniture brought together the worlds of haute couture and interior design in an exclusive runway event held in Dubai.
                Hosted within the Al Huzaifa showroom, the event featured a curated wedding gown fashion show, showcasing a collection of elegant bridal and couture designs presented in a sophisticated, lifestyle-driven setting. The concept merged fashion with furniture, allowing guests to experience both design disciplines in one cohesive environment.
                The event welcomed VIP guests, media, influencers, and designers, creating a high-profile gathering that celebrated creativity, craftsmanship, and collaboration across industries.
              </p>
              <Spacing lg='10' md='10' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Our Approach: Delivering a Seamless Gala Experience</h2>
              <p>
                We managed the event with a focus on delivering a seamless and engaging runway experience within a non-traditional venue setting.
                We coordinated guest invitations and arrivals, ensuring a smooth experience for VIP attendees, influencers, and media representatives.
                We structured the event flow around the runway presentation, allowing guests to fully engage with the fashion show while also exploring the showroom environment.
                We ensured clear coordination between segments from guest reception to the main show maintaining timing and continuity throughout the evening.
                We also created an environment that encouraged interaction, enabling guests to experience the wedding couture collection alongside the furniture displays in a natural and immersive way.
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
                <p className='cs-m0'>Al Wasl, Dubai</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Fashion Show Event Management & Guest Experience</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>November 2019</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'> Walid Atallah × Al Huzaifa Furniture</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>
        <Div className="row">
          <Div className="col-lg-4">
            <Image
              src={aboutImg2}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4">
            <Image
              src={aboutImg3}
              alt="About"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4">
            <Image
              src={aboutImg1}
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
            videoSrc="https://www.youtube.com/watch?v=9ajiZx1r3kU"
            bgUrl="/images/projects/walid/walid1.webp"
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
