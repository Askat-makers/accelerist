import React from "react";
import styled from "styled-components";
import { LinkedinLogo } from "../../../assets/images";

export const LoginWithLinkedin = () => {
  return (
    <Root>
      <Text>or continue with</Text>
      <a href="https://linkeding.com" target="_blank" rel="noreferrer">
        <Logo src={LinkedinLogo} alt="Linkedin logo" />
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
  color: #737373;
`;
const Logo = styled.img`
  object-fit: contain;
  width: 24px;
`;
