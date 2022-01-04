import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Join() {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');
    return (
        <div>
            <div>
                <h1>Join</h1>
                <div>
                    <input type="text" placeholder="Name"  onChange={(e)=>setName(e.target.value)}  />

                </div>
                <div>
                    <input type="text" placeholder="Room" onChange={(e)=>setRoom(e.target.value)} />
                </div>
                <Link to={`/chat?name=${name}&room=${room}`} onClick={(e)=>(!name||!room)?e.preventDefault():null}>
                <button type="submit" class="btn btn-primary">Sign In</button>
                </Link>
            </div>
        </div>
    )
}
