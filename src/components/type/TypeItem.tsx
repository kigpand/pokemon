import styled from "styled-components";
import { media } from "styles/MediaStyled";
import { getColor, getTypeIcon } from "utils/convert";

interface ITypeItem {
  arr: string[];
  title: string;
  type: string;
  onChangeType: any;
}

const TypeItem = ({ arr, title, type, onChangeType }: ITypeItem) => {
  return (
    <TypeItemWrapper>
      <TitleStyled $backgroundcolor={getColor(type)}>{title}</TitleStyled>
      <ItemWrapper $borderColor={getColor(type)}>
        {arr[0] &&
          arr.map((item: string, i: number) => {
            return (
              <IconWrapper key={i}>
                <img
                  src={getTypeIcon(item)}
                  onClick={() => onChangeType(item)}
                  alt="img"
                  className="icon"
                />
                <p
                  className="arrow_box"
                  style={{
                    backgroundColor: getColor(item),
                  }}
                >
                  {item}
                </p>
              </IconWrapper>
            );
          })}
      </ItemWrapper>
    </TypeItemWrapper>
  );
};

export default TypeItem;

const TypeItemWrapper = styled.div`
  position: relative;

  ${media.phone`
    width: 90%;
  `}
`;

const TitleStyled = styled.div<{ $backgroundcolor: string }>`
  margin-top: 25px;
  font-weight: bold;
  font-size: 14px;
  padding: 10px;
  color: white;
  background-color: ${(props) => props.$backgroundcolor};
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;

  ${media.phone`
      font-size: 14px;
      margin-top: 20px;
  `}
`;

const ItemWrapper = styled.div<{ $borderColor: string }>`
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: 2px solid ${(props) => props.$borderColor};
  display: flex;
  align-items: center;
  padding: 10px;
  flex-wrap: wrap;
  row-gap: 10px;
`;

const IconWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 15px;

  .icon {
    cursor: pointer;
    height: 30px;
    object-fit: contain;
    border-radius: 8px;
  }

  .arrow_box {
    font-size: 12px;
    width: 40px;
    display: none;
    position: absolute;
    padding: 5px 0;
    text-align: center;
    top: 20px;
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    border-radius: 8px;
    color: #fff;
    z-index: 100;
    white-space: nowrap;
  }

  .icon:hover + p.arrow_box {
    display: block;
  }
`;
