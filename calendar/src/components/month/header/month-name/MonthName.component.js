import React, { useContext } from "react";

import { MonthContext } from "contexts/Month.context";
import { CalendarContext } from "contexts/Calendar.context";

export default function MonthName({ children }) {
  const { monthNumber } = useContext(MonthContext);
  const {
    data: {
      defaultMonth: {
        header: { monthName: defaultMonthName },
      },
      months,
    },
  } = useContext(CalendarContext);

  const {
    header: { monthName: particularMonthName },
  } = months[monthNumber];
  const nameConfig = { ...defaultMonthName, ...particularMonthName };

  const style = {
    color: nameConfig.textColor,

    fontSize: nameConfig.size,
    textAling: nameConfig.aling,
    fontStyle: nameConfig.style,
    fontWeight: nameConfig.fontWeight,
  };

  function makeMonthName() {
    const date = new Date();
    date.setMonth(monthNumber);

    return date.toLocaleString(undefined, { month: "long" });
  }

  return (
    <p className="month-name" style={style}>
      {makeMonthName()}
      {children}
    </p>
  );
}
