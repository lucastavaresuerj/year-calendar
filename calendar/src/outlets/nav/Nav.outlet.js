import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { Menu, Container } from "semantic-ui-react";

import UserNav from "./user/UserNav.component";

export default function NavOutlet() {
  const [activeItem, setActiveItem] = useState("home");

  function handleItemClick(e, { name }) {
    setActiveItem(name);
  }

  return (
    <>
      <Menu pointing secondary>
        <Container>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            as={Link}
            to="/"
            onClick={handleItemClick}
          />
          <Menu.Item
            name="my calendars"
            active={activeItem === "my calendars"}
            as={Link}
            to="my-calendars"
            onClick={handleItemClick}
          />
          <Menu.Menu position="right">
            <UserNav />
          </Menu.Menu>
        </Container>
      </Menu>
      <Container>
        <Outlet />
      </Container>
    </>
  );
}
