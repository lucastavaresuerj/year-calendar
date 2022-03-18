import React, { useState } from "react";
import { Form, Segment } from "semantic-ui-react";

export default function LoginForm() {
  const [formValues, setFormValues] = useState({});

  function handeFormInput(e, { username, value }) {
    setFormValues({ ...formValues, [username]: value });
  }

  return (
    <Segment attached>
      <Form className="">
        <Form.Input
          label="Username"
          name="username"
          onChange={handeFormInput}
        />
        <Form.Input
          type="email"
          label="E-mail"
          name="email"
          onChange={handeFormInput}
        />
        <Form.Input
          type="password"
          label="Password"
          name="password"
          onChange={handeFormInput}
        />
      </Form>
    </Segment>
  );
}
