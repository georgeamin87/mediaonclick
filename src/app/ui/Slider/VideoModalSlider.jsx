import React, { useState } from 'react';
import Slider from 'react-slick';
import Div from '../Div';

export default function VideoModalSlider({ data }) {
  const [iframeSrc, setIframeSrc] = useState('about:blank');
  const [toggle, setToggle] = useState(false);

  const handleOpen = (videoSrc) => {
    let videoId = '';
    if (videoSrc.includes('?v=')) {
      videoId = videoSrc.split('?v=')[1].trim();
    } else if (videoSrc.includes('youtu.be/')) {
      videoId = videoSrc.split('youtu.be/')[1].trim();
    }
    setIframeSrc(`https://www.youtube.com/embed/${videoId}`);
    setToggle(true);
  };

  const handleClose = () => {
    setIframeSrc('about:blank');
    setToggle(false);
  };

  /** Slider Settings **/
  const settings = {
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '0',
    slidesToShow: 3,
    speed: 500,
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings} className="cs-slider cs-style3 cs-gap-24">
        {data.map((item, index) => {
          let videoId = '';
          if (item.videoSrc.includes('?v=')) {
            videoId = item.videoSrc.split('?v=')[1].trim();
          } else if (item.videoSrc.includes('youtu.be/')) {
            videoId = item.videoSrc.split('youtu.be/')[1].trim();
          }

          const bgUrl = item.bgUrl || `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

          return (
            <Div key={index}>
              <Div
                className="cs-video_block cs-style1 cs-video_open cs-bg"
                style={{ backgroundImage: `url(${bgUrl})`, height: '400px' }}
                onClick={() => handleOpen(item.videoSrc)}
              >
                <span className="cs-player_btn cs-accent_color">
                  <span />
                </span>
              </Div>
            </Div>
          );
        })}
      </Slider>

      <Div className={toggle ? 'cs-video_popup active' : 'cs-video_popup'}>
        <Div className="cs-video_popup_overlay" />
        <Div className="cs-video_popup_content">
          <Div className="cs-video_popup_layer" />
          <Div className="cs-video_popup_container">
            <Div className="cs-video_popup_align">
              <Div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src={iframeSrc}
                  title="video modal"
                />
              </Div>
            </Div>
            <Div className="cs-video_popup_close" onClick={handleClose} />
          </Div>
        </Div>
      </Div>
    </>
  );
}
