import React from "react";
import { Link } from "react-router-dom";

const SidebarNav = () => {
  const toggle = (e) => {
    e.currentTarget.classList.toggle("show");
  };
  return (
    <>
      <div className="nav__row">
        <div className="nav__item">
          <div
            className={`nav__item__row has__child`}
            onClick={toggle}
            name="courses"
          >
            <a href="#courses">
              <span>Courses</span>
            </a>
            <div className="dropped__box">
              <ul>
                <li>
                  <Link to="">Courses 1</Link>
                </li>
                <li>
                  <Link to="">Courses 2</Link>
                </li>
                <li>
                  <Link to="">Courses 3</Link>
                </li>
                <li>
                  <Link to="">Courses 4</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav__item">
          <div
            className="nav__item__row has__child"
            onClick={toggle}
            name="study"
          >
            <a href="#study">
              <span>Study With Us</span>
            </a>
            <div className="dropped__box">
              <ul>
                <li>
                  <Link to="">Study With Us 1</Link>
                </li>
                <li>
                  <Link to="">Study With Us 2</Link>
                </li>
                <li>
                  <Link to="">Study With Us 3</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav__item">
          <div
            className="nav__item__row has__child"
            onClick={toggle}
            name="international"
          >
            <a href="#international">
              <span>International</span>
            </a>
            <div className="dropped__box">
              <ul>
                <li>
                  <Link to="">International 1</Link>
                </li>
                <li>
                  <Link to="">International 2</Link>
                </li>
                <li>
                  <Link to="">International 3</Link>
                </li>
                <li>
                  <Link to="">International 4</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="nav__item">
          <div
            className="nav__item__row has__child"
            onClick={toggle}
            name="industry"
          >
            <a href="#industry">
              <span>Industry</span>
            </a>
            <div className="dropped__box">
              <ul>
                <li>
                  <Link to="">Industry 1</Link>
                </li>
                <li>
                  <Link to="">Industry 2</Link>
                </li>
                <li>
                  <Link to="">Industry 3</Link>
                </li>
                <li>
                  <Link to="">Industry 4</Link>
                </li>
              </ul>
            </div>
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
