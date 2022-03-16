import React from "react";
import { Dropdown } from "semantic-ui-react";

export default function UserNav() {
  return (
    <Dropdown item text="user_name">
      <Dropdown.Menu>
        <Dropdown.Item>Logout</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
