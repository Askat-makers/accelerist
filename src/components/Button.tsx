import React from "react";
import styled from "styled-components";

interface IButtonProps {
  title: string;
  type: "button" | "submit";
  isDisabled?: boolean;
  isLoading?: boolean;
  bgColor: string;
  color: string;
  paddingTop: string;
  paddingBottom: string;
  fsz: string;
  fw: string;
  width: string;
  border?: string;
  marginRight?: string;
  handleClick?: () => void;
}

export const Button: React.FC<IButtonProps> = ({
  title,
  type = "button",
  isDisabled = false,
  isLoading = false,
  bgColor,
  color,
  paddingTop,
  paddingBottom,
  fsz,
  fw,
  width,
  border = "none",
  marginRight = "unset",
  handleClick,
}) => {
  return (
    <CustomButton
      disabled={isDisabled || isLoading}
      type={type}
      bgColor={bgColor}
      color={color}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      fsz={fsz}
      fw={fw}
      width={width}
      border={border}
      marginRight={marginRight}
      onClick={handleClick}
    >
      {isLoading ? "load..." : title}
    </CustomButton>
  );
};

interface IStyles {
  bgColor: string;
  color: string;
  paddingTop: string;
  paddingBottom: string;
  fsz: string;
  fw: string;
  width: string;
  disabled: boolean;
  border: string;
  marginRight: string;
}

const CustomButton = styled.button<IStyles>`
  color: ${(props) => props.color};
  font-size: ${(props) => props.fsz};
  padding-top: ${(props) => props.paddingTop};
  padding-bottom: ${(props) => props.paddingBottom};
  font-weight: ${(props) => props.fw};
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.width};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  border: ${(props) => props.border};
  border-radius: 6px;
  margin-right: ${(props) => props.marginRight};
  cursor: pointer;
`;
