import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { NavMobile } from ".";
import { SvgMenu } from "../assets/icons";
import { AltUserLogo, NavLogo } from "../assets/images";
import { baseTheme } from "../helpers/baseTheme";
import { useAppDispatch, useAppSelector } from "../helpers/customHooks";
import { logOut } from "../store/reducers/AuthenticationSlice";
import { INavItem } from "../types";
import { Container } from "./Container";

const navItems: INavItem[] = [
  {
    url: "/dashboard",
    title: "Dashboard",
  },
  {
    url: "/audience",
    title: "Audience",
  },
  {
    url: "/pricing",
    title: "Pricing",
  },
  {
    url: "/prospecting",
    title: "Prospecting",
  },
  {
    url: "/ROI",
    title: "ROI",
  },
  {
    url: "/upgrade-membership",
    title: "Upgrade Membership",
  },
];

export const Navbar: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState<boolean>(false);
  const [isLogout, setIsLogout] = useState<boolean>(false);
  const user = useAppSelector((state) => state.auth.user);
  const dispatch = useAppDispatch();
  const location = useLocation();

  const openAndCloseNav = () => {
    setIsMobileNavOpen((state) => !state);
  };

  const onUserPressed = () => {
    setIsLogout((isLogout) => !isLogout);
  };

  const handleLogout = () => {
    dispatch(logOut());
    setIsLogout((isLogout) => !isLogout);
  };

  return (
    <CustomNavbar>
      <Container>
        <Nav>
          <NavLeft>
            <Link to="/">
              <Logo src={NavLogo} />
            </Link>
            <NavList>
              {navItems.map((navItem) => (
                <NavItem
                  key={navItem.title}
                  active={navItem.url === location.pathname ? "500" : "400"}
                >
                  <Link to={navItem.url}>{navItem.title}</Link>
                </NavItem>
              ))}
            </NavList>
          </NavLeft>
          <NavRight>
            <BurgerMenu onClick={openAndCloseNav}>
              <SvgMenu />
            </BurgerMenu>
            <UserBlock onClick={onUserPressed}>
              <UserImage
                src={user?.user.avatarKey || AltUserLogo}
                alt="User photo"
              />
              <Username>
                {user?.user.firstName} {user?.user.lastName}
              </Username>
            </UserBlock>
            {isLogout && <LogOut onClick={handleLogout}>Logout</LogOut>}
          </NavRight>
          {isMobileNavOpen && (
            <NavMobile
              navItems={navItems}
              closeNav={openAndCloseNav}
              pathname={location.pathname}
              isLogout={isLogout}
              handleLogout={handleLogout}
              user={user}
              onUserPressed={onUserPressed}
            />
          )}
        </Nav>
      </Container>
    </CustomNavbar>
  );
};

const CustomNavbar = styled.div`
  background-color: #d5f3ff;
`;
const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 18px;
  padding-bottom: 18px;
`;
const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;
const Logo = styled.img`
  object-fit: contain;
`;
const NavList = styled.ul`
  display: flex;
  align-items: center;
  margin-left: 48px;
  @media all and (max-width: 1024px) {
    display: none;
  }
`;
const NavItem = styled.li<{ active: string }>`
  color: ${baseTheme.colors.black};
  font-size: 12px;
  line-height: 150%;
  margin-right: 28px;
  font-weight: ${(props) => props.active};
`;

const NavRight = styled.div`
  position: relative;
`;
const LogOut = styled.button`
  background-color: ${baseTheme.colors.white};
  width: 100%;
  padding: 5px;
  color: ${baseTheme.colors.red};
  border: 1px solid red;
  margin-top: 10px;
  position: absolute;
  left: 0;
  cursor: pointer;
  border-radius: 4px;
  @media all and (max-width: 1024px) {
    display: none;
  }
`;

const BurgerMenu = styled.button`
  font-size: 24px;
  cursor: pointer;
  border: none;
  background: transparent;
  @media all and (min-width: 1024px) {
    display: none;
  }
`;
const UserBlock = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media all and (max-width: 1024px) {
    display: none;
  }
`;
const UserImage = styled.img`
  object-fit: contain;
  margin-right: 12px;
`;
const Username = styled.h5`
  font-weight: 400;
  font-size: 12px;
  line-height: 18px;
  color: ${baseTheme.colors.black};
`;
