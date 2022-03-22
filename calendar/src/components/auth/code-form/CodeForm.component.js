import React, { useState } from "react";
import { Form } from "semantic-ui-react";

export default function CodeForm({ onSubmit, children }) {
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
        name="code"
        placeholder="######"
        onChange={handeFormInput}
      />
      {children}
    </Form>
  );
}
