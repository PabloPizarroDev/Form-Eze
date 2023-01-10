import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import compu from "../assets/pexels-element-digital-1051075.jpg";
import NavBar from "../components/Navbar";
import "../styles/home.css";

const d = document;
function contactForm() {
  // detecta el formulario y los inputs
  const $form = d.querySelector(".form"),
    $inputs = d.querySelectorAll(".form [required]");
  //por cada input hay un span  nota de error
  $inputs.forEach((input) => {
    const $span = d.createElement("span");
    $span.id = input.name;
    //agregarle el texto de title
    $span.textContent = input.title;
    //agregarle la clase de css
    $span.classList.add("contact-form-error", "none");
    //adonde va a estar el mensaje
    input.insertAdjacentElement("afterend", $span);
  });
  // la validacion para mostrar el msj cada vez que vaya escribiendo keyup
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(".form [required]")) {
      let $input = e.target,
        pattern = $input.pattern || $input.dataset.pattern;
      if (pattern && $input.value !== "") {
        let regex = new RegExp(pattern);
        return !regex.exec($input.value)
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
      if (!pattern) {
        return $input.value === ""
          ? d.getElementById($input.name).classList.add("is-active")
          : d.getElementById($input.name).classList.remove("is-active");
      }
    }
  });
  d.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("enviando formulario");
    const $loader = d.querySelector(".contact-form-loader"),
      $response = d.querySelector(".contact-form-response");
    $loader.classList.remove("none");

    fetch("https://formsubmit.co/ajax/pizarropabloandres@hotmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        console.log(json);
        $loader.classList.add("none");
        $response.classList.remove("none");
        $response.innerHTML = `<p>${json.message}</p>`;
        $form.reset();
      })
      .catch((err) => {
        console.log(err);
        let message =
          err.statusText || "Ocurrio un error al enviar intenta nuevamente";
        $response.innerHTML = `Error ${err.status} ${message}`;
      })
      .finally(() => {
        setTimeout(() => {
          $response.classList.add("none");
          $response.innerHTML = "";
        }, 3000);
      });
  });
}
d.addEventListener("DOMContentLoaded", contactForm);

const Principal = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
`;

const Home = () => {
  return (
    <Principal>
      <NavBar />
      <div className="general">
        <header className="hero">
          <div className="textos-hero">
            <div className="welcome-screen">
              <span>
                <h1>Turnos para Consulado</h1>
              </span>

              <span>
                <p>
                  Colaboramos en la obtecion de turnos para la obtencion de tu
                  ciudadania Espanola
                </p>
              </span>
            </div>
            <Link to="/contacto" className="cta">
              Contactame
            </Link>
          </div>
          <div
            className="svg-hero"
            style={{ height: " 150px", overflow: " hidden" }}
          >
            <svg
              viewBox="0 0 500 150"
              preserveAspectRatio="none"
              style={{ height: "100%", width: "100%" }}
            >
              <path
                d="M0.00,49.98 C149.99,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
                style={{ stroke: "none", fill: "#fff" }}
              ></path>
            </svg>
          </div>
        </header>

        <section className="wave-contenedor website">
          <img src={compu} alt="compu" />
          <div className="contenedor-textos-main">
            <h2 className="titulo left">
              Tenemos la mejor atención rapida y eficaz
            </h2>
            <p className="parrafo">
              Conocemos lo fastidioso que es la obtencion del turno, por este
              motivo, nuestro servicio consiste en brindar el soporte para
              agilizar la obtecion del mismo.
            </p>
            <Link to="/about" className="cta">
              Leer más
            </Link>
          </div>
        </section>

        <section className="info">
          <div className="contenedor">
            <h2 className="titulo left">
              Confía en Nosotros tus Trámites al Instante
            </h2>
            <p>
              No realizamos el cobro del servicio sin antes garantizar la
              obtencion del turno.
            </p>
          </div>
        </section>

        <section className="cards contenedor">
          <h2 className="titulo">Nuestros Servicios</h2>
          <div className="content-cards">
            <article className="card">
              <i className="far fa-clone"></i>
              <h3>Opción 1</h3>
              <p>Turno Individual</p>
              <p>
                $<b>100,00</b>
              </p>
              <Link to="/servicios" className="cta">
                Leer más
              </Link>
            </article>
            <article className="card">
              <i className="fas fa-database"></i>
              <h3>Opción 2</h3>
              <p>Turno Familiar (hasta 4 turnos)</p>
              <p>
                $<b>300,00</b>
              </p>
              <Link to="/servicios " className="cta">
                Leer más
              </Link>
            </article>
            <article className="card">
              <i className="far fa-object-group"></i>
              <h3>Opción 3</h3>
              <p>Contratacion mensual</p>
              <p>
                $<b>1000,00</b>
              </p>
              <Link to="/servicios" className="cta">
                Leer más
              </Link>
            </article>
          </div>
        </section>
        <div id="contacto" className="footer">
          <div className="contenedor">
            <h2 className="titulo">Contactenos</h2>
            <form action="" className="form">
              <input
                className="input"
                type="text"
                name="name"
                id=""
                placeholder="Escribe tu Nombre"
                title="El nombre solo acepta letras y espacios en blanco"
                pattern="^[A-Za-zÑñÁáÉéÍíÓóÚú1üÜ]+$"
                required
              />
              <input
                className="input"
                type="email"
                name="email"
                id=""
                placeholder="Email"
                title="Email incorrecto"
                pattern="^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$"
                required
              />
              <textarea
                className="input"
                name="comments"
                id=""
                cols="30"
                rows="10"
                placeholder="Mensaje"
                title="Tu comentario no debe exceder los 255 caracteres"
                data-pattern=" ^.{1,255}$"
                required
              ></textarea>
              <input className="input" type="submit" value="Enviar" />
              <div className="contact-form-loader none">
                <img src="" alt="cargando" />
              </div>
              <div className="contact-form-response none">
                <p>Los datos han sido enviados</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Principal>
  );
};

export default Home;
