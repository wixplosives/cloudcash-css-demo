import React from "react";
import "./title.css";
import "../transaction-history/transaction-history.css";

export interface TitleProps {
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ className }) => {
  return (
    <div
      className={"titl_root titl_row tableTitle" + " " + className}
    >
      <tr className={"tr"}>
        <td className={"titl_receiverColumn"}>
          <span>Reciever</span>
        </td>
        <td className={"titl_typeColumn"}>
          <span>Type</span>
        </td>
        <td className={"titl_dateColumn"}>
          <span>Date</span>
        </td>
        <td className={"titl_amountColumn"}>
          <span>Amount</span>
        </td>
      </tr>
    </div>
  );
};
