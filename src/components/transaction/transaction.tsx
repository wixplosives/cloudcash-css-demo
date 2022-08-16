import React from "react";
import "./transaction.css";
import { Icon } from "@blueprintjs/core";
import { IconName } from "@blueprintjs/icons";
import "../transaction-history/transaction-history.css";

export interface TransactionProps {
  className?: string;
  icon: string;
  receiver: string;
  typeName: string;
  date: string;
  amount: number;
}

export const Transaction: React.FC<TransactionProps> = ({
  className,
  icon,
  receiver,
  typeName,
  date,
  amount,
}) => {
  return (
    <div className={"tran_root tran_row" + " " + className}>
      <tr className={"tr"}>
        <td className={"tran_receiverColumn"}>
          <div>
            <Icon
              icon={icon as IconName}
              size={12}
              className={"icon"}
            />
          </div>
          <span>{receiver}</span>
        </td>
        <td className={"typeColumn"}>
          <span>{typeName}</span>
        </td>
        <td className={"dateColumn"}>
          <span>{date}</span>
        </td>
        <td className={"amountColumn"}>
          $<span>{amount}</span>
        </td>
      </tr>
    </div>
  );
};
