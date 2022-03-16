import React, { useContext, useState } from "react";
import { Table, Grid } from "semantic-ui-react";

import { YearContext } from "contexts/Year.context";
import { MonthContext } from "contexts/Month.context";

import MonthDays from "./days/MonthDays.component";
import MonthHeader from "./header/MonthHeader.component";
import MonthWeekDays from "./weekdays/MonthWeekDays.component";

export default function Month() {
  const { monthNumber } = useContext(MonthContext);
  const {
    config: { months },
  } = useContext(YearContext);

  return (
    <Grid.Column className="month" color={months[monthNumber].color}>
      <Table unstackable>
        <MonthHeader />
        <Table.Body>
          <MonthWeekDays />
          <MonthDays />
        </Table.Body>
      </Table>
    </Grid.Column>
  );
}
