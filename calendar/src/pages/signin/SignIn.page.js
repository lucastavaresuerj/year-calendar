import React, { useContext } from "react";
import { Button, Segment } from "semantic-ui-react";

import { UserContext } from "contexts/User.context";
import { SignInForm } from "components/auth";

export default function SignIn() {
  const { signIn } = useContext(UserContext);

  async function onSubmit({ username, password, email }) {
    console.log({ username, password, email });
    try {
      await signIn({ username, password, attributes: { email } });
    } catch (error) {
      console.log(error.name, error);
    }
  }

  return (
    <Segment attached>
      <SignInForm onSubmit={onSubmit}>
        <Button type="submit">Create User</Button>
      </SignInForm>
    </Segment>
  );
}
