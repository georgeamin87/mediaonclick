import React from 'react';
import Div from '../Div';
import FullScreenVerticalSlider3 from '../Slider/FullScreenVerticalSlider3';
import VerticalLinks from '../VerticalLinks';

export default function Hero13({
  socialLinksHeading,
  heroSocialLinks,
  showcaseData,
}) {
  return (
    <Div className="cs-hero_7_wrap">
      <VerticalLinks data={heroSocialLinks} title={socialLinksHeading} />
      <FullScreenVerticalSlider3 data={showcaseData} />
    </Div>
  );
}
