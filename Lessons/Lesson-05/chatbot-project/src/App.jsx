// Below is named export
import { useEffect, useState } from "react";
import { Chatbot } from "supersimpledev";
import { ChatInput } from "./components/ChatInput";
// Below is default export
import ChatMessages from "./components/ChatMessages";
import "./App.css";

function App() {
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    Chatbot.addResponses({
      goodbye: "Goodbye. Have a great day yoy oy yo!",
      "give me a unique id": function () {
        return `Sure! Here's a unique id : ${crypto.randomUUID()}`;
      },
    });
  }, []);

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App;
