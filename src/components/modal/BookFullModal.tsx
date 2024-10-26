import { useSelector } from "react-redux";
import { RootState } from "store/store";
import ModalPortal from "ModalPortal";
import styled from "styled-components";
import { useBookList } from "hooks/useBookList";
import BookFullModalList from "./BookFullModalList";
import { IPokemonList } from "interface/IPokemonList";

interface IBookModal {
  handleBookFullRemove: (item: IPokemonList) => void;
  handleClose: () => void;
}

export default function BookFullModal({
  handleBookFullRemove,
  handleClose,
}: IBookModal) {
  const theme = useSelector((state: RootState) => state.datas.theme);
  const { bookPokeList } = useBookList();

  return (
    <ModalPortal
      handleCloseModal={handleClose}
      component={
        <FullModalWrapper theme={theme}>
          <TitleStyled>도감이 가득찼습니다.</TitleStyled>
          <MiniTitle>포켓몬을 제외하시겠습니까?</MiniTitle>
          <ListContainer>
            {bookPokeList.map((item) => {
              return (
                <BookFullModalList
                  key={item.id}
                  bookPokeList={item}
                  handleRemove={handleBookFullRemove}
                />
              );
            })}
          </ListContainer>
          <Footer>
            <CancleButton onClick={handleClose}>취소</CancleButton>
          </Footer>
        </FullModalWrapper>
      }
    />
  );
}

const FullModalWrapper = styled.article<{ theme: string }>`
  background-color: ${(props) => (props.theme === "dark" ? "black" : "white")};
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  width: 400px;
  border-radius: 8px;
  border: 1px solid ${(props) => (props.theme === "dark" ? "white" : "black")};
`;

const TitleStyled = styled.div`
  width: 100%;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
  border-bottom: 2px solid lightgray;
`;

const MiniTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: gray;
  padding: 5px 10px 10px;
`;

const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 10px;
`;

const CancleButton = styled.button`
  padding: 4px 8px;
  font-size: 12px;
  color: black;
  font-weight: bold;
  border: 1px solid lightgray;
  outline: none;
  border-radius: 4px;
  background-color: white;
  cursor: pointer;
`;
