import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  //Call Notice
  const notice = (e) => {
    e.target.classList.toggle("open");
    document.getElementById("notice").classList.toggle("show");
  };

  return (
    <>
      <div className="footer">
        <span>
          Designed & Developed by{" "}
          <a target="_blank" href="https://www.thesunbi.com/" rel="noreferrer">
            SunBi
          </a>
        </span>
        <span onClick={notice} className="not__open">
          Student Notice
        </span>
      </div>
      <div className="float__notice" id="notice">
        <div className="flower">
          <div className="title">
            <span>Notice</span>
          </div>
          <div className="notice__item">
            <h3>
              <Link to=""> Exhibition</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. ed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.ed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.957"
                height="31.957"
                viewBox="0 0 31.957 31.957"
              >
                <g
                  id="Group_575"
                  data-name="Group 575"
                  transform="translate(-7411.785 -990.025)"
                >
                  <path
                    id="Path_1388"
                    data-name="Path 1388"
                    d="M7443.742,1006a15.979,15.979,0,1,1-15.978-15.978A15.976,15.976,0,0,1,7443.742,1006Zm-15.978-13.917A13.918,13.918,0,1,0,7441.681,1006,13.917,13.917,0,0,0,7427.764,992.086Zm-.908,15.8a.778.778,0,0,1-.317-.625V996.983a.776.776,0,0,1,.774-.773h.9a.775.775,0,0,1,.773.773v9.426l4.542,3.3a.772.772,0,0,1,.167,1.083l-.528.728a.778.778,0,0,1-1.082.168Z"
                    fill="#fff"
                  />
                </g>
              </svg>
              March 26
            </span>
          </div>
          <div className="notice__item">
            <h3>
              <Link to=""> Sports Week</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet,ed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua.ed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.957"
                height="31.957"
                viewBox="0 0 31.957 31.957"
              >
                <g
                  id="Group_575"
                  data-name="Group 575"
                  transform="translate(-7411.785 -990.025)"
                >
                  <path
                    id="Path_1388"
                    data-name="Path 1388"
                    d="M7443.742,1006a15.979,15.979,0,1,1-15.978-15.978A15.976,15.976,0,0,1,7443.742,1006Zm-15.978-13.917A13.918,13.918,0,1,0,7441.681,1006,13.917,13.917,0,0,0,7427.764,992.086Zm-.908,15.8a.778.778,0,0,1-.317-.625V996.983a.776.776,0,0,1,.774-.773h.9a.775.775,0,0,1,.773.773v9.426l4.542,3.3a.772.772,0,0,1,.167,1.083l-.528.728a.778.778,0,0,1-1.082.168Z"
                    fill="#fff"
                  />
                </g>
              </svg>
              April 1
            </span>
          </div>
          <div className="notice__item">
            <h3>
              <Link to=""> Library Meeting</Link>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, ed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.ed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="31.957"
                height="31.957"
                viewBox="0 0 31.957 31.957"
              >
                <g
                  id="Group_575"
                  data-name="Group 575"
                  transform="translate(-7411.785 -990.025)"
                >
                  <path
                    id="Path_1388"
                    data-name="Path 1388"
                    d="M7443.742,1006a15.979,15.979,0,1,1-15.978-15.978A15.976,15.976,0,0,1,7443.742,1006Zm-15.978-13.917A13.918,13.918,0,1,0,7441.681,1006,13.917,13.917,0,0,0,7427.764,992.086Zm-.908,15.8a.778.778,0,0,1-.317-.625V996.983a.776.776,0,0,1,.774-.773h.9a.775.775,0,0,1,.773.773v9.426l4.542,3.3a.772.772,0,0,1,.167,1.083l-.528.728a.778.778,0,0,1-1.082.168Z"
                    fill="#fff"
                  />
                </g>
              </svg>
              May 1
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
