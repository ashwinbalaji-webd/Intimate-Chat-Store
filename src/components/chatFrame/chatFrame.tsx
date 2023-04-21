import React from "react";
import './chatFrame.css';
import Title from "../title/title";
import ChatBody from "../chatBody/chatBody";
import TypeMessage from "../typeMessage/typeMessage";
import { ChatterProps } from "../../interfaces/chatter";


const ChatFrame:React.FC<ChatterProps> = (props) => {
    return(
        <>
            <div className="cls-chat-container">
                <Title chatter = {props.chatter}/>
                <ChatBody chatter = {props.chatter}/>
                <TypeMessage chatter = {props.chatter}/>
            </div>
        </>
    )
}

export default ChatFrame