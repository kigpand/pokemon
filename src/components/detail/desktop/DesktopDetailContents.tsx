import { IPokemonList } from "interface/IPokemonList";
import { useStorage } from "hooks/useStorage";
import DesktopDetailContentsAbilityList from "./DesktopDetailContentsAbilityList";
import DesktopDetailContentsList from "./DesktopDetailContentsList";
import styled from "styled-components";
import TypeDif from "../TypeDif";

type Props = {
  poke: IPokemonList;
};

const DesktopDetailContents = ({ poke }: Props) => {
  const { setTypeStorage } = useStorage();

  return (
    <DetailMainStyled>
      <MainHeaderStyled>
        <div>
          <div className="num">No.{poke.id}</div>
          <div className="name">{poke.name}</div>
          <div className="generate">{poke.generate}</div>
        </div>
        <TypeDif poke={poke} />
      </MainHeaderStyled>
      <ListStyled>
        <DesktopDetailContentsList items={poke} type="분류" />
        <DesktopDetailContentsList
          items={poke}
          type="타입"
          onClick={(type: string) => setTypeStorage(type)}
        />
        <DesktopDetailContentsAbilityList items={poke} type="특성" />
        <DesktopDetailContentsList items={poke} type="종족값" />
      </ListStyled>
    </DetailMainStyled>
  );
};

export default DesktopDetailContents;

const DetailMainStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 40px;
`;

const MainHeaderStyled = styled.header`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .num {
    font-size: 14px;
    font-weight: 700;
    color: gray;
  }

  .name {
    font-size: 24px;
    font-weight: bold;
  }

  .generate {
    font-size: 10px;
    font-weight: 700;
  }

  .vs {
    position: absolute;
    top: 10px;
    right: 20px;
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
`;

const ListStyled = styled.div`
  margin-top: 30px;
  display: flex;
  flex-wrap: wrap;
  font-size: 10px;
`;
