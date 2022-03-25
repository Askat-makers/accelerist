import React from "react";
import styled from "styled-components";

export const ErrorSpan: React.FC<{ title: string }> = ({ title }) => {
  return <CustomSpan>{title}</CustomSpan>;
};

const CustomSpan = styled.span`
  color: red;
  font-size: 12px;
  margin-top: 5px;
`;
