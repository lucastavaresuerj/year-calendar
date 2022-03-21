import React, { useState } from "react";
import { Form } from "semantic-ui-react";

export default function SignInForm({ onSubmit, children }) {
  const [formValues, setFormValues] = useState({});

  function handeFormInput(e, { name, value }) {
    setFormValues({ ...formValues, [name]: value });
  }

  function submit() {
    if (onSubmit) onSubmit(formValues);
  }

  return (
    <Form onSubmit={submit}>
      <Form.Input
        type="text"
        label="Username"
        name="username"
        onChange={handeFormInput}
      />
      <Form.Input
        type="password"
        label="Password"
        name="password"
        onChange={handeFormInput}
      />
      {children}
    </Form>
  );
}
