import React from 'react';
// Import Swiper React components

import { Swiper, SwiperSlide } from 'swiper/react';

import { useTranslation } from 'react-i18next';

import BackBtn from '../../components/BackBtn';
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/pagination';

import './news.scss';

// import required modules
import { Pagination } from 'swiper';

function News() {
  const { t } = useTranslation();

  return (
    <div className="container news">
      <h2 style={{ textAlign: 'center', padding: '10px 0 30px 0' }}>{t('swipe news')}</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={50}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
          <div className="slider-news">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FMainSlider%2F520%20lviv%2Fslider-pc-520-ukr.webp&w=1560&q=75"
              alt="news"
            />
            <p>Дві піци за 520 ГРН</p>
            <span></span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-news">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FNews%2FNova%20pitsa%20Hretska!%2Fslider-greek-pizza-santorini-21-07-22-ukr.webp&w=480&q=75"
              alt="news"
            />
            <p>Нова піца Грецька!</p>
            <span></span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="slider-news">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FNews%2FNova%20pitsa%20Hretska!%2Fslider-greek-pizza-santorini-21-07-22-ukr.webp&w=480&q=75"
              alt="news"
            />
            <p>Нова піца Грецька!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-news">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FNews%2FPanasian%2Fpanasiantastes-news-detail-pc-ukr.webp&w=480&q=75"
              alt="news"
            />
            <p>Нові паназійські смаки!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-news">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FNews%2FSkushtui%20novi%20pitsy%20z%20kartopleiu%20fri!%2Fpitsa-z-kartopleiu-fri.webp&w=480&q=75"
              alt="news"
            />
            <p>Скуштуй нові піци з картоплею фрі!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-news">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FNews%2FZustrichai%20somu%20pitseriiu%20svitovoi%20merezhi%20Domino%27s%20u%20Lvovi!%2Fzustrichai-u-sebe-na-raioni.webp&w=480&q=75"
              alt="news"
            />
            <p>Зустрічай сьому піцерію!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-news">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FMainSlider%2FBF%2Fslaider-ukr.webp&w=1560&q=75"
              alt="news"
            />
            <p>Знижка на самовивіз – 20%</p>
            <span></span>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-news">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FNews%2Fdyakuemo_new_ukr.webp&w=480&q=75"
              alt="news"
            />
            <p>Дорогі співвітчизники, друзі!</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-news">
            <img
              src="https://dominos.ua/_next/image/?url=https%3A%2F%2Fmedia-v3.dominos.ua%2FMainSlider%2F180%2Fslaider-1200kh580-ukr-lv.webp&w=1560&q=75"
              alt="news"
            />
            <p>150 гривень на самовивіз!</p>
            <span></span>
          </div>
        </SwiperSlide>
      </Swiper>

      <BackBtn />
    </div>
  );
}

export default News;
