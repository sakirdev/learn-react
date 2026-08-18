import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";

function ChatMessages({ chatMessages, textInput }) {
  /*
                1. useRef = automatically save an HTML element from the component
            */
  const chatMessagesRef = useRef(null);

  /* 
                1. useEffect = run some code after the component is created or updated
                2. useEffect have 2 argument
                    a. function (code that we want to run on component created or updated)
                    b. dependency arrays = function runs when value in this arrays changes 
            */
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);
  const messages = chatMessages.map((chatMessage) => {
    return (
      <ChatMessage
        message={chatMessage.message}
        sender={chatMessage.sender}
        key={chatMessage.id}
      />
    );
  });

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {messages}
    </div>
  );
}

export default ChatMessages;
