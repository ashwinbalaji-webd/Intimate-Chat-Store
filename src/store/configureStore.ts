import { configureStore } from "@reduxjs/toolkit";
import { intimateChatReducer } from "./store";

export const store = configureStore({
    reducer : intimateChatReducer,
})