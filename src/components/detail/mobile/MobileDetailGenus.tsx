import styled from "styled-components";
import { MobileDetailContents } from "styles/CommonStyled";

type Props = {
  genus: string;
};

const MobileDetailGenus = ({ genus }: Props) => {
  return <GenusWrapper>{genus}</GenusWrapper>;
};

export default MobileDetailGenus;

const GenusWrapper = styled(MobileDetailContents)`
  font-weight: bold;
`;
