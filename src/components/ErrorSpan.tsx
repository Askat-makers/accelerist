import React from "react";
import styled from "styled-components";
import { baseTheme } from "../helpers/baseTheme";

export const ErrorSpan: React.FC<{ title: string }> = ({ title }) => {
  return <CustomSpan>{title}</CustomSpan>;
};

const CustomSpan = styled.span`
  color: ${baseTheme.colors.red};
  font-size: 12px;
  margin-top: 5px;
`;
