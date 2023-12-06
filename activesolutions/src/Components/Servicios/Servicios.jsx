import "../Styles/lib/animate/animate.min.css";
import "../Styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "../Styles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../Styles/css/bootstrap.min.css"
const boroscopio = require("../Styles/img/boroscopio.png")
const diagnostico = require("../Styles/img/Diagnostico.png")
const escaneo = require("../Styles/img/Escaneo.png")
const Servicios = () =>{
    return(
        <div id="servicios" className="container-xxl service py-5">
        <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="text-primary text-uppercase">// Nuestros Servicios //</h6>
                <h2 className="mb-5">Echa un vistaso a Nuestros servicios</h2>
            </div>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="col-lg-4">
                    <div className="nav w-100 nav-pills me-4">
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                            <i className="fa fa-car-side fa-2x me-3"></i>
                            <h4 className="m-0">Escaneo computarizado</h4>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                            <i className="fa fa-car fa-2x me-3"></i>
                            <h4 className="m-0">Diagnosticos NVL 1, 2 Y 3</h4>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                            <i className="fa fa-cog fa-2x me-3"></i>
                            <h4 className="m-0">Servicio  de  boroscopio</h4>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                            <i className="fa fa-cog fa-2x me-3"></i>
                            <h4 className="m-0">Reparacion de Ecu's</h4>   
                        </button>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="tab-content w-100">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src={diagnostico}
                                            style={{objectFit: "cover"}} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">2 años de experiencia en electromecanica</h3>
                                    <p className="mb-4">Escaneo computarizado</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Incluye eliminacion de código de fallas</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Trabajadores capacitados</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Equipamiento moderno</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src={escaneo}
                                            style={{objectFit: "cover"}} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">2 años de experiencia en electromecanica</h3>
                                    <p className="mb-4">No cambies por cambiar, Con el uso de software y hardware se encuentra la raiz del problema</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Diagnostico Nvl 1: 1hs de analisis</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Diagnostico Nvl 2: 3hs de analisis: Fallas en momentos especificos</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Diagnostico Nvl 3: 5hs de analisis: Fallas esporádicas y aparecen en cualquier momento</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src={boroscopio}
                                            style={{objectFit: "cover"}} alt=""/>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">2 años de experiencia en electromecanica</h3>
                                    <p className="mb-4">Servicio de boroscopio: Evita y confirma el desarme en lugares de dificil acceso, con poca o nula visibilidad.</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Servicio de calidad</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Trabajadores capacitados</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Equipamiento moderno</p>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-4">
                            <div className="row g-4">
                                <div className="col-md-6" style={{minHeight: "350px"}}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute img-fluid w-100 h-100" src={diagnostico}
                                            style={{objectFit: "cover"}} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-3">2 años de experiencia en electromecanica</h3>
                                    <p className="mb-4">Diagnosticos y Reparacion de centralitas del automotor</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Servicios de diagnosis</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Servicios de antenas</p>
                                    <p><i className="fa fa-check text-success me-3"></i>Y de inmovilizadores</p>
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

export default Servicios;