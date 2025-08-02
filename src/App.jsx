import {Link, Route, Routes} from "react-router-dom";
import ReactangleCircle from "./components/ReactangleCircle";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CommentApp from "./components/Comment";
import InfiniteLoad from "./components/InfiniteLoad";
import ButtonLoading from "./components/ButtonLoading";

function App() {


  return (
<> 
<div className="bg-black flex justify-center items-center ">
<Link to="/" className="text-center text-3xl md:text-5xl mx-auto text-white"> {"<"}</Link>
</div>
    <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/ReactangleCircle' element={<ReactangleCircle/> } />
      <Route path='/navbar' element={<NavBar /> } />
      <Route path="/commet" element={<CommentApp/> } />
      <Route path="/loadBar" element={<InfiniteLoad/> } />
      <Route path="/buttonLoad" element={<ButtonLoading/> } />
     </Routes>


     {/* here is just i check if i merge will i get any this , acheivement */}

     {/* as of now i am not getting any achievement, thinking because of my private repos */}
    </>
  )
}

export default App
