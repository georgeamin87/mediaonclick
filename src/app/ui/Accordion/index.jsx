import React from 'react';
import { useState } from 'react';
import Div from '../Div';
const accordionData = [
 {
    question: 'What services does MediaOnClick offer?',
    answer:
      'We’re a full‑service boutique agency in Dubai Media City, offering Public Relations, Event Management, Influencer Marketing, Media Planning & Buying, Digital Marketing, Creative Design, Brand Identity, and Website Development—all under one roof.',
  },
  {
    question: 'How experienced is MediaOnClick?',
    answer:
      'With over 10–15 years in the UAE market and dozens of projects for clients like GROHE, CFI (Lewis Hamilton partnership), Hanif Jewellers, Dahua Tech, and more, we’ve built a strong reputation in strategic communications and impactful activations.',
  },
  {
    question: 'Where are you located and what are your working hours?',
    answer:
      'Our office is at Office 2609, Shatha Tower in Dubai Media City. We’re open Monday–Thursday 9am–6pm, and Friday until 6pm. :contentReference[oaicite:3]{index=3}',
  },
  {
    question: 'How do I begin a project with MediaOnClick?',
    answer:
      'Start by reaching out via the “Contact” or “I Want to Inquire” forms on our website, or email [email protected]. We’ll schedule a discovery call, discuss goals, scope out services, and map a timeline and deliverables tailored to your needs.',
  },
  {
    question: 'Do you handle influencer marketing?',
    answer:
      'Yes—we leverage our curated influencer network to plan, produce, and amplify campaigns that connect brands with authentic voices in the UAE.',
  },
  {
    question: 'Can you manage corporate events and activations?',
    answer:
      'Absolutely. From conferences and exhibitions to brand activations and gala dinners, we design and execute immersive events like the GROHE ‘Island Edition’ and CFI’s Lewis Hamilton activation.',
  },
  {
    question: 'How do you measure campaign success?',
    answer:
      'We define KPIs during kickoff—such as media reach, engagement rates, attendee feedback, conversions—then monitor progress and deliver performance reports with insights and next‑step recommendations.',
  },
  {
    question: 'Do you provide design and digital assets after campaign?',
    answer:
    'Yes—our creatives team develops branding materials, sponsorship decks, social visuals, press kits, website pages, and more. We deliver all source files (Adobe formats or equivalent) so you retain full ownership.',
  },
];

export default function Accordion() {
  const [selected, setSelected] = useState(0);
  const handelToggle = index => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <Div className="cs-accordians cs-style1">
      {accordionData.map((item, index) => (
        <Div
          className={`cs-accordian ${selected === index ? 'active' : ''}`}
          key={index}
        >
          <Div
            className="cs-accordian_head"
            onClick={() => handelToggle(index)}
          >
            <h2 className="cs-accordian_title">{item.question}</h2>
            <span className="cs-accordian_toggle cs-accent_color">
              <svg
                width={15}
                height={8}
                viewBox="0 0 15 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 0L7.5 7.5L15 0H0Z" fill="currentColor" />
              </svg>
            </span>
          </Div>
          <Div className="cs-accordian_body">
            <Div className="cs-accordian_body_in">{item.answer}</Div>
          </Div>
        </Div>
      ))}
    </Div>
  );
}
