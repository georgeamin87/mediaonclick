import React from 'react';
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const galleryData = [
  {
    src: '/images/gallery/WhatsApp Image 2026-03-24 at 4.31.29 PM (13).webp',
    srcLg: '/images/gallery/WhatsApp Image 2026-03-24 at 4.31.29 PM (13).webp',
  },
  {
    src: '/images/mocpart/1.jpeg',
    srcLg: '/images/mocpart/1.jpeg',
  },
  {
    src: '/images/mocpart/2.jpeg',
    srcLg: '/images/mocpart/2.jpeg',
  },
  {
    src: '/images/mocpart/3.jpeg',
    srcLg: '/images/mocpart/3.jpeg',
  },
  {
    src: '/images/mocpart/4.jpeg',
    srcLg: '/images/mocpart/4.jpeg',
  },
  {
    src: '/images/mocpart/5.jpeg',
    srcLg: '/images/mocpart/5.jpeg',
  },
  {
    src: '/images/mocpart/6.jpeg',
    srcLg: '/images/mocpart/6.jpeg',
  },
  {
    src: '/images/mocpart/7.jpeg',
    srcLg: '/images/mocpart/7.jpeg',
  },
  {
    src: '/images/mocpart/8.jpeg',
    srcLg: '/images/mocpart/8.jpeg',
  },
  {
    src: '/images/mocpart/9.jpg',
    srcLg: '/images/mocpart/9.jpg',
  },
];

const GalleryItem = ({ src }) => {
  return (
    <div className="cs-grid_gallery_item" href={src}>
      <div className="cs-portfolio cs-style1 cs-lightbox_item cs-type2 rounded-0">
        <div className="cs-portfolio_hover" />
        <span className="cs-plus" />
        <div
          className="cs-portfolio_bg cs-bg"
          style={{ backgroundImage: `url("${src}")` }}
        >
          <img src={src} alt="Gallery" className='position-absolute' />
        </div>
      </div>
    </div>
  )
}


export default function GalleryStyle2() {
  return (
    <LightGallery
      speed={500}
      plugins={[lgThumbnail, lgZoom]}
      elementClassNames="cs-grid_gallery_5 cs-lightgallery"
    >
      {galleryData.map((item, index) => (
        <GalleryItem key={index} src={item.src} />
      ))}
    </LightGallery>
  );
}
