import { useEffect, useState } from "react";
import { BsX } from "react-icons/bs";
import { useSelector } from "react-redux";
import { typeConvertDamegeData } from "utils/convert";
import { RootState } from "store/store";
import types from "json/types.json";
import TypeDetailText from "./TypeDifDetailText";
import styled from "styled-components";

type Props = {
  typeArr: string[];
  onCloseType: () => void;
};

// 2배, 반감, 0배에 같은 타입이 존재할 경우 해당 타입의 값을 필터링 해주는 함수
function filterType(typeObj: any) {
  if (typeObj.doubleFrom.length > 0) {
    for (let i = 0; i < typeObj.doubleFrom.length; i++) {
      const noFromItem = typeObj.noFrom.find(
        (item: string) => item === typeObj.doubleFrom[i]
      );
      const halfFromItem = typeObj.halfFrom.find(
        (item: string) => item === typeObj.doubleFrom[i]
      );
      if (noFromItem) {
        const doubleFrom = typeObj.doubleFrom.filter(
          (item: string) => item !== typeObj.doubleFrom[i]
        );
        typeObj.doubleFrom = [...doubleFrom];
      }
      if (halfFromItem) {
        const doubleFrom = typeObj.doubleFrom.filter(
          (item: string) => item !== typeObj.doubleFrom[i]
        );
        const halfFrom = typeObj.halfFrom.filter(
          (item: string) => item !== typeObj.doubleFrom[i]
        );
        typeObj.doubleFrom = [...doubleFrom];
        typeObj.halfFrom = [...halfFrom];
      }
    }
  }
  if (typeObj.halfFrom.length > 0) {
    for (let i = 0; i < typeObj.halfFrom.length; i++) {
      const noFromItem = typeObj.noFrom.find(
        (item: string) => item === typeObj.halfFrom[i]
      );
      if (noFromItem) {
        const halfFrom = typeObj.halfFrom.filter(
          (item: string) => item !== typeObj.halfFrom[i]
        );
        typeObj.halfFrom = [...halfFrom];
      }
    }
  }
  return typeObj;
}

const TypeDifDetail = ({ typeArr, onCloseType }: Props) => {
  const [type, setType] = useState<any | null>(null);
  const theme = useSelector((state: RootState) => state.datas.theme);

  useEffect(() => {
    let typeObj: any = {};
    typeArr.forEach((type: string, i: number) => {
      const result = types.find((item) => item.name === type);
      if (result) {
        const convert = typeConvertDamegeData(result);
        if (i === 0) {
          typeObj = {
            doubleFrom: [...convert.doubleFrom],
            halfFrom: [...convert.halfFrom],
            noFrom: [...convert.noFrom],
          };
        } else {
          typeObj = {
            doubleFrom: [...typeObj.doubleFrom, ...convert.doubleFrom],
            halfFrom: [...typeObj.halfFrom, ...convert.halfFrom],
            noFrom: [...typeObj.noFrom, ...convert.noFrom],
          };
        }
      }
    });
    const newType = filterType(typeObj);
    setType(newType);
  }, [typeArr]);

  return (
    <DetailWrapper backgroundColor={theme === "dark" ? "black" : "white"}>
      <CloseStyled onClick={onCloseType} />
      <article>
        <TitleStyled>방어 상성</TitleStyled>
        {type && type.doubleFrom.length > 0 && (
          <TypeDetailText title="효과가 좋음" arr={type.doubleFrom} num={2} />
        )}
        {type && type.halfFrom.length > 0 && (
          <TypeDetailText title="효과가 별로" arr={type.halfFrom} num={0.5} />
        )}
        {type && type.noFrom.length > 0 && (
          <TypeDetailText title="효과가 없음" arr={type.noFrom} num={0} />
        )}
      </article>
    </DetailWrapper>
  );
};

export default TypeDifDetail;

const DetailWrapper = styled.div<{ backgroundColor: string }>`
  background-color: ${(props) => props.backgroundColor};
  top: 0;
  right: 0;
  position: absolute;
  padding: 15px;
  border: 1px solid;
  border-radius: 8px;
  z-index: 100;
`;

const CloseStyled = styled(BsX)`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const TitleStyled = styled.div`
  font-weight: bold;
`;
