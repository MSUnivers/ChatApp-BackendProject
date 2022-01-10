import React, { createContext, useReducer, useState } from "react";
import { initialState, reduce } from "../reducer/Reducer";
export const ChatContext = createContext();

export default function SharedContext({ children }) {
  const [state,dispatch]=useReducer(reduce,initialState)

 /*  const [user, setUser] = useState({
    name: "maroua",
  });
  const [rooms, setRooms] = useState(["family", "travelling"]); */
  return (
    <ChatContext.Provider value={{ state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
}
