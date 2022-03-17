import React, { createContext } from "react";

export const MonthContext = createContext({
  monthNumber: null,
});

export default function MonthProvider({ children, monthNumber }) {
  return (
    <MonthContext.Provider value={{ monthNumber }}>
      {children}
    </MonthContext.Provider>
  );
}
