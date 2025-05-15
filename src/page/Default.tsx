import { useStorage } from "hooks/useStorage";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Default = () => {
  const nav = useNavigate();
  const { getCurrentPokeStorage } = useStorage();
  console.log(getCurrentPokeStorage());

  return (
    <DefaultWrapper>
      <h1>잘못된 경로입니다.</h1>
      <button onClick={() => nav("/")}>메인 페이지로 돌아가기</button>
    </DefaultWrapper>
  );
};

export default Default;

const DefaultWrapper = styled.section`
  width: 100%;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 30px;
    font-weight: bold;
    color: #565656;
  }

  button {
    padding: 10px 20px;
    font-size: 16px;
    margin-top: 30px;
    background-color: white;
    outline: none;
    border: 1px solid gray;
    border-radius: 8px;
    color: gray;
    cursor: pointer;
  }
`;
