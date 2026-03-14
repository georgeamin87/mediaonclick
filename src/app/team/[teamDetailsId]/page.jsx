'use client'
import Cta from "@/app/ui/Cta"
import Div from "@/app/ui/Div"
import PageHeading from "@/app/ui/PageHeading"
import Spacing from "@/app/ui/Spacing"
import SocialWidget from "@/app/ui/Widget/SocialWidget"
import imgUrl from '../../../../public/images/team/member_1.jpeg'
import Image from "next/image"

export default function TeamDetails() {
  return (
    <>
      <PageHeading
        title='Our CEO'
        bgSrc='/images/team_hero_bg.jpeg'
        pageLinkText='About | Management'
      />
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <Image src={imgUrl} alt="Member" className="w-100" placeholder="blur" />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg='0' md='45' />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title">Bilal Michlawi</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">CEO</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">Bilal Michlawi is a seasoned media professional with over 15 years of experience in the industry. As the CEO of Media On Click, he has successfully led the company to become a leading media planning and buying agency in the UAE, specializing in digital marketing, influencer marketing, and PR strategies.</p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <p className="cs-m0">With expertise in media strategy, client relations, and team leadership, Bilal has helped numerous brands achieve their marketing objectives. His approach combines creative thinking with data-driven insights to deliver impactful campaigns across traditional and digital media channels.</p>
              <Div className="cs-height_45 cs-height_lg_30" />
              <SocialWidget />
            </Div>
          </Div>
        </Div>
      </Div>
      <Spacing lg='150' md='80' />
      <Div className="container">
        <Cta
          title='Let’s disscuse make <br />something <i>cool</i> together'
          btnText='Apply For Meeting'
          btnLink='/contact'
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
