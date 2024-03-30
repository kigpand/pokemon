import styled from "styled-components";
import { getColor, getTypeIcon } from "utils/convert";

type Props = {
  name: string;
};

const DesktopTypeHeader = ({ name }: Props) => {
  return (
    <HeaderWrapper>
      <IconStyled src={getTypeIcon(name)} alt="img" />
      <TitleStyled $color={getColor(name)}>{name}(타입)</TitleStyled>
    </HeaderWrapper>
  );
};

export default DesktopTypeHeader;

const HeaderWrapper = styled.header`
  display: flex;
  width: 80%;
  align-items: center;
`;

const IconStyled = styled.img`
  height: 50px;
  object-fit: contain;
`;

const TitleStyled = styled.div<{ $color: string }>`
  margin-left: 20px;
  font-weight: bold;
  font-size: 25px;
  color: ${(props) => props.$color};
`;
