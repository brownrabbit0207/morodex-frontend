import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<React.PropsWithChildren<SvgProps>> = (props) => (
  <Svg viewBox="0 0 24 24" {...props}>
    <path d="M5.98327 15.2932C7.57238 14.6803 9.69993 14.3224 12 14.3224C14.3001 14.3224 16.4276 14.6803 18.0167 15.2932C18.808 15.5984 19.5168 15.9864 20.0451 16.4682C20.5739 16.9503 21 17.6045 21 18.4081C21 20.1597 19.6652 21.6227 17.921 21.7829L17.7834 21.7955C13.9359 22.1489 10.0641 22.1489 6.21662 21.7955L6.07901 21.7829C4.33478 21.6227 3 20.1597 3 18.4081C3 17.6045 3.42611 16.9503 3.95486 16.4682C4.48317 15.9864 5.19201 15.5984 5.98327 15.2932Z" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.7256 1C8.72367 1 7.96795 1.90072 8.15187 2.87568L8.58709 5.18266C7.11275 5.82653 6 6.93833 6 8.33333V9.18182C6 10.3351 6.77077 11.3007 7.84829 11.9526C8.93423 12.6095 10.4033 13 12 13C13.5967 13 15.0658 12.6095 16.1517 11.9526C17.2292 11.3007 18 10.3351 18 9.18182V8.33333C18 6.9309 16.8757 5.81482 15.3888 5.17222L15.8221 2.87568C16.006 1.90072 15.2503 1 14.2483 1C13.3642 1 12.6474 1.70952 12.6474 2.58476V4.53674C12.4347 4.52247 12.2187 4.51515 12 4.51515C11.7724 4.51515 11.5477 4.52308 11.3265 4.53853V2.58476C11.3265 1.70952 10.6098 1 9.7256 1Z"
    />
  </Svg>
);

export default Icon;
