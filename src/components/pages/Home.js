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
        "https://cdn.pixabay.com/photo/2021/03/02/12/20/mountains-6062271_1280.jpg",
    },
    {
      title: "Study With Us",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image:
        "https://cdn.pixabay.com/photo/2021/03/04/07/31/mountains-6067150_1280.jpg",
    },
    {
      title: "International",
      desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
      image:
        "https://cdn.pixabay.com/photo/2021/03/02/12/20/mountains-6062271_1280.jpg",
    },
  ];

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    margin: 10,
    // autoplay: true,
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
                  <div
                    className="box__item"
                    style={{ backgroundImage: `url(${data.image})` }}
                  >
                    <div className="not__empty">
                      <span>Tourism</span>
                    </div>
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
