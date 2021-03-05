import React from "react";

const PreviousBtn = ({ onClick }) => {
  return (
    <>
      <button className="previous__btn" onClick={onClick}>
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
    </>
  );
};

export default PreviousBtn;
