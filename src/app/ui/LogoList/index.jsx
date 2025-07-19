import React from 'react';
import Div from '../Div';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const partnerLogos = [
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
    src: '/images/clients/Artboard 11@300x.png',
    alt: 'MULTIBANK GROUP',
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
    src: '/images/clients/Artboard 14@300x.png',
    alt: 'Partner',
  },
  {
    src: '/images/clients/Artboard 15@300x.png',
    alt: 'Partner',
  },
  {
    src: '/images/clients/Artboard 16@300x.png',
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
  }
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
};

export default function LogoList() {
  return (
    <Div className="container">
      <Slider {...settings}>
        {partnerLogos.map((logo, index) => (
          <Div key={index} className="px-15">
            <img 
              src={logo.src} 
              alt={logo.alt} 
              className="w-100"
              style={{ maxHeight: '150px', objectFit: 'contain' }}
            />
          </Div>
        ))}
      </Slider>
    </Div>
  );
}
