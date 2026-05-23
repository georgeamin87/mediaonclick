'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import img5977 from '../../../../public/images/projects/chattels and more/IMG_5977.webp';
import img5978 from '../../../../public/images/projects/chattels and more/IMG_5978.webp';
import img5979 from '../../../../public/images/projects/chattels and more/IMG_5979.webp';
import img5981 from '../../../../public/images/projects/chattels and more/IMG_5981.webp';
import img5982 from '../../../../public/images/projects/chattels and more/IMG_5982.webp';

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='Chattels & More'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Chattels & More OOH Campaign'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={img5981} alt="Chattels & More OOH Campaign on Sheikh Zayed Road" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='Chattels & More'
              subtitle='Strengthening Brand Visibility Through Strategic OOH Advertising'
            >
              <Spacing lg='40' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Overview</h2>
              <Spacing lg='15' md='10' />
              <p>
                Chattels & More partnered with us to execute a high-impact OOH (Out-of-Home) advertising campaign designed to strengthen brand visibility and promote its latest furniture collection across Dubai.
              </p>
              <p>
                Positioned along Sheikh Zayed Road—one of Dubai’s busiest and most prominent highways—the campaign was strategically placed to capture the attention of thousands of daily commuters, residents, and visitors. Featuring clean visuals and a premium presentation, the campaign highlighted Chattels & More’s modern furniture collection while reinforcing the brand’s contemporary identity within the competitive home and lifestyle market.
              </p>
              <p>
                The large-format display and premium location enabled the brand to achieve strong exposure and sustained audience engagement in a high-traffic urban environment.
              </p>
              <p className="cs-m0 font-weight-bold">
                Together, the campaign reflected a focused approach toward increasing brand awareness, supporting product promotion, and strengthening market presence through impactful OOH media placement.
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
                <p className='cs-m0'>Chattels & More</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope:</h3>
                <p className='cs-m0'>OOH Campaign</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Sheikh Zayed Road, Dubai</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Date:</h3>
                <p className='cs-m0'>May 2026</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='50' md='20' />
        <Div className="row">
          <SectionHeading
            title='From Concept to Visibility'
            subtitle='Our Approach'
          ></SectionHeading>
          <Spacing lg='40' md='20' />
          <Div className="col-lg-6">
            <p>
              We approached the campaign with a strategy centered on premium positioning, visual clarity, and maximum audience exposure. Our team carefully selected a prime OOH placement along Sheikh Zayed Road to ensure continuous visibility among motorists and pedestrians throughout the day.
            </p>
            <p>
              We focused on delivering a clean and sophisticated visual presentation that aligned with Chattels & More’s modern brand image and product aesthetic.
            </p>
          </Div>
          <Div className="col-lg-6">
            <p>
              The campaign creative emphasized the featured furniture collection through minimal yet impactful design, allowing the product visuals and branding to stand out clearly within Dubai’s fast-paced city environment.
            </p>
            <p>
              To maximize effectiveness, we ensured the campaign messaging remained concise, visually balanced, and easily recognizable from long viewing distances, helping strengthen both brand recall and customer awareness.
            </p>
          </Div>
        </Div>
        <Spacing lg='50' md='20' />
        <Div className="row">
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={img5977}
              alt="Chattels & More Billboard Sheikh Zayed Road 1"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={img5978}
              alt="Chattels & More Billboard Sheikh Zayed Road 2"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-12">
            <Image
              src={img5979}
              alt="Chattels & More Billboard Sheikh Zayed Road 3"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Spacing lg='10' md='10' />
        <Div className="row">
          <Div className="col-lg-6 col-sm-6">
            <Image
              src={img5981}
              alt="Chattels & More Billboard Sheikh Zayed Road 4"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-6 col-sm-6">
            <Image
              src={img5982}
              alt="Chattels & More Billboard Sheikh Zayed Road 5"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Spacing lg='65' md='10' />
        <Div className="cs-page_navigation cs-center">
          <Div>
            <Button btnLink='/portfolio/ideal-standard' btnText='Prev Project' variant='cs-type1' />
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
