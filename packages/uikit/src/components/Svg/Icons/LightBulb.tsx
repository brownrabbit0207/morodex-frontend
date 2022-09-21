import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => {
  return (
    <Svg width="15" height="22" viewBox="0 0 15 22" {...props}>
      <path
        fill-fillRule="evenodd"
        clipRule="evenodd"
        d="M7.5 0H7.50933C8.02223 0 8.43255 0.415683 8.43255 0.935286V1.85168C8.43255 2.37128 8.02223 2.78696 7.5 2.77752H7.49067C6.97777 2.77752 6.56745 2.36183 6.56745 1.84223V0.935286C6.56745 0.415683 6.97777 0 7.5 0ZM1.58766 3.02315L1.95135 3.39159C2.31505 3.75059 2.31505 4.35522 1.95135 4.71422L1.94203 4.72367C1.57833 5.09211 1.00016 5.09211 0.636462 4.72367L0.27277 4.35522C-0.0909231 3.99622 -0.0909231 3.40104 0.27277 3.03259L0.282095 3.02315C0.636463 2.66415 1.22397 2.6547 1.58766 3.02315ZM14.7272 3.03259C14.3635 2.66415 13.776 2.66415 13.4123 3.02315L13.0486 3.39159C12.685 3.76004 12.685 4.35522 13.0486 4.71422L13.058 4.72367C13.4217 5.09211 14.0092 5.09211 14.3635 4.72367L14.7272 4.35522C15.0909 3.98677 15.0909 3.40104 14.7272 3.03259ZM5.72727 15.8182L4.95455 15.2727C3.72727 14.4182 3 13.0273 3 11.5455C3 9.03636 5.03636 7 7.54545 7C10.0545 7 12.0909 9.03636 12.0909 11.5455C12.0909 13.0273 11.3636 14.4182 10.1364 15.2727L9.36364 15.8182V17H7.54545H5.72727V15.8182ZM11.1818 16.7603C12.8903 15.5676 13.9091 13.6233 13.9091 11.5455C13.9091 8.03221 11.0587 5.18182 7.54545 5.18182C4.03221 5.18182 1.18182 8.03221 1.18182 11.5455C1.18182 13.6233 2.2006 15.5676 3.90909 16.7603V17C3.90909 18.0042 4.72312 18.8182 5.72727 18.8182H9.36364C10.3678 18.8182 11.1818 18.0042 11.1818 17V16.7603ZM5 21C5 21.55 5.45 22 6 22H9C9.55 22 10 21.55 10 21V20H5V21Z"
      />
    </Svg>
  );
};
