import ModalPortal from "ModalPortal";
import styled from "styled-components";

interface IBookModal {
  onCloseBookModal: () => void;
}

const AddBookModal = ({ onCloseBookModal }: IBookModal) => {
  return (
    <ModalPortal
      handleCloseModal={onCloseBookModal}
      component={
        <AddBookModalWrapper>
          <TitleStyled>도감</TitleStyled>
          <ContentWrapper>몬스터가 도감에 추가되었습니다.</ContentWrapper>
        </AddBookModalWrapper>
      }
    />
  );
};

export default AddBookModal;

const AddBookModalWrapper = styled.article`
  background-color: ${(props) => props.theme.backgroundColor};
  color: ${(props) => props.theme.textColor};
  width: 300px;
  height: 200px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.textColor};
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
