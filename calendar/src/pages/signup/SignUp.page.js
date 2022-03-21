import React, { useContext } from "react";
import { Button, Segment, Message, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import { UserContext } from "contexts/User.context";
import { MessagesContext } from "contexts/Messages.context";

import { MessageGroup } from "components";
import { SignUpForm } from "components/auth";

export default function SignUp() {
  const { signUp } = useContext(UserContext);
  const { addMessages } = useContext(MessagesContext);

  async function onSubmit({ username, password, email }) {
    console.log({ username, password, email });
    try {
      await signUp({ username, password, attributes: { email } });
    } catch (error) {
      addMessages(error.name);
      console.log(error.name, error);
    }
  }

  return (
    <>
      <Segment attached>
        <SignUpForm onSubmit={onSubmit}>
          <Button primary type="submit">
            Create User
          </Button>
        </SignUpForm>
      </Segment>
      <MessageGroup />
      <Message attached="bottom" warning>
        <Icon name="help" />
        Already signed up?
        <Link to="/auth/signin"> Sign in here</Link> instead.
      </Message>
    </>
  );
}
