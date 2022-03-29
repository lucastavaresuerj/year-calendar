import React, { useContext } from "react";
import { Table } from "semantic-ui-react";

import { CalendarContext } from "contexts/Calendar.context";
import { MonthContext } from "contexts/Month.context";

import MonthName from "./month-name/MonthName.component";
import MonthNumber from "./month-number/MonthNumber.component";

import "./MonthHeader.scss";

export default function MonthHeader() {
  const { monthNumber } = useContext(MonthContext);
  const {
    data: {
      defaultMonth: { header: globalHeader },
      months,
    },
  } = useContext(CalendarContext);

  const particularHeader = months[monthNumber];
  const headerConfig = { ...globalHeader, ...particularHeader };

  const headerStyle = {
    backgroundColor: headerConfig.background,
    padding: headerConfig.space,
  };

  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell
          className={`month-header ${
            headerConfig.showNumber ? "with-number" : "without-number"
          } ${!headerConfig.rounded && "not-rounded"}`}
          colSpan="7"
          style={headerStyle}
        >
          <MonthName>
            <MonthNumber />
          </MonthName>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Header>
  );
}
