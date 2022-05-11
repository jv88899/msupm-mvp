import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LogoSmall from "../media/LogoSmall.svg";
import MenuIcon from "./MenuIcon";
import NavigationMenu from "./NavigationMenu";
import SearchMenu from "./SearchMenu";

export default function Header({ menuIsVisible, setMenuIsVisible }) {
  return (
    <>
      <SearchMenu />
      <NavigationMenu
        menuIsVisible={menuIsVisible}
        setMenuIsVisible={setMenuIsVisible}
      />
      <Wrapper>
        <InnerWrapper>
          <SearchIcon
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </SearchIcon>
          <Link to="/">
            <SmallLogo src={LogoSmall} alt="MSUMP logo" />
          </Link>
          <MenuIcon
            menuIsVisible={menuIsVisible}
            setMenuIsVisible={setMenuIsVisible}
          />
        </InnerWrapper>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.header`
  background-color: var(--light-primary-background-color);
  border-bottom: 2px solid var(--light-primary-headline-color);
  padding-bottom: 5px;
  position: fixed;
  width: 100%;
  z-index: 1;
`;

const InnerWrapper = styled.nav`
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

const SearchIcon = styled.svg`
  color: var(--light-primary-headline-color);
  height: 25px;
  stroke-width: 3px;
  width: 25px;
`;

const SmallLogo = styled.img``;
