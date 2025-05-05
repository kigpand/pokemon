import type { IPokemonList } from "interface/IPokemonList";
import styled from "styled-components";

type Props = {
  items: IPokemonList;
  onClick: any;
};

export default function DesktopDeatilContentsListAbility({
  items,
  onClick,
}: Props) {
  return (
    <AbilityStyled>
      {items.abilities?.map((item: string, i: number) => {
        return (
          <div key={i} className="ability" onClick={() => onClick(item)}>
            {item}
          </div>
        );
      })}
    </AbilityStyled>
  );
}

const AbilityStyled = styled.div`
  display: flex;
  padding: 5px;
  font-weight: 700;
  gap: 5px;

  .ability {
    display: flex;
    position: relative;

    &:hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
