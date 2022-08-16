import React from "react";
import "./page-header.css";
import { MembershipIndicator } from "../membership-indicator/membership-indicator";
import { Text } from "@blueprintjs/core";

export interface PageHeaderProps {
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
  return (
    <div className={"page_root" + " " + className}>
      <div
        className={"headerContainer moreSpecific"}
      >
        <div>
          <Text className={"pageHeader"}>Weekly sumup</Text>
          <Text className={"pageSubHeader"}>
            Get summary of your weekly online transactions here.
          </Text>
        </div>
        <MembershipIndicator
          notificationsIndication
          userType="Account admin"
          envelopeIndication={true}
          userName="Andrew"
        />
      </div>
    </div>
  );
};
