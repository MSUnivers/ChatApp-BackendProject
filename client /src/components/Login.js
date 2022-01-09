import React, { useEffect, useState,useContext } from 'react'
import makeCall from '../api/Call'
import {ChatContext} from '../context/SharedContext'
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [inputValues, setInputValues] = useState({ username: '', password: '' });
    const {state,dispatch}=useContext(ChatContext);
    let navigate = useNavigate();


    function getValue(e) {
        e.preventDefault();
        console.log(`e`, e);
        setInputValues({ ...inputValues, [e.target.name]: e.target.value });

    }
    function login(e) {
        e.preventDefault();
        makeCall('/users/login', 'POST', inputValues)
            .then(result => {console.log(result.user.username); dispatch({type: 'AUTHENTICATED', payload: result.user.username});
            navigate(`/join`);
            });
           


    }
    console.log(`state.user.name`, state);

    return (
        <div>
            <form onChange={getValue} onSubmit={login} >
                <input type="text" placeholder="username" name="username" />
                <input type="password" placeholder="password" name="password" />
                <input type="submit" value="Login" />
            </form >
        </div>
    )
}
