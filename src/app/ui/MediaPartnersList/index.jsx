import React from 'react';
import Div from '../Div';
import Image from 'next/image';

export default function MediaPartnersList({ data }) {
  return (
    <Div className="container">
      <Div className="cs-funfact_wrap">
        <Div
          className="cs-funfact_shape"
          style={{ backgroundImage: 'url(/images/funfact_shape_bg.svg)' }}
        />
        <Div
          className="d-flex flex-wrap justify-content-center align-items-center w-100"
          style={{ gap: '30px', padding: '50px 20px', position: 'relative', zIndex: 1 }}
        >
          {data.map((item, index) => (
            <Div key={index} className="d-flex justify-content-center align-items-center">
              <img
                src={item.src}
                alt={item.alt}
                style={{ maxWidth: '200px', maxHeight: '174px', objectFit: 'contain' }}
              />
            </Div>
          ))}
        </Div>
      </Div>
    </Div>
  );
}
