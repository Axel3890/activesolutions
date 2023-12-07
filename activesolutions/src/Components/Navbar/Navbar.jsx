import "../Styles/lib/animate/animate.min.css";
import "../Styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "../Styles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../Styles/css/bootstrap.min.css"
import { Link } from "react-router-dom";
const logo = require("../Styles/img/logo-png.png")
const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg bg-white navbar-light shadow sticky-top p-0">
        <a href="index.html" className="navbar-brand d-flex align-items-center px-4 px-lg-5">
            <img src={logo}/>
        </a>
        <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav ms-auto p-4 p-lg-0">
                <Link to ="/"><a href="index.html" className="nav-item nav-link active">Inicio</a></Link>
                <a href="#about" className="nav-item nav-link">Sobre nosotros</a>
                <a href="#servicios" className="nav-item nav-link">Servicios</a>
                <Link to="/contact"><a href="" className="nav-item nav-link">Contactanos</a></Link>
            </div>
            <Link to="/contact"><a href="" className="btn btn-primary py-4 px-lg-5 d-none d-lg-block">Obten tu presupuesto<i className="fa fa-arrow-right ms-3"></i></a></Link>
        </div>
    </nav>
    )
};

export default Navbar;