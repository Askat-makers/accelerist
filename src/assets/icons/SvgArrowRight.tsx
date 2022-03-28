import * as React from "react";

export const SvgArrowRight: React.FC = ({
  fill = "#8E9294",
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="11"
      height="18"
      viewBox="0 0 11 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.376577 0.376577C0.87868 -0.125526 1.69275 -0.125526 2.19485 0.376577L9.90914 8.09086C10.4112 8.59297 10.4112 9.40703 9.90914 9.90914L2.19485 17.6234C1.69275 18.1255 0.87868 18.1255 0.376577 17.6234C-0.125526 17.1213 -0.125526 16.3073 0.376577 15.8051L7.18173 9L0.376577 2.19485C-0.125526 1.69275 -0.125526 0.87868 0.376577 0.376577Z"
        fill="black"
      />
    </svg>
  );
};
