import React, { useContext } from "react";
import { Button, Segment, Message, Icon } from "semantic-ui-react";
import { Link, useNavigate } from "react-router-dom";

import { UserContext } from "contexts/User.context";
import { MessagesContext } from "contexts/Messages.context";

import { MessageGroup } from "components";
import { SignInForm } from "components/auth";

export default function SignIn() {
  const navigate = useNavigate();

  const { signIn } = useContext(UserContext);
  const { addMessage, messages } = useContext(MessagesContext);

  async function onSubmit({ username, password }) {
    console.log({ username, password });
    try {
      await signIn({ username, password });
      navigate("/");
    } catch (err) {
      if (err.name === "UserNotConfirmedException") {
        navigate("/auth/code", { state: { requestNewCode: true } });
      } else if (err.name === "UserNotFoundException") {
        addMessage({ message: "This user does not exist" });
      } else if (err.name === "NotAuthorizedException") {
        addMessage({ message: "Incorrect username or password." });
      } else {
        addMessage({
          message: `Could not make sign in, error name "${err.name}"`,
          ms: 0,
        });
      }
      console.log(err.name, { ...err });
    }
  }

  console.log(messages);

  return (
    <>
      <Segment attached>
        <SignInForm onSubmit={onSubmit}>
          <Button primary type="submit">
            Sign In
          </Button>
        </SignInForm>
      </Segment>
      <MessageGroup messages={messages} />
      <Message attached="bottom" warning>
        <Icon name="help" />
        Don't signed up yet?
        <Link to="/auth/signup"> Sign up here</Link> instead.
      </Message>
    </>
  );
}
