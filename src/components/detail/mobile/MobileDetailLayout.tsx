import React from "react";
import styled from "styled-components";
import { getColor } from "utils/convert";

type Props = {
  types: string[];
  title: string;
  component: React.ReactNode;
};

const MobileDetailLayout = ({ types, title, component }: Props) => {
  return (
    <LayoutWrapper>
      <MiniTitle color={getColor(types[0])}>{title}</MiniTitle>
      {component}
    </LayoutWrapper>
  );
};

export default MobileDetailLayout;

const LayoutWrapper = styled.div`
  margin-bottom: 1rem;
`;

const MiniTitle = styled.div<{ color: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  font-weight: bold;
  height: 30px;
  background-color: ${(props) => props.color};
  color: white;
`;
