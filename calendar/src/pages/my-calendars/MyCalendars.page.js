import React, { useState } from "react";

import CalendarProvider from "contexts/Calendar.context";

import { CalendarCard } from "components";

export default function MyCalendars() {
  const [calendars, setCalendars] = useState([]);

  return (
    <>
      {calendars.map((calendar) => (
        <CalendarProvider {...calendar}>
          <CalendarCard />
        </CalendarProvider>
      ))}
    </>
  );
}
