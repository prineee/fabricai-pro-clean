import { useState } from "react";
import axios from "axios";

export default function AIChat() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!message) return;

    const userMessage = {
      sender: "user",
      text: message,
    };

    setChat((prev) => [...prev, userMessage]);

    try {
      const res = await axios.post(
        "https://fabricai-backend.onrender.com/api/ai/chat",
        {
          message,
        }
      );

      const aiMessage = {
        sender: "ai",
        text: res.data.reply,
      };

      setChat((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.log(error);

      setChat((prev) => [
        ...prev,
        {
          sender: "ai",
          text: "AI request failed",
        },
      ]);
    }

    setMessage("");
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-6xl font-bold mb-10">
        FabricAI Chat Assistant
      </h1>

      <div className="bg-zinc-900 rounded-3xl p-8 h-[600px] overflow-y-auto">
        <div className="space-y-6">
          {chat.map((msg, index) => (
            <div
              key={index}
              className={`p-6 rounded-3xl text-3xl ${
                msg.sender === "user"
                  ? "bg-blue-600 text-white ml-20"
                  : "bg-zinc-700 text-white mr-20"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-8">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask AI anything..."
          className="flex-1 bg-zinc-800 text-white p-6 rounded-3xl text-3xl outline-none"
        />

        <button
          onClick={sendMessage}
          className="bg-blue-600 hover:bg-blue-700 px-10 rounded-3xl text-3xl font-bold"
        >
          Send
        </button>
      </div>
    </div>
  );
}