import React from "react";
import styled from "styled-components";

interface IInputProps {
  placeholder: string;
  type: string;
  name: string;
  value?: string;
  padding: string;
  width?: string;
  backgroundColor?: string;
  maxWidth?: string;
  minWidth?: string;
  color?: string;
  border?: string;
}

export const Input: React.FC<IInputProps> = ({
  padding,
  width = "100%",
  backgroundColor = "#fff",
  maxWidth = "unset",
  minWidth = "unset",
  color = "unset",
  border = "1px solid #e8e8e8",
  ...rest
}) => {
  return (
    <CustomInput
      {...rest}
      padding={padding}
      width={width}
      backgroundColor={backgroundColor}
      maxWidth={maxWidth}
      minWidth={minWidth}
      color={color}
      border={border}
    />
  );
};

interface IStyles {
  padding: string;
  width: string;
  backgroundColor: string;
  maxWidth?: string;
  minWidth?: string;
  color?: string;
  border?: string;
}

const CustomInput = styled.input<IStyles>`
  background-color: ${(props) => props.backgroundColor};
  border-radius: 6px;
  outline: none;
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  max-width: ${(props) => props.maxWidth};
  min-width: ${(props) => props.minWidth};
  color: ${(props) => props.color};
`;
