import { Routes, Route,BrowserRouter } from "react-router-dom"
import './App.css';
import Login from "./features/login/Login"
import Navbar from "./components/nav/Navbar"
import Home from "./features/home/Home"
import SubjectDashboard from "./features/subjects/SubjectDashboard"

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
      <Route path="/subjects" element={<Navbar />} >
        <Route exact path="/subjects" element={<SubjectDashboard />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App;
