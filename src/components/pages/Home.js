import React, { useState } from "react";

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

  const [index, setIndex] = useState(0);

  const slideRight = () => {
    setIndex((index + 1) % datas.length);
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(datas.length - 1);
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    <>
      <div className="slider__container">
        <div className="slider__item">
          <div className="slider__actions">
            <div className="desc">
              <h2>{datas[index].title}</h2>
              <p>{datas[index].desc}</p>
            </div>
          </div>
          <div className="poster">
            <img src={datas[index].image} alt="" />
          </div>
        </div>
        <div className="slider__nav">
          <button className="previous__btn" onClick={(e) => slideRight()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9.877"
              height="16.978"
              viewBox="0 0 9.877 16.978"
            >
              <path
                id="Path_31"
                data-name="Path 31"
                d="M579.932,845.436a.8.8,0,0,0-.006,1.128l7.811,7.691a.8.8,0,0,0,1.127,0l.47-.471a.8.8,0,0,0,0-1.127L582.558,846l6.783-6.657a.8.8,0,0,0,0-1.127l-.471-.471a.8.8,0,0,0-1.127,0Z"
                transform="translate(-579.698 -837.511)"
                fill="#fff"
              />
            </svg>
          </button>
          <button className="next__btn" onClick={(e) => slideLeft()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12.121"
              height="20.835"
              viewBox="0 0 12.121 20.835"
            >
              <path
                id="Path_30"
                data-name="Path 30"
                d="M687.4,846.692a.986.986,0,0,0,.008-1.384l-9.586-9.439a.978.978,0,0,0-1.383,0l-.578.578a.978.978,0,0,0,0,1.383l8.317,8.17-8.325,8.17a.978.978,0,0,0,0,1.383l.578.578a.978.978,0,0,0,1.383,0Z"
                transform="translate(-675.568 -835.583)"
                fill="#282828"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
