import React from "react";

export default function Play(props) {
  const { handleClick } = props;

  return (
    <button className="player__button" onClick={() => handleClick()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="105.27"
        height="105.27"
        viewBox="0 0 105.27 105.27"
      >
        <g
          id="Group_623"
          data-name="Group 623"
          transform="translate(-11799.941 -108.201)"
        >
          <circle
            id="Ellipse_21"
            data-name="Ellipse 21"
            cx="51.635"
            cy="51.635"
            r="51.635"
            transform="translate(11800.941 109.201)"
            fill="none"
            stroke="#0a5dc1"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <path
            id="Path_1527"
            data-name="Path 1527"
            d="M11844.289,144.587l24.927,16.256-24.9,16.241Z"
            fill="#0a5dc1"
          />
        </g>
      </svg>
    </button>
  );
}
