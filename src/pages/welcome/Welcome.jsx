import React from 'react'
import './Welcome.scss'

import { Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';
import 'swiper/scss/pagination';

import item from '../../assets/item.png'

export default function Welcome() {

  const params = {
    modules: [
        Pagination, 
        Scrollbar, 
        A11y,
        Autoplay
    ],
    autoplay: {
        delay: 2000,
    },
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    centeredSlides: false,
    effect: 'fade',
    grabCursor: true,
    pagination: {
      el: '.pagination',
      clickable: true,
      dynamicBullets: true,
      dynamicMainBullets: 1,
    },
  }

  return (
    <div className='welcome'>
      <div className="top">
        <Swiper {...params} className="slide-mecano">
          
          <SwiperSlide className="item">
            <img src={item} alt="item" />
          </SwiperSlide>

          <SwiperSlide className="item">
            <img src={item} alt="item" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={item} alt="item" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={item} alt="item" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={item} alt="item" />
          </SwiperSlide>
          <SwiperSlide className="item">
            <img src={item} alt="item" />
          </SwiperSlide>
          
        </Swiper>
        <div className="pagination"></div>
      </div>

      <div className="bottom">
        <h1>Bem vindo à Mecano</h1>
        <p>
          Uma solução rápida e segura 
          para solicitar serviços mecânicos. 
          Encontre profissionais treinados e 
          resolva qualquer problema com seu 
          veículo sem complicações.
        </p>
        <a href="#">Continuar</a>
      </div>
    </div>
  )
}
