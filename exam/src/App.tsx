import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import SignUp from "./Pages/SignUp";
import Cart from "./Pages/Cart";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} /> 
        <Route path="/Cart" element={<Cart/>} />    
        <Route path="">
          <Route path="/Home" element={<Home />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
