import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
  
  <BrowserRouter>
      <Routes>
        <Route element={<Login/>} path="/login"/>
        <Route element={<Signup/>} path="/register"/>
        <Route element={<Home/>} path="/home"/>
      </Routes> 
  </BrowserRouter>


    </div>
  );
}

export default App;
