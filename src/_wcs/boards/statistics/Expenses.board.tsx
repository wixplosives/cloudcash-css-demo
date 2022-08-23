import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Statistics } from "../../../components/statistics/statistics";

export default createBoard({
  name: "Expenses",
  Board: () => <Statistics price={350.65} type="expenses"></Statistics>,
});
