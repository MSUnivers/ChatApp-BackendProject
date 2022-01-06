import React, { useState,useContext } from 'react';
import {ChatContext} from '../context/SharedContext'
import { Link } from 'react-router-dom';

export default function Join() {
   const {user,rooms}=useContext(ChatContext);
    return (
        <div>
        
                {/* <div>
                    <input type="text" placeholder="Room" onChange={(e)=>setRoom(e.target.value)} />
                </div> */}
                <Link to={`/chat?room=${rooms[0]}`} >
                <button type="submit" class="btn btn-primary">Sign In</button>
                </Link>
       
        </div>
    )
}
