import React, { useContext } from "react";

import { MonthContext } from "contexts/Month.context";
import { YearContext } from "contexts/Year.context";

export default function MonthName({ children }) {
  const { monthNumber } = useContext(MonthContext);
  const {
    config: { name, months },
  } = useContext(YearContext);

  function makeTitle() {
    const date = new Date();
    date.setMonth(monthNumber);

    return date.toLocaleString(undefined, { month: "long" });
  }

  const style = {
    color: months[monthNumber].textColor,

    fontSize: name.size,
    textAling: name.aling,
    fontStyle: name.style,
    fontWeight: name.fontWeight,
  };

  return (
    <p className="month-name" style={style}>
      {makeTitle()}
      {children}
    </p>
  );
}
