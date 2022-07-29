import React from "react";  
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Login from './pages/Login'
import  Register from "./pages/Register";

import './App.css'
const App =()=>{
    return <div>
        <h1> Welcome </h1>
        <BrowserRouter>
       <Routes><Route path = "/login"  element={<Login />} />
     <Route path = "/register"  element={<Register/>} /></Routes>
        </BrowserRouter>
    </div>
}

export default App