import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg viewBox="0 0 1024 1024" {...props}>
      <g>
        <path d="M1041.52 0H-27V1024H1041.52V0Z" fill="#2980FE" />
        <g clipPath="url(#clip0_408_225)">
          <path d="M406.796 438.643H406.927C406.796 437.857 406.796 436.94 406.796 436.154V438.643Z" fill="#29AEFF" />
          <path
            d="M667.602 463.533H523.249V724.076C523.249 736.389 533.204 746.345 545.517 746.345H645.333C657.647 746.345 667.602 736.389 667.602 724.076V463.533Z"
            fill="white"
          />
          <path
            d="M453.563 277H448.716H190.269C177.955 277 168 286.955 168 299.269V389.653C168 401.967 177.955 411.922 190.269 411.922H250.918H275.021V438.644V724.731C275.021 737.045 284.976 747 297.289 747H392.128C404.441 747 414.396 737.045 414.396 724.731V438.644V436.156V411.922H438.499H448.323H453.17C490.372 411.922 520.631 381.663 520.631 344.461C521.024 307.259 490.765 277 453.563 277Z"
            fill="white"
          />
          <path
        >
          <stop stopColor="white" />
          <stop offset="0.9667" stopColor="white" stopOpacity="0.3233" />
          <stop offset="1" stopColor="white" stopOpacity="0.3" />
        </linearGradient>
        <clipPath id="clip0_408_225">
          <rect width="728.448" height="470" fill="white" transform="translate(168 277)" />
        </clipPath>
      </defs>
    </Svg>
  );
};

export default Icon;
