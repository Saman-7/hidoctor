import styled from "styled-components";
import Content from "./main/Contents";

const MainContainer = styled.div`
  margin-top: 70px;
`;

const Main = () => {
  return (
    <MainContainer>
      <Content />
    </MainContainer>
  );
};

export default Main;
