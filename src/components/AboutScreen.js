import { Link } from "react-router-dom";
import styled from "styled-components";

export default function AboutScreen() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <Wrapper>
      <InnerWrapper>
        <MusicNoteIcon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M18 3a1 1 0 00-1.196-.98l-10 2A1 1 0 006 5v9.114A4.369 4.369 0 005 14c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V7.82l8-1.6v5.894A4.37 4.37 0 0015 12c-1.657 0-3 .895-3 2s1.343 2 3 2 3-.895 3-2V3z" />
        </MusicNoteIcon>
        <AboutHeadline>A musical adventure.</AboutHeadline>
        <AboutParagraph>
          Join us as we explore music and discover the greatest albums ever
          made.
        </AboutParagraph>
        <SurpriseMeButton to="/">Surprise Me!</SurpriseMeButton>
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
        <Line />
      </InnerWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--light-secondary-background-color);
  color: var(--light-primary-headline-color);
  height: calc(100vh - 86px);
  position: relative;
  top: 86px;
  width: 100%;
  z-index: -1;
`;

const InnerWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1000px;
  padding: 32px 16px;
  width: 100%;
`;

const MusicNoteIcon = styled.svg`
  height: 64px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: skewX(8deg);
  }
`;

const AboutHeadline = styled.h1`
  font-size: 44px;
  letter-spacing: 2.5px;
  line-height: 100%;
  margin-top: 16px;
  text-align: center;
`;

const AboutParagraph = styled.p`
  font-size: 20px;
  margin-top: 16px;
  padding: 8px 16px;
  text-align: center;
`;

const SurpriseMeButton = styled(Link)`
  background-color: var(--light-primary-headline-color);
  border-radius: 50px;
  color: var(--light-primary-background-color);
  display: block;
  font-family: var(--headline-font);
  font-size: 18px;
  height: 51px;
  letter-spacing: 1.8px;
  line-height: 55px;
  margin-top: 12px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  width: 260px;
`;

const SearchFieldWrapper = styled.form`
  display: flex;
  height: 70%;
  justify-content: center;
  margin-top: 10px;
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
  height: 51px;
  margin-top: 8px;
  padding-left: 12px;
  position: relative;
  width: 260px;

  ::placeholder {
    color: var(--light-primary-headline-color);
  }
`;

const SearchInputButton = styled.button`
  background-color: var(--light-secondary-background-color);
  border: none;
  border-radius: 100%;
  height: 32px;
  margin-top: 17px;
  right: 34px;
  position: absolute;
  width: 32px;
`;

const SearchInputIcon = styled.svg`
  color: var(--light-primary-headline-color);
  height: 24px;
`;

const Line = styled.div`
  background-color: var(--light-primary-headline-color);
  height: 3px;
  margin-top: 48px;
  width: 100%;
`;
