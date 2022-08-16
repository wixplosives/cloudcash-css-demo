import React from "react";
import "./credit-card.css";
import { Card } from "@blueprintjs/core";

export interface CardInformation {
  cardHolder: string;
  expiryDate: string;
  company: string;
  premium?: boolean;
}

export interface CreditCardProps {
  cardInfo: CardInformation;
  className?: string;
}

export const CreditCard: React.FC<CreditCardProps> = ({
  cardInfo: { cardHolder, expiryDate, company, premium },
  className,
}) => {
  return (
    <div className={"ccrd_root" + " " + className}>
      <Card
        className={premium ? "cardPremium" : "card"}
        elevation={2}
      >
        <div className={"circles"}>
          <div
            className={
              (premium ? "circlePremium" : "circle") + " circleFirst"}
          ></div>
          <div
            className={
              (premium ? "circlePremium" : "circle") + " circleSecond"}
          ></div>
          <div
            className={
              (premium ? "circlePremium" : "circle") + " circleThird"}
          ></div>
        </div>
        <div className={"heading"}>
          <h4 className={"companyTitle"}>{company}</h4>
          <h5 className={"premium"} hidden={!premium}>
            Premium Account
          </h5>
        </div>
        <div className={"cardNumberContainer"}>
          <div className={"cardNumber"}>5789</div>
          <div className={"cardNumber"}>****</div>
          <div className={"cardNumber"}>****</div>
          <div className={"cardNumber"}>2847</div>
        </div>
        <div className={"footerItem"}>
          <h6 className={"footerItemTitle"}>Card Holder</h6>
          {cardHolder}
        </div>
        <div className={"footerItem"}>
          <h6 className={"footerItemTitle"}>Expiry Date</h6>
          {expiryDate}
        </div>
      </Card>
    </div>
  );
};
