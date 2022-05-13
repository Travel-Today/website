import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState} from 'react'
import Home from "./views/Home";
import Blog from "./views/Blog";
import Places from "./views/Places";
import Login from "./components/LoginLogout";
import Footer from "./components/Footer"
import Signup from "./components/Signup";
import ForgetPassword from "./components/ForgetPassword";
import Navbar from "./components/Navbar";

const  App=()=> {

  
    return (
      <div  className="">
      <Router> 
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="blog" element={<Blog />} />
          <Route exact path="places" element={<Places />} />
          <Route exact path="/login" element={<Login/>} />
          <Route exact path="/signup" element={<Signup/>} />
          <Route exact path="/forgetPassword" element={<ForgetPassword/>} />
          <Route exact path="*" element={<div className="h-screen flex justify-center items-center">ERROR</div>} />
        </Routes>
        <Footer/>
      </Router>
      </div>
    ) 

  }
export default App;
