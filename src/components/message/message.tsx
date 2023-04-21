import React from "react";
import { Messages } from "../../interfaces/chatter";
import "./message.css";

const Message: React.FC<Messages> = (props) => {
  return (
    <>
      <div
        className="cls-message-container"
        style={
          props.chatter === props.sender
            ? { alignSelf: "end" }
            : { alignSelf: "start" }
        }
      >
        <div className="cls-message">
          <span>{props.message}</span>
          <span className="cls-sent-time">{props.sentTime}</span>
        </div>
      </div>
    </>
  );
};

export default Message;
