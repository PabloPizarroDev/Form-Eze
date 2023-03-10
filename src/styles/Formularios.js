import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const colores = {
  borde: "#0075FF",
  error: "#FC5405",
  exito: "#1ed12d",
};

const Main = styled.main`
  main {
    position: absolute;
    max-width: 800px;
    width: 90%;
    margin: auto;
    padding: 40px;
  }
`;
const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
const Label = styled.label`
  display: block;
  font-weight: 700;
  padding: 10px;
  min-height: 40px;
  cursor: pointer;

  ${(props) =>
    props.valido === "false" &&
    css`
      color: ${colores.error};
    `}
`;

const GrupoInput = styled.div`
  position: relative;
  z-index: 90;
`;

const Input = styled.input`
  width: 100%;
  background-color: #fff;
  border-radius: 3px;
  height: 45px;
  line-height: 45px;
  padding: 0 40px 0 10px;
  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}
`;

const LeyendaError = styled.p`
  font-size: 12px;
  margin-bottom: 0;
  color: ${colores.error};
  display: none;

  ${(props) =>
    props.valido === "true" &&
    css`
      display: none;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      display: block;
    `}
`;

const IconoValidacion = styled(FontAwesomeIcon)`
  position: absolute;
  right: 10px;
  bottom: 14px;
  z-index: 100;
  font-size: 16px;
  opacity: 0;

  ${(props) =>
    props.valido === "true" &&
    css`
      opacity: 1;
      color: ${colores.exito};
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      opacity: 1;
      color: ${colores.error};
    `}
`;

const ContenedorTerminos = styled.div`
  grid-column: span 2;
  input {
    margin-right: 10px;
  }
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const ContenedorBotonCentrado = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: span 2;
  @media (max-width: 800px) {
    grid-column: span 1;
  }
`;

const Boton = styled.button`
  background-color: transparent;

  color: #fff;
  font-size: 1rem;
  margin: 20px;
  padding: 1rem 1.5rem;
  font-family: "Kaushan Script";
  font-weight: semibold;
  border: 2px solid #eee;
  border-radius: 0.5rem;
  box-shadow: 0.5rem 0.5rem 1rem #ccc, -0.5rem -0.5rem 1rem #fff;
  cursor: pointer;
  transition: all 1s ease;

  &:hover {
    box-shadow: 0.5rem 0.5rem 1rem #fff, -0.5rem -0.5rem 1rem #ccc;
  }
  &:active {
    box-shadow: inset 0.2rem 0.2rem 1rem #fff, inset -0.2rem -0.2rem 1rem #ccc;
  }
`;

const MensajeExito = styled.p`
  font-size: 14px;
  color: ${colores.exito};
`;

const MensajeError = styled.div`
  height: 45px;
  line-height: 45px;
  background-color: #f66060;
  padding: 0px 15px;
  border-radius: 3px;
  grid-column: span 2;
  p {
    margin: 0;
  }
  b {
    margin-left: 10px;
  }
`;
const ComponenteTextArea = styled.textarea`
  width: 100%;
  background-color: #fff;
  overflow: hidden;
  border-radius: 3px;
  height: 100px;
  padding: 0 40px 0 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  grid-column: span 2;

  transition: 0.3s ease all;
  border: 3px solid transparent;

  &:focus {
    border: 3px solid ${colores.borde};
    outline: none;
    box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
  }
  ${(props) =>
    props.valido === "true" &&
    css`
      border: 3px solid transparent;
    `}
  ${(props) =>
    props.valido === "false" &&
    css`
      border: 3px solid ${colores.error} !important;
    `}
     @media (max-width: 800px) {
    grid-column: span 1;
  }
`;
const Section = styled.section`
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  background-image: url("../assets/background.svg");
`;
const VideoContainer = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  video {
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    z-index: -100;
    background-size: cover;

    @media (max-width: 48em) {
      object-position: center 10%;
    }
  }
  @media (max-width: 38em) {
    object-position: center 50%;
  }
`;
const DarkOverlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: rgba(32, 32, 32, 0.6);
`;

export {
  Formulario,
  Label,
  GrupoInput,
  Input,
  LeyendaError,
  IconoValidacion,
  Boton,
  ContenedorBotonCentrado,
  ContenedorTerminos,
  MensajeExito,
  MensajeError,
  ComponenteTextArea,
  Main,
  Section,
  VideoContainer,
  DarkOverlay,
};
