import React, { useState } from "react";

function Message() {
  const [textValue, setTextValue] = useState("");
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={textValue}
        placeholder="send message..."
        onChange={(e) => setTextValue(e.target.value)}
        className="w-full pl-1 py-2 rounded-lg"
      />
      <img
        src="/svg/sendIcon.svg"
        alt="sendIcon"
        className="absolute right-1 top-2 w-5 h-5 -rotate-12"
      />
    </div>
  );
}

export default Message;
