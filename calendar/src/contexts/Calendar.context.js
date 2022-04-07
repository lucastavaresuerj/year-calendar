import React, { createContext, useState } from "react";

export const CalendarContext = createContext({
  data: null,
  yearNumber: null,
  changeMonthConfig: () => {},
  changeConfig: () => {},
});

const weekday = {
  backgroundColor: null,
  textColor: null,
  textStyle: null,
  fontWeight: null,
  size: null,
};

const defaultMonth = {
  header: {
    rounded: true,
    backgroundColor: null,
    space: null,
    number: {
      showNumber: false,
      side: "RIGHT",
    },
    monthName: {
      aling: null,
      size: null,
      style: null,
      fontWeight: null,
      textColor: null,
    },
  },
  monthDay: {
    config: null,
  },
};

export default function CalendarProvider({ children, calendarData }) {
  const [data, setData] = useState(
    calendarData || {
      name: "",
      index: "",
      year: 2022,
      colNumber: 3,
      title: {
        name: "",
        config: {
          aling: null,
          size: null,
          style: null,
          fontWeight: null,
          textColor: null,
        },
      },
      defaultMonth: {
        ...defaultMonth,
        weekday,
      },
      months: Array(12).fill({
        ...defaultMonth,
        weekdays: Array(7).fill(weekday),
      }),
    }
  );

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
