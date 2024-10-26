import LOGO from "imgs/logo.png";
import { useNavigate } from "react-router-dom";
import { AiOutlineRollback } from "react-icons/ai";
import styled from "styled-components";
import { mobileWidth } from "styles/globalstyles";
import { useBookList } from "hooks/useBookList";

const BookHeader = () => {
  const nav = useNavigate();
  const { bookPokeList } = useBookList();

  return (
    <HeaderWrapper>
      <LogoWrapper>
        <img src={LOGO} alt="logo"></img>
        <BackButton onClick={() => nav(-1)} />
      </LogoWrapper>
      <TitleStyled>
        도감 ({bookPokeList.length > 0 && `${bookPokeList.length}/6`})
      </TitleStyled>
    </HeaderWrapper>
  );
};

export default BookHeader;

const HeaderWrapper = styled.header`
  width: 60%;
  position: relative;
  padding-bottom: 10px;
  border-bottom: 2px solid lightgrey;

  img {
    width: 150px;
    height: 50px;
    margin: 30px 0;
  }

  @media only screen and (max-width: ${mobileWidth}) {
    width: 100%;
    height: 20%;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const BackButton = styled(AiOutlineRollback)`
  font-size: 30px;
  color: white;
  border-radius: 4px;
  background-color: black;
  padding: 5px;
  margin-top: 20px;

  &:hover {
    background-color: gray;
    cursor: pointer;
  }

  @media only screen and (max-width: ${mobileWidth}) {
    display: none;
  }
`;

const TitleStyled = styled.div`
  width: 100%;
  padding-left: 20px;
  font-size: 20px;
  font-weight: bold;
`;
