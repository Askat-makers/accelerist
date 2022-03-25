import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { INavItem } from "../types";

interface INavMobile {
  navItems: INavItem[];
  pathname: string;
  closeNav: () => void;
}

export const NavMobile: React.FC<INavMobile> = ({
  navItems,
  pathname,
  closeNav,
}) => {
  return (
    <Root>
      <Nav>
        <CancelIcon icon={faXmark} onClick={closeNav} />
        <NavList>
          {navItems.map((navItem) => (
            <NavItem
              key={navItem.title}
              active={pathname === navItem.url ? "500" : "400"}
            >
              <Link to={navItem.url}>{navItem.title}</Link>
            </NavItem>
          ))}
        </NavList>
      </Nav>
    </Root>
  );
};

const Root = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  z-index: 1;
  background-color: rgba(0, 0, 0, 0.5);
  right: 0;
  top: 0;
  display: flex;
  justify-content: flex-end;
  @media all and (min-width: 768px) {
    display: none;
  }
`;
const NavAnimation = keyframes`
  from {
    width: 0;
    padding-right: 0;
  }
  to {
    width: 100%;
    padding-right: 38px;
  }
`;
const Nav = styled.div`
  max-width: 375px;
  width: 100%;
  height: 100%;
  background-color: white;
  padding-top: 34px;
  padding-left: 40px;
  padding-right: 38px;
  display: flex;
  flex-direction: column;
  animation-name: ${NavAnimation};
  animation-duration: 1.5s;
  animation-iteration-count: 1;
`;
const CancelIcon = styled(FontAwesomeIcon)`
  cursor: pointer;
  align-self: flex-end;
  font-size: 24px;
  color: #737373;
  margin-bottom: 80px;
`;
const NavList = styled.ul``;
const NavItem = styled.li<{ active: string }>`
  color: #122434;
  font-size: 16px;
  line-height: 155%;
  margin-bottom: 32px;
  font-weight: ${(props) => props.active};
`;
