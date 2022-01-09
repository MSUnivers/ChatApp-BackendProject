import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import { ChatContext } from "../context/SharedContext";
import queryString from "query-string";
import io from "socket.io-client";

let socket;
export default function Chat() {
  const { state } = useContext(ChatContext);
  const baseUrl = "http://localhost:5001";
  let location = useLocation();

  const [roomSo, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const { room } = queryString.parse(location.search);
    socket = io(baseUrl, { transports: ["websocket"] });
    let name = state.user.name;
    setRoom(room);
    console.log(socket);

    async function emitSocket() {
      await socket.emit("join", { name, room });
      return () => {
        socket.emit("disconnected");
        socket.off();
      };
    }

    emitSocket();
  }, [baseUrl, location.search]);
  useEffect(() => {
    socket.on("message", (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (message) {
      socket.emit("sendMessage", message, () => setMessage(""));
    }
  };
  console.log(message, messages);
  return (
    <>
      <div>
        <h1>
          welcome {state.user.name} in our {roomSo}{" "}
        </h1>
        <input
          type="text"
          placeholder="enter your message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) =>
            e.key === "Enter" ? sendMessage(e) : console.log("error")
          }
        />
        {messages.map((message) => {
          return (
            <div>
              <span>{message.user}:</span>
              <span>{message.text}</span>
            </div>
          );
        })}
      </div>
    </>
  );
}
