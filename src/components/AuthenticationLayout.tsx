import React from "react";
import styled from "styled-components";
import { AuthBackgroundImage, AuthHeaderLogo } from "../assets/images";

export const AuthenticationLayout: React.FC = ({ children }) => {
  return (
    <Root>
      <Header>
        <HeaderImage src={AuthHeaderLogo} />
      </Header>
      <Body>{children}</Body>
    </Root>
  );
};

const Root = styled.div`
  background-image: url(${AuthBackgroundImage});
  background-size: contain;
  background-position: center;
  height: 100vh;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #222222;
`;
const HeaderImage = styled.img`
  width: 201px;
  height: 36px;
  object-fit: contain;
  margin: 22px 0;
`;
const Body = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
