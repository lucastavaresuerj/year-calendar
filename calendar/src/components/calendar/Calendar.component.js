import React, { useContext } from "react";
import { Grid, Header } from "semantic-ui-react";

import { CalendarContext } from "contexts/Calendar.context";
import MonthProvider from "contexts/Month.context";

import Month from "components/month/Month.component";

export default function Calendar({}) {
  const {
    data: { year, colNumber },
  } = useContext(CalendarContext);

  function makeMonths() {
    const months = [];

    for (let month = 0; month < 12; month++) {
      months.push(
        <MonthProvider key={`y-${year}-m-${month}`} monthNumber={month}>
          <Month />
        </MonthProvider>
      );
    }
    return months;
  }

  return (
    <>
      <Header size="huge" textAlign="center">
        {year}
      </Header>
      <Grid container columns={colNumber} className="year">
        {makeMonths()}
      </Grid>
    </>
  );
}
