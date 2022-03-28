import React from "react";
import styled from "styled-components";
import { SvgLinkedinLogo } from "../../../assets/icons";
import { baseTheme } from "../../../helpers/baseTheme";

export const LoginWithLinkedin: React.FC = () => {
  return (
    <Root>
      <Text>or continue with</Text>
      <a href="https://linkeding.com" target="_blank" rel="noreferrer">
        <Logo />
      </a>
    </Root>
  );
};

const Root = styled.div`
  margin-top: 32px;
  text-align: center;
`;
const Text = styled.p`
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 24px;
  color: ${baseTheme.colors.dark_gray};
`;
const Logo = styled(SvgLinkedinLogo)`
  object-fit: contain;
  width: 24px;
`;
