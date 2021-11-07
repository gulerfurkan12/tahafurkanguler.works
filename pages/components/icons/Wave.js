import * as React from "react";

export default function SvgWave(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 211" {...props}>
      <path
        className="wave_svg__st2"
        d="M-5 .5l30.1 4.4c30.1 4.7 90.3 12.9 150.5 8.8S296-8.5 356.3 4.9c60.2 12.9 120.4 57.3 180.6 65.8 60.2 8.8 120.4-17.5 180.6-8.7 60.2 8.5 120.4 52.9 180.6 74.5 60.2 22 120.4 22 180.6 0 60.2-21.6 120.4-66 180.6-83.3 60.2-17.3 120.4-9 150.5-4.4l30.1 4.4V211H-5V.5z"
      />
    </svg>
  );
}

