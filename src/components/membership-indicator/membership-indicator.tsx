import React from "react";
import "./membership-indicator.css";
import { Text, Icon } from "@blueprintjs/core";

export interface MembershipIndicatorProps {
  className?: string;
  userName: string;
  userType: string;
  envelopeIndication: boolean;
  notificationsIndication: boolean;
}

export const MembershipIndicator: React.FC<MembershipIndicatorProps> = ({
  className,
  userName,
  userType,
  envelopeIndication,
  notificationsIndication,
}) => {
  return (
    <div className={"mshp_root" + " "  + className}>
      <div className={"mshp_root container"}>
        <div className={"mshp_icon"}>
          {envelopeIndication && <div className={"indicator"} />}
          <Icon icon="envelope" className={"innerIcon"} />
        </div>
        <div className={"mshp_icon"}>
          {notificationsIndication && <div className={"indicator"} />}
          <Icon icon="notifications" className={"innerIcon"}></Icon>
        </div>
        <div className={"mshp_icon iconLast"}>
          <div className={"personFrame"}>
            <Icon icon="person" />
          </div>
        </div>
        <div className={"textContainer"}>
          <Text className={"userName"}>{userName}</Text>
          <Text className={"userType"}>{userType}</Text>
        </div>
      </div>
    </div>
  );
};
