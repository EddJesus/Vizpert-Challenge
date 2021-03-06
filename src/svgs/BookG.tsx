import * as React from "react";
import { SVGProps } from "react";

const SvgBookG = (props: SVGProps<SVGSVGElement>) => (
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
      d="M54 45H9v54h9v9h36v-9h9V45h-9z"
      style={{
        fill: "#e7dfef",
      }}
    />
    <path
      d="M63 36v63h-9v9H18v-9H9V36H0v162h9v9h54v-9h9V36h-9z"
      style={{
        fill: "#f460d4",
      }}
    />
    <path d="M43.7 164.1c0 1.2 0 2.5-.1 3.8h-2.4l-.1-2.6c-14.5-5.8-12.9 19.2.5 11V173h-5.3v-2.3H44v6.5c-5.1 6.7-17 1.6-15.9-6-.6-7.6 9.4-12.1 15.6-7.1z" />
  </svg>
);

export default SvgBookG;
