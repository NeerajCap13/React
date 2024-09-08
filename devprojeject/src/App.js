import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Home from "./Component/Home";
import Register from "./Component/Register";
import Landing from "./Component/Landingpage/Landing";

function App() {
  return (
    <>
      <BrowserRouter>
        <Home />
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
