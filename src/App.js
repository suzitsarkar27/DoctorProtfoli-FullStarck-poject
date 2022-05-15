import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Pages/Sherad/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home/Home";
import Appointment from "./Pages/Home/Appointment/Appointment";
import Contact from "./Pages/Home/Contact Us/Contact";
import Reviews from "./Pages/Home/Reviews/Reviews";
import About from "./Pages/Home/About/About";
import Login from "./Pages/Home/Login/Login";
import NotFound from "./Pages/Sherad/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route
          path="/appointment"
          element={<Appointment></Appointment>}
        ></Route>
        <Route path="/reviews" element={<Reviews></Reviews>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="about" element={<About></About>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
