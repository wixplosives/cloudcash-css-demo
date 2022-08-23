import React from "react";
import "./cards.css";
import { Statistics } from "../statistics/statistics";
import { SwitchComposite } from "../switch-composite/switch-composite";
import { Card, Divider } from "@blueprintjs/core";
import { CreditCard, CardInformation } from "../credit-card/credit-card";

export interface CardsProps {
  className?: string;
  balancePrice?: number;
  incomePrice?: number;
  expensesPrice?: number;
  cardInfo: CardInformation;
}

export const Cards: React.FC<CardsProps> = ({
  expensesPrice,
  incomePrice,
  balancePrice,
  cardInfo,
  className,
}) => {
  return (
    <div className={"crds_root" + " " + className}>
      <Card className={"outline"}>
        <p className={"title"}>Cards</p>
        <div className={"layout crds_content"}>
          <div className={"left"}>
            <CreditCard cardInfo={cardInfo}></CreditCard>
          </div>
          <Divider color="E8E8E8" className={"divider"}></Divider>
          <div className={"right"}>
            <Statistics price={balancePrice} type="balance" />
            <Statistics price={incomePrice} type="income" />
            <Statistics price={expensesPrice} type="expenses" />
            <SwitchComposite />
          </div>
        </div>
      </Card>
    </div>
  );
};
