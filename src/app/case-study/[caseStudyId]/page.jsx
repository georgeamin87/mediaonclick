'use client'
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import Spacing from "@/app/ui/Spacing";
import Image from "next/image";
import imgUrl from '../../../../public/images/case_study_img_1.jpeg'

export default function CaseStudyDetailsPage() {
  return (
    <>
      <PageHeading
        title="Case Study Details"
        bgSrc="/images/contact_hero_bg.jpeg"
        pageLinkText="Case Study Details"
      />
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Strategic Influencer Campaign Success"
          subtitle="Digital Marketing Case Study"
          variant="cs-style1 text-center"
        />
        <Spacing lg="90" md="45" />
        <Image
          src={imgUrl}
          alt="Influencer Campaign"
          className="w-100 cs-radius_15"
          placeholder="blur"
        />
        <Spacing lg="140" md="80" />
        <h2 className="cs-font_38 text-center">Campaign Overview</h2>
        <Spacing lg="60" md="45" />
        <p className="cs-m0">
          Media On Click executed a comprehensive influencer marketing campaign for a luxury brand in Dubai, 
          leveraging strategic storytelling and authentic creator partnerships. Our approach combined data-driven 
          audience analysis with creative content development to maximize engagement and brand lift.
        </p>
        <Spacing lg="65" md="45" />
        <Div className="row">
          <Div className="col-sm-6">
            <img
              src="/images/case_study_img_2.jpeg"
              alt="Influencer Content"
              className="w-100 cs-radius_5"
            />
            <Spacing lg="25" md="25" />
          </Div>
          <Div className="col-sm-6">
            <img
              src="/images/case_study_img_3.jpeg"
              alt="Event Activation"
              className="w-100 cs-radius_5"
            />
            <Spacing lg="25" md="25" />
          </Div>
        </Div>
        <Spacing lg="125" md="55" />
      </Div>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_6">
        <Div className="cs-shape_2"></Div>
        <Div className="cs-shape_2"></Div>
        <Div className="container">
          <Spacing lg="145" md="80" />
          <h2 className="cs-font_38 text-center">Case Study Research</h2>
          <Spacing lg="90" md="45" />
          <Div className="row align-items-center cs-column_reverse_lg">
            <Div className="col-lg-5">
              <h3 className="cs-font_30 cs-m0">Our Strategy</h3>
              <Spacing lg="45" md="30" />
              <p className="cs-m0">
                We developed a multi-platform influencer strategy targeting key demographics in the UAE market. 
                Our approach combined nano-influencers for authenticity with macro-influencers for broader reach.
                <br /><br />
                Content was carefully curated to align with the brand's identity while allowing each influencer's 
                unique voice to shine through, creating genuine engagement with their audiences.
              </p>
            </Div>
            <Div className="col-lg-6 offset-lg-1 text-center">
              <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                <img
                  src="/images/case_study_img_4.png"
                  alt="Case study"
                  className="w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
          </Div>
          <Spacing lg="100" md="80" />
          <Div className="row align-items-center">
            <Div className="col-lg-6 text-center">
              <Div className="cs-portfolio_img_in cs-shine_hover_1 rounded-circle">
                <img
                  src="/images/case_study_img_5.png"
                  alt="Case study"
                  className="w-100"
                />
              </Div>
              <Spacing lg="0" md="40" />
            </Div>
            <Div className="col-lg-5 offset-lg-1">
              <h3 className="cs-font_30 cs-m0">Branding guideline</h3>
              <Spacing lg="45" md="30" />
              <p className="cs-m0">
                Our goal perspiciatis unde omnis iste natus error sit voluptatem
                bolaru accusantium voltire doloremque laudantium, totam rem
                aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
                architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                voluptatem. <br />
                <br />
                Most cases aspernatur aut odit aut fugit, sed quia consequuntur
                magni dolores eos qui ratione voluptatem sequi nesciunt. Ipsum
                quia dolor sit amet, consectetur, adipisci velit, sed quia non
                numquam eius modi tempora incidunt ut labore et dolore.
              </p>
            </Div>
          </Div>
          <Spacing lg="150" md="80" />
        </Div>
      </Div>
      <Spacing lg="140" md="80" />
      <Div className="container text-center">
        <Div className="row col-lg-10 offset-lg-1">
          <h2 className="cs-font_38 cs-m0">Result of The Case Study</h2>
          <Spacing lg="60" md="45" />
          <h3 className="cs-font_30 cs-m0">Key Results</h3>
          <Spacing lg="45" md="30" />
          <p className="cs-m0">
            The campaign achieved 4.3M+ impressions with an engagement rate 3x higher than industry benchmarks.
            Brand sentiment improved by 42% and we generated 850+ pieces of authentic user-generated content.
            <br /><br />
            Most importantly, the client saw a 35% increase in website traffic and a 28% boost in sales 
            directly attributed to the influencer collaborations during the campaign period.
          </p>
        </Div>
      </Div>
      <Spacing lg="145" md="80" />
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
