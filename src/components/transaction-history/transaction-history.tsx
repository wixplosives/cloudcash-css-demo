import React from "react";
import "./transaction-history.css";
import { Transaction } from "../transaction/transaction";
import { Title } from "../title/title";
import { Card } from "@blueprintjs/core";

export interface TransactionHistoryProps {
  className?: string;
}

export const TransactionHistory: React.FC<TransactionHistoryProps> = ({
  className,
}) => {
  return (
    <div className={"root transactionHistoryCard" + " " + className}>
      <Card elevation={2} className={"transactionHistoryCard"}>
        <h1 className={"transactionHistoryHeader"}>Transaction history</h1>
        <Title className={"tableTitle"} />
        <table>
          <Transaction
            icon="shopping-cart"
            receiver="Tesco Market"
            typeName="Shopping"
            date="13 Dec 2020"
            amount={75.67}
          />
          <Transaction
            icon="truck"
            receiver="ElectroMen Market"
            typeName="Shopping"
            date="14 Dec 2020"
            amount={250}
          />
          <Transaction
            icon="airplane"
            receiver="Fiorgio Restaurant"
            typeName="Food"
            date="07 Dec 2020"
            amount={19.5}
          />
          <Transaction
            icon="person"
            receiver="John Mathew Kayne"
            typeName="Sport"
            date="06 Dec 2020"
            amount={350}
          />
          <Transaction
            icon="person"
            receiver="Ann Marlin"
            typeName="Shopping"
            date="31 Nov 2020"
            amount={430}
          />
        </table>
      </Card>
    </div>
  );
};
