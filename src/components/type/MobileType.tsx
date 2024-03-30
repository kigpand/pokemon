import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import types from "json/types.json";
import TypeItem from "./TypeItem";
import MobileTypeHeader from "./MobileTypeHeader";
import styled from "styled-components";
import { IType } from "interface/IType";
import {
  getColor,
  getDamegeType,
  getTypeEn,
  typeConvertDamegeData,
} from "utils/convert";

const MobileType = () => {
  const nav = useNavigate();
  const [typeData, setTypeData] = useState<IType>();

  function onCloseBtn() {
    nav("/");
    sessionStorage.removeItem("type");
    sessionStorage.removeItem("currentPoke");
  }

  useEffect(() => {
    const sessionType = sessionStorage.getItem("type");
    if (sessionType) {
      const type = types.find((type) => type.name === sessionType);
      if (type) {
        setTypeData(typeConvertDamegeData(type));
      }
    }
  }, []);

  const onChangeType = (item: string) => {
    const value = getTypeEn(item);
    sessionStorage.setItem("type", value);
    const type = types.find((type) => type.name === value);
    if (type) {
      setTypeData(typeConvertDamegeData(type));
    }
  };

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
                  onChangeType={onChangeType}
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
