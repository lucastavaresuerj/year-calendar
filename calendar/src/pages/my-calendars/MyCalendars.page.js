import React, { useEffect, useState } from "react";

import query from "./cardPreview.graphql";

import { graphql } from "graphql/query";
import CalendarProvider from "contexts/Calendar.context";
import { CalendarCard } from "components";

export default function MyCalendars() {
  const [calendars, setCalendars] = useState([]);
  const [nextToken, setNextToken] = useState();

  useEffect(async () => {
    const {
      data: { cardPreview },
    } = await graphql(query, {
      pagination: {
        nextToken,
        limit: 20,
      },
    });
    setCalendars(cardPreview.items);
    setNextToken(cardPreview.nextToken);
  }, []);

  return (
    <>
      {calendars.map((calendar, index) => (
        <CalendarProvider calendarData={calendar} key={`card-${index}`}>
          {/*<CalendarCard />*/}
        </CalendarProvider>
      ))}
    </>
  );
}
