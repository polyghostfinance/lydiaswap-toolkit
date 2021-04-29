import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <g id="soil-copy">
        <path
          id="Path"
          d="M18.079 19.079 C17.825 19.079 17.579 19.111 17.345 19.172 16.992 17.955 15.87 17.065 14.539 17.065 14.286 17.065 14.04 17.098 13.805 17.159 13.452 15.942 12.33 15.052 11 15.052 9.67 15.052 8.548 15.942 8.195 17.159 7.96 17.098 7.714 17.065 7.461 17.065 6.13 17.065 5.008 17.955 4.655 19.172 4.421 19.111 4.175 19.079 3.921 19.079 2.308 19.079 1 20.387 1 22 L21 22 C21 20.387 19.692 19.079 18.079 19.079 Z"
          fill-opacity="1"
          stroke="none"
        />
        <path
          id="Path-1"
          d="M11.586 3.172 L13.308 3.172 13.308 2 8.692 2 8.692 3.172 10.414 3.172 10.414 10.26 11.586 10.26 Z"
          fill-opacity="1"
          stroke="none"
        />
        <path
          id="Path-2"
          d="M8.52 14.717 C9.238 14.17 10.095 13.88 11 13.88 11.905 13.88 12.762 14.17 13.48 14.717 13.617 14.822 13.745 14.935 13.867 15.055 L14.082 14.824 14.082 10.26 11.586 10.26 11.586 12.375 10.414 12.375 10.414 10.26 7.918 10.26 7.918 14.824 8.133 15.055 C8.255 14.935 8.383 14.822 8.52 14.717 Z"
          fill-opacity="1"
          stroke="none"
        />
      </g>
    </Svg>
  );
};

export default Icon;
