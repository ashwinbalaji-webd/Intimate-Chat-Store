import React from "react";
import './sendBtn.css';
import { ChatterProps } from "../../interfaces/chatter";

const SendBtn: React.FC<ChatterProps> = (props) => {
  return (
    <>
      <div className="cls-sendBtn-container">
        <button type="submit" id={props.chatter}>Send</button>
      </div>
    </>
  );
};

export default SendBtn
