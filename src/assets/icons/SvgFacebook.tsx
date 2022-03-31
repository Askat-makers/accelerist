import * as React from "react";

export const SvgFacebook: React.FC = ({
  fill = "#8E9294",
  ...rest
}: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 20C15.5228 20 20 15.5228 20 10C20 4.47715 15.5228 0 10 0C4.47715 0 0 4.47715 0 10C0 15.5228 4.47715 20 10 20Z"
        fill="#3B5998"
      />
      <path
        d="M12.5142 10.3915H10.7299V16.9286H8.02639V10.3915H6.7406V8.09404H8.02639V6.60736C8.02639 5.54422 8.53139 3.87946 10.7539 3.87946L12.7565 3.88783V6.11786H11.3035C11.0652 6.11786 10.73 6.23694 10.73 6.74409V8.09618H12.7504L12.5142 10.3915Z"
        fill="white"
      />
    </svg>
  );
};
