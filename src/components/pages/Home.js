import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextBtn from "../layouts/NextBtn";
import PreviousBtn from "../layouts/PreviousBtn";

const Home = () => {
  const datas = [
    {
      title: "Courses",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image:
        "https://cdn.pixabay.com/photo/2020/04/04/16/07/stadttheater-5002861_1280.jpg",
    },
    {
      title: "Study With Us",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image:
        "https://cdn.pixabay.com/photo/2021/01/05/06/40/boat-5889919_1280.png",
    },
    {
      title: "International",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image:
        "https://cdn.pixabay.com/photo/2020/06/24/10/51/roses-5335743_1280.jpg",
    },
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 10,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    nextArrow: <NextBtn />,
    prevArrow: <PreviousBtn />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
        },
      },
    ],
  };

  return (
    <>
      <div className="slider__container">
        <Slider {...settings}>
          {datas.map((data, i) => (
            <div className="slider__item" key={i}>
              <div className="slider__actions">
                <div className="desc">
                  <h2>{data.title}</h2>
                  <p>{data.desc}</p>
                </div>
              </div>
              <div className="poster">
                <div className="box__row">
                  <div className="box__item">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="box__item">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="box__item">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="box__item">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="box__item">
                    <img src={data.image} alt="" />
                  </div>
                  <div className="box__item not__empty">
                    <span>Tourism</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default Home;
