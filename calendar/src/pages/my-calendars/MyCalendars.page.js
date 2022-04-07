import React, { useEffect, useState } from "react";

import { graphql } from "graphql/query";
import CalendarProvider from "contexts/Calendar.context";
import { CalendarCard } from "components";

export default function MyCalendars() {
  const [calendars, setCalendars] = useState([]);
  const [nextToken, setNextToken] = useState();

  useEffect(async () => {
    const query = `#graphql
      query MyCalendarsPage($pagination: InpPagination) {
        cardPreview(pagination: $pagination) {
          nextToken
          items {
            user
            year
            name
            index
          }
        }
      }
    `;
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
      {calendars.map((calendar) => (
        <CalendarProvider calendarData={calendar}>
          {/*<CalendarCard />*/}
        </CalendarProvider>
      ))}
    </>
  );
}
