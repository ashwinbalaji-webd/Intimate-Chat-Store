import React from "react";
import "./chatBody.css";
import Message from "../message/message";
import { ChatterProps, Messages } from "../../interfaces/chatter";
import { state } from "../../interfaces/chatter";
import { useSelector } from "react-redux";

const ChatBody: React.FC<ChatterProps> = (props) => {
  let chatter = props.chatter;
  
  const conversations = useSelector((state: state) => state.conversations);

  return (
    <>
      <div className={`cls-chatBody-container ${chatter == 'blue' ? 'cls-blue' : 'cls-pink'}`}>
        {conversations.map((messageBody: any) => {
          return (
            <Message
              sender={messageBody.sender}
              message={messageBody.message}
              sentTime={messageBody.sentTime}
              chatter = {chatter}
            />
          );
        })}

      </div>

    </>
  );
};

export default ChatBody;
