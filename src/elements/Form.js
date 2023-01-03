import React, { useState } from "react";

import {
  Boton,
  ContenedorBotonCentrado,
  ComponenteTextArea,
  Formulario,
  MensajeError,
  MensajeExito,
  Main,
} from "../styles/Formularios";
import ComponenteInput from "../components/ComponenteInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
/* import helpHttp from "../helpers/helpHttp"; */

/* const initialForm = {
  nombre: "",
  usuario: "",
  email: "",
  telefono: "",
  comentarios: "",
}; */
const Form = () => {
  const [correo, setCorreo] = useState({ campo: "", valido: null });
  const [comentarios, setComentarios] = useState(null);
  const [formularioValido, setFormularioValido] = useState(null);
  const [isLogged, setIsLogged] = useState(false);
  /*   const [form, setForm] = useState(initialForm);

  const [response, setResponse] = useState(null); */

  const expresiones = {
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    comentarios: /^.{1,255}$/, //comentario no mas de 255 caracteres
  };

  /*   const LogoutButton = () => {
    const { logout } = useAuth0();
    return <button onClick={() => logout()}>Logout</button>;
  }; */

  const onSubmit = (e) => {
    e.preventDefault();
    if (correo.valido === "true" && comentarios.valido === "true") {
      setFormularioValido(true);

      setCorreo({ campo: "", valido: null });
      setComentarios({ campo: "", valido: null });

      //Conexion a la base de datos
    } else {
      /*  if (setFormularioValido(true)) {
      alert("Enviando Formulario");

      helpHttp("https://formsubmit.co/ajax/pizarropabloandres@hotmail.com", {
        body: form,
        headers: {
          "Content-Type": "application/json",
          Accept: "Aplication/json",
        },
      })
        .post()
        .then((res) => {
          setResponse(true);
          setForm(initialForm);
          setTimeout(() => {
            setResponse(false);
          }, 3000);
        });
    }  */
      setFormularioValido(false);
    }
  };

  return (
    <Main>
      <Formulario action="" onSubmit={onSubmit}>
        <ComponenteInput
          estado={correo}
          cambiarEstado={setCorreo}
          tipo="email"
          label="Correo Electronico"
          placeholder="pablo@correo.com"
          name="correo"
          leyendaError="El correo solo puede contener letras, numeros, simbolos, sin espacios en blanco."
          expresionRegular={expresiones.correo}
          required
        />

        <ComponenteTextArea
          estado={comentarios}
          cambiarEstado={setComentarios}
          name="comentarios"
          tipo="text"
          label="Comentarios"
          cols="50"
          rows="5"
          placeholder="Escribe tu Consulta"
          leyendaError="Solo se pueden escribir 255 caracteres"
          expresionRegular={expresiones.comentarios}
          autoComplete="on"
          autoCapitalize="words"
          maxLength={255}
          required
        />
        {formularioValido === false && (
          <MensajeError>
            <p>
              <FontAwesomeIcon icon={faExclamationTriangle} />
              <b>Error:</b> Por favor rellena el formulario correctamente.
            </p>
          </MensajeError>
        )}

        <ContenedorBotonCentrado>
          <Boton type="submit">Enviar</Boton>
          {formularioValido === true && (
            <MensajeExito>
              Formulario enviado exitosamente
              {(isLogged === true) &
              <Boton onClick={() => setIsLogged(false)}>LogOut</Boton>}
            </MensajeExito>
          )}
        </ContenedorBotonCentrado>
      </Formulario>
    </Main>
  );
};

export default Form;
