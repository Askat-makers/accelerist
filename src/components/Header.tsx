import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Container } from ".";
import { SvgArrowLeft } from "../assets/icons";
import { baseTheme } from "../helpers/baseTheme";

export const Header: React.FC<{ title: string; goBack?: boolean }> = ({
  title,
  goBack = false,
}) => {
  const navigate = useNavigate();
  return (
    <Root>
      <Container>
        <Wrapper>
          {goBack && (
            <Cursor onClick={() => navigate(-1)}>
              <SvgArrowLeft />
            </Cursor>
          )}
          <Title goBack={goBack}>{title}</Title>
        </Wrapper>
      </Container>
    </Root>
  );
};

const Root = styled.div`
  padding: 24px 0;
  background-color: ${baseTheme.colors.white};
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
const Title = styled.h2<{ goBack: boolean }>`
  color: ${baseTheme.colors.black};
  font-size: 32px;
  line-height: 48px;
  font-weight: 500;
  margin-left: ${(props) => (props.goBack ? "22px" : "0")};
`;

const Cursor = styled.span`
  cursor: pointer;
`;
