import React from "react";
import { Table } from "semantic-ui-react";

const days = ["D", "S", "T", "Q", "Q", "S", "S"];

export default function MonthWeekDays() {
  return (
    <Table.Row>
      {days.map((day, index) => (
        <Table.Cell width={1} key={`day-${index}`}>
          {day}
        </Table.Cell>
      ))}
    </Table.Row>
  );
}
