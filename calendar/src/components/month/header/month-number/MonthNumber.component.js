import React, { useContext } from "react";

import { MonthContext } from "contexts/Month.context";
import { CalendarContext } from "contexts/Calendar.context";

export default function MonthNumber() {
  const { monthNumber } = useContext(MonthContext);
  const {
    data: {
      defaultMonth: {
        header: { number: defaultNumber },
      },
      months,
    },
  } = useContext(CalendarContext);

  const {
    header: { number: particularNumber },
  } = months[monthNumber];
  const numberConfig = { ...defaultNumber, ...particularNumber };

  const style = {
    float: numberConfig.side,
  };

  return (
    <span className="month-number" style={style}>
      {monthNumber + 1}
    </span>
  );
}
