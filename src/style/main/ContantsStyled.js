import styled from "styled-components";

export const ContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 100px;

  & .title {
    font-size: 30px;
    font-weight: 900;
    margin: 30px 0px;
  }

  & .boxes {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 50px;
    margin-bottom: 50px;

    & .category {
      text-align: center;
      color: #0a3380;
    }
  }

  @media (max-width: 992px) {
    & .boxes {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 600px) {
    & .boxes {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 350px;
  height: 450px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  overflow: hidden;
  color: black;
  cursor: pointer;
  transition: 0.5s;
  position: relative;
  background-color: white;

  &:hover {
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.5);
    transform: scale(1.03);
  }

  & img {
    max-width: 100%;
    height: 50%;
    transition: 0.5s;
  }

  &:hover img {
    transform: scale(1.03);
  }

  & h1 {
    font-size: 16px;
    font-weight: 600;
    margin: 20px 0px;
  }
  & p {
    font-size: 13px;
    line-height: normal;
    padding: 0px 20px;
  }

  & a {
    position: absolute;
    bottom: 15px;
    background-color: #fff000;
    padding: 10px 30px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.3);
    text-decoration: none;
    color: black;

    &:hover {
      background-color: #ffd800;
    }
  }
`;
