import { createSlice , configureStore } from "@reduxjs/toolkit";
import { InitialState } from "../interfaces/chatter";


const initialState : InitialState = {
    conversations : [] , 
};

const chatSlice = createSlice({
    name : 'chats',
    initialState,
    reducers : {
        addMessage(state , action){
            let timeStamp = action.payload.timeStamp;
            state.conversations.push({sender : action.payload.sender , message : action.payload.message , sentTime : timeStamp})
        }
    }
})


export const {
    reducer : intimateChatReducer,
    actions : {addMessage}
} = chatSlice