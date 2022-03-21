import React from "react";
import { Message } from "semantic-ui-react";

export default function MessageGroup({ messages = [] }) {
  return messages.map((message, index) => (
    <Message key={`message-${index}`} {...message} attached />
  ));
}
