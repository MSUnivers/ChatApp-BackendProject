import React from 'react';
import {BrowserRouter as Router,Routes,Route,Switch} from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat'

export default function App() {
    return (
        <div>
            <Routes>
            <Route path="/chat" element={<Chat />}></Route>
            <Route path="/join" element={<Join />}></Route>
          
           </Routes>
        </div>
    )
}
