import React, { useState } from "react";
import "./typeMessage.css";
import SendBtn from "../sendBtn/sendBtn";
import { useDispatch, useSelector } from "react-redux";
import { ChatterProps } from "../../interfaces/chatter";
import { state } from "../../interfaces/chatter";
import { addMessage } from "../../store/store";

const TypeMessage: React.FC<ChatterProps> = (props) => {
  //   const blueChats = useSelector((state: state) => state.blue.chats);
  //   const pinkChats = useSelector((state: state) => state.pink.chats);

  const [message, setMessage] = useState("");
  const [sender, setSender] = useState("");
  const [sentTime, setSentTime] = useState("");

  const dispatch = useDispatch();
  const chatter = props.chatter;

  const inputListener = (event: any) => {
    let time: any = new Date().toLocaleTimeString(navigator.language, {
      hour: "2-digit",
      minute: "2-digit",
      //   second: "2-digit",
    });
    console.log("time locale--->", time);

    time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)?$/) || [time];
    console.log("time --->", time);

    if (time.length > 1) {
      // If time format correct
      time = time.slice(1); // Remove full string match value
      console.log("--->length", time);

      time[4] = +time[0] < 12 ? " AM" : " PM"; // Set AM/PM
    }

    time.join("");

    setMessage(event.target.value);
    setSender(event.target.id);
    setSentTime(time);
  };

  const submitHandler = (event: any) => {
    event.preventDefault();

    if (message != "") {
      dispatch(
        addMessage({ sender: sender, message: message, timeStamp: sentTime })
      );
    }

    setMessage("");
    setSender("");
    setSentTime("");
  };

  return (
    <>
      <div className={`${chatter == "blue" ? "cls-blue" : "cls-pink"} cls-typeMessage-container`}>
        <form onSubmit={submitHandler}>
          <div>
            <input
              onChange={inputListener}
              type="text"
              value={message}
              id={chatter}
            ></input>
            <SendBtn chatter={chatter} />
          </div>
        </form>
      </div>
    </>
  );
};

export default TypeMessage;
