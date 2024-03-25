import DesktopType from "../components/type/desktop/DesktopType";
import MobileType from "../components/type/mobile/MobileType";
import { useWindowSize } from "../hooks/useWindowSize";
import { MOBILE_SIZE } from "../utils/convert";

const Type = () => {
  const windowSize = useWindowSize();
  return windowSize >= MOBILE_SIZE ? <DesktopType /> : <MobileType />;
};

export default Type;
