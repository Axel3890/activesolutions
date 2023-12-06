import "../Styles/lib/animate/animate.min.css";
import "../Styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "../Styles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../Styles/css/bootstrap.min.css"
const mecanica = require("../Styles/img/mecanica2.png")
const Carrousel = () =>{
    return(
        <div className="container-fluid p-0 mb-5">
        <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="w-100" src={mecanica} alt="Image" style={{ filter: 'blur(3px) brightness(0.5)', width: '100%' }}/>
                    <div className="carousel-caption d-flex align-items-center">
                        <div className="container">
                            <div className="row align-items-center justify-content-center justify-content-lg-start">
                                <div className="col-lg-7 text-center text-lg-start">
                                    <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Active Solutions //</h6>
                                    <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Taller de <br></br>electromecanica</h1>
                                </div>
                                <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
                                    <img className="img-fluid" src="img/carousel-1.png" alt=""/>
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

export default Carrousel;