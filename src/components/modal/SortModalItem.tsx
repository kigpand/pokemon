import styled from "styled-components";
import SortModalItemBtns from "./SortModalItemBtns";

type Props = {
  title: string;
  list: any;
  onCloseBtn: () => void;
};

const SortItem = ({ title, list, onCloseBtn }: Props) => {
  return (
    <SortItemWrapper>
      <TitleStyled>{title}</TitleStyled>
      <SortModalItemBtns
        type={title === "타입" ? "type" : "gene"}
        list={list}
        onCloseBtn={onCloseBtn}
      />
    </SortItemWrapper>
  );
};

export default SortItem;

const SortItemWrapper = styled.div`
  width: 100%;
`;

const TitleStyled = styled.div<{ theme: string }>`
  width: 95%;
  padding: 3px 5px;
  border-radius: 4px;
  margin: 10px 0 5px 0;
  font-weight: bold;
  color: ${(props) => props.theme.textColor};
`;
