import styled from "styled-components";

export default function AboutScreen() {
  return <Wrapper></Wrapper>;
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
