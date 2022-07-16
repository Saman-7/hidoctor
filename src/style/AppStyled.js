import styled from "styled-components";

export const ScrollTop = styled.div`
  position: fixed;
  bottom: 10%;
  left: 5%;
  cursor: pointer;
  display: none;

  & svg {
    width: 50px;
    height: 50px;
    padding: 13px;
    border-radius: 25px;
    background-color: whitesmoke;
    box-shadow: 0px 0px 20px rgb(0 0 0 / 70%);
    z-index: 1000;
    transition: 0.5s;
    animation: scrollTop 3s linear infinite;
    pointer-events: none;
  }

  @keyframes scrollTop {
    0% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(-5px);
    }
    100% {
      transform: translateY(5px);
    }
  }

  &.clicked {
    transition: 1s;
    animation: throw 1s ease-in;
  }

  @keyframes throw {
    25% {
      transform: translateY(-150px);
    }
  }
`;
