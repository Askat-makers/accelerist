import React from "react";
import styled from "styled-components";
import { baseTheme } from "../helpers/baseTheme";

interface IButtonProps {
  title: string;
  theme: string;
  isDisabled?: boolean;
}

interface IThemes {
  [key: string]: () => string;
}

export const CustomButton: React.FC<IButtonProps> = ({
  title,
  theme,
  isDisabled,
}) => {
  const themes: IThemes = {
    primary: () => `
      background: ${baseTheme.colors.blue};
      color: ${baseTheme.colors.white};
      font-size: 16px;
      line-height: 23.2px;
      font-weight: 500;
    `,
  };
  const themeCSS = themes[theme]();
  return <Root $themeCSS={themeCSS}>{title}</Root>;
};

const Root = styled.button<{ $themeCSS: string }>`
  ${({ $themeCSS }) => $themeCSS}
`;
