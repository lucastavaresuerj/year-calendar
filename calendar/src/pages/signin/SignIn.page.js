import React, { useContext } from "react";
import { Button, Segment, Message, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { UserContext } from "contexts/User.context";
import { SignInForm } from "components/auth";

export default function SignIn() {
  const { signIn } = useContext(UserContext);

  async function onSubmit({ username, password }) {
    console.log({ username, password });
    try {
      await signIn({ username, password });
    } catch (error) {
      console.log(error.name, error);
    }
  }

  return (
    <>
      <Segment attached>
        <SignInForm onSubmit={onSubmit}>
          <Button primary type="submit">
            Sign In
          </Button>
        </SignInForm>
      </Segment>
      <Message attached="bottom" warning>
        <Icon name="help" />
        Don't signed up yet?
        <Link to="/auth/signup"> Sign up here</Link> instead.
      </Message>
    </>
  );
}
