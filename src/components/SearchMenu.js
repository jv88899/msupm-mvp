import styled from "styled-components";

export default function SearchMenu({
  searchFormIsVisible,
  setSearchFormIsVisible
}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

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
        <SearchFieldWrapper onClick={(e) => handleSubmit(e)}>
          <SearchInput
            type="text"
            name="search"
            placeholder="Search by artist, album, label or song"
          />
          <SearchInputButton>
            <SearchInputIcon
              xmlns="http://www.w3.org/2000/svg"
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
            </SearchInputIcon>
          </SearchInputButton>
        </SearchFieldWrapper>
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

const SearchFieldWrapper = styled.form`
  height: 70%;
  width: 100%;
`;

const SearchInput = styled.input`
  align-self: end;
  background: none;
  border: 2px solid var(--light-primary-headline-color);
  border-radius: 40px;
  color: var(--light-primary-headline-color);
  font-family: var(--navigation-menu-item-font);
  font-weight: bold;
  height: 60px;
  margin-top: 8px;
  padding-left: 22px;
  position: relative;
  width: 100%;

  ::placeholder {
    color: var(--light-primary-headline-color);
  }
`;

const SearchInputButton = styled.button`
  background-color: var(--light-primary-background-color);
  border: none;
  border-radius: 100%;
  height: 32px;
  right: 11px;
  position: absolute;
  top: 74px;
  width: 32px;
`;

const SearchInputIcon = styled.svg`
  color: var(--light-primary-headline-color);
  height: 24px;
`;
