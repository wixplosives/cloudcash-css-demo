import React from "react";
import "./sumup-menu.css";
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
    <div className={"sump_root" + " " +className}>
      {items.map((item) => (
        <div
          key={item.text}
          className={"menuItem" + (item.selected ? " selected" : "")}
        >
          <Icon icon={item.icon} className={"sump_icon"} />
          {item.text}
        </div>
      ))}
    </div>
  );
};
