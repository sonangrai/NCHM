import React, { forwardRef } from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <span>
          Designed & Developed by{" "}
          <a target="_blank" href="https://www.thesunbi.com/" rel="noreferrer">
            SunBi
          </a>
        </span>
        <span>Student Notice</span>
      </div>
      <div className="float__notice" id="notice">
        Student Notice Here
      </div>
    </>
  );
};

export default Footer;
