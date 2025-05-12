import styled from "styled-components";
import DesktopDetail from "../components/detail/desktop/DesktopDetail";
import MobileDetail from "../components/detail/mobile/MobileDetail";
import { useWindowSize } from "../hooks/useWindowSize";
import { MOBILE_SIZE } from "../utils/convert";

const Detail = () => {
  const windowSize = useWindowSize();

  return (
    <DetailWrapper>
      {windowSize >= MOBILE_SIZE ? <DesktopDetail /> : <MobileDetail />}
    </DetailWrapper>
  );
};

export default Detail;

const DetailWrapper = styled.section`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
