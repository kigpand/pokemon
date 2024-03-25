import { getLineColor } from "utils/convert";
import { IPokemonList } from "interface/IPokemonList";
import styled from "styled-components";
import DesktopDetailContents from "./DesktopDetailContents";
import BookComponent from "components/detail/BookComponent";
import DesktopDetailBodyImg from "./DesktopDetailBodyImg";

interface IDetailBody {
  currentPoke: IPokemonList;
  megaPoke: IPokemonList | IPokemonList[] | null;
  onChangeOrigin: () => void;
  onChangeMegaPoke: () => void;
  onChangeDymaxImg: (img: string) => void;
}

const DesktopDetailBody = (props: IDetailBody) => {
  return (
    <BodyWrapper
      style={{ borderColor: getLineColor(props.currentPoke!.types![0]) }}
    >
      <BookComponent poke={props.currentPoke} />
      <DesktopDetailBodyImg {...props} />
      <DesktopDetailContents poke={props.currentPoke} />
    </BodyWrapper>
  );
};

export default DesktopDetailBody;

const BodyWrapper = styled.div`
  width: 800px;
  height: 400px;
  border: 3px solid;
  padding: 50px;
  margin: 0 30px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
