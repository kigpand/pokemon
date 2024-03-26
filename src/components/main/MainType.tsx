import { useState } from "react";
import TypeModal from "components/modal/TypeModal";
import styled from "styled-components";

export default function MainType() {
  const [view, setView] = useState<boolean>(false);

  return (
    <TypeWrapper>
      <button onClick={() => setView(true)}>타입보기</button>
      {view && <TypeModal onCloseModal={() => setView(false)} />}
    </TypeWrapper>
  );
}

const TypeWrapper = styled.div`
  position: absolute;
  left: 20px;
  top: 30px;

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
