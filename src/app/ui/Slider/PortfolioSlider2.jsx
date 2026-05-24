import React from 'react';
import Portfolio from '../Portfolio';
import Div from '../Div';
import Slider from 'react-slick';
import { Icon } from '@iconify/react';
const portfolioData = [
  {
    title: 'Grand Opening — AlKabayelPrime x MOC Team',
    subtitle: 'See Details',
    href: 'https://www.instagram.com/p/DYYTBDdzJnf/',
    src: '/images/insta/1.webp',
  },
  {
    title: 'Design Middle East',
    subtitle: 'See Details',
    href: 'https://www.instagram.com/reel/Cy3xjkBynin/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    src: '/images/insta/2.png',
  },
  {
    title: 'HAZAR Haute ',
    subtitle: 'See Details',
    href: 'https://www.instagram.com/reel/C3Ud_niR8_Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    src: '/images/insta/3.png',
  },
  {
    title: 'Our Team Story',
    subtitle: 'See Details',
    href: 'https://www.instagram.com/stories/highlights/17970873343069641/',
    src: '/images/insta/4.png',
  },
  {
    title: 'Design Middle East Awards 2023',
    subtitle: 'See Details',
    href: 'https://www.instagram.com/p/Cy5mFmVP4Wa/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    src: '/images/insta/5.png',
  },
  {
    title: 'Homes r Us Ramadan Collection',
    subtitle: 'See Details',
    href: 'https://www.instagram.com/p/C4Xya_kPb0-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    src: '/images/insta/6.png',
  },
  {
    title: 'Fun night with MOC',
    subtitle: 'See Details',
    href: 'https://www.instagram.com/p/CxF-el5KFV8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    src: '/images/insta/7.png',
  },
  {
    title: 'Al Habtoor Polo Club',
    subtitle: 'See Details',
    href: 'https://www.instagram.com/p/BbUFuz0l77n/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    src: '/images/insta/8.jpg',
  },
];
export default function PortfolioSlider2() {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings} className="cs-gap-12 cs-arrow_style4">
      {portfolioData.map((item, index) => (
        <Div key={index}>
          <Portfolio
            title={item.title}
            subtitle={item.subtitle}
            href={item.href}
            src={item.src}
            variant="cs-style1 cs-type2 cs-size3"
          />
        </Div>
      ))}
    </Slider>
  );
}
