import { useEffect, useState } from "react";
import { getColor } from "utils/convert";
import styled from "styled-components";

interface ITypeText {
  count: number;
  text: string;
}

type Props = {
  title: string;
  arr: string[];
  num: number;
};

const TypeDifDetailText = ({ title, arr, num }: Props) => {
  const [types, setTypes] = useState<ITypeText[]>([]);

  useEffect(() => {
    let typeArr: ITypeText[] = [];

    // 각 상성들 중첩되는 항목 제거 및 count 증가로 배율 조정
    arr.forEach((item: string) => {
      const result = typeArr.find((type: ITypeText) => type.text === item);
      if (result) {
        typeArr = [
          ...typeArr.filter((type) => type.text !== item),
          { ...result, count: 2 },
        ];
      } else {
        typeArr = [...typeArr, { text: item, count: 1 }];
      }
    });
    setTypes(typeArr);
  }, []);

  return (
    <TextWrapper>
      <TitleStyled>{title}</TitleStyled>
      <TypeListWrapper>
        {types.map((item: ITypeText, i: number) => {
          return (
            <TypeListStyled backgroundColor={getColor(item.text)} key={i}>
              <strong>{item.text}</strong>
              <span>
                x
                {num === 2
                  ? num * item.count
                  : num === 0.5
                  ? num / item.count
                  : 0}
              </span>
            </TypeListStyled>
          );
        })}
      </TypeListWrapper>
    </TextWrapper>
  );
};

export default TypeDifDetailText;

const TextWrapper = styled.div`
  display: flex;
  margin-top: 15px;
  width: 400px;
`;

const TitleStyled = styled.div`
  font-size: 14px;
  font-weight: bold;
  height: 100%;
  width: 20%;
`;

const TypeListWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  width: 80%;
  font-size: 12px;
  row-gap: 5px;
  list-style: none;
  margin: 0;
  padding: 0;
`;

const TypeListStyled = styled.li<{ backgroundColor: string }>`
  padding: 5px;
  border-radius: 4px;
  color: white;
  margin-left: 5px;
  background-color: ${(props) => props.backgroundColor};

  span {
    font-size: 10px;
  }
`;
