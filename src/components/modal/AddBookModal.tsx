import { useSelector } from "react-redux";
import { RootState } from "store/store";
import ModalPortal from "ModalPortal";
import styled from "styled-components";

interface IBookModal {
  onCloseBookModal: () => void;
}

const AddBookModal = ({ onCloseBookModal }: IBookModal) => {
  const theme = useSelector((state: RootState) => state.datas.theme);
  function onCloseModal() {
    onCloseBookModal();
  }

  return (
    <ModalPortal
      handleCloseModal={onCloseModal}
      component={
        <AddBookModalWrapper theme={theme}>
          <TitleStyled>도감</TitleStyled>
          <ContentWrapper>몬스터가 도감에 추가되었습니다.</ContentWrapper>
        </AddBookModalWrapper>
      }
    />
  );
};

export default AddBookModal;

const AddBookModalWrapper = styled.article<{ theme: string }>`
  background-color: ${(props) => (props.theme === "dark" ? "black" : "white")};
  color: ${(props) => (props.theme === "dark" ? "white" : "black")};
  width: 300px;
  height: 200px;
  background-color: white;
  border-radius: 8px;
`;

const TitleStyled = styled.div`
  width: 100%;
  padding: 10px;
  font-weight: bold;
  font-size: 14px;
`;

const ContentWrapper = styled.div`
  border-top: 2px solid lightgray;
  width: 100%;
  font-size: 12px;
  padding: 10px 0;
  text-align: center;
`;
