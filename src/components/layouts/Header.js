import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__row">
          <div className="search">
            <form>
              <input type="text" />
            </form>
          </div>
          <div className="sec__nav">
            <nav>
              <ul>
                <li>
                  <Link to="/careers">Careers</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contacts">Contacts</Link>
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
