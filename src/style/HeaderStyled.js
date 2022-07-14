import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: yellow;
  padding: 15px 0px;
  background-color: #35ebff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
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
    background-color: #ffba00;
    cursor: pointer;
  }
  & button:hover {
    background-color: #fd5800;
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
