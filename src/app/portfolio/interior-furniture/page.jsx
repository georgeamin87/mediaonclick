'use client'
import Button from "@/app/ui/Button";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import introImg from '../../../../public/images/projects/interior-furniture/1.webp';
import recImg from '../../../../public/images/projects/interior-furniture/2.jpeg';
import displayImg from '../../../../public/images/projects/interior-furniture/3.jpeg';
import receptionImg from '../../../../public/images/projects/interior-furniture/4.jpeg';

export default function PortfolioDetailsPage() {
  return (
    <>
      <PageHeading
        title='Giorgio Collection x Interiors Furniture'
        bgSrc='/images/service_hero_bg.jpeg'
        pageLinkText='PORTFOLIO - Interior Furniture'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Image src={introImg} alt="Giorgio Collection x Interiors Furniture" placeholder="blur" className="cs-radius_15 w-100" />
        <Spacing lg='90' md='40' />
        <Div className="row">
          <Div className="col-lg-6">
            <SectionHeading
              title='Giorgio Collection x Interiors Furniture'
              subtitle='Bringing Design Perspectives to Life Through Industry Dialogue'
            >
              <Spacing lg='40' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Overview</h2>
              <Spacing lg='15' md='10' />
              <p>
                Interiors Furniture, in collaboration with Giorgio Collection, hosted an intimate panel discussion featuring leading interior designers in Dubai. The event created a platform for open dialogue around design approaches, client expectations, and the evolving landscape of luxury interiors.
              </p>
              <Spacing lg='15' md='10' />
              <p>
                Set within the showroom, the discussion unfolded in a setting that naturally reflected the design language being explored. The environment allowed guests to engage directly with both the speakers and the space, creating a seamless connection between conversation and context. The presence of Giorgio Collection pieces enhanced the atmosphere, supporting the discussion without shifting focus away from the exchange of ideas.
              </p>
              <Spacing lg='15' md='10' />
              <p>
                The event positioned Interiors Furniture not only as a retail destination, but as a hub for the design community, facilitating meaningful conversations and industry engagement.
              </p>
              <Spacing lg='30' md='20' />
              <h2 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Our Approach: From Conversation to Immersive Experience</h2>
              <Spacing lg='15' md='10' />
              <p>
                We designed the event to create a balanced environment that encourages open dialogue while maintaining a refined and professional setting. We seamlessly integrated the panel discussion within the Downtown Design Exhibition, allowing the surrounding environment to naturally complement the conversation.
              </p>
              <Spacing lg='15' md='10' />
              <p>
                Through this format, we supported interaction and accessibility, enabling guests to engage with both the speakers and the exhibition in a fluid manner. Our spatial setup fostered a sense of intimacy, making the discussion feel personal and relevant to the audience.
              </p>
              <Spacing lg='15' md='10' />
              <p>
                With this approach, we elevated the experience beyond a traditional panel discussion, positioning it as a platform for meaningful exchange while reinforcing a strong connection between design dialogue and its physical context.
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
                <p className='cs-m0'>Interiors Furniture</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Project Name:</h3>
                <p className='cs-m0'>Giorgio Collection x Interiors Furniture</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Scope of Work:</h3>
                <p className='cs-m0'>Event Management / Product Showcase</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Location:</h3>
                <p className='cs-m0'>Downtown Design - Dubai</p>
                <Spacing lg='30' md='30' />
              </Div>
              <Div className="col-6">
                <h3 className='cs-accent_color cs-font_22 cs-font_18_sm cs-m0'>Date:</h3>
                <p className='cs-m0'>November 2024</p>
                <Spacing lg='30' md='30' />
              </Div>
            </Div>
          </Div>
        </Div>
        <Spacing lg='50' md='20' />
        <Div className="row">
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={recImg}
              alt="Giorgio Collection x Interiors Furniture Image 1"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-6">
            <Image
              src={displayImg}
              alt="Giorgio Collection x Interiors Furniture Image 2"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-lg-4 col-sm-12">
            <Image
              src={receptionImg}
              alt="Giorgio Collection x Interiors Furniture Image 3"
              placeholder="blur"
              className="w-100 cs-radius_15"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
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
