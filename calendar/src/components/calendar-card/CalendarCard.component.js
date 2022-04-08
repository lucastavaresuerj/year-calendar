import React, { useContext } from "react";
import { Card } from "semantic-ui-react";

import "./CalendarCard.scss";

import { CalendarContext } from "contexts/Calendar.context";
import MonthProvider from "contexts/Month.context";

import { Month } from "components";

export default function CalendarCard() {
  const { name } = useContext(CalendarContext);

  return (
    <Card>
      <Card.Content>
        <Card.Header>{name}</Card.Header>
        <MonthProvider monthNumber={0}>
          <Month />
        </MonthProvider>
      </Card.Content>
    </Card>
  );
}
