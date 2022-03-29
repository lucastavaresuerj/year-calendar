import React from "react";

import CalendarProvider from "contexts/Calendar.context";
import { Calendar } from "components";

export default function Home() {
  return (
    <>
      <CalendarProvider yearNumber={2022}>
        <Calendar />
      </CalendarProvider>
    </>
  );
}
