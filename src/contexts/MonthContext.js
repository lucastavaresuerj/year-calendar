import React, { createContext, useState } from "react";

export const MonthContext = createContext({
  config: null,
  monthNumber: null,
});

export default function MonthProvider({ children, monthNumber }) {
  const [config, setConfig] = useState({
    month: {
      color: null,
    },
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
      color: null,
      aling: null,
      size: null,
      style: null,
      fontWeight: null,
    },
  });

  return (
    <MonthContext.Provider value={{ config, monthNumber }}>
      {children}
    </MonthContext.Provider>
  );
}
