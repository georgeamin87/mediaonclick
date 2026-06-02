import { Icon } from '@iconify/react';
import React from 'react';
import Slider from 'react-slick';
import Div from '../Div';
import Timeline from '../Timeline';
const timelineData = [
  [
    {
      year: 'Middle East',
      name: 'Design',
      position: 'Specialised for Engineering',
      image: '/images/set/1.png',
    },
  ],
  [
    {
      year: 'Middle East',
      name: 'Grazia',
      position: 'Fashion, & Luxury Goods',
      image: '/images/set/2.png',
    },
  ],
  [
    {
      year: 'Middle East',
      name: 'Logistics',
      position: 'PropTech & Corporates',
      image: '/images/set/3.png',
    },
  ],
  [
    {
      year: 'Middle East',
      name: 'Forbes',
      position: 'Entrepreneur & Corporates',
      image: '/images/set/4.png',
    },
  ],
  [
    {
      year: 'Middle East',
      name: 'CEO',
      position: 'Entrepreneur & Corporates',
      image: '/images/set/5.png',
    },
  ],
  [
    {
      year: 'Middle East',
      name: 'Entrepreneur',
      position: 'Entrepreneur & Corporates',
      image: '/images/set/6.png',
    },
  ],
];

export default function TimelineSlider() {
  /** Slider Settings **/
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    arrows: true,
    responsive: [
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="cs-arrow_style4">
      {timelineData.map((item, index) => (
        <Div key={index}>
          <Timeline columnData={item} />
        </Div>
      ))}
    </Slider>
  );
}
