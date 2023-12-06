import About from "../../Components/About/About"
import Carrousel from "../../Components/Carrousel/Carrousel"
import Fact from "../../Components/Fact/Fact"
import Servicios from "../../Components/Servicios/Servicios"
import Services from "../../Components/Sevices/Services"
import Testimonials from "../../Components/Testimonial/Testimonial"



const Home = () =>{
 return(
    <div>
        <Carrousel />
        <Services />
        <Fact></Fact>
        <About />
        <Servicios />
        <Testimonials />
    </div>
    )
}

export default Home;