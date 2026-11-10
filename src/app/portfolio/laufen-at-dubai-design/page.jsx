'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import VideoModal from "@/app/ui/VideoModal";
import imgUrl from '../../../../public/images/projects/laufen/laufen-by-mediaonclick.webp';
import aboutImg2 from '../../../../public/images/projects/laufen/1.webp';
import aboutImg3 from '../../../../public/images/projects/laufen/2.webp';
import aboutImg4 from '../../../../public/images/projects/laufen/3.webp';
import aboutImg5 from '../../../../public/images/projects/laufen/4.webp';
import aboutImg6 from '../../../../public/images/projects/laufen/5.webp';
import aboutImg7 from '../../../../public/images/projects/laufen/6.webp';

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='Laufen at Dubai Design'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Laufen at Dubai Design'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={imgUrl} alt="Laufen at Dubai Design Exhibition Stand" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='Laufen at Dubai Design'
              subtitle='Exhibition Stand Production & Fabrication'
            >
              <Spacing lg='40' md='20' />
              <p className="cs-m0 font-weight-bold">
                Laufen at Dubai Design: Exhibition Stand Production & Fabrication
              </p>
              <Spacing lg='20' md='20' />
              <p className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>
                Project Overview
              </p>
              <Spacing lg='10' md='10' />
              <p>
                Laufen, the Swiss premium bathroom brand, took part in the Dubai Design exhibition to showcase its latest collections to architects, designers, developers and industry professionals. The brief was to turn a series of product stories into one cohesive, immersive stand: Vitreon Steel, Kartell by Laufen, and IN&OUT with Cleanet Auria and many more.
              </p>
              <Spacing lg='10' md='10' />
              <p>
                Our team was responsible for the full production and fabrication of the stand, translating the approved design into a precise, high-finish physical environment. The result is a gallery-style space in which each collection has its own mood, colour world and focal point, while the Laufen identity stays clear throughout, from the illuminated entrance feature to the carefully lit product displays.
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
                <p className='cs-m0'>Exhibition Stand Design Production & Fabrication</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Dubai, UAE (Dubai Design exhibition)</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>Production, fabrication, lighting, finishing and on-site installation of the exhibition stand</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Dated:</h3>
                <p className='cs-m0'>November 2026</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Client:</h3>
                <p className='cs-m0'>Laufen</p>
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
              alt="Laufen at Dubai Design Image 1"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-5">
            <Image
              src={aboutImg3}
              alt="Laufen at Dubai Design Image 2"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-5">
            <Image
              src={aboutImg4}
              alt="Laufen at Dubai Design Image 3"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Div className="row">
          <Div className="col-lg-4 col-sm-5">
            <Image
              src={aboutImg5}
              alt="Laufen at Dubai Design Image 1"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-5">
            <Image
              src={aboutImg6}
              alt="Laufen at Dubai Design Image 2"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-5">
            <Image
              src={aboutImg7}
              alt="Laufen at Dubai Design Image 3"
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
              A stand of this standard depends on accuracy, finish quality and tight coordination, so we treated the build as a controlled production process. We began by reviewing the approved design and developing detailed shop drawings, checking dimensions, structure, lighting positions, services and venue rules before any material was cut. Finishes were carefully matched to the brand palette, including matte navy and warm grey paint, brushed stainless-steel cladding, glossy lacquer, stone-effect surfaces and clear and tinted acrylic.
            </p>
            <p>
              Walls, plinths, shelves, vanity units and display structures were then fabricated in our workshop under controlled conditions, along with the backlit 3D lettering and logo elements, which were wired for even illumination. Every element was inspected for edge quality, finish, alignment and lighting performance before leaving the workshop. The stand was delivered in sections and assembled on site within the exhibition build-up schedule, where lighting was aimed and tested, mirrors, fixtures and sanitaryware were mounted, and final touches were completed in time for opening.
            </p>
          </Div>
          <Div className="col-lg-6">
            <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>From Concept to Engagement</h3>
            <Spacing lg='20' md='20' />
            <p>
              The stand was designed not only to look striking but to draw visitors in and keep them engaged. An illuminated Laufen entrance feature acts as a landmark and guides visitors naturally through each collection, with distinct colour palettes giving every range its own identity.
            </p>
            <p>
              Styled vanities, mirrors and accessories present the products as real bathroom spaces, while halo-lit mirrors, backlit lettering and focused lighting highlight the materials and draw the eye to key pieces. Clear wall graphics explain each concept without the need for a guide. The result strengthened Laufen’s premium positioning and supported meaningful conversations with visitors.
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
            videoSrc="https://www.youtube.com/watch?v=Z7x8JbhBPzQ"
            bgUrl="/images/projects/laufen/videocover.webp"
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

