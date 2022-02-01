import { Routes, Route,BrowserRouter } from "react-router-dom"
import './App.css';
import Login from "./features/login/Login"
import Navbar from "./components/nav/Navbar"
import Home from "./features/home/Home"

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
    </Routes>
  </BrowserRouter>
  )
}

export default App;
