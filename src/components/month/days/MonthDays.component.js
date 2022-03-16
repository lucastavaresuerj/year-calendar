import React, { useContext } from "react";
import { Table } from "semantic-ui-react";

import { YearContext } from "contexts/Year.context";
import { MonthContext } from "contexts/Month.context";

const config = {
  days: {
    "2022-03-14": { color: "blue" },
  },
  range: {},
};

export default function MonthDays() {
  const { yearNumber } = useContext(YearContext);
  const { monthNumber } = useContext(MonthContext);

  const days = makeDays(yearNumber, monthNumber);

  function formatDay(day = new Date(), type) {
    return { day: day.getDate(), type };
  }

  function sliceDays(days = []) {
    let index = 0;
    const daysByWeek = [];
    while (index < days.length) {
      daysByWeek.push(days.slice(index, index + 7));
      index = index + 7;
    }
    return daysByWeek;
  }

  function makeDays(year, month) {
    const date = new Date(year, month, 1);
    const days = [];

    // Days before month start
    for (let weekDay = date.getDay(); weekDay > 0; weekDay--) {
      days.push(
        formatDay(new Date(year, month, date.getDate() - weekDay), "before")
      );
    }

    while (date.getMonth() === month) {
      days.push(formatDay(new Date(date), "during"));
      date.setDate(date.getDate() + 1);
    }

    // Days after month finish
    for (
      let [weekDayBegin, weekDay] = [date.getDay(), date.getDay()];
      weekDay < 7;
      weekDay++
    ) {
      days.push(
        formatDay(
          new Date(year, month, date.getDate() + weekDay - weekDayBegin),
          "after"
        )
      );
    }

    return sliceDays(days);
  }

  console.log(days);

  return days.map((week, weekIndex) => (
    <Table.Row key={`week-${weekIndex}`}>
      {week.map(({ day }, index) => (
        <Table.Cell key={`day-${index}`}>{day}</Table.Cell>
      ))}
    </Table.Row>
  ));
}
