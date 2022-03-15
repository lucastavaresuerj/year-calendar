import React, { useContext } from "react";

import { MonthContext } from "contexts/MonthContext";

export default function MonthNumber({ month, config }) {
  const {
    config: { number },
    monthNumber,
  } = useContext(MonthContext);

  const style = {
    float: number.side,
  };

  return (
    <span className="month-number" style={style}>
      {monthNumber + 1}
    </span>
  );
}
