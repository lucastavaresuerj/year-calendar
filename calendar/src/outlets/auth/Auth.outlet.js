import React from "react";
import { Outlet } from "react-router-dom";
import { Grid, Message } from "semantic-ui-react";

import MessagesProvider from "contexts/Messages.context";

export default function AuthOutlet() {
  return (
    <Grid stackable centered style={{ height: "93.5vh" }}>
      <Grid.Column verticalAlign="middle" className="login-form" width={4}>
        <Message attached header="Calendário de eventos" />
        <MessagesProvider>
          <Outlet />
        </MessagesProvider>
      </Grid.Column>
    </Grid>
  );
}
