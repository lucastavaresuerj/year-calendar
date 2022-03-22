import React, { useContext } from "react";
import { Button, Segment, Message, Icon } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "contexts/User.context";
import { MessagesContext } from "contexts/Messages.context";

import { MessageGroup } from "components";
import { SignUpForm } from "components/auth";

export default function SignUp() {
  const navigate = useNavigate();

  const { signUp } = useContext(UserContext);
  const { addMessage, messages } = useContext(MessagesContext);

  async function onSubmit({ username, password, email }) {
    console.log({ username, password, email });
    try {
      await signUp({ username, password, attributes: { email } });
      navigate("/auth/code", { state: { requestNewCode: false } });
    } catch (err) {
      addMessage({
        message: `Could not make sign in, error name "${err.name}"`,
        ms: 0,
      });

      console.log(err.name, err);
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
      <MessageGroup messages={messages} />
      <Message attached="bottom" warning>
        <Icon name="help" />
        Already signed up?
        <Link to="/auth/signin"> Sign in here</Link> instead.
      </Message>
    </>
  );
}
