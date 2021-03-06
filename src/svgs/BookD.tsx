import * as React from "react";
import { SVGProps } from "react";

const SvgBookD = (props: SVGProps<SVGSVGElement>) => (
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
      d="M63 0v27h-9v9h-9v-9H27v9h-9v-9H9V0H0v198h9v9h54v-9h9V0h-9z"
      style={{
        fill: "#af42f6",
      }}
    />
    <path d="M27.6 180.1v-2.5h2.1v-12.9h-2.1v-2.4c7.2-.3 17.7-.9 17.3 8.7.5 9.8-9.8 9.5-17.3 9.1zm8.4-2.4c9.3-.6 8.6-15.1-3.6-12.9v12.9H36z" />
    <path
      d="M54 0H9v27h9v9h36v-9h9V0h-9z"
      style={{
        fill: "#e7dfef",
      }}
    />
  </svg>
);

export default SvgBookD;
