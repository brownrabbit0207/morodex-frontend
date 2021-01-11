import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
    <path d="M15.3057 16.1849C15.8844 15.9266 16.4842 15.75 17 15.75C17.6802 15.75 18.3939 15.8341 19.0713 15.9598C19.4786 16.0353 19.87 15.7664 19.9456 15.3592C20.0211 14.9519 19.7523 14.5605 19.345 14.4849C18.6056 14.3477 17.7969 14.25 17 14.25C16.1825 14.25 15.36 14.5181 14.6944 14.8151C14.3161 14.9839 14.1463 15.4274 14.3151 15.8056C14.4839 16.1839 14.9274 16.3537 15.3057 16.1849Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 5.85855C10.8901 5.28809 8.91267 4.5 7 4.5C4.82602 4.5 2.52707 5.21214 1.62861 5.57152C1.24895 5.72339 1 6.0911 1 6.5V19.5C1 19.7996 1.13432 20.0834 1.36601 20.2733C1.5977 20.4633 1.90234 20.5393 2.19612 20.4806C2.98922 20.322 5.08674 20 7 20C8.73758 20 10.7177 20.8973 11.4837 21.3564C11.4915 21.3611 11.4993 21.3657 11.5073 21.3702C11.8124 21.543 12.1865 21.5436 12.4927 21.3702C12.5007 21.3657 12.5085 21.3611 12.5163 21.3564C13.2823 20.8973 15.2624 20 17 20C18.9133 20 21.0108 20.322 21.8039 20.4806C22.0977 20.5393 22.4023 20.4633 22.634 20.2733C22.8657 20.0834 23 19.7996 23 19.5V6.5C23 6.0911 22.751 5.72339 22.3714 5.57152C21.4729 5.21214 19.174 4.5 17 4.5C15.0873 4.5 13.1099 5.28809 12 5.85855ZM7 18C8.42616 18 9.88831 18.4382 11 18.8976V7.59336C10.0573 7.12035 8.4448 6.5 7 6.5C5.55289 6.5 3.97492 6.89014 3 7.20499V18.318C4.08257 18.1605 5.576 18 7 18ZM13 7.59336V18.8976C14.1117 18.4382 15.5738 18 17 18C18.424 18 19.9174 18.1605 21 18.318V7.20499C20.0251 6.89014 18.4471 6.5 17 6.5C15.5552 6.5 13.9427 7.12035 13 7.59336Z"
    />
  </Svg>
);

export default Icon;
