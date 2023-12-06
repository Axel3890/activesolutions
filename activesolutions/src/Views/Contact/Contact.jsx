import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert";


const Contact = ()=>{
    const [formData, setFormData] = useState({
        nombre_cliente: "",
        email_cliente: "",
        asunto: "",
        mensaje_cliente: "",
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
      
      const handleSubmit = async (e) => {
        e.preventDefault();
    

        try {

            const response = await axios.post("https://activeapiback-15z427mcg-axel-gomezs-projects.vercel.app/enviando-email-con-resend-node-express", formData);
      

            console.log("Correo electrónico enviado con éxito:", response.data);
            Swal({
                title: "Éxito",
                text: "Correo electrónico enviado con éxito",
                icon: "success",
                button: "OK",
              });
          } catch (error) {

            console.error("Error al enviar el correo electrónico:", error.message);
            Swal({
                title: "Error",
                text: "Hubo un error al enviar el correo electrónico",
                icon: "error",
                button: "OK",
              });
          }

    

        setFormData({
          nombre_cliente: "",
          email_cliente: "",
          asunto: "",
          mensaje_cliente: "",
        });
      };

    return(
        <div>
            <div class="container-xxl py-5">
        <div class="container">
            <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 class="text-primary text-uppercase">// Contactanos //</h6>
                <h1 class="mb-5">Contactanos por cualquier consulta</h1>
            </div>
            <div class="row g-4">
                <div class="col-12">
                    <div class="row gy-4">
                        <div class="col-md-4">
                            <div class="bg-light d-flex flex-column justify-content-center p-4">
                                <h5 class="text-uppercase">// Email //</h5>
                                <p class="m-0"><i class="fa fa-envelope-open text-primary me-2"></i>activesolutionselectro@gmail.com</p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="bg-light d-flex flex-column justify-content-center p-4">
                                <h5 class="text-uppercase">// Instagram //</h5>
                                <p class="m-0"><i class="fab fa-instagram"></i><a href="https://www.instagram.com/activesolutions.electro/" target="blank">Active Solutions</a></p>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="bg-light d-flex flex-column justify-content-center p-4">
                                <h5 class="text-uppercase">// Whatsapp //</h5>
                                <p class="m-0"><i class="fa fa-envelope-open text-primary me-2"></i><a href="https://wa.link/ovq3mg" target="blank"><small><i class="fa fa-phone"></i>+54 9 11 7639-5279</small></a>
</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                    <iframe class="position-relative rounded w-100 h-100"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3288.2533878533864!2d-58.8022641!3d-34.4964599!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc990a615ee8e7%3A0x297ec1e95cb964eb!2sPcia%20de%20Buenos%20Aires%203800%2C%20B1660EHV%20Del%20Viso%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1701104834890!5m2!1ses-419!2sar"
                        frameborder="0" style={{minHeight: '350px', border: '0'}} allowfullscreen="" aria-hidden="false"
                        tabindex="0"></iframe>
                </div>
                <div class="col-md-6">
                    <div class="wow fadeInUp" data-wow-delay="0.2s">
                        <form onSubmit={handleSubmit}>
                            <div class="row g-3">
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="text" class="form-control"
                                         id="name"
                                         name="nombre_cliente"
                                         placeholder="Your Name"
                                         value={formData.nombre_cliente} 
                                         onChange={handleChange}
                                         required
                                         autoFocus/>
                                        <label for="name">Tu nombre</label>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-floating">
                                        <input type="email"
                                        class="form-control"
                                        id="email"
                                        name="email_cliente"
                                        value={formData.email_cliente}
                                        onChange={handleChange}
                                        required
                                        placeholder="Your Email"/>
                                        <label for="email">Tu email</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <input type="text"
                                        class="form-control"
                                        id="subject"
                                        name="asunto"
                                        value={formData.asunto}
                                        onChange={handleChange}
                                        required
                                        placeholder="Subject" />
                                        <label for="subject">Asunto</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-floating">
                                        <textarea class="form-control"
                                        placeholder="Leave a message here"
                                        name="mensaje_cliente"
                                        value={formData.mensaje_cliente}
                                        onChange={handleChange}
                                        id="message"
                                        required
                                        style={{height: '100px'}}></textarea>
                                        <label for="message">Mensaje</label>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <button class="btn btn-primary w-100 py-3" type="submit">Enviar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
        </div>
    )
}

export default Contact;