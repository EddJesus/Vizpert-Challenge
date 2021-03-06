import * as React from "react";
import { SVGProps } from "react";

const SvgBookB = (props: SVGProps<SVGSVGElement>) => (
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
      d="M63 27v54h-9v9h-9v-9H27v9h-9v-9H9V27H0v171h9v9h54v-9h9V27h-9z"
      style={{
        fill: "#eb3929",
      }}
    />
    <path d="M30.2 180.1v-2.5h2.1v-12.9h-2.1v-2.4h9.6c5.1-.8 8.7 6 3.5 8.6 6.1 2.6 2.1 10.3-3.5 9.1 0 .1-9.6.1-9.6.1zm4.7-10.3c2.1-.1 8.4.8 8.3-2.3.2-3.9-5.9-2.4-8.3-2.7v5zm0 7.9c2.6-.4 8.4 1.4 8.7-2.7-.3-3.9-6.2-2.6-8.7-2.8v5.5z" />
    <path
      d="M54 36H9v45h9v9h36v-9h9V36h-9z"
      style={{
        fill: "#e7dfef",
      }}
    />
  </svg>
);

export default SvgBookB;
