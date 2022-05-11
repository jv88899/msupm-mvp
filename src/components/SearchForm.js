import styled from "styled-components";

export default function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
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
  );
}

const SearchFieldWrapper = styled.form`
  height: 70%;
  width: 100%;
`;

const SearchInputWrapper = styled.div`
  position: absolute;
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
