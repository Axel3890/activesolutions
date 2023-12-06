
import './App.css';
import "./Components/Styles/lib/animate/animate.min.css";
import "./Components/Styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "./Components/Styles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "./Components/Styles/css/bootstrap.min.css"
import Home from './Views/Home/Home';
import { Routes, Route } from "react-router-dom"
import Contact from './Views/Contact/Contact';
import Topbar from './Components/Topbar/Topbar';
import Footer from './Components/Footer/Footer';
import Navbar from './Components/Navbar/Navbar';
import Serviciosdetail from './Views/Serviciosdetail/Serviciosdetail';
 

function App() {
  return (
    <div className="App">
      <Topbar></Topbar>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/servicios" element={<Serviciosdetail/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
