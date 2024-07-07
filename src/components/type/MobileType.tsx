import { useNavigate } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import TypeItem from "./TypeItem";
import MobileTypeHeader from "./MobileTypeHeader";
import styled from "styled-components";
import { getColor, getDamegeType } from "utils/convert";
import { useStorage } from "hooks/useStorage";
import { useType } from "hooks/useType";

const MobileType = () => {
  const nav = useNavigate();
  const storage = useStorage();
  const { typeData, handleChangeType } = useType();

  function onCloseBtn() {
    nav("/");
    storage.clearTypeStorage();
    storage.clearCurrentPokeStorage();
  }

  return (
    <TypeWrapper>
      {typeData && (
        <Container>
          <HomeButtonStyled
            $color={getColor(typeData.name)}
            onClick={onCloseBtn}
          />
          <MobileTypeHeader name={typeData.name} />
          {Object.entries(typeData).map(
            (values: [string, string[]], i: number) => {
              if (i === 0 || values[1].length === 0) return null;
              return (
                <TypeItem
                  key={i}
                  arr={values[1]}
                  title={getDamegeType[values[0]]}
                  type={typeData.name}
                  onChangeType={handleChangeType}
                />
              );
            }
          )}
        </Container>
      )}
    </TypeWrapper>
  );
};

export default MobileType;

const TypeWrapper = styled.div`
  width: 100vw;
  display: flex;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin-top: 4px;
`;

const HomeButtonStyled = styled(AiOutlineHome)<{ $color: string }>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  padding: 5px;
  color: ${(props) => props.$color};
  cursor: pointer;

  &:hover {
    background-color: lightgray;
  }
`;
