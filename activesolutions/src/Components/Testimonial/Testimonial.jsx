import "../Styles/lib/animate/animate.min.css";
import "../Styles/lib/owlcarousel/assets/owl.carousel.min.css";
import "../Styles/lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css";
import "../Styles/css/bootstrap.min.css"
const Testimonials = () => {
    
    return(
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
            <div className="text-center">
                <h6 className="text-primary text-uppercase">// Testimonios //</h6>
                <h2 className="mb-5">Mira lo que dicen nuestros clientes!</h2>
            </div>
            <div>
                <div className="testimonial-item text-center">
                    <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="img/testimonial-1.jpg" style={{width: '80px', height: '80px'}}/>
                    <h5 className="mb-0">Nicolas Grand Bourng</h5>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Gracias por el laburo! Me solucionó el problema del siena que no tenia inyeccion, en una hora. Muy recomendable!</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="img/testimonial-2.jpg" style={{width: '80px', height: '80px'}}/>
                    <h5 className="mb-0">Matias Riveiro</h5>

                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Un servicio impecable, de verdad. Me mantuvieron al tanto de todo, sin vueltas, y cuando agarré el auto estaba como nuevo. Para problemas mecánicos, este taller es el as bajo la manga, te juro.</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="img/testimonial-3.jpg" style={{width: '80px', height: '80px'}}/>
                    <h5 className="mb-0">Lucas Pereyra</h5>

                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Muy buen taller de electromecánica, Los pibes saben un montón y arreglaron mi auto en un toque. ¡Vuelvo sin dudas!.</p>
                    </div>
                </div>
                <div className="testimonial-item text-center">
                    <img className="bg-light rounded-circle p-2 mx-auto mb-3" src="img/testimonial-4.jpg" style={{width: '80px', height: '80px'}}/>
                    <h5 className="mb-0">Jhonatan Oliveria</h5>
                    <p>Profession</p>
                    <div className="testimonial-text bg-light text-center p-4">
                    <p className="mb-0">Un rayo la atención y la rapidez con la que laburan. Los chabones saben lo que hacen y no te meten fruta. Para mí, el mejor taller de electromecánica en el barrio..</p>
                    </div>
                </div>
            </div>
        </div>
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
    </div>
    )
}

export default Testimonials;