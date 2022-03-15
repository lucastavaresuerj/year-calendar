import React, { createContext, useEffect, useState } from "react";

export const YearContext = createContext({
  config: null,
  yearNumber: null,
});

export default function YearProvider({ children, yearNumber }) {
  const [config, setConfig] = useState({ year: { col: 3 }, months: [] });

  useEffect(() => {
    makeMonths();
  }, []);

  function makeMonths() {
    const months = [];

    for (let i = 0; i < 12; i++) {
      months.push({ month: i, config: config.months?.[i] });
    }

    setConfig({ ...config, months });
  }

  return (
    <YearContext.Provider value={{ config, yearNumber }}>
      {children}
    </YearContext.Provider>
  );
}
