'use client';
import React, { useState, useEffect } from 'react';
import Div from "@/app/ui/Div";
import PageHeading from "@/app/ui/PageHeading";
import Spacing from "@/app/ui/Spacing";
import { Icon } from "@iconify/react";
import Link from "next/link";

const termsSections = [
  { id: 'intro', title: '1. Introduction', icon: 'mdi:file-document-outline' },
  { id: 'scope', title: '2. Scope of Services', icon: 'mdi:bullhorn-outline' },
  { id: 'billing', title: '3. Fees & Payment', icon: 'mdi:credit-card-outline' },
  { id: 'intellectual', title: '4. Intellectual Property', icon: 'mdi:copyright' },
  { id: 'obligations', title: '5. Client Obligations', icon: 'mdi:account-coworker' },
  { id: 'confidentiality', title: '6. Confidentiality', icon: 'mdi:lock-outline' },
  { id: 'liability', title: '7. Limitation of Liability', icon: 'mdi:shield-alert-outline' },
  { id: 'governing', title: '8. Governing Law', icon: 'mdi:gavel' },
  { id: 'contact-info', title: '9. Contact Information', icon: 'mdi:card-account-phone-outline' },
];

export default function TermsConditionsPage() {
  const [activeSection, setActiveSection] = useState('intro');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 220; // Offset for header + extra padding

      for (const section of termsSections) {
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
        title="Terms & Condition"
        bgSrc="/images/about_hero_bg.jpeg"
        pageLinkText="Terms & Condition"
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
                {termsSections.map((section) => (
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

          {/* Right Column: Terms Content */}
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
                <h3 className="cs-primary_font cs-white_color" style={{ fontSize: '20px', marginTop: 0 }}>Contractual Agreement</h3>
                <Spacing lg="15" md="10" />
                <p className="cs-m0" style={{ fontSize: '16px', lineHeight: '1.7', color: '#d2d2d2' }}>
                  These Terms & Condition (“Terms”, “Agreement”) constitute a binding legal agreement between you (“Client”, “User”, “your”) and <Link href="https://mediaonclick.me" className="cs-accent_color" style={{ textDecoration: 'underline' }}>Media OnClick</Link> (“MOC”, “we”, “our”, or “us”), a professional PR, Media & Events Agency headquartered in Dubai, UAE.
                </p>
                <Spacing lg="15" md="10" />
                <p className="cs-m0 cs-semi_bold" style={{ color: '#ffffff' }}>
                  By accessing our website, subscribing to our services, or signing a Project Brief, you acknowledge that you have read, understood, and agreed to be bound by these terms.
                </p>
              </Div>

              {/* 1. Introduction Section */}
              <section id="intro" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:file-document-outline" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    1. Introduction
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    Media OnClick (MOC) operates in compliance with UAE trade laws, serving local and global corporations in the field of public relations, corporate branding, digital marketing, interior showroom designs, and grand experiential events.
                  </p>
                  
                  <Spacing lg="20" md="15" />
                  
                  <Div className="row">
                    <Div className="col-md-6" style={{ marginBottom: '20px' }}>
                      <Div className="cs-faq_nav cs-radius_15" style={{ padding: '25px', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                        <p style={{ margin: 0, opacity: 0.5, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>Corporate Registry</p>
                        <h4 className="cs-white_color" style={{ margin: '5px 0 0', fontSize: '16px' }}>Media OnClick (MOC)</h4>
                        <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#b2b2b2' }}>Dubai Media City, Dubai, United Arab Emirates</p>
                      </Div>
                    </Div>
                    <Div className="col-md-6" style={{ marginBottom: '20px' }}>
                      <Div className="cs-faq_nav cs-radius_15" style={{ padding: '25px', height: '100%', backgroundColor: 'rgba(255, 255, 255, 0.03)' }}>
                        <p style={{ margin: 0, opacity: 0.5, fontSize: '13px', textTransform: 'uppercase', letterSpacing: '1px' }}>Service Mandate</p>
                        <h4 className="cs-white_color" style={{ margin: '5px 0 0', fontSize: '16px' }}>PR, Advertising & Events</h4>
                        <p style={{ margin: '5px 0 0', fontSize: '14px', color: '#b2b2b2' }}>Dubai DMC Corporate Authorization</p>
                      </Div>
                    </Div>
                  </Div>

                  <Spacing lg="15" md="10" />

                  {/* Google Map Section */}
                  <h4 className="cs-white_color" style={{ fontSize: '16px', display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <Icon icon="mdi:google-maps" className="cs-accent_color" style={{ marginRight: '8px' }} />
                    Headquarters Map
                  </h4>
                  <Div className="cs-radius_15 overflow-hidden" style={{ border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.3627836924043!2d55.152871999999995!3d25.089578!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6b6dea2dda75%3A0x1c332af55b2aae04!2sMedia%20OnClick%20(MOC)!5e0!3m2!1sen!2sae!4v1750238801447!5m2!1sen!2sae"
                      width="100%"
                      height="220"
                      style={{ border: 0, display: 'block', filter: 'grayscale(100%) invert(90%) contrast(120%)' }}
                      allowFullScreen=""
                      loading="lazy"
                      title="Media OnClick Office Location Map"
                    />
                  </Div>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 2. Scope of Services Section */}
              <section id="scope" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:bullhorn-outline" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    2. Scope of Services
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    Media OnClick acts as an agile, integrated communications and space-creation agency. All deliverables are governed under individual Statements of Work (SOWs) or campaign briefs, which outline timelines, specifications, and objectives. Our primary scopes include:
                  </p>

                  <Spacing lg="20" md="15" />

                  <ul className="cs-list cs-style1 cs-mp0 cs-primary_font" style={{ listStyle: 'none', padding: 0 }}>
                    {[
                      { title: 'Public Relations (PR) & Press Distributions', desc: 'Drafting, distributing, and pitching press releases to major regional Arabic & English publications, coordinating media coverage, and facilitating press conferences.' },
                      { title: 'Event Planning & Production', desc: 'Design, execution, stage setups, sound & light setups, and comprehensive logistical hosting of corporate, commercial, and influencer events.' },
                      { title: 'Media Planning & Buying', desc: 'Placing strategic advertising spots across print media, TV, radio, digital channels, and outdoor billboard spaces in the UAE.' },
                      { title: 'Digital & Influencer Marketing', desc: 'Devising visual campaigns, managing social handles, and securing authentic influencer activations with highly reputable content creators.' },
                      { title: 'Commercial Interior Design', desc: 'Planning and transforming showroom layouts, exhibition stands, and office setups blending aesthetics with high brand functionality.' }
                    ].map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: '#d2d2d2', fontSize: '15px', marginBottom: '15px' }}>
                        <Icon icon="mdi:circle-medium" className="cs-accent_color" style={{ marginRight: '10px', fontSize: '22px', flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ lineHeight: '1.5' }}>
                          <strong style={{ color: '#ffffff' }}>{item.title}:</strong> {item.desc}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 3. Fees & Payment Section */}
              <section id="billing" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:credit-card-outline" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    3. Fees & Payment
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    Our payment protocols are tailored to the scale of campaigns. Specific cost matrices and disbursement schedules will be formalized in project contracts:
                  </p>

                  <Spacing lg="20" md="15" />

                  <ul className="cs-list cs-style1 cs-mp0 cs-primary_font" style={{ listStyle: 'none', padding: 0 }}>
                    {[
                      { bold: 'Retainer Plans', text: 'PR retainer fees are invoiced monthly in advance and are due within ten (10) calendar days from the invoice date.' },
                      { bold: 'Event/Production Milestones', text: 'Typically require a minimum of 50% mobilization advance payment prior to venue bookings, with remaining balances paid immediately upon event delivery.' },
                      { bold: 'Media Spot Bookings', text: 'Because of space reservation dynamics in regional press/billboards, 100% advance payment is required prior to media booking lock-in.' },
                      { bold: 'Taxation & VAT', text: 'All prices quoted are exclusive of the UAE Value Added Tax (VAT) rate of 5%, which will be itemized separately on VAT invoices.' }
                    ].map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: '#d2d2d2', fontSize: '15px', marginBottom: '12px' }}>
                        <Icon icon="mdi:checkbox-marked-circle-outline" className="cs-accent_color" style={{ marginRight: '10px', fontSize: '20px', flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ lineHeight: '1.5' }}>
                          <strong style={{ color: '#ffffff' }}>{item.bold}</strong> – {item.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 4. Intellectual Property Section */}
              <section id="intellectual" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:copyright" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    4. Intellectual Property
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    Ownership of creative deliverables generated during agency campaigns is determined as follows:
                  </p>
                  
                  <Spacing lg="15" md="10" />

                  <Div className="cs-faq_nav cs-radius_15" style={{ padding: '25px', backgroundColor: 'rgba(255, 255, 255, 0.02)', borderLeft: '3px solid #ff4a17' }}>
                    <ul className="cs-list cs-style1 cs-mp0 cs-primary_font" style={{ listStyle: 'none', padding: 0 }}>
                      <li style={{ display: 'flex', alignItems: 'flex-start', color: '#d2d2d2', fontSize: '15px', marginBottom: '10px' }}>
                        <Icon icon="mdi:chevron-right" className="cs-accent_color" style={{ marginRight: '8px', fontSize: '20px', flexShrink: 0 }} />
                        <span><strong>Client Assets:</strong> All trademarks, logos, brand guides, and corporate assets provided to MOC remain your sole property.</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', color: '#d2d2d2', fontSize: '15px', marginBottom: '10px' }}>
                        <Icon icon="mdi:chevron-right" className="cs-accent_color" style={{ marginRight: '8px', fontSize: '20px', flexShrink: 0 }} />
                        <span><strong>Agency Deliverables:</strong> Drafts, raw videos, event blueprints, interior layout files, and media pitch strategies created by MOC remain our property until all payments have been cleared in full.</span>
                      </li>
                      <li style={{ display: 'flex', alignItems: 'flex-start', color: '#d2d2d2', fontSize: '15px' }}>
                        <Icon icon="mdi:chevron-right" className="cs-accent_color" style={{ marginRight: '8px', fontSize: '20px', flexShrink: 0 }} />
                        <span><strong>Usage Rights:</strong> Upon payment clearance, MOC grants the Client a perpetual, royalty-free license to use final campaign creatives for their specified business geography.</span>
                      </li>
                    </ul>
                  </Div>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 5. Client Obligations Section */}
              <section id="obligations" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:account-coworker" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    5. Client Obligations
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    To maintain standard quality, campaign delivery, and smooth coordination:
                  </p>

                  <Spacing lg="15" md="10" />

                  <ul className="cs-list cs-style1 cs-mp0 cs-primary_font" style={{ listStyle: 'none', padding: 0 }}>
                    {[
                      'Provide comprehensive, legally compliant briefing details regarding products or media launches.',
                      'Assign a dedicated representative authorized to sign off on press distributions, designs, and budgets.',
                      'Ensure all media claims, testimonials, or brand statistics shared with the public are accurate and true.',
                      'Obtain required local regulatory licenses/approvals for specialized event setups, permissions, or giveaways.'
                    ].map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'center', color: '#d2d2d2', fontSize: '15px', marginBottom: '12px' }}>
                        <Icon icon="mdi:shield-check-outline" className="cs-accent_color" style={{ marginRight: '10px', fontSize: '18px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 6. Confidentiality Section */}
              <section id="confidentiality" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:lock-outline" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    6. Confidentiality
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    We recognize that launching new products, disclosing media shifts, and discussing business strategies require total trust. MOC and the Client agree to hold all campaign briefs, proprietary lists, cost formulas, and corporate data in strict confidence. No proprietary records will be shared with third parties without the other party's explicit written approval.
                  </p>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 7. Limitation of Liability Section */}
              <section id="liability" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:shield-alert-outline" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    7. Limitation of Liability
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    Media OnClick acts as a facilitator and advisor. We are not liable for:
                  </p>
                  
                  <Spacing lg="15" md="10" />

                  <ul className="cs-list cs-style1 cs-mp0 cs-primary_font" style={{ listStyle: 'none', padding: 0 }}>
                    {[
                      'Any delays or delivery constraints imposed by external publications, media outlets, or news partners.',
                      'Any damage to client assets resulting from inaccurate information supplied for press distributions.',
                      'Loss of revenues or business opportunities due to changing consumer trends, social media shifts, or search trends.',
                      'Unforeseen event cancellations due to weather, state-ordered shutdowns, or Force Majeure circumstances.'
                    ].map((item, idx) => (
                      <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', color: '#d2d2d2', fontSize: '15px', marginBottom: '12px' }}>
                        <Icon icon="mdi:minus-circle-outline" className="cs-accent_color" style={{ marginRight: '10px', fontSize: '18px', flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ lineHeight: '1.5' }}>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p style={{ color: '#b2b2b2', lineHeight: '1.7', marginTop: '15px' }}>
                    Our total cumulative liability under any campaign is strictly limited to the actual amount paid by the Client to MOC for that specific statement of work.
                  </p>
                </Div>
              </section>

              <Spacing lg="80" md="50" />

              {/* 8. Governing Law Section */}
              <section id="governing" style={{ scrollMarginTop: '160px' }}>
                <Div className="cs-post_info" style={{ padding: 0 }}>
                  <h2 className="cs-post_title cs-white_color" style={{ fontSize: '28px', marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <Icon icon="mdi:gavel" className="cs-accent_color" style={{ marginRight: '12px' }} />
                    8. Governing Law
                  </h2>
                  <p style={{ color: '#b2b2b2', lineHeight: '1.7' }}>
                    These Terms & Condition are governed by and construed in accordance with the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Any dispute arising out of or in connection with these terms, including their validity, breach, or termination, shall be subject to the exclusive jurisdiction of the competent courts of Dubai, United Arab Emirates.
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
                    If you have any questions, regulatory requests, or concerns regarding these Terms, please reach out to our legal and customer support teams:
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

            </Div>
          </Div>

        </Div>
      </Div>

      <Spacing lg="150" md="80" />
    </>
  );
}
