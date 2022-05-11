import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {useState} from 'react'
import Home from "./views/Home";
import Blog from "./views/Blog";
import Places from "./views/Places";
import Login from "./components/Login";
import Footer from "./components/Footer"
import Signup from "./components/Signup";

function App() {
  const [loggedIn, setLoggedIn] = useState(false)

  return ( 
    <Router> 
      <Routes>
        <Route exact path="/" element={<Home isLogged={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route exact path="blog" element={<Blog  isLogged={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route exact path="places" element={<Places  isLogged={loggedIn} setLoggedIn={setLoggedIn}/>} />
        <Route exact path="/login" element={<Login setLoggedIn={setLoggedIn}/>} />
        <Route exact path="/signup" element={<Signup setLoggedIn={setLoggedIn}/>} />
        <Route exact path="*" element={<div className="h-screen flex justify-center items-center">ERROR</div>} />
      </Routes>
      <Footer/>
    </Router>
 
  );
}

export default App;
