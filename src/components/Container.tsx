import React from "react";
import styled from "styled-components";

export const Container: React.FC = ({ children }) => {
  return <CustomContainer>{children}</CustomContainer>;
};
const CustomContainer = styled.div`
  max-width: 1360px;
  width: 90%;
  margin: 0 auto;
`;
