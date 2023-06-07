import { Route, Routes } from "react-router-dom";
import Home from "./home";
import Navbar from "./navbar";
import About from "./about";
import Food from "./food";
import Addpost from "./addpost"
import SinglePost from "./singlePost";
import Footer from './footer';
const FoodPortal = () => {
    return (
         <div className="homeportel">
              <Navbar />
              <Routes>
                   <Route path='/' element={<Home/>} />
                   <Route path='/about' element={<About />} /> 
                   <Route path='/food' element={<Food/>} /> 
                   <Route path="/addpost" element={<Addpost />} />
                   <Route path='/food/:id' element={<SinglePost/>} />
                 
              </Routes>
              <Footer/>
         </div>
    );
}

export default FoodPortal;