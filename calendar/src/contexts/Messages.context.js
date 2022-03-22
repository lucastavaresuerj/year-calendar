import React, { createContext, useEffect, useState } from "react";

export const MessagesContext = createContext({
  messages: null,
  addMessage: () => {},
  removeMessage: () => {},
});

export default function MessagesProvider({ children }) {
  const [messages, setMessages] = useState({});

  useEffect(() => {
    return () => {
      setMessages({});
    };
  }, []);

  function defaultDismis(index) {
    removeMessage({ index, dismiss: false });
  }

  function addMessage({ message, onDismiss, ms = 3000 }) {
    const now = Date.now();
    const messageProps = {
      content: message,
      onDismiss: onDismiss || (() => defaultDismis(now)),
    };

    setMessages({ ...messages, [now]: messageProps });

    if (ms !== 0) {
      setTimeout(() => {
        removeMessage({ index: now });
      }, ms);
    }

    return { [now]: message };
  }

  function removeMessage({ index, dismiss = true, removeAll = false }) {
    if (removeAll) {
      setMessages({});
      return;
    }

    const { [index]: toBeRemoved, ...rest } = messages;

    dismiss && toBeRemoved?.onDismiss();
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
