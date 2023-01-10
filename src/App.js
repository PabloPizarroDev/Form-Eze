import React, { useEffect, useRef, useState } from "react";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Form from "./elements/Form";
import CrearUsuario from "./elements/CrearUsuario";
/* import { useAuth0 } from "@auth0/auth0-react"; */
/* import LoginButton from "./components/LoginButton"; */
import Loader from "./components/Loader";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UsuarioLogeado from "./elements/UsuarioLogeado";
import Error404 from "./elements/Error404";
import PrivateRoute from "./elements/PrivateRoute";

import Home from "./elements/Home";
import About from "./elements/About";
import Servicios from "./elements/Servicios";
import { AnimatePresence } from "framer-motion";
import ScrollTriggerProxy from "./components/ScrollTriggerProxy";

const App = () => {
  //Logged va la logica de si esta logeado entre a form sino vuelva home ejemplo pongo dos botones
  const containerRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  /*  const { isLoading } = useAuth0();
  if (isLoading) return <Loading />; */

  useEffect(() => {
    setTimeout(() => {
      setLoaded(true);
    }, 3000);
  }, []);

  return (
    <LocomotiveScrollProvider
      options={{
        smooth: true,
        smartphone: {
          smooth: true,
        },
        table: {
          smooth: true,
        },
      }}
      watch={[]}
      containerRef={containerRef}
    >
      <AnimatePresence>
        {loaded ? null : <Loader />}
        <ScrollTriggerProxy />
      </AnimatePresence>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/servicios" element={<Servicios />} />
          {/*  
            <Boton onClick={() => setIsLogged(true)}>LogIn</Boton>
            <Boton onClick={() => setIsLogged(false)}>LogOut</Boton> */}
          <Route exact path="/usuario" element={<UsuarioLogeado />} />
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
    </LocomotiveScrollProvider>
  );
};

export default App;
