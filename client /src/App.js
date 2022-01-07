import React from 'react';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat'
import SharedContext from './context/SharedContext'
import Login from './components/Login';

export default function App() {
    return ( <SharedContext>
        <div>
           <Login/>
                <Routes>

                    <Route path="/chat" element={<Chat />}></Route>
                    <Route path="/join" element={<Join />}></Route>

                </Routes>
            
        </div></SharedContext>
    )
}
