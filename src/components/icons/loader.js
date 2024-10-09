import React from "react";

const IconLoader = () => (
  <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <title>Loader Logo</title>
    <g>
      {/* <g id='B' transform='translate(11.000000, 5.000000)'>
        <path
          d='M 45 47 L 53 61 V 61 L 28.5417 61 L 28.5417 30.3 L 39.2917 30.3 C 45.6917 30.3 49.6917 33.15 49.6917 38.65 C 49.6917 41.95 47.9417 44.35 45 47 Z M 33.5917 43.2 L 39.2417 43.2 C 42.7917 43.2 44.6917 41.85 44.6917 38.95 C 44.6917 36.05 42.7917 34.8 39.2417 34.8 L 33.5917 34.8 L 33.5917 43.2 Z M 33.5917 47.5 L 33.5917 56.5 M 33.6 61 H 46.8 L 39.5 47.5 L 33.5917 47.5 Z'
          fill='currentColor'
        />
      </g> */}
      <text
        id="B"
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill="currentColor"
        fontWeight="400"
        fontSize="53px"
        textLength="46"
        lengthAdjust="spacingAndGlyphs"
      >
        M
      </text>
      <path
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M 50, 5
                  L 11, 27
                  L 11, 72
                  L 50, 95
                  L 89, 73
                  L 89, 28 z"
      />
    </g>
  </svg>
);

export default IconLoader;
