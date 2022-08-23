import React from "react";
import "./statistics.css";

export interface StatisticsProps {
  className?: string;
  price?: number;
  type?: "balance" | "income" | "expenses";
}

export const Statistics: React.FC<StatisticsProps> = ({
  type = "balance",
  price,
  className,
}) => {
  const rootClassName = type || "";
  const labels = {
    balance: "Balance",
    income: "Income",
    expenses: "Expenses",
  };
  return (
    <div className={"stat_root" + " " + rootClassName + " " + className}>
      <div className={"stat_content"}>
        <div className={"header"}>
          <div className={"dollar"}>$</div>
          {price}
        </div>
        <div className={"description"}>{labels[type]}</div>
      </div>
    </div>
  );
};
