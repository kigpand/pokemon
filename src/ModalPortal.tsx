import { createPortal } from "react-dom";
import React from "react";
import styled from "styled-components";

type Props = {
  component: React.ReactNode;
  handleCloseModal: () => void;
};

export default function ModalPortal({ component, handleCloseModal }: Props) {
  return createPortal(
    <ModalWrapper>
      {component}
      <div className="back" onClick={handleCloseModal}></div>
    </ModalWrapper>,
    document.getElementById("overlay-root")!
  );
}

const ModalWrapper = styled.section`
  width: 100vw;
  height: 100%;
  min-height: 100vh;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: anim 0.2s linear forwards;

  .back {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;

    &:hover {
      cursor: pointer;
    }
  }

  @keyframes anim {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
