import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__row">
          <div className="search">
            <form>
              <input type="text" placeholder="Search Here" />
              <button type="submit">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25.357"
                  height="26.631"
                  viewBox="0 0 25.357 26.631"
                >
                  <g
                    id="Group_2"
                    data-name="Group 2"
                    transform="translate(-1742.379 -159.66)"
                  >
                    <circle
                      id="Ellipse_5"
                      data-name="Ellipse 5"
                      cx="10.987"
                      cy="10.987"
                      r="10.987"
                      transform="translate(1743.334 160.615)"
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit="10"
                      strokeWidth="1.911"
                    />
                    <line
                      id="Line_13"
                      data-name="Line 13"
                      x2="5.637"
                      y2="5.637"
                      transform="translate(1761.423 179.978)"
                      fill="none"
                      stroke="#000"
                      strokeMiterlimit="10"
                      strokeWidth="1.911"
                    />
                  </g>
                </svg>
              </button>
            </form>
          </div>
          <div className="sec__nav">
            <nav>
              <ul>
                <li>
                  <NavLink exact to="/">
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/careers">Careers</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/contacts">Contacts</NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
