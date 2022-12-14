import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/me.jpg";
import AVTR2 from "../../assets/me.jpg";
import AVTR3 from "../../assets/me.jpg";
import AVTR4 from "../../assets/me.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: AVTR1,
    name: "Jason1",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repudiandae rerum incidunt deserunt repellat maxime omnis facere nulla commodi debitis, laudantium esse pariatur consequatur suscipit veritatis aspernatur error adipisci. Quam."
  },
  {
    avatar: AVTR2,
    name: "Aida2",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repudiandae rerum incidunt deserunt repellat maxime omnis facere nulla commodi debitis, laudantium esse pariatur consequatur suscipit veritatis aspernatur error adipisci. Quam."
  },
  {
    avatar: AVTR3,
    name: "Aida3",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repudiandae rerum incidunt deserunt repellat maxime omnis facere nulla commodi debitis, laudantium esse pariatur consequatur suscipit veritatis aspernatur error adipisci. Quam."
  },
  {
    avatar: AVTR4,
    name: "Jason4",
    review:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repudiandae rerum incidunt deserunt repellat maxime omnis facere nulla commodi debitis, laudantium esse pariatur consequatur suscipit veritatis aspernatur error adipisci. Quam."
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonials">
              <div className="client__avatar">
                <img src={avatar} alt="" />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
