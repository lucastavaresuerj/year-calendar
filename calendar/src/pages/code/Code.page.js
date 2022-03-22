import React, { useContext, useEffect } from "react";
import { Button, Segment, Message, Icon } from "semantic-ui-react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { UserContext } from "contexts/User.context";
import { MessagesContext } from "contexts/Messages.context";

import { MessageGroup } from "components";
import { CodeForm } from "components/auth";

export default function Code() {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const { resendConfirmationCode, confirmVrfCode, signIn, user } =
    useContext(UserContext);
  const { addMessage, messages, removeMessage } = useContext(MessagesContext);

  useEffect(() => {
    if (location.state?.requestNewCode) {
      resendConfirmationCode();
    }
  }, [location]);

  useEffect(() => {
    const messageIndex = addMessage({
      message: "Please, write your verification code send to your e-mail",
      ms: 0,
    });

    return () => {
      removeMessage({ index: messageIndex, dismiss: false });
    };
  }, []);

  async function onSubmit({ code }) {
    console.log({ code });
    try {
      await confirmVrfCode({ code });
    } catch (err) {
      console.log(err.name, { ...err });
      if (err.name === "CodeMismatchException") {
        addMessage({
          message: "The code do not match",
        });
      } else {
        addMessage({
          message: `Could not check the code, error name "${err.name}"`,
          ms: 0,
        });
      }
    }

    try {
      const { username, password } = user;
      await signIn({ username, password });
      navigate("/");
    } catch (err) {
      addMessage({
        message: "Cloud not make sign in, password possible is wrong",
      });
      navigate("/auth/signin");
    }
  }

  return (
    <>
      <Segment attached>
        <CodeForm onSubmit={onSubmit}>
          <Button primary type="submit">
            Verify Code
          </Button>
        </CodeForm>
      </Segment>
      <MessageGroup messages={messages} />
      <Message attached="bottom" warning>
        <Icon name="help" />
        Already confirmed the code?
        <Link to="/auth/signin"> Sign in here</Link> instead.
      </Message>
    </>
  );
}
