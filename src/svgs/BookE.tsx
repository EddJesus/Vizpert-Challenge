import * as React from "react";
import { SVGProps } from "react";

const SvgBookE = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 72.5 207"
        style={{
      // @ts-ignore
      enableBackground: "new 0 0 72.5 207",
    }}
    xmlSpace="preserve"
    width="1em"
    height="1em"
    {...props}
  >
    <path
      d="M54 63H9v45h9v9h36v-9h9V63h-9z"
      style={{
        fill: "#e7dfef",
      }}
    />
    <path
      d="M63 54v54h-9v9H18v-9H9V54H0v144h9v9h54v-9h9V54h-9z"
      style={{
        fill: "#40a7f6",
      }}
    />
    <path d="m41.3 177.6.1-2.7h2.4v5.2h-15v-2.5h2.1v-12.9h-2.1v-2.4h14.6v5.1H41l-.1-2.7h-7.4v5H41v2.5h-7.5v5.3h7.8z" />
  </svg>
);

export default SvgBookE;
