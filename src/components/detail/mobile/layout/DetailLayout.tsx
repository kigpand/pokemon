import React from "react";
import styles from "./DetailLayout.module.scss";
import { getColor } from "../../../../utils/convert";

type Props = {
  types: string[];
  title: string;
  component: React.ReactNode;
};

const DetailLayout = ({ types, title, component }: Props) => {
  return (
    <div className={styles.layout}>
      <div
        className={styles.miniTitle}
        style={{ backgroundColor: getColor(types[0]) }}
      >
        {title}
      </div>
      {component}
    </div>
  );
};

export default DetailLayout;
