import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 0px;
  background-color: #e0ffff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  transition: 0.5s;

  &.scroll {
    background-color: #35ebff;
  }

  & .menu {
    display: none;
  }

  @media (max-width: 992px) {
    & .menu {
      display: block;
      cursor: pointer;
      fill: #007fff;
    }
  }
`;

export const Right = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & li {
    list-style-type: none;
    margin: 10px;
    position: relative;
  }

  & li a {
    text-decoration: none;
    color: black;
    font-weight: 600;
    font-size: 15px;
    padding: 5px;
  }

  & li a:hover {
    color: #00008b;
  }

  & a::before {
    content: "";
    position: absolute;
    width: 0%;
    height: 2px;
    background-color: #ffbf00;
    bottom: -5px;
    right: 0;
    transition: width 0.5s;
  }

  & a:hover::before {
    width: 100%;
  }

  & .close {
    display: none;
  }

  @media (max-width: 992px) {
    position: fixed;
    right: -100%;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 50%;
    height: 100%;
    background-color: #daf5ff;
    z-index: 1000;
    overflow: auto;
    transition: 0.5s;
    transition-timing-function: ease-out;

    & .close {
      display: block;
      position: absolute;
      top: 30px;
      right: 30px;
      cursor: pointer;
    }

    & li {
      width: 50%;
      text-align: center;
      padding: 17px 30px;
      background-color: #00a0f0;
      color: black;
      border-radius: 25px;
      margin-bottom: 25px;

      &:hover {
        background-color: #00008b;
      }
    }

    & li a {
      color: white;

      &:hover {
        color: #ffbf00;
      }
    }

    &.active {
      right: 0%;
    }
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const Left = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  & button {
    margin-right: 25px;
    border: none;
    padding: 7px 20px;
    border-radius: 20px;
    font-family: iransans;
    font-size: 13px;
    font-weight: 600;
    background-color: #007fff;
    cursor: pointer;
    color: #e0ffff;
  }

  & button:hover {
    background-color: #000080;
    color: #ffb300;
  }

  & label {
    position: relative;
  }

  & label svg {
    position: absolute;
    top: 50%;
    left: 6px;
    width: 25px;
    transform: translateY(-50%);
    cursor: pointer;
  }

  & label input {
    border-radius: 30px;
    padding: 7px 7px 7px 30px;
    border: 2px solid black;
    width: 20px;
    transition: width 1s;
    cursor: pointer;
    font-family: iransans;
    font-size: 13px;
  }
  & label input:focus {
    width: 200px;
    cursor: text;
  }
`;
