import "../Styles/lib/animate/animate.min.css";
import "../Styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "../Styles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../Styles/css/bootstrap.min.css"
const about = require("../Styles/img/service2.png")

const About = () =>{
    return(
        <div id="about">
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-5">
                <div className="col-lg-6 pt-4" style={{ minHeight: '400px' }}>
                    <div className="position-relative h-100 wow fadeIn" data-wow-delay="0.1s">
                        <img className="position-absolute img-fluid h-100" src={about} style={{ objectFit: 'contain' }} alt="" />
                    </div>
                </div>
                <div className="col-lg-6">
                    <h1 className="mb-4"><span className="text-primary"></span> El mejor taller de electromecanica</h1>
                    <h6 className="text-primary text-uppercase">// Sobre nosotros //</h6>
                    <p className="mb-4">Somos una empresa dedicada a inyeccion electronica, trabajando con Autos, camionetas, camiones y autoelevadores</p>
                    <div className="row g-4 mb-3 pb-3">
                        <div className="col-12 wow fadeIn" data-wow-delay="0.1s">
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                    <span className="fw-bold text-secondary">01</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Profesionales y expertos</h6>
                                    <span>Trabajadores bien preparados y con mucha experiencia para brindar el mejor trabajo a tu auto</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeIn" data-wow-delay="0.3s">
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                    <span className="fw-bold text-secondary">02</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Servicio de calidad</h6>
                                    <span>Servicio de calidad garantizado para tu auto</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 wow fadeIn" data-wow-delay="0.5s">
                            <div className="d-flex">
                                <div className="bg-light d-flex flex-shrink-0 align-items-center justify-content-center mt-1" style={{ width: '45px', height: '45px' }}>
                                    <span className="fw-bold text-secondary">03</span>
                                </div>
                                <div className="ps-3">
                                    <h6>Equipamento moderno</h6>
                                    <span>Las mejores y ultimas herramientas para brindar el servicio que tu auto merece</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    )
}

export default About;