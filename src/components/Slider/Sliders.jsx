import React from 'react';

import Slider from 'react-slick';
import { Link } from 'react-router-dom';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './slider.scss';

function Sliders() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="slider-pd">
      <Slider {...settings}>
        <div>
          <Link className="slider">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FMainSlider%2Fsets%2Fnewpizzasets-slider-pc-ukr.webp&w=1560&q=75"
              alt="slider"
            />
          </Link>
        </div>

        <div>
          <Link className="slider">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FMainSlider%2FCinnamon%2Fcinnamonrolls-slider-pc-ukr.webp&w=1560&q=75"
              alt="slider"
            />
          </Link>
        </div>

        <div>
          <Link className="slider">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FMainSlider%2FPotatoPizza%2Fnewfriespizzanational-slider-pc-ukr.webp&w=1560&q=75"
              alt="slider"
            />
          </Link>
        </div>

        <div>
          <Link className="slider">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FMainSlider%2FPotatoesMushroom%2Fpotatoesmushroomsausages-slider-pc-ukr.webp&w=1560&q=75"
              alt="slider"
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
}

export default Sliders;
