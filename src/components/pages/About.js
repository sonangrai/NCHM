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
                Board Members{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792    H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083    c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z    " />
                    </g>
                  </g>
                </svg>
              </Link>
              <Link to="" className="sub__btn__outline">
                Faculty Members{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792    H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083    c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z    " />
                    </g>
                  </g>
                </svg>
              </Link>
              <Link to="" className="sub__btn__outline">
                Mission | Vision{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792    H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083    c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z    " />
                    </g>
                  </g>
                </svg>
              </Link>
              <Link to="" className="sub__btn__outline">
                FAQ's{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  viewBox="0 0 512 512"
                >
                  <g>
                    <g>
                      <path d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792    H10.667C4.771,245.333,0,250.104,0,256s4.771,10.667,10.667,10.667h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083    c2.083,2.083,4.813,3.125,7.542,3.125c2.729,0,5.458-1.042,7.542-3.125l160-160C513.042,259.375,513.042,252.625,508.875,248.458z    " />
                    </g>
                  </g>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
