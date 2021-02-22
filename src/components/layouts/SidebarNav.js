import React from "react";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  return (
    <>
      <div className="nav__row">
        <div className="nav__item">
          <div className="nav__item__row has-child">
            <Link>
              <span>Courses</span>
              <span>+</span>
            </Link>
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__row has-child">
            <Link>
              <span>Study With Us</span>
              <span>+</span>
            </Link>
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__row has-child">
            <Link>
              <span>International</span>
              <span>+</span>
            </Link>
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__row has-child">
            <Link>
              <span>Industry</span>
              <span>+</span>
            </Link>
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__row">
            <Link>
              <span>Dine & Conference</span>
            </Link>
          </div>
        </div>
        <div className="nav__item">
          <div className="nav__item__row">
            <Link>
              <span>Short Courses</span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidebarNav;
