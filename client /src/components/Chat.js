import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import queryString from "query-string";
import io from "socket.io-client";

let socket;
export default function Chat() {
    const baseUrl = 'http://localhost:5001';
    let location = useLocation();
    const [nameSo, setName] = useState("");
    const [roomSo, setRoom] = useState("");
    const { message, setMessage } = useState("");
    const { messages, setMessages } = useState([]);
    useEffect(() => {
        const { name, room } = queryString.parse(location.search);
        socket = io(baseUrl, { transports: ['websocket'] })
        setName(name);
        setRoom(room);
        console.log(socket);
        socket.emit('join', { name, room })
        return () => {
            //socket.emit('disconnect');
            socket.off();
        }
    }, [baseUrl, location.search]);
    useEffect(() => {
        socket.on('message', (message) => {
            setMessages([...messages, message]);

        })
    }, [messages])
    const sendMessage = (e) => {
        e.preventDefault();
        if (message) {
            socket.emit('sendMessage', message, () => { setMessage('') })
        }
    }
console.log(message,messages)
    return (
        <div>
            <div>
                <h1>welcome {nameSo} in our {roomSo} </h1>
                <input value={message} onChange={(e) => e.target.value} onKeyPress={(e) => e.key === 'Enter' ? sendMessage(e) : null} />
            </div>



        </div>
    );
}
