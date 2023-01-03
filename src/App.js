import React, { useState } from "react";
import Form from "./elements/Form";
import CrearUsuario from "./elements/CrearUsuario";
import { useAuth0 } from "@auth0/auth0-react";
/* import LoginButton from "./components/LoginButton"; */
import Loader from "./components/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./elements/Home";
import Error404 from "./elements/Error404";
import PrivateRoute from "./elements/PrivateRoute";
import MainVideo from "./assets/pexels-james-cheney-6662348.mp4";

import { Boton, Section, VideoContainer } from "./styles/Formularios";

const App = () => {
  //Logged va la logica de si esta logeado entre a form sino vuelva home ejemplo pongo dos botones
  const [isLogged, setIsLogged] = useState(false);
  const { isLoading } = useAuth0();
  if (isLoading) return <Loader />;

  return (
    <Section>
      <VideoContainer>
        <Boton onClick={() => setIsLogged(true)}>LogIn</Boton>

        <Boton onClick={() => setIsLogged(false)}>LogOut</Boton>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/crearcuenta" element={<CrearUsuario />} />
            <Route element={<PrivateRoute isLogged={isLogged} />}>
              <Route exact path="/form" element={<Form />} />
            </Route>

            <Route
              exact
              path="/form"
              element={<PrivateRoute component={Form} />}
            />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
        <video src={MainVideo} type="video/mp4" autoPlay muted loop />
      </VideoContainer>
    </Section>
  );
};

export default App;
