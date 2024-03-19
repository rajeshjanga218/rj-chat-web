import React, { useState } from "react";

import useSendMessage from "../hooks/useSendMessage";

function Message() {
  const [textValue, setTextValue] = useState("");
  const { loading, sendMessage } = useSendMessage();
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await sendMessage({ message: textValue });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="relative w-full">
        <input
          type="text"
          value={textValue}
          placeholder="send message..."
          onChange={(e) => setTextValue(e.target.value)}
          className="w-full pl-1 py-2 rounded-lg"
        />
        <button type="submit">
          <img
            src="/svg/sendIcon.svg"
            alt="sendIcon"
            className="absolute right-1 top-2 w-5 h-5 -rotate-12"
          />
        </button>
      </div>
    </form>
  );
}

export default Message;
