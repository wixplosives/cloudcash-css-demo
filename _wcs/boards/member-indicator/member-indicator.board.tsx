import React from "react";
import { createBoard } from "@wixc3/react-board";
import { MemberIndicator } from "../../../src/components/member-indicator/member-indicator";

export default createBoard({
  name: "MemberIndicator",
  Board: () => <MemberIndicator />,
});
