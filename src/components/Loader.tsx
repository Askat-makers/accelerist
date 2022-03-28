import React from "react";
import { ThreeCircles } from "react-loader-spinner";
import styled from "styled-components";
import { baseTheme } from "../helpers/baseTheme";

export const Loader: React.FC = () => {
  return (
    <Root>
      <ThreeCircles
        color={baseTheme.colors.secondary_blue}
        height={110}
        width={110}
        ariaLabel="three-circles-rotating"
      />
    </Root>
  );
};

const Root = styled.div`
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
