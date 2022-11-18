import React from "react";
import{ BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import About from "./About.jsx";
import Contact from "./Contact";
import ErrorPage from "./ErrorPage.jsx";
import Home from "./Home";
import Navbar from "./Navbar.jsx";
import WeekApp from "../Week 4/WeekApp";

function Rapp(){
    return ( 
        <div>
            {/* <WeekApp/> */}
            <Navbar/>
            <Router>
                <Routes>
                    <Route path="/"element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/contact" element={<Contact/>}></Route>
                    <Route path="/weekapp" element={<WeekApp/>}></Route>
                    <Route path="*"element={<ErrorPage/>}></Route>
                    
                </Routes>
            </Router>
        </div>
     );
} 
export default Rapp;