import React, { useState } from "react";
import "./switch-composite.css";
import { Switch } from "@blueprintjs/core";

export interface SwitchCompositeProps {
  className?: string;
  activeCard?: boolean;
}

export const SwitchComposite: React.FC<SwitchCompositeProps> = ({
  activeCard,
  className,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className={"swch_root" + " " + className}>
      <Switch
        className={"switch"}
        checked={active}
        onChange={() => setActive(!active)}
      />
      {active ? "Card deactivated" : "Deactivate card"}
    </div>
  );
};
