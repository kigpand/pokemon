import MainHeader from "components/main/MainHeader";
import MainBody from "components/main/MainBody";
import styled from "styled-components";

const Main = () => {
  return (
    <MainWrapper>
      <MainHeader />
      <MainBody />
    </MainWrapper>
  );
};

export default Main;

const MainWrapper = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;
