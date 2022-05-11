import styled from "styled-components";
import SearchForm from "./SearchForm";

export default function SearchMenu({
  searchFormIsVisible,
  setSearchFormIsVisible
}) {
  return (
    <Wrapper searchFormIsVisible={searchFormIsVisible}>
      <InnerWrapper>
        <CloseButton
          onClick={() => setSearchFormIsVisible(!searchFormIsVisible)}
        >
          <CloseButtonIcon
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
              d="M6 18L18 6M6 6l12 12"
            />
          </CloseButtonIcon>
        </CloseButton>
        <SearchForm />
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--light-primary-background-color);
  box-shadow: var(--shadow-elevation-medium);
  height: 136px;
  padding: 8px;
  position: absolute;
  top: 0;
  transform: ${({ searchFormIsVisible }) =>
    searchFormIsVisible ? "translateY(0)" : "translateY(-115%)"};
  transition: all 0.3s ease-in-out;
  width: 100%;
  z-index: 2;
`;

const InnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const CloseButton = styled.button`
  align-self: flex-end;
  background: none;
  border: none;
  color: var(--light-primary-headline-color);
  height: 48px;
  width: 48px;
`;

const CloseButtonIcon = styled.svg``;
