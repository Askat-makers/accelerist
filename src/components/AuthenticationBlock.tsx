import React from "react";
import styled from "styled-components";

interface IAuthenticationBlockProps {
  title: string;
  titleMarginBottom: number;
}

export const AuthenticationBlock: React.FC<IAuthenticationBlockProps> = ({
  title,
  titleMarginBottom,
  children,
}) => {
  return (
    <Root>
      <Title marginBottom={titleMarginBottom}>{title}</Title>
      {children}
    </Root>
  );
};

const Root = styled.div`
  padding: 40px;
  background-color: #ffffff;
  margin-top: 73px;
  border-radius: 3px;
  max-width: 454px;
  width: 100%;
`;
const Title = styled.h2<{ marginBottom: number }>`
  color: #122434;
  font-size: 24px;
  line-height: 148%;
  font-weight: 500;
  text-align: center;
  margin-bottom: ${(props) => props.marginBottom}px;
`;
