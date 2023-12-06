import "../Styles/lib/animate/animate.min.css";
import "../Styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "../Styles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../Styles/css/bootstrap.min.css"

const Topbar = () => {
    return(
        <div class="container-fluid bg-light p-0">
        <div class="row gx-0 d-none d-lg-flex">
            <div class="col-lg-7 px-5 text-start">
                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small class="fa fa-map-marker-alt text-primary me-2"></small>
                    <small>Provincia de Buenos Aires 3760</small>
                </div>
                <div class="h-100 d-inline-flex align-items-center py-3">
                    <small class="far fa-clock text-primary me-2"></small>
                    <small>Lun - Vier : 08.00 AM - 18.00 PM</small>
                </div>
            </div>
            <div class="col-lg-5 px-5 text-end">
                <div class="h-100 d-inline-flex align-items-center py-3 me-4">
                    <small class="fa fa-phone-alt text-primary me-2"></small>
                    <a href="https://wa.link/ovq3mg" target="blank"><small>+54 9 11 7639-5279</small></a>
                </div>
                <div class="h-100 d-inline-flex align-items-center">
                    <a class="btn btn-sm-square bg-white text-primary me-1" href=""><i class="fab fa-facebook-f"></i></a>
                    <a class="btn btn-sm-square bg-white text-primary me-1" href="https://wa.link/ovq3mg" target="blank"><i class="fa fa-phone"></i></a>
                    <a class="btn btn-sm-square bg-white text-primary me-0" href="https://www.instagram.com/activesolutions.electro/" target="blank"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>
    )
};

export default Topbar;