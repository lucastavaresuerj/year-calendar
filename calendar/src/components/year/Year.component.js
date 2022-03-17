import React, { useContext } from "react";
import { Grid, Header } from "semantic-ui-react";

import { YearContext } from "contexts/Year.context";
import MonthProvider from "contexts/Month.context";

import Month from "components/month/Month.component";

export default function Year({}) {
  const {
    yearNumber,
    config: { year },
  } = useContext(YearContext);

  function makeMonths() {
    const months = [];

    for (let month = 0; month < 12; month++) {
      months.push(
        <MonthProvider key={`y-${yearNumber}-m-${month}`} monthNumber={month}>
          <Month />
        </MonthProvider>
      );
    }
    return months;
  }

  return (
    <>
      <Header size="huge" textAlign="center">
        {yearNumber}
      </Header>
      <Grid container columns={year.col} className="year">
        {makeMonths()}
      </Grid>
    </>
  );
}
