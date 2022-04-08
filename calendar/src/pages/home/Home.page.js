import React from "react";

import { makeObjectCalendar } from "contexts/calendarObject";

import CalendarProvider from "contexts/Calendar.context";
import { Calendar } from "components";

export default function Home() {
  const calendarData = makeObjectCalendar();

  return (
    <>
      <CalendarProvider calendarData={calendarData}>
        <Calendar />
      </CalendarProvider>
    </>
  );
}
