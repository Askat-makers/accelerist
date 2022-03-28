import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { SvgXmark } from "../assets/icons";
import { AltUserLogo } from "../assets/images";
import { INavItem, IUser } from "../types";

interface INavMobile {
  navItems: INavItem[];
  pathname: string;
  isLogout: boolean;
  user: IUser | null;
  handleLogout: () => void;
  closeNav: () => void;
  onUserPressed: () => void;
}

export const NavMobile: React.FC<INavMobile> = ({
  navItems,
  pathname,
  isLogout,
  user,
  closeNav,
  handleLogout,
  onUserPressed,
}) => {
  return (
    <Root>
      <Nav>
        <span onClick={closeNav}>
          <CancelIcon />
        </span>
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
        <UserBlock onClick={onUserPressed}>
          <UserImage
            src={user?.user.avatarKey || AltUserLogo}
            alt="User photo"
          />
          <Username>
            {user?.user.firstName} {user?.user.lastName}
          </Username>
          {isLogout && <LogOut onClick={handleLogout}>Logout</LogOut>}
        </UserBlock>
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
  @media all and (min-width: 1024px) {
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
const CancelIcon = styled(SvgXmark)`
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
const UserBlock = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  flex-wrap: wrap;
`;
const UserImage = styled.img`
  object-fit: contain;
  margin-right: 12px;
`;
const Username = styled.h5`
  font-weight: 400;
  font-size: 16px;
  line-height: 155%;
  color: #122434;
`;
const LogOut = styled.button`
  background-color: white;
  width: 100%;
  padding: 5px;
  color: red;
  border: 1px solid red;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
`;
