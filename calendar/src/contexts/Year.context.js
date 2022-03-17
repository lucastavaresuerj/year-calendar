import React, { createContext, useEffect, useState } from "react";

export const YearContext = createContext({
  config: null,
  yearNumber: null,
  changeMonthConfig: () => {},
  changeConfig: () => {},
});

export default function YearProvider({ children, yearNumber, yearData }) {
  const [config, setConfig] = useState(
    yearData || {
      year: { col: 3 },
      header: {
        rounded: true,
        showNumber: false,
        background: null,
        space: null,
      },
      number: {
        side: null,
      },
      name: {
        aling: null,
        size: null,
        style: null,
        fontWeight: null,
      },
      months: Array(12).fill({ color: null, textColor: null }),
    }
  );

  function changeConfig(conf) {
    const { months } = config;

    setConfig({ ...config, ...conf, months });
  }

  function changeMonthConfig(monthIndex, conf) {
    const { months } = config;

    months[monthIndex] = conf;
    setConfig({ ...config, months });
  }

  return (
    <YearContext.Provider
      value={{ config, yearNumber, changeMonthConfig, changeConfig }}
    >
      {children}
    </YearContext.Provider>
  );
}
