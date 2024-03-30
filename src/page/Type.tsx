import DesktopType from "../components/type/DesktopType";
import MobileType from "../components/type/MobileType";
import { useWindowSize } from "../hooks/useWindowSize";
import { MOBILE_SIZE } from "../utils/convert";

const Type = () => {
  const windowSize = useWindowSize();
  return windowSize >= MOBILE_SIZE ? <DesktopType /> : <MobileType />;
};

export default Type;
