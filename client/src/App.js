import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import Blog from "./views/Blog";
import Places from "./views/Places";
import Footer from "./components/Footer"

function App() {
  return (
    <div  className="">

    <Router> 
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="blog" element={<Blog />} />
        <Route exact path="places" element={<Places />} />
        <Route exact path="*" element={<div className="h-screen flex justify-center items-center">ERROR</div>} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
