import { getColor, getDamegeType } from "utils/convert";
import DesktopTypeHeader from "./DesktopTypeHeader";
import TypeItem from "./TypeItem";
import DetailHeader from "components/detail/desktop/DesktopDetailHeader";
import styled from "styled-components";
import { useType } from "hooks/useType";

const DesktopType = () => {
  const { typeData, handleChangeType } = useType();

  return (
    <TypeWrapper>
      <DetailHeader />
      {typeData && (
        <TypeContainer $border={getColor(typeData.name)}>
          <DesktopTypeHeader name={typeData.name} />
          {Object.entries(typeData).map(
            (values: [string, string[]], i: number) => {
              if (i === 0 || values[1].length === 0) return null;
              return (
                <TypeItem
                  key={i}
                  arr={values[1]}
                  title={getDamegeType[values[0]]}
                  type={typeData.name}
                  onChangeType={handleChangeType}
                />
              );
            }
          )}
        </TypeContainer>
      )}
    </TypeWrapper>
  );
};

export default DesktopType;

const TypeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TypeContainer = styled.div<{ $border: string }>`
  width: 60%;
  min-height: 400px;
  border: 3px solid ${(props) => props.$border};
  position: relative;
  border-radius: 8px;
  padding: 50px;
  margin: 0 30px;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 2fr);
  grid-column-gap: 20px;
`;
