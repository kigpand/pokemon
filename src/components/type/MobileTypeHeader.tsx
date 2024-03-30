import styled from "styled-components";
import { getColor, getTypeIcon } from "utils/convert";

type Props = {
  name: string;
};

const MobileTypeHeader = ({ name }: Props) => {
  return (
    <HeaderWrapper>
      <ImgStyled src={getTypeIcon(name)} alt="img" />
      <TitleStyled $color={getColor(name)}>{name}(타입)</TitleStyled>
    </HeaderWrapper>
  );
};

export default MobileTypeHeader;

const HeaderWrapper = styled.header`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ImgStyled = styled.img`
  height: 40px;
  border-radius: 12px;
  object-fit: contain;
  margin-right: 10px;
`;

const TitleStyled = styled.div<{ $color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-weight: bold;
  font-size: 18px;
  color: ${(props) => props.$color};
  padding: 10px 5px;
`;
