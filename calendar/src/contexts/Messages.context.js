import React, { createContext, useState } from "react";

export const MessagesContext = createContext({
  messages: null,
  addMessage: () => {},
  removeMessage: () => {},
});

export default function MessagesProvider({ children }) {
  const [messages, setMessages] = useState({});

  function addMessage({ message, onDismiss, ms = 3000 }) {
    const now = Date.now();
    const messageProps = {
      content: message,
      onDismiss,
    };

    setMessages({ ...messages, [now]: messageProps });
    setTimeout(() => {
      removeMessage({ index: now });
    }, ms);
    return { [now]: message };
  }

  function removeMessage({ index, removeAll = false }) {
    if (removeAll) {
      setMessages({});
      return;
    }
    const { [index]: toBeRemoved, ...rest } = messages;
    toBeRemoved?.onDismiss();
    setMessages(rest);
  }

  function getMessages() {
    return Object.values(messages).map((message) => message);
  }

  return (
    <MessagesContext.Provider
      value={{ messages: getMessages(), addMessage, removeMessage }}
    >
      {children}
    </MessagesContext.Provider>
  );
}
