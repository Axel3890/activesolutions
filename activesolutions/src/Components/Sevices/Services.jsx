import "../Styles/lib/animate/animate.min.css";
import "../Styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "../Styles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../Styles/css/bootstrap.min.css"
const Services = () =>{
    return(
        <div className="container-xxl py-5">
        <div className="container">
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-certificate fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Servicio de calidad</h5>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="d-flex bg-light py-5 px-4">
                        <i className="fa fa-users-cog fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Trabajadores expertos</h5>

                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="d-flex py-5 px-4">
                        <i className="fa fa-tools fa-3x text-primary flex-shrink-0"></i>
                        <div className="ps-4">
                            <h5 className="mb-3">Equipamiento moderno</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Services;