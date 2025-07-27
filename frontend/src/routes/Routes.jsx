// src/routes/Routes.jsx
import React from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "../components/pages/Index";
import IniciarSesion from "../components/pages/IniciarSesion";
import AuthenticatedHome from "../components/pages/AuthenticatedHome";
import RutaProtegida from "../components/componentes/RutasProtegidas";
import Navbar from "../components/layout/Navbar";      // navbar público
import NavHome from "../components/layout/NavHome";    // navbar para usuarios autenticados
import Footer from "../components/layout/Footer";
import Peliculas from "../components/pages/Peliculas";

// Componente Layout
const Layout = ({ children }) => {
  const location = useLocation();

  // Rutas privadas: usan NavHome y NO muestran Footer
  const rutasPrivadas = ["/home", "/peliculas"];
  const esRutaPrivada = rutasPrivadas.some((ruta) =>
    location.pathname.startsWith(ruta)
  );

  return (
    <div className="layout">
      {esRutaPrivada ? <NavHome /> : <Navbar />}
      <div className="content-area" style={{ display: "flex" }}>
        <main style={{ flex: 1 }}>{children}</main>
      </div>
      {!esRutaPrivada && <Footer />}
    </div>
  );
};

// Componente principal de rutas
const Rutas = () => (
  <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Index />
          </Layout>
        }
      />
      <Route
        path="/iniciar-sesion"
        element={
          <Layout>
            <IniciarSesion />
          </Layout>
        }
      />
      <Route
        path="/home"
        element={
          <RutaProtegida>
            <Layout>
              <AuthenticatedHome />
            </Layout>
          </RutaProtegida>
        }
      />
      <Route
        path="/peliculas"
        element={
          <RutaProtegida>
            <Layout>
              <Peliculas />
            </Layout>
          </RutaProtegida>
        }
      />
    </Routes>
  </BrowserRouter>
);

export default Rutas;
