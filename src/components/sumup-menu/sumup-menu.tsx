import React from "react";
import styles from "./sumup-menu.module.scss";
import { Icon } from "@blueprintjs/core";
import type { IconName } from "@blueprintjs/icons";

export interface SumupMenuProps {
  className?: string;
  items: Array<{ text: string; icon: IconName; selected: boolean }>;
}

export const SumupMenu: React.FC<SumupMenuProps> = ({
  className,
  items = [],
}) => {
  return (
    <div className={`${styles.root} ${className}`}>
      {items.map((item) => (
        <div
          key={item.text}
          className={`${styles.menuItem} ${
            item.selected ? styles.selected : ""
          }`}
        >
          <Icon icon={item.icon} className={styles.icon} />
          {item.text}
        </div>
      ))}
    </div>
  );
};
