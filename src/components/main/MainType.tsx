import TypeModal from "components/modal/TypeModal";
import { useModal } from "hooks/useModal";
import styled from "styled-components";

export default function MainType() {
  const { isOpen, open, close } = useModal();

  return (
    <TypeWrapper>
      <button onClick={open}>타입보기</button>
      {isOpen && <TypeModal onCloseModal={close} />}
    </TypeWrapper>
  );
}

const TypeWrapper = styled.div`
  button {
    background: none;
    color: gray;
    font-weight: 700;
    cursor: pointer;
    border: none;
    outline: none;

    &:hover {
      transform: scale(1.1);
    }
  }
`;
