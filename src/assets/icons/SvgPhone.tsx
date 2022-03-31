import * as React from "react";

export const SvgPhone: React.FC = ({
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
        d="M18.3333 14.1V16.6C18.3343 16.8321 18.2867 17.0618 18.1937 17.2744C18.1008 17.4871 17.9644 17.678 17.7934 17.8349C17.6224 17.9918 17.4205 18.1112 17.2006 18.1856C16.9808 18.2599 16.7478 18.2875 16.5167 18.2666C13.9523 17.988 11.4892 17.1118 9.32498 15.7083C7.31151 14.4289 5.60443 12.7218 4.32499 10.7083C2.91663 8.53432 2.04019 6.05914 1.76665 3.48331C1.74583 3.25287 1.77321 3.02061 1.84707 2.80133C1.92092 2.58205 2.03963 2.38055 2.19562 2.20966C2.35162 2.03877 2.54149 1.90224 2.75314 1.80875C2.9648 1.71526 3.1936 1.66686 3.42499 1.66665H5.92499C6.32941 1.66267 6.72148 1.80588 7.02812 2.06959C7.33476 2.3333 7.53505 2.69952 7.59165 3.09998C7.69717 3.90003 7.89286 4.68558 8.17499 5.44165C8.2871 5.73992 8.31137 6.06407 8.24491 6.37571C8.17844 6.68735 8.02404 6.9734 7.79998 7.19998L6.74165 8.25831C7.92795 10.3446 9.65536 12.072 11.7417 13.2583L12.8 12.2C13.0266 11.9759 13.3126 11.8215 13.6243 11.7551C13.9359 11.6886 14.26 11.7129 14.5583 11.825C15.3144 12.1071 16.0999 12.3028 16.9 12.4083C17.3048 12.4654 17.6745 12.6693 17.9388 12.9812C18.203 13.2931 18.3435 13.6913 18.3333 14.1Z"
        stroke="#2BAEE0"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
