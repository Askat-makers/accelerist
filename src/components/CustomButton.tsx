import React from "react";
import styled from "styled-components";

interface IButtonProps {
  title: string;
}

export const CustomButton: React.FC<IButtonProps> = ({ title }) => {
  const themes = {
    primary: () => {
      return `
            color: 
        `;
    },
  };
  return <Root>{title}</Root>;
};

const Root = styled.button``;
