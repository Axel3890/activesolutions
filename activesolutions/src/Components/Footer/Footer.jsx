import "../Styles/lib/animate/animate.min.css";
import "../Styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "../Styles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../Styles/css/bootstrap.min.css"
import { Link } from "react-router-dom";
const Footer = () =>{
    return(
        <div className="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Direccion: </h4>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Provincia de Buenos Aires 3760</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+54 9 11 7639-5279</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>activesolutionselectro@gmail.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://wa.link/ovq3mg" target="blank"><i class="fa fa-phone"></i></a>
                        <a className="btn btn-outline-light btn-social" href="https://www.instagram.com/activesolutions.electro/" target="blank"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Horarios de atención</h4>
                    <h6 className="text-light">Lunes a sabados</h6>
                    <p className="mb-4">09.00 AM - 18.00 PM</p>
                    <h6 className="text-light">Domigos:</h6>
                    <p className="mb-0">Cerrado</p>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Servicios</h4>
                    <a className="btn btn-link" href="#servicios">Reparaciones</a>
                    <a className="btn btn-link" href="#servicios">Escaneo computarizado</a>
                    <a className="btn btn-link" href="#servicios">Servicios boroscopio</a>
                    <a className="btn btn-link" href="#servicios">Diagnosticos Nvl 1,2,3</a>
                </div>
                <div className="col-lg-3 col-md-6">
                    <h4 className="text-light mb-4">Siguenos en instagram</h4>
                    <p class="m-0"><i class="fab fa-instagram"></i><a href="https://www.instagram.com/activesolutions.electro/" target="blank">Active Solutions</a></p>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="copyright">
                <div className="row">
                    <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                        &copy; <a className="border-bottom" href="#">ActiveSolutions</a>, All Right Reserved.

            
                        Designed By <a className="border-bottom" href="https://htmlcodex.com">HTML Codex</a>
                    </div>
                    <div className="col-md-6 text-center text-md-end">
                        <div className="footer-menu">
                            <a href="">Home</a>
                            <a href="">Cookies</a>
                            <a href="">Help</a>
                            <a href="">FQAs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer;