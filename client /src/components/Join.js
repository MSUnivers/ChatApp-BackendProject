import React, { useContext } from 'react';
import { ChatContext } from '../context/SharedContext'
import { Link } from 'react-router-dom';

export default function Join() {
    const { state } = useContext(ChatContext);
    return (
        
        <div>
            <Link to={`/chat?room=${state.rooms[0]}`} >
                <button type="submit" class="btn btn-primary">Join</button>
            </Link>

        </div>
    )
}
