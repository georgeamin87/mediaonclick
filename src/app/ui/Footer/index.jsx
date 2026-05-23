import React from 'react';
import Div from '../Div';
import ContactInfoWidget from '../Widget/ContactInfoWidget';
import MenuWidget from '../Widget/MenuWidget';
import Newsletter from '../Widget/Newsletter';
import SocialWidget from '../Widget/SocialWidget';
import TextWidget from '../Widget/TextWidget';
import Link from 'next/link';

const copyrightLinks = [
  {
    title: 'Terms & Condition',
    href: '/terms-conditions',
  },
  {
    title: 'Privacy Policy',
    href: '/privacy-policy',
  },
];

const serviceMenu = [
  {
    title: 'EVENT MANAGEMENT',
    href: '/service/event-management',
  },
  {
    title: 'PUBLIC RELATIONS/PRESS RELEASES',
    href: '/service/pr',
  },
  {
    title: 'MEDIA PLANNING & BUYING',
    href: '/service/media-plaining-buying',
  },
  {
    title: 'CONSULTANCY',
    href: '/service/consultancy',
  },
  {
    title: 'INFLUENCER MARKETING',
    href: '/service/influencers',
  },
  {
    title: 'INTERIOR DESIGN',
    href: '/service/interior-design',
  },
];

const date = new Date().getFullYear();

export default function Footer({ copyrightText, logoSrc, logoAlt, text }) {
  return (
    <footer className="cs-fooer">
      <Div className="cs-fooer_main">
        <Div className="container">
          <Div className="row">
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <TextWidget
                  logoSrc="/images/logo.png"
                  logoAlt="Logo"
                  text="With over 10 years of experience, MOC has established itself as one of the leading PR and Events Company"
                />
                <SocialWidget />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <MenuWidget menuItems={serviceMenu} menuHeading="Services" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <ContactInfoWidget title="Contact Us" />
              </Div>
            </Div>
            <Div className="col-lg-3 col-sm-6">
              <Div className="cs-footer_item">
                <Newsletter
                  title="Subscribe"
                  subtitle="Join Our News and Promotion list and Get notified with the latest updates."
                  placeholder="example@gmail.com"
                />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      <Div className="container">
        <Div className="cs-bottom_footer">
          <Div className="cs-bottom_footer_left">
            <Div className="cs-copyright">
              Copyright © {`${date}`} <Link href="https://adsvent.ae">Adsvent.ae</Link>
            </Div>
          </Div>
          <Div className="cs-bottom_footer_right">
            <MenuWidget menuItems={copyrightLinks} variant=" cs-style2" />
          </Div>
        </Div>
      </Div>
    </footer>
  );
}
