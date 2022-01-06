import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import {ChatContext} from '../context/SharedContext'
import queryString from "query-string";
import io from "socket.io-client";
import ScrollToBottom from 'react-scroll-to-bottom';
import ReactEmoji from 'react-emoji'

let socket;
export default function Chat() {
    const {user}=useContext(ChatContext);
    const baseUrl = "http://localhost:5001";
    let location = useLocation();
   
    const [roomSo, setRoom] = useState("");
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const { room } = queryString.parse(location.search);
        socket = io(baseUrl, { transports: ["websocket"] }); 
        let name = user.name;
        setRoom(room);
        console.log(socket);
    
        socket.emit("join", { name, room });
        return () => {
            socket.emit("disconnected");
            socket.off();
        };
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
    console.log(message);
    return (
        <>
            <div>
                <h1>
                    welcome {user.name} in our {roomSo}{" "}
                </h1>
               <div  style={{border: "1px solid grey",width:'50%'}}>
                   
               
                {messages.map((message,i) => {
                    return (
                        <ScrollToBottom style={{height:'600px',width:'400px'}}>
                        <div key={i} style={{margin:'2rem'}}>
                            <span >
                                {message.user}:   
                            </span>
                            <span style={{border:'1px solid blue',borderRadius:'8px',background:'grey',color:'white',padding:'5px'}}>{ReactEmoji.emojify(message.text)}</span>
                        </div>
                       
                        </ScrollToBottom>
                    );
                })}
                
            </div>
            <input
                    type="text"
                    placeholder="enter your message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => (e.key === "Enter" ? sendMessage(e) : console.log('error'))}
                />
            </div>
        </>
    );
}
