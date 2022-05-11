import styled from "styled-components";

export default function MenuIcon({ menuIsVisible, setMenuIsVisible }) {
  return (
    <HamburgerMenuWrapper
      menuIsVisible={menuIsVisible}
      onClick={() => {
        setMenuIsVisible(!menuIsVisible);
      }}
    >
      <div />
      <div />
      <div />
    </HamburgerMenuWrapper>
  );
}

const HamburgerMenuWrapper = styled.button`
  background: none;
  border: none;
  display: flex;
  flex-direction: column;
  height: 30px;
  justify-content: space-around;

  div {
    background-color: var(--light-primary-headline-color);
    height: 3px;
    transition: all 0.3s linear;
    transform-origin: 2.5px;
    width: 30px;

    :first-child {
      transform: ${({ menuIsVisible }) =>
        menuIsVisible ? "rotate(45deg)" : "rotate(0)"};
    }

    :nth-child(2) {
      opacity: ${({ menuIsVisible }) => (menuIsVisible ? "0" : "1")};
      transform: ${({ menuIsVisible }) =>
        menuIsVisible ? "translateX(-20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ menuIsVisible }) =>
        menuIsVisible ? "rotate(-45deg)" : "rotate(0)"};
    }
  }
`;

// const HamburgerMenuLine = styled.div`
//   background-color: var(--light-primary-headline-color);
//   height: 4px;
//   transform-origin: 1px 2px;
//   transition: all 0.3s linear;
//   width: 32px;

//   :first-child {
//     transform: ${({ menuIsVisible }) =>
//       menuIsVisible ? "rotate(45deg)" : "rotate(0)"};
//   }

//   :nth-child(2) {
//     opacity: ${({ menuIsVisible }) => (menuIsVisible ? "0" : "1")};
//     transform: ${({ menuIsVisible }) =>
//       menuIsVisible ? "translateX(20px)" : "translateX(0)"};
//   }

//   :nth-child(3) {
//     transform: ${({ menuIsVisible }) =>
//       menuIsVisible ? "rotate(-45deg)" : "rotate(0)"};
//   }
// `;
