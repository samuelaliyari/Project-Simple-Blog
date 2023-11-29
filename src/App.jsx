import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css'
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Posts from "./pages/Posts";


function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Home />}/>
          <Route path="/blog" element = {<Blog />}/>
          <Route path="/contact" element = {<Contact />}/>
          <Route path="/posts" element = {<Posts />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
