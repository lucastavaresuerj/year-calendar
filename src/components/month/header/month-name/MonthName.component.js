import React, { useContext } from "react";

import { MonthContext } from "contexts/MonthContext";

export default function MonthName({ children }) {
  const {
    config: { name },
    monthNumber,
  } = useContext(MonthContext);

  function makeTitle() {
    const date = new Date();
    date.setMonth(monthNumber);

    return date.toLocaleString(undefined, { month: "long" });
  }

  const style = {
    color: name.color,
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
