import React from "react";
import "./App.css";
import ChatFrame from "./components/chatFrame/chatFrame";
import { store } from "./store/configureStore";
import { Provider } from "react-redux";

function App() {

  const chatters = ['blue' , 'pink']

  return (
    <div className="App">
      <Provider store={store}>
        <div className="cls-app-container">
          {chatters.map((chatter)=>{
            return <ChatFrame chatter = {chatter}/>
          })}
        </div>
      </Provider>
    </div>
  );
}

export default App;
