import Header from "./Component/Header";
import { Routes,Route } from "react-router-dom";import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Blogs from "./Pages/Blogs";
import Myblog from "./Pages/Myblog";
import Createblog from "./Pages/Createblog";
import Bogdetails from "./Pages/Bogdetails";

function App() {
  return (
    
<>
<Header/>
<Routes>
    <Route path="/" element={<Blogs/>}/>
    <Route path="/myblogs" element={<Myblog/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/blogs" element={<Blogs/>}/>
    <Route path="/blog-details/:id" element={<Bogdetails/>}/>

    <Route path="/create" element={<Createblog/>}/>

    </Routes>
    </>

  );
}

export default App;
