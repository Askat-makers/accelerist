import * as React from "react";

export const SvgMenu: React.FC = ({
  fill = "#8E9294",
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="3" y="4" width="18" height="2" rx="1" fill="#122434" />
      <rect x="3" y="11" width="18" height="2" rx="1" fill="#122434" />
      <rect x="3" y="18" width="18" height="2" rx="1" fill="#122434" />
    </svg>
  );
};
