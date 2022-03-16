import React, { useContext } from "react";
import { Table } from "semantic-ui-react";

import { YearContext } from "contexts/Year.context";

import MonthName from "./month-name/MonthName.component";
import MonthNumber from "./month-number/MonthNumber.component";

import "./MonthHeader.scss";

export default function MonthHeader() {
  const {
    config: { header },
  } = useContext(YearContext);

  const headerStyle = {
    backgroundColor: header.background,
    padding: header.space,
  };

  return (
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell
          className={`month-header ${
            header.showNumber ? "with-number" : "without-number"
          } ${!header.rounded && "not-rounded"}`}
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
