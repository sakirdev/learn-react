import { useState } from "react";
import { Chatbot } from "supersimpledev";
import "./ChatInput.css";

export function ChatInput({ chatMessages, setChatMessages }) {
  const [textInput, setTextInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  function saveTextInput(event) {
    setTextInput(event.target.value);
  }

  function handleKeyDown(event) {
    if (event.key === "Escape" && textInput !== "") {
      setTextInput("");
    } else if (event.key === "Enter" && textInput !== "") {
      sendMessage();
    }
  }

  async function sendMessage() {
    if (isLoading || textInput === "") {
      return;
    }

    setIsLoading(true);

    const newChatMessage = [
      ...chatMessages,
      {
        message: textInput,
        sender: "user",
        id: crypto.randomUUID(),
      },
    ];

    setChatMessages([
      ...newChatMessage,
      {
        message: "Loading...",
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setTextInput("");

    const response = await Chatbot.getResponseAsync(textInput);

    setChatMessages([
      ...newChatMessage,
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);

    setIsLoading(false);
  }

  return (
    <div className="chat-input-container">
      <input
        className="chat-input"
        placeholder="Send a message to Chatbot"
        value={textInput}
        onChange={saveTextInput}
        onKeyDown={handleKeyDown}
      />
      <button
        className="send-button"
        onClick={sendMessage}
        disabled={textInput !== "" ? 0 : 1}
        /*  
                        define class in React using className instead of class,
                        because class is a reserved name
                    */
      >
        Send
      </button>
    </div>
  );
}
