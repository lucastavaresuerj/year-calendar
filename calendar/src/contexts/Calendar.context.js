import React, { createContext, useState } from "react";

import { makeObjectCalendar } from "./calendarObject";

export const CalendarContext = createContext({
  data: null,
  yearNumber: null,
  changeMonthConfig: () => {},
  changeConfig: () => {},
});

export default function CalendarProvider({ children, calendarData }) {
  const [data, setData] = useState(calendarData || makeObjectCalendar());

  function changeConfig(conf) {
    const { months } = data;

    setData({ ...data, ...conf, months });
  }

  function changeMonthConfig(monthIndex, conf) {
    const { months } = data;

    months[monthIndex] = conf;
    setData({ ...data, months });
  }

  return (
    <CalendarContext.Provider value={{ data, changeMonthConfig, changeConfig }}>
      {children}
    </CalendarContext.Provider>
  );
}
