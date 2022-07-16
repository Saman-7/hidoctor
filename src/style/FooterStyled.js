import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #e0ffff;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 30px;

  @media (max-width: 786px) {
    flex-direction: column;
  }
`;

export const RightFooter = styled.ul`
  line-height: 30px;
  font-size: 14px;

  & li:first-child {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 10px;
    border-right: 5px solid #35ebff;
    padding-right: 10px;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

export const LeftFooter = styled.ul`
  position: relative;
  line-height: 50px;
  margin-bottom: 30px;

  & li {
    font-weight: 600;
  }

  & li.logo {
    display: flex;
    justify-content: start;
    align-items: center;

    & svg {
      width: 40px;
    }

    & span {
      font-size: 20px;
    }
  }

  & li span {
    font-size: 14px;
    margin-right: 10px;
    font-weight: normal;
  }
  & img {
    max-width: 100px;
    position: absolute;
    bottom: -50px;
    left: 0;
  }

  @media (max-width: 1200px) {
    padding: 0px 20px;
  }

  @media (max-width: 786px) {
    margin-bottom: 100px;
  }
`;
