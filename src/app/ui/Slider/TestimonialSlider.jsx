import React, { useState } from 'react';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
import Testimonial from '../Testimonial';
import Div from '../Div';
import Spacing from '../Spacing';
const testimonialData = [
  {
    testimonialThumb: '/images/testimonial/testimonial_1.jpg',
    testimonialText:
'We’ve had the pleasure of working with Media On Click on multiple campaigns as Saya Studio, and the experience has been nothing short of fantastic. From clear communication to seamless execution, they’ve made every collaboration smooth and efficient. The team is super professional.',
    avatarName: 'Yana Polunovskaya',
    avatarDesignation: 'Saya Studio',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial/testimonial_2.jpg',
    testimonialText:
      'I’m excited to share about one of the best marketing companies out there. They’re known for collaborating with top celebrities and leading brands to deliver nothing but the best. I truly wish them continued success.',
    avatarName: 'Shahla Elatrash',
    avatarDesignation: 'Content Creator',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial/testimonial_3.jpg',
    testimonialText:
      'Working with Media On Click, was an amazing experience! The team was very supportive and professional! They were very supportive in all aspects of the shoot for their client! I want to especially thank Joy and Bilal for their professionalism on this project.',
    avatarName: 'Rami Sabbah',
    avatarDesignation: 'CRO At Annahar',
    ratings: '5',
  },
  {
    testimonialThumb: '/images/testimonial/testimonial_4.jpg',
    testimonialText:
      'One of the best agencies, Easy going on the work and Dealing with them is so Trusted & Super smooth ♥️♥️',
    avatarName: 'Ahon Monsery',
    avatarDesignation: 'Content Creator',
    ratings: '5',
  },
];

export default function TestimonialSlider() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-prev slick-arrow' + (currentSlide === 0 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
    >
      <Icon icon="bi:arrow-left" />
    </div>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <div
      {...props}
      className={
        'slick-next slick-arrow' +
        (currentSlide === slideCount - 1 ? ' slick-disabled' : '')
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
    >
      <Icon icon="bi:arrow-right" />
    </div>
  );
  return (
    <>
      <Div className="cs-gradient_bg_1 cs-shape_wrap_3 cs-parallax">
        <Spacing lg="130" md="80" />
        <Div className="cs-shape_3 cs-to_up">
          <img src="/images/shape_1.svg" alt="Shape" />
        </Div>
        <Div className="container">
          <Div className="cs-testimonial_slider">
            <Div className="cs-testimonial_slider_left">
              <Slider
                asNavFor={nav1}
                ref={slider2 => setNav2(slider2)}
                slidesToShow={3}
                swipeToSlide={true}
                focusOnSelect={true}
                centerMode={true}
                centerPadding="0px"
                arrows={false}
              >
                {testimonialData.map((item, index) => (
                  <Div className="slider-nav_item" key={index}>
                    <Div className="cs-rotate_img">
                      <Div className="cs-rotate_img_in">
                        <img src={item.testimonialThumb} alt="Thumb" />
                      </Div>
                    </Div>
                  </Div>
                ))}
              </Slider>
            </Div>
            <Div className="cs-testimonial_slider_right">
              <Slider
                asNavFor={nav2}
                ref={slider1 => setNav1(slider1)}
                prevArrow={<SlickArrowLeft />}
                nextArrow={<SlickArrowRight />}
                className="cs-arrow_style1"
              >
                {testimonialData.map((item, index) => (
                  <Div key={index}>
                    <Testimonial
                      testimonialText={item.testimonialText}
                      avatarName={item.avatarName}
                      avatarDesignation={item.avatarDesignation}
                      ratings={item.ratings}
                    />
                  </Div>
                ))}
              </Slider>
            </Div>
          </Div>
        </Div>
        <Spacing lg="130" md="80" />
      </Div>
    </>
  );
}
