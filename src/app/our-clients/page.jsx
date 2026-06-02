'use client'
import Image from "next/image";
import Cta from "@/app/ui/Cta";
import Div from "@/app/ui/Div";
import FunFact from "@/app/ui/FunFact";
import PageHeading from "@/app/ui/PageHeading";
import SectionHeading from "@/app/ui/SectionHeading";
import TeamSlider from "@/app/ui/Slider/TeamSlider";
import Spacing from "@/app/ui/Spacing";
import aboutImg from '../../../public/images/about-moc.webp'
import aboutImg4 from '../../../public/images/team/team.jpg'
import Hero13 from "@/app/ui/Hero/Hero13";
import GalleryStyle2 from "@/app/ui/Gallery/GalleryStyle2";
import MovingText from '@/app/ui/MovingText';

import MediaPartnersList from '@/app/ui/MediaPartnersList';

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

const partnersData = [
    {
        src: '/images/clients/Artboard 1@300x.png',
        alt: 'AL HABTOOR',
    },
    {
        src: '/images/clients/Artboard 2@300x.png',
        alt: 'AL HUZAIFA',
    },
    {
        src: '/images/clients/Artboard 3@300x.png',
        alt: 'AL KABAYEL',
    },
    {
        src: '/images/clients/Artboard 4@300x.png',
        alt: 'ALMILA',
    },
    {
        src: '/images/clients/Artboard 5@300x.png',
        alt: 'ALUHA',
    },
    {
        src: '/images/clients/Artboard 6@300x.png',
        alt: 'CFI',
    },
    {
        src: '/images/clients/Artboard 7@300x.png',
        alt: 'DESIGN MIDDLE EAST',
    },
    {
        src: '/images/clients/Artboard 8@300x.png',
        alt: 'GROHE',
    },
    {
        src: '/images/clients/Artboard 9@300x.png',
        alt: 'HAZAR',
    },
    {
        src: '/images/clients/Artboard 10@300x.png',
        alt: 'HOMES R US',
    },

    {
        src: '/images/clients/Artboard 12@300x.png',
        alt: 'POLISHED INTERIORS',
    },
    {
        src: '/images/clients/Artboard 13@300x.png',
        alt: 'WALID ATALLAH',
    },

    {
        src: '/images/clients/Artboard 15@300x.png',
        alt: 'Partner',
    },
    {
        src: '/images/clients/Artboard 33@300x.png',
        alt: 'Partner',
    },
    {
        src: '/images/clients/Artboard 42.png',
        alt: 'POLISHED INTERIORS',
    },
    {
        src: '/images/clients/Artboard 43.png',
        alt: 'WALID ATALLAH',
    },
    {
        src: '/images/clients/Artboard 44.png',
        alt: 'Partner',
    },
    {
        src: '/images/clients/Artboard 45.png',
        alt: 'Partner',
    },

    {
        src: '/images/clients/Artboard 18@300x.png',
        alt: 'HomeRus',
    },
    {
        src: '/images/clients/Artboard 25@300x.png',
        alt: 'Interiors',
    },
    {
        src: '/images/clients/Artboard 24@300x.png',
        alt: 'Chattles',
    },
    {
        src: '/images/clients/new/4.svg',
        alt: 'Partner',
    },
    {
        src: '/images/clients/new/5.svg',
        alt: 'Partner',
    },

    {
        src: '/images/clients/new/7.svg',
        alt: 'Partner',
    },
    {
        src: '/images/clients/new/8.svg',
        alt: 'Partner',
    },

    {
        src: '/images/clients/new/11.svg',
        alt: 'Partner',
    },
    {
        src: '/images/clients/new/12.svg',
        alt: 'Partner',
    },
    {
        src: '/images/clients/new/13.svg',
        alt: 'Partner',
    },
    {
        src: '/images/clients/new/14.svg',
        alt: 'Partner',
    },
    {
        src: '/images/clients/new/15.svg',
        alt: 'Partner',
    },
    {
        src: '/images/clients/new/16.svg',
        alt: 'Partner',
    },

    {
        src: '/images/clients/new/18.svg',
        alt: 'Partner',
    },
    {
        src: '/images/clients/new/19.svg',
        alt: 'Partner',
    },

];

const showcaseData = [
    {
        introTitle: 'Get To Know MediaOnClick',
        title: 'Our Clients',
        videoUrl: '/video/moc.mp4',
        href: '/case-study/case-study-details',
    },
];


const funfaceData = [
    {
        title: 'Global Happy Clients',
        factNumber: '100',
    },
    {
        title: 'Years Of Experience',
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
                            title="Your Trusted Media Partner"
                            subtitle="Our Media Network"
                        >
                            <Spacing lg="30" md="20" />
                            <p className="cs-m0">
                                At Media OnClick (MOC), we don’t just connect with media! We create opportunities that put your brand in the spotlight. By collaborating with leading outlets and publishers, we deliver credible, impactful coverage that reaches the right audience and drives results.
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
                </Div>
            </Div>
            <Spacing lg="75" md="55" />
            {/* End About Section */}

            {/* Start MovingText Section */}
            <MovingText text="Our Reputed World Wide Clients" variant="cs-type2" />
            <Spacing lg="100" md="70" />
            {/* End MovingText Section */}
            <MediaPartnersList data={partnersData} />

            <Spacing lg="100" md="80" />
            <GalleryStyle2 />
            <Spacing lg="100" md="80" />
            {/* Start Fun Fact Section */}
            <Div className="container">
                <FunFact
                    title="Our Fun Fact"
                    subtitle="At Media OnClick (MOC), we don’t just run campaigns! We create digital magic. Over 1,000 campaigns launched, 500+ influencer collaborations, and events that have captured audiences across the UAE and beyond, we now bring our creative expertise into interior design, transforming showrooms across the Middle East into immersive spaces that reflect your brand and leave a lasting impression. From last-minute PR miracles to full-scale events executed in just 48 hours and yes, they went viral! We deliver lightning-fast PR wins and unforgettable digital experiences. We’re more than marketing experts; we’re adrenaline-fueled creatives who turn every challenge into a show-stopping success."
                    data={funfaceData}
                />
            </Div>
            {/* End Fun Fact Section */}


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
            {/* End Team Section */}

            {/* Start CTA Section */}
            <Spacing lg="150" md="80" />
            <Div className="container">
                <Cta
                    title="Where Creativity<br /> <i>Sparks & Brilliance </i> Rises, <br />Let’s Make It Happen Together"
                    btnText="Apply For Meeting"
                    btnLink="/contact"
                    bgSrc="/images/cta_bg.jpeg"
                />
            </Div>
            {/* End CTA Section */}
        </>
    );
}
