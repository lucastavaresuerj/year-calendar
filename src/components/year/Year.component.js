import React, { useContext } from "react";
import { Grid, Header } from "semantic-ui-react";

import { YearContext } from "contexts/YearContext";
import MonthProvider from "contexts/MonthContext";

import Month from "components/month/Month.component";

export default function Year({}) {
  const {
    yearNumber,
    config: { months, year },
  } = useContext(YearContext);

  return (
    <>
      <Header size="huge" textAlign="center">
        {yearNumber}
      </Header>
      <Grid container columns={year.col} className="year">
        {months.map(({ month }) => (
          <MonthProvider key={`y-${yearNumber}-m-${month}`} monthNumber={month}>
            <Month />
          </MonthProvider>
        ))}
      </Grid>
    </>
  );
}
