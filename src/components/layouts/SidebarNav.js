import React from "react";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  return (
    <>
      <div className="nav__row">
        <div className="nav__item">
          <div className="nav__item__row has-child">
            <Link to="/courses">
              <span>Courses</span>
              <span>+</span>
            </Link>
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__row has-child">
            <Link to="/study">
              <span>Study With Us</span>
              <span>+</span>
            </Link>
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__row has-child">
            <Link to="/international">
              <span>International</span>
              <span>+</span>
            </Link>
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__row has-child">
            <Link to="industry">
              <span>Industry</span>
              <span>+</span>
            </Link>
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__row">
            <Link to="dine">
              <span>Dine & Conference</span>
            </Link>
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__row">
            <Link to="/short">
              <span>Short Courses</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarNav;
