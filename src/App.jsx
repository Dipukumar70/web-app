import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./assets/Home";
import About from "./assets/About";
import Contact from "./assets/Contact";
import Navbar from "./assets/Navbar";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Navbar />
          <Routes>
            {/* <Route path="/" element={<Home />}></Route> */}
            <Route path="/Home" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Contact" element={<Contact />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;