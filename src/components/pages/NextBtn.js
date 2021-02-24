import React from "react";

const NextBtn = ({ onClick }) => {
  return (
    <>
      <button className="next__btn" onClick={onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12.121"
          height="20.835"
          viewBox="0 0 12.121 20.835"
        >
          <path
            id="Path_30"
            data-name="Path 30"
            d="M687.4,846.692a.986.986,0,0,0,.008-1.384l-9.586-9.439a.978.978,0,0,0-1.383,0l-.578.578a.978.978,0,0,0,0,1.383l8.317,8.17-8.325,8.17a.978.978,0,0,0,0,1.383l.578.578a.978.978,0,0,0,1.383,0Z"
            transform="translate(-675.568 -835.583)"
            fill="#282828"
          />
        </svg>
      </button>
    </>
  );
};

export default NextBtn;
