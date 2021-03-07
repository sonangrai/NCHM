import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import Audio from "../audioplayer/Audio";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About - NCHM</title>
      </Helmet>
      <div className="about__pg">
        <div className="page__titles">
          <h2>About Us</h2>
        </div>
        <div className="about__row">
          <div className="left__part">
            <div className="audio__player">
              <div className="speak">
                <span>Message From Us</span>
              </div>
              <Audio />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ull amcorper suscipit lobortis nisl ut aliquip ex ea comm
              odo consequat. Duis autem vel eum iriure dolor in he ndrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat.
            </p>
          </div>
          <div className="right__part">
            <div className="button__cont">
              <Link to="" className="sub__btn__outline">
                Board Members
              </Link>
              <Link to="" className="sub__btn__outline">
                Faculty Members
              </Link>
              <Link to="" className="sub__btn__outline">
                Mission| Vision
              </Link>
              <Link to="" className="sub__btn__outline">
                FAQ's
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
