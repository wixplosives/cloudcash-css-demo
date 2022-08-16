import React from "react";
import { createBoard } from "@wixc3/react-board";
import { TransactionHistory } from "../../../src/components/transaction-history/transaction-history";

export default createBoard({
  name: "TransactionHistory",
  Board: () => <TransactionHistory />,
});
