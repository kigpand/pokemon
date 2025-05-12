import styled from "styled-components";
import type { IPokemonList } from "interface/IPokemonList";
import type { SortType } from "typedef/SortType";
import { baseStat } from "utils/base";
import { getStatKorea, getStatusBarColor, getTypeIcon } from "utils/convert";
import { mobileWidth } from "styles/globalstyles";

export default function VsModalResultPokeList({
  poke,
  vsPoke,
}: {
  poke: IPokemonList;
  vsPoke: IPokemonList;
}) {
  return (
    <PokeListWrapper>
      <ImgWrapper>
        <img src={poke.imageUrl} alt="imageUrl" />
      </ImgWrapper>
      <LabelStyled>타입</LabelStyled>
      <TypeStyled>
        {poke.types?.map((type, i) => {
          return <img src={getTypeIcon(type)} alt="typeImg" key={i} />;
        })}
      </TypeStyled>
      <LabelStyled>종족값</LabelStyled>
      {baseStat.map((item: SortType, i: number) => {
        return (
          <StatWrapper color={getStatusBarColor(item)} key={i}>
            <div>{getStatKorea(item)}</div>
            <div>{poke[item]}</div>
            {poke[item] > vsPoke[item] && (
              <WinImg
                src={`${process.env.PUBLIC_URL}/imgs/win.png`}
                alt="winImg"
              />
            )}
          </StatWrapper>
        );
      })}
    </PokeListWrapper>
  );
}

const PokeListWrapper = styled.article`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`;

const ImgWrapper = styled.span`
  width: 100%;
  display: flex;
  margin: 10px 0px;
  justify-content: center;

  img {
    width: 100px;
    height: 100px;

    @media only screen and (max-width: ${mobileWidth}) {
      width: 80px;
      height: 80px;
    }
  }
`;

const LabelStyled = styled.label`
  padding: 20px 0 10px 0;
  font-weight: bold;

  @media only screen and (max-width: ${mobileWidth}) {
    font-size: 14px;
    padding: 10px 0;
  }
`;

const TypeStyled = styled.div`
  display: flex;
  gap: 10px;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;

  img {
    width: 25px;
    height: 25px;
  }
`;

const StatWrapper = styled.span<{ color: string }>`
  margin: 10px 0;
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 12px;
  color: ${(props) => props.color};

  div {
    &:first-of-type {
      width: 100px;
    }
    &:last-of-type {
      width: 50px;
    }
  }

  @media only screen and (max-width: ${mobileWidth}) {
    font-size: 10px;

    img {
      height: 15px;
    }
  }
`;

const WinImg = styled.img`
  height: 25px;
  animation: scaleAnim 0.8s alternate infinite linear;

  @media only screen and (max-width: ${mobileWidth}) {
    height: 15px;
  }

  @keyframes scaleAnim {
    100% {
      transform: scale(1.3);
    }
  }
`;
