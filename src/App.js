import { Routes, Route,BrowserRouter } from "react-router-dom"
import './App.css';
import Login from "./features/login/Login"
import Navbar from "./components/nav/Navbar"
import Home from "./features/home/Home"
import Register from "./features/register/Register"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Login />} >
      </Route>
      <Route path="/home" element={<Navbar />} >
        <Route exact path="/home" element={<Home />} />
      </Route>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;
