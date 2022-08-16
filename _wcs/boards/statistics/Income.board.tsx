import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Statistics } from "../../../src/components/statistics/statistics";

export default createBoard({
  name: "Income",
  Board: () => <Statistics price={1500.55} type="income" />,
});
