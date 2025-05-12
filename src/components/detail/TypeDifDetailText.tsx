import { useMemo } from "react";
import { getColor } from "utils/convert";
import styled from "styled-components";
import { media } from "styles/MediaStyled";

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
  const types = useMemo(() => {
    const map = new Map<string, ITypeText>();

    arr.forEach((item) => {
      if (map.has(item)) {
        map.set(item, { text: item, count: 2 });
      } else {
        map.set(item, { text: item, count: 1 });
      }
    });

    return Array.from(map.values());
  }, [arr]);

  return (
    <TextWrapper>
      <TitleStyled>{title}</TitleStyled>
      <TypeListWrapper>
        {types.map((item: ITypeText, i: number) => {
          return (
            <TypeListStyled $backgroundColor={getColor(item.text)} key={i}>
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

  ${media.phone`
      width: 300px;
  `}
`;

const TitleStyled = styled.div`
  font-size: 14px;
  font-weight: bold;
  height: 100%;
  width: 20%;

  ${media.phone`
    font-size: 12px;
  `};
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

  ${media.phone`
    font-size: 10px;
  `};
`;

const TypeListStyled = styled.li<{ $backgroundColor: string }>`
  padding: 5px;
  border-radius: 4px;
  color: white;
  margin-left: 5px;
  background-color: ${(props) => props.$backgroundColor};

  span {
    font-size: 10px;
  }
`;
