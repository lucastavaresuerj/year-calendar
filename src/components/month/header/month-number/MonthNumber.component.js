import React, { useContext } from "react";

import { MonthContext } from "contexts/Month.context";
import { YearContext } from "contexts/Year.context";

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
