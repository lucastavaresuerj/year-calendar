import React, { useContext } from "react";

import { MonthContext } from "contexts/MonthContext";
import { YearContext } from "contexts/YearContext";

export default function MonthNumber() {
  const { monthNumber } = useContext(MonthContext);
  const {
    config: { number },
  } = useContext(YearContext);

  const style = {
    float: number.side,
  };

  return (
    <span className="month-number" style={style}>
      {monthNumber + 1}
    </span>
  );
}
