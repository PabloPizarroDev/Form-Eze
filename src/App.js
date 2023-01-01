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
import { Boton } from "./styles/Formularios";

const App = () => {
  //Logged va la logica de si esta logeado entre a form sino vuelva home ejemplo pongo dos botones
  const [isLogged, setIsLogged] = useState(false);

  const { isLoading } = useAuth0();
  if (isLoading) return <Loader />;

  return (
    <main>
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
    </main>
  );
};

export default App;
