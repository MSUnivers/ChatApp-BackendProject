import React, { createContext, useReducer, useState } from "react";
import { initialState, reduce } from "../reducer/Reducer";
export const ChatContext = createContext();

export default function SharedContext({ children }) {
  //const [state,dispatch]=useReducer(initialState,reduce)

  const [user, setUser] = useState({
    name: "maroua",
  });
  const [rooms, setRooms] = useState(["family", "travelling"]);
  return (
    <ChatContext.Provider value={{ user, rooms }}>
      {children}
    </ChatContext.Provider>
  );
}
