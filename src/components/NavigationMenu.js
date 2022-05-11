import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavigationMenu({ menuIsVisible, setMenuIsVisible }) {
  return (
    <Wrapper menuIsVisible={menuIsVisible}>
      <InnerWrapper>
        <NavigationLink to="/" onClick={() => setMenuIsVisible(!menuIsVisible)}>
          Home
        </NavigationLink>
        <NavigationLink
          to="/albums"
          onClick={() => setMenuIsVisible(!menuIsVisible)}
        >
          Albums
        </NavigationLink>
        <NavigationLink
          to="/collections"
          onClick={() => setMenuIsVisible(!menuIsVisible)}
        >
          Collections
        </NavigationLink>
        <NavigationLink
          to="/about"
          onClick={() => setMenuIsVisible(!menuIsVisible)}
        >
          About
        </NavigationLink>
        <NavigationLink
          to="/statistics"
          onClick={() => setMenuIsVisible(!menuIsVisible)}
        >
          Statistics
        </NavigationLink>
        <LoginSignupButton>
          <LoginSignupButtonIcon
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </LoginSignupButtonIcon>
          Login / Signup
        </LoginSignupButton>
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  background-color: var(--light-primary-background-color);
  border-left: 2px solid var(--light-primary-headline-color);
  height: calc(100vh - 86px);
  padding-top: 5px;
  position: absolute;
  right: 0;
  top: 86px;
  transform: ${({ menuIsVisible }) =>
    menuIsVisible ? "translateX(0)" : "translateX(100%)"};
  transition: all 0.3s ease-in-out;
  width: 90%;
  z-index: 1;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  padding-left: 8px;
  padding-right: 8px;
  width: 100%;
`;

const NavigationLink = styled(Link)`
  color: var(--light-primary-headline-color);
  font-family: var(--navigation-menu-item-font);
  font-size: 22px;
  font-weight: bold;
  letter-spacing: 1.2px;
  padding: 12px;
  text-decoration: none;
`;

const LoginSignupButton = styled.button`
  align-items: center;
  background-color: var(--light-primary-headline-color);
  border: none;
  border-radius: 40px;
  color: var(--light-primary-background-color);
  display: flex;
  font-family: var(--navigation-menu-item-font);
  font-weight: bold;
  justify-content: center;
  letter-spacing: 1.2px;
  margin-top: 12px;
  padding: 16px 0;
`;

const LoginSignupButtonIcon = styled.svg`
  height: 24px;
  padding-right: 12px;
  width: auto;
`;
