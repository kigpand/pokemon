import { useNavigate } from "react-router-dom";
import { MobileDetailContents } from "styles/CommonStyled";
import { getColor, getTypeKo } from "utils/convert";
import styled from "styled-components";

type Props = {
  types: string[];
};

const MobileDetailType = ({ types }: Props) => {
  const nav = useNavigate();

  function onTypeClick(type: string) {
    sessionStorage.setItem("type", type);
    nav("/type");
  }

  return (
    <MobileDetailContents>
      {types.map((type, i) => {
        return (
          <TypeStyled
            color={getColor(type)}
            key={i}
            onClick={() => onTypeClick(type)}
          >
            {getTypeKo(type)}
          </TypeStyled>
        );
      })}
    </MobileDetailContents>
  );
};

export default MobileDetailType;

const TypeStyled = styled.span<{ color: string }>`
  padding: 5px;
  border-radius: 4px;
  font-weight: bold;
  color: white;
  margin-right: 1rem;
  background-color: ${(props) => props.color};

  &:hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
