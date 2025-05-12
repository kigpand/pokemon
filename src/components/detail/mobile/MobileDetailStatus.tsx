import type { IPokemonList } from "interface/IPokemonList";
import { MobileDetailContents } from "styles/CommonStyled";
import type { SortType } from "typedef/SortType";
import { baseStat } from "utils/base";
import { getStatKorea, getStatusBarColor } from "utils/convert";
import styled from "styled-components";

type Props = {
  poke: IPokemonList;
};

const MobileDetailStatus = ({ poke }: Props) => {
  return (
    <MobileDetailContents>
      {baseStat.map((item: SortType, i: number) => {
        return (
          <StatusItemWrapper key={i}>
            <TitleStyled color={getStatusBarColor(item)}>
              {getStatKorea(item)}
            </TitleStyled>
            <BarStyled
              color={getStatusBarColor(item)}
              width={`${item === "allStat" ? 200 : poke[item]}px`}
            >
              <div>{poke[item]}</div>
            </BarStyled>
          </StatusItemWrapper>
        );
      })}
    </MobileDetailContents>
  );
};

export default MobileDetailStatus;

const StatusItemWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  font-weight: bold;
  margin-bottom: 3px;
`;

const TitleStyled = styled.div<{ color: string }>`
  height: 25px;
  padding: 5px;
  display: flex;
  align-items: center;
  border: 1px solid ${(props) => props.color};
  width: 80px;
`;

const BarStyled = styled.div<{ color: string; width: string }>`
  height: 25px;
  font-size: 13px;
  display: flex;
  align-items: center;
  width: ${(props) => props.width};

  div {
    height: 100%;
    padding: 5px;
    display: flex;
    align-items: center;
    background-color: ${(props) => props.color};
    animation: barAnim 0.5s linear forwards;
  }

  @keyframes barAnim {
    0% {
      width: 0;
    }

    100% {
      width: 100%;
    }
  }
`;
