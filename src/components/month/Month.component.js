import React, { useContext, useState } from "react";
import { Table, Grid } from "semantic-ui-react";

import { MonthContext } from "contexts/MonthContext";

import MonthDays from "./days/MonthDays.component";
import MonthHeader from "./header/MonthHeader.component";
import MonthWeekDays from "./weekdays/MonthWeekDays.component";

export default function Month() {
  const {
    config: { month },
  } = useContext(MonthContext);

  return (
    <Grid.Column className="month" color={month.color}>
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
