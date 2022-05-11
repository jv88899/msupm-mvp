import styled from "styled-components";

export default function SearchMenu() {
  return <Wrapper></Wrapper>;
}

const Wrapper = styled.div`
  background-color: var(--light-primary-headline-color);
  border: 1px solid var(--light-primary-headline-color);
  height: 160px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 2;
`;
