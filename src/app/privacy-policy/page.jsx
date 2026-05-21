'use client';
import React, { useState, useEffect } from 'react';
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import Link from "next/link";

const policySections = [
  { id: 'about-us', title: '1. About Us', icon: 'mdi:office-building-outline' },
  { id: 'info-collect', title: '2. Information We Collect', icon: 'mdi:database-search-outline' },
  { id: 'how-use', title: '3. How We Use Your Info', icon: 'mdi:cog-transfer-outline' },
  { id: 'cookies', title: '4. Cookies', icon: 'mdi:cookie-cog' },
  { id: 'sharing', title: '5. Sharing of Information', icon: 'mdi:share-variant-outline' },
  { id: 'data-protection', title: '6. Data Protection', icon: 'mdi:shield-lock-outline' },
  { id: 'third-party', title: '7. Third-Party Links', icon: 'mdi:link-variant' },
  { id: 'rights', title: '8. Your Rights', icon: 'mdi:account-key-outline' },
  { id: 'contact-info', title: '9. Contact Information', icon: 'mdi:card-account-phone-outline' },
  { id: 'updates', title: '10. Updates to This Policy', icon: 'mdi:update' },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('about-us');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // Offset for header + extra padding

      for (const section of policySections) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 140; // Offset for header
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Start Page Heading Section */}
      <PageHeading
        title="Privacy Policy"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="Privacy Policy"
      />
      {/* End Page Heading Section */}

      <Spacing lg="150" md="80" />

      {/* Start Main Content Container */}
      <Div className="container">
        <Div className="row">
          
          {/* Left Column: Sticky Navigation Outline */}
          <Div className="col-lg-4">
            <Div 
              className="cs-faq_nav cs-radius_15" 
              style={{ 
                position: 'sticky', 
                top: '120px', 
                zIndex: 10,
                border: '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
              }}
            >
              <h2 className="cs-faq_nav_title cs-m0 cs-primary_font cs-white_color" style={{ fontSize: '24px', letterSpacing: '0.5px' }}>
                <Icon icon="mdi:format-list-bulleted-type" style={{ marginRight: '10px', color: '#ff4a17', verticalAlign: 'middle' }} />
                Table of Contents
              </h2>
              <Div className="cs-height_30 cs-height_lg_30" />
              <ul className="cs-list cs-style1 cs-mp0" style={{ listStyle: 'none', padding: 0 }}>
                {policySections.map((section) => (
                  <li key={section.id} style={{ marginBottom: '12px' }}>
                    <button
                      onClick={() => scrollToSection(section.id)}
                      className={`cs-text_btn cs-type2`}
                      style={{
                        background: 'none',
                        border: 'none',
                        padding: '10px 15px',
                        width: '100%',
                        textAlign: 'left',
                        display: 'flex',
                        alignItems: 'center',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease',
                        fontSize: '15px',
                        color: activeSection === section.id ? '#ffffff' : '#b2b2b2',
                        backgroundColor: activeSection === section.id ? '#ff4a17' : 'transparent',
                        fontWeight: activeSection === section.id ? '600' : '400',
                      }}
                    >
                      <Icon 
                        icon={section.icon} 
                        style={{ 
                          marginRight: '12px', 
                          fontSize: '18px',
                          color: activeSection === section.id ? '#ffffff' : '#ff4a17',
                        }} 
                      />
                      <span>{section.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </Div>
            <Spacing lg="0" md="50" />
          </Div>

          {/* Right Column: Policy Content */}
          <Div className="col-lg-8">
            <Div className="cs-post cs-style2" style={{ paddingLeft: '15px' }}>
              
              {/* Introduction Card */}
              <Div 
                className="cs-faq_nav cs-radius_15 cs-m0" 
                style={{ 
                  padding: '35px', 
                  marginBottom: '50px', 
                  borderLeft: '4px solid #ff4a17',
                  backgroundColor: 'rgba(255, 255, 255, 0.02)'
                }}
              >
                <h3 className="cs-primary_font cs-white_color" style={{ fontSize: '20px', marginTop: 0 }}>Welcome to Media OnClick</h3>
                <Spacing lg="15" md="10" />
                <p className="cs-m0" style={{ fontSize: '16px', lineHeight: '1.7', color: '#d2d2d2' }}>
                  Welcome to <Link href="https://mediaonclick.me" className="cs-accent_color" style={{ textDecoration: 'underline' }}>Media OnClick</Link> (“MOC”, “we”, “our”, or “us”). 
                  This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website or use our services.
                </p>
                <Spacing lg="15" md="10" />
                <p className="cs-m0 cs-semi_bold" style={{ color: '#ffffff' }}>
                  By using our website, you agree to the terms of this Privacy Policy.
                </p>
              </Div>

              {/* 1. About Us Section */}
              <section id="about-us" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:office-building-outline" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    1. About Us
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    Media OnClick is Dubai's leading public relations, events, and marketing communications agency. 
                    We maintain transparent standards regarding business operations and how we handle consumer touchpoints.
                  </p>
                  
                  <Spacing lg="20" md="15" />
                  
                  {/* Grid layout for Business Details */}
                  <Div className="row">
                    <Div className="col-md-6" style={{ marginBottom: '20px' }}>
                      <Div className="cs-faq_nav cs-radius_15" style={{ padding: '25px', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                        <p style={{ margin: 0, opacity: 0.5, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>Business Name</p>
                        <h4 className="cs-white_color" style={{ margin: '5px 0 0', fontSize: '18px' }}>Media OnClick (MOC)</h4>
                      </Div>
                    </Div>
                    <Div className="col-md-6" style={{ marginBottom: '20px' }}>
                      <Div className="cs-faq_nav cs-radius_15" style={{ padding: '25px', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                        <p style={{ margin: 0, opacity: 0.5, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>Business Type</p>
                        <h4 className="cs-white_color" style={{ margin: '5px 0 0', fontSize: '18px' }}>PR Media Agency in Dubai</h4>
                      </Div>
                    </Div>
                    <Div className="col-md-6" style={{ marginBottom: '20px' }}>
                      <Div className="cs-faq_nav cs-radius_15" style={{ padding: '25px', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                        <p style={{ margin: 0, opacity: 0.5, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>Contact Details</p>
                        <ul className="cs-list cs-style1 cs-mp0" style={{ listStyle: 'none', padding: 0, marginTop: '8px' }}>
                          <li style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', fontSize: '15px' }}>
                            <Icon icon="mdi:phone" className="cs-accent_color" style={{ marginRight: '8px' }} />
                            <span className="cs-white_color">+971 4 456 7122</span>
                          </li>
                          <li style={{ display: 'flex', alignItems: 'center', fontSize: '15px' }}>
                            <Icon icon="mdi:email" className="cs-accent_color" style={{ marginRight: '8px' }} />
                            <span className="cs-white_color">info@mediaonclick.me</span>
                          </li>
                        </ul>
                      </Div>
                    </Div>
                    <Div className="col-md-6" style={{ marginBottom: '20px' }}>
                      <Div className="cs-faq_nav cs-radius_15" style={{ padding: '25px', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                        <p style={{ margin: 0, opacity: 0.5, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>Address</p>
                        <h4 className="cs-white_color" style={{ margin: '5px 0 0', fontSize: '15px', fontWeight: '400', lineHeight: '1.5' }}>
                          Shatha Tower – Office No. 2609 – Dubai Media City – Dubai
                        </h4>
                      </Div>
                    </Div>
                  </Div>

                  <Spacing lg="15" md="10" />

                  {/* Google Map Section */}
                  <h4 className="cs-white_color" style={{ fontSize: '16px', display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <Icon icon="mdi:google-maps" className="cs-accent_color" style={{ marginRight: '8px' }} />
                    Our Location
                  </h4>
                  <Div className="cs-radius_15 overflow-hidden" style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.3627836924043!2d55.152871999999995!3d25.089578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6dea2dda75%3A0x1c332af55b2aae04!2sMedia%20OnClick%20(MOC)!5e0!3m2!1sen!2sae!4v1750238801447!5m2!1sen!2sae"
                      width="100%"
                      height="280"
                      style={{ border: 0, display: 'block', filter: 'grayscale(100%) invert(90%) contrast(120%)' }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Media OnClick Office Location Map"
                    />
                  </Div>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 2. Information We Collect Section */}
              <section id="info-collect" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:database-search-outline" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    2. Information We Collect
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    We collect personal and technical details to ensure we deliver high-value PR, event management, and business advisory services.
                  </p>

                  <Spacing lg="25" md="20" />

                  <Div className="row">
                    <Div className="col-md-6" style={{ marginBottom: '20px' }}>
                      <Div className="cs-faq_nav cs-radius_15" style={{ padding: '30px', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                        <h4 className="cs-white_color" style={{ fontSize: '18px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                          <Icon icon="mdi:card-account-details-outline" className="cs-accent_color" style={{ marginRight: '10px' }} />
                          Personal Information
                        </h4>
                        <ul className="cs-list cs-style1 cs-mp0 cs-primary_font" style={{ listStyle: 'none', padding: 0 }}>
                          {['Name', 'Email address', 'Phone number', 'Company name', 'Details from inquiries/contact forms'].map((item) => (
                            <li key={item} style={{ display: 'flex', alignItems: 'center', color: '#d2d2d2', fontSize: '15px' }}>
                              <Icon icon="mdi:circle-medium" className="cs-accent_color" style={{ marginRight: '8px' }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Div>
                    </Div>
                    
                    <Div className="col-md-6" style={{ marginBottom: '20px' }}>
                      <Div className="cs-faq_nav cs-radius_15" style={{ padding: '30px', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.02)' }}>
                        <h4 className="cs-white_color" style={{ fontSize: '18px', display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                          <Icon icon="mdi:monitor-cellphone" className="cs-accent_color" style={{ marginRight: '10px' }} />
                          Technical Information
                        </h4>
                        <ul className="cs-list cs-style1 cs-mp0 cs-primary_font" style={{ listStyle: 'none', padding: 0 }}>
                          {['IP address', 'Browser type', 'Device information', 'Website usage & behavior data', 'Cookies and analytics details'].map((item) => (
                            <li key={item} style={{ display: 'flex', alignItems: 'center', color: '#d2d2d2', fontSize: '15px' }}>
                              <Icon icon="mdi:circle-medium" className="cs-accent_color" style={{ marginRight: '8px' }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </Div>
                    </Div>
                  </Div>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 3. How We Use Your Information Section */}
              <section id="how-use" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:cog-transfer-outline" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    3. How We Use Your Information
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    Every byte of data we collect is treated with the utmost respect. We use your details to:
                  </p>

                  <Spacing lg="25" md="20" />

                  <Div className="row">
                    {[
                      { icon: 'mdi:chat-processing-outline', text: 'Respond to customer inquiries and requests promptly' },
                      { icon: 'mdi:bullhorn-outline', text: 'Provide, customize, and deliver premium PR, media, and marketing services' },
                      { icon: 'mdi:laptop-mac', text: 'Improve our website functionality, responsiveness, and general user experience' },
                      { icon: 'mdi:email-outline', text: 'Send crucial brand updates, marketing communications, or promotional newsletters' },
                      { icon: 'mdi:chart-timeline-variant', text: 'Analyze website traffic patterns, visitor counts, and user paths' },
                      { icon: 'mdi:shield-check-outline', text: 'Maintain maximum site security and prevent bad behavior or system misuse' },
                    ].map((item, idx) => (
                      <Div className="col-md-6" style={{ marginBottom: '20px' }} key={idx}>
                        <Div className="cs-faq_nav cs-radius_15" style={{ padding: '25px', display: 'flex', alignItems: 'flex-start', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.015)' }}>
                          <Icon icon={item.icon} className="cs-accent_color" style={{ fontSize: '28px', marginRight: '15px', flexShrink: 0, marginTop: '2px' }} />
                          <p className="cs-m0 cs-white_color" style={{ fontSize: '15px', lineHeight: '1.5' }}>{item.text}</p>
                        </Div>
                      </Div>
                    ))}
                  </Div>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 4. Cookies Section */}
              <section id="cookies" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:cookie-cog" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    4. Cookies
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    Our website may use cookies and similar tracking technologies to improve your browsing experience and analyze website traffic.
                  </p>
                  <Spacing lg="15" md="10" />
                  
                  <Div className="cs-faq_nav cs-radius_15" style={{ padding: '25px', display: 'flex', alignItems: 'flex-start', backgroundColor: 'rgba(255, 74, 23, 0.05)', border: '1px solid rgba(255, 74, 23, 0.2)' }}>
                    <Icon icon="mdi:alert-circle-outline" className="cs-accent_color" style={{ fontSize: '24px', marginRight: '15px', flexShrink: 0, marginTop: '2px' }} />
                    <p className="cs-m0 cs-white_color" style={{ fontSize: '14px', lineHeight: '1.6' }}>
                      <strong>User Control:</strong> You may disable cookies through your browser settings, though some website features may not function properly. Disabling cookies will not restrict basic informational browsing.
                    </p>
                  </Div>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 5. Sharing of Information Section */}
              <section id="sharing" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:share-variant-outline" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    5. Sharing of Information
                  </h2>
                  <p style={{ color: '#ffffff', fontWeight: '600', marginBottom: '20px' }}>
                    We do not sell, rent, or trade your personal information.
                  </p>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7', marginBottom: '20px' }}>
                    To run our services, we may share information with:
                  </p>

                  <ul className="cs-list cs-style1 cs-mp0 cs-primary_font" style={{ listStyle: 'none', padding: 0 }}>
                    {[
                      { icon: 'mdi:handshake-outline', bold: 'Trusted service providers', text: 'who assist in running our daily operations and executing business tasks under confidentiality agreements.' },
                      { icon: 'mdi:gavel', bold: 'Legal authorities', text: 'or governmental bodies if required by law or in compliance with judicial processes in the UAE.' },
                      { icon: 'mdi:google-analytics', bold: 'Third-party analytics', text: 'or marketing optimization platforms used to verify site health and upgrade customer satisfaction levels.' },
                    ].map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: '#d2d2d2', fontSize: '15px', marginBottom: '15px' }}>
                        <Icon icon={item.icon} className="cs-accent_color" style={{ marginRight: '12px', fontSize: '22px', marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ lineHeight: '1.5' }}>
                          <strong style={{ color: '#ffffff' }}>{item.bold}</strong> – {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 6. Data Protection Section */}
              <section id="data-protection" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:shield-lock-outline" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    6. Data Protection
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    We implement reasonable technical and organizational measures to protect your information from unauthorized access, misuse, or disclosure.
                  </p>
                  <Spacing lg="15" md="10" />

                  <blockquote className="cs-primary_font" style={{ margin: 0, padding: '25px', backgroundColor: 'rgba(255,255,255,0.02)', borderLeft: '3px solid #ff4a17', borderRadius: '0 15px 15px 0' }}>
                    <Icon icon="mdi:shield-alert" className="cs-accent_color" style={{ fontSize: '24px', display: 'block', marginBottom: '10px' }} />
                    Please be advised: while we maintain tight modern security walls, no method of internet transmission or electronic storage is completely secure. We cannot promise absolute digital security.
                  </blockquote>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 7. Third-Party Links Section */}
              <section id="third-party" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:link-variant" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    7. Third-Party Links
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    Our website may contain links to external websites. We are not responsible for the privacy practices, secure cookies, or text contents of third-party websites. 
                    We highly encourage our clients to inspect the individual privacy policies of any site they navigate to.
                  </p>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 8. Your Rights Section */}
              <section id="rights" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:account-key-outline" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    8. Your Rights
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7', marginBottom: '20px' }}>
                    Depending on applicable local and regional laws, you have comprehensive rights regarding your digital trace. These include:
                  </p>

                  <ul className="cs-list cs-style1 cs-mp0 cs-primary_font" style={{ listStyle: 'none', padding: 0 }}>
                    {[
                      'Request full access to your personal data that we have archived',
                      'Request corrective edits to inaccurate or outdated personal details',
                      'Request deletion of your information from our data centers',
                      'Withdraw consent for marketing communications or promotional list subscriptions'
                    ].map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', color: '#d2d2d2', fontSize: '15px', marginBottom: '12px' }}>
                        <Icon icon="mdi:check" className="cs-accent_color" style={{ marginRight: '10px', fontSize: '20px', flexShrink: 0 }} />
                        <span style={{ lineHeight: '1.5' }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Spacing lg="20" md="15" />
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    To make such requests, please contact us using the contact card details listed below.
                  </p>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 9. Contact Information Section */}
              <section id="contact-info" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '25px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:card-account-phone-outline" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    9. Contact Information
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7', marginBottom: '25px' }}>
                    If you have any questions, regulatory requests, or concerns regarding this Privacy Policy, please reach out to our team:
                  </p>

                  {/* Premium Contact Details Card */}
                  <Div 
                    className="cs-faq_nav cs-radius_15" 
                    style={{ 
                      padding: '40px', 
                      backgroundColor: 'rgba(255, 255, 255, 0.02)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      boxShadow: '0 15px 30px rgba(0,0,0,0.3)'
                    }}
                  >
                    <h3 className="cs-white_color cs-primary_font" style={{ fontSize: '22px', margin: '0 0 10px' }}>Media OnClick (MOC)</h3>
                    <Link href="https://mediaonclick.me" className="cs-accent_color" style={{ fontSize: '16px', display: 'inline-block', marginBottom: '25px', textDecoration: 'underline' }}>
                      mediaonclick.me
                    </Link>

                    <Div className="row">
                      <Div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <h5 className="cs-white_color" style={{ fontSize: '15px', marginBottom: '8px', opacity: 0.8 }}>Email Support</h5>
                        <a href="mailto:info@mediaonclick.me" style={{ color: '#ff4a17', fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                          <Icon icon="mdi:email-outline" style={{ marginRight: '8px' }} />
                          info@mediaonclick.me
                        </a>
                      </Div>
                      <Div className="col-md-6" style={{ marginBottom: '20px' }}>
                        <h5 className="cs-white_color" style={{ fontSize: '15px', marginBottom: '8px', opacity: 0.8 }}>Phone</h5>
                        <a href="tel:+97144567122" style={{ color: '#ff4a17', fontSize: '16px', fontWeight: '600', display: 'flex', alignItems: 'center' }}>
                          <Icon icon="mdi:phone-outline" style={{ marginRight: '8px' }} />
                          +971 4 456 7122
                        </a>
                      </Div>
                      <Div className="col-12">
                        <Div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)', margin: '10px 0 20px' }} />
                        <h5 className="cs-white_color" style={{ fontSize: '15px', marginBottom: '8px', opacity: 0.8 }}>Headquarters Address</h5>
                        <p style={{ color: '#d2d2d2', margin: 0, fontSize: '15px', lineHeight: '1.6', display: 'flex', alignItems: 'flex-start' }}>
                          <Icon icon="mdi:map-marker-outline" className="cs-accent_color" style={{ marginRight: '8px', fontSize: '20px', marginTop: '2px', flexShrink: 0 }} />
                          Shatha Tower – Office No. 2609 – Dubai Media City – Dubai (UAE)
                        </p>
                      </Div>
                    </Div>

                    <Spacing lg="30" md="20" />
                    <Link href="/contact" className="cs-btn cs-style1" style={{ display: 'inline-flex', textDecoration: 'none' }}>
                      <span>Send Direct Inquiry</span>
                      <Icon icon="bi:arrow-right" />
                    </Link>
                  </Div>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 10. Updates to This Policy Section */}
              <section id="updates" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:update" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    10. Updates to This Policy
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    We may update this Privacy Policy from time to time to align with legal upgrades or changing business frameworks. Any changes will be posted on this page with an updated effective date.
                  </p>

                  <Spacing lg="30" md="25" />

                  {/* Effective Date Stamp Badge */}
                  <Div 
                    style={{ 
                      display: 'inline-flex', 
                      alignItems: 'center', 
                      backgroundColor: 'rgba(255,255,255,0.03)', 
                      padding: '12px 25px', 
                      borderRadius: '30px', 
                      border: '1px solid rgba(255,255,255,0.05)' 
                    }}
                  >
                    <Icon icon="mdi:calendar-clock-outline" className="cs-accent_color" style={{ marginRight: '10px', fontSize: '20px' }} />
                    <span style={{ fontSize: '14px', color: '#ffffff' }}>
                      <strong>Effective Date:</strong> May 21, 2026
                    </span>
                  </Div>
                </Div>
              </section>

            </Div>
          </Div>

        </Div>
      </Div>

      <Spacing lg="150" md="80" />
    </>
  );
}
