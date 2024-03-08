import LOGO from "imgs/logo.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import styled from "styled-components";

const DetailHeader = () => {
  const nav = useNavigate();

  const onHome = () => {
    sessionStorage.removeItem("currentPoke");
    nav("/");
  };

  return (
    <DetailHeaderWrapper>
      <img src={LOGO} alt="logo"></img>
      <HomeIconStyled onClick={onHome} />
    </DetailHeaderWrapper>
  );
};

export default DetailHeader;

const DetailHeaderWrapper = styled.header`
  width: 100%;
  height: 60px;
  border-bottom: 2px solid lightgray;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: 30px;
  }
`;

const HomeIconStyled = styled(AiOutlineHome)`
  position: absolute;
  right: 10%;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &:hover {
    color: red;
  }
`;
